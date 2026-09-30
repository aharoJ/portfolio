# Research: Monorepo Structure Topology Tie-Break (Round 1)

> **For**: Independent research cross-validation by web LLMs
> **From**: Angel (aharoJ) + Codex -- portfolio project
> **Date**: 2026-09-30
> **Context**: The prior topology topic closed on two Null locks. A sanctioned out-of-tree spike now measures an equivalent minimal static Astro slice at three candidate locations, so this fresh topic asks how to decide under demonstrated equivalence without silently treating a location or package manager as already chosen.

---

## About the Project

`portfolio` is a monorepo foundation with only a minimal `frontend/package.json`; it has no Astro application, root workspace, root lockfile, API, database, deployment configuration, or CI implementation in scope for this decision. Stack selection has already locked Astro for the web surface, but it did not select an application directory or package manager.

This is a fresh research topic, not a continuation of the closed `monorepo-structure-topology-reopen` slug. The prior topic's R1 Null locks remain historical context; this topic may decide only the two questions below from the listed evidence.

## Current Setup

### Scope and authority boundary

- The operator approved this exact fresh-topic R1 scope after the prior same-slug R2 skeleton was voided by Cycle Detection.
- The prior R1's location and manager Null locks cannot be bypassed by implementation. The purpose of this fresh scope is to decide whether a neutral rule can authorize a non-null result under measured equivalence.
- This R1 authorizes no product implementation. It does not create an Astro app, dependencies, installer lockfile, workspace, or root lockfile.
- Excluded: root workspace and root lockfile selection; API; database or migrations; contracts; authentication; CI; deployment; `packages/`; catalogs; and task runners.

### Evidence map

| ID | Local source | Facts available to evaluate | Limits that must remain explicit |
|---|---|---|---|
| E1 | `docs/research/monorepo-structure-topology-spike.md` | Six fresh detached copies at `21a2d6b`; one page, one Markdown article, and one browser test; all commands exited `0`; npm `11.17.0`; Astro `^7.3.5`; package-local npm lockfile v3; absent `packageManager`; identical manifests, lockfiles, source/config/test aggregate, static HTML, static checks, browser tests, and static-tree SHA-256 across all six runs. | It measured no production CI job, deployment platform, ownership process, or future service. It does not select a layout, a rule, a manager, a workspace, or a lockfile policy. |
| E2 | `reviews/roadmap.md` | The approved fresh scope requires a neutral tie-break rule before applying it to `frontend/`, `apps/web/`, the repository root, or Q1 Null; Q2 asks whether observed npm-command installation is authority, whether deliberate selection is needed, or whether Q2 Null remains. | Root workspace/root lockfile and all excluded domains remain out of scope. |
| E3 | `reviews/decisions.md` | The prior topic's R1 closed with Q1/Q2 Null locks. The null-gate clarification says an Astro scaffold, location selection, and package-manager selection were not authorized there. The routing correction says this fresh slug has no locked candidate. | This is context and a procedural boundary, not a vote for a fresh candidate. |
| E4 | `reviews/runbook/monorepo-structure-topology-reopen.md` | The closed runbook forbids a product scaffold under its old locks and records the former materially-different-outcomes gate that the spike could not satisfy under equivalence. | The runbook belongs to the closed topic; it does not answer this fresh question. |
| E5 | `frontend/package.json` | The current package is minimal: name, version, and `private`; it has neither `packageManager` nor workspace declaration. | It does not identify a package manager, application location, or install policy. |

### Measured layout facts from E1

All three variants used the same normalized app payload and ran twice in separate copies. Each variant built static output, passed the same static checks and Chromium browser test, and produced the same static-tree SHA-256 `95c87c8edd2423421bc8e4af1aa5404780548b02734a8b1177ddd4f94796509e`.

