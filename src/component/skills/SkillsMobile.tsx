// ═══════════════════════════════════════════════════════════════
// src/component/skills/SkillsMobile.tsx — Mobile skills section.
// Two-column grid matching desktop layout.
// ═══════════════════════════════════════════════════════════════

import { skillCategories } from "./skills";

export default function SkillsMobile() {
  return (
    <section aria-label="Technologies (mobile)" className="px-5 py-8">
      <div className="mx-auto max-w-2xl">
        {/* ── Section Title ── */}
        <h2 className="text-xl font-semibold tracking-tight mb-4">
          Technologies
        </h2>

        {/* ── Two-Column Grid ── */}
        <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 items-baseline">
          {skillCategories.map((category) => (
            <div key={category.name} className="contents">
              {/* ── Category Label ── */}
              <span className="text-sm text-muted whitespace-nowrap">
                {category.name}
              </span>

              {/* ── Skills as inline text ── */}
              <span className="text-sm text-fg leading-relaxed">
                {category.skills.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
