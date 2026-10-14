# Research: Frontend foundations (Round 3)

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
> **Context**: Correct the missing language/styling/design/viewport/IA/content decisions. Scope conditionally affirmed after independent review; R3 research followup packet, no implementation authorization.

## About the Project

A genuinely fresh public portfolio and review-harness test vehicle on the retained static Astro toolchain. Operator-stated purpose: public readers access technical project write-ups, `$review` harness research, and university/work pieces as short articles (`reviews/stack-selection/research/stack-selection-r2.md:21-26`). No visitor persistence or present login/forms/payments; publishing is operator-owned and infrequent. Current #v6f1 acceptance narrows the audience to public tech readers and the landing to a short intro plus latest writing; no hiring/customer funnel is inferred.

## Current Setup

`frontend/`, npm and its application-local lockfile; Astro static output and existing Playwright/Chromium no-JS tests. Node/npm engine floors are recorded in `frontend/package.json`. No `tsconfig.json`, type-check script, or TypeScript/`@astrojs/check` locked package entry was found. Configurations, data and tests are `.mjs`; `.astro` frontmatter already contains some TS annotations, which is not evidence of strict project checking. Five current routes and archive-derived content are historical implementation baseline, not a fresh design/content brief. Existing functional tests cover320x900 and1280x900 CSS viewports at DPR1/2; this proves neither laptop/mobile design quality nor actual device CSS width.

Operator language requirement, verbatim (2026-10-11): "one thing is I want TS soo vote me in for TS and for the other questions yes I agree". TypeScript is fixed; there is no JS-vs-TS vote. Minimum strict/checker/migration core and strict-first scoped approach are locked; exact stronger flags and command policy remain open. Record: `reviews/decisions.md`, frontend-foundations operator-fixed premises. Scope context/premise handling is protocol.md440-444/458-461; explicitly accepted requirements and dated operator dispositions are recognized at630, separately from panel-majority locks at798. No special operator-fixed ballot schema is specified, and none is invented.

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

Historical #v6f1 asked for fresh candidates; current #v6d1 below fixes a new ultra-minimal direction with leerob.com as a feel reference. Exact visual values remain undecided; no A/B/C choice is implied. Content language, extended About prose, exact test viewport heights/zoom/support, site-title formatting and future real-piece dates may be proposed explicitly or recorded as later optional facts; none is invented as an already-accepted answer. No requirement to populate empty section pages with fake work.

## New dated operator visual direction — #v6d1

Exact supplied source follows. Angel did not select A/B/C; his quoted ultra-minimal direction supersedes that pending-choice question. CC’s reading is explicitly an interpretation, not extra words spoken by Angel or a panel lock.

```text
# #v6d1 v0.6 Q4 operator design direction (Angel, 2026-10-11, verbatim)
After viewing the A/B/C mock page (https://claude.ai/artifact/26CS55WU2dtJDfgKYzSYRo), Angel replied:
"we kinda wanna pushb for an ultra minilistic one > https://leerob.com --- you get me? super bleeding modern; we dont wanna retain the same portoflio or layouts at 90 percent of the people; I just want it to be beuaitufl minilistic and extremly high end asestatically pleasing; love you"
CC reading: none of A/B/C was picked. Operator direction = ULTRA-MINIMAL, "bleeding modern", extremely high-end aesthetic, explicitly unlike typical portfolio layouts. leerob.com is a FEEL reference (restraint, a single narrow column, small refined type, generous whitespace, near-monochrome, inline links, light/dark), not a template to copy. Avoid imitation of leerob.com's exact layout/copy.
```

Direction fixed by operator: ultra-minimal, modern, highly refined. “Extremely high-end” and “unlike90%” express an aesthetic goal, not a measurable ranking/uniqueness claim we can certify. The panel now refines this direction instead of proposing unrelated alternatives. Exact type, palette, measures, spacing, system light/dark, nav/landing and possible motion are still research choices.

Reference: https://leerob.com/ . Lead opened its current public page on2026-10-11; retrieved text confirms a compact personal/writing surface, but text retrieval is not visual CSS/viewport measurement. CC’s stated feel interpretation (restraint, narrow column, refined type, whitespace, near-monochrome, inline links/light-dark) is supplied context to test, not independently verified source metrics. Don't copy reference biography, labels, personal claims, exact layout/CSS/font/spacing/palette/assets or interactions. If browsing, describe observations separately from your own proposal; no source authority can select Angel’s taste. No archive inspiration or template import. [UNVERIFIED AUTHOR ASSERTION -- test, do not inherit]

