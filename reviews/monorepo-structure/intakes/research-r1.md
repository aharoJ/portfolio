# Research: Monorepo Structure (Round 1)

> **For**: Independent research cross-validation by web LLMs
> **From**: Angel (aharoJ) + Codex -- portfolio project
> **Date**: 2026-09-29
> **Context**: A deliberately wiped portfolio repository must choose its first full-stack structure before any scaffold exists. This is research only: validate the decision in `docs/research/monorepo-structure.md`; do not create applications, infrastructure, or protocol changes.

---

## About the Project

This portfolio will eventually contain a browser application, an API, one initially API-owned database lifecycle, CI, and a VPS deployment. It is also a controlled consumer of the local `$review` protocol, so the structure must make ownership, dependency direction, release slices, and verification evidence inspectable without copying the protocol into this repository.

The source recommendation favors a small pnpm workspace modular monolith: deployable applications under `apps/`, only real reusable boundaries under `packages/`, database ownership under the API, and environment operations under `infra/`. That report is evidence for review, not a locked outcome.

## Current Setup

The repository was intentionally wiped. Its only product remnants are empty `backend/` and `frontend/` directories plus a minimal private frontend package manifest; there is no workspace file, lockfile, application code, database, CI, VPS configuration, test suite, or deployed service. The input report is `docs/research/monorepo-structure.md`.

Hard boundaries: research and recommendations only; no scaffolding or implementation; all review artifacts stay under this project's `reviews/` tree; do not edit the canonical `$review` protocol; do not revive the separately closed harness-audit items.

## Your Role

Evaluate this design for:

1. **Topology falsification**: compare `apps/` plus minimal `packages/` against retaining root `frontend/` plus `backend/`; identify the smallest evidence-based condition that makes either choice wrong.
2. **Dependency and task-graph discipline**: test whether a pnpm workspace, explicit internal dependencies, catalogs, and a deferred-or-conditional task runner are proportional to an initially empty full-stack project.
3. **Ownership seams**: test whether API-owned migrations, public transport-only contracts, and repository-level infrastructure avoid ambiguity without prematurely creating distributed-system boundaries.
4. **Reviewability**: test whether proposed release-slice and evidence conventions help this portfolio's local `$review` use without cloning, changing, or overclaiming the protocol.
5. **Counterexamples**: prefer the status quo when it is genuinely simpler and sufficient. Distinguish decisions supportable now from framework-, ORM-, provider-, or product-dependent questions that must remain open.

Engage with the specific constraints listed below. Limit responses to the research questions as stated. Do not propose alternative tech stacks, suggest wholesale rewrites, or give generic advice.

## What We Need From You

Reach a defensible recommendation for each question, challenge the source report's anchoring effect, and identify any premise flaw that should prevent a lock. Treat the absence of current code as a limit on certainty, not evidence that every future abstraction is needed. Do not scaffold or edit anything.

## Output Format

For each question:

1. **ADOPT / DISMISS / INVESTIGATE**
2. **Expected outcome**
3. **Implementation** -- exact future commands/steps only when a decision is ready; otherwise state what evidence is required
4. **Risks**
5. **Verification**
6. **Sources used** -- URLs/titles for any web-backed claims made in this response, or `No live web access used` if the session has no web tool access. Sanitize URLs before pasting: strip query parameters carrying credentials/tokens/OAuth codes/session IDs; cite by title + domain when a URL cannot be safely stripped.

## Additional Observations (Optional)

Call out a premise challenge, unneeded abstraction, or future trigger only if it changes a decision boundary.

## Constraints

- No scaffold, code, infrastructure, database, CI, or protocol edits in this round.
- Evaluate an initial modular monolith, not microservices or a multi-repository split.
- Do not infer a chosen framework, ORM, cloud provider, or API-contract authority from an empty codebase.
- `packages/` is reserved for demonstrated reusable boundaries; do not recommend a generic shared/types/utils/common dumping ground.
- A project-local `reviews/` tree may record evidence for `$review`; it must not copy or replace the canonical protocol.
- All five harness-audit items are outside this topic and closed on the protocol side.

## Premise Risks

| Risk | Source | Signal |
|---|---|---|
| The input report's `apps/` recommendation may anchor reviewers into endorsing hierarchy before a real product boundary exists. | `docs/research/monorepo-structure.md` | Strong |
| The wiped repository lacks code, so exact package count, framework, ORM, API description authority, and VPS mechanism cannot be decided honestly. | repository state | Strong |
| A reviewability convention could accidentally duplicate or mutate the canonical `$review` harness instead of remaining a project consumer. | scope boundary | Strong |
| Retaining `frontend/` and `backend/` may be the better null option if the project stays a tiny two-process application with no shared contract or operational surface. | status quo / null option | Medium |

## Web-Leverage / Industry Landscape

*Purpose*: use live, primary-source research only where it can falsify or enrich the questions below. This section is additive; it does not make external patterns authoritative.

1. **Anti-hallucination / source-hygiene**: web-derived claims require a verifiable source. Distinguish evidence from inference and do not invent citations or practice citation-laundering. Sanitize URLs and strip credentials, tokens, OAuth codes, session IDs, and sensitive query parameters before returning sources.
2. **Session-capability self-declaration, not brand classification**: self-declare session-capability (tool-backed browsing or no live access). Do not make brand-based assumptions; web access varies by session and model.
3. **Codebase-constraint supremacy**: project constraints outrank external patterns. Sources may challenge or enrich the proposal but do not become authority by prestige; a famous pattern is not a reason to adopt it, and pattern-anchoring is rejected.

If live web access exists, favor opened primary documentation and separate its facts from your conclusions. If it does not, state `No live web access used in this session.`

Relevant sources to challenge or confirm, not to accept blindly:

- https://pnpm.io/workspaces
- https://pnpm.io/catalogs
- https://turborepo.dev/docs/core-concepts/package-and-task-graph
- https://turborepo.dev/docs/crafting-your-repository/caching
- https://www.typescriptlang.org/docs/handbook/project-references
- https://spec.openapis.org/oas/latest.html
- https://docs.docker.com/build/building/multi-stage/
- https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax
- https://research.google/pubs/advantages-and-disadvantages-of-a-monolithic-codebase/

## Research Questions

### Q1: What initial repository topology best fits the stated full-stack portfolio: `apps/web` plus `apps/api` with a deliberately minimal `packages/` boundary, or retained root `frontend/` plus `backend/`?

**Status Quo Option**: retain the existing root `frontend/` and `backend/` directories, add no workspace hierarchy, and defer all additional ownership roots until code proves a need.

### Q2: What package-manager and task-graph policy is proportionate at rebuild start: pnpm workspaces with explicit `workspace:` dependencies and one lockfile now, catalogs only for demonstrated shared versions, and Turborepo only once a real multi-package full-stack graph exists?

**Status Quo Option**: keep isolated package manifests and scripts, introduce neither a workspace nor a task runner, and coordinate dependencies and commands manually.

### Q3: Should the API initially own `db/schema`, migrations, and seeds; should `packages/contracts` contain only public transport boundaries; and should `infra/` own VPS/deployment invocation rather than application imports or a root `database/`?

**Status Quo Option**: leave database, contract, and infrastructure ownership unassigned until a framework/ORM/provider is selected, or centralize them at the root for visual simplicity.

### Q4: What portfolio-local reviewability convention should be adopted so a future feature release visibly includes its changed contract, migration compatibility, CI/task evidence, deployment receipt, and tests when applicable, without copying or modifying `$review` itself?

**Status Quo Option**: retain only ordinary source and documentation organization; rely on ad hoc human or `$review` scoping later without a project-local evidence convention.
