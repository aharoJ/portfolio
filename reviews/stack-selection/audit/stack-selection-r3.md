# Code Audit: stack-selection static Astro article (Round 3)

> **For**: Independent adversarial verification of the R2 Python-runtime repair
> **From**: Angel (aharoJ) + Codex -- portfolio project
> **Date**: 2026-10-01
> **Context**: R2 surfaced an undeclared Python host prerequisite. Audit the corrected Node-native browser-test path and ensure prior repairs still hold.

---

## Context: Round 3 -- Adaptive Inlining

Adaptive R2+ fully inlines changed and direct regression surfaces; cite any signature-only path needing full expansion.

## R1 and R2 Review History

R1 repaired three P2 defects: Node floor, stale-output tests, and Chromium provisioning.

R2's four pane-matched responses included Astra/Fable's Python finding; DeepSeek noted it below materiality. The lead rejected it using an implementation-authored `af41f12` runbook line that no research round ratified. The operator rejected that circular reasoning.

C67 keeps sealed `resolve-r2.json` unchanged; the dated operator decision and this history supersede its classification prospectively:

| ID | Corrected disposition | Repair |
|---|---|---|
| R2-PYTHON-RUNTIME | **REAL ISSUE P3 — FIXED** | `test:browser` now serves the built `dist/` through the already-locked Astro/Node preview command; no Python or new dependency is required. |

Lead verification at Node v22.19.0 passed strict install, build, no-hydration/ignore checks, and both tests with no `python3`; treat this as challengeable evidence.

## What NOT to Re-Audit

Do not reopen static Astro, `frontend/`, npm, or the local lockfile. API/persistence/auth/contracts/root workspaces/task runners/CI/deployment remain excluded. Ignore claims need a concrete escaping descendant. Inspect current source rather than historical Python text.

## Review Focus

1. Trace build, Chromium provisioning, `PORTFOLIO_TEST_PORT`, Playwright, and Astro preview; check freshness, supervision, cleanup, and stale-listener masking.
2. Verify no undeclared host runtime or new dependency; recheck Node floor and strict install.
3. Exercise both routes, JavaScript-disabled reading, metadata, static output, hydration absence, ignores, and runbook/config/manifest consistency.

## Marker Planning

| File | Mode | Reason | Source | Fallback |
|---|---|---|---|---|
| `.gitignore` | full | Generated-output boundary | R1-FP-IGNORE | none |
| `frontend/.gitignore` | full | Frontend cache/report boundary | R1-FP-IGNORE | none |
| `frontend/astro.config.mjs` | sig | Unchanged static-output configuration | Adaptive R2+ baseline | full on request |
| `frontend/package-lock.json` | full | Node-floor and no-new-dependency proof | R1/R2 repair chain | none |
| `frontend/package.json` | full | Changed repair surface; C59-HOT | R2-PYTHON-RUNTIME | none |
| `frontend/playwright.config.mjs` | full | Changed server/supervision surface; C59-HOT | R2-PYTHON-RUNTIME | none |
| `frontend/src/layouts/Article.astro` | sig | Unchanged article composition | Adaptive R2+ baseline | full on request |
| `frontend/src/layouts/Page.astro` | sig | Unchanged static document/no-hydration surface | Adaptive R2+ baseline | full on request |
| `frontend/src/pages/articles/first.md` | sig | Unchanged route/content | Adaptive R2+ baseline | full on request |
| `frontend/src/pages/index.astro` | sig | Unchanged navigation | Adaptive R2+ baseline | full on request |
| `frontend/tests/static.spec.mjs` | full | Browser regression assertions | R1/R2 repair chain | none |
| `reviews/constraints.md` | sig | Project boundary context | Adaptive R2+ baseline | full on request |
| `reviews/runbook/stack-selection.md` | full | Corrected execution authority and supersession note | R2-PYTHON-RUNTIME | none |

## Source Code

{{FILE:.gitignore}}

{{FILE:frontend/.gitignore}}

{{FILE:frontend/astro.config.mjs|sig}}

{{FILE:frontend/package-lock.json}}

{{FILE:frontend/package.json}}

{{FILE:frontend/playwright.config.mjs}}

{{FILE:frontend/src/layouts/Article.astro|sig}}

{{FILE:frontend/src/layouts/Page.astro|sig}}

{{FILE:frontend/src/pages/articles/first.md|sig}}

{{FILE:frontend/src/pages/index.astro|sig}}

{{FILE:frontend/tests/static.spec.mjs}}

### Current project constraints and execution context

{{FILE:reviews/constraints.md|sig}}

{{FILE:reviews/runbook/stack-selection.md}}

## Output Format

- **PASS**: `Ship it. No blockers found.` plus confidence and the exact current paths checked.
- **FAIL**: severity, file path, line number, concrete reproduction, current-source impact, falsification counter-case, and minimal in-scope repair.

Separate evidence from inference. Name external sources or end with `Sources used: no external sources / code-only`.
