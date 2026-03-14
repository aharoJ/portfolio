# Changelog

Historical development notes extracted from source file comments.

---

## Theme System — v4 (Hardened)

### Bugs Fixed

- **BUG #1**: Added `suppressHydrationWarning` on `<html>`. The blocking script sets `data-theme` before React hydrates, creating an intentional server/client mismatch. One level deep — won't mask real bugs in children.
- **BUG #2**: Blocking script now checks system preference. Previous version only read localStorage. First-time visitors with OS dark mode got light mode. Now: localStorage → matchMedia fallback → light default.
- **BUG #3**: System preference change listener. If user changes OS dark mode while site is open and hasn't explicitly toggled, the site follows. v4: wrapped in `withoutTransitions()`, guarded by `explicitChoiceRef` to eliminate a micro-race.
- **BUG #4**: Cross-tab sync via storage event. v4: wrapped in `withoutTransitions()` so cross-tab updates snap instantly.

### Fixes (A–K)

- **FIX A**: `localStorage.setItem` wrapped in try/catch. Safari private browsing throws `QuotaExceededError`.
- **FIX B**: bfcache `pageshow` resync. v4: bails out early if resolved theme matches current DOM.
- **FIX C**: `aria-pressed` on toggle button. SVGs have `aria-hidden`.
- **FIX D**: Transitions disabled during theme swap via `withoutTransitions()`. v4: tokenized cleanup — each toggle increments a counter. Cleanup callbacks only fire if their token matches, preventing spam-click races.
- **FIX E**: Meta `theme-color` synced on toggle. Cached `querySelectorAll` updates all theme-color meta tags. v4: meta elements cached at module level.
- **FIX F**: Toggle side effects live outside the React state updater. React 18 StrictMode double-invokes updaters — DOM reads derive current theme from blocking script's `data-theme`.
- **FIX G**: Removed inline `style.colorScheme` writes. CSS handles `color-scheme` entirely through `[data-theme="dark"]` selector.
- **FIX H**: React state initialized from DOM, not hardcoded. Blocking script has already set `data-theme` before React initializes.
- **FIX I** (v4): Removed `syncColorSchemeMeta` entirely. `<meta name="color-scheme">` is now static `"light dark"` — declares support for both schemes. CSS drives the active one. Eliminates a function, 5 call sites, and a blocking script line.
- **FIX J** (v4): Explicit-choice ref. `useRef<boolean>` flag set synchronously at toggle start, checked by system-change handler. Eliminates micro-race between `applyTheme()` and `writeStoredTheme()`.
- **FIX K** (v4): `visibilitychange` safety net. If user toggles and backgrounds tab, Chrome throttles rAF/setTimeout — the no-transition `<style>` tag could stay injected. Listener force-removes it on foreground return.

---

## Design Passes

### Polish Pass
- Base styles: smooth scrolling, text wrapping (`balance`/`pretty`), optical text trimming
- Tabular figures on mono text
- `content-visibility: auto` on non-first sections
- `prefers-reduced-motion` support
- Consistent vertical rhythm: desktop `py-16`, mobile `py-10`

### Hyperlink Pass
- Hero description renders from fragments (text/link pairs) instead of plain string
- Link styling: underline by default, `underline-offset-4`, `text-fg` (monochrome palette)
- Link placement at clause boundaries (research-backed: Rayner 2000, Pirolli & Card 1999)

### All Links Live
- All five experience links have hrefs (routes may not exist yet — hooks are live)
- Fragment splitting preserves whitespace for continuous sentence rendering

### Education Redesign
- Removed: date range (5 years for BS invites questions), location (redundant with school name), GPA (below 3.7 threshold), coursework (implied by degree)
- Kept: degree, school, achievements (Google Scholar, GMiS 2nd Place)

### Projects — Image Support
- Added optional `image` field on `FeaturedProject`
- Image placement between description and highlights (natural reading flow)
- `next/image` optimization with rounded corners and border

### Skills — Compressed Layout
- Replaced pill tags with two-column grid (category label + comma-separated text)
- Résumé pattern — zero learning curve for recruiters
- Section fits in ~200px vs ~400px previously

### Footer
- Added copyright year + source link
- Signals "complete, intentional product"

---

## CSP Nonces

- Per-request nonce generation in middleware (UUID → base64)
- Nonce passed via `x-nonce` request header → layout reads it
- `'strict-dynamic'` trusts scripts loaded by nonced scripts (Next.js chunks)
- CSP in middleware (not nginx) because nonces must be unique per request
- `suppressHydrationWarning` on nonce script tag — browsers strip nonce from DOM after reading (spec behavior)
