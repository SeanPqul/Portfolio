import type { ImageMetadata } from "astro";

import morataLandingImage from "../assets/projects/fmmcbs/morata_landing.png";
import fmmCbsLandingImage from "../assets/projects/fmmcbs/fmm_cbs_landing.png";
import fukurouCoverImage from "../assets/projects/fukurou/fukurou_cover.png";
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
    id: "fukurou",
    title: "Fukurou — Automated Schedule Import & Shift Management",
    description:
      "Mobile schedule organizer — extracts shifts, timetables, and rosters from images, PDFs, and spreadsheets with live countdowns and Android widgets.",
    image: fukurouCoverImage,
    imageAlt: "Fukurou mobile schedule import and shift management app",
    imagePosition: "object-center",
    categoryPills: ["Mobile App", "OCR", "Productivity"],
    stack: "React Native • FastAPI • PaddleOCR • PostgreSQL",
    delay: "",
    cta: { type: "modal", label: "Details", target: "fukurou-modal" },
  },
  {
    id: "fmmcbs-ops",
    title: "F.M. Morata Customs Brokerage & Law Firm",
    description:
      "Operations system for brokerage and law firm workflows — import/export transaction tracking, legal document records, and archiving.",
    image: morataLandingImage,
    imageAlt: "F.M. Morata Customs Brokerage & Law Firm screenshot",
    imagePosition: "object-top",
    categoryPills: ["Web App", "Logistics", "Legal"],
    stack: "React • Tailwind CSS • Laravel • MySQL",
    delay: "60ms",
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
    delay: "120ms",
    cta: { type: "link", label: "Visit", href: "https://blog.fmmcbs.com" },
  },
  {
    id: "emedicard",
    title: "eMediCard — Digital Health Card Platform",
    description:
      "Digital health card platform for Davao City — applicant submissions, document verification, and QR cards.",
    image: emedicardLandingImage,
    imageAlt: "eMediCard digital platform landing page",
    imagePosition: "object-top",
    categoryPills: ["Mobile App", "Web App", "Healthcare"],
    stack: "React Native • Expo • Next.js • Convex • Clerk",
    delay: "180ms",
    cta: { type: "modal", label: "Details", target: "emedicard-modal" },
  },
  {
    id: "readorama",
    title: "Readorama — Mobile Book Marketplace",
    description:
      "Mobile marketplace UI/UX design for book exchange and acquisition — community trade flows, categorized discovery, and checkout prototypes in Figma.",
    image: readoramaPreviewImage,
    imageAlt: "Readorama mobile marketplace UI/UX design presentation",
    imagePosition: "object-center",
    categoryPills: ["UI/UX Design", "Figma"],
    stack: "Figma • UI/UX Design • Wireframing • Prototyping",
    delay: "240ms",
    cta: { type: "modal", label: "Details", target: "readorama-modal" },
  },
];
