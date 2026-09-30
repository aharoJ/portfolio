# Research: Monorepo Structure Topology Reopen (Round 1)

> **For**: Independent research cross-validation by web LLMs
> **From**: Angel (aharoJ) + Codex -- portfolio project
> **Date**: 2026-09-29
> **Context**: Re-evaluate only the first v0.2 application layout and one-package root pnpm-workspace question before any scaffold. Test whether the former two-deployable layout fits one static browser application now, with a later service only as a revisit trigger.

---

## About the Project

The v0.2 product lock selects one static Astro browser application and selects no API runtime, persistence, or browser-to-API contract. A paid review/QA service with API, authentication, and persistence belongs to v0.3 only as a revisit trigger; it is not v0.2 sizing input.

Monorepo-structure R1 previously locked two deployable roots and a root pnpm workspace for pnpm-managed packages. Its application-roots gate says to reopen topology research before substantial paths accumulate if the two-deployable premise does not survive the first scaffold. This R1 is that narrow reconsideration, not a license to scaffold while the panel is deciding.

## Current Setup

The current repository has a minimal `frontend/package.json` and no product source, application root under `apps/`, root workspace file, or package-manager lockfile. No v0.2 API, database, migration, contract, CI, deployment, or shared package exists.

The gate facts below are local records, not claims inferred from a framework convention:

| ID | Local record | What it records for this round |
|---|---|---|
| E1 | `reviews/stack-selection/state/research/resolve-r2.json` | R2 locks Astro static-first/islands for the browser slice and the Null Option for API, persistence, and contract. |
| E2 | `reviews/decisions.md` | The active stack-selection decision records the null API and the required topology reopen. |
| E3 | `reviews/runbook/monorepo-structure.md` | The existing two-deployable application-roots lock and its reopen-before-scaffold gate. |
| E4 | `reviews/monorepo-structure/state/research/resolve-r1.json` | R1's prior Q1 and Q2 locks, which are the narrow subjects of this reconsideration. |
| E5 | `frontend/package.json` | The only current product manifest; it identifies no package manager or workspace. |

The E1 close is the current repository record committed as `75da8a2`; no external source is offered as product evidence for either question.

## Your Role

Evaluate only these two questions:

1. **Topology sufficiency**: test whether the local facts materially distinguish a v0.2 layout, rather than treating a future service or a familiar folder convention as present need.
2. **Single-package workspace sufficiency**: test whether current evidence establishes pnpm and a root workspace benefit now, rather than inheriting them from the old two-package premise.
3. **Counterfactual discipline**: assess each non-null candidate against the explicit Null Option. A future v0.3 service is not evidence that an API path, workspace, package, or deployable exists today.
4. **Gate independence**: apply every stated gate condition yourself against E1–E5. Do not count the question wording, an option label, or a prior R1 vote as proof that a gate passes or fails.
5. **Echo-vote check**: a recommendation is countable only if it maps every gate condition to a cited E1–E5 record or names a precise absent/contradictory record. A response that merely repeats a candidate or gate result is an echo-only observation, not a vote.

Engage with the stated constraints. Limit responses to the two research questions. Do not introduce another technology-selection, product-requirement, or hierarchy topic; do not propose a wholesale rewrite or generic monorepo guidance.

## What We Need From You

For each question, first state PASS or FAIL for its binary evidence gate and map every condition to E1–E5. If a condition is not established, state why; do not repair that absence with framework habits, future-roadmap intent, or an external trend. On a PASS, choose one listed non-null candidate and give its smallest local verification. On a FAIL, choose the stated Status Quo / Null Option. Use INVESTIGATE only for a named conflict or ambiguity in a local record, not as a substitute for the Null Option.

Before voting, identify any wording that appears to favor a candidate, any gate condition that appears pre-decided, or any question that cannot reach a gate result from the supplied local record. State the defect and your corrected interpretation before your recommendation.

## Output Format

For each question:

1. **ADOPT / DISMISS / INVESTIGATE**
2. **Binary gate result** -- PASS or FAIL, with a condition-by-condition E1–E5 mapping
3. **Expected outcome** -- chosen candidate or the Status Quo / Null Option
4. **Implementation** -- the smallest future scaffold action only when the gate passes; otherwise name the evidence needed before reconsideration
5. **Risks**
6. **Verification** -- a local check whose outcome could distinguish the chosen option from the alternatives
7. **Sources used** -- local records used and URLs/titles for any web-backed claim, or `No live web access used in this session.` Sanitize URLs: remove credentials, tokens, OAuth codes, session IDs, and sensitive query parameters.

## Additional Observations (Optional)

Omit if nothing to add. Record a premise challenge only when it changes a gate result or candidate boundary. Do not turn a style preference into a requirement.

## Constraints

- This R1 re-evaluates only R1 Q1 application layout and R1 Q2 root pnpm-workspace / root-lockfile policy.
- R1 Q3 ownership and R1 Q4 release-evidence convention stay locked and are not candidates for change.
- Do not choose, scaffold, or imply an API, database, ORM, migration, contract authority, API client, authentication system, payment flow, CI, deployment system, `packages/` directory, catalog, or task runner.
- Astro is already selected for the browser slice; this round does not revisit framework choice, rendering mode, content model, or application behavior.
- The v0.3 paid review/QA service is a revisit trigger only. It cannot satisfy a v0.2 gate condition or break a tie between topology candidates.
- No panelist may treat R1's former majority, the presence of the word `apps`, or industry convention as a current product requirement.
- All panel recommendations are research only. Do not create files, directories, code, or protocol changes.
- Raw panel text remains outside the repository. This project consumes `$review`; do not copy or modify the canonical protocol.

