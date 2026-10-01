# Monorepo Structure Topology Reopen Runbook

Implementation Impact: no
Lifecycle: A
Status: COMPLETE; research-only zero-code recovery (2026-09-30).

## Current recovery scope (2026-09-30)

This topic delivers only the completed R1 design decisions and local evidence. All application code and implementation audit belong to `stack-selection`. The operator explicitly authorized retrospective zero-code recovery; this runbook's marker is therefore no. Its historical implementation-routing guidance below is superseded.

The later tiebreak R1/R2 decisions prospectively select `frontend/`, npm and `frontend/package-lock.json`; follow the current stack-selection runbook after both topology recoveries close. This supersedes R1's no-application/no-selected-manager admission for the first static slice while retaining its exclusions of a root workspace/root installer lockfile and unearned service domains. Original drafts, intakes, manifests and ledgers remain unchanged. This topic requires no product scaffold or implementation audit.

## Historical guidance (superseded admission)

The following guidance records the original marker=yes research-close state. Its process-routing and pre-scaffold blockers are historical; current application execution belongs to stack-selection under the later tiebreak locks.

## Purpose

Carry the R1 negative topology decisions into v0.2 work without recreating the retired two-deployable premise. This runbook is the implementation admission record; it does not authorize an application scaffold by itself.

## Locked topology boundaries

1. Keep Q1 at the Status Quo / Null Option: do not create or move a v0.2 application, create `apps/`, or reserve an API path. Retain the minimal `frontend/package.json` and documentation state.
2. Keep Q2 at the Status Quo / Null Option: do not create `pnpm-workspace.yaml`, a root `pnpm-lock.yaml`, or a root workspace declaration. Do not treat Astro compatibility or the retired two-package decision as a pnpm selection.
3. Do not introduce an API, database, migration, contract, authentication, CI, deployment, `packages/` directory, catalog, or task runner through this topology topic.

## Implementation admission

`$review implement monorepo-structure-topology-reopen` is unblocked because the topology-reopen research cycle is complete and this runbook has `Implementation Impact: yes`. The first implementation scope must preserve the two Null Options above. In particular, implementation admission does not turn a future service, a familiar `apps/` layout, or a root workspace into present authority.

## Gate before the first application scaffold

Before an implementation task creates an Astro application or selects its directory, add a current local record that identifies a first-scaffold operational or verification constraint with materially different outcomes for the candidate layouts. Reopen this research topic to test that record before selecting a non-null Q1 outcome.

Before an implementation task selects pnpm or creates a root workspace/lockfile, the record must also show all of the following: a gate-passing Q1 layout, a current pnpm selection for that application, and a one-package v0.2 benefit that remains if the v0.3 service never arrives. Reopen the topic to test that evidence before selecting a non-null Q2 outcome.

## Verification for the admitted state

- Confirm no `apps/` path or API reservation exists.
- Confirm the repository root has neither `pnpm-workspace.yaml` nor `pnpm-lock.yaml`.
- Confirm `frontend/package.json` has no `packageManager` or workspace declaration.
- Tie any future non-null topology proposal to the current local record that supplies the missing differentiator; do not cite historical R1 preference, a candidate label, or industry convention.

## Revisit triggers

Reopen Q1 when a current build, deployment, ownership, or verification record produces a material path-dependent result for the one static application. Reopen Q2 only after Q1 passes and a current record selects pnpm and demonstrates a durable single-package root-workspace benefit. A possible v0.3 service alone is not a trigger that authorizes present topology.

## Evidence boundary

The R1 close records condition-level application of E1–E5 by nine responding panelists; it does not manufacture a missing operational constraint. Raw panel text remains outside the repository.

## Harness clarification — null-gate deadlock (2026-09-29)

`Implementation Impact: yes` unlocks implementation-cycle routing only. It does not authorize a product scaffold. In particular, the existing `frontend/` directory is not an implicit Astro location: the R1 intake made that a distinct non-null candidate, while Q1 locked no application creation or location selection.

The Q2 root-workspace/root-lockfile ban does not syntactically enumerate every package-local lockfile, but no current record selects a package manager and the Q2 decision forbids treating an alternate manager as an escape. Do not create a package-local installer lockfile while installing Astro under the present locks.

To authorize any such product action, first obtain a current pre-scaffold differentiator and reopen this topic through `$review scope`. A clarification cannot replace that research decision. Until then, implementation may only perform non-topology evidence work that does not choose an application location or package manager.