| Candidate location | App root | Package-local lockfile | Static output | Root-relative build invocation |
|---|---|---|---|---|
| `frontend/` | `frontend/` | frontend/package-lock.json | `frontend/dist/` | `cd frontend && npm run build` |
| `apps/web/` | `apps/web/` | apps/web/package-lock.json | `apps/web/dist/` | `cd apps/web && npm run build` |
| repository root | `.` | package-lock.json | `dist/` | `npm run build` |

E1 reports the npm commands used in the spike and explicitly says that they do not assert Astro independently selected a package manager.

## Your Role

Evaluate the two research questions as a bounded decision problem, not as a request for a new stack or a broad monorepo redesign.

1. **Evidence discipline**: map every stated gate condition to E1–E5, including when an evidence item is absent, insufficient, or inapplicable. Do not merely repeat the question or candidate names.
2. **Candidate symmetry**: assess the same proposed decision rule against every Q1 location and its Null Option. Do not infer benefits from candidate ordering, familiar layout conventions, or an unmeasured future service.
3. **Authority discipline**: distinguish observed commands from selection authority. Treat an observed path, an installer behavior, or framework compatibility as fact only to the extent E1 supports it.
4. **Scope discipline**: keep every recommendation inside the listed boundaries. If the evidence cannot support a decision, prefer an explicit INVESTIGATE or Null result over a speculative rule.

## What We Need From You

For Q1, first state and justify a neutral tie-break rule. Only then apply that same rule to every location and the Null Option. Assess whether the rule is candidate-symmetric, evidence-grounded, and compatible with retaining the Null Option.

For Q2, decide whether the observed npm command is package-manager authority, whether a deliberate selection is required, or whether no manager/installer lockfile should be chosen. State the exact local scope of any authority and whether Q1's result changes it.

Do not propose a different framework, a second application, a future API/service, root workspace, root lockfile, CI/deployment setup, package catalog, task runner, or other excluded work.

## Output Format

For each question, provide:

1. **ADOPT / DISMISS / INVESTIGATE**. For Q1, give two ordered dispositions: first the tie-break rule, then the location resulting from that rule. A non-null location without a separately stated, prior rule is incomplete.
2. **Expected outcome** — state the chosen rule or policy and any selected candidate, or the Null Option.
3. **Gate-to-evidence map** — one row for every gate condition, citing E1–E5 and marking absent/inapplicable evidence rather than filling gaps by assumption.
4. **Candidate comparison** — apply the same rule/policy to every named candidate and the Null Option.
5. **Implementation impact** — exact authorized next action, if any; otherwise say what remains unauthorized.
6. **Risks and verification** — facts that would falsify the outcome or require a later reopen.
7. **Sources used** — URLs/titles for every web-backed claim, or `No live web access used` if you did not browse. Cite the relevant local evidence IDs for local claims.

End with `OVERALL: ADOPT / DISMISS / INVESTIGATE` and state whether the two answers can coexist without reaching into an excluded domain.

## Additional Observations (Optional)

Include only a concrete ambiguity, evidence gap, or narrowly scoped alternative that does not fit above. Omit this section if you have nothing to add.

## Constraints

- No precomputed verdict, preferred tie-break, preferred location, or preferred package manager is supplied by the lead.
- Candidate names and order are identifiers only; none is a suggested winner.
- Q1 Null means no first application location is selected and no Astro application is created.
- Q2 Null means no package manager is selected and no installer lockfile is created.
- A non-null Q2 result may not authorize a root workspace, root lockfile, or a lockfile outside the selected application root.
- The observed equality is limited to the E1 measured slice. Do not claim CI, deployment, ownership, or future-service equivalence from it.
- Keep raw panel responses outside the repository; cite only the published local evidence records in any response.

## Premise Risks

