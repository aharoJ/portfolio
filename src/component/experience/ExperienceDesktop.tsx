// ═══════════════════════════════════════════════════════════════
// path: src/component/experience/ExperienceDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// DESKTOP EXPERIENCE SECTION.
//
// New design system — monochrome, Geist, 8px grid.
// Data comes from experience.ts. Zero hardcoded content.
//
// What changed from the old ExperienceDesktop:
//   OLD → 256px company photos, green borders, alternating
//         left/right layout, numbered circles, colored badges,
//         lorem ipsum descriptions
//   NEW → No images. No colors. No decoration. Just typography,
//         whitespace, and real content with real metrics.
//
// Design decisions:
//   - Date in monospace: metadata looks like metadata
//   - Title in semibold: what recruiters scan for
//   - Highlights with left border accent: clean timeline feel
//   - Tech tags: monochrome, border-only, no background color
//   - 1px separator between roles, not heavy cards
//
// ═══════════════════════════════════════════════════════════════

import { roles } from "./experience";

const ExperienceDesktop = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* ── Section Title ── */}
        {/*
          text-2xl, not text-5xl. This is a section label, not a hero.
          mb-16 (64px) gives breathing room before the first role.
          No decorative underline bar — the content speaks.
        */}
        <h2 className="text-2xl font-semibold tracking-tight mb-16">
          Experience
        </h2>

        {/* ── Roles ── */}
        <div>
          {roles.map((role, index) => (
            <div
              key={role.company}
              className={`${
                index > 0 ? "border-t border-border pt-12" : ""
              } ${index < roles.length - 1 ? "pb-12" : ""}`}
            >
              {/* ── Date ── */}
              <p className="text-sm font-mono text-muted mb-4">{role.date}</p>

              {/* ── Title ── */}
              <h3 className="text-lg font-semibold tracking-tight mb-1">
                {role.title}
              </h3>

              {/* ── Company + Location ── */}
              <p className="text-sm text-muted mb-6">
                {role.company} — {role.location}
              </p>

              {/* ── Highlights ── */}
              {/*
                Left border accent instead of bullet points.
                Creates a subtle timeline/accent effect.
                space-y-3 (12px) between items.
              */}
              <ul className="space-y-3 mb-6">
                {role.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm text-muted leading-relaxed pl-4 border-l-2 border-border"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* ── Tech Tags ── */}
              {/*
                Monochrome. Border-only. No background color.
                text-xs — supplementary info, not the main event.
                gap-2 (8px) between tags.
              */}
              <div className="flex flex-wrap gap-2">
                {role.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-muted border border-border rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceDesktop;
