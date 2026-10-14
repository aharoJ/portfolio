# Research: Frontend foundations (Round 2)

> **Claim-surface disclosure (automated, D-CCSD-Q4).** Author lines
> carrying a mechanically detectable factual assertion, with or without a
> supporting record are marked `[UNVERIFIED AUTHOR ASSERTION -- test, do not inherit]`.
>
> A `CITED RECORD` line reproduces a command, an exit status and an
> artifact path **that the author supplied**. The compiler executes
> nothing and cannot vouch for who produced that artifact, so a cited
> record is **not evidence and never clears the marker**. Its claim
> line stays marked exactly like an unsupported one. Test it.
>
> **The detector is not complete, and an absent marker is not a
> verification stamp.** It covers four shapes only -- COUNT, GATE, STATUS, REF -- and does
> not scan fenced code, inline code spans, headings, or the
> marker-planning region. Test any claim you intend to rely on
> against primary evidence, marked or not.
>
> This build: 1 claim-bearing line(s) detected, all 1 labeled; 0
> author-cited record(s) rendered, none of which clears a marker.


> **For**: Independent research cross-validation by web LLMs
> **From**: Angel (aharoJ) + Codex -- portfolio project
> **Date**: 2026-10-11
> **Context**: Correct the missing language/styling/design/viewport/IA/content decisions. Scope conditionally affirmed after independent review; R2 research followup packet, no implementation authorization.

## About the Project

A genuinely fresh public portfolio and review-harness test vehicle on the retained static Astro toolchain. Operator-stated purpose: public readers access technical project write-ups, `$review` harness research, and university/work pieces as short articles (`reviews/stack-selection/research/stack-selection-r2.md:21-26`). No visitor persistence or present login/forms/payments; publishing is operator-owned and infrequent. Current #v6f1 acceptance narrows the audience to public tech readers and the landing to a short intro plus latest writing; no hiring/customer funnel is inferred.

## Current Setup

`frontend/`, npm and its application-local lockfile; Astro static output and existing Playwright/Chromium no-JS tests. Node/npm engine floors are recorded in `frontend/package.json`. No `tsconfig.json`, type-check script, or TypeScript/`@astrojs/check` locked package entry was found. Configurations, data and tests are `.mjs`; `.astro` frontmatter already contains some TS annotations, which is not evidence of strict project checking. Five current routes and archive-derived content are historical implementation baseline, not a fresh design/content brief. Existing functional tests cover320x900 and1280x900 CSS viewports at DPR1/2; this proves neither laptop/mobile design quality nor actual device CSS width.

Operator language requirement, verbatim (2026-10-11): "one thing is I want TS soo vote me in for TS and for the other questions yes I agree". TypeScript is fixed; there is no JS-vs-TS vote. Minimum strict/checker/migration core is locked; stronger flags and exact command/version details remain open. Record: `reviews/decisions.md`, frontend-foundations operator-fixed premises. Scope context/premise handling is protocol.md440-444/458-461; explicitly accepted requirements and dated operator dispositions are recognized at630, separately from panel-majority locks at798. No special operator-fixed ballot schema is specified, and none is invented.

The HIGH incident `~/desk/incidents/2026-10-11-portfolio-foundations-never-researched/INCIDENT.md` records the acknowledged mismatch between a brand-new site and the archive-migration frame. The current brief explicitly directs its correction. `v3-archive` is not an inspiration, source, asset pool or fallback for this topic. No product content is removed during scope drafting.

## Dated operator facts and exact authority

Source: OPERATOR-FACTS.md supplied by CC under #v6f1, 2026-10-11. The following is copied verbatim, including the presented defaults and Angel’s exact acceptance. These are accepted operator inputs, not panel votes or already-resolved technical/design questions.

