# Decisions -- portfolio

## monorepo-structure-topology-reopen — R1 topology resolution (2026-09-29)

**Status:** locked by the R1 real-panel gate resolution; research action: close. **Type:** research + implementation.

**Scope and supersession:** this narrow v0.2 reopening supersedes only monorepo-structure R1 Q1's two-deployable application-root decision and Q2's root-pnpm-workspace decision. R1 Q3 ownership and Q4 release-evidence convention remain outside this topic and unchanged.

**Panel accounting:** Gemini, DeepSeek, Mistral, Grok, MEMO, Z.AI, Claude.ai, Kimi, and GPT all gave substantive responses. Splitting used only those nine exact `# <Model>` headings; embedded Markdown headings were retained inside their response. There are no non-responses or waivers.

**Evidence boundary:** every countable response mapped all four conditions of each gate to E1–E5 or a precise absent/inapplicable record. The careful access caveats from some panelists did not make their responses echoes: they still identified the exact cited record or missing record for each condition. The close independently checked the primary local records. Raw panel text remains external to the repository.

1. **Q1 — ADOPT Status Quo / Null Option (9/9; robust after any single-response removal):** create or move no v0.2 application and reserve no API path. E1 and E2 establish one static browser slice, the v0.2 absence of API/persistence/contract work, and the v0.3 service as a revisit trigger. The fourth condition fails: E1–E5 name no current operational or verification constraint that materially differentiates `apps/web`, root `frontend`, and an API reservation for the one-deployable state. E3/E4 preserve the retired two-deployable history, not a current differentiator; E5 records only the minimal manifest. Therefore `apps/`, `apps/api`, and a location-selecting scaffold remain unauthorized.
2. **Q2 — ADOPT Status Quo / Null Option (9/9; robust after any single-response removal):** do not create a root pnpm workspace or root lockfile, and do not select a substitute package manager. Q1 did not yield a gate-passing application layout; E5 has no package-manager selection; E4's old pnpm decision depended on the retired two-package premise; and E1–E5 name no one-package v0.2 behavior, ownership duty, or verification benefit that survives the v0.3 service never arriving.

| Question | Gate | Locked result | Countable / echo-only | Robustness |
|---|---|---|---:|---|
| Q1 | FAIL | Status Quo / Null Option | 9 / 0 | 8/8 remains after any one removal |
| Q2 | FAIL | Status Quo / Null Option | 9 / 0 | 8/8 remains after any one removal |

**Tally reconciliation:** the blind tally and a separate re-derivation from the external raw panel both produced Q1 9/9 and Q2 9/9 for the Null Options. No discrepancy or INVESTIGATE result remains.

**Implementation admission:** this close provides the required `Implementation Impact: yes` runbook, so v0.2 `$review implement monorepo-structure-topology-reopen` is unblocked. That is process admission, not authority to bypass the locks: implementation must preserve the Null Options until a current local record supplies the missing Q1 differentiator and, for Q2, a gate-passing layout, explicit pnpm selection, and durable one-package root-workspace benefit. Reopen this topic to test that new record before materializing a non-null topology.

## stack-selection — R2 product-evidence resolution (2026-09-29)

**Status:** locked by the R2 real-panel gate resolution; research action: close. **Type:** research + implementation.

**Implementation admission:** blocked pending a monorepo-structure topology research reopen. The research action closes R2; it does not declare the full topic or its implementation complete.

**Evidence boundary:** The four operator-stated product facts are the supplied acceptance record for this round. They remain operator evidence, not independently verified product facts. The panel evaluated the gates by condition-to-fact or condition-to-absence mapping; no respondent was counted merely for echoing an intake verdict.

**Panel accounting:** Gemini, DeepSeek, Mistral, Grok, MEMO, Z.AI, Claude.ai, and GPT gave substantive responses. Kimi is non-responsive and recorded as `Spot-check waiver: model=Kimi; reason=non-response; round=R2; evidence=operator-designated unavailable in external panel batch; still-applies=no;`. Raw panel text remains external to the repository.

1. **Q1 — ADOPT (7/8; robust after any single-response removal):** use Astro in static-first/islands mode for `apps/web`. The implementation must produce static article HTML without adding a server responsibility. Astro's content-authoring details remain implementation-verified rather than assumed from the selection.
2. **Q2 — ADOPT (8/8; robust after any single-response removal):** select the Status Quo / Null Option for v0.2 API runtime. No supplied v0.2 fact requires a server-owned behavior; the later paid review/QA service remains a revisit trigger only.
3. **Q3 — ADOPT (8/8; robust after any single-response removal):** select the Status Quo / Null Option for persistence and migration. No supplied v0.2 fact names restart-surviving mutable data, retained data, and a migration/recovery test.
4. **Q4 — ADOPT (8/8; robust after any single-response removal):** select the Status Quo / Null Option for contract authority. Q2 fails and no browser-to-API boundary, transport shapes, or checked browser artifact exists.

