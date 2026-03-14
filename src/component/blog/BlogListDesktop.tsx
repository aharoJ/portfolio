// ═══════════════════════════════════════════════════════════════
// path: src/component/blog/BlogListDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// DESKTOP BLOG LISTING.
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import Link from "next/link";
import { posts } from "./blog";

const BlogListDesktop = () => {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm text-muted underline-offset-4 hover:underline transition-colors duration-150"
          >
            &larr; Back
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight mt-6">Blog</h1>
        </div>

        {/* ── Post List ── */}
        <div>
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`block group ${
                index > 0 ? "border-t border-border pt-8 mt-8" : ""
              }`}
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h2 className="text-lg font-semibold tracking-tight group-hover:underline underline-offset-4 transition-colors duration-150">
                  {post.title}
                </h2>
                <span className="text-xs text-muted whitespace-nowrap font-mono">
                  {post.readingTime}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {post.subtitle}
              </p>
              <p className="text-xs text-muted mt-2 font-mono">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListDesktop;