The later #v6d1 scope directs refinement within locked Q3/Q5 cores: visible native navigation, one semantic order/equal quality1512/390, three section pages with honest empty states, intro/latest writing/sample/fresh identity/text-only. A proposal that hides nav, removes section pages, invents pieces or adds browserJS must flag the conflict explicitly; don't call that relaxation part of minimalism. System preference light/dark and motion are scoped comparison subjects, not unverified tested behavior or authorization for a theme toggle/animation dependency.

Held unsent R3 was verified9empty bodies and abandoned-before-paste under #v6d1; full draft/intake/manifest/batch preserved externally at ~/desk/tmp/portfolio/v0.6-foundations/abandoned-before-paste-r3/. Old SHA256107bf1575f09e05799a08c51e431217346bf828934ccb14d4bfed2119cee15cb must not be pasted. Same canonical R3 is freshly compiled/hash-bound, no extra round/vote/ledger; R1/R2 immutable ledgers unchanged. Historical Q4-DIRECTIONS.md remains the unselected R2 proposal sheet, not current direction authority.

## Decision-dimension inventory

| Dimension | Status | Authority or scoped decision |
|---|---|---|
| Language | DECIDED, operator | TypeScript, dated frontend-foundations premise; minimum strict/migration core locked; exact flags/command followup Q1 |
| Styling approach | DECIDED, R1 | Owned plain scoped/global CSS with small tokens/utilities, zero new styling dependencies; exact values remain Q4 |
| Design system | DIRECTION DECIDED, operator; values IN SCOPE | #v6d1 ultra-minimal refinement; Q4 exact type/measure/spacing/palette/system light-dark/nav/motion with small owned primitives |
| Viewport strategy | DECIDED, R2 core | Q3; operator laptop-first/mobile-full/50-50 goal; 1512/390 CSSpx targets and equal quality accepted; height/zoom/support evidence remains unmeasured |
| IA | IN SCOPE | Q5; fresh purpose-led hierarchy/navigation and treatment of current URL continuity |
| Content source | DECIDED, operator | Accepted fresh identity and retained current sample; real pieces later; archive rejected; Q5 separate-page/neutral-sample core locked; exact route/schema/validation followup open |
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

For each open Q1, Q4 and Q5 (Q2/Q3 and bounded Q5 core carried locked): ADOPT/DISMISS/INVESTIGATE of the setup/design option (never TS versus JS); expected outcome; exact implementation steps for later authorized work; risks; verification; sources used (sanitized primary-source URLs/titles, or `No live web access used`). Q1 must explicitly retain the operator TS premise; a JS-only answer conflicts with scope. No invented operator vote, panel tally, approved personal fact or research lock. Optional observations may identify scope gaps.

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
Two bounded cores adopted: strict TS checking/full typed migration (strict/checker9/9; full migration8/9, worst7/8) and owned plain scoped/global CSS/tokens with0new styling dependencies9/9. Four followups Q1a/Q3/Q4/Q5. Gemini corrected operator paste error before resolution; no echo/non-response. Immutable resolve-r1.json SHA256344d98200153ffb9f55407559928f74d02ae8be94b0c0366b9c2a8b23eeb25c9. #v6f1 later accepted exact launch defaults above; first empty unsent R2 packet abandoned-before-paste, revised operator-fact packet is the actual resolved R2.

### Round 2 (9 models: GEMINI, DEEPSEEK, MISTRAL, GROK, MEMO, Z.AI, CLAUDE.AI, KIMI, GPT)
Two more bounded cores adopted, bringing core count4: Q3 equal-quality1512/390 acceptance9/9 (worst8/8); Q5 home/latest-writing plus3separate section pages8/9 (worst7/8; GPT home-anchor alternative minority), neutral undated sample/fresh facts/text-only and build-validation separation. Q1 strict-first scoped refinement8/9 (worst7/8), Claude strictest-trial minority. Exact flags/command remain open. Three unresolved followups Q1a/Q4/Q5a; zero force-disposition. No research close or implementation.
Primary A/D/I Q1 9/0/0; Q3 9/0/0; Q4 7/0/2; Q5 9/0/0. These are primary labels, not whole-exact-contract agreement. All9Q4 proposals await Angel; process ADOPT is never a taste lock.

