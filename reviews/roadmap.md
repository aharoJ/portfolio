# Roadmap -- portfolio

## stack-selection: v0.2 full-stack selection

Status: RESEARCH COMPLETE; implementation ADMITTED under operator-authorized recovery; awaiting static article slice and audit R1 (2026-09-30)

Type: research + implementation

Goal: Select the smallest reviewable, self-verifiable stack for `apps/web`, `apps/api`, the API-owned database/ORM, and—if the first real web/API boundary warrants it—one transport-contract authority, while preserving the locked monorepo structure.

Result: R1 left all four choices open. R2 used the supplied operator product facts as the acceptance record and locked Astro static-first/islands for `apps/web` (7/8, robust) while locking the Status Quo / Null Option for API runtime, persistence/migration, and contract authority (8/8 each, robust). The 8 responding panelists all evaluated each binary gate at condition level; no echo-only vote was counted. Q2–Q4 unanimity is conditional gate agreement, not independent confirmation of the operator facts: the intake precomputed FAIL absent a conflicting supplied artifact. Research is complete. Both topology recoveries are COMPLETE; the static application is admitted in frontend/ with npm and an application-local lockfile. Stack-selection remains implementation-pending until its own audit closes.

Cross-review stats: 2 research rounds; R2 dispatched 9 named panelists; 8 substantive responses; 1 waived non-response; 4 locked decisions; 0 open follow-ups; no implementation/audit cycle; no source-code findings.

| Key decision | Consensus | Round |
|---|---:|---:|
| Use Astro static-first/islands for static article delivery in `apps/web` | 7/8, robust after any one removal | R2 |
| Select no v0.2 API runtime | 8/8, robust after any one removal | R2 |
| Select no v0.2 persistence or migration layer | 8/8, robust after any one removal | R2 |
| Select no v0.2 browser-to-API contract authority | 8/8, robust after any one removal | R2 |

Runbook: `reviews/runbook/stack-selection.md`

Current prerequisite update (2026-09-30): topology-reopen is COMPLETE at `c7e6ce27ed669df589adc29bb5e2047301591bb8`; tiebreak is COMPLETE at `a4006ace6012e1e7c002b9996e3c63a40877a0e1`. The operator-authorized zero-code recovery assigns all application code and audit to stack-selection, the sole remaining open topic. The current [stack-selection runbook](runbook/stack-selection.md) supersedes old blockers and `apps/web`/root-pnpm execution examples with `frontend/`, npm and `frontend/package-lock.json`. Astro's static article choice and API/persistence/contract exclusions remain locked.

Upstream filing state: not applicable

### Historical monorepo premise record

The Q2-null condition meets the existing monorepo-structure two-deployable reopen trigger. **Disposition: REOPEN REQUIRED.** The monorepo lock names `apps/web` and `apps/api` as the two deployable roots, and its implementation gate requires the two-deployable premise to survive the first scaffold; otherwise it directs topology research to reopen before substantial paths accumulate. The null API means that condition is not met. Do not scaffold `apps/web` or `apps/api` until the reopened research round settles the topology.

Current disposition: the historical reopen requirement above is fulfilled by tiebreak decisions and both final topology recovery closes. It no longer blocks the admitted frontend/npm slice.

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

## monorepo-structure-topology-reopen: v0.3 topology reopen

Status: COMPLETE; operator-authorized research-only zero-code recovery (2026-09-30)

Type: research-only

Result: Final recovery close classifies this zero-code decision topic as research-only from its marker=no and absent audit drafts. Its 1 completed research rounds, two locked questions and local evidence satisfy the operator's deliverable; application code and implementation audit belong exclusively to stack-selection. Sealed research identities and the original close trail remain intact. All applicable close preflight, trail and economy checks pass. This topic is COMPLETE; the linked tiebreak recovery must still close before the v0.3 lineage is final.

Current lifecycle supersession: the dated verbatim authorization in decisions.md overrides earlier implementation-pending/admission statements below. Those statements remain historical; they neither require a topology implementation audit nor block the subsequently admitted stack-selection slice. No application code, extra research round, constraint, tag or shared audit closure is claimed.

### Historical research and linked-continuation record

Goal: Re-evaluate only the first v0.2 application layout and one-package root pnpm-workspace question after the locked no-API result invalidated the former two-deployable premise. The possible v0.3 service remains a revisit trigger rather than sizing input.

