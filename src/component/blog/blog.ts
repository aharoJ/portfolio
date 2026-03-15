// ═══════════════════════════════════════════════════════════════
// path: src/component/blog/blog.ts
// ═══════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH for blog post metadata.
// Post content lives in separate TSX files under posts/.
//
// ═══════════════════════════════════════════════════════════════

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string; // ISO date string
  readingTime: string;
}

export const posts: BlogPost[] = [
  {
    slug: "sweep-theory",
    title: "48 Research Sessions. 12 Modules. 3 Wrong Labels.",
    subtitle:
      "Reverse-engineering a codebase into theory, then cross-validating every design decision against the literature.",
    date: "2026-03-14",
    readingTime: "14 min",
  },
  {
    slug: "sweep-architecture",
    title: "Anatomy of a Multi-Model Review Pipeline",
    subtitle:
      "The math, systems theory, and cognitive science behind Sweep.",
    date: "2026-03-14",
    readingTime: "12 min",
  },
  {
    slug: "sweep",
    title: "Every Model Signed Off. Sweep Found 5 P1s.",
    subtitle:
      "What happens when you stop asking one model to review its own work.",
    date: "2026-03-13",
    readingTime: "9 min",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
