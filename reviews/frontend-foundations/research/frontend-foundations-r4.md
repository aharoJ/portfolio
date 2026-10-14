# Research: Frontend foundations (Round 4)

> **For**: Independent research cross-validation by web LLMs
> **From**: Angel (aharoJ) + Codex -- portfolio project
> **Date**: 2026-10-11
> **Context**: Correct the missing language/styling/design/viewport/IA/content decisions. Scope conditionally affirmed after independent review; R4 final-allowed research followup packet, no implementation authorization.

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

Historical #v6f1 asked for fresh candidates; current #v6d1 below fixes a new ultra-minimal direction with leerob.com as a feel reference. The later #v6p1 below chooses exact A Quiet within the new direction; historical A/B/C-direction request remains superseded. Content language, extended About prose, exact test viewport heights/zoom/support, site-title formatting and future real-piece dates may be proposed explicitly or recorded as later optional facts; none is invented as an already-accepted answer. No requirement to populate empty section pages with fake work.

## New dated operator visual direction — #v6d1

Exact supplied source follows. Angel did not select A/B/C; his quoted ultra-minimal direction supersedes that pending-choice question. CC’s reading is explicitly an interpretation, not extra words spoken by Angel or a panel lock.

```text
# #v6d1 v0.6 Q4 operator design direction (Angel, 2026-10-11, verbatim)
After viewing the A/B/C mock page (https://claude.ai/artifact/26CS55WU2dtJDfgKYzSYRo), Angel replied:
"we kinda wanna pushb for an ultra minilistic one > https://leerob.com --- you get me? super bleeding modern; we dont wanna retain the same portoflio or layouts at 90 percent of the people; I just want it to be beuaitufl minilistic and extremly high end asestatically pleasing; love you"
CC reading: none of A/B/C was picked. Operator direction = ULTRA-MINIMAL, "bleeding modern", extremely high-end aesthetic, explicitly unlike typical portfolio layouts. leerob.com is a FEEL reference (restraint, a single narrow column, small refined type, generous whitespace, near-monochrome, inline links, light/dark), not a template to copy. Avoid imitation of leerob.com's exact layout/copy.
```

Direction fixed by operator: ultra-minimal, modern, highly refined. “Extremely high-end” and “unlike90%” express an aesthetic goal, not a measurable ranking/uniqueness claim we can certify. The panel now refines this direction instead of proposing unrelated alternatives. Historically these were R3 questions; current #v6p1 below selects exact A. Only the newly requested palette refinement and technical flag/metadata details remain open.

Reference: https://leerob.com/ . Lead opened its current public page on2026-10-11; retrieved text confirms a compact personal/writing surface, but text retrieval is not visual CSS/viewport measurement. CC’s stated feel interpretation (restraint, narrow column, refined type, whitespace, near-monochrome, inline links/light-dark) is supplied context to test, not independently verified source metrics. Don't copy reference biography, labels, personal claims, exact layout/CSS/font/spacing/palette/assets or interactions. If browsing, describe observations separately from your own proposal; no source authority can select Angel’s taste. No archive inspiration or template import.

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

For each open Q1 exact profile, Q4 palette-only refinement and Q5 metadata refinement; checker policy/routes/validator and all nonpalette A values are carried locked: ADOPT/DISMISS/INVESTIGATE of the setup/design option (never TS versus JS); expected outcome; exact implementation steps for later authorized work; risks; verification; sources used (sanitized primary-source URLs/titles, or `No live web access used`). Q1 must explicitly retain the operator TS premise; a JS-only answer conflicts with scope. No invented operator vote, panel tally, approved personal fact or research lock. Optional observations may identify scope gaps.

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

## Current exact A selection and new R4 palette authority

#v6p1 arrived during R3resolve. The following is supplied verbatim; Angel quote and CC reading are separate. This explicitly authorizes the palette-refinement question in final allowed R4. No duplicate scope affirmation is needed.

