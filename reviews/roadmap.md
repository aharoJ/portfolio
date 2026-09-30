# Roadmap -- portfolio

## stack-selection: v0.2 full-stack selection

Status: RESEARCH COMPLETE — implementation BLOCKED pending monorepo-structure topology reopen (2026-09-29)

Type: research + implementation

Goal: Select the smallest reviewable, self-verifiable stack for `apps/web`, `apps/api`, the API-owned database/ORM, and—if the first real web/API boundary warrants it—one transport-contract authority, while preserving the locked monorepo structure.

Result: R1 left all four choices open. R2 used the supplied operator product facts as the acceptance record and locked Astro static-first/islands for `apps/web` (7/8, robust) while locking the Status Quo / Null Option for API runtime, persistence/migration, and contract authority (8/8 each, robust). The 8 responding panelists all evaluated each binary gate at condition level; no echo-only vote was counted. Q2–Q4 unanimity is conditional gate agreement, not independent confirmation of the operator facts: the intake precomputed FAIL absent a conflicting supplied artifact. Research is complete, but implementation is blocked until the monorepo topology reopen settles.

Cross-review stats: 2 research rounds; R2 dispatched 9 named panelists; 8 substantive responses; 1 waived non-response; 4 locked decisions; 0 open follow-ups; no implementation/audit cycle; no source-code findings.

| Key decision | Consensus | Round |
|---|---:|---:|
| Use Astro static-first/islands for static article delivery in `apps/web` | 7/8, robust after any one removal | R2 |
| Select no v0.2 API runtime | 8/8, robust after any one removal | R2 |
| Select no v0.2 persistence or migration layer | 8/8, robust after any one removal | R2 |
| Select no v0.2 browser-to-API contract authority | 8/8, robust after any one removal | R2 |

Runbook: `reviews/runbook/stack-selection.md`

Upstream filing state: not applicable

### Monorepo premise record

The Q2-null condition meets the existing monorepo-structure two-deployable reopen trigger. **Disposition: REOPEN REQUIRED.** The monorepo lock names `apps/web` and `apps/api` as the two deployable roots, and its implementation gate requires the two-deployable premise to survive the first scaffold; otherwise it directs topology research to reopen before substantial paths accumulate. The null API means that condition is not met. Do not scaffold `apps/web` or `apps/api` until the reopened research round settles the topology.

### Premise Challenge Record

| Field | Value |
|---|---|
| Premise challenged? | Y |
| Challenge source | Panel (research) |
| Signal strength | Strong |
| Outcome | Modified |
| Prevented waste? | Y |
| Caused waste? | N |
| Notes | R2 rejected the unearned full-stack premise for API, persistence, and contract work while retaining a separately justified static web slice. |

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

## monorepo-structure: void R2 intake bundle

Status: VOID — retained as procedural-history only; do not paste, tally, resolve, or implement (2026-09-29)

Result: Commit `cf69b70` created `research-r2.md`, its compiled intake, and its manifest after the R1 research ledger had closed and without the required `$review scope` summary and explicit affirmation. The artifacts remain in Git for auditability but are not a valid round, do not reopen R1, and create no decision or implementation authority.

## monorepo-structure-topology-reopen: v0.2 topology reopen

Status: R1 RESEARCH COMPLETE; same-slug R2 scope skeleton VOID. Product scaffold remains blocked by the R1 Q1/Q2 Null locks pending the fresh `monorepo-structure-topology-tiebreak` research result (2026-09-30)

Type: research + implementation

Goal: Re-evaluate only the first v0.2 application layout and one-package root pnpm-workspace question after the locked no-API result invalidated the former two-deployable premise. The possible v0.3 service remains a revisit trigger rather than sizing input.

Result: One blind research round split the external panel only at the nine exact dispatched model headings. All nine panelists responded, and all nine made condition-level E1–E5 or precise-absence mappings for both gates; no echo-only vote was counted. Q1 and Q2 both lock the Status Quo / Null Option: no v0.2 application move or API reservation, and no root pnpm workspace or root lockfile. The R1 close admits the v0.2 implementation cycle through its explicit runbook marker, while keeping every non-null topology action gated on new current evidence. The post-close null-gate harness finding confirms that this admits cycle routing only: it does not authorize an Astro scaffold in `frontend/`, a package-manager selection, or a package-local installer lockfile.

Cross-review stats: 1 research round; 9 dispatched panelists; 9 substantive responses; 0 non-responses; 2 locked decisions; 0 open follow-ups; no implementation/audit cycle; no source-code findings.

| Key decision | Consensus | Round |
|---|---:|---:|
| Keep the current topology state; do not choose an application path or API reservation without a current path-dependent constraint | 9/9, robust after any one removal | R1 |
| Do not create a root pnpm workspace or root lockfile without a gate-passing layout, pnpm selection, and durable one-package benefit | 9/9, robust after any one removal | R1 |

Runbook: `reviews/runbook/monorepo-structure-topology-reopen.md`

Upstream filing state: not applicable

### Premise Challenge Record

| Field | Value |
|---|---|
| Premise challenged? | Y |
| Challenge source | Panel (research) |
| Signal strength | Strong |
| Outcome | Modified |
| Prevented waste? | Y |
| Caused waste? | N |
| Notes | The panel rejected carrying forward the two-deployable path and workspace premise without a current one-application operational differentiator or pnpm benefit. |

### R2 scope — topology tie-break and package-manager authority (2026-09-30)

Status: VOID — retained as procedural history. The closed topic's next non-close bundle or resolve routes to implementation, not to a research R2.

Goal: Reconsider only Q1's decision mechanism when a measured one-app static slice is operationally equivalent across `frontend/`, `apps/web/`, and the repository root; first select a neutral tie-break rule and then apply it. Reconsider only Q2's package-manager authority in light of the observed npm-command installation and package-local lockfile, without selecting a root workspace or root lockfile.

Evidence record: `docs/research/monorepo-structure-topology-spike.md`.

Form: SUPERSEDED. The scope content below is carried to the fresh `monorepo-structure-topology-tiebreak` topic; no same-slug research bundle is authorized.

## monorepo-structure-topology-tiebreak: v0.2 topology tie-break and package-manager authority

Status: SCOPED — awaiting explicit affirmation before bundle (2026-09-30)

Goal: With `docs/research/monorepo-structure-topology-spike.md` as evidence of measured equivalence across `frontend/`, `apps/web/`, and the repository root, first select and justify a neutral tie-break rule and then apply it to one location or the Q1 Null Option. Separately decide whether the observed npm-command installation and package-local npm lockfile are package-manager authority, whether a deliberate selection is required, or whether to retain the Q2 Null Option. Root workspace and root lockfile selection are excluded.

Evidence record: `docs/research/monorepo-structure-topology-spike.md`.

Form: Fresh topic slug; its first research artifact is R1. The closed `monorepo-structure-topology-reopen` file state routes its next non-close bundle/resolve to implementation; this new topic has no runbook or closing ledger, so its first bundle routes to research.

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
