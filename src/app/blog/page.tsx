// ═══════════════════════════════════════════════════════════════
// path: src/app/blog/page.tsx
// ═══════════════════════════════════════════════════════════════
//
// BLOG LISTING PAGE.
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import BlogListDesktop from "@/component/blog/BlogListDesktop";
import BlogListMobile from "@/component/blog/BlogListMobile";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about tools, systems, and the things I build.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <div className="hidden lg:block">
        <BlogListDesktop />
      </div>
      <div className="block lg:hidden">
        <BlogListMobile />
      </div>
    </main>
  );
}