```text
# #v6f1 v0.6 operator facts (Angel, 2026-10-11)
CC presented these defaults ("reply go to accept, or change any line"); Angel replied verbatim: "go".
1. Audience: public tech readers. Landing page = short intro plus your latest writing.
2. Sections: Projects, Harness research, University/Work.
3. Launch content: keep the one existing sample article for now; real pieces later.
4. Identity: "Angel J. Haro", Software Engineer. Contact: email (haro.j.angel@gmail.com) and GitHub (github.com/aharoj), as confirmed earlier.
5. Look: the panel proposes 2–3 fresh design directions; Angel picks.
6. Images: text only for now.
7. Screens: 14" MacBook (~1512px CSS width) first, then iPhone-size (390px). 50/50 = equal quality on both.
Optional reference site: not supplied (skipped).
Not covered by these defaults: URL continuity (nothing has been publicly served; nothing to preserve, deploy deferred). The portrait is dropped (text only).
```

The numbered defaults are accepted by Angel’s “go”; the final URL-continuity statement is CC-supplied current context (not a fabricated Angel quotation). #v6f1 explicitly directs using these facts to rebuild the unsent packet. Nothing has been publicly served according to that context; no URL-preservation requirement exists and deployment stays deferred. No public origin/hosting/redirect mechanism is selected.

Acceptance widths:1512 CSSpx laptop and390 CSSpx mobile, equal quality; ~1512 is an operator-accepted target, not a measurement inferred from a14-inch diagonal. Actual innerHeight, zoom, browser/OS versions and physical-device results remain unmeasured. Propose explicit harness heights/support checks with that limit; a missing measurement must not reopen the accepted target widths.320px remains a reflow/stress check.

Fresh identity/role/email/GitHub above are freshly accepted for this corrective scope; do not ask for duplicate confirmation or import other archive fields. Existing `frontend/src/pages/articles/first.md` (“Start with the reader”) is explicitly allowed as launch sample for now. It has title/description/body but no publication date. Keep it identified as sample; no invented authored-on date, project result, credentials or attribution. Real pieces come later. This narrow current-file exception does not authorize archive assets, identity/skills/project tuples or archive design inspiration. Remove the portrait under accepted text-only direction.

Final tone/palette/typeface/layout is intentionally undecided: panel proposes2–3 fresh candidates; Angel picks. No external visual reference supplied. Content language, extended About prose, exact test viewport heights/zoom/support, site-title formatting and future real-piece dates may be proposed explicitly or recorded as later optional facts; none is invented as an already-accepted answer. No requirement to populate empty section pages with fake work.

## Decision-dimension inventory

| Dimension | Status | Authority or scoped decision |
|---|---|---|
| Language | DECIDED, operator | TypeScript, dated frontend-foundations premise; setup/migration/check coverage inQ1 |
| Styling approach | DECIDED, R1 | Owned plain scoped/global CSS with small tokens/utilities, zero new styling dependencies; exact values remain Q4 |
| Design system | IN SCOPE | Q4; fresh grid/type/spacing/color/landing direction, small owned primitives |
| Viewport strategy | IN SCOPE | Q3; operator laptop-first/mobile-full/50-50 goal; 1512/390 CSSpx targets and equal quality accepted; height/zoom/support evidence remains unmeasured |
| IA | IN SCOPE | Q5; fresh purpose-led hierarchy/navigation and treatment of current URL continuity |
| Content source | DECIDED, operator | Accepted fresh identity and retained current sample; real pieces later; archive rejected; Q5 defines schema/removal/replacement |
| Accessibility | IN SCOPE | Q3/Q4/Q5 measurable contrast, keyboard/focus, touch, zoom/reflow and semantic reading criteria; carried no-JS semantics remain |
| Performance budget | IN SCOPE | Q1/Q2/Q4/Q5 separate build/development graph from browser bytes; propose measurable budgets, no invented accepted numbers |
| Testing | IN SCOPE | Retain existing build-first Playwright/no-JS execution; Q1 adds type-check coverage, Q3/Q4 define design proofs, Q5 updates assertions to fresh facts |
| Privacy / analytics | IN SCOPE, explicit Null | Q5: no site analytics/tracking/visitor persistence; deployment-specific logging/privacy is deferred with deployment |
| Deployment | OPERATOR-DEFERRED | Angel: "not until I say so"; no hosting/provider/publishing work |

