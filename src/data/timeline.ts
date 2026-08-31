import { Briefcase, Code, GraduationCap } from "@lucide/astro";
import McDonaldsIcon from "@/components/McDonaldsIcon.astro";

export interface TimelineItem {
  id: string;
  type: "experience" | "education";
  role: string;
  company: string;
  date: string;
  bullets: string[];
  highlight: boolean;
  icon: typeof Briefcase;
  accentColor: string;
  borderColor: string;
  innerGlowColor: string;
  glowColor: string;
  dotColor: string;
  tag: string;
  techTags: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    id: "ojt",
    type: "experience",
    role: "Software Developer Intern / OJT",
    company: "F.M. Morata Customs Brokerage & Law Firm",
    date: "Feb 2026 — May 2026",
    bullets: [
      "Built backend REST APIs using Laravel, implementing request validation and role access policies.",
      "Developed frontend features using React, TypeScript, and Vite, incorporating modular components and routing states.",
      "Improved document upload and transaction filtering workflows for brokerage operations."
    ],
    highlight: true,
    icon: Briefcase,
    accentColor: "text-mint",
    borderColor: "hover:border-mint/30",
    innerGlowColor: "group-hover:bg-mint/10",
    glowColor: "bg-mint/5",
    dotColor: "before:bg-mint",
    tag: "OJT Internship",
    techTags: ["Laravel", "React", "TypeScript", "MySQL"]
  },
  {
    id: "education",
    type: "education",
    role: "BS in Information Technology (BSIT)",
    company: "STI College Davao",
    date: "2022 — 2026",
    bullets: [
      "Studied core computer science and IT concepts, specializing in database systems, computer networking, and system design.",
      "Developed the eMediCard Capstone web and mobile health card management system using React Native, Expo, and Convex NoSQL.",
      "Implemented mobile QR code scanning verification and shared TypeScript schema validations across backend functions."
    ],
    highlight: false,
    icon: GraduationCap,
    accentColor: "text-sky",
    borderColor: "hover:border-sky/30",
    innerGlowColor: "group-hover:bg-sky/10",
    glowColor: "bg-sky/5",
    dotColor: "before:bg-sky",
    tag: "Academic Program",
    techTags: ["Database Management", "Systems Analysis", "Network Design", "Software Engineering", "OOP"]
  },
  {
    id: "mcdonalds",
    type: "experience",
    role: "Crew Trainer",
    company: "McDonald's Philippines",
    date: "Sep 2022 — Apr 2026",
    bullets: [
      "Trained and mentored new crew members on kitchen stations, operational procedures, and safety guidelines.",
      "Performed standard kitchen production and service crew duties while executing crew trainer responsibilities.",
      "Demonstrated strong time management by balancing shifts and training duties alongside full-time college studies."
    ],
    highlight: false,
    icon: McDonaldsIcon,
    accentColor: "text-amber",
    borderColor: "hover:border-amber/30",
    innerGlowColor: "group-hover:bg-amber/10",
    glowColor: "bg-amber/5",
    dotColor: "before:bg-amber",
    tag: "Operational Focus",
    techTags: ["Operations", "Time Management", "Teamwork"]
  },
  {
    id: "shs",
    type: "education",
    role: "TVL-ICT (CSS) NCII",
    company: "Cabantian National High School",
    date: "2020 — 2022",
    bullets: [
      "Completed the Technical-Vocational-Livelihood (TVL) Track, specializing in the Information and Communications Technology (ICT) Strand.",
      "Studied networking principles and completed hands-on training in computer systems installation, diagnostics, and network configuration.",
      "Completed specialized Computer Systems Servicing (CSS) NC II server installation training at Interface Computer College through the Joint Delivery Voucher Program (JDVP), successfully earning the TESDA NC II credential."
    ],
    highlight: false,
    icon: Code,
    accentColor: "text-[#a78bfa]",
    borderColor: "hover:border-[#a78bfa]/30",
    innerGlowColor: "group-hover:bg-[#a78bfa]/10",
    glowColor: "bg-[#a78bfa]/5",
    dotColor: "before:bg-[#a78bfa]",
    tag: "Secondary Education",
    techTags: ["Computer Systems Servicing", "Computer Networking", "Server Configuration"]
  },
];