| Question | Gate | Locked result | Gate-evaluation result |
|---|---|---|---|
| Q1 | PASS | Astro static-first/islands | 8 condition-level evaluations; 0 echo-only votes |
| Q2 | FAIL | Status Quo / Null Option | 8 condition-level evaluations; 0 echo-only votes |
| Q3 | FAIL | Status Quo / Null Option | 8 condition-level evaluations; 0 echo-only votes |
| Q4 | FAIL | Status Quo / Null Option | 8 condition-level evaluations; 0 echo-only votes |

**Gate-independence interpretation:** Q2–Q4's 8/8 null outcomes are agreement on conditional gate application, not independent product-fact confirmation. The intake supplied one-sided facts and a precomputed FAIL path unless a conflicting supplied v0.2 artifact existed. The decisions remain valid conditional on that acceptance record; future research must separately test or challenge the product-fact premise before using unanimity as independent evidence.

**Reopen disposition:** Q2's null result does require a monorepo-structure topology research reopen before any scaffold. The active monorepo lock says `apps/web` and `apps/api` are the two deployable roots, while its implementation gate permits creating them only if the two-deployable premise survives the first scaffold and otherwise directs a topology reopen before substantial paths accumulate. The null API means that premise is not met; it is not merely a rule for where a hypothetical future API would live. No `apps/web` or `apps/api` scaffold may begin until the reopened research round settles the topology.

**Revisit triggers:** a supplied v0.2 artifact requiring private access, form submission, payment processing, visitor-specific state/content, or a persisting visitor action; a named restart-surviving record plus migration/recovery test; or a real browser-to-API boundary with transport shapes and a checked browser artifact. Each trigger re-gates the affected question; it does not retroactively turn roadmap intent into evidence.

## monorepo-structure — void R2 bundle (2026-09-29)

**Status:** VOID — no decision, lock, panel result, or implementation authority.

**Reason:** `cf69b70` added `reviews/monorepo-structure/research/monorepo-structure-r2.md` and the matching compiled intake/manifest after the active R1 ledger recorded `action: "close"`, with a runbook and locked decisions already present. It also bypassed the required `$review scope` sequence: no scope summary was presented and no closed-list operator affirmation authorized a bundle.

**Disposition:** retain the draft, intake, and manifest in Git as procedural-history evidence only. They are void, must not be pasted, tallied, resolved, or cited as research evidence, and do not amend the R1 locks.

**Recovery:** `$review scope monorepo-structure-topology-reopen` is the fresh research entry. It is limited to v0.2 application topology and the one-package root pnpm-workspace question; it must stop for explicit scope affirmation before any bundle.

## monorepo-structure — R1 real-panel provenance supersession (2026-09-29)

**Status:** locked by real web-panel R1; action: close (research-only).

**Supersedes:** the Codex-only R1 decision record below and the prior ledger committed as `1ae58ceff8842dd8870bd5c86ae68aef4655b749`. The former record remains in Git history as historical context; it is not the active evidence basis.

1. **Q1 — ADOPT (6/8; robust after any single-response removal):** use `apps/web` and `apps/api` as the deployable roots. Do not create an empty `packages/` directory; create a package only for a demonstrated reusable boundary. This overturns the prior root-`frontend`/`backend` decision.
2. **Q2 — ADOPT (8/8; robust after any single-response removal):** establish one root pnpm workspace and lockfile for pnpm-managed packages now. Use `workspace:` only for real internal dependency edges; add catalogs only for demonstrated shared versions and Turborepo only when a real task graph warrants it. A non-pnpm API is not implied to join the workspace. This overturns the prior pnpm-selection deferral.
3. **Q3 — ADOPT (8/8; robust after any single-response removal):** the API owns the initial database lifecycle; public contract material remains transport-only; repository-level infrastructure owns deployment invocation when deployment material exists. Framework, ORM, provider, contract-authority, and physical-package choices remain open. This keeps the prior ownership-first decision.
4. **Q4 — ADOPT (7/8; robust after any single-response removal):** at the first real feature or release slice, create one concise local record linking applicable contract, migration, CI/task, deployment, and test evidence. It must never copy or modify `$review`. This keeps the prior evidence-convention decision while deferring a heavy schema.

