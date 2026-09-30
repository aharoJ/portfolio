# Research: Monorepo Structure Topology Tie-Break (Round 2)

> **For**: Independent research cross-validation by web LLMs
> **From**: Angel (aharoJ) + Codex — portfolio project
> **Date**: 2026-09-30
> **Context**: R1 settled the first application location and package-manager authority policy, but the actual manager outcome failed the single-removal robustness test. R2 resolves only that remaining outcome under deliberate-selection authority.

## About the Project

`portfolio` has one minimal `frontend/package.json` and no product Astro application. Stack-selection locked Astro for the static browser slice, with no v0.2 API, persistence/migrations, or browser-to-API contract authority. This fresh topology topic's R1 designates `frontend/` as the prospective Astro application root. No product scaffold, dependency installation, workspace, or installer lockfile has been created by these decisions.

R1 also locked **deliberate-selection authority**: a manager obtains application-local authority through an explicit, stated local selection rule. That governance lock alone does not select a manager. R2 has no preselected manager or result.

## Current Setup

### Scope and authority boundary

- Active topic: `monorepo-structure-topology-tiebreak`; R1 ledger action is `roll`, not `close`. Research remains incomplete and there is no tiebreak runbook or audit draft.
- Q1's shared rule core and `frontend/` location are carried locks. The core uses E1 equivalence and E5's unique existing package boundary; it does not lock a universal edit-cost formula, disputed additional disqualifiers, or rankings after the baseline changes.
- Q2's deliberate-selection policy is a carried lock; the manager and installer-lockfile outcome remains open.
- R2 may select a specific manager through a justified local rule, or retain no selection. R2 itself creates only research decisions, never a product scaffold or installer artifact.
- Any eventual manager authority applies only within `frontend/`. Any installer lockfile must remain inside that application root. A root workspace and root lockfile remain excluded.
- Also excluded: API/runtime/service reservation, database/migrations, contracts, authentication, CI, deployment, `packages/`, catalogs, task runners, framework replacement, and a broad package-manager redesign.
- The operator explicitly authorized resolving the collected tiebreak batch as an exception to the one-open-topic policy. Stack-selection and topology-reopen remain open with implementation pending. Their later recovery A/B choice is not a research question here.

### Evidence map

| ID | Published local source | Available facts | Limits |
|---|---|---|---|
| E1 | `docs/research/monorepo-structure-topology-spike.md` | Six detached fresh copies at `21a2d6b`; three application locations, twice each. npm `11.17.0`, Astro `^7.3.5`, package-local npm lockfile v3, absent `packageManager`. Identical normalized manifests, lockfiles, source/config/test aggregate, static HTML, static checks, Chromium browser test, and static-tree SHA-256. All listed commands exited `0`. | Only npm was exercised. No comparison of managers, production CI/deployment, ownership process, future service, or total implementation effort was measured. This record selects no manager. |
| E2 | `reviews/roadmap.md`; `reviews/runbook/stack-selection.md` | Astro is the selected static browser framework. The future API/service is a revisit trigger. Topology and installation authority must settle before the blocked first scaffold proceeds. | Earlier path/pnpm commands are historical and cannot override this topic's locks. No root-workspace authority or current manager-selection preference follows from Astro's selection. |
| E3 | `reviews/decisions.md` | The historical topology-reopen Null locks remain preserved; the fresh tiebreak R1 prospectively designates `frontend/` and locks deliberate-selection policy. R1 leaves manager authority unselected pending this follow-up. | Prior experiment commands, prior Nulls, and the operator's sequencing exception are not votes for a manager. |
| E4 | `reviews/runbook/monorepo-structure-topology-reopen.md` | The historical closed research record distinguished implementation-cycle routing from permission to create a product scaffold. | Historical runbook; not an R2 selection rule and not a substitute for the fresh decision record. |
| E5 | `frontend/package.json` | Only name `@angel/portfolio-frontend`, version `0.0.0`, and `private: true`; no `packageManager`, workspace declaration, Astro dependency, or install policy. | Its physical presence supports the Q1 baseline datum. It records no manager preference. |
| E6 | `reviews/monorepo-structure-topology-tiebreak/state/research/resolve-r1.json` | Immutable R1 resolution, rule/policy/outcome accounting, and all nine single-removal cases. Q1 settled; Q2 policy settled; manager outcome split. | Research accounting is not independent reproduction of E1, a product requirement, manager superiority, or authority to install. Raw responses remain external. |

### Recorded npm installation facts

For the selected location, E1 ran npm initialization and local Astro installation, built the static slice, checked its two HTML outputs, and passed a Chromium browser test. Its installer lockfile was `frontend/package-lock.json`, its build invocation was `cd frontend && npm run build`, and its static output was `frontend/dist/`. E1's static-tree SHA-256 was `95c87c8edd2423421bc8e4af1aa5404780548b02734a8b1177ddd4f94796509e` across all six runs.

