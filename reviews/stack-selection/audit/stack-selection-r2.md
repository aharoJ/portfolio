# Code Audit: stack-selection static Astro article (Round 2)

> **For**: Independent adversarial verification of the R1 repair set
> **From**: Angel (aharoJ) + Codex -- portfolio project
> **Date**: 2026-10-01
> **Context**: R1 identified and repaired three frontend configuration defects. Audit the current implementation independently; do not treat this history or prior verification as proof.

---

## Context: Round 2 -- Adaptive Inlining

Changed files (fully inlined, 2 files): `frontend/package.json`, `frontend/package-lock.json`.
Unchanged files (signatures only, 7 files): `frontend/astro.config.mjs`, both layouts, both page sources, `reviews/constraints.md`, and `reviews/runbook/stack-selection.md`.
Auto-escalated unchanged files (fully inlined, 4 files): root `.gitignore`, `frontend/.gitignore`, `frontend/playwright.config.mjs`, and `frontend/tests/static.spec.mjs`; these are direct evidence for R1 findings or their regression surface.
Unchanged files were reviewed at full source in Round 1. Request full expansion for any signature-only file by citing its path in your findings.

## R1 Review History

All four dispatched R1 panelists responded and their native-record evidence passed the repaired admission gate. The R1 resolver deduplicated four submitted claim families against the actual repository source:

| ID | R1 disposition | Current handling | Basis to re-check, not assume |
|---|---|---|---|
| R1-FP-IGNORE | **FALSE POSITIVE — Incorrect Assumption** | No duplicate `frontend/` ignore rule added | The tracked root `.gitignore` applies `node_modules/` and `dist/` to frontend descendants; inspect the actual rules and Git behavior. |
| R1-ENGINE-FLOOR | **REAL ISSUE P2 — FIXED** | Root manifest and lockfile Node floor raised from `>=22.12.0` to `>=22.19.0` | Verify the declared range against the resolved dependency graph and clean-install behavior. |
| R1-BROWSER-FRESHNESS | **REAL ISSUE P2 — FIXED** | `test:browser` now runs the static build before Playwright | Verify shell ordering and whether tests really consume current `dist/`, including failure behavior. |
| R1-BROWSER-PROVISIONING | **REAL ISSUE P2 — FIXED** | `test:browser` now invokes `playwright install chromium` before the test runner | Verify fresh-cache behavior and whether the command is portable/reproducible for this locked package. |

R1 lead verification with Node v22.19.0 passed clean `npm ci`, engine-strict clean install, static build, no-hydration output assertions, fresh Chromium provisioning, and both JavaScript-disabled browser tests. Those results are evidence to challenge, not a substitute for source-grounded review.

## Findings Evaluated and Rejected

Do not re-assert an ignore-rule gap merely because `frontend/.gitignore` lacks `node_modules/` or `dist/`. That would repeat the R1 incorrect assumption unless you show that the tracked root rule fails to cover a concrete frontend descendant. A new, reproducible Git-ignore boundary defect remains in scope.

## What NOT to Re-Audit

Do not reopen the research-locked topology: this is a static Astro article inside `frontend/`, managed with npm and its application-local lockfile. No API runtime, persistence, authentication, browser-to-API contract, root workspace/root installer lockfile, generic packages directory, task runner, CI, or deployment configuration is admitted. Do not manufacture findings from absent product requirements.

## Review Focus

1. Verify the exact repaired Node engine floor against the current lockfile's actual transitive dependency requirements and npm's engine semantics. Look for a remaining contradictory declaration, range boundary, or clean-install failure.
2. Trace `test:browser` from npm shell execution through the build, browser provisioning, Playwright configuration, static server, and tests. Determine whether it can still test stale output, skip the intended browser setup, or mask a current-source failure.
3. Exercise the static-serving contract in the source: direct article route, index navigation, JavaScript-disabled reading, page metadata, and absence of hydration/server requirements. Report only concrete regressions attributable to the current surface.
4. Inspect the root and frontend ignore rules as Git applies them to generated frontend output and dependencies. Distinguish an actual unignored artifact from an incorrect assumption about nested ignore files.
5. Audit the changed manifest/lockfile and the full promoted test/configuration files for a new correctness, portability, accessibility, security, or maintainability defect within the admitted static article slice.

## Marker Planning

| File | Mode | Reason | Source | Fallback |
|---|---|---|---|---|
| `.gitignore` | full | R1 generated-directory claim's actual source boundary; C53 auto-escalation | R1-FP-IGNORE | none |
| `frontend/.gitignore` | full | Paired nested ignore evidence; C53 auto-escalation | R1-FP-IGNORE | none |
| `frontend/astro.config.mjs` | sig | Unchanged static-output configuration | Adaptive R2+ baseline | full on request |
| `frontend/package-lock.json` | full | Changed locked dependency graph; R1-ENGINE-FLOOR repair | git diff vs `.baseline-ref` | none |
| `frontend/package.json` | full | Changed primary repair surface; C59-HOT | git diff vs `.baseline-ref` | none |
| `frontend/playwright.config.mjs` | full | R1 browser freshness/provisioning execution boundary; C53 auto-escalation | R1-BROWSER-FRESHNESS / R1-BROWSER-PROVISIONING | none |
| `frontend/src/layouts/Article.astro` | sig | Unchanged article composition | Adaptive R2+ baseline | full if signature extraction falls back or on request |
| `frontend/src/layouts/Page.astro` | sig | Unchanged static document and no-hydration surface | Adaptive R2+ baseline | full if signature extraction falls back or on request |
| `frontend/src/pages/articles/first.md` | sig | Unchanged article route/content | Adaptive R2+ baseline | full on request |
| `frontend/src/pages/index.astro` | sig | Unchanged navigation surface | Adaptive R2+ baseline | full if signature extraction falls back or on request |
| `frontend/tests/static.spec.mjs` | full | R1 browser regression surface; C53 auto-escalation | R1-BROWSER-FRESHNESS | none |
| `reviews/constraints.md` | sig | Unchanged project boundary context | Adaptive R2+ baseline | full on request |
| `reviews/runbook/stack-selection.md` | sig | Unchanged locked execution context | Adaptive R2+ baseline | full on request |

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

{{FILE:reviews/runbook/stack-selection.md|sig}}

## Output Format

- **PASS**: `Ship it. No blockers found.` plus a confidence level and the specific current paths checked.
- **FAIL**: severity, file path, line number, concrete reproduction, why it affects the current source, and a minimal repair within scope.

For every conclusion, separate observed evidence from inference. Do not manufacture findings, quote unavailable source, or treat the R1 history as proof. If you rely on an external source, name it; otherwise end with `Sources used: no external sources / code-only`.