Historical research result: One blind research round split the external panel only at the nine exact dispatched model headings. All nine panelists responded, and all nine made condition-level E1–E5 or precise-absence mappings for both gates; no echo-only vote was counted. Q1 and Q2 both lock the Status Quo / Null Option: no v0.2 application move or API reservation, and no root pnpm workspace or root lockfile. The R1 close admits the v0.2 implementation cycle through its explicit runbook marker, while keeping every non-null topology action gated on new current evidence. The post-close null-gate harness finding confirms that this admits cycle routing only: it does not authorize an Astro scaffold in `frontend/`, a package-manager selection, or a package-local installer lockfile.

Cross-review stats: 1 research round; 9 dispatched panelists; 9 substantive responses; 0 non-responses; 2 locked decisions; 0 open follow-ups; no implementation/audit cycle; no source-code findings.

| Key decision | Consensus | Round |
|---|---:|---:|
| Keep the current topology state; do not choose an application path or API reservation without a current path-dependent constraint | 9/9, robust after any one removal | R1 |
| Do not create a root pnpm workspace or root lockfile without a gate-passing layout, pnpm selection, and durable one-package benefit | 9/9, robust after any one removal | R1 |

Runbook: `reviews/runbook/monorepo-structure-topology-reopen.md`

Historical supersession update (2026-09-30): the fresh tiebreak selects `frontend/` and application-local npm prospectively. Historical R1 Null ledgers/runbook remain unchanged; root workspace/root lockfile exclusions still apply. This topic remains implementation-pending, with lifecycle recovery A/B outside the tiebreak resolve.

### v0.3 linked continuation (operator recovery, 2026-09-30)

