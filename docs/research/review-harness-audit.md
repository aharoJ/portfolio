# $review protocol audit: end-to-end behavior, evidence gaps, and tuning candidates

**Research status:** audit and recommendations only. This report does not modify the $review protocol, its skill, its archive, or its tooling.

**Scope boundary:** Every statement about $review below is grounded only in local material on this machine: the Codex adapter, canonical protocol, constraints, historical drafts, intake manifests, ledgers, runbooks, changelogs, decisions, archives, and deferred notes. External 2026 research appears only in the final frontier section and is never used as evidence of how this local protocol behaves.

**Terminology:** Codex invokes this local protocol as $review. Historical canonical material commonly spells the command /review. The installed adapter makes those the same protocol surface for this environment. [Codex adapter](/Users/aharoj/.codex/skills/review/SKILL.md:22)

## Executive result

The protocol is a serious evidence-oriented review system, not merely a prompt template. Its core loop is:

~~~
scope → bundle → external research → resolve → research close/runbook
      → implement → bundle → blind audit R1 → resolve/repair/sweep
      → later audit rounds as needed → close
~~~

The strongest locally demonstrated properties are:

- state-based routing rather than dependence on a transient conversation;
- a research-before-ordinary-implementation boundary;
- blind first-pass audit discovery;
- durable resolve ledgers before roll, halt, or close;
- explicit scope routing for real defects outside the current change;
- a close phase that checks and records what it claims to have done.

Those are worth keeping. [two-phase/cycle rules](/Users/aharoj/.skills/review-protocol/protocol.md:132) [blind R1](/Users/aharoj/.skills/review-protocol/protocol.md:897) [resolve](/Users/aharoj/.skills/review-protocol/protocol.md:939) [close](/Users/aharoj/.skills/review-protocol/protocol.md:1139)

The audit also finds five credible tuning targets, none of which should be changed on intuition:

1. **Reopen as focused research:** C50 has a live-behavior versus archived-constraint naming/authority ambiguity.
2. **Investigate, do not add a slot:** durable raw-panel/facet evidence has a demonstrated provenance gap, but retention has unresolved privacy, redaction, and schema costs.
3. **Reopen operationally:** C88 declares safety intent but explicitly lacks a proven executor/protected-list implementation.
4. **Reopen as bounded self-audit:** a past close-economy tally gap was documented and corrected manually, but no mechanical self-check exists.
5. **Clean up / investigate:** the implementation-cycle-sequence-advancement deferred note is stale relative to later protocol text, while retained records do not yet prove the successor path succeeded in production use.

The report's bottom line for the portfolio: make the portfolio's future reviews/ tree a durable, narrow evidence home; route portfolio-specific observations there first; use it to test claim-to-artifact, scope completeness, contract, migration, CI, and deployment seams. Do not automatically elevate a portfolio result into harness doctrine. The local routing rule already demands a narrow durable surface unless a mechanism has cross-domain recurrence. [C91 routing](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:289)

## What this audit can and cannot know

The protocol tells an agent what it must read, ask, write, and decide. Ledgers and artifacts show selected branches, recorded reasons, and durable state. Neither proves an agent's private reasoning, a panelist's unrecorded thoughts, nor that every historic interactive prompt was actually displayed.

That distinction matters. In this report:

| Evidence class | What it supports | What it cannot support |
|---|---|---|
| Current protocol / adapter | Normative behavior expected now | Proof that every historic run complied |
| Draft, intake, manifest, ledger, runbook | A durable step, branch, input, or outcome was recorded | Hidden conversation, unpersisted raw response, or semantic correctness by itself |
| Archive count | Retained on-disk adoption frequency | A claim that an absent artifact was never used anywhere |
| External frontier source | A candidate experiment | A claim that the local harness already works that way |

This boundary is itself consistent with the protocol's explicit statement that its emissions surface potentially skipped or fabricated execution claims but do not prove semantic correctness, computation, or good faith. [C46 bounded claim](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:124)

Confidence terminology:

| Confidence | Meaning |
|---|---|
| High | Direct local source and a narrowly stated conclusion. |
| Medium | Direct local evidence plus a stated inference or limited retained corpus. |
| Low / investigate | The record is incomplete, competing explanations remain, or the question needs a focused run. |

## A real completed run, traced end to end

