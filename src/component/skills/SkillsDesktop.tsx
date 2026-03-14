// ═══════════════════════════════════════════════════════════════
// src/component/skills/SkillsDesktop.tsx — Desktop skills section.
// Two-column grid: category label + comma-separated skills.
// ═══════════════════════════════════════════════════════════════

import { skillCategories } from "./skills";

const SkillsDesktop = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* ── Section Title ── */}
        <h2 className="text-2xl font-semibold tracking-tight mb-8">
          Technologies
        </h2>

        {/* ── Two-Column Grid ── */}
        {/*
          grid-cols-[auto_1fr] → left column shrinks to label width,
          right column takes remaining space.
          gap-x-8 (32px) between columns — breathing room.
          gap-y-3 (12px) between rows — tight, scannable.
        */}
        <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 items-baseline">
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
};

export default SkillsDesktop;
