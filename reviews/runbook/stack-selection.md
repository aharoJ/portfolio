# Stack Selection Decision Runbook

Implementation Impact: yes
Lifecycle: A

## Current admission and supersession (2026-09-30)

Both topology records are COMPLETE after the operator-authorized zero-code recovery: reopen at `c7e6ce27ed669df589adc29bb5e2047301591bb8`, then tiebreak at `a4006ace6012e1e7c002b9996e3c63a40877a0e1`. Their deliverable is completed design decisions and local evidence. Stack-selection is the sole remaining implementation topic, version v0.2, and owns the application scaffold and implementation audit.

The tiebreak's locked R1/R2 prerequisites select `frontend/`, npm and the application-local installer lockfile `frontend/package-lock.json`. These replace the former `apps/web`, root-pnpm and topology-blocker instructions for this first static application. See the attributed locks in `reviews/decisions.md` and selection boundary in `reviews/runbook/monorepo-structure-topology-tiebreak.md`. Observed Astro/npm versions are reference configuration, not research version locks; record and verify the implementation configuration actually used.

The operator's BRIEF-RECOVERY.md authorizes the smallest representative static article slice, a normal scaffold commit, and `$review implement stack-selection` through its blind R1 draft and compiler intake. Stop at an applicable operator-affirmation gate. After the intake is ready, stop for the operator's panel paste; do not resolve or claim implementation complete.

## Purpose and locked selections

Implement the R2 static Astro browser choice within the settled frontend topology. API, persistence and browser-to-API contract work remain unjustified.

1. Build the smallest Astro static article and a page linking to it inside `frontend/`. The production build must emit readable article HTML without an SSR adapter or server responsibility. Use islands only if actual product evidence earns them; the present slice requires none.
2. Use npm from `frontend/`. Extend the existing private package manifest with admitted scripts/dependency and retain `frontend/package-lock.json`.
3. Keep source, configuration, application dependencies, installer lockfile and output in `frontend/`; static output belongs in `frontend/dist/`.
4. Do not scaffold an API runtime, service placeholder, authentication, database, ORM, migrations, container, persistence dependency or recovery claim.
5. Do not add a browser-to-API contract, API client, OpenAPI document or `packages/contracts` artifact.
6. Do not create a root workspace, root installer lockfile, `apps/` reservation, empty/generic `packages/`, catalogs, task runner, CI or deployment configuration. Future database ownership remains API-owned and any later public contract remains transport-only; those boundaries grant no present scaffold authority.

## Execution

Add only the source/configuration needed for the representative page and article. Install Astro with npm from the application root and retain the generated npm lockfile. After the lockfile exists, verify a clean installation and build:

```sh
cd frontend
npm ci
npm run build
```

Serve the build with a plain static server from the same application root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Inspect the article through direct navigation and through the index-page link. Verify this implementation, rather than treating the topology spike's result or hashes as this slice's evidence. Commit the scaffold normally before its implementation audit.

## Required implementation checks

| Check | Expected result | Failure caught |
|---|---|---|
| Clean npm lockfile install and build from `frontend/` | Install/build succeeds from retained application lockfile | Missing or drifting dependency state |
| Inspect `frontend/dist/articles/first/index.html` | Static HTML contains article text without an SSR adapter | Client-only or server-required article rendering |
| Inspect no-island article output and dependencies | Reading requires no hydration, injected application JavaScript or server runtime | Unearned browser/runtime work |
| Serve `frontend/dist/`; open `/articles/first/` directly and follow the index link | Reading and navigation work without an API listener | Hidden API dependency or broken static route |
| Inspect application diff, manifests and installer artifacts | Local npm lock retained; excluded domains and root workspace/lockfiles absent | Infrastructure, topology or contract work beyond scope |

## Historical premise and its resolution

The stack R2 null API result met the old two-deployable monorepo reopen trigger; the original research correctly blocked a scaffold pending topology decisions. Reopen R1 preserved Null outcomes, then the fresh tiebreak R1/R2 prospectively selected the single static application's root and manager. Both topology recoveries now close that prerequisite chain. The historical REOPEN REQUIRED blocker and root-pnpm examples no longer govern this slice. Original research ledgers, intakes and locks remain sealed.

## Re-gating conditions

| Question | Evidence needed before reconsideration |
|---|---|
| Q2 API runtime | A supplied v0.2 artifact requiring private access, a submitted form, payment processing, visitor-specific state/content, or a persisting visitor action |
| Q3 persistence | A supplied v0.2 artifact naming restart-surviving mutable data and a migration/recovery test |
| Q4 contract authority | A passing Q2 gate plus a real browser-to-API boundary with request/success-response transport shapes and a generated or checked browser artifact |

The future paid review/QA service remains only a revisit trigger until it appears as supplied current evidence. Revisit topology if the frontend designation is invalidated, a required artifact crosses its boundary, another manager gains qualifying equivalent evidence, or a material configuration/scope change invalidates npm's demonstrated adequacy. Verify actual configuration changes before relying on the selection.
