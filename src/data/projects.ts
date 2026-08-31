import type { ImageMetadata } from "astro";

import morataLandingImage from "../assets/projects/fmmcbs/morata_landing.png";
import fmmCbsLandingImage from "../assets/projects/fmmcbs/fmm_cbs_landing.png";
import emedicardLandingImage from "../assets/projects/emedicard/landing-page.png";
import readoramaPreviewImage from "../assets/projects/readorama/readorama_purpose.png";

export type ProjectCta =
  | { type: "locked"; label: string }
  | { type: "link"; label: string; href: string }
  | { type: "modal"; label: string; target: string };

export interface Project {
  id: string;
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  imagePosition: "object-top" | "object-center";
  categoryPills: string[];
  stack: string;
  /** Inline style transition-delay for staggered reveal, e.g. "150ms" */
  delay: string;
  cta: ProjectCta;
}

export const projects: Project[] = [
  {
    id: "fmmcbs-ops",
    title: "F.M. Morata Customs Brokerage & Law Firm",
    description:
      "Operations system for brokerage and law firm workflows — import/export transaction tracking, legal document records, and archiving.",
    image: morataLandingImage,
    imageAlt: "F.M. Morata Customs Brokerage & Law Firm screenshot",
    imagePosition: "object-top",
    categoryPills: ["Web Application", "Logistics", "Legal"],
    stack: "React • Tailwind CSS • Laravel • MySQL",
    delay: "",
    cta: { type: "locked", label: "Internship Work" },
  },
  {
    id: "fmmcbs-site",
    title: "F.M. Morata Customs Brokerage & Law Firm",
    description:
      "Corporate website for a customs brokerage firm — showcasing services, destinations, and inquiries.",
    image: fmmCbsLandingImage,
    imageAlt: "F.M. Morata Customs Brokerage & Law Firm landing screen",
    imagePosition: "object-top",
    categoryPills: ["Static Website"],
    stack: "React • Tailwind CSS • Resend",
    delay: "80ms",
    cta: { type: "link", label: "Visit", href: "https://blog.fmmcbs.com" },
  },
  {
    id: "emedicard",
    title: "eMediCard",
    description:
      "Digital health card platform for Davao City — applicant submissions, document verification, and QR cards.",
    image: emedicardLandingImage,
    imageAlt: "eMediCard digital platform landing page",
    imagePosition: "object-top",
    categoryPills: ["Web Application", "Healthcare", "City System"],
    stack: "React Native • Expo • Next.js • Convex • Clerk",
    delay: "150ms",
    cta: { type: "modal", label: "Details", target: "emedicard-modal" },
  },
  {
    id: "readorama",
    title: "Readorama",
    description:
      "Mobile marketplace UI/UX design for book exchange and acquisition — community trade flows, categorized discovery, and checkout prototypes in Figma.",
    image: readoramaPreviewImage,
    imageAlt: "Readorama mobile marketplace UI/UX design presentation",
    imagePosition: "object-center",
    categoryPills: ["UI/UX Design", "Figma"],
    stack: "Figma • UI/UX Design • Wireframing • Prototyping",
    delay: "220ms",
    cta: { type: "modal", label: "Details", target: "readorama-modal" },
  },
];