| Question | ADOPT | DISMISS | INVESTIGATE | Result |
|---|---:|---:|---:|---|
| Q1 | 6 | 1 | 1 | ADOPT; overturn |
| Q2 | 8 | 0 | 0 | ADOPT; overturn |
| Q3 | 8 | 0 | 0 | ADOPT; keep |
| Q4 | 7 | 0 | 1 | ADOPT; keep |

**Panel accounting:** dispatched Gemini, DeepSeek, Mistral, Grok, MEMO, Z.AI, Claude.ai, Kimi, and GPT; substantive responses from all except MEMO. C71 record: `Spot-check waiver: model=MEMO; reason=non-response; round=R1; evidence=provider-busy error returned; still-applies=no;`.

**Rationale:** The real-panel response file was segmented only at the nine exact dispatched model headings, so embedded Markdown headings and comments did not alter model ownership. The active ledger records the blind tally and provenance supersession; raw panel text remains external to the repository.

**Revisit triggers:** the first scaffold contradicts the two-deployable premise; the API is not pnpm-managed; a reusable boundary gains a second consumer; a real task graph or dependency-version policy needs catalogs/Turborepo; a second database writer appears; or a release-evidence record starts duplicating rather than linking durable evidence.

## monorepo-structure (2026-09-29)

**Status:** superseded on 2026-09-29 by the real-panel R1 ledger; preserved as the prior Codex-only historical record.

1. Retain root `frontend/` and `backend/` as the initial application locations. Do not introduce `apps/web` and `apps/api` merely for visual hierarchy. Reopen this only when a third deployable appears or a measured ownership, build, deployment, or discovery ambiguity is solved by grouping applications.
2. Do not select pnpm from the empty repository alone. If both real applications are pnpm-managed, use a single root workspace and lockfile; use `workspace:` only for real internal dependencies. Add catalog entries only for intentionally shared versions and add Turborepo only after a documented task-ordering, filtering, or caching need exceeds package-manager scripts.
3. Lock semantic ownership before selecting tools: the API is the sole initial database-semantic and migration owner; environment/VPS operations belong under `infra/` and invoke an API-owned migration interface; public transport contracts never expose ORM, persistence, or UI internals. Exact directory shape, schema authority, migration tool, and whether a contracts package is warranted remain unselected until the first real endpoint and consumer exist.
4. Use one small project-local release-evidence record inside each future `reviews/<topic>/` area. It must identify the reviewed revision, applicable contract/migration/test/CI/artifact/deployment evidence, and an explicit reason for every not-applicable or pending item. It links evidence; it neither copies nor changes canonical `$review` machinery.

**Rationale:** The compiled research intake challenged the prior `apps/` recommendation. Four isolated bounded panel sessions responded; Q1 supported retaining root application names 3–1, and Q2–Q4 converged on conditional, ownership-first decisions. The robust-majority test remains true after removing any one panel response. See `reviews/monorepo-structure/research/monorepo-structure-r1.md`, `reviews/monorepo-structure/intakes/research-r1.md`, and `reviews/monorepo-structure/state/research/resolve-r1.json`.

**Revisit triggers:** a third deployable; a second independent database writer or migration owner; evidence that pnpm is not the selected shared runtime; a real reusable public-contract artifact; measured task-graph duplication/caching need; or a project evidence record that duplicates rather than links durable evidence.

## monorepo-structure-topology-reopen — null-gate deadlock harness clarification (2026-09-29)

**Status:** interpretive correction only; it does not amend the R1 ledger, the two locked Null Options, or any panel tally.

`Implementation Impact: yes` admits the completed topic to implementation-cycle routing. It does not authorize a product artifact that violates a Null lock. Q1's existing `frontend/` directory is not an implicitly selected Astro location: the R1 intake treated precisely that action as Candidate B, whereas the adopted Null retains only its minimal manifest. Creating an Astro app there is therefore a prohibited location-selecting scaffold.

Q2 directly blocks the root pnpm workspace/root-lockfile shape; it does not syntactically ban every package-local lockfile. That narrower pathname observation does not authorize an Astro installer to choose npm, yarn, pnpm, or another manager: the Q2 lock forbids a substitute-manager escape, Q1 has no gate-passing layout, and E5 selects no manager. A package-local install artifact remains unauthorized as part of an unapproved application scaffold.

**Remedy:** a clarification may correct "unblocked" to mean process routing only, but it cannot lift these locks. Any authority to create the Astro application, choose `frontend/` as its location, or choose a package manager requires a narrow `$review scope monorepo-structure-topology-reopen` reopen with the protocol's strong-contradiction acknowledgment, scope affirmation, and fresh evidence. Until then, only non-topology evidence work is permitted.