The best retained complete specimen is coupled-surface-reconcile in the v3.43 archive: research R1 closed, then implementation R1 through R3 closed. Its roadmap, changelog, research ledger, implementation-close ledger, and runbook form a mutually linked trace. [roadmap close](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/roadmap.md:645) [changelog](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/CHANGELOG.md:487) [research ledger](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/coupled-surface-reconcile/state/research/resolve-r1.json:1) [implementation close ledger](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/coupled-surface-reconcile/state/implementation/resolve-r3.json:1) [runbook](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/runbook/coupled-surface-reconcile.md:1)

It is not proof that every topic looks like this. It is a concrete, completed counterweight to a purely theoretical protocol reading.

### Stage-by-stage trace

| Stage | What chooses the next work | What the agent writes / asks, and why | Durable proof in the specimen | Challenge and confidence |
|---|---|---|---|---|
| 0. Load | The Codex adapter requires rereading canonical skill, protocol, and constraints before each $review action. [adapter](/Users/aharoj/.codex/skills/review/SKILL.md:22) | It establishes the current operating contract before acting rather than relying on old chat memory. | The adapter is current source, not an execution receipt. | **Challenge:** no retained per-turn read receipt proves every historical agent complied. **High** as current rule; **investigate** as historic-frequency claim. |
| 1. scope | The user request is treated as a hypothesis. The procedure checks premise/context, scans revisit triggers, identifies bounded questions, and requires a status quo/null option per question. [scope](/Users/aharoj/.skills/review-protocol/protocol.md:785) | It writes a roadmap skeleton but intentionally does not write Type; Type is evidence-derived at close. It asks once for an explicit scope affirmation because affirmation authorizes bundling. [scope behavior](/Users/aharoj/.skills/review-protocol/SKILL.md:276) | The specimen's research draft retains premise risks, two bounded questions, and status-quo options. [research R1](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/coupled-surface-reconcile/research/coupled-surface-reconcile-r1.md:30) | **Challenge:** the retained archive does not preserve the live affirmation exchange; downstream artifacts prove a scope was materialized, not every wording of the dialogue. **High** normative rule; **investigate** transcript-level adherence. |
| 2. bundle for research | Cycle detection selects research or implementation from files, not roadmap Type or conversational recollection. [cycle detection](/Users/aharoj/.skills/review-protocol/protocol.md:181) | It writes a review draft first, compiles an intake atomically, and has external reviewers respond to a constrained question instead of allowing the lead to decide the answer in the prompt. [bundle](/Users/aharoj/.skills/review-protocol/protocol.md:903) | The specimen has separate research draft and intake/manifest artifacts under its topic. [specimen tree](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/coupled-surface-reconcile/intakes/research-r1.manifest.json:1) | **Challenge:** historical ledgers include a few bundle-rN action labels, so historical representation was not perfectly uniform. **High** current behavior; **Medium** generalization to every prior revision. |
| 3. research resolve | The resolver evaluates responses with ADOPT, DISMISS, or INVESTIGATE choices, applies the convergence/roll/halt predicates, and records the branch before its side effects. [research resolve](/Users/aharoj/.skills/review-protocol/protocol.md:1023) | It writes a durable ledger so a later session can learn why a question locked, rolled, or halted. It writes a runbook after convergence to bridge decisions into implementation. [resolve ledger discipline](/Users/aharoj/.skills/review-protocol/SKILL.md:457) | The specimen's R1 research ledger records two 9/9 locks and a close branch. [research ledger](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/coupled-surface-reconcile/state/research/resolve-r1.json:13) | **Challenge:** research is bounded, not self-guaranteeing. Ledger-schema-conformance reached a 4-4-1 divergence and halted after R4. [counterexample](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/ledger-schema-conformance/state/research/resolve-r4.json:40) **High**. |
| 4. research close / runbook | A completed research cycle supplies locked decisions plus a runbook; ordinary implementation is blocked without them. [implementation entry](/Users/aharoj/.skills/review-protocol/protocol.md:844) | The runbook turns a research conclusion into bounded implementation intent rather than making a code edit during research. | The specimen runbook records the resulting plan. [runbook](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/runbook/coupled-surface-reconcile.md:9) | **Challenge:** a runbook can still be wrong or stale. It is a bridge artifact, not proof. **High** that it is required on normal path; **Medium** that it captures sufficient intent for every topic. |
| 5. implement / audit R1 | Implement enforces completed research or an explicitly materialized pure-hotfix exception, captures baseline state, identifies source/tests/dependencies/build config, then bundles without a redundant confirmation prompt. [implement](/Users/aharoj/.skills/review-protocol/protocol.md:863) | R1 includes source, tests, constraints, and context while excluding lead findings and classifications. The reason is independent discovery before lead classification. [blind R1](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:141) | The blind-R1 language and a real R1 roll are preserved in ledger-schema-conformance. [R1 audit](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/ledger-schema-conformance/audit/ledger-schema-conformance-r1.md:1) [R1 ledger](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/ledger-schema-conformance/state/implementation/resolve-r1.json:1) | **Challenge:** blind discovery does not guarantee diverse or complete evidence; that ledger records four non-responses. [counterexample](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/ledger-schema-conformance/state/implementation/resolve-r1.json:24) **High** for rule; **Medium** for discovery benefit in any single run. |
| 6. implementation resolve / repair / sweep | Each observed claim is source-verified, scope-checked, classified, repaired/tested where eligible, and swept for the same defect pattern. A ledger precedes roll, halt, or close. [implementation resolve](/Users/aharoj/.skills/review-protocol/protocol.md:939) [sweep](/Users/aharoj/.skills/review-protocol/protocol.md:1965) | It writes classifications, evidence, repair state, regression evidence, and branch predicates so a later round knows what not to re-audit and what remains. | The specimen records R1/R2 work and R3 close; its final ledger is the durable end state. [R3 ledger](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/coupled-surface-reconcile/state/implementation/resolve-r3.json:1) | **Challenge:** source/emit checks are not proof of correctness. A later real topic hit a cap with three real issues and routed an out-of-scope defect. [cap counterexample](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/ledger-schema-conformance/state/implementation/resolve-r13.json:19) **High**. |
| 7. close | Preflight gates run before SOT writes; close then updates project records, runbook, Type, and commit state. [close](/Users/aharoj/.skills/review-protocol/protocol.md:1139) | It writes durable ownership-specific records so a fresh session can tell modification history, rationale, operational guidance, and remaining constraints apart. | The specimen's changelog and roadmap record the combined completion, and the R3 ledger records close. [changelog](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/CHANGELOG.md:487) [roadmap](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/roadmap.md:645) | **Challenge:** a close can halt after some trail has been written; recovery must repair the named gate rather than blindly replay every close step. [targeted recovery](/Users/aharoj/.skills/review-protocol/SKILL.md:629) **High**. |
| 8. after close | A later change starts a new bounded topic; a real defect discovered outside a ratified scope is routed rather than silently pulled into a completed cycle. [C99](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:414) | It writes a deferred/routed record in the target repository's convention, preserving visibility without changing the current cycle's result. | The scope-seal archive demonstrates the danger of allowing scope to drift and of inferring work from a prepared intake. [unresolved record](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/audit-scope-seal/UNRESOLVED.md:1) | **Challenge:** routing can become avoidance if nobody owns the later topic. The protocol preserves visibility; it does not by itself supply product prioritization. **Medium**. |

