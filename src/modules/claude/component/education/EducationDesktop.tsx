// ═══════════════════════════════════════════════════════════════
// src/modules/claude/component/education/EducationDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// DESKTOP EDUCATION SECTION.
//
// Monochrome, Geist, 8px grid. Same design system as Experience.
// Data comes from education.ts. Zero hardcoded content.
//
// What changed from the old EducationDesktop:
//   OLD → 128px university photo, green borders, creamy-bone bg,
//         colored achievement badges (yellow/blue/green/purple),
//         bold "EDUCATION" heading, decorative underline bar,
//         coursework tags
//   NEW → No image. No colors. No card. No decoration.
//         No coursework. Same layout rhythm as Experience —
//         date in mono, degree as title, school as subtitle,
//         achievements as border-only monochrome tags.
//
// Design decisions:
//   - Matches Experience exactly: date → title → subtitle → content.
//     A recruiter scanning the page shouldn't feel a context switch.
//   - Achievements behind a left border accent — these are the
//     highlights worth noticing. Same border-l-2 pattern as
//     Experience highlights.
//   - No coursework. "Data Structures, Algorithms" is implied by
//     "B.S. in Computer Science." It's on the resume PDF if
//     anyone cares. Don't waste vertical space on it here.
//   - Single block, no card wrapper — Education is one entry,
//     not a list, so it doesn't need the border-t separators
//     that Experience uses between roles.
//
// Research context:
//   Brittany Chiang (most cloned dev portfolio) — no education
//   section. Lee Robinson (Cursor) — no education section.
//   Most top portfolios skip it entirely. We keep it because
//   aharoJ is early career and has genuine achievements (Google
//   Scholar, GMiS competition win) that add signal beyond just
//   the degree. Once the work history grows, this section can
//   shrink or fold into the About section.
//
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import { education } from "./education";

const EducationDesktop = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* ── Section Title ── */}
        <h2 className="text-2xl font-semibold tracking-tight mb-16">
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
        {/*
          Left border accent — same border-l-2 pattern as
          Experience highlights. These are the items a recruiter
          should notice: Google Scholar, national competition
          placement, research funding, program leadership.
        */}
        <div className="pl-4 border-l-2 border-border">
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
      </div>
    </section>
  );
};

export default EducationDesktop;
