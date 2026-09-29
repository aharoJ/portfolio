# Monorepo Structure Decision Runbook

Implementation Impact: no
Lifecycle: A

## Purpose

This research-only runbook records the real-panel R1 decisions for the eventual rebuild. It does not authorize a scaffold or select a framework, ORM, cloud provider, contract authority, or deployment tool.

## Locked operating shape

1. Use `apps/web` and `apps/api` as the two deployable roots. They may use different runtimes; do not let either import the other's internals.
2. Do not create an empty `packages/` directory or generic `shared`, `types`, `utils`, or `common` package. Create a named package only for a demonstrated reusable boundary.
3. Establish one root pnpm workspace and lockfile for pnpm-managed packages. Use `workspace:` only for real internal dependency edges. A non-pnpm API does not need to join that workspace.
4. Add catalogs only after an intentionally shared dependency-version policy is demonstrated. Add Turborepo only when a real multi-package task graph creates a documented ordering, filtering, or caching need.
5. When a database exists, give the API sole semantic and migration ownership. Environment operations invoke an application-owned migration interface; they do not duplicate schema behavior.
6. Keep public transport contracts separate from persistence, ORM, domain-internal, and UI types. Choose the authority and whether it needs a package only after the first endpoint and consumer exist.
7. Place deployment/VPS invocation under repository-level `infra/` when deployment material first exists; application runtime source must not import it.
8. At the first real feature or release slice, retain one concise project-local evidence record linking applicable contract, migration, CI/task, deployment, and test evidence. Mark absent evidence `not applicable` or `pending` with a reason; never copy or modify `$review`.

## Decision gates before future implementation

| Decision | Evidence required | Action if met | Action if not met |
|---|---|---|---|
| Establish application roots | The stated two-deployable premise survives the first scaffold | Create `apps/web` and `apps/api` | Reopen topology research before substantial paths accumulate |
| Join a package to the pnpm workspace | The package is pnpm-managed | Include it in the root workspace and root lockfile | Keep its runtime/package management outside the pnpm workspace |
| Add `workspace:` edge | A real internal package dependency | Declare the explicit internal dependency | Do not create a placeholder package |
| Add catalog | Multiple consumers intentionally share one version policy | Centralize only that version range | Keep dependency version local |
| Add Turborepo | A documented task-ordering, filtering, or caching requirement exceeds package-manager scripts | Define inputs, outputs, and invalidation checks | Keep ordinary scripts |
| Create contracts package | A real cross-process artifact and consumer need shared/generated delivery | Create a transport-only boundary package | Keep the authority with its API owner |
| Create `infra/` | The first deployment/VPS file needs a repository-level owner | Create `infra/` for deployment invocation only | Keep no placeholder directory |
| Reassign database lifecycle | A second independent writer or migration owner exists | Open a new ownership research topic | Keep API as sole owner |

## Verification when implementation eventually begins

- Prove each application builds, tests, and deploys without importing another application's internals.
- If a shared package exists, deliberately request a missing internal dependency and require `workspace:` resolution to fail rather than fall back to a registry package.
- Exercise migrations against an empty database, the supported prior state, and a safe retry/recovery path.
- Verify a browser consumer imports only the public transport boundary.
- Have a fresh reviewer trace a release from reviewed revision through required checks to the built artifact and, when deployed, the matching migration and smoke evidence.

## Reopen triggers

Reopen this topic if the first scaffold contradicts the two-deployable premise, if a reusable boundary gains a second consumer, if the API is not pnpm-managed, if a real task graph emerges, if a second database writer appears, or if an evidence record becomes ceremony rather than a link to durable evidence. Do not reopen it merely to follow a fashionable folder convention.

## Boundaries

This project consumes `$review`; it must not copy, modify, or re-open canonical protocol material or the separately closed harness-audit items. The active ledger supersedes the prior Codex-only R1 record with a real named web panel; its C71 waiver records MEMO's non-response and raw panel text remains external. See `reviews/decisions.md` and `reviews/monorepo-structure/state/research/resolve-r1.json`.