### Answering “why do agents pick, write, and ask these things?”

We can answer from the protocol's control logic, not from a claim about hidden model intent:

- **They pick a research cycle** because file predicates say research is incomplete, not because the conversation sounds architectural. [cycle rules](/Users/aharoj/.skills/review-protocol/protocol.md:181)
- **They ask premise and null-option questions** to expose a direction that contradicts local decisions or assumes change is necessary without evidence. [scope](/Users/aharoj/.skills/review-protocol/protocol.md:785)
- **They write a draft before an intake** because the draft is the human/agent-authored review contract and the compiler turns it into a reproducible panel input. [bundle](/Users/aharoj/.skills/review-protocol/protocol.md:903)
- **They ask external reviewers bounded questions** because the protocol separates discovery/evidence from lead classification and keeps R1 blind for implementation. [R1 blind rule](/Users/aharoj/.skills/review-protocol/protocol.md:897)
- **They write a ledger before changing branch** because the next session must be able to reconstruct a roll, halt, or close from disk state. [resolve](/Users/aharoj/.skills/review-protocol/protocol.md:939)
- **They ask for a scoped file list and exclusions** because audit completeness includes tightly coupled dependencies and build configuration, not just source lines. [implementation scope](/Users/aharoj/.skills/review-protocol/protocol.md:844)
- **They route rather than absorb some findings** because scope discipline protects a cycle's conclusion from becoming an unbounded cleanup campaign. [C99](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:414)

The counterexample is always the same boundary: no protocol text or ledger can establish the private causal story of an individual model. It establishes obligations, durable input/output, and declared rationale. That is enough to audit the system's claims, not enough to read minds.

## What is used every time, conditionally, rarely, or not as active behavior

This section separates **normative current requirements** from **retained-artifact frequency**. It does not call an absent file “never used.”

