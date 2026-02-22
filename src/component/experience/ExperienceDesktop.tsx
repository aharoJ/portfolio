// ═══════════════════════════════════════════════════════════════
// path: src/component/experience/ExperienceDesktop.tsx
// ═══════════════════════════════════════════════════════════════
//
// DESKTOP EXPERIENCE SECTION — Tabbed Layout.
//
// Inspired by Brittany Chiang's v4 portfolio. Instead of infinite
// vertical scroll, company names sit in a left column as tabs.
// Click a company → content swaps in place. Section stays compact.
//
// Why this is better than vertical scroll:
//   5 roles × ~200px each = ~1000px of vertical scroll.
//   That's a wall. The reader loses context of which role they're
//   reading and everything bleeds together.
//
//   Tabbed: ~350px total. Each role gets its own moment.
//   The reader is in control. They pick what interests them.
//
// Tradeoff:
//   This is the ONE component that requires "use client" and
//   useState. Worth it — this is functional navigation, not
//   decorative animation. Every other section stays RSC.
//
// Layout:
//   Left column (~160px): company shortNames stacked vertically.
//   Active tab: border-l-2 border-fg + text-fg (high contrast).
//   Inactive tabs: text-muted, no border.
//   Right column (flex-1): role content (title, date, highlights, tech).
//
// Mobile: NOT used. ExperienceMobile.tsx keeps vertical scroll.
// The tabbed pattern works because desktop has horizontal space
// for two columns. On mobile, vertical scroll is the right call.
//
// ═══════════════════════════════════════════════════════════════

"use client";

import { useState } from "react";
import { roles } from "./experience";

const ExperienceDesktop = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRole = roles[activeIndex];

  return (
    <section className="pb-16 pt-6 px-6">
      <div className="max-w-2xl mx-auto">
        {/* ── Section Title ── */}
        <h2 className="text-2xl font-semibold tracking-tight mb-8">
          Experience
        </h2>

        {/* ── Two-Column: Tabs + Content ── */}
        <div className="flex gap-12">
          {/* ── Tab List (Left Column) ── */}
          {/*
            Sticky tabs so if content is taller than the tab list,
            the tabs stay visible. But with a compact design, this
            is unlikely — it's a safety measure.

            Each tab is a button (accessible, keyboard-navigable).
            Active tab: border-l-2 border-fg, text-fg, font-medium.
            Inactive: border-l-2 border-transparent, text-muted.

            The border-l-2 on ALL tabs (transparent when inactive)
            prevents layout shift when switching — the space is
            always reserved.
          */}
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
          {/*
            min-h keeps the section from collapsing when switching
            between roles with different amounts of content.
            This prevents the page from jumping.
          */}
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