Astro/static and frontend/npm/local-lockfile are retained decisions: stack-selection R2 and topology-tiebreak Q1/Q2, as prospectively carried in their runbooks. Backend/persistence/contracts remain Null. These are not new locked ballots. Historical image ceilings/metadata/aspect and encoded-body accounting remain safety context when relevant; they do not authorize the old portrait or any new asset. Text-only is the baseline until fresh imagery and applicable policy are selected and verified.

## Current untraced defaults and proposed disposition

Every item below is an observation of current files, not a research lock. Functional semantics already traced to no-JS/a11y decisions are retained while their visual values are reopened.

| Current choice / location | Proposed disposition |
|---|---|
| `astro.config.mjs`, `playwright.config.mjs`, `frontend/src/data/portfolio.mjs`, `frontend/tests/static.spec.mjs` are JS; no tsconfig/check command | R1 full typed migration core carried; Q1 finalizes checker particulars and accepted-boundary requirements; no silent `.mjs` retention |
| `.astro` frontmatter has ad-hoc interfaces/casts without a project checking gate | Q1 define strictness and actual coverage; emitted static build success is not type-check proof |
| `Page.astro` one global `<style is:global>` block | R1 chose owned scoped/global CSS/tokens; Q4 decides fresh visual values, no new styling packages |
| Root light scheme; Georgia/Times New Roman/serif; line-height1.7; header/footer/eyebrow system-ui/sans-serif | Q4 fresh font hierarchy/readability; current stacks are untraced, no webfont assumed |
| Text#272a29, background#faf9f5, links#245d4b, footer border#d7dad4 | Q4 fresh palette and contrast verification; none treated as Angel's brand |
| Global border-box; body46rem max-width, margin0 auto, padding2rem1.25rem3rem | Q3/Q4 decide grid/container/gutters/readable measure; no inherited single-column layout |
| Header flex/wrap/baseline, gaps1rem2rem, bottom margin3rem; identity weight650 | Q4 fresh landing/navigation hierarchy and spacing |
| Nav list flex/wrap, gaps.5rem1.25rem, list-style:none, padding/margin0; active weight650/underline2px | Q3/Q4 revise presentation, preserve accessible current-state function unless Q5 ratifies new IA |
| H1 clamp(2rem,6vw,3rem), line-height1.15, weight400; H2 size1.5rem/line1.3/top2rem; paragraphs margin1.25rem0 | Q4 establish responsive type/spacing scale and article/landing roles |
| Links underline-offset.2em, overflow-wrap:anywhere; focus2px currentColor/offset4px | Q4 style/contrast choices; preserve visible keyboard focus and safe wrapping |
| Eyebrow size.75rem, letter-spacing.1em, uppercase | Q4 decide whether the label pattern serves fresh content |
| Footer flex/wrap gap.75rem1.5rem, top4rem, padding-top1.5rem, border-top1px solid#d7dad4, size.875rem | Q4/Q5 decide footer hierarchy/fresh contacts; no implied contact reconfirmation |
| Skip link absolute left1rem/top.25rem, translateY(-200%), focus transform:none | Q3/Q4 verify robust visibility/focus; keep semantic skip function |
| Images block/max-width100%/height:auto; portrait intrinsic240x320 | Q4/Q5 fresh image need and shape; remove old asset in later implementation, keep no-image Null |
| No explicit media queries or designed laptop/mobile breakpoints | Q3 choose content-driven breakpoints against actual CSS widths, with mobile a full target |
| Four nav labels/current five-route IA; Home identity/role/handle template; About skills; Projects categories | Q4/Q5 fresh hierarchy and copy; no reuse merely because v0.5 was confirmed within migration |
| `portfolio.mjs` copied identity, eight skills, four old project tuples; About portrait.png | Q5 removal/replacement from fresh Angel input; archive content/assets not locked options |
| Existing sample `frontend/src/pages/articles/first.md`, glob article index and metadata copy | Q5 retain current sample by dated operator acceptance; mark sample and decide metadata/ordering without inventing dates |
| Hardcoded old identity/project/portrait tests and inventory expects >=1 image | Q1/Q5 replace assertions with ratified fresh facts/asset selection; text-only must remain valid if selected |
| Current320/1280 widths and900px height used as functional matrix | Q3/Q4 add design acceptance targets; these numbers do not establish14-inch or50/50 quality |
| `astro.config.mjs` trailingSlash:'always' | Q5 make canonical URL/trailing-slash/continuity policy explicit; retain current policy as baseline pending ratified IA |
| `Page.astro` lang='en', title suffix `&#124; Portfolio`, per-page description prop and current copy | Q4/Q5 use accepted Angel J. Haro identity; propose title/language/description rules explicitly, no extra brand/copy inherited |
| `playwright.config.mjs` browserName:'chromium' only | Testing dimension/Q3 explicitly decide coverage/support targets; present Chromium tests do not establish other-engine support |
| Root/frontend .gitignore and frontend/backend .gitkeep | Inspected: ignored outputs/caches/env files and newline-only directory keepers; non-product housekeeping, unchanged, no API or deploy authority |
| No site analytics/tracking or visitor-persistence feature | Explicit Null: no new analytics, cookies, trackers or third-party embeds; Q5 confirms minimal public-read surface. Host logs/privacy obligations remain in operator-deferred deployment scope |

