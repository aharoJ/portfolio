// ═══════════════════════════════════════════════════════════════
// path: src/component/hero/HeroMobile.tsx
// ═══════════════════════════════════════════════════════════════
//
// MOBILE HERO SECTION.
//
// Same data as Desktop. Same monochrome style.
// React Server Component. Zero client JS.
//
// Mobile adjustments:
//   - px-5 horizontal padding (matches other mobile sections)
//   - Slightly smaller photo (80px instead of 96px)
//   - mb-10 on description instead of mb-12 (tighter rhythm)
//
// ═══════════════════════════════════════════════════════════════

import Image from "next/image";
import { hero } from "./hero";

export default function HeroMobile() {
  return (
    <section className="flex items-center justify-center px-5 min-h-screen">
      <div className="max-w-2xl w-full py-16">
        {/* ── Photo ── */}
        <div className="mb-6">
          <Image
            src={hero.photo}
            alt={hero.name}
            width={80}
            height={80}
            priority
            className="rounded-full"
          />
        </div>

        {/* ── Name + Title ── */}
        <div className="mb-5">
          <h1 className="text-xl font-semibold tracking-tight">
            {hero.name}
          </h1>
          <p className="text-sm text-muted">{hero.title}</p>
        </div>

        {/* ── Description ── */}
        <p className="text-sm text-muted leading-relaxed max-w-lg mb-10">
          {hero.description}
        </p>

        {/* ── Links ── */}
        <nav className="flex flex-wrap gap-5">
          {hero.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-sm text-fg underline-offset-4 hover:underline transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
