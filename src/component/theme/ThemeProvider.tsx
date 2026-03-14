// ═══════════════════════════════════════════════════════════════
// src/component/theme/ThemeProvider.tsx — Theme toggle provider.
// Only client component. Handles toggle, localStorage, cross-tab
// sync, system preference tracking, and bfcache resync.
// See CHANGELOG.md for full fix history (BUG #1-4, FIX A-K).
// ═══════════════════════════════════════════════════════════════
"use client";
import { useEffect, useState, useCallback, useRef } from "react";
// ─── Types ─────────────────────────────────────────────────────
type Theme = "light" | "dark";
// ─── Module-scope state ────────────────────────────────────────
// These live outside React to avoid re-renders and closures.

/** Tokenized cleanup counter for withoutTransitions. */
let transitionKillToken = 0;

/** Handle for the fallback setTimeout so we can cancel on re-toggle. */
let transitionKillTimeout: ReturnType<typeof setTimeout> | undefined;

/** Cached meta[name="theme-color"] elements — queried once, reused. */
let cachedThemeMetas: NodeListOf<Element> | null = null;

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
 * handles this automatically when the attribute changes.
 */
function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
}
/**
 * Sync ALL <meta name="theme-color"> tags with the active theme.
 * Next.js viewport export generates two tags (one per media query).
 *
 * v4: Elements cached at module level after first query. No
 * repeated querySelectorAll on subsequent toggles.
 */
function syncMetaThemeColor(theme: Theme): void {
  const content = theme === "dark" ? "#0a0a0a" : "#ffffff";
  if (!cachedThemeMetas) {
    cachedThemeMetas = document.querySelectorAll('meta[name="theme-color"]');
  }
  cachedThemeMetas.forEach((meta) => meta.setAttribute("content", content));
}
/**
 * Disable all CSS transitions, execute a callback, then re-enable.
 *
 * v4 CHANGES:
 *
 *   1. Short-circuits for prefers-reduced-motion (unchanged).
 *
 *   2. Forced reflow after injecting style tag (unchanged).
 *
 *   3. Tokenized cleanup. Each invocation increments a module-scope
 *      counter and captures its value. Cleanup callbacks (both rAF
 *      and setTimeout) only remove the style tag if their captured
 *      token matches the current counter. This prevents spam-click
 *      races where an older timer removes the tag during a newer
 *      toggle's suppressed window.
 *
 *   4. Previous setTimeout is cleared via clearTimeout before
 *      scheduling a new one. Combined with tokenization, this
 *      means at most ONE pending timeout exists at any time.
 *
 *   5. ID-based style element reuse (unchanged from v2).
 */
