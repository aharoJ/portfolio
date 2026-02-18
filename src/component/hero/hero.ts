// ═══════════════════════════════════════════════════════════════
// path: src/component/hero/hero.ts
// ═══════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH.
// Both HeroDesktop and HeroMobile import from here.
//
// Name, title, description, photo path, and navigation links.
// Update content here — never inside a component file.
//
// ═══════════════════════════════════════════════════════════════

export interface HeroLink {
  label: string;
  href: string;
}

export interface HeroData {
  name: string;
  title: string;
  description: string;
  photo: string;
  links: HeroLink[];
}

export const hero: HeroData = {
  name: "Angel J. Haro",
  title: "Software Engineer",
  description:
    "Building high-performance systems and polished interfaces. I care about speed, reliability, and craft — from the database to the pixel.",
  photo: "/profile/aharoJ.jpeg",
  links: [
    { label: "GitHub", href: "https://github.com/aharoJ" },
    { label: "LinkedIn", href: "https://linkedin.com/in/aharoj" },
    { label: "Twitter", href: "https://twitter.com/ahaaborern" },
    { label: "Resume", href: "/resume.pdf" },
  ],
};