| Risk | Source | Signal |
|---|---|---|
| The closed topic's Q1/Q2 Null locks conflict with any fresh non-null decision. The operator acknowledged this strong contradiction by approving the fresh, narrow tie-break topic after the same-slug continuation was voided. | E2, E3, E4; operator affirmation | Strong |
| E1 demonstrates operational equivalence only for a minimal static slice. Treating unmeasured CI, deployment, ownership, or future-service outcomes as differentiators would exceed the evidence. | E1 | Strong |
| The candidate wording itself can anchor the outcome, especially if one location is described as existing or conventional. | E2, E5 | Weak |
| Reading the observed npm commands as a framework-selected manager would conflate observed experiment setup with package-manager authority. | E1, E5 | Strong |

## Web-Leverage / Industry Landscape

**Anti-hallucination / source-hygiene:** If you use live web evidence, cite a verifiable source and separate source-backed evidence from inference. Do not invent citations or use citation-laundering. Do not paste credentials; sanitize URLs and strip tokens or sensitive query parameters before listing sources.

**Session-capability self-declaration:** State whether you have tool-backed live web access. Capability varies by session; do not rely on brand-based assumptions or model names.

**Codebase-constraint supremacy:** Project constraints outrank external patterns. Web examples may challenge or enrich the analysis, but they do not become authority by prestige; pattern-anchoring is not a reason to adopt a candidate.

If no live browsing is available, write `No live web access used in this session.` Do not use web claims to fill the local evidence gaps in E1–E5.

## Research Questions

### Q1: Under the measured static-slice equivalence, what neutral tie-break rule, if any, should govern the first v0.2 application location, and what location follows from it?

**Candidate locations**:

| Candidate | Action if selected |
|---|---|
| `frontend/` | Create the first Astro application at `frontend/`, using only a package-local application boundary. |
| `apps/web/` | Create the first Astro application at `apps/web/`, using only a package-local application boundary. |
| repository root | Create the first Astro application at the repository root, using only a package-local application boundary. |
| Q1 Null Option | Select no application location and create no Astro application; preserve the present minimal state. |

**Required Q1 gates**:

1. **Equivalence boundary**: distinguish what E1 measured as equal from its unmeasured surfaces; do not manufacture a material differentiator.
2. **Rule-first neutrality**: define a tie-break rule before applying it. The rule must be candidate-symmetric, must not privilege a location because it is named first or familiar, and must explain why Q1 Null remains viable or not.
3. **Evidence fit**: identify the E1–E5 facts that operationalize the rule and state any facts it cannot use.
4. **Scope and reversibility**: state the smallest authorized action implied by the result and confirm it does not select a root workspace/root lockfile or excluded domain.

**Status Quo / Null Option**: Do not select a first application location and do not create an Astro application. This preserves the current minimal `frontend/package.json` state and is viable if no neutral, evidence-grounded rule can support a non-null location.

### Q2: Under the Q1 result, what package-manager authority policy, if any, should govern an application-local install and lockfile?

**Policy candidates**:

| Candidate | Policy if adopted |
|---|---|
| Observed-command authority | Treat the npm command and npm package-lock.json observed in E1 as sufficient authority to select npm only within a selected Q1 application root. |
| Deliberate-selection authority | Require a separate, stated local selection rule before a package manager or installer lockfile is authorized. The rule may name a manager only if the cited evidence supports it. |
| Q2 Null Option | Select no package manager and create no installer lockfile. |

**Required Q2 gates**:

1. **Q1 dependency**: state whether Q2 can authorize any manager or lockfile if Q1 is Null; map the answer to E2–E5.
2. **Observed fact versus authority**: distinguish E1's npm command and package-local npm lockfile from a claim that Astro independently selected npm or that npm is generally required.
3. **Boundary**: if any manager is authorized, specify the application-root scope, lockfile location, and the continued prohibition on root workspace/root lockfile.
4. **Decision sufficiency**: test whether the proposed policy can be applied without relying on a future service, external convention, or an unrecorded package-manager preference; otherwise select or preserve the Null Option.

**Status Quo / Null Option**: Select no package manager and create no installer lockfile. This preserves E5's absence of a `packageManager` field and the current no-application state.