```text
# #v6p1 v0.6 Q4 operator pick (Angel, 2026-10-11, verbatim)
CC presented Q4-FINAL-PICK.md A (Quiet, Claude.ai) vs B (Clearer, GPT), rendered at https://claude.ai/artifact/26CS55WU2dtJDfgKYzSYRo v3.
Angel replied: "A bro is much much cleaner cuz its quiet soft on the eyes... we want to conduct reseach on the best colors for the eyes for long steering at a screen but I am thinking naturally to go for a darker shade you know? but for now I am cool with A"
CC reading:
- Q4 = A (Quiet) exact package selected now: type, 34rem width, spacing, light and dark palettes, nav, no motion, budgets.
- New operator research request: eye-comfort palette for long reading sessions, with Angel leaning toward a darker shade. Null = A's exact palettes as picked. Must stay within the ultra-minimal, no-accent direction and contrast rules; evidence-based (readability/visual-fatigue research, contrast/halation trade-offs of dark vs light, pure-black vs dark-grey, text-weight in dark mode), no taste assertions presented as science.
```

### A Quiet — fixed baseline and palette Null

Nonpalette values are now selected and not re-voted: system sans throughout; mono only sample label; root honors user preference; body1rem/1.65 prose (1.5UI), home-name1rem/600, articleH1 1.5rem/1.25/600/tracking−.015em, articleH2 1.125rem, metadata .875rem. Centered34rem content column with1.25rem gutters, same sizes1512/390, no width breakpoint. Space tokens .25/.5/1/1.5/2.5/4rem;4remtop,2.5remmajor-group gaps,1remparagraph/list gap,.25remtitle-description gap. Always-visible3sectionnav; home via inner-page identity; natural wrapping,focus/skip/current-location preserved; clear sample return path. Home name/role/factualpurpose→Writing→contacts; empty section title and “Nothing published here yet.” MotionNull, no animation/transition/smoothscroll. Document≤30,000raw/10,000gzip bytes, ownedCSS≤6,000raw;fonts/images/browserJS0. InlineCSS countedonce in document; reportCSSsubtotal; linkedCSS if actual build does not inline included in route total, never omitted. Pin compressor/version/level9/timestamp0 later, no actual achieved sizes claimed. Inlining is a later actual configuration proof, no new favicon asset/toggle.

Null palettes (exact selected A):
| Token | Light | Dark |
|---|---|---|
| Background |#FCFCFB|#111111|
| Text/links/focus |#171717|#ECECEA|
| Muted |#5C5C5A|#A3A3A0|
| Functional rule/underline |#8F8F8C|#6E6E6B|
| Decorative hairline |#E8E8E6|#262626|
Noaccent; underlined links/current-state non-color cues;2px text-color focus/3px offset. color-scheme light dark and prefers-color-scheme dark, no manualtoggle/browserJS/persistence. Independently recalculated opaque-pair ratios: text/background17.4636/15.9633;muted6.5281/7.4667;functionalrule3.1590/3.6918;hairline1.1951/1.2478 decorative only. These calculations are not rendered measurements or scientific comfort evidence. Do not weaken contrast to “soften” text without satisfying the actual floors. Later rendered/device equal-quality review stays required. Optional17px fallback in author’s risk note is not selected startingtype.

## Review History

### R1 and R2 (9 seats each)
R1 locked minimumstrict/checker/fulltypedmigration andownedCSS; Gemini operatorpaste corrected beforeadmission,8/9migration core and9/9checker/CSS. R2locked1512/390equal-quality andseparate3section-page core; checker5/9/validator5/9 failed single-removal4/8. Immutable resolve-r1/r2 remain historical. Operator accepted fresh facts/sample/text-only in #v6f1; newultra-minimaldirection in #v6d1; old unsent R2/R3 packets abandoned-before-paste externally, no extra rounds.
R2ledgerSHA2563986aa4a178693acb38c84d0e91d488d697b5bd35c47287d93aed0eb7a69a8da.

### Round3 (9slots,8active: GEMINI,MISTRAL,GROK,MEMO,Z.AI,CLAUDE.AI,KIMI,GPT)
DeepSeek R3only operatornote “broke dont count as a seat”; provider “A message is being generated, please try again later.” No vote, no echo, no permanentdrop; re-include R4 default9seats.
PrimaryA/D/I Q1 8/0/0,Q4 8/0/0,Q5 8/0/0. These primary labels do not claim exact profile/palette/schema unanimity.
Resolved policy refinements: commandA8/8(worst7/7), exactroutes8/8(worst7/7), existingbuilt-in collection7/8primary+1conditional(worst6/7). AQuiet exactvisual picked by Angel #v6p1, not panelmajority. Five coredecisions retained,3followups; no forceddisposition.
CommandA: astro check first over explicitapp/config/data/test/Astro/tools inclusion, negativeprobe eachclass with intendeddiagnostic, fixincludes first, addtargetedtsc only proven remaininggap it catches; build gatedcheck, migrationinventory separate fromallowJs:false. No config-loadingcrash or unrelatederror countsasprobeproof.
Routes: /,/projects/,/harness-research/,/university-work/,/articles/first/; future /articles/<id>/ section-independent; no separatearticlesindex/About, slashalways/localhref/noorigin/hostredirect/deploy.
Validator: existingAstro src/content.config.ts, glob astro/loaders, z astro/zod; no newdirectparser/schema package; laterretainedAPI/build negativeproof andownedsmallcross-entry/filter/sort/outputchecks.