### Current contract

| Classification | Current behavior | Verdict | Challenge / confidence |
|---|---|---|---|
| Always by contract | Reread canonical sources before each $review action; draft before intake; research before ordinary implementation; resolve ledger before side effect; close-economy measurement at every close. [adapter](/Users/aharoj/.codex/skills/review/SKILL.md:22) [canonical cycle](/Users/aharoj/.skills/review-protocol/SKILL.md:10) [close economy](/Users/aharoj/.skills/review-protocol/SKILL.md:611) | **KEEP** | Historical archives include pre-schema and transition eras, so this is a current contract, not proof of universal historical compliance. **High**. |
| Conditional | Strong premise acknowledgment; hotfix research skip; web-leverage material; C46 emissions; C48 read-before-edit coverage; hard-cap/convergence/routing sidecars. [scope](/Users/aharoj/.skills/review-protocol/SKILL.md:276) [hotfix](/Users/aharoj/.skills/review-protocol/SKILL.md:316) [C46/C48](/Users/aharoj/.skills/review-protocol/protocol.md:251) | **KEEP CONDITIONAL** | Conditional paths should not be pressured toward 100% usage; their value is correct activation under their predicates. **High**. |
| Retired from active use | check, generate, triage, ship, audit command names; old templates/generated/rounds paths; lead pre-filter; fixed C51 routing tiers. [obsolete conventions](/Users/aharoj/.skills/review-protocol/SKILL.md:71) [C55 retirement](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:141) [C51 retirement](/Users/aharoj/.skills/review-protocol/SKILL.md:63) | **KILL FROM ACTIVE USE; KEEP ARCHIVE** | Legacy artifacts are historical evidence and must remain immutable. “Kill” here never means delete the archive. **High**. |

### Retained corpus census

On 2026-09-29, a read-only filename-pattern census of the local reviews tree found 255 resolve ledgers, 253 matching audit/research intake manifests, 36 baseline refs, 7 hard-cap override files, 8 convergence override files, 6 routing-verification manifests, 1 scope-manifest plus 1 scope-ratified file, and zero retained commit-marker or deferrals sidecars. The root inspected is the local canonical corpus. [local review corpus](/Users/aharoj/.skills/review-protocol/reviews)

Resolve-ledger action values were 178 roll, 55 close, 15 halt, and 6 historic bundle-rN labels. The result supports only the narrow statement that **roll is common in retained records while special overrides are uncommon retained artifacts**.

| Artifact or path | What the census supports | What it does not support | Verdict |
|---|---|---|---|
| Resolve ledgers / intake manifests | These are the dominant surviving operational evidence forms. | Every conversation or every reviewer response is preserved. | **KEEP** |
| Hard-cap and convergence overrides | They are exceptional rather than normal, and have actual uses. | They are bad, obsolete, or “never needed.” | **KEEP CONDITIONAL** |
| Routing manifests | They have real retained uses. | Absence in a topic proves no dispatch happened; current close rules deliberately fail closed when non-use cannot be proven. [routing rule](/Users/aharoj/.skills/review-protocol/protocol.md:1215) | **KEEP CONDITIONAL** |
| Scope seal pair | At least one real topic needed ratification machinery. | One specimen proves the universal cost/benefit of sealing every kind of work. | **KEEP; INVESTIGATE ADOPTION CRITERIA** |
| Commit-marker / deferrals sidecars at zero retained count | They are not observed in this retained filename census. | They were never used, are invalid, or should be deleted from the grammar. | **INVESTIGATE** |

The audit-scope-seal record provides the required counterexample to naive artifact inference: a terminal-round draft, intake, and manifest exist, but no terminal resolution was ever found; the archive explicitly says not to infer execution from preparation. [UNRESOLVED](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/audit-scope-seal/UNRESOLVED.md:1)

**Confidence:** Medium for retained counts, because counts depend on current filenames and archive retention; Low for any claim about all historic or unpersisted activity.

### Scope sealing is complementary, not a universal reflex

C100 makes scope admission fail closed when its sealing mechanism is adopted; C99 then handles a real defect discovered beyond the admitted boundary at resolve time. The local constraint explicitly says the two mechanisms complement rather than replace one another. [C100](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:430) The retained census finds one scope-manifest/ratification pair, and the audit-scope-seal history gives it a real provenance story. [scope artifacts](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/audit-scope-seal/.scope-manifest.json:1)

**Verdict:** **KEEP the mechanism; INVESTIGATE its adoption threshold.** It is promising for a portfolio release slice involving contracts, migrations, deployment, or a high-risk audit, but one archived deployment is insufficient evidence to require it for every small UI or documentation topic.

