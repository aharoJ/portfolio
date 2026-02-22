// ═══════════════════════════════════════════════════════════════
// path: src/component/education/EducationDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// DESKTOP EDUCATION SECTION.
//
// Monochrome, Geist, 8px grid. Same design system as Experience.
// Data comes from education.ts. Zero hardcoded content.
//
// What changed (Session N — Education redesign):
//
//   REMOVED → Date line ("Aug 2019 — May 2024")
//   REMOVED → Location + GPA subtitle ("Carson, CA · GPA: 3.4")
//   REMOVED → border-l-2 accent bar
//   REMOVED → "Achievements" label
//   REMOVED → Coursework tags
//
//   ADDED → Nothing. That's the point.
//
// Design philosophy:
//   The previous version had five visual elements competing
//   for attention: date, degree, school+location+GPA, an
//   "Achievements" label, and the achievement tags themselves.
//   That's too many layers for a single credential.
//
//   The new version has three:
//     1. Degree — the credential (semibold, primary color)
//     2. School — the context (muted)
//     3. Tags — the proof (primary color, not muted)
//
//   No labels needed. The degree IS the heading.
//   The tags speak for themselves — "Google Scholar ($3K)"
//   doesn't need an "Achievements" prefix to be understood.
//
//   This follows the Vercel/Linear pattern for credential-like
//   content: title → context → evidence. Typography weight
//   and spacing create all the hierarchy.
//
// Tag treatment:
//   OLD → text-xs text-muted (achievements were nearly invisible)
//   NEW → text-xs text-fg (primary text color)
//
//   The achievements are the reason this section exists.
//   They should be the most readable element after the degree.
//   Using text-fg (primary) instead of text-muted makes them
//   feel intentional rather than decorative.
//
// Research context:
//   Brittany Chiang (Apple, Klaviyo) — no education section.
//   Lee Robinson (Vercel) — no education section.
//   We keep it because aharoJ has genuine achievements that
//   add signal. But we earn the space by being tight about it.
//   Three lines of information. That's all it needs.
//
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import { education } from "./education";

const EducationDesktop = () => {
  return (
    <section className="py-6 px-6">
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
        {/*
          No label. No border accent. Just the tags.
          "Google Scholar ($3K)" doesn't need a prefix
          to communicate what it is.

          text-fg instead of text-muted — these are the
          reason this section exists. They earn full contrast.
        */}
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