function withoutTransitions(fn: () => void): void {
  // Short-circuit: reduced-motion users already have no transitions
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    fn();
    return;
  }
  const id = "__theme_no_transitions__";
  let style = document.getElementById(id) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement("style");
    style.id = id;
    style.textContent =
      "*, *::before, *::after { transition: none !important; }";
    document.head.appendChild(style);
  }
  // Force reflow — ensures transition-disable is processed before
  // fn() executes. Also forces content-visibility: auto sections
  // to recalculate styles within the suppressed window.
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  window.getComputedStyle(document.documentElement).opacity;
  fn();
  // Capture token for this specific invocation
  const token = ++transitionKillToken;
  // Cancel any pending timeout from a previous toggle
  if (transitionKillTimeout !== undefined) {
    clearTimeout(transitionKillTimeout);
  }
  // Primary cleanup: double rAF ensures browser has painted
  // the new theme before re-enabling transitions.
  // Only remove if no newer toggle has started.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (token === transitionKillToken) {
        document.getElementById(id)?.remove();
      }
    });
  });
  // Fallback cleanup: if tab is backgrounded after toggle,
  // rAF gets throttled indefinitely. This guarantees removal.
  // Also token-guarded to prevent stale timers from interfering.
  transitionKillTimeout = setTimeout(() => {
    if (token === transitionKillToken) {
      document.getElementById(id)?.remove();
    }
  }, 300);
}
// ─── Provider + Toggle ─────────────────────────────────────────
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // FIX H: Read initial state from DOM instead of hardcoding "light".
  // The blocking script in layout.tsx has already set data-theme
  // before React initializes, so this is always accurate.
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    }
    return "light";
  });
  const [mounted, setMounted] = useState(false);
  // FIX J: Explicit-choice flag. Set synchronously at the start of
  // toggleTheme, checked by the system-change handler. Prevents the
  // micro-race where an OS change event fires between applyTheme
  // and writeStoredTheme and sees no stored theme.
  const explicitChoiceRef = useRef(false);
  // ── Mount + bfcache resync ──
  //
  // v4: Bails out early if resolved theme already matches current
  // DOM state — prevents unnecessary repaints and meta tag writes.
  // When a change IS needed, wraps in withoutTransitions() for
  // visual consistency with the manual toggle.
  useEffect(() => {
    const sync = () => {
      const fromStorage = readStoredTheme();
      const resolved = fromStorage || getSystemTheme();
      const currentDOM =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "dark"
          : "light";
      // Only touch DOM if actually different
      if (resolved !== currentDOM) {
        withoutTransitions(() => {
          applyTheme(resolved);
          syncMetaThemeColor(resolved);
        });
      }
      setTheme(resolved);
      setMounted(true);
    };
    sync();
    const handlePageShow = () => {
      sync();
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);
  // ── Cross-tab sync ──
  // The storage event fires when localStorage changes in ANOTHER tab.
  // (It does NOT fire in the tab that made the change.)
  //
  // v4: Wrapped in withoutTransitions() so cross-tab updates snap
  // instantly instead of elements transitioning at different rates.
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== "theme") return;
      const next =
        e.newValue === "dark" || e.newValue === "light"
          ? (e.newValue as Theme)
          : getSystemTheme();
      withoutTransitions(() => {
        applyTheme(next);
        syncMetaThemeColor(next);
      });
      setTheme(next);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  // ── System preference change listener ──
  // If the user changes OS dark mode while the site is open AND
  // hasn't explicitly toggled (no localStorage entry), follow the OS.
  //
  // v4: Wrapped in withoutTransitions() for consistent snapping.
  // Also checks explicitChoiceRef — if the user just clicked the
  // toggle, this handler bails even if localStorage hasn't been
  // written yet (eliminates the micro-race from FIX J).
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      // FIX J: Bail if user just made an explicit choice
      if (explicitChoiceRef.current) return;
      // Bail if user has a stored preference
      if (readStoredTheme()) return;
      const next: Theme = e.matches ? "dark" : "light";
      withoutTransitions(() => {
        applyTheme(next);
        syncMetaThemeColor(next);
      });
      setTheme(next);
    };
    mediaQuery.addEventListener("change", handleSystemChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);
  // ── FIX K: Visibility change safety net ──
  // If user toggles theme and immediately backgrounds the tab,
  // Chrome throttles both rAF and setTimeout. The no-transition
  // <style> tag stays injected until the tab comes back. This
  // listener force-removes the orphaned tag on tab return.
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        document.getElementById("__theme_no_transitions__")?.remove();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);
  // ── Toggle ──
  // Side effects (DOM writes, localStorage, meta tags) live OUTSIDE
  // the React state updater. React 18 StrictMode double-invokes
  // updaters to catch impurities — DOM/storage writes inside an
  // updater would fire twice in dev. Reading data-theme from the
  // DOM is safe because the blocking script guarantees it's always
  // the source of truth.
  //
  // v4: Sets explicitChoiceRef before ANY work. Writes localStorage
  // immediately after DOM update (inside withoutTransitions) to
  // minimize the window where readStoredTheme() returns null.
  // syncMetaThemeColor moved INSIDE withoutTransitions so mobile
  // browser chrome doesn't animate while the page snaps.
  const toggleTheme = useCallback(() => {
    // FIX J: Signal explicit choice BEFORE any async work.
    // The system-change handler checks this synchronously.
    explicitChoiceRef.current = true;
    const current =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    const next: Theme = current === "light" ? "dark" : "light";
    withoutTransitions(() => {
      applyTheme(next);
      syncMetaThemeColor(next);
    });
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
           aria-hidden on SVGs: AT reads button, not icon paths.
           v4: p-3 for 44×44 min touch target (WCAG 2.5.8). */}
      {mounted && (
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          aria-pressed={theme === "dark"}
          className="fixed top-6 right-6 z-50 p-3 rounded-full
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
