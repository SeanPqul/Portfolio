import type { APIRoute } from "astro";

export const prerender = false;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 3;
const MAX_MESSAGE_LENGTH = 2000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

function getField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientKey(request: Request, clientAddress?: string) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || clientAddress || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  current.count += 1;
  rateLimitStore.set(key, current);
  return current.count > MAX_REQUESTS_PER_WINDOW;
}

async function verifyTurnstile(token: string, remoteIp: string) {
  const secret = import.meta.env.TURNSTILE_SECRET_KEY;

  if (!secret) return true;
  if (!token) return false;

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({
      secret,
      response: token,
      remoteip: remoteIp,
    }),
  });

  if (!response.ok) return false;

  const result = await response.json() as { success?: boolean };
  return result.success === true;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return jsonResponse({ message: "Invalid form submission." }, 400);
  }

  const honeypot = getField(formData, "website");
  if (honeypot) {
    return jsonResponse({ message: "Message received." });
  }

  const name = getField(formData, "name");
  const email = getField(formData, "email").toLowerCase();
  const message = getField(formData, "message");
  const remoteIp = getClientKey(request, clientAddress);

  if (isRateLimited(`ip:${remoteIp}`) || isRateLimited(`email:${email}`)) {
    return jsonResponse({ message: "Too many messages. Please try again later." }, 429);
  }

  if (name.length < 2 || name.length > 80) {
    return jsonResponse({ message: "Please enter a valid name." }, 400);
  }

  if (!isValidEmail(email) || email.length > 120) {
    return jsonResponse({ message: "Please enter a valid email address." }, 400);
  }

  if (message.length < 10 || message.length > MAX_MESSAGE_LENGTH) {
    return jsonResponse({ message: "Please keep your message between 10 and 2000 characters." }, 400);
  }

  const turnstileToken = getField(formData, "cf-turnstile-response");
  const turnstileOk = await verifyTurnstile(turnstileToken, remoteIp);

  if (!turnstileOk) {
    return jsonResponse({ message: "Verification failed. Please refresh and try again." }, 400);
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const contactToEmail = import.meta.env.CONTACT_TO_EMAIL;
  const contactFromEmail = import.meta.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !contactToEmail || !contactFromEmail) {
    return jsonResponse({ message: "Contact form is not configured yet. Please use the email link instead." }, 503);
  }

  const emailText = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: contactFromEmail,
      to: [contactToEmail],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: emailText,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    console.error("Resend contact email failed:", errorText);
    return jsonResponse({ message: "Message could not be sent. Please try again later." }, 502);
  }

  return jsonResponse({ message: "Message sent." });
};