## Your Role

Evaluate explicit TS/checking coverage and cost, styling ownership/tool burden, comparable laptop/mobile reading and navigation, fresh design feasibility, and content/IA traceability to Angel's facts. Identify any missing decision dimension or mismatch with the operator purpose. Do not infer taste or product facts from the archive, or justify dependency additions through popularity.

## What We Need From You

For each question, recommend a bounded outcome with alternatives/Null, precise scope, costs and smallest distinguishing verification. Flag missing operator facts before proposing copy. Produce a coherent design/TS/content verification plan without installing tooling or implementing. Distinguish proposed numeric budgets from accepted constraints and functional tests from design-quality proof.

## Output Format

For each open Q1, Q3, Q4 and Q5 (Q2 is carried locked): ADOPT/DISMISS/INVESTIGATE of the setup/design option (never TS versus JS); expected outcome; exact implementation steps for later authorized work; risks; verification; sources used (sanitized primary-source URLs/titles, or `No live web access used`). Q1 must explicitly retain the operator TS premise; a JS-only answer conflicts with scope. No invented operator vote, panel tally, approved personal fact or research lock. Optional observations may identify scope gaps.

## Constraints

Minimal third-party dependencies and in-house ownership per `~/desk/tmp/portfolio/v0.4-stack-recon/RECON.md:6`; its dated package-count estimates are context, not fresh measurements. Every new package proposal names purpose, direct/transitive development/build impact, browser impact, owned maintenance alternative and concrete need. Zero browser JS remains mandatory; static Astro, application-local npm/lockfile and no backend/persistence/contracts are retained. No React/islands/runtime UI framework, general component kit, root workspace/lockfile, CI, deployment, paid-service/auth/payment or archive import/copy work. No framework/topology/package-manager reopen is authorized here.

Current source remains unchanged while research is scoped. Later implementation must remove/replace archive-derived v0.5 data/page copy and old portrait under ratified fresh choices. The old release and its immutable decisions/intakes/ledgers/tags remain historical. Only accepted fresh Angel facts plus the explicitly retained current sample can populate the new site. No new personal story/project claims, portrait permission, logo, palette, wireframe or interaction is invented by the lead.

## Premise Risks

| Risk | Source | Signal |
|---|---|---|
| Fresh content/IA reverses the v0.5 archive-migration premise | Incident sections1/4/7 and current corrective brief; existing site-shell-content decisions retained as history | Strong |
| Developer acknowledgment, before drafting | Angel declared the incident and requested TS plus agreement to the other corrective questions; current brief explicitly orders fresh content and rejects archive reuse | Acknowledged, no repeat permission gate |
| TypeScript request replaces an untraced JS implementation default, not a prior JS research lock | Current code and dated operator premise | Weak |
| Accepted ~1512/390 target widths do not prove actual browser geometry/zoom | #v6f1 defaults; equal quality confirmed, not traffic | Weak |
| Language/style/design scope could hide new tooling or scope gaps again | Ten-dimension inventory and untraced-default table required by incident | Weak |
| Launch has one accepted sample, real pieces later; no invented dates or empty-section filler | #v6f1 current launch acceptance | Weak |

