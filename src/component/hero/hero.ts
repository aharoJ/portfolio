// ═══════════════════════════════════════════════════════════════
// path: src/component/hero/hero.ts
// ═══════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH.
// Both HeroDesktop and HeroMobile import from here.
//
// What changed:
//
//   REPLACED → Philip K. Dick quote with a one-liner about what
//     you actually do. Elite portfolios (Brittany Chiang, Lee
//     Robinson, Rauno Freiberg) all use this space for a single
//     sentence about their craft. A philosophy quote reads as
//     "college student's about page," not "working engineer."
//
//   FIXED → Twitter href was missing https:// protocol.
//     Without it, the browser resolves "x.com/aharoJ" as a
//     relative path → aharoj.io/x.com/aharoJ → 404.
//
//   UNCOMMENTED → Resume link. For a job-seeking engineer,
//     this is the most important link in the hero. Recruiters
//     want the PDF in one click.
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
    "I build reliable backend systems and think deeply about the details that make software feel right — from authentication flows to pixel-level UI.",
  photo: "/profile/hero_img.jpg",
  // photo: "/profile/mugshot.jpg",
  links: [
    { label: "GitHub", href: "https://github.com/aharoJ" },
    { label: "LinkedIn", href: "https://linkedin.com/in/aharoj" },
    { label: "Twitter", href: "https://x.com/aharoJ" },
    // { label: "Resume", href: "/resume.pdf" },
  ],
};
