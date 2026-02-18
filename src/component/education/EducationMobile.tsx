// ═══════════════════════════════════════════════════════════════
// path: src/component/education/EducationMobile.tsx
// ═══════════════════════════════════════════════════════════════
//
// MOBILE EDUCATION SECTION.
//
// Same data as Desktop. Same stripped-down design.
// Three levels: degree → school → achievement tags.
// React Server Component. Zero client JS.
//
// Mobile adjustments:
//   - px-5 horizontal padding (matches other mobile sections)
//   - py-8 vertical padding (tighter than desktop py-16)
//   - text-xl section title instead of text-2xl
//
// ═══════════════════════════════════════════════════════════════

import { education } from "./education";

export default function EducationMobile() {
  return (
    <section aria-label="Education (mobile)" className="px-5 py-8">
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
