# Roadmap -- portfolio

## monorepo-structure: Monorepo foundation decision

Status: COMPLETE (2026-09-29)

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