Revisit scan:6 union/deduplicated textual hits from both runbook locations and the empty project constraint corpus, all unknown/operator-status; no automatic condition or halt. Details: external REVISIT-TRIGGERS.json.

```text
scope-triggers: 6 actionable, 0 dormant
  monorepo-structure-topology-reopen | unknown | reviews/runbook/monorepo-structure-topology-reopen.md:44 | ## Revisit triggers
  stack-selection | unknown | reviews/runbook/stack-selection.md:70 | The future paid review/QA service remains only a revisit trigger until it appears as supplied current evidence. Revisit topology if the frontend designation is invalidated, a required artifact crosses its boundary, another manager gains qualifying equivalent evidence, or a material configuration/scope change invalidates npm's demonstrated adequacy. Verify actual configuration changes before relying on the selection.
  monorepo-structure-topology-tiebreak | unknown | reviews/runbook/monorepo-structure-topology-tiebreak.md:63 | - Revisit trigger: Q1's application-root designation becomes Null or is falsified; check=reviews/decisions.md; status-source=operator;
  monorepo-structure-topology-tiebreak | unknown | reviews/runbook/monorepo-structure-topology-tiebreak.md:64 | - Revisit trigger: selected-location demonstration is invalidated or the implementation reveals a required artifact outside `frontend/`; check=docs/research/monorepo-structure-topology-spike.md; status-source=operator;
  monorepo-structure-topology-tiebreak | unknown | reviews/runbook/monorepo-structure-topology-tiebreak.md:65 | - Revisit trigger: another manager gains equivalent qualifying local evidence; check=docs/research/; status-source=operator;
  monorepo-structure-topology-tiebreak | unknown | reviews/runbook/monorepo-structure-topology-tiebreak.md:66 | - Revisit trigger: material scope/configuration change or the future API/service becomes current supplied evidence; check=reviews/roadmap.md; status-source=operator;
```
 Future paid service/topology/manager triggers do not authorize reopening those excluded domains. R1 is resolved with an immutable roll ledger; this is a continuing corrective topic, not a continuation/rewrite of closed site-shell-content.

## Web-Leverage / Industry Landscape

Lead has tool-backed browsing available; live primary-source checks used during R1 resolve; no package installation or implementation. No vendor-version recommendation or researched tooling selection is claimed.

1. **Anti-hallucination / source-hygiene:** panelists with live tools should open up to3 current primary sources relevant to TS/Astro checking, styling cost or accessibility/viewport criteria. Cite a verifiable source with URL/title and author/date where present; do not invent citations or launder "industry consensus". Separate evidence from inference. Sanitize URLs: strip credentials, strip tokens, and remove query parameters carrying credentials/session/OAuth codes; cite title/domain if a URL cannot be safely cleaned. Do not paste credentials or signed URLs.
2. **Session-capability self-declaration:** state actual live browsing access yourself; not model or brand inference. Brand-based assumptions about web access are invalid because access varies by session. Without tools say `No live web access used` and omit current-source claims.
3. **Codebase-constraint supremacy:** project constraints outrank industry patterns and operator-fixed premises remain controlling. External examples challenge or enrich the scoped alternatives; they do not become authority by prestige or create missing product requirements.

## Review History

### Round 1 (9 models: GEMINI, DEEPSEEK, MISTRAL, GROK, MEMO, Z.AI, CLAUDE.AI, KIMI, GPT)

Resolved two bounded core decisions: two adopted, zero dismissed as separate locks, four followups investigating. Q1 core ADOPT at least strict verified TS project checking, full typed migration/fresh data replacement, compatible compiler/Astro checker dev tooling; minimum strict/checker9/9, exact migration8/9 (Gemini offers an unaccepted `.mjs` config boundary). Q2 ADOPT owned plain scoped/global CSS with small tokens/utilities and zero third-party styling additions9/9. Every single removal passes: Q1 worst7/8, Q2 worst8/8. Optional stronger flags and command/version sufficiency remain Q1 followup; Q3 targets/support/navigation, Q4 direction/budgets, Q5 IA/schema/routes/fresh facts remain open. No forced disposition.

