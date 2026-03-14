// ═══════════════════════════════════════════════════════════════
// src/component/hero/HeroDesktop.tsx — Desktop hero section.
// React Server Component. Zero client JS.
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
