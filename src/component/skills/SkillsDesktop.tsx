// ═══════════════════════════════════════════════════════════════
// path: src/component/skills/SkillsDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// DESKTOP SKILLS SECTION — Option B: Compressed Two-Column.
//
// What changed:
//   OLD → 7 identical rows of category label + flex-wrap pill tags.
//         Repetitive visual rhythm, redundant with Experience/Projects
//         tech tags, ~400px of vertical scroll.
//   NEW → Two-column grid. Category label left, comma-separated
//         inline text right. Entire section fits in ~200px.
//         No pills, no borders on individual skills, no visual noise.
//
// Design rationale:
//   The Skills section's only job is to be a quick-scan reference.
//   Experience and Projects already show every technology in context.
//   This layout says "here's my full stack at a glance" in 3 seconds
//   without competing with the sections that actually matter.
//
//   Two-column label→text is the résumé pattern. Every recruiter
//   already knows how to read it. Zero learning curve.
//
//   Category labels in text-muted — metadata, not headings.
//   Skill text in text-fg — readable but not dominant.
//   No border-t dividers between rows — the grid gap handles
//   visual separation. Fewer lines = cleaner.
//
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
