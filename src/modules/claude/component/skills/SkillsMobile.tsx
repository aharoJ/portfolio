// ═══════════════════════════════════════════════════════════════
// src/modules/claude/component/skills/SkillsMobile.tsx
// ═══════════════════════════════════════════════════════════════
//
// MOBILE SKILLS SECTION.
//
// Same data as Desktop. Same monochrome tag style.
// React Server Component. Zero client JS.
//
// Mobile adjustments:
//   - py-16 instead of py-24 (tighter vertical rhythm on mobile)
//   - px-5 for horizontal padding (consistent with other mobile sections)
//   - Tags wrap naturally — flex-wrap handles small screens
//
// ═══════════════════════════════════════════════════════════════

import { skillCategories } from "./skills";

export default function SkillsMobile() {
  return (
    <section aria-label="Skills (mobile)" className="px-5 py-16">
      <div className="mx-auto max-w-2xl">
        {/* ── Section Title ── */}
        <h2 className="text-xl font-semibold tracking-tight mb-12">
          Skills
        </h2>

        {/* ── Categories ── */}
        {skillCategories.map((category, index) => (
          <div
            key={category.name}
            className={`${index > 0 ? "border-t border-border pt-8" : ""} ${
              index < skillCategories.length - 1 ? "pb-8" : ""
            }`}
          >
            {/* ── Category Label ── */}
            <p className="text-sm text-muted mb-3">{category.name}</p>

            {/* ── Skill Tags ── */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-muted border border-border rounded-full px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