**Counterexample and confidence:** a universal seal can add costly ceremony and give a false sense of total coverage. A weak seal without a real, inspectable release-slice definition is worse than an honest scoped exclusion. **High** that C99/C100 are complementary in the local contract; **Medium** that this portfolio should use the mechanism beyond high-risk slices.

## What is ignored, deliberately excluded, or insufficiently recorded

### Deliberate exclusions

1. **R1 ignores lead findings and classifications.** That is an intentional anti-anchoring boundary, not missing work. [C55](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:141)
2. **The resolver does not turn every observed defect into current-cycle work.** Real out-of-scope defects are routed. [C99](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:414)
3. **Routing ignores non-authoritative navigation artifacts.** The protocol keeps .index/ derived and never routing-authoritative; it rejects an authoritative _phase because it creates a second phase truth. [adoption tiers](/Users/aharoj/.skills/review-protocol/protocol.md:105) [phase rationale](/Users/aharoj/.skills/review-protocol/protocol.md:112)
4. **The active command vocabulary ignores retired umbrella commands and old directories.** [obsolete conventions](/Users/aharoj/.skills/review-protocol/SKILL.md:71)

**Verdict:** keep these exclusions. The counterexample is that exclusions can hide information from a human reader; this is why the protocol must preserve the bounded evidence and rationale it does accept. **High** that they are intentional, **Medium** that each remains optimal indefinitely.

### Raw panel evidence is a genuine unresolved gap

The closed-world tree intentionally rejects on-disk panelist response files in this protocol repository. [tree slot grammar](/Users/aharoj/.skills/review-protocol/protocol.md:84) This keeps topic state clean and guards against unsanctioned artifacts. But ledger-schema-conformance records a practical downside: malformed/early ledger history plus conversation-only panel responses made later attribution impossible to reconstruct fully. [local provenance counterexample](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/ledger-schema-conformance/research/ledger-schema-conformance-r1.md:34)

The protocol already routes the right next question: a deferred local note asks whether bounded durable raw-panel evidence or facet receipts are appropriate, explicitly says the absence is not proof of a breach, and forbids authorizing a new slot now. [deferred research question](/Users/aharoj/.skills/review-protocol/notes/deferred/raw-panel-evidence-durability.md:3)

**Verdict:** **REOPEN AS RESEARCH ONLY.** Do not add raw transcript dumping, a portfolio artifact class, or a new tree slot now.

**Why challenge this conclusion?** Retention might improve replay but introduce answer leakage, privacy, redaction lineage, storage cost, false authority, and slot-grammar complexity. The existing note records those unresolved questions. [same note](/Users/aharoj/.skills/review-protocol/notes/deferred/raw-panel-evidence-durability.md:21)

**Confidence:** High that the evidence gap exists; Low to Medium that raw retention is the correct remedy.

## Why the rules and tree nest this way

The tree is not arbitrary nesting:

~~~
reviews/
├── CHANGELOG.md       modification history
├── decisions.md       rationale and locked choices
├── roadmap.md         forward plan and closed-topic summary
├── constraints.md     live operational knowledge
├── runbook/           bridge from resolved research to operation/implementation
├── <topic>/
│   ├── research/      human-readable question drafts
│   ├── audit/         human-readable audit drafts
│   ├── intakes/       compiled external-review input + manifest
│   └── state/         resolve ledger / conditional evidence
└── archive/           immutable era record
~~~

The current canonical rule gives four distinct SOT owners, hand-appended append-only history, chronological topic artifacts, and a closed-world topic grammar. [directory tree](/Users/aharoj/.skills/review-protocol/protocol.md:35) [SOT integrity](/Users/aharoj/.skills/review-protocol/protocol.md:77) [slot grammar](/Users/aharoj/.skills/review-protocol/protocol.md:84) The protocol's historical rationale says one-topic/one-directory emerged after agents placed artifacts in the first available directory rather than the right home. [one-topic rule](/Users/aharoj/.skills/review-protocol/protocol.md:162)

**Verdict:** **KEEP the tree and its separation of draft, compiled input, outcome ledger, and operating runbook.**

**Why it helps $review loops:** a new session can reconstruct state from disk; a reviewer can check what question was posed separately from what evidence was compiled and what conclusion was recorded; a close-time validator can distinguish a sanctioned durable artifact from litter. The system becomes easier to falsify because the claimed transition has a named location.

