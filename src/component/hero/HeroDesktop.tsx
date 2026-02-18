// ═══════════════════════════════════════════════════════════════
// path: src/component/hero/HeroDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// DESKTOP HERO SECTION.
//
// Centered on the viewport. Photo, name, title, links.
// This is the first impression — clean and focused.
//
// Data comes from hero.ts. Zero hardcoded content.
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import Image from "next/image";
import { hero } from "./hero";

const HeroDesktop = () => {
  return (
    <section className="flex items-center justify-center px-6 min-h-screen">
      <div className="max-w-2xl w-full pt-16 pb-0">
        {/* ── Photo ── */}
        <div className="mb-8">
          <Image
            src={hero.photo}
            alt={hero.name}
            width={144}
            height={144}
            priority
            className="rounded-2xl"
          />
        </div>

        {/* ── Name + Title ── */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            {hero.name}
          </h1>
          <p className="text-base text-muted">{hero.title}</p>
        </div>

        {/* ── Description ── */}
        <p className="text-muted leading-relaxed max-w-lg mb-12">
          {hero.description}
        </p>

        {/* ── Links ── */}
        <nav className="flex flex-wrap gap-6">
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
};

export default HeroDesktop;