| Seat | Exact extra required TS flags |
|---|---|
| GEMINI | unusedLocals,unusedParameters,implicitReturns,fallthrough |
| MISTRAL | indexedAccess only;otherextras lateroptional |
| GROK | indexedAccess,fallthrough |
| MEMO | unusedLocals,unusedParameters,fallthrough |
| Z.AI | unusedLocals,unusedParameters,fallthrough |
| CLAUDE.AI | indexedAccess,fallthrough |
| KIMI | indexedAccess,fallthrough |
| GPT | indexedAccess,exactOptional,implicitOverride,fallthrough |
Fullprofilecounts3/2/1/1/1. Componentindexed5/8/fallthrough7/8 not a wholeprofilemajority; do not concatenate different ballots into a fake namedprofile. Gemini misleadingheading conflictswithactualnamedlist/code; no inventedindexedvote. Only exactprofile remainsQ1, commandpolicysettled.

Q5precise recipes differ: booleanstatus vsenum; sampledate/section forbiddenvsstripped; Datecoercionvsstrictcalendarstring; explicitrouteKeyvsfilenameID; draftoptionaldatevsforbidden; stricterunknownkey rejection. Commonsemanticintent is not exactrecipeunanimity. R4selects one explicitdata contract, not another validator contest.

Handsemantic reading versus reversefinal-sectionanchors/counts/profile-set tally andindependent8removal arithmetic reconcile0differences, samelead/twomethods/no model-familycredit. All8responses substantiveunique,0format/echo/offtopic/duplicateexclusions;thinking/search preambles noextra votes.
R3ledger reviews/frontend-foundations/state/research/resolve-r3.json SHA256bf890fb4ca07686dad2b407c667d778ecc4aa043c0e0ea701ae468103d209270. Raw141656bytesSHA256d919f4165cce7bdc1b352df8c833a1718bf82a84b411b9305808a58f408e771b;intakeSHA2567b03651d84e13839fb516ca20ce1db53780d9934ecdfaa5eea16e183496cc3e3. No productedit/install/build/probe, no researchclose.

## Findings Evaluated and Rejected

Research source/recipe corrections, not bugFP/REAL labels: Astro includedTSproject files are checked, not just importedappgraph; Playwright transpilesnotchecks. Correct explicitincludes and isolateexpectednegative diagnostic beforeclaimcoverage; allowJs:false notfileabsencepolice. InstalledAstro7.3.5rejectsTS>=7/asks6, actual exactcompatiblepair/graph/cost latermeasured,no forcedpeer/latest/Astroupgrade.
LocalAstroexports loaders/zod and contentconfig checks support built-in option; old typecontent/config recipesnotadopted. Nonstrict Zodobject strips unknownkeys ratherthanrejecting forbidden sampledate/section. Datecoercion and Dateinstance alone do not prove genuinecalendar/provenance; loader-normalized IDs can collide, assert keysbeforefilter. Draftindexfilteralone insufficient if route/sentinelartifactstillships. No assertedcomingsoon/inprogress/sampledate/pillar/biography/profilefacts/publicorigin/hostresponse.
Sourcecopycolor#245d4b from historicalarchive palette is not allowed as an untraced “optional accent”; currentAaccentNull fixed. Exactlyone aria-current on everypage is false withonly3sectionnav onhome; actualdestination semanticsrequired. No guessedcontrast, parsercast-type theorem, fake absoluteKBunit,forceddark science, universallysafehalation claim or medicalpromise.

## What NOT to Re-Audit

