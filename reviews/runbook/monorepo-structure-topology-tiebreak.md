# Topology Tie-Break Implementation Runbook

Implementation Impact: no
Status: COMPLETE; research-only zero-code recovery (2026-09-30).

## Current recovery scope (2026-09-30)

This completed design topic delivers only its locked decisions and local evidence. The operator explicitly authorized zero-code recovery; no application implementation or audit is due under this slug. All application code and implementation audit belong to `stack-selection`, which retains impact=yes. Both topology records close separately as research-only under the linked v0.3 lineage.

For the admitted static slice, the current stack-selection runbook carries these settled prerequisites: `frontend/`, npm, `frontend/package-lock.json`, static Astro output, and the exclusions below. Historical implementation-pending and recovery-A/B statements below are superseded by this operator disposition. The original execution guidance is retained as the source of prerequisites; stack-selection owns the executable application scope and actual verification.

## Historical research-close guidance (execution now owned by stack-selection)

## Admission and current authority

The first static Astro application belongs in `frontend/`. Its package manager is npm, and its installer lockfile belongs at `frontend/package-lock.json`. A later admitted implementation may add Astro source/configuration and dependencies there and emit static output to `frontend/dist/`.

The topology and manager-selection prerequisites are settled. Before executing the scaffold, enter the applicable implementation lifecycle with instructions consistent with these locks. Stack-selection and topology-reopen still have implementation pending and a separate recovery A/B disposition; this runbook does not choose that recovery or declare any topic's implementation complete. The research resolve itself creates no source, dependency, installer artifact, pin, or manager declaration.

For this application's location and installation commands, use this current runbook instead of historical `apps/web` or root-pnpm examples in earlier runbooks. Stack-selection's static Astro choice and its API/persistence/contract Null outcomes remain applicable.

## Selection boundary

The adopted local rule selects a uniquely demonstrated manager from the present static application's repeatable local installation/build/verification evidence, with an application-local installer lockfile and no recorded carried-boundary conflict. Untested managers have no qualifying record. A missing root or zero qualifiers provides no authority; multiple qualifiers provides no selection pending re-gating. Observation supplies evidence; deliberate adoption of the rule supplies authority.

Confine application manifests, dependencies, source, configuration, tests, installer lockfile, and build output to `frontend/`. Do not create a root workspace, root installer lockfile, installer lockfile outside `frontend/`, API/service reservation, database/migrations, browser-to-API contract, authentication, CI, deployment, `packages/`, catalogs, or a task runner.

The observed npm `11.17.0`, Astro `^7.3.5`, and npm lockfile v3 in the [local spike](../../docs/research/monorepo-structure-topology-spike.md) are reference configuration. This decision selects the manager and path; it selects no exact version pin or `packageManager` field. Record and verify the configuration actually used in implementation. A materially changed configuration requires fresh verification and, if it invalidates the selection evidence, re-gating.

## Later implementation steps

1. Confirm implementation admission, the current `frontend/` designation, and the absence of a recorded manager/boundary conflict. Preserve the existing private application manifest while extending it for the admitted static slice.
2. Add the smallest Astro static application and representative article inside `frontend/`. Configure a static build without an SSR adapter or server responsibility.
3. Use npm from that application root to install its admitted dependencies and retain `frontend/package-lock.json` with the manifest. Do not let an installer select another manager or a root workspace by default.
4. Add the application-local build/check commands and a browser verification of direct article access and navigation. Verify against the actual implementation; the historical spike is a reference, not this implementation's test result.
5. Publish the implementation evidence and enter the applicable `$review implement` audit. Research close and its impact marker do not replace implementation review.

These commands illustrate the later admitted application-local execution:

```sh
cd frontend
npm install astro
npm run build
```

After an installer-generated lockfile exists, use the application's npm lockfile to verify a clean reproducible installation. Browser/test dependencies and scripts must be added within the admitted implementation scope before their commands can be used.

## Required implementation verification

| Check | Expected result |
|---|---|
| Inspect the manifest and installer artifacts | npm installation is application-local; `frontend/package-lock.json` is retained; no root workspace/lockfile or outside installer lockfile exists |
| Build the representative page and article from `frontend/` | Static HTML with article content exists under `frontend/dist/`; no SSR adapter or API listener is required |
| Inspect an article without islands | Reading the content requires no unnecessary browser hydration/runtime |
| Serve `frontend/dist/` with a plain static file server and run browser checks | Direct article URLs and navigation work without a backend |
| Verify a clean installation using the generated npm lockfile, then rebuild/check | The actual implementation passes its recorded static/browser checks; report configuration and results |
| Inspect the complete implementation diff | No API, persistence, contracts, authentication, root workspace/lockfile, service placeholder, or other excluded domain is introduced |

Do not require the original spike's exact static-tree hash from different article content. Compare equivalent inputs when testing repeatability.

## Re-gating

- Revisit trigger: Q1's application-root designation becomes Null or is falsified; check=reviews/decisions.md; status-source=operator;
- Revisit trigger: selected-location demonstration is invalidated or the implementation reveals a required artifact outside `frontend/`; check=docs/research/monorepo-structure-topology-spike.md; status-source=operator;
- Revisit trigger: another manager gains equivalent qualifying local evidence; check=docs/research/; status-source=operator;
- Revisit trigger: material scope/configuration change or the future API/service becomes current supplied evidence; check=reviews/roadmap.md; status-source=operator;

Re-evaluate before relying on manager authority when a trigger is met. A second qualifier does not inherit an npm preference. A future service supplies no present permission for a workspace or service scaffold.
