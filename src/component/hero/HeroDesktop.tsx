// ═══════════════════════════════════════════════════════════════
// path: src/component/hero/HeroDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// DESKTOP HERO SECTION.
//
// What changed:
//
//   REMOVED → min-h-screen. A full viewport of mostly whitespace
//     before any substance is a luxury reserved for brands with
//     name recognition. For a job-seeking engineer, the recruiter
//     needs to see signal fast. Education should peek above the
//     fold, not hide below a screen of nothing.
//
//   REPLACED → pt-32 pb-24 gives generous hero presence without
//     burning an entire viewport. The hero still breathes, but
//     the next section is visible on scroll hint.
//
//   REMOVED → flex items-center justify-center (vertical centering
//     was only needed for min-h-screen). Content now flows from
//     top with padding controlling the rhythm.
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