Fixedoperator TS/Astrostatic/npm/frontendlockfile/noJS/backendNull/deploydeferred/freshfacts/sampleexception/text-only,ownedCSS,1512/390oneorder/equalquality/visible-nav,3sectionpages/neutralundatedsample/honestempty/noAbout.
Carry commandA,exactroutes,builtinvalidator. AQuiettype/measure/spacing/nav/no-motion/budgets selected now; only palettequestion newlyreopened by #v6p1. Don't swapB/GPT visualprofile in under evidencepretext; flag any proposednonpaletteconflict explicitly. No externaltemplate/refcopy.

## Round Strategy

GEMINI keep: commandconvergence butprofilehygiene+returns/schema corrections.
DEEPSEEK re-include: operatornonresponse waiver wasR3only/providerbusy, no current technicaldrop; standard9seat restored unless Angel changes.
MISTRAL keep: indexed-onlyprofile and conditionaldraftmodel nuance.
GROK keep: twoflagprofile,builtinroutepolicy.
MEMO keep: hygieneprofile/opposedindexed,sourceprovenance limits.
Z.AI keep: hygieneprofile/draftdate/samplekey alternatives.
CLAUDE.AI keep: twoflags/exactAproposal selected byoperator.
KIMI keep: twoflags/nonstrictschema correction.
GPT keep: fourflags/strictdates/routekey semantics.
No qualifyingdroptrajectory,allcontributing; modelruntime/familiesunknown,no familycountclaim.

## Research Questions

### Q1: Which single exact extra-flag profile completes the strict-first setup?
CommandAisalreadylocked. Selectone complete namedprofile:
A: strict+noUncheckedIndexedAccess+noFallthroughCasesInSwitch.
B: strict+noUnusedLocals+noUnusedParameters+noFallthroughCasesInSwitch.
C: strictminimum,noextras.
D: strict+indexed+exactOptionalPropertyTypes+noImplicitOverride+fallthrough.
E: Gemini hygiene+implicitReturns+fallthrough,or Mistralindexed-only; if selected,statecompleteflags.
Use fullflagsnames/truefalse/Null decisions forotherextras, explicitrationale/errorclass vsmaintenancecost. Primaryvote mustmeanthat exactset, not “some stricterflags”. Temporarystrictest trial canbe an implementationprobe,not a new unresolvedpreset. Evidence localnegativeprobes happenlater,no phantomresult. Preserve retainedstrictbase/noEmit/moduleResolution/verbatimModuleSyntax and separate fulltypedmigrationinventory. Exactcompatible compiler/checkerpins underretainedAstro/TS>=7rejection selectedlaterusingrealmetadata,notunknownnewversions. No standingdual re-vote.
**Status Quo / Null Option:** profileCminimumstrict,commandAandcompletecheckedmigration; no optionalstrongerflags unless justified. No languageballot/incompletecoverage.

### Q4: Which exact eye-comfort palette, if any, should refine selected A for long reading?
Angel prefersdarker andacceptsAfornow; Null=exactA tableabove. Stay monochrome/noaccent,systemprefers-color-scheme withlight fallback, no toggle/JS. No textsize/weight/nav/spacing/budget change unless explicitly identifyingconflict withselectedA.
Research lightvsdark displaypolarity,visualfatigue/glarevsreadingaccuracy/speed,halation/lightglyphbloom,pureblackvsdarkgray,foregroundluminance/contrastbounds anddarktextweight. Distinguish proposedhex fromphysicaldisplayluminance (brightness/gamma/OLED/LCD/ambientlighting/vision/age matter). Systemtheme choice is not direct ambientlight measurement. Don'tclaim changingCSS treats eyestrain, thatdark is universallybetter, or that4.5:1 alone provescomfort. Don'tdisablelight forreaders who preferpositivepolarity.
Provide a smallprimary-evidence table: authors/year/link,actualtask/duration/sample/device/illumination/outcome studied andlimitations/fulltextvsabstract access. Separate objectiveperformance,subjectivecomfort/fatigue andbiophysicalclaims. Clearlymark unsupported pureblack/textweight/halation rules asheuristicorunknown; don't turn vendorblog/taste into researchscience. SanitizeURLs.
Chooseone coherentpair oflight/dark palettes orretainNull; list exactbg/text/muted/functionalrule/decorativehairline/focus colors andrecomputed ratios. Preserve normaltext4.5:1/functionalnontext3:1minimum; decorativehairlines neverstate-only cues. Propose smallerlatercomparison onrealMacBook/iPhone at1512/390,inbothschemes/lighting withsamecontent/time/displaybrightness recorded, not medicaltrial orfake result. Explainwhatthat comparison can/cannot establish. Fontweight discussion canexplainrisk but cannot silentlyamendfixedAweights.
**Status Quo / Null Option:** selectedAexactlight/darkpalettes; evidence insufficient to supportfurtherchangeisvalidADOPTNull. Darkleaning ispreference,not a predeterminedscienceverdict.

