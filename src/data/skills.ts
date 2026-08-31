import { Database, Layers, Smartphone, Terminal, Bot } from "@lucide/astro";

import figmaIcon from "../assets/tech-icons/figma.svg?url";
import reactIcon from "../assets/tech-icons/react.svg?url";
import typescriptIcon from "../assets/tech-icons/typescript.svg?url";
import htmlIcon from "../assets/tech-icons/html.svg?url";
import vueIcon from "../assets/tech-icons/vue.svg?url";
import tailwindIcon from "../assets/tech-icons/tailwindcss.svg?url";
import nextIcon from "../assets/tech-icons/nextdotjs.svg?url";
import nuxtIcon from "../assets/tech-icons/nuxt.svg?url";
import astroIcon from "../assets/tech-icons/astro.svg?url";
import laravelIcon from "../assets/tech-icons/laravel.svg?url";
import phpIcon from "../assets/tech-icons/php.svg?url";
import pythonIcon from "../assets/tech-icons/python.svg?url";
import fastapiIcon from "../assets/tech-icons/fastapi.svg?url";
import nodeIcon from "../assets/tech-icons/nodedotjs.svg?url";
import postgresqlIcon from "../assets/tech-icons/postgresql.svg?url";
import convexIcon from "../assets/tech-icons/convex.svg?url";
import mysqlIcon from "../assets/tech-icons/mysql.svg?url";
import clerkIcon from "../assets/tech-icons/clerk.svg?url";
import dockerIcon from "../assets/tech-icons/docker.svg?url";
import cloudflareIcon from "../assets/tech-icons/cloudflare.svg?url";
import amazonS3Icon from "../assets/tech-icons/amazon-s3.svg?url";
import vercelIcon from "../assets/tech-icons/vercel.svg?url";
import railwayIcon from "../assets/tech-icons/railway.svg?url";
import expoIcon from "../assets/tech-icons/expo.svg?url";
import codexIcon from "../assets/tech-icons/codex.svg?url";
import claudeIcon from "../assets/tech-icons/claude.svg?url";
import antigravityIcon from "../assets/tech-icons/antigravity.svg?url";

export const techIcons: Record<string, string> = {
  "React": reactIcon,
  "React Native": reactIcon,
  "TypeScript": typescriptIcon,
  "HTML": htmlIcon,
  "Tailwind CSS": tailwindIcon,
  "Next.js": nextIcon,
  "Nuxt.js": nuxtIcon,
  "Vue.js": vueIcon,
  "Astro": astroIcon,
  "Figma": figmaIcon,
  "Laravel": laravelIcon,
  "PHP": phpIcon,
  "Python": pythonIcon,
  "FastAPI": fastapiIcon,
  "Fast API": fastapiIcon,
  "Node.js": nodeIcon,
  "PostgreSQL": postgresqlIcon,
  "Convex DB": convexIcon,
  "MySQL": mysqlIcon,
  "Clerk": clerkIcon,
  "Docker": dockerIcon,
  "Cloudflare": cloudflareIcon,
  "Amazon S3": amazonS3Icon,
  "Vercel": vercelIcon,
  "Railway": railwayIcon,
  "Expo": expoIcon,
  "Expo Router": expoIcon,
  "Codex": codexIcon,
  "Claude Code": claudeIcon,
  "Antigravity": antigravityIcon,
};

export interface SkillGroup {
  title: string;
  icon: typeof Layers;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Layers,
    items: ["React", "TypeScript", "HTML", "Tailwind CSS", "Next.js", "Astro", "Figma", "Nuxt.js", "Vue.js"],
  },
  {
    title: "Backend",
    icon: Terminal,
    items: ["Laravel", "PHP", "Python", "FastAPI", "Node.js", "TypeScript", "PostgreSQL", "MySQL", "Convex DB", "Clerk"],
  },
  {
    title: "Cloud & DevOps",
    icon: Database,
    items: ["Docker", "Cloudflare", "Amazon S3", "Vercel", "Railway"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo", "Expo Router"],
  },
  {
    title: "AI Agents",
    icon: Bot,
    items: ["Codex", "Claude Code", "Antigravity"],
  },
];
