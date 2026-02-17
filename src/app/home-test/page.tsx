// ═══════════════════════════════════════════════════════════════
// src/app/home-test/page.tsx
// ═══════════════════════════════════════════════════════════════
//
// LANDING PAGE SKELETON.
//
// This is a React Server Component. Zero JavaScript ships to
// the browser. It's pure HTML + CSS. That's why it's fast.
//
// Layout: centered column, max-w-2xl, generous vertical spacing.
// Content: photo, name, title, description, links.
// That's it. Anything else is noise at this stage.
//
// The 8px grid is enforced through Tailwind spacing:
//   p-2 = 8px,  p-4 = 16px, p-6 = 24px, p-8 = 32px
//   gap-4 = 16px, gap-6 = 24px
//   py-24 = 96px (section-level whitespace)
//
// ═══════════════════════════════════════════════════════════════

import Image from "next/image";

// ─── Data ──────────────────────────────────────────────────────
// Hardcoded for now. When this page matures, we'll extract
// this to a data file like we did with education.ts.
// Rule: don't abstract until you need it twice.

const links = [
  { label: "GitHub", href: "https://github.com/aharoJ" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aharoj" },
  { label: "Twitter", href: "https://twitter.com/ahaaborern" },
  { label: "Resume", href: "/resume.pdf" },
];

// ─── Page ──────────────────────────────────────────────────────

export default function HomeTest() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      {/*
        max-w-2xl = 672px — tighter than max-w-3xl.
        For a landing page with just a photo + text + links,
        you want the eye to stay focused. Wider = more scanning.

        py-24 = 96px top and bottom. This is "hero-level whitespace"
        from the research. It gives the content room to breathe
        and signals: "this is intentional, not forgotten."
      */}
      <div className="max-w-2xl w-full py-24">
        {/* ── Photo ── */}
        {/*
          96x96px (w-24 h-24). Not too big, not too small.
          rounded-full = circle. grayscale on load, color on hover.

          The grayscale → color transition is one of the few
          hover effects worth having. It's subtle, intentional,
          and adds personality without being gimmicky.

          next/image handles: lazy loading, srcset generation,
          WebP/AVIF conversion, and blur placeholder.
        */}
        <div className="mb-8">
          <Image
            src="/profile/aharoJ.png"
            alt="Angel J. Haro"
            width={96}
            height={96}
            priority
            className="rounded-full"
          />
        </div>

        {/* ── Name + Title ── */}
        {/*
          Two levels of hierarchy using weight, not size.
          Name: text-2xl font-semibold (prominent but not screaming)
          Title: text-base text-muted (clear subordination)

          gap-1 (4px) between name and title — they're tightly related.
          mb-6 (24px) before the description — section break.
        */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Angel J. Haro
          </h1>
          <p className="text-base text-muted">Software Engineer</p>
        </div>

        {/* ── Description ── */}
        {/*
          One paragraph. Max 2-3 sentences. This isn't your resume —
          it's a first impression. Say what you do and what you care about.

          text-muted + leading-relaxed = readable secondary text.
          max-w-lg constrains line length within the already-constrained
          container. Belt and suspenders for reading comfort.
        */}
        <p className="text-muted leading-relaxed max-w-lg mb-12">
          Building high-performance systems and polished interfaces. I care
          about speed, reliability, and craft — from the database to the pixel.
        </p>

        {/* ── Links ── */}
        {/*
          Horizontal on all screen sizes. These are short labels.
          gap-6 (24px) between links — enough to be distinct,
          close enough to read as a group.

          Styling: text-sm + underline on hover.
          No icons. No colored buttons. Just text.
          This is the Vercel/Linear approach — the content IS the interface.

          transition-colors duration-150: snappy color change.
          150ms is faster than the 200-300ms we'd use for layout changes.
          Color transitions should feel instant.
        */}
        <nav className="flex flex-wrap gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-sm text-fg underline-offset-4 hover:underline transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
