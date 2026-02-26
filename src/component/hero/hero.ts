// ═══════════════════════════════════════════════════════════════
// path: src/component/hero/hero.ts
// ═══════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH.
// Both HeroDesktop and HeroMobile import from here.
//
// What changed (Hyperlink Pass — Apple Only):
//
//   ONE link: "Apple's money" → /apple
//   Everything else is plain text. No href, no underline.
//
//   When the next story page is ready, add href to that
//   fragment. One at a time. No rush.
//
// ═══════════════════════════════════════════════════════════════

export interface HeroLink {
  label: string;
  href: string;
}

export interface DescriptionFragment {
  text: string;
  href?: string;
}

export interface HeroData {
  name: string;
  title: string;
  description: DescriptionFragment[];
  photo: string;
  links: HeroLink[];
}

export const hero: HeroData = {
  name: "Angel J. Haro",
  title: "Software Engineer",
  description: [
    {
      text: "I'm a software engineer in Southern California. Currently the only developer behind the veterinary medicine system at Western University. Before that I taught kids in underfunded districts how to code with ",
    },
    {
      text: "Apple's ",
      href: "/apple",
    },
    {
      text: "money, trained neural networks with Google's money, did mutation testing research at Kean University, and got government security clearance to crash self-driving cars in simulations and call it research. I lift weights, binge watch anime, play video games, and will spend hours perfecting my terminal instead of sleeping.",
    },
  ],
  photo: "/profile/aharoj.webp",
  // photo: "/profile/relaxed.webp",
  // photo: "/profile/haro2.webp",
  links: [
    { label: "GitHub", href: "https://github.com/aharoJ" },
    { label: "LinkedIn", href: "https://linkedin.com/in/aharoj" },
    { label: "Twitter", href: "https://x.com/aharoJ" },
    // { label: "Resume", href: "/resume.pdf" },
  ],
};
