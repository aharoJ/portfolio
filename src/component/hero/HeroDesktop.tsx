// ═══════════════════════════════════════════════════════════════
// path: src/component/hero/HeroDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// DESKTOP HERO SECTION.
//
// What changed (Hyperlink Pass):
//
//   UPDATED → Description now renders from fragments instead of
//     a plain string. Each fragment is either a <span> (text)
//     or an <a> (link). The paragraph reads identically — the
//     only visual difference is "Apple's money" has an underline
//     and is clickable. Lee Robinson energy.
//
//   Link styling: underline by default (not hover-only) so users
//     know it's interactive. Same underline-offset-4 as nav links
//     for visual consistency. text-fg so it doesn't break the
//     monochrome palette with a colored link.
//
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import Image from "next/image";
import { hero } from "./hero";

const HeroDesktop = () => {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
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
        <p className="text-muted leading-relaxed max-w-lg mb-6">
          {hero.description.map((fragment, i) =>
            fragment.href ? (
              <a
                key={i}
                href={fragment.href}
                className="text-muted/70 underline underline-offset-4 decoration-muted/20 transition-colors duration-150"
              >
                {fragment.text}
              </a>
            ) : (
              <span key={i}>{fragment.text}</span>
            )
          )}
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