**Counterexample:** cleanliness does not establish semantic correctness. C46 expressly limits the tree/emission advantage to detection-surfacing. [C46](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:124) Strict grammar also trades raw response replay for clean state, as described above.

**Confidence:** High that this is the current architecture and supports reconstruction; Medium that it is optimal for every downstream repository because the protocol itself defines adoption tiers.

### Indexes and phase files are not the answer

The local tree-standardization run intentionally kept a generated .index/ optional, derived, non-authoritative, and only recommended after roughly 100 topics plus recorded browsing pain. It omitted _phase from the protocol repository because a second phase truth can misroute a fresh session away from the actual predicates. [tree taxonomy runbook](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/runbook/tree-taxonomy-standardization.md:1) [canonical tier](/Users/aharoj/.skills/review-protocol/protocol.md:105)

**Verdict:** **KEEP OMITTED** for this portfolio now. Its requested .done delivery markers are documentation delivery markers, not $review state.

**Counterexample:** a downstream browser/reporting consumer could justify a derived-only phase annotation; a >100-topic deployment with documented browsing pain could justify a generated index. Those are already explicit triggers, not missing imagination. [index trigger](/Users/aharoj/.skills/review-protocol/protocol.md:111)

**Confidence:** High for current local status; Medium for downstream relevance.

## Verdict register: keep, improve, reopen, kill, clean up, move, investigate

| Item | Evidence and reasoning | Verdict | Counterexample / confidence |
|---|---|---|---|
| Core two-phase state-driven loop | The contract and the coupled-surface-reconcile completed trace align. [cycle](/Users/aharoj/.skills/review-protocol/protocol.md:132) [specimen close](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/coupled-surface-reconcile/state/implementation/resolve-r3.json:1) | **KEEP** | Research can halt/diverge; state routing does not make decisions true. **High**. |
| R1 blind discovery / no pre-filter | Local C55 records both anchoring and duplicated-read/token costs, then removes the pre-filter. [C55](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:141) | **KEEP KILLED** for the old pre-filter; **KEEP** blind R1 | Non-response and diversity gaps remain possible. Do not claim blind means complete. **High**. |
| C46 emissions and C48 read-before-edit | These expose branch/file-state/read claims and name their own bounded weaknesses. [C46/C48](/Users/aharoj/.skills/review-protocol/protocol.md:251) | **KEEP; LABEL PRECISELY** | They are not semantic proof or anti-hallucination mechanisms. **High**. |
| C99 scope routing | Local rule preserves real out-of-scope defects without scope creep. [C99](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:414) | **KEEP** | Can become a parking lot without later ownership. **High** protocol rule; **Medium** effectiveness outcome. |
| C91 narrowest durable surface | Portfolio-specific observation should remain in portfolio review evidence; promotion to protocol doctrine needs broader recurring mechanism evidence. [C91](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:289) | **KEEP** | An operator may elevate with a named cross-domain reason, but should retain the originating local trail. **High**. |
| C50 output-compression authority | Live SKILL has operative C50 compression guidance, while live constraints says its body is archived and the P8 map says retire-to-archive. [live C50](/Users/aharoj/.skills/review-protocol/SKILL.md:25) [constraint tombstone](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:138) [P8 disposition](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/p8-obligation-trim/disposition-map.tsv:41) A completed ledger still cites it as active context. [specimen ledger](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/coupled-surface-reconcile/state/implementation/resolve-r3.json:65) | **REOPEN / INVESTIGATE** authority and terminology; do not change behavior now | The archive may have retired only the numbered constraint body while retaining a SKILL convention. Thus the ambiguity is proven; “compression is wrong” is not. **Very High** ambiguity, **Medium** remedy. |
| Fixed C51 routing tiers | Current SKILL retires fixed tiers but preserves bounded delegation and verification where historic dispatch was used. [C51 status](/Users/aharoj/.skills/review-protocol/SKILL.md:63) | **KEEP KILLED** fixed tiers; **KEEP** C69 cap/verification | Historic C51 use still requires verification; retirement is not proof of non-use. **High**. |
| C88 protected-operation safety intent | C88 says it is written intent only and its protected list/executor remains open. [C88](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:257) [deferred state](/Users/aharoj/.skills/review-protocol/notes/deferred/c88-smoke-alarm-carve-out-list.md:3) | **REOPEN / INVESTIGATE** operational gap | This does not prove an unsafe demotion happened. It proves mechanical protection is not established. **High**. |
| Close-economy tally self-check | Local deferred note records a decorative citation miscounted as load-bearing, hand-corrected, with a bounded candidate for future work. [deferred note](/Users/aharoj/.skills/review-protocol/notes/deferred/close-economy-weight-tally-self-check.md:3) | **REOPEN AS BOUNDED SELF-AUDIT RESEARCH** | It is not a live defect and should not trigger immediate machinery. **High** history; **Medium** solution. |
| Implementation-cycle-sequence-advancement deferred status | Deferred note says no advancement operation, while current protocol describes action: advance and disk-derived successor handoff; its research topic is closed. [deferred note](/Users/aharoj/.skills/review-protocol/notes/deferred/implementation-cycle-sequence-advancement.md:29) [current behavior](/Users/aharoj/.skills/review-protocol/protocol.md:990) [research close](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/implementation-cycle-sequence-advancement/state/research/resolve-r3.json:35) | **CLEAN UP / INVESTIGATE** stale status | Retained implementation ledgers do not demonstrate a successful advance path, so do not declare the entire concern solved. **High** mismatch; **Medium** final disposition. |
| Raw panel/facet durability | Documented provenance gap, already correctly routed as open research. [deferred question](/Users/aharoj/.skills/review-protocol/notes/deferred/raw-panel-evidence-durability.md:3) | **REOPEN AS RESEARCH ONLY** | Retention could create more harm than value. **High** gap; **Low–Medium** remedy. |
| Active corpus pruning | P8 used keep/merge/retire rather than preserving every old obligation as active. [P8 README](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/reviews/p8-obligation-trim/README.md:9) | **KEEP**; later consider an informational cross-reference report only | C50 shows retirement must leave an unambiguous active-behavior carrier. A new report must never become a competing SOT. **High**. |
| Old commands and directory conventions | Current SKILL explicitly bans them. [obsolete conventions](/Users/aharoj/.skills/review-protocol/SKILL.md:71) | **KILL FOR GOOD FROM ACTIVE USE; KEEP IMMUTABLE ARCHIVE** | Legacy records remain needed for replay and archaeology. **High**. |