| Seat | Q1 command policy | Stronger flags | Q5 section shape | Metadata validator |
|---|---|---|---|---|
| GEMINI | Standing astro check+tsc | indexed/fallthrough, not exact-optional |3pages | built-in collections, stale recipe not adopted |
| DEEPSEEK |Single astro check; addtsc only uncoveredclass | optional trial after strict |3pages | built-in if verified, else owned |
| MISTRAL |Standing dual | indexed+exact-optional |3pages | built-in plus owned checks |
| GROK |Single; optional justified addition | trial after migration |3pages | built-in/owned alternatives |
| MEMO |Standing dual; later redundancy probe | named candidates/rollout INVESTIGATE |3pages | owned, built-in alternative |
| Z.AI |Standing dual | unused/fallthrough; index later |3pages | built-in |
| CLAUDE.AI |Single; uncoveredclass fallback | strictest trial; fallbackstrict+indexed |3pages | built-in glob+schema |
| KIMI |Single; uncoveredclass fallback | phased indexed/override/fallthrough |3pages | built-in |
| GPT |Single; uncoveredclass fallback | indexed+exact-optional | Home anchors minority | owned, built-in alternative |

Conditional-single5/9 fails robustness4/8 if supporter removed; standing-dual4/9 no majority. Built-in5/9 also fails4/8; owned2, gated alternative2. Exact route strings split: research/harness/harness-research, work/university-work, writing/articles detail; no exact slug lock. Heights differ, never accepted device facts or universal matrix value. Hand semantic versus reverse source-anchor derivation/counts reconcile; same lead/two methods, effective runtimes unknown/no family credit. Each removal retained.
Immutable R2 ledger reviews/frontend-foundations/state/research/resolve-r2.json SHA2563986aa4a178693acb38c84d0e91d488d697b5bd35c47287d93aed0eb7a69a8da; raw219437bytes SHA256847f107c1742254cdefa737d2ac82b1bb58874e2a610d295fe055c35a3c8be6d; intakeSHA2561bc6b761137b64861daf2fdf6ce4a919329e2cf2206e05dd45b54b1f828bb417. All9substantive, no echo/offtopic/duplicate/framing defect; thinking/search preambles add no votes. No code fixes/sweeps or package/build execution.

## Findings Evaluated and Rejected

Research source corrections, not bugFP/REAL categories. Official Astro docs say astro check checks all included TS-project files; no universal skip-config/tests theorem. Playwright transformation does not check types; this alone cannot prove a second checker is needed when an Astro-aware checker already covers them. Local probes remain required before actual command sufficiency.
allowJs:false controls JS inclusion/import typing, not absence of arbitrary JS files; full migration inventory remains separate. Installed Astro7.3.5 rejectsTS>=7 and asksTS6, but no exact checker/compiler pair,5.xpin, added-package count/timing or1.5sperformance proof is claimed. Don't upgrade Astro or chase latest.
Installed content config explicitly rejects legacy type/missingloader. Current official docs use src/content.config.ts, glob from astro/loaders and z from astro/zod; these exports/config behavior are inspected locally, not a full collection build proof. Old type:'content'/src/content/config.ts recipes are not adopted. Build-time validation is distinct from TS code checking. Draft exclusion only from index is insufficient if the page still ships publicly; choose explicit output policy. Optional dates cannot silently validate future real published pieces.
Don't invent coming-soon/actively-in-progress claims, sample date/section/biography, GitHub-profile facts, public canonical origin, redirects or host policy. Intro can remain accepted name/role/site purpose with neutral factual descriptions; exact wording is a proposal rather than requiring new biography. Don't impose55–75ch minimum on narrow mobile, fabricated contrast/performance claims, universal touch-size exceptions omitted, unmeasured Safari support or unapproved theme/font/budget. No automated A11y/Lighthouse score proves final design or full conformance.
Primary docs checked2026-10-11: https://docs.astro.build/en/guides/typescript/ ; https://playwright.dev/docs/test-typescript ; https://docs.astro.build/en/guides/content-collections/ ; https://www.typescriptlang.org/tsconfig/allowJs.html . Living docs support mechanisms, not verified local negative probes.

## What NOT to Re-Audit

