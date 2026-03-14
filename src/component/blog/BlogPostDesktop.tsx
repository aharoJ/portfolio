// ═══════════════════════════════════════════════════════════════
// path: src/component/blog/BlogPostDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// DESKTOP BLOG POST LAYOUT.
// Wraps post content with header, metadata, and footer.
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import Link from "next/link";
import type { BlogPost } from "./blog";

interface Props {
  post: BlogPost;
  children: React.ReactNode;
}

const BlogPostDesktop = ({ post, children }: Props) => {
  return (
    <article className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* ── Nav ── */}
        <Link
          href="/blog"
          className="text-sm text-muted underline-offset-4 hover:underline transition-colors duration-150"
        >
          &larr; Blog
        </Link>

        {/* ── Header ── */}
        <header className="mt-8 mb-12">
          <h1 className="text-2xl font-semibold tracking-tight mb-3">
            {post.title}
          </h1>
          <p className="text-base text-muted mb-4">{post.subtitle}</p>
          <div className="flex items-center gap-4 text-xs text-muted font-mono">
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        {/* ── Content ── */}
        <div className="space-y-8">{children}</div>

        {/* ── Footer ── */}
        <footer className="mt-16 pt-8 border-t border-border">
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
};

export default BlogPostDesktop;
