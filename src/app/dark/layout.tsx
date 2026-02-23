// ═══════════════════════════════════════════════════════════════
// path: src/app/dark/layout.tsx
// ═══════════════════════════════════════════════════════════════
//
// DARK ROUTE LAYOUT — Token Override.
//
// This is why design tokens matter. The entire site inverts by
// overriding 5 CSS custom properties. Zero component changes.
// Zero duplication. The same components that render on / render
// here — they just read different token values.
//
// How it works:
//   globals.css defines --color-bg, --color-fg, --color-muted,
//   --color-border, --color-accent in @theme. Every component
//   uses these via Tailwind classes (text-fg, text-muted, etc).
//   This wrapper div overrides those properties for its entire
//   subtree. CSS inheritance does the rest.
//
// Why a wrapper div and not <html> or <body>?
//   Root layout owns <html> and <body>. Next.js nested layouts
//   can't modify parent elements. A wrapper div with inline
//   style overrides is the correct pattern — CSS custom
//   properties inherit through the DOM tree regardless of
//   where they're defined.
//
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angel J. Haro — Dark",
};

export default function DarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={
        {
          /* ── Inverted Tokens ── */
          "--color-bg": "#0a0a0a",
          "--color-fg": "#fafafa",
          "--color-muted": "#a1a1aa",
          "--color-border": "#27272a",
          "--color-accent": "#fafafa",

          /* ── Direct styles for this container ──
             CSS custom properties inherit downward, but
             background-color and color on <body> are set by
             globals.css. This div needs its own explicit values
             to visually override the white body behind it. */
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          minHeight: "100vh",
        } as React.CSSProperties
      }
    >
      {/* ── Selection color override ──
           globals.css sets ::selection to bg:fg / color:bg.
           Those tokens now point to dark values, so selection
           automatically inverts: white highlight on dark text.
           But we scope it here to be explicit. */}
      <style>{`
        [data-theme="dark"] ::selection {
          background-color: #fafafa;
          color: #0a0a0a;
        }
      `}</style>
      <div data-theme="dark">{children}</div>
    </div>
  );
}
