// ═══════════════════════════════════════════════════════════════
// path: src/app/blog/[slug]/page.tsx
// ═══════════════════════════════════════════════════════════════
//
// INDIVIDUAL BLOG POST PAGE.
// Resolves slug → post metadata + content component.
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/component/blog/blog";
import BlogPostDesktop from "@/component/blog/BlogPostDesktop";
import BlogPostMobile from "@/component/blog/BlogPostMobile";

// ─── Post Content Registry ──────────────────────────────────
// Maps slugs to their content components. Add new posts here.
import SweepPost from "@/component/blog/posts/sweep";
import SweepArchitecturePost from "@/component/blog/posts/sweep-architecture";
import SweepTheoryPost from "@/component/blog/posts/sweep-theory";
import type { ComponentType } from "react";

const postContent: Record<string, ComponentType> = {
  "sweep-theory": SweepTheoryPost,
  "sweep-architecture": SweepArchitecturePost,
  sweep: SweepPost,
};

// ─── Static Params ───────────────────────────────────────────
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// ─── Metadata ────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      type: "article",
      publishedTime: post.date,
    },
  };
}

// ─── Page ────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const Content = postContent[slug];

  if (!post || !Content) notFound();

  return (
    <main className="min-h-screen">
      <div className="hidden lg:block">
        <BlogPostDesktop post={post}>
          <Content />
        </BlogPostDesktop>
      </div>
      <div className="block lg:hidden">
        <BlogPostMobile post={post}>
          <Content />
        </BlogPostMobile>
      </div>
    </main>
  );
}
