// ═══════════════════════════════════════════════════════════════
// path: src/component/experience/ExperienceDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// DESKTOP EXPERIENCE SECTION — Tabbed Layout.
//
// What changed:
//   pb-16 pt-6 → py-16. Consistent vertical rhythm with all
//   other desktop sections.
//
// Everything else unchanged — tabbed layout, useState, a11y.
//
// ═══════════════════════════════════════════════════════════════

"use client";

import { useState } from "react";
import { roles } from "./experience";

const ExperienceDesktop = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRole = roles[activeIndex];

  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* ── Section Title ── */}
        <h2 className="text-2xl font-semibold tracking-tight mb-8">
          Experience
        </h2>

        {/* ── Two-Column: Tabs + Content ── */}
        <div className="flex gap-12">
          {/* ── Tab List (Left Column) ── */}
          <div
            className="flex flex-col shrink-0"
            role="tablist"
            aria-label="Experience tabs"
          >
            {roles.map((role, index) => (
              <button
                key={role.shortName}
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls={`experience-panel-${index}`}
                onClick={() => setActiveIndex(index)}
                className={`text-left text-sm py-2.5 pl-4 pr-6 border-l-2 transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                  index === activeIndex
                    ? "border-fg text-fg font-medium"
                    : "border-transparent text-muted hover:text-fg"
                }`}
              >
                {role.shortName}
              </button>
            ))}
          </div>

          {/* ── Content Panel (Right Column) ── */}
          <div
            id={`experience-panel-${activeIndex}`}
            role="tabpanel"
            aria-labelledby={activeRole.shortName}
            className="min-h-[280px]"
          >
            {/* ── Title ── */}
            <h3 className="text-lg font-semibold tracking-tight mb-1">
              {activeRole.title}
            </h3>

            {/* ── Company + Location ── */}
            <p className="text-sm text-muted mb-1">
              {activeRole.company}
            </p>

            {/* ── Date ── */}
            <p className="text-sm font-mono text-muted mb-6">
              {activeRole.date}
            </p>

            {/* ── Highlights ── */}
            <ul className="space-y-3 mb-6">
              {activeRole.highlights.map((highlight) => (
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
              {activeRole.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-muted border border-border rounded-full px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDesktop;
