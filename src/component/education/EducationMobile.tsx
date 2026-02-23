// ═══════════════════════════════════════════════════════════════
// path: src/component/education/EducationMobile.tsx
// ═══════════════════════════════════════════════════════════════
//
// MOBILE EDUCATION SECTION.
//
// What changed:
//   py-8 → py-10. All mobile sections now use py-10.
//
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import { education } from "./education";

export default function EducationMobile() {
  return (
    <section aria-label="Education (mobile)" className="px-5 py-10">
      <div className="mx-auto max-w-2xl">
        {/* ── Section Title ── */}
        <h2 className="text-xl font-semibold tracking-tight mb-4">
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
}
