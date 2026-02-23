// ═══════════════════════════════════════════════════════════════
// path: src/component/theme/ThemeProvider.tsx
// ═══════════════════════════════════════════════════════════════
//
// THEME PROVIDER — Hardened (v2).
//
// This is the ONE justified client component boundary.
// Theme preference requires interactivity by definition.
//
// What this handles:
//
//   CORE   → Toggle between light and dark. Updates React state,
//            DOM attribute, and localStorage in sync.
//
//   BUG #2 → System preference detection. First-time visitors
//            see whatever their OS is set to. Blocking script in
//            layout.tsx handles the initial paint; this provider
//            stays in sync on mount.
//
//   BUG #3 → System preference change listener. If user changes
//            OS dark mode while site is open AND hasn't explicitly
//            toggled (no localStorage entry), the site follows.
//
//   BUG #4 → Cross-tab sync via storage event. Toggle in one tab,
//            all other tabs update instantly. next-themes does this.
//
//   FIX A  → localStorage.setItem wrapped in try/catch. Safari
//            private browsing throws QuotaExceededError on writes.
//            UI still works because data-theme already flipped.
//
//   FIX B  → bfcache pageshow resync. Modern browsers restore
//            whole-page snapshots on back/forward navigation.
//            HARDENED: now falls back to system preference instead
//            of stale DOM. If localStorage was cleared in another
//            tab while this page was cached, the DOM has stale
//            data-theme — system preference is the correct source
//            of truth, not a frozen DOM attribute.
//
//   FIX C  → aria-pressed on toggle button. Screen readers now
//            announce "Toggle dark mode, pressed" vs "not pressed".
//            SVGs have aria-hidden so AT reads button state, not
//            icon path data.
//
//   FIX D  → Transitions disabled during theme swap via
//            withoutTransitions(). Prevents disjointed feel where
//            elements with different transition durations change
//            at different rates. Double requestAnimationFrame
//            ensures browser has painted before re-enabling.
//            HARDENED: now uses ID-based style element to prevent
//            spam-click from accumulating orphaned <style> tags.
//            If toggle is clicked rapidly, the same element is
//            reused instead of creating new ones.
//
//   FIX E  → Meta theme-color synced on toggle. Uses
//            querySelectorAll to update ALL theme-color meta tags
//            (Next.js viewport export generates two: one per
//            media query). Mobile browser chrome now matches.
//
//   FIX F  → Toggle side effects live OUTSIDE the React state
//            updater. React 18 StrictMode double-invokes updaters
//            to catch impurities. DOM reads derive current theme
//            from the blocking script's data-theme (always in
//            sync), then setState is called once with the result.
//
//   FIX G  → Removed inline style.colorScheme writes. CSS handles
//            color-scheme entirely through [data-theme="dark"]
//            selector in globals.css. Inline styles had higher
//            specificity and could override CSS in edge cases
//            (forced-theme pages, stale bfcache restores).
//            data-theme drives everything now — single source.
//
// ═══════════════════════════════════════════════════════════════
"use client";

import { useEffect, useState, useCallback } from "react";

// ─── Types ─────────────────────────────────────────────────────
type Theme = "light" | "dark";

// ─── Helpers ───────────────────────────────────────────────────

/** Read system preference via matchMedia. */
function getSystemTheme(): Theme {
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
    ? "dark"
    : "light";
}

/** Safely read from localStorage. Returns null if empty or throws. */
function readStoredTheme(): Theme | null {
  try {
    const t = localStorage.getItem("theme");
    return t === "dark" || t === "light" ? t : null;
  } catch {
    return null;
  }
}

/** Safely write to localStorage. Safari private mode can throw. */
function writeStoredTheme(theme: Theme): void {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Persistence failed. UI still works because data-theme
    // is already set on the DOM. User just won't get their
    // preference back on next visit in this browsing session.
  }
}

/**
 * Set data-theme attribute on <html>.
 *
 * FIX G: No longer sets inline style.colorScheme. The CSS rule
 * [data-theme="dark"] { color-scheme: dark } in globals.css
 * handles this automatically when the attribute changes. Removing
 * the inline style eliminates a specificity conflict — inline
 * styles always beat CSS rules, which could cause stale values
 * on bfcache restore or override forced-theme pages.
 */
function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
}

/**
 * Sync ALL <meta name="theme-color"> tags with the active theme.
 * Next.js viewport export generates two tags (one per media query).
 * querySelector only hits the first — querySelectorAll gets both
 * so mobile browser chrome always matches the user-chosen theme.
 */
