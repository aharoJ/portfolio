# Monorepo Structure Decision Runbook

Implementation Impact: no
Lifecycle: A

## Purpose

This research-only runbook records the decision gates for the eventual rebuild. It does not authorize a scaffold or select a framework, ORM, package manager, cloud provider, contract authority, or deployment tool.

## Locked operating shape

1. Keep `frontend/` and `backend/` as the initial application locations. Treat each as one identifiable runtime/deployment unit; do not let either import the other.
2. Keep reusable code local until a real public boundary has at least two consumers. Do not create generic `shared`, `types`, `utils`, or `common` packages.
3. When a database exists, give the API sole semantic and migration ownership. Environment operations invoke an application-owned migration interface; they do not duplicate schema behavior.
4. Keep public transport contracts separate from persistence, ORM, domain-internal, and UI types. Choose the authority and whether it needs a package only after the first endpoint and consumer exist.
5. For each future reviewed release, retain a concise evidence record under its existing `reviews/<topic>/` area: reviewed revision; applicable boundaries; exact commands/results; durable CI/artifact links; and, after deployment, deployed revision or digest, migration result, and smoke result. Mark absent evidence `not applicable` or `pending` with a reason.

## Decision gates before future implementation

| Decision | Evidence required | Action if met | Action if not met |
|---|---|---|---|
| Move applications under `apps/` | A third deployable, or a demonstrated build/deployment/ownership ambiguity solved by application grouping | Research and execute a coordinated move | Retain root application locations |
| Select pnpm workspace | Both actual applications are pnpm-managed | Use one root workspace and lockfile | Keep package management local to the chosen runtime |
| Add `workspace:` edge | A real internal package dependency | Declare the explicit internal dependency | Do not create a placeholder package |
| Add catalog | Multiple consumers intentionally share one version policy | Centralize only that version range | Keep dependency version local |
| Add Turborepo | A documented task-ordering, filtering, or caching requirement exceeds package-manager scripts | Define inputs, outputs, and invalidation checks | Keep ordinary scripts |
| Create contracts package | A real cross-process artifact and consumer need shared/generated delivery | Create a transport-only boundary package | Keep the authority with its API owner |
| Reassign database lifecycle | A second independent writer or migration owner exists | Open a new ownership research topic | Keep API as sole owner |

## Verification when implementation eventually begins

- Prove each application builds, tests, and deploys without importing another application's internals.
- If a shared package exists, deliberately request a missing internal dependency and require resolution to fail rather than fall back to a registry package.
- Exercise migrations against an empty database, the supported prior state, and a safe retry/recovery path.
- Verify a browser consumer imports only the public transport boundary.
- Have a fresh reviewer trace a release from reviewed revision through required checks to the built artifact and, when deployed, the matching migration and smoke evidence.

## Reopen triggers

Reopen this topic if any decision gate above is met, if an evidence record becomes ceremony rather than a link to durable evidence, or if the selected runtime makes the retained directory names misleading. Do not reopen it merely to follow a fashionable folder convention.

## Boundaries

This project consumes `$review`; it must not copy, modify, or re-open canonical protocol material or the separately closed harness-audit items. See `reviews/decisions.md` and `reviews/monorepo-structure/state/research/resolve-r1.json` for the research rationale and panel provenance.