Carried: TS language; Astro/static/npm/application-local lockfile; zero browserJS; backend/persistence/contractsNull; archive prohibition and sample exception; fresh accepted identity/contact/text-only/deploy deferred. Q1 minimum strict/full migration/checker and strict-first scoped policy; Q2 owned plainCSS; Q3 accepted widths/one order/visible native nav/content-driven breakpoints/functional vs human+actual-device evidence separation; Q5 home/latest writing/3separate section pages/neutral undated sample/fresh facts/no forced About or duplicate index. GPT anchor-only alternative retained minority; don't reopen core merely for preference. Concrete evidence contradiction may be reported.

## Round Strategy

GEMINI: keep; prior correction fulfilled, current response substantive; checker/collection recipes corrected.
DEEPSEEK: keep; conditional checker and validator fallback materially differ.
MISTRAL: keep; dual checker/index+optional flags challenge minimum-tool policy.
GROK: keep; primary-single and support-evidence distinction.
MEMO: keep; dual-command redundancy and owned validator, exact flags still INVESTIGATE.
Z.AI: keep; unused/fallthrough profile and built-in metadata model differ.
CLAUDE.AI: keep; strictest-trial minority and concrete rail/dark design variants.
KIMI: keep; staged profile and single-checker fallback; reasoning preamble no extra vote.
GPT: keep; anchor-only minority retained without reopening section-page lock, owned validation and conditional-single.
No technical drop or qualifying zero-unique trajectory; all9contributing, no drops. Effective web identities unknown; no family-count claim.

## Research Questions

### Q1: Which exact stronger profile and minimum sufficient command policy should implement the strict-first lock?
Select one bounded named flag set or explicitly select Null for optional flags; don't respond ADOPT to incompatible sets at once. Compare indexed/optional checks, unused/override/fallthrough checks, maintenance cost and actual relevant failure classes. Explain whether a later temporary strictest comparison can be an implementation probe rather than an unresolved final preset. Avoid bundling unproven strictest-first noise into required core.
For command policy compare (A)astro check initially, explicit includes and per-class negative probes, correct inclusion before adding tsc only for a documented remaining gap; (B)standing astro check+tsc over declared project/tool configs, with measured duplication cost; (Null)R1minimum verified checker with exact extra command undecided. Source docs say included TS files are checked; actual retained-version probes still needed. State primary option and what would make it fail; choose a policy now with later verification gates, not fictional execution results. Show how configs/tests/data/Astro negative probes and no-JS inventory enforce full migration separately from allowJs. Define compatible-version selection policy under retainedAstro7.3.5/TS>=7rejection; exact installed versions/transitive delta later measured, no Astro upgrade.
**Status Quo / Null Option:** existing strict/migration/checker core remains; optional extra flags/second command can remain absent if justified. No JS-vs-TS ballot and no implicit incomplete coverage.

### Q4: Which exact visual specification best refines Angel’s ultra-minimal direction?

Refine the fixed direction, not A/B/C and not a copy of leerob.com. Recommend one coherent implementable specification with tightly bounded alternatives only where a technical/design tradeoff remains. Explain how restraint and precision make the accepted content look modern/refined without a hero template, dashboard/card apparatus, decorative image, fake copy or a miniature UI framework. Surface tradeoffs as proposals; don't claim a percentile/“high-end” certification or accept every optional idea at once.