## Premise Risks

| Risk | Source | Signal |
|---|---|---|
| R1's two-deployable `apps/web` plus `apps/api` lock conflicts with the current no-API v0.2 record. The operator requested this reconsideration. | E1, E2, E3 | Strong |
| A plausible v0.3 service could be used to pre-create a v0.2 API path or workspace even though the stack lock calls it a revisit trigger only. | E1, E2 | Strong |
| Candidate names can visually favor an `apps/` hierarchy or a root layout without a present operational differentiator. | Candidate framing | Weak |
| The prior stack-selection R2 intake precomputed FAIL paths for three product gates; repeating that author-result pattern here would turn conditional facts into panel steering. | `reviews/stack-selection/intakes/research-r2.md`; E1 | Strong |
| The local record may be sufficient only to select the Null Option, not a non-null topology. | E1–E5 | Weak |

## Web-Leverage / Industry Landscape

*Purpose*: this is a local-facts decision. No lead-supplied web claim or URL appears below, so no external source is offered as a tie-breaker. A panelist with live web access may use a current primary source only to explain package-manager behavior after self-declaring that access; it cannot create a missing v0.2 product requirement or satisfy an otherwise absent local gate condition.

1. **Anti-hallucination / source-hygiene**: every web-derived claim needs a verifiable URL, author, and date. Separate source-backed evidence from inference. Do not fabricate citations or citation-launder unnamed industry consensus. Strip credentials, tokens, OAuth codes, signed URLs, session IDs, and sensitive query parameters from URLs; use title plus domain when a URL cannot be safely sanitized.
2. **Session-capability self-declaration, not brand classification**: state whether this session has tool-backed live browsing or only training recall. Do not assume web capability from a model or product brand.
3. **Codebase-constraint supremacy**: E1–E5 and the project locks outrank external patterns. A web example may challenge or enrich a conclusion but cannot become authority by prestige; reject pattern anchoring such as a well-known organization using a layout as a reason this repository must use it.

No lead-supplied external citation survives this preflight. A panelist without live web access should state `No live web access used in this session.`

## Research Questions

### Q1: Which v0.2 application layout, if any, is justified for one static browser deployable now and a later service only as a revisit trigger?

**Candidate A — apps/web only**: create the Astro application at apps/web. Do not create an API directory, API package, API deployment target, or placeholder.

**Candidate B — root frontend only**: retain the root frontend directory as the Astro application location. Do not create an apps directory or API placeholder.

**Candidate C — apps/web plus a non-deployable API reservation**: create the Astro application at apps/web and a tracked apps/api/README.md that records only the future revisit trigger. The reservation contains no package manifest, source, runtime, deployment target, contract, or database material.

**Status Quo / Null Option**: create or move no v0.2 application and reserve no API path. Retain the current minimal frontend manifest and documentation state until a layout choice is justified.

**Binary evidence gate — panel-applied; no author result is supplied.** PASS only if all four conditions are established from E1–E5:

1. The current record establishes exactly one v0.2 browser deployable and no current API deployable.
2. The current record establishes that API, persistence, and contract work are absent from v0.2 rather than merely delayed inside the same scaffold.
3. The current record treats the paid review/QA service as a future revisit trigger rather than a present layout requirement.
4. At least one current local record identifies an operational or verification constraint for the first scaffold that produces a materially different result among Candidate A, Candidate B, and Candidate C. A historical R1 preference alone does not meet this condition unless the cited record explains why it still applies to the one-deployable state.

If any condition fails, choose the Status Quo / Null Option. If local records conflict about a condition, use INVESTIGATE and name the conflicting text.

### Q2: Is a root pnpm workspace and root lockfile warranted for the v0.2 first scaffold while it contains a single application package?

**Candidate — root pnpm workspace**: create a root pnpm workspace and one root lockfile that includes the selected v0.2 application package. Do not add `workspace:` edges, catalogs, a task runner, or another package solely to make the workspace non-empty.

**Status Quo / Null Option**: do not create a root pnpm workspace or root lockfile at the topology stage. Defer pnpm selection and lockfile placement until a current application package and a v0.2 root-level benefit are evidenced. This does not select a different package manager.

**Binary evidence gate — panel-applied; no author result is supplied.** PASS only if all four conditions are established from E1–E5:

1. A gate-passing Q1 outcome identifies a current v0.2 application package and its layout.
2. The current record selects pnpm for that v0.2 application; Astro compatibility or an older two-package assumption is not pnpm selection.
3. The current record identifies a v0.2 behavior, ownership duty, or verification that a root workspace and root lockfile improve while only that one package exists, compared with the Null Option.
4. The stated benefit remains if the v0.3 service never arrives.

If any condition fails, choose the Status Quo / Null Option. A conflict in E1–E5 is INVESTIGATE; a missing condition is a FAIL, not permission to infer the benefit from a possible future package.
