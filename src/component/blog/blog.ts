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
    slug: "sweep",
    title: "Every Model Signed Off. Sweep Found 5 P1s.",
    subtitle:
      "What happens when you stop asking one model to review its own work.",
    date: "2026-03-13",
    readingTime: "4 min",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
