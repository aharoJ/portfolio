# Stack Selection Decision Runbook

Implementation Impact: yes
Lifecycle: A

## Purpose

This research close selects the smallest v0.2 browser implementation and records that API, persistence, and contract work are not justified. It authorizes no scaffold by itself; implementation begins through `$review implement stack-selection`.

## Locked selections

1. Scaffold `apps/web` with Astro in static-first/islands mode. Its production build must emit static article HTML and must not add a server responsibility to the web application.
2. Do not select or scaffold an API runtime for v0.2.
3. Do not add a database, ORM, migration directory, container, backup claim, or persistence dependency for v0.2.
4. Do not add a browser-to-API contract artifact, client, or `packages/contracts` package for v0.2.
5. Keep the existing locked boundaries: pnpm-managed packages share one root workspace and lockfile; no empty or generic `packages/` directory; any future database is API-owned; any future public contract is transport-only.

## Required implementation checks

| Check | Expected result | Failure caught |
|---|---|---|
| Build a representative article with `pnpm --filter web build` | Static HTML contains article content and succeeds without an SSR adapter | Client-only or server-required article rendering |
| Inspect a no-island article output | No unnecessary browser runtime is required to read the article | A nominally static choice ships hydration or server behavior without product evidence |
| Serve the built output with a plain static file server and exercise direct article URLs | Reading and navigation work without an API listener | Hidden API or runtime dependency in v0.2 content delivery |
| Inspect manifests, lockfile, and application paths before implementation | No database, migration, API client, OpenAPI document, or shared contract artifact is introduced | Infrastructure or contract work created despite failed gates |

The commands are future implementation checks, not results of this research close.

## Monorepo premise record

Reopen trigger: stack-selection Q2 locked the null API outcome; check=`reviews/stack-selection/state/research/resolve-r2.json`; status-source=research ledger.

**Status:** met and recorded. Before `apps/api` is treated as an implementation target, reopen monorepo-structure's two-deployable premise. Do not create a new monorepo topic, alter the existing monorepo decision, or create an API placeholder in this cycle.

## Re-gating conditions

| Question | Evidence needed before reconsideration |
|---|---|
| Q2 API runtime | A supplied v0.2 artifact requiring private access, a submitted form, payment processing, visitor-specific state/content, or a persisting visitor action |
| Q3 persistence | A supplied v0.2 artifact naming restart-surviving mutable data and a migration/recovery test |
| Q4 contract authority | A passing Q2 gate plus a real browser-to-API boundary with request/success-response transport shapes and a generated or checked browser artifact |

The future paid review/QA service is only a revisit trigger until it appears as supplied v0.2 evidence. It does not authorize an API, persistence, or contract scaffold now.