### Q5: Which exact metadata contract completes the locked routes/built-in validator?
Don'tre-vote mechanism/routes. TestthisLEADPROPOSAL,notpreviouslock:
Onecollectionoutsidepages/public;required title/description trimmednonempty;required statusenum sample|published|draft;date optional atobjectlevel butvalid Gregorian YYYY-MM-DD whenpresent;sectionoptional enumprojects|harness-research|university-work.
Sample:date/section forbidden,reject invalidkeys ratherthan silentlystripping;thislaunchsamplekeyfirst,title/description/body unchangedexcept permittedbacklink.
Published:operator-suppliedgenuinedate+exactlyonesectionrequired; no inventeddate/provenance orfuturedate/schedulingban.
Draft:date/sectionoptional butvalidated ifsupplied;no route/listing/sentinelpublicartifact.
Routekeyderivefromsource identity withvalid lowercase single-segment slug,assertuniquenessbeforefilter/generation;explicitoverride onlyifneed,statealternativecontract. Filter/sort once through sharedselector:published datedesc thenASCIIkey,sampleslastbykey. Sectionlists onlypublishedmatchingsection;homeallpublic initially,no arbitrarytop5cap. No newparser/schema pkg,smallownedcrossentry/calendar/outputchecks allowedwherebuiltinfacilitydoesnotexpressinvariant.
Rejectmetadata typos/unknownkeys; migrationmayremove page-layout-onlyfrontmatter,notarticleprose. Explaindate parsing/calendarroundtrip/UTCformatting andloaderIDcollision handling, not “unique byfilename” orz.coerce.date magicallycorrect. Choosepresentfieldnames (proposed date,section,status,title,description) andexactbuildfailure/outputbehavior; retainedAPI/probes verifiedlater. Ifsimplerno-draftbetter, name explicitauthoringboundary, completealternative andwhy.
**Status Quo / Null Option:** selectedfreshshell/sample withrequiredmetadata validation; no fakework/date/section. Existingbuilt-inchoice remains, but precisesemanticsmustbereconciled. No castunvalidatedfrontmatter.

## Palette evidence starting points — primary research, limited access, not verdicts

Lead opened Buchner & Baumgartner (2007), Ergonomics, abstract: https://pubmed.ncbi.nlm.nih.gov/17510822/ . It reports betterproofreadingperformance fordark-on-light while testedsubjectivefatigue/eyestrain/physiologicalmeasures didnotvary. That separatesperformancefromcomfort; abstract-onlyread,no extractedfullmethods,longsession/devicegeneralizationproof.
Discoverypointers to independentlyopen/check: https://pubmed.ncbi.nlm.nih.gov/36533999/ (“Dark mode vogue”,2023); https://pubmed.ncbi.nlm.nih.gov/25141597/ (smallcharacters/polarity,2014). Leadsubsequentretrievalsreturnedonlyfooterandlackcompleteabstract; don'tinheritverifiedfindings/sample/methods fromsearchsnippet.
https://pmc.ncbi.nlm.nih.gov/articles/PMC11175232/ negativepolarity/ambientillumination/textcolor study: leadaccessreturnedcaptcha,fulltextNOTread. Panelmaytryprimarypublisher/fulltext; otherwisemarkinaccessible anddo not fabricate data.
W3Ccontrastminimum https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html definesreadability/accessibilityfloors,not optimalcomfort ormedicalbenefit. Sourcebasedevidenceandowninference remain separate; repeatresearchprotocolSourcesused/capabilitydisclosure.

## Final allowed round and handoff

Researchcap4: thisisR4,lastordinaryround. No impliedfifthround; unresolvedquestionsatcap require documenteddisposition underprotocol/actualoperatorauthority,notforgedconvergence/automatichealthpromise. Scope #v6p1 expresslyadds paletteandkeepstechnicalresearch. No build/install/productmockup/implementationaudit/commit/deploy. Standard9generatedslots,roundspecificAngeloverrides; sourcesplit/generatoronly,no clipboard/panel-catch/chatpastedreplies. No futureR4ledger/due marker existsyet.
