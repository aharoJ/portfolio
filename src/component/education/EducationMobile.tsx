// ═══════════════════════════════════════════════════════════════
// path: src/component/education/EducationMobile.tsx
// ═══════════════════════════════════════════════════════════════
//
// MOBILE EDUCATION SECTION.
//
// Same data as Desktop. Same monochrome style.
// React Server Component. Zero client JS.
//
// Mobile adjustments:
//   - py-16 instead of py-24 (tighter vertical rhythm)
//   - px-5 for horizontal padding (matches other mobile sections)
//   - text-xl section title instead of text-2xl
//
// ═══════════════════════════════════════════════════════════════

import { education } from "./education";

export default function EducationMobile() {
  return (
    <section aria-label="Education (mobile)" className="px-5 py-16">
      <div className="mx-auto max-w-2xl">
        {/* ── Section Title ── */}
        <h2 className="text-xl font-semibold tracking-tight mb-12">
          Education
        </h2>

        {/* ── Date ── */}
        <p className="text-sm font-mono text-muted mb-4">{education.date}</p>

        {/* ── Degree ── */}
        <h3 className="text-lg font-semibold tracking-tight mb-1">
          {education.degree}
        </h3>

        {/* ── School + Location + GPA ── */}
        <p className="text-sm text-muted mb-6">
          {education.school} — {education.location} · GPA: {education.gpa}
        </p>

        {/* ── Achievements ── */}
        <div className="pl-4 border-l-2 border-border mb-6">
          <p className="text-sm text-muted mb-3">Achievements</p>
          <div className="flex flex-wrap gap-2">
            {education.achievements.map((achievement) => (
              <span
                key={achievement}
                className="text-xs text-muted border border-border rounded-full px-3 py-1"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>

        {/* ── Coursework ── */}
        <div>
          <p className="text-sm text-muted mb-3">Coursework</p>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="text-xs text-muted border border-border rounded-full px-3 py-1"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
