// ═══════════════════════════════════════════════════════════════
// src/modules/claude/component/skills/SkillsMobile.tsx
// ═══════════════════════════════════════════════════════════════
//
// MOBILE SKILLS SECTION — Option B: Compressed Two-Column.
//
// Same data, same two-column approach as Desktop.
//
// Mobile adjustments:
//   - py-16 instead of py-24 (tighter vertical rhythm)
//   - px-5 for horizontal padding (matches other mobile sections)
//   - gap-x-6 instead of gap-x-8 (tighter on small screens)
//   - gap-y-4 instead of gap-y-3 (slightly more breathing room
//     since lines wrap more on narrow viewports)
//
// On very narrow screens (~320px), the right column will wrap
// naturally. The comma-separated text handles this gracefully
// because it's just prose — no rigid pill elements to overflow.
//
// ═══════════════════════════════════════════════════════════════

import { skillCategories } from "./skills";

export default function SkillsMobile() {
  return (
    <section aria-label="Technologies (mobile)" className="px-5 py-16">
      <div className="mx-auto max-w-2xl">
        {/* ── Section Title ── */}
        <h2 className="text-xl font-semibold tracking-tight mb-10">
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