function syncMetaThemeColor(theme: Theme): void {
  const content = theme === "dark" ? "#0a0a0a" : "#ffffff";
  const metas = document.querySelectorAll('meta[name="theme-color"]');
  metas.forEach((meta) => meta.setAttribute("content", content));
}

/**
 * Disable all CSS transitions, execute a callback, then re-enable.
 * Double requestAnimationFrame ensures the browser has painted the
 * new theme before transitions are re-enabled. Without this, elements
 * with different transition durations change at different rates.
 *
 * HARDENED: Uses an ID-based style element so rapid toggles reuse
 * the same node instead of accumulating orphaned <style> tags.
 * Previous version created a new element per call — spam-clicking
 * the toggle could stack 10+ style tags that each independently
 * scheduled removal via rAF. Now there's always at most one.
 */
function withoutTransitions(fn: () => void): void {
  const id = "__theme_no_transitions__";
  let style = document.getElementById(id) as HTMLStyleElement | null;

  if (!style) {
    style = document.createElement("style");
    style.id = id;
    style.textContent =
      "*, *::before, *::after { transition: none !important; }";
    document.head.appendChild(style);
  }

  fn();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      style?.remove();
    });
  });
}

// ─── Provider + Toggle ─────────────────────────────────────────
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // ── Mount + bfcache resync ──
  //
  // HARDENED: Fallback chain is now localStorage → system preference.
  // Previous version: localStorage → DOM → system preference.
  //
  // Why remove DOM from the fallback? On bfcache restore, the DOM
  // holds whatever data-theme was set when the page was frozen. If
  // the user cleared localStorage in another tab while this page
  // was cached, the DOM is stale. System preference is the correct
  // next source of truth — it reflects the user's current OS state,
  // not a snapshot from an unknown time in the past.
  //
  // The blocking script still sets data-theme on fresh page loads,
  // so on normal navigation the DOM IS correct. But for the resync
  // path, we don't trust it.
  useEffect(() => {
    const sync = () => {
      const fromStorage = readStoredTheme();
      const resolved = fromStorage || getSystemTheme();

      applyTheme(resolved);
      syncMetaThemeColor(resolved);
      setTheme(resolved);
      setMounted(true);
    };

    sync();

    // bfcache: browser restores a frozen page snapshot on back/forward.
    // If theme changed in another tab while this page was cached,
    // the restored DOM has stale data-theme. Re-sync on restore.
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) sync();
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  // ── Cross-tab sync ──
  // The storage event fires when localStorage changes in ANOTHER tab.
  // (It does NOT fire in the tab that made the change.)
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== "theme") return;
      const next =
        e.newValue === "dark" || e.newValue === "light"
          ? (e.newValue as Theme)
          : getSystemTheme();

      applyTheme(next);
      syncMetaThemeColor(next);
      setTheme(next);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // ── System preference change listener ──
  // If the user changes OS dark mode while the site is open AND
  // hasn't explicitly toggled (no localStorage entry), follow the OS.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemChange = (e: MediaQueryListEvent) => {
      // Only react if user hasn't made an explicit choice
      if (readStoredTheme()) return;
      const next: Theme = e.matches ? "dark" : "light";
      applyTheme(next);
      syncMetaThemeColor(next);
      setTheme(next);
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  // ── Toggle ──
  // Side effects (DOM writes, localStorage, meta tags) live OUTSIDE
  // the React state updater. React 18 StrictMode double-invokes
  // updaters to catch impurities — DOM/storage writes inside an
  // updater would fire twice in dev. Reading data-theme from the
  // DOM is safe because the blocking script guarantees it's always
  // the source of truth.
  const toggleTheme = useCallback(() => {
    const current =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    const next: Theme = current === "light" ? "dark" : "light";

    withoutTransitions(() => {
      applyTheme(next);
    });
    syncMetaThemeColor(next);
    writeStoredTheme(next);
    setTheme(next);
  }, []);

  return (
    <>
      {/* ── Toggle Button ──
           Only renders after mount to avoid hydration mismatch.
           Before mount, the blocking script already has the
           correct theme applied — user sees no flash.
           aria-pressed: screen readers announce on/off state.
           aria-hidden on SVGs: AT reads button, not icon paths. */}
      {mounted && (
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          aria-pressed={theme === "dark"}
          className="fixed top-6 right-6 z-50 p-2 rounded-full
            text-muted hover:text-fg
            transition-colors duration-150
            cursor-pointer"
        >
          {theme === "dark" ? (
            // Sun icon — shown in dark mode → click to go light
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            // Moon icon — shown in light mode → click to go dark
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      )}

      {children}
    </>
  );
}