## How the portfolio should help tune $review without contaminating it

The portfolio should not become a second implementation of the protocol. It should become a normal, full-stack repository with sharply testable seams and a project-local reviews/ trail when $review is invoked.

### Local-first routing rule

For a portfolio observation:

1. Record it in the portfolio's own review topic, decision, constraint, runbook, deferred note, or test—whichever is the narrowest durable home.
2. Reproduce it locally with a test, artifact, command receipt, or controlled failure where possible.
3. Ask whether the mechanism recurs across domains/projects before proposing a harness-level rule.
4. Preserve the original portfolio evidence even if a future protocol topic is opened.

This mirrors C91's promotion threshold and C99's scope discipline. [C91](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:289) [C99](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:414)

### Concrete portfolio probes

| Probe | What it challenges | Expected $review learning | Confidence |
|---|---|---|---|
| Contract drift | Change a public API response without changing the web client or compatibility test. | Whether scope compilation identifies both producer and consumer as a single release slice. | Medium; requires implementation. |
| Migration mismatch | Apply a compatible/then-incompatible migration in an ephemeral DB and run deployment rehearsal. | Whether audit/close demand migration order, backfill, rollback/restore, and receipt evidence rather than source-only claims. | Medium; requires real DB setup. |
| Task-cache invalidation | Change an undeclared generated input or environment input in a disposable branch. | Whether the review recognizes a green cached task as incomplete evidence. | Medium; requires chosen task runner. |
| Out-of-scope finding | Seed a real defect outside a ratified change. | Whether it is visible and routed without broadening result counts or silently disappearing. | High as a C99 exercise; product outcome still needs a run. |
| Fresh-session replay | Give a new session only the durable review tree after a completed feature. | Whether scope, decisions, evidence, deferrals, and close state are reconstructible without chat memory. | High as a test of the current design; not a semantic correctness proof. |

Every probe should be reversible, explicitly labeled as a test, and opened as a bounded local review topic. Do not manufacture a broad protocol rule from a single portfolio result. That is the counterexample guard to “one clever experiment becomes doctrine.”

## Frontier review and QA work: mapping only what can apply

The following sources are external and current as of 2026-09-29. They are not evidence about this $review protocol. Each mapping says what can be tested locally, not what must be adopted.