E1 explicitly says that the commands do not assert Astro independently selected a package manager. E1 establishes feasibility and repeatability of the tested npm path; whether to deliberately adopt a local rule using that evidence is the open decision. No recorded benchmark rejects other managers.

## Your Role

Evaluate the manager outcome under the already adopted deliberate-selection authority policy.

1. State and justify the complete local selection rule **before** applying it. Include eligibility, tie/fallback handling, and what happens when evidence is absent. Do not add a progress requirement or another criterion after seeing the result.
2. Apply that same rule to npm, any other specific manager you propose, and the no-selection outcome. Do not substitute candidate names, display order, industry convention, or familiarity for evidence.
3. Map every Q2 gate to E1–E6 or a precise absent/inapplicable record. A verdict or repetition of the intake's wording without that independent mapping is echo-only and excluded from the normal vote tally.
4. Distinguish an explicit prospective decision to use a demonstrated installer from authority supposedly inherited from a historical command. Neither observed npm nor framework compatibility alone is selection authority.
5. Identify the exact outcome of your own rule. If it cannot choose a unique manager now, say no manager is selected or INVESTIGATE; do not append an unsupported npm outcome to a policy-only ADOPT.
6. Keep research selection and execution permission separate. No installer, scaffold, dependency, pin, or lockfile is created by a panel response or this round.

## Output Format

For the open Q2 question, provide:

1. **Ordered dispositions** — ADOPT / DISMISS / INVESTIGATE for your stated local selection rule, then the same for its actual manager/no-selection outcome. The policy lock is context, not an extra policy vote.
2. **Expected outcome** — precise manager if selected, otherwise no selection; application root and prospective lockfile location where applicable.
3. **Gate-to-evidence map** — one row for every gate, citing E1–E6; record insufficient, absent, or inapplicable inputs instead of filling them by assumption.
4. **Candidate comparison** — apply the identical prior rule to npm, every other manager you propose, and no selection. Explain why a demonstrated singleton is sufficient or insufficient under your rule without asserting unmeasured superiority.
5. **Outcome-consequence map** — one cited factual execution consequence for each compared outcome; keep it distinct from preferences and gate verdicts.
6. **Implementation impact** — exact prospective authority if this outcome is locked, what remains pending before stack-selection's scaffold, and the application-local/root-workspace boundary.
7. **Risks and verification** — facts that falsify the rule/outcome or trigger later re-gating.
8. **Sources used** — URLs/titles for web-backed claims, or `No live web access used`; cite local evidence IDs separately.

End with `OVERALL: ADOPT / DISMISS / INVESTIGATE` and whether the answer can coexist with Q1's `frontend/` lock and the deliberate-selection policy without entering an excluded domain.

## Constraints

- Q1 location is `frontend/`; do not vote again on all three locations or import a new Q1 ranking. Concrete new evidence falsifying the carried lock may be raised as a premise challenge.
- Deliberate-selection authority is the Q2 policy; do not collapse policy approval into manager selection or relabel the prior observed-command votes.
- No manager is selected as a premise. A local npm-selection rule, another justified specific rule, and leaving authority unselected are possible results.
- No selection means no manager declaration, installer execution, installer lockfile, or package-manager pin. It preserves the installation block even with a designated application location.
- A selected manager is confined to `frontend/`; no root workspace/root lockfile or lockfile outside that application root is authorized.
- Do not require a broad new comparative spike solely because alternatives were unmeasured; defend whether your proposed rule needs such evidence.
- Raw panel responses remain outside the repository. Research dispositions are recommendations, not source-code bug classifications.

## Premise Risks

| Risk | Evidence | Signal |
|---|---|---|
| Selecting the only demonstrated manager may reflect the experiment's chosen apparatus rather than a defensible decision rule. Test that rule explicitly instead of inheriting its result. | E1; E5; E6 | Strong |
| A policy-only ADOPT can be misread as npm authority despite an absent local rule and an unresolved outcome. | E3; E6 | Strong |
| Avoiding another prerequisite may become an unstated preference added after minimization; progress priorities must be stated before application. | R1 rule/application exclusions in E6 | Strong |
| Reusing the existing manifest can be mistaken for a pre-existing manager preference. E5 has none. | E5 | Weak |
| Prior root-pnpm instructions or a future service can be imported into a one-application local install despite their failed premises. | E2–E4 | Strong |

## Review History

### Round 1 (9 models: Gemini, DeepSeek, Mistral, Grok, MEMO, Z.AI, Claude.ai, Kimi, GPT)

Resolved one full question; one remains investigating, with its policy layer adopted:

1. **Q1** — ADOPT the qualified baseline-reuse rule core and `frontend/` location (6/9 conservative qualified support; robust after every single removal). Declared rule family was baseline delta 8 / differentiator-required Null 1. Declared location was frontend 8 / Null 1; admissible location tally was frontend 6 / Null 1, with Gemini/Kimi excluded because their prior rule did not uniquely establish their outcome against Null. No excluded ballot was converted to a Null vote.
2. **Q2 policy** — ADOPT deliberate selection (6/9; observed-command 2/9; Null 1/9); robust, worst 5/8.
3. **Q2 manager outcome** — INVESTIGATE. npm 5/9 versus unselected 4/9; removing any npm supporter leaves 4/8. The deliberate-policy camp itself split npm 3 / unselected 3. A shared npm outcome does not make the policy ballots equivalent.