Version: v0.3 for this topology lineage and its [tiebreak continuation](#monorepo-structure-topology-tiebreak-v03-topology-tie-break-and-package-manager-authority); stack-selection remains v0.2. The two retained mechanical slugs form the explicitly authorized metadata-only fallback. Current version-label correction does not retime historical v0.2 product evidence or the possible v0.3 service trigger.

| Reading-order label only | Preserved mechanical research identity | Action |
|---|---|---|
| R1 | `monorepo-structure-topology-reopen` R1 | close |
| R2 | `monorepo-structure-topology-tiebreak` R1 | roll |
| R3 | `monorepo-structure-topology-tiebreak` R2 | close |

Follow the preserved [reopen R1 ledger](monorepo-structure-topology-reopen/state/research/resolve-r1.json), [tiebreak R1 ledger](monorepo-structure-topology-tiebreak/state/research/resolve-r1.json), and [tiebreak R2 closing ledger](monorepo-structure-topology-tiebreak/state/research/resolve-r2.json). These labels change no round numbers, artifact paths, ledgers, intakes, manifests, runbook markers or command routing. Current execution boundaries are in the [tiebreak runbook](runbook/monorepo-structure-topology-tiebreak.md); research remains complete and implementation pending for both topic records. No final close or tag is claimed. Rationale and operator exception: `reviews/decisions.md`, v0.3 linked-continuation recovery; external ruling: `/Users/aharoj/desk/audits/portfolio/2026-09-30-topology-merge/RULING.md`.

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

## monorepo-structure-topology-tiebreak: v0.3 topology tie-break and package-manager authority

Status: COMPLETE; operator-authorized research-only zero-code recovery (2026-09-30)

Historical continuation metadata: this is the v0.3 continuation of [topology-reopen](#monorepo-structure-topology-reopen-v03-topology-reopen), under the operator's metadata-only recovery. Its mechanical R1/R2 correspond to reading-order R2/R3 only; its closing ledger remains `monorepo-structure-topology-tiebreak` research R2. There is one logical topology version label, two preserved topic directories, and no physical merge or lifecycle reclassification. The prior proposed v0.4 assignment is superseded; separately authorized recovery is still required before only stack-selection remains open.

Type: research-only

Result: Final recovery close classifies this zero-code decision topic as research-only from its marker=no and absent audit drafts. Its 2 completed research rounds, two locked questions and local evidence satisfy the operator's deliverable; application code and implementation audit belong exclusively to stack-selection. Sealed research identities and the original close trail remain intact. All applicable close preflight, trail and economy checks pass. Both topology topics are COMPLETE; the v0.3 tag belongs on this final tiebreak close commit, for the operator to create.

Current lifecycle supersession: the dated verbatim authorization in decisions.md overrides earlier implementation-pending/admission statements below. Those statements remain historical; they neither require a topology implementation audit nor block the subsequently admitted stack-selection slice. No application code, extra research round, constraint, tag or shared audit closure is claimed.

### Historical research and linked-continuation record

Goal: Select an evidence-grounded first static Astro application location and an explicit application-local manager/installer-lockfile rule, without creating a root workspace or importing future-service requirements.

Historical research result: R1 adopted the qualified baseline-reuse rule and `frontend/` designation (6/9), plus deliberate-selection authority (6/9), while the manager split failed removal robustness and rolled. R2 adopts a complete demonstrated-adequacy selection rule with zero/multiple/root-loss fallback (6/9), with a broader current singleton core supported by seven panelists. Applying the panelists' own qualified rules selects npm only within `frontend/`, prospective installer lockfile `frontend/package-lock.json` (7/9 conservative active-panel support). Declared rule-family/npm votes are each 9/9; DeepSeek's unsupported locked Astro version prerequisite and Z.AI's absent complete prior rule exclude their qualified applications. Gemini's multiple-candidate overhead ranking is outside the adopted complete rule. All nine single removals preserve strict majorities: complete rule worst 5/8, singleton core/npm worst 6/8. Research closes at R2 below cap 4, with two fully locked questions and no open follow-ups or force dispositions. Implementation remains pending.

Cross-review stats: 2 research rounds; 9 dispatched/responding seats in each tiebreak round; R2 9 substantive responses, 0 non-responses/echoes/duplicates/degenerate bodies; 2 R2 qualified-rule/application exclusions; 2 fully locked questions; 0 investigate; no implementation/audit cycle, source-code findings or sweep. Two independent semantic and arithmetic derivations reconcile without mismatch.

| Key change | Impact |
|---|---|
| Immutable closing R2 ledger | Keeps per-model admissibility, independent tallies, evidence hashes and every removal case beside R1 |
| Current R2 decisions and implementation runbook | Replaces unresolved manager authority prospectively and gives exact application-local execution/admission boundaries |
| Complete research close trail | Records research+implementation Type while keeping implementation and earlier-topic recovery pending |

| Key decision | Consensus | Round |
|---|---:|---:|
| Qualified baseline-reuse rule and first application root `frontend/` | 6/9 qualified; worst removal 5/8 | R1 carried |
| Deliberate-selection manager authority | 6/9; worst removal 5/8 | R1 carried |
| Qualified current demonstrated-singleton rule core | 7/9; worst removal 6/8 | R2 |
| Complete zero/multiple/root-loss fallback rule | 6/9; worst removal 5/8 | R2 |
| npm within `frontend/`; prospective `frontend/package-lock.json` | 7/9 active; 7/7 admissible; worst active removal 6/8 | R2 |

Implementation authority: the topology and manager-selection prerequisites for the blocked stack-selection scaffold are settled. A later admitted implementation may create static Astro source/configuration/dependencies inside `frontend/`, use npm there, retain `frontend/package-lock.json`, and build `frontend/dist/`. Actual execution still needs applicable implementation admission and instructions consistent with the current decisions, including the separately pending lifecycle recovery of stack-selection/topology-reopen. This research task executes no scaffold/install, selects no recovery A/B, and creates no version pin or manager declaration. Root workspace/root lockfile and excluded domains remain unauthorized. Earlier runbooks' path/pnpm examples are historical for this first application; their old bytes remain preserved.

Runbook: `reviews/runbook/monorepo-structure-topology-tiebreak.md`

Evidence record: `docs/research/monorepo-structure-topology-spike.md`; published R2 intake: `reviews/monorepo-structure-topology-tiebreak/intakes/research-r2.md`; closing ledger: `reviews/monorepo-structure-topology-tiebreak/state/research/resolve-r2.json`.

Operator sequencing/commit exception: `reviews/decisions.md`. The brief requires a normal-hook research-result commit despite impact=yes; implementation is not declared complete.

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
| Notes | Apparatus bias and policy-only npm inference were tested. The bounded prospective adequacy rule is adopted; no superiority claim or inherited-command authority follows. Unsupported rule/application claims are excluded. |

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
