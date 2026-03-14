// ═══════════════════════════════════════════════════════════════
// src/component/hero/HeroMobile.tsx — Mobile hero section.
// React Server Component. Zero client JS.
// ═══════════════════════════════════════════════════════════════

import Image from "next/image";
import { hero } from "./hero";

export default function HeroMobile() {
  return (
    <section className="pt-20 pb-16 px-5">
      <div className="max-w-2xl mx-auto">
        {/* ── Photo ── */}
        <div className="mb-6">
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
        <div className="mb-5">
          <h1 className="text-xl font-semibold tracking-tight">
            {hero.name}
          </h1>
          <p className="text-sm text-muted">{hero.title}</p>
        </div>

        {/* ── Description ── */}
        <p className="text-sm text-muted leading-relaxed max-w-lg mb-10">
          {hero.description.map((fragment, i) =>
            fragment.href ? (
              <a
                key={i}
                href={fragment.href}
                className="text-fg underline underline-offset-4 transition-colors duration-150"
              >
                {fragment.text}
              </a>
            ) : (
              <span key={i}>{fragment.text}</span>
            )
          )}
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
