import { ExternalLink, Mail } from "@lucide/astro";

export const cvHref = "/docs/cv.pdf";

export const navItems = ["Projects", "Skills", "Experience", "Contact"];

export interface ProfileLink {
  id: string;
  label: string;
  href: string;
  icon: typeof ExternalLink;
}

export const profileLinks: ProfileLink[] = [
  {
    id: "link-github",
    label: "GitHub",
    href: "https://github.com/SeanPqul",
    icon: ExternalLink,
  },
  {
    id: "link-linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sean-paul-lapasanda-219117241/",
    icon: ExternalLink,
  },
  {
    id: "link-email",
    label: "Email",
    href: "mailto:seanpaullapasanda@gmail.com",
    icon: Mail,
  },
];
