// ═══════════════════════════════════════════════════════════════
// src/component/experience/ExperienceMobile.tsx — Mobile experience section.
// ═══════════════════════════════════════════════════════════════

import { roles } from "./experience";

export default function ExperienceMobile() {
  return (
    <section className="py-10 px-5">
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
                index > 0 ? "border-t border-border pt-4" : ""
              } ${index < roles.length - 1 ? "pb-4" : ""}`}
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