Specify all of these together:
1. Type: exact system-font pairing/stack, body size/line height and responsive heading/metadata scale at1512/390; make refined type readable under200%text resize/400%reflow. Default downloadedfonts0; a self-hosted font must identify a concrete benefit, license/byte/request/maintenance costs and owned/system alternative, not prestige.
2. Measure/container: exact readable prose measure and outer shell/gutter/minimum-width behavior. Laptop composition can be narrow with deliberate whitespace while mobile uses comfortable width; explain how this stays equal quality. Choose content-driven breakpoints only if required, no inherited46rem/Georgia/cream or reference pixel copying.
3. Spacing rhythm: a small named scale, intro/nav/latest-writing/article/empty-state rhythm and long-label handling; no gratuitous cards, badges or metadata clutter. Sample remains visibly undated; hidden essential information is not minimalism.
4. Palette: exact monochrome/neutrals for background/text/muted/rules/focus, at most one restrained accent if needed. Define light and dark via prefers-color-scheme with0browserJS/no manualtoggle. Supply both proposed palettes and pairwise contrast calculations or explicitly unverified calculation gates; normaltext4.5:1, largetext3:1, necessary non-text3:1 are proposed measurable floors, not full-conformance claims. Links/focus/current location retain non-color cues. Don't treat muted low contrast as sophistication.
5. Navigation: visible native section links with accepted labels, compact wrapping/touch-friendly treatment at390 and1512; keyboard focus/skip/current-location semantics. No disappearing nav in the name of restraint. Three section pages keep honest empty states; no forced About, duplicate index or invented coming-soon promise. Inline links are a styling candidate, not permission to remove structural navigation.
6. Landing/article/empty-section composition: exact content order and minimal primitives, same semanticDOM order on both targets. Use only accepted name/role/contacts/site purpose and current sample; no new personal story/credential/work claims. Explain short intro→latest writing→section access/contacts without filling empty space with fake content.
7. Motion: compare Null (no motion) with at most a small functional CSS transition if it materially clarifies state; explain benefit/duration/reduced-motion behavior/keyboard/touch interactions. No scroll animation, cursor effect, browserJS, dependency or cosmetic motion by default. State chosen policy explicitly.
8. Budgets/proof: exact per-route HTML+inlineCSS+unique linkedCSS accounting, raw/gzip units/settings and fonts/images/browserJS0; propose thresholds, no guessed achieved sizes. Check chosen light/dark/viewport combinations, focus/contrast/text spacing/zoom, local functional regression and later human/device equal-quality review. Aesthetic intent is not proved by green Playwright.

Every item must preserve locked Q3/Q5 cores or flag its concrete conflict before recommending a scope change. Operator direction is already accepted; exact panel specification and rendered acceptance are separate. Proposals are not final values until research resolution and authorized implementation evidence, and no product mockup/build is performed in this round.

**Status Quo / Null Option:** no ratified exact visual values yet; temporary semantic shell/owned CSS, system fonts, no motion, no downloadedassets or browserJS. Ultra-minimal direction stays fixed even if a particular refinement is dismissed. Null is not the old archive style, a rejected A/B/C direction or an invented prerequisite to choose another taste.

### Q5: What exact route/schema/validator contract should implement the locked launch structure?
Three section pages are locked8/9; labels exactly Projects, Harness research, University/Work. Select an explicit parallel route set for Home, the three sections and neutral sample; compare existing panel slug variants without fake continuity requirements. Proposed small contract to test: /, /projects/, /harness-research/, /university-work/, /articles/first/; no duplicate writing index or forced About. These exact strings are a LEAD PROPOSAL for the open slug question, not a prior panel lock. If a different set is better, state it completely. Trailing-slash always/local hrefs, no absolute canonical origin/hostredirect/410; base-path support deferred with hosting.
Choose one minimal validation approach: built-in retained-version glob+schema with existingAstro exports (no new directschema/parser package), or a small owned runtime guard on already parsed metadata with explicit routing/draft handling. Compare maintenance/routing effort; five built-in ballots did not pass removal robustness, no preference is preselected. State exact schema/invariants for nonempty title/description, unique route key, sample/published/draft status, section assignment, real dates/draft exclusions and deterministic ordering. Test LEAD PROPOSAL: sample status requires no invented date or section; published requires genuine operator-supplied date and one ofthree sections; draft emits neither route nor listing; sort published-date desc then route key, sample afterward. This narrows disagreement without pretending those exact invariants are already unanimous. Alternative simpler no-draft model must explain later authoring boundary without silently publishing unfinished content. Don't invent scheduling/future-date ban or turn metadata optionality into false validation. Sample title/body retained; its back-link may update with chosenIA. Accepted identity/contact suffice for factual short intro; no biography/project claims promised work. Optional English/title/empty-state wording must be explicit proposals, not new personal facts or automatic permission gates.
**Status Quo / Null Option:** accepted fresh shell/sample with honest empty sections, zero images, no invented work/dates; validation still required before trusting Markdown. No new parser/schema packages absent concrete need. Exact mechanism/slugs not locked until resolved.

## Handoff

Research-only R3; no product edit/install/build/implementation audit/commit/deploy. Default9seats standard order; generator/splitter only, no clipboard/panel-catch/chatpasted responses. Angel’s new ultra-minimal direction is supplied verbatim above; panel resolves exact refinements within it, never substitutes A/B/C or a copied template. R2roll remains current canonical authority; do not infer research completion from partial locks or packet existence. Report Sources used and explicit unknowns; one primary vote per concrete option while preserving caveats.
