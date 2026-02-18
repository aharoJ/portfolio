// ═══════════════════════════════════════════════════════════════
// path: src/component/experience/ExperienceMobile.tsx
// ═══════════════════════════════════════════════════════════════
//
// MOBILE EXPERIENCE SECTION.
//
// Same data, adapted for smaller viewports.
// Functional and clean — not polished yet.
// We'll refine this after desktop is locked in.
//
// Key mobile differences:
//   - Tighter padding (px-5 instead of px-6)
//   - Smaller section spacing (py-16 instead of py-24)
//   - Same content, same hierarchy, same monochrome system
//
// ═══════════════════════════════════════════════════════════════

import { roles } from "./experience";

export default function ExperienceMobile() {
  return (
    <section className="py-8 px-5">
      <div className="max-w-2xl mx-auto">
        {/* ── Section Title ── */}
        <h2 className="text-xl font-semibold tracking-tight mb-4">
          Experience
        </h2>

        {/* ── Roles ── */}
        <div>
          {roles.map((role, index) => (
            <div
              key={role.company}
              className={`${
                index > 0 ? "border-t border-border pt-10" : ""
              } ${index < roles.length - 1 ? "pb-10" : ""}`}
            >
              {/* ── Date ── */}
              <p className="text-xs font-mono text-muted mb-3">{role.date}</p>

              {/* ── Title ── */}
              <h3 className="text-base font-semibold tracking-tight mb-1">
                {role.title}
              </h3>

              {/* ── Company + Location ── */}
              <p className="text-sm text-muted mb-4">
                {role.company} — {role.location}
              </p>

              {/* ── Highlights ── */}
              <ul className="space-y-3 mb-4">
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
}