Primary ADOPT/DISMISS/INVESTIGATE: Q1 9/0/0; Q2 9/0/0; Q3 8/0/1; Q4 1/0/8; Q5 6/0/3. Mixed option-level INVESTIGATE is retained: conditional method/model ADOPT is not a final numeric/taste/IA lock. Gemini Q4 proposes technical dossier but investigates operator tone; eight retain INVESTIGATE. Neither palette nor content schema/taxonomy is selected. DeepSeek/Mistral/MEMO prefer minimum-strict then stronger flags; Claude.ai prefers a strictest trial; GPT stronger flags immediately; KIMI strict single-phase; Grok strict or strictest; Z.AI strict with later scoped flags. One source/one vote each, no pooled exact-flag unanimity.

Gemini’s original intake-equivalent slot was an operator paste error, corrected by Angel “gemini fixed” (#v6r3); all nine corrected bodies are substantive. Indented END lines split correctly through validate_final.py. Other eight changes are formatting-only (normalized word sequences identical); raw updated source206356 bytes SHA256836baf488ec492cd0e3e5cd12acb7e9d5dd19aa4a08ffa800a95739829d22ea9. Thinking/search preambles contribute no extra votes. Actual runtime identities unknown; no independent-family claim. Two same-lead methods (hand semantic matrix, reverse source-anchor derivation) reconcile. Immutable ledger: reviews/frontend-foundations/state/research/resolve-r1.json SHA256344d98200153ffb9f55407559928f74d02ae8be94b0c0366b9c2a8b23eeb25c9. R1 source claims were independently checked against installed CLI/config and living primary documentation; no product edit/install/build executed.

## Findings Evaluated and Rejected

Research recommendations, not bug FP/REAL classifications. Unverified recipe claims are excluded from locked decisions: Z.AI’s already-present checker/transitive cost claim conflicts with lockfile absence; its universal44px WCAGAA statement is wrong (24px with exceptions); 200% is not the full320px reflow criterion. Type annotations alone cannot validate Markdown data; Playwright execution does not check types. No measured comparative CSS sizes, compatibility, byte identity or zero transitive cost is claimed. Gemini’s stale version pins/moduleResolution:node override, guessed contrast guarantees, mandatory Lighthouse via Playwright, RSS requirement and old content-collection config recipe are proposals needing evidence, not adopted locks. A feed/OG feature is optional, and a static article index needs no scripted filter. KIMI’s “current shell DNA” is not design inspiration authority. MEMO’s Chromium-only-as-constraint claim overstates a current testing baseline. No unconditional410/redirect/canonical policy without static serving mechanism/origin evidence. Literal greps may assist traceability but are not complete correctness proof.

## What NOT to Re-Audit

Do not reopen fixed TypeScript language, carried Astro/static/npm/application-root decisions, zero browser JS, backend/persistence/contracts Nulls, archive prohibition or operator-deferred deployment. Do not re-vote the R1 exact bounded core except a concrete scope/evidence contradiction; stronger flags and design values are separate open questions.

## Round Strategy — standard nine-seat roster

GEMINI: keep; corrected substantive submission; proposes collection/dossier and JS-config exception; no technical drop.
DEEPSEEK: keep; identifies explicit Q3–Q5 operator contingencies; no zero-unique PASS trajectory. [UNVERIFIED AUTHOR ASSERTION -- test, do not inherit]
MISTRAL: keep; staged strictness and contingent viewport strategy; no drop evidence.
GROK: keep; checking/style proposals and purpose-contingent design; no drop evidence.
MEMO: keep; stronger-flags followup/command-coverage caveat; preamble not votes.
Z.AI: keep; schema/IA alternatives, with source corrections supplied; wrong recipes do not erase disagreement.
CLAUDE.AI: keep; strictest trial, article collection and URL-continuity caveats.
KIMI: keep; single-phase strictness and responsive acceptance; remove inherited-style rationale.
GPT: keep; per-file negative coverage and metadata-validation distinction.
Effective web identities unknown; no independent-family credit or verified three-family claim.

## Evidence corrections and open operator facts

Installed Astro7.3.5 dist/cli/check/index.js explicitly rejects TypeScript major>=7 and asks for TypeScript6; requires @astrojs/check and typescript. Installed base/strict config enables allowJs and verbatimModuleSyntax; strictest adds indexed/optional/unneeded-code flags. These are read-only installed-source observations, not a clean-install/checker-version compatibility proof. No Astro upgrade is authorized.
Official Astro docs: https://docs.astro.build/en/guides/typescript/ (separate checker and project inclusion); https://docs.astro.build/en/guides/styling/ (scoped/global styling).
Official Playwright: https://playwright.dev/docs/test-typescript (TS transformation does not check types).
W3C: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html (AA24×24 with exceptions); https://www.w3.org/WAI/WCAG22/Understanding/reflow.html (320CSSpx, e.g.1280 at400%, exceptions for intrinsically two-dimensional content).
Primary documentation accessed2026-10-11; living docs are not retained-version executable proof. Numeric page/CSS/font budgets remain competing proposals with differing compression/resource accounting; select exact definitions before thresholds.

## R2 packet supersession

The first R2 packet was unsent and its nine generated response slots were verified empty. Under #v6f1 it is abandoned-before-paste, not a resolved round or failed panel. Full draft/intake/manifest/batch preserved externally at ~/desk/tmp/portfolio/v0.6-foundations/abandoned-before-paste-r2/. Its SHA25622cdd15519adef49e09063559cecfd7f6868eb647dd754c61269bbbadfa64aea must not be pasted. This revised canonical R2 is compiled afresh, with its own manifest/hash/copy and regenerated standard9-seat slots. R1 ledger and all historical locks remain unchanged. No r2 ledger/due marker or new vote exists yet.

## Research Questions

### Q1: Which stronger flags and minimum sufficient checking command should supplement the strict core?
Compare strict-baseline plus scoped stronger flags with immediate strictest. Distinguish full migration from optional stricter phases. Specify effective allowJs/noEmit/includes/exclusions and which error classes each command catches, using retained Astro checker compatibility evidence. Is astro check sufficient for all included standalone configs/tests, or is tsc --noEmit necessary? Require per-class temporary negative probes during later implementation; do not claim them executed now. Select a bounded compatible compiler/checker policy without latest-install or Astro upgrade; identify unverified versions/transitive cost as later measured gates, not phantom evidence.
**Status Quo / Null Option:** minimum strict locked remains; optional stronger flags/extra redundant command are not selected until justified. No TS-language ballot.

### Q3: How should1512px laptop-first and390px mobile targets achieve equal quality?

Operator-fixed targets: ~1512 CSSpx14-inch MacBook first;390 CSSpx iPhone-size mobile;50/50 means equal quality. Recommend a concrete matrix and measurable design/interaction acceptance, using320px reflow/stress and intermediate widths as supporting checks. Distinguish accepted widths from unmeasured actual height/zoom/browser version. Specify proposed harness heights as testing choices, not measured device facts. Use content-driven breakpoints, fluid readable measure and one semantic content order. Compare visible wrapping native navigation with native disclosure only when approved labels need it. Separate automated Chromium baseline, optional existing-package engine smoke checks with download/time cost, and actual MacBook/iPhone browser verification; do not claim Safari support from Chromium/WebKit emulation alone. Define accurate zoom/text-spacing/focus/touch/contrast checks; keep functional no-JS checks and human design-quality review distinct.

**Status Quo / Null Option:** retain current320x900/1280x900 functional regressions temporarily, but those checks alone are N/A as final acceptance because they do not cover the accepted1512/390 equal-quality goal. No guessed physical-screen measurement or traffic split. Missing actual heights/zoom can be later explicit measurement gates without undoing accepted target widths.

### Q4: Which2–3 fresh candidate directions should Angel compare before choosing?

Audience: public tech readers. Landing: short intro plus latest writing. Sections: Projects, Harness research, University/Work. Accepted identity and one retained sample; text only. Recommend2–3 distinct fresh directions within this shared content/IA purpose, each implementable with R1 owned CSS. For each specify hierarchy/grid/container, responsive1512/390 landing/article behavior, type/system-font or justified self-hosted option, spacing, palette/contrast/focus/touch/zoom states, minimal primitives and concrete resource budgets with exact uncompressed/compressed/per-route accounting. Proposed palette/type/budget values are candidates, not Angel’s taste or accepted constraints. Compare costs/benefits and make a preferred recommendation with reasons. No archive imitation, copied design template, inherited Georgia/cream, “current shell DNA”, invented brand or arbitrary UI feature. No external reference was supplied. Don't change accepted short intro/latest-writing landing into a different business funnel.

**Selection:** panel recommends candidates; Angel chooses. A candidate-process recommendation can lock only the process; final design values remain unresolved until a dated Angel choice. Do not claim automatic design convergence merely because panelists prefer a similar candidate. A proposal may include a tiny text-only layout description, without inventing biography/copy. Browser scripts remain0; font/CSS/HTML budgets and accessibility criteria need explicit measurement later.

**Status Quo / Null Option:** temporary semantic shell; no ratified new visual system before Angel chooses. A plain/system-font candidate is valid; it is a proposed fresh direction, not implicit inheritance.

### Q5: What minimum IA/schema/publishing policy implements the accepted launch facts?

Start with short intro plus latest writing and the three named sections Projects, Harness research, University/Work; one existing sample kept for now, real pieces later. Fresh accepted identity is Angel J. Haro / Software Engineer; plain email haro.j.angel@gmail.com and GitHub https://github.com/aharoj. Text only, portrait dropped. Recommend the smallest route/nav/grouping plan, avoiding empty category filler, duplicate indexes or a forced About page without fresh prose. Keep section identity even if a section has no real pieces; explain empty-state behavior. Decide whether the retained sample lives in a neutral latest-writing list instead of inventing a pillar assignment. No fake launch pieces or archive skills/project tuples.

Specify minimum validated metadata, draft/sample/publication handling and deterministic ordering. The retained sample has title/description/body and no publication date: propose an undated/sample path or an explicit later-date input gate; don't invent its publication date or represent it as an actual technical project. Preserve sample title/body unless a separate authorized editorial choice occurs; index/back-link changes for the chosen IA are allowed implementation consequences. Separate static TS types from build-time Markdown validation; compare owned validation with retained-version built-in collection facilities, no new schema/parser package unless a concrete need warrants it. Exact installed API/version and malformed-metadata negative tests remain later proof.

Nothing has been publicly served per CC-supplied current context; no historical continuity requirement. Select intentional canonical trailing-slash/local href and route behavior without host redirects,410 server responses, public origin or deployment assumptions. No obligation to preserve historical route labels/URLs solely for continuity; useful routes can be freshly chosen. Default English/sample-language and title formatting may be explicit proposals; accepted name/role/contact do not authorize a biography. Confirm sample removal exception is carried and all other archive claims/portrait/tests are replaced. Text-only tests must allow zero images; analytics/tracking/visitor persistence remain Null. Optional RSS/OG/favicon/print stay omitted unless concrete need is established.

**Status Quo / Null Option:** minimal static shell plus explicitly accepted sample and fresh identity/contact, no fabricated real work, new portrait, biography, taxonomy claims or public canonical origin. The old archive-derived portfolio is N/A as final content. “Remove every sample” is no longer an authorized outcome: #v6f1 expressly keeps this one current sample for now.

## Panel handoff

Research only, current product source unchanged. No implementation/install/build/commit/deployment. Standard9 seats in order GEMINI DEEPSEEK MISTRAL GROK MEMO Z.AI CLAUDE.AI KIMI GPT; round-specific Angel roster changes take precedence. This revised R2 is authorized by #v6f1 acceptance and re-bundle instruction; do not paste the abandoned packet. Paste responses only between generator-produced START/END lines, then say “r2 in”; split only via installed validate_final.py. No clipboard/panel-catch or replies pasted into chat. Missing optional facts do not authorize invention; final Q4 selection stays with Angel.
