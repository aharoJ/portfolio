// ═══════════════════════════════════════════════════════════════
// path: src/component/blog/BlogPostMobile.tsx
// ═══════════════════════════════════════════════════════════════
//
// MOBILE BLOG POST LAYOUT.
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import Link from "next/link";
import type { BlogPost } from "./blog";

interface Props {
  post: BlogPost;
  children: React.ReactNode;
}

export default function BlogPostMobile({ post, children }: Props) {
  return (
    <article className="pt-20 pb-16 px-5">
      <div className="max-w-2xl mx-auto">
        {/* ── Nav ── */}
        <Link
          href="/blog"
          className="text-sm text-muted underline-offset-4 hover:underline transition-colors duration-150"
        >
          &larr; Blog
        </Link>

        {/* ── Header ── */}
        <header className="mt-6 mb-10">
          <h1 className="text-xl font-semibold tracking-tight mb-2">
            {post.title}
          </h1>
          <p className="text-sm text-muted mb-3">{post.subtitle}</p>
          <div className="flex items-center gap-3 text-xs text-muted font-mono">
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        {/* ── Content ── */}
        <div className="space-y-8">{children}</div>

        {/* ── Footer ── */}
        <footer className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted">
            Built by{" "}
            <a
              href="https://github.com/aharoJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg underline-offset-4 hover:underline transition-colors duration-150"
            >
              aharoJ
            </a>
            . More at{" "}
            <Link
              href="/"
              className="text-fg underline-offset-4 hover:underline transition-colors duration-150"
            >
              aharoj.io
            </Link>
            .
          </p>
        </footer>
      </div>
    </article>
  );
}
