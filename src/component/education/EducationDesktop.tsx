// ═══════════════════════════════════════════════════════════════
// path: src/component/education/EducationDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// DESKTOP EDUCATION SECTION.
//
// What changed:
//   py-6 → py-16. All desktop sections now use py-16 for
//   consistent vertical rhythm. The old py-6 made Education
//   feel cramped compared to Projects/Skills.
//
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import { education } from "./education";

const EducationDesktop = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* ── Section Title ── */}
        <h2 className="text-2xl font-semibold tracking-tight mb-8">
          Education
        </h2>

        {/* ── Degree ── */}
        <h3 className="text-lg font-semibold tracking-tight mb-1">
          {education.degree}
        </h3>

        {/* ── School ── */}
        <p className="text-sm text-muted mb-6">{education.school}</p>

        {/* ── Achievement Tags ── */}
        <div className="flex flex-wrap gap-2">
          {education.achievements.map((achievement) => (
            <span
              key={achievement}
              className="text-xs border border-border rounded-full px-3 py-1"
            >
              {achievement}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationDesktop;