All nine responses were substantive; there were zero echoes, non-responses, duplicates, or degenerate outputs. Two separate raw-text derivations reconciled without differences. No product implementation was performed.

## Findings Evaluated and Rejected

These are research adjudications, not code findings:

- **Eight frontend declarations imply eight valid location votes** — rejected. Gemini/Kimi's unqualified prior minimization did not order Null behind a productive outcome; later application cannot supply the missing prior criterion.
- **Five npm outcomes lock npm** — rejected. The result fails every-single-removal robustness and splits 3/3 within the winning deliberate policy.
- **A deliberate-selection policy automatically means no-selection is the locked outcome** — rejected. Three deliberate voters supplied and applied a specific E1-based npm rule. Policy alone selects nothing, but an explicitly adopted and applied rule may select a manager.
- **Observed commands independently confer manager authority** — rejected as the governing policy by robust R1 majority. The two observed-policy ballots remain recorded in their own category.
- **An immediate scaffold/install sentence in one response authorizes product work** — rejected. R1 scope authorized design decisions only; a panel sentence cannot override it.

## What NOT to Re-Audit

- R1's Q1 `frontend/` designation and qualified common rule core, absent concrete new falsifying evidence.
- The Q2 deliberate-selection policy itself; resolve its still-open rule/application outcome.
- Historical closed ledgers, discarded same-slug continuations, lifecycle recovery A/B, release-tag allocation, and other topic status.
- API, persistence, contracts, root workspaces/root lockfiles, deployment, CI, or future-service architecture.

## Web-Leverage / Industry Landscape

**Anti-hallucination / source-hygiene:** Cite a verifiable source for any web-derived claim and separate source-backed evidence from inference. Do not fabricate citations, invent industry consensus, or use citation-laundering. Do not paste credentials; sanitize URLs by stripping sensitive query parameters before listing sources.

**Session-capability self-declaration:** State whether tool-backed live web access is available in this session. Capability varies by session; do not rely on brand-based assumptions or model names. Without browsing, write `No live web access used in this session` and do not use external claims to fill local evidence gaps.

**Codebase-constraint supremacy:** Project constraints outrank external patterns. Web examples may challenge analysis, but prestige or popularity is not selection authority. Local evidence and the carried locks govern this bounded decision.

## Research Questions

### Q2: Under deliberate-selection authority and Q1=`frontend/`, what explicit local selection rule, if any, should now determine the manager and installer-lockfile outcome?

**Outcomes to assess symmetrically:**

| Outcome | Prospective consequence | Local evidence |
|---|---|---|
| Adopt and apply a stated rule selecting npm now | A later admitted implementation may install within `frontend/` and create `frontend/package-lock.json`; no root workspace or root lockfile is selected. E1 demonstrates npm `11.17.0` and lockfile v3, without claiming that version or manager is independently mandatory. | E1; E2; E3 |
| Adopt and apply another fully stated, evidence-grounded local rule selecting a named manager | A later admitted implementation uses that manager only within `frontend/`, with its installer lockfile there. E1 supplies no executed test of another manager; identify the exact evidence gap and what your rule permits without inventing verification results. | E1; E2; E5 |
| Status Quo / Null outcome for manager selection | No manager or installer-lockfile authority is selected. Q1 remains designated, but stack-selection's first dependency installation/scaffold stays blocked. This does not retract the deliberate-selection governance policy. | E2; E3; E5; E6 |

**Required Q2 gates:**

1. **Q1 dependency:** application-local authority requires the selected root. Apply the rule with `frontend/` and state its no-authority fallback if Q1 later becomes Null.
2. **Observed fact versus authority:** E1's npm usage/repeatability is evidence. State why your prospective local rule makes that evidence sufficient or insufficient; do not claim Astro selected npm, npm is generally required, or untested alternatives are inferior.
3. **Boundary:** name the manager, application root, and prospective installer-lockfile path if selected. Preserve the prohibition on root workspace/root lockfile and artifacts outside `frontend/`. If no manager is selected, mark the lockfile path inapplicable.
4. **Decision sufficiency and rule application:** state the entire local selection rule before applying it to every outcome, including no selection. Identify every necessary local input or its absence. Do not add a preference after applying the rule or rely on a future service, external convention, or unrecorded manager preference. A policy-only ADOPT without a manager-selection rule leaves the manager unselected.

**Status Quo / Null Option:** Retain no manager and no installer-lockfile authority while preserving Q1 and the deliberate-selection policy. This is a valid result when no local rule passes the gates and yields a supported outcome. INVESTIGATE is also valid if a concrete missing input must be obtained before deciding. Neither outcome authorizes an installer to choose a default.
