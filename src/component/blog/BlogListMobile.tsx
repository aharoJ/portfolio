// ═══════════════════════════════════════════════════════════════
// path: src/component/blog/BlogListMobile.tsx
// ═══════════════════════════════════════════════════════════════
//
// MOBILE BLOG LISTING.
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import Link from "next/link";
import { posts } from "./blog";

export default function BlogListMobile() {
  return (
    <section className="pt-20 pb-16 px-5">
      <div className="max-w-2xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-muted underline-offset-4 hover:underline transition-colors duration-150"
          >
            &larr; Back
          </Link>
          <h1 className="text-xl font-semibold tracking-tight mt-5">Blog</h1>
        </div>

        {/* ── Post List ── */}
        <div>
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`block group ${
                index > 0 ? "border-t border-border pt-6 mt-6" : ""
              }`}
            >
              <h2 className="text-base font-semibold tracking-tight group-hover:underline underline-offset-4 transition-colors duration-150 mb-1">
                {post.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                {post.subtitle}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs text-muted font-mono">
                  {post.date}
                </span>
                <span className="text-xs text-muted font-mono">
                  {post.readingTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
