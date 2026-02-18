// ═══════════════════════════════════════════════════════════════
// postcss.config.mjs
// ═══════════════════════════════════════════════════════════════
//
// Tailwind v4 uses @tailwindcss/postcss instead of the old
// tailwindcss PostCSS plugin. That's the only change.
//
// No autoprefixer needed — Tailwind v4 uses Lightning CSS
// internally which handles vendor prefixing.
//
// ═══════════════════════════════════════════════════════════════

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