| 2026 work | Narrow useful idea | Local $review mapping | Verdict / confidence |
|---|---|---|---|
| c-CRAB studies converting human review comments into tests. [c-CRAB](https://arxiv.org/abs/2603.23448) | A review claim becomes more durable when independently tested. | Take a small frozen set of accepted local findings and write independent regression tests; compare whether the tests actually encode the claim. This complements the protocol's existing ledger/runbook history. [local artifacts](/Users/aharoj/.skills/review-protocol/protocol.md:35) | **INVESTIGATE.** High confidence in source existence; Low–Medium transfer confidence. |
| SWE-ABS reports that mutation/coverage checks can reject patches that initially pass benchmark tests. [SWE-ABS](https://arxiv.org/abs/2603.00520) | Selective adversarial mutation can test whether a claimed verification is sensitive. | Use only on high-risk local claims such as authorization, contract compatibility, migration ordering, or close-gate invariants. The protocol's own C46 limit makes this a complement rather than redundant ceremony. [C46 limit](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:124) | **FRONTIER EXPERIMENT.** Medium evidence transfer; do not make it every-run ritual. |
| OpenAI's SWE-Bench Pro analysis reports task-quality/evaluation noise and uses multi-stage review. [OpenAI evaluation analysis](https://openai.com/index/separating-signal-from-noise-coding-evaluations/) | The evaluator and task statement need audit, not blind trust. | Label ambiguous local tasks, retain reproduction outcomes, and test whether a reviewer was judging an underspecified task. Scope premise/null questions are an existing local entry point. [scope](/Users/aharoj/.skills/review-protocol/protocol.md:785) | **INVESTIGATE.** High source confidence; Medium local applicability. |
| SWE-CI and SlopCodeBench explore longitudinal/evolving-codebase evaluation. [SWE-CI](https://arxiv.org/abs/2603.03823) [SlopCodeBench](https://arxiv.org/abs/2603.24755) | Long-horizon replay is more informative than a one-shot benchmark score. | Build a versioned, local replay corpus from completed portfolio/harness topics, with fixed commits and known evidence outcomes. | **FRONTIER EXPERIMENT.** Young work; do not infer a universal metric. |
| Terminal Bench emphasizes repeatable versioned task execution. [Terminal Bench](https://github.com/harbor-framework/terminal-bench) | Repeated execution reveals variance and non-determinism. | Re-run selected portfolio review probes against a fixed commit and record variance in findings, routes, and proof. | **INVESTIGATE.** Useful operational pattern, not a prescribed $review component. |

The hard conclusion is negative: there is no local or external basis to assume that more agents, longer chains, or a scalar “quality score” automatically improve $review. The locally justified direction is better falsifiability: bounded claims, durable evidence, independent reproduction, and replay.

### 2027 is forecast, not evidence

No observed 2027 research can be asserted on the date of this report. The responsible 2027 outlook is therefore a list of pre-registered questions:

- Does a local replay corpus detect harness regressions better than a new prompt rule?
- Does selective mutation catch important false confidence without exhausting review budget?
- Does separating discovery, verification, and triage reduce anchoring or simply add delay?
- Can a durable facet receipt improve provenance without exposing or bloating raw panel material?

Each is **investigate** until a controlled local run produces evidence.

## Ordered next research topics, not implementation work

1. **C50 authority reconciliation.** Determine the canonical active carrier, name, and references for compression behavior; preserve behavior until the decision is made.
2. **Raw-panel/facet evidence durability.** Evaluate a bounded, privacy-aware receipt design against the documented attribution gap; no new slot without a decision.
3. **C88 operational mechanism.** Establish whether the protected-operation intent needs a curated list and executor, and what evidence would prove it works.
4. **Close-economy tally self-audit.** Design the smallest self-check that catches decorative/load-bearing misclassification without creating a new authoritative state surface.
5. **Sequence-advancement status reconciliation.** Compare current protocol behavior, deferred note, and implementation records; decide close/supersede/retain only after an actual success or a named remaining gap.
6. **Portfolio release-slice experiments.** After scaffold exists, run the five bounded probes above and retain findings locally before proposing any harness change.

## Final conclusion

$review is already structured as a living, evidence-oriented protocol: it separates exploration from implementation, makes selected branches durable, prevents a number of scope and memory failures, and preserves an archaeology of why constraints exist. The right tuning posture is not to add machinery everywhere. It is to challenge each active mechanism against a counterexample, distinguish direct evidence from inference, and route uncertainty into bounded research rather than pretending it is solved.

For the portfolio, this means building a system with genuine frontend/API/database/deployment seams and using it to test the protocol's ability to scope, discover, verify, route, replay, and close. The portfolio should strengthen the harness only through reproducible local evidence—not through generic claims about agents, and not through unmeasured optimism.
