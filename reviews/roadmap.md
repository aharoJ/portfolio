# Roadmap -- portfolio

## stack-selection: v0.2 full-stack selection

Status: SCOPED — awaiting approval (2026-09-29)

Goal: Select the smallest reviewable, self-verifiable stack for `apps/web`, `apps/api`, the API-owned database/ORM, and—if the first real web/API boundary warrants it—one transport-contract authority, while preserving the locked monorepo structure.

## monorepo-structure: R1 real-panel provenance supersession

Status: COMPLETE (2026-09-29)

Type: research-only

Goal: Re-resolve the existing monorepo-structure R1 decision with the dispatched real web panel and replace the Codex-only evidence basis transparently.

Result: One research round blindly re-tallied the four questions from the named real-panel responses without creating product code or infrastructure. The active ledger supersedes the Codex-only record committed in `1ae58ceff8842dd8870bd5c86ae68aef4655b749`, while preserving that record in Git history. The real panel adopted `apps/web` plus `apps/api` as deployable roots and a pnpm workspace for pnpm-managed packages now; it retained API/database, transport, infrastructure, and local evidence-boundary decisions. `packages/`, catalogs, Turborepo, framework/ORM/provider choices, and contract physical form remain evidence-gated. Nine panelists were dispatched; eight gave substantive responses and MEMO has a C71 non-response waiver. Raw panel text is external to the repository.

Cross-review stats: 1 research round; 9 dispatched panelists; 8 substantive responses; 1 waived non-response; 4 locked decisions; 0 open follow-ups; no implementation/audit cycle; no source-code findings.

| Key decision | Consensus | Round |
|---|---:|---:|
| Use `apps/web` and `apps/api`; earn `packages/` from a demonstrated boundary | 6/8, robust after any one removal | R1 |
| Use one pnpm workspace and lockfile for pnpm-managed packages; gate catalogs and Turborepo | 8/8, robust after any one removal | R1 |
| Keep API/database, transport, and infrastructure semantic ownership | 8/8, robust after any one removal | R1 |
| Keep a small release-slice evidence convention without copying `$review` | 7/8, robust after any one removal | R1 |

Runbook: `reviews/runbook/monorepo-structure.md`

Upstream filing state: not applicable

### Premise Challenge Record

| Field | Value |
|---|---|
| Premise challenged? | Y |
| Challenge source | Panel (research) |
| Signal strength | Strong |
| Outcome | Held |
| Prevented waste? | Unknown |
| Caused waste? | N |
| Notes | The panel tested the source report's `apps/` anchoring risk and still selected the two deployable roots 6/8, but rejected placeholder packages and tool-specific overcommitment. |

## monorepo-structure: Monorepo foundation decision

Status: SUPERSEDED by the real-panel R1 provenance resolution (2026-09-29)

Type: research-only

Goal: Decide the smallest reviewable full-stack repository structure for the portfolio before any scaffold is created.

Result: One research round cross-validated `docs/research/monorepo-structure.md` without creating product code or infrastructure. The source recommendation's immediate `apps/web` plus `apps/api` hierarchy was materially challenged: the locked position retains root `frontend/` and `backend/` until a third deployable or demonstrated grouping ambiguity exists. The round also locked conditional workspace/tooling gates, semantic ownership boundaries, and a minimal project-local release-evidence convention. Four isolated bounded panel sessions responded; their common runtime is recorded as a provenance limitation rather than treated as vendor-diverse confirmation.

Cross-review stats: 1 research round; 4 panel responses; 4 locked decisions; 0 open follow-ups; no implementation/audit cycle; no source-code findings.

| Key decision | Consensus | Round |
|---|---:|---:|
| Retain root `frontend/` and `backend/`; make `apps/` trigger-based | 3/4, robust after any one removal | R1 |
| Use a conditional workspace/tooling policy, not an empty-repo pnpm/Turborepo mandate | 4/4 on the decision gate | R1 |
| Lock API/database, transport, and infrastructure semantic ownership; defer tool-specific layout | 4/4 | R1 |
| Keep one minimal project-local release-evidence record, without copying `$review` | 4/4 | R1 |

Runbook: `reviews/runbook/monorepo-structure.md`

Upstream filing state: not applicable

### Premise Challenge Record

| Field | Value |
|---|---|
| Premise challenged? | Y |
| Challenge source | Panel (research) |
| Signal strength | Strong |
| Outcome | Modified |
| Prevented waste? | Unknown |
| Caused waste? | N |
| Notes | The input report's folder hierarchy was treated as a falsifiable recommendation, not as a decision. The panel kept its ownership goals but rejected hierarchy before its trigger exists. |
