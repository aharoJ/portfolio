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
    "Maybe each human being lives in a unique world, a private world different from those inhabited and experienced by all other humans. If reality differs from person to person, can we speak of reality singular, or shouldn't we really be talking about plural realities? ~ Philip K. Dick",
  // photo: "/profile/aharoJ.jpeg",
  photo: "/profile/sample_one.JPG",
  // photo: "/profile/sample_two.JPG",
  links: [
    { label: "GitHub", href: "https://github.com/aharoJ" },
    { label: "LinkedIn", href: "https://linkedin.com/in/aharoj" },
    { label: "Twitter", href: "x.com/aharoJ" },
    // { label: "Resume", href: "/resume.pdf" },
  ],
};
