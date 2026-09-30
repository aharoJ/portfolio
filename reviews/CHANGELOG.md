# Changelog -- portfolio reviews

## 2026-09-29 — stack-selection research convergence

**Type:** research + implementation

**Constraint economy:** active=0; distinct-cited=0; load-bearing-ratio=n-a

Two-round adversarial research review of the smallest v0.2 portfolio stack. R1 left every question open. R2 applied the supplied operator acceptance record through binary gates and locked four decisions: Astro for the static web slice, and null outcomes for API, persistence, and contract authority. No product, infrastructure, database, or protocol code changed; raw panel text was not committed.

### Decisions

- **Q1**: browser stack — ADOPT Astro static-first/islands (7/8, robust after any one removal).
- **Q2**: API runtime — ADOPT Status Quo / Null Option (8/8, robust).
- **Q3**: persistence and migration — ADOPT Status Quo / Null Option (8/8, robust).
- **Q4**: contract authority — ADOPT Status Quo / Null Option (8/8, robust).

### Gate-evaluation accounting

Every responding panelist mapped each gate's conditions to supplied product facts or their absence. No echo-only vote was counted: Q1–Q4 each have 8 condition-level evaluations and 0 echo-only votes. This establishes consensus on application of the supplied acceptance record, not independent verification of the operator-stated facts.

### Modified review artifacts

- `reviews/stack-selection/state/research/resolve-r2.json` — validated closing R2 ledger, blind tally, C71 non-response waiver, echo-vote audit, and reopen record.
- `reviews/decisions.md` — four R2 locks and evidence-boundary accounting.
- `reviews/runbook/stack-selection.md` — implementation gates and deferred monorepo premise record.
- `reviews/roadmap.md` — research-complete, implementation-pending roadmap entry.
- `reviews/CHANGELOG.md` — this convergence entry.

**Review statistics:** 2 research rounds; R2 dispatched 9 named panelists; 8 substantive responses; 1 waived non-response; 4 locked decisions; 0 open follow-ups; no implementation/audit cycle; no source-code findings.

**Panel provenance:** Gemini, DeepSeek, Mistral, Grok, MEMO, Z.AI, Claude.ai, and GPT supplied substantive R2 responses. Kimi is recorded as `Spot-check waiver: model=Kimi; reason=non-response; round=R2; evidence=operator-designated unavailable in external panel batch; still-applies=no;`. Panel splitting used only exact dispatched-model headings.

**Reopen record:** Q2's null outcome meets monorepo-structure's two-deployable premise trigger. The condition is recorded; no monorepo research, topology change, or `apps/api` scaffold is created in this cycle.

## 2026-09-29 — monorepo-structure real-panel provenance supersession

**Type:** research-only

**Constraint economy:** active=0; distinct-cited=0; load-bearing-ratio=n-a

One-round adversarial multi-model research re-resolution of monorepo structure. The active R1 ledger supersedes the prior Codex-only decision record from commit `1ae58ceff8842dd8870bd5c86ae68aef4655b749`; its historical bytes remain available in that commit. Nine named web panelists were dispatched, eight delivered substantive responses, and MEMO is recorded as a C71-waived non-response. Q1 and Q2 were overturned; Q3 and Q4 were kept. Raw panel text was not committed.

### Decisions

- **Q1**: initial topology — ADOPT `apps/web` plus `apps/api` with packages earned by a demonstrated boundary (6/8, robust).
- **Q2**: package manager and task graph — ADOPT a pnpm workspace and lockfile now for pnpm-managed packages; catalogs and Turborepo remain evidence-gated (8/8, robust).
- **Q3**: ownership seams — ADOPT API-owned database lifecycle, transport-only contract material, and repository-level deployment ownership (8/8, robust).
- **Q4**: reviewability — ADOPT a concise future release-slice evidence record that links rather than copies `$review` (7/8, robust).

### Modified review artifacts

- `reviews/monorepo-structure/state/research/resolve-r1.json` — validated real-panel ledger, C71 waiver, blind tally, and provenance-supersession metadata.
- `reviews/decisions.md` — active real-panel decisions and an explicit supersession marker on the Codex-only record.
- `reviews/runbook/monorepo-structure.md` — current implementation gates aligned to the real-panel decisions.
- `reviews/roadmap.md` — current research-only close entry and premise record.
- `reviews/CHANGELOG.md` — this transparent supersession entry.

**Review statistics:** 1 research round; 9 dispatched panelists; 8 substantive responses; 1 waived non-response; 4 locked decisions; 0 open follow-ups; no implementation/audit cycle; no source-code findings.

**Panel provenance:** Gemini, DeepSeek, Mistral, Grok, Z.AI, Claude.ai, Kimi, and GPT supplied substantive real-panel responses. MEMO returned a provider-busy error and is waived in the ledger. The response file was parsed only at exact dispatched-model headings.

## 2026-09-29 — monorepo-structure research

**Type:** research-only

**Result:** Completed one `$review` research round before any portfolio scaffold. Four isolated bounded panel sessions reviewed the compiled intake. The immediate `apps/` hierarchy recommendation was overturned 3–1 in favor of retaining root `frontend/` and `backend/`; workspace/tooling, ownership, and release-evidence decisions were locked with explicit adoption gates.

**Modified review artifacts:**

- `reviews/constraints.md` — initialized project review constraints SOT.
- `reviews/roadmap.md` — initialized and closed the monorepo research entry.
- `reviews/schema/resolve-ledger.schema.json` — added an unchanged canonical structural schema required for project-local ledger validation.
- `reviews/monorepo-structure/research/monorepo-structure-r1.md` — research draft.
- `reviews/monorepo-structure/intakes/research-r1.md` and manifest — deterministic compiled intake.
- `reviews/monorepo-structure/state/research/resolve-r1.json` — validated closing research ledger.
- `reviews/decisions.md` — four locked decisions and revisit triggers.
- `reviews/runbook/monorepo-structure.md` — research-only future decision gates.

**Review statistics:** 1 research round; 4 isolated panel responses; 4 locked decisions; 0 unresolved follow-ups; 0 code findings; no code, infrastructure, database, CI, or canonical-protocol changes.

**Constraint economy:** active=0; distinct-cited=0; load-bearing-ratio=n-a

**Panel provenance:** Panel sessions were isolated bounded Codex runs, used as a transparent substitute for manual web-panel pasting. They are not represented as vendor-diverse external confirmation.
