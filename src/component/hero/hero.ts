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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in ullamcorper massa. Nullam in vulputate felis. Suspendisse pulvinar nibh mollis facilisis suscipit. In efficitur velit ac nisl condimentum, non volutpat nisi varius. Vestibulum suscipit congue risus, quis consequat mauris egestas ut. Quisque quis scelerisque velit, in pulvinar neque. Duis in tincidunt risus.",
  photo: "/profile/aharoJ.jpeg",
  links: [
    { label: "GitHub", href: "https://github.com/aharoJ" },
    { label: "LinkedIn", href: "https://linkedin.com/in/aharoj" },
    { label: "Twitter", href: "https://twitter.com/ahaaborern" },
    { label: "Resume", href: "/resume.pdf" },
  ],
};
