// ═══════════════════════════════════════════════════════════════
// path: src/component/hero/hero.ts
// ═══════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH.
// Both HeroDesktop and HeroMobile import from here.
//
// What changed (All Links Live):
//
//   All five experiences now have hrefs. Routes don't exist
//   yet — that's fine. Build each story page when the content
//   (photos, context, narrative) is ready. The hooks are live.
//
//   Every link sits at a clause boundary (before a comma or
//   period). Research-backed placement. See previous session
//   notes for the full rationale (Rayner 2000, Pirolli & Card
//   1999, Zhu cognitive load studies).
//
//   Fragment splitting is careful about whitespace. Each text
//   chunk includes leading/trailing spaces so the rendered
//   paragraph reads as one continuous sentence.
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
    // { text: "I'm a software engineer in Southern California. Currently the only developer behind the veterinary medicine system at ", }, { text: "Western University", href: "/western-university", }, { text: ". Before that I taught kids in underfunded districts how to code through ", }, { text: "Apple", href: "/apple", }, { text: ", trained neural networks with ", }, { text: "Google", href: "/google", }, { text: ", did mutation testing research at ", }, { text: "Kean University", href: "/kean-university", }, { text: ", and got government security clearance to crash self-driving cars in simulations at the ", }, { text: "U.S. Department of Transportation", href: "/usdot", }, { text: ". I lift weights, binge watch anime, play video games, and will spend hours perfecting my terminal instead of sleeping.", },
    {
      text: "I'm a software engineer in Southern California. Currently the only developer behind the veterinary medicine system at Western University. Before that I taught kids in underfunded districts how to code through Apple, trained neural networks with Google, did mutation testing research at Kean University, and got government security clearance to crash self-driving cars in simulations at the U.S. Department of Transportation. I lift weights, binge watch anime, play video games, and will spend hours perfecting my terminal instead of sleeping.",
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
