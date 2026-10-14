# Research: Frontend foundations (Round 1)

> **For**: Independent research cross-validation by web LLMs
> **From**: Angel (aharoJ) + Codex -- portfolio project
> **Date**: 2026-10-11
> **Context**: Correct the missing language/styling/design/viewport/IA/content decisions. Scope conditionally affirmed after independent review; R1 research packet, no implementation authorization.

## About the Project

A genuinely fresh public portfolio and review-harness test vehicle on the retained static Astro toolchain. Operator-stated purpose: public readers access technical project write-ups, `$review` harness research, and university/work pieces as short articles (`reviews/stack-selection/research/stack-selection-r2.md:21-26`). No visitor persistence or present login/forms/payments; publishing is operator-owned and infrequent. Those historical purpose facts require current priority confirmation, not an invented hiring/customer funnel.

## Current Setup

`frontend/`, npm and its application-local lockfile; Astro static output and existing Playwright/Chromium no-JS tests. Node/npm engine floors are recorded in `frontend/package.json`. No `tsconfig.json`, type-check script, or TypeScript/`@astrojs/check` locked package entry was found. Configurations, data and tests are `.mjs`; `.astro` frontmatter already contains some TS annotations, which is not evidence of strict project checking. Five current routes and archive-derived content are historical implementation baseline, not a fresh design/content brief. Existing functional tests cover320x900 and1280x900 CSS viewports at DPR1/2; this proves neither laptop/mobile design quality nor actual device CSS width.

Operator language requirement, verbatim (2026-10-11): "one thing is I want TS soo vote me in for TS and for the other questions yes I agree". TypeScript is fixed; there is no JS-vs-TS vote. Setup choices remain open. Record: `reviews/decisions.md`, frontend-foundations operator-fixed premises. Scope context/premise handling is protocol.md440-444/458-461; explicitly accepted requirements and dated operator dispositions are recognized at630, separately from panel-majority locks at798. No special operator-fixed ballot schema is specified, and none is invented.

The HIGH incident `~/desk/incidents/2026-10-11-portfolio-foundations-never-researched/INCIDENT.md` records the acknowledged mismatch between a brand-new site and the archive-migration frame. The current brief explicitly directs its correction. `v3-archive` is not an inspiration, source, asset pool or fallback for this topic. No product content is removed during scope drafting.

## Operator-goal anchor and missing confirmations

Carried statement: "The audience is the public. The portfolio branches into technical project write-ups, $review harness research, and university/work pieces, presented as short articles." Source: the operator-stated first-slice facts at the path above. Existing read-only/infrequent operator publishing facts are context, not new monetization or backend requirements.

Angel still needs to confirm: priority within that public audience; what a visitor should understand/do first; relative prominence of projects/research/university/work; fresh identity/role/contact/about facts and actual pieces to publish; preferred tone and visual references (none from the archive); portrait yes/no and any fresh approved source; primary laptop browser CSS width/height/zoom; mobile sizes to prioritize; and whether 50/50 means equal long-term design attention. No traffic split, biography, credentials, services, project outcomes or aesthetic preference is inferred.

## Decision-dimension inventory

| Dimension | Status | Authority or scoped decision |
|---|---|---|
| Language | DECIDED, operator | TypeScript, dated frontend-foundations premise; setup/migration/check coverage inQ1 |
| Styling approach | IN SCOPE | Q2; current plain CSS is Null baseline, never a prior styling ballot winner |
| Design system | IN SCOPE | Q4; fresh grid/type/spacing/color/landing direction, small owned primitives |
| Viewport strategy | IN SCOPE | Q3; operator laptop-first/mobile-full/50-50 goal; concrete CSS targets need confirmation |
| IA | IN SCOPE | Q5; fresh purpose-led hierarchy/navigation and treatment of current URL continuity |
| Content source | DECIDED, operator | Fresh Angel-supplied facts/pieces; archive rejected; Q5 defines schema/removal/replacement |
| Accessibility | IN SCOPE | Q3/Q4/Q5 measurable contrast, keyboard/focus, touch, zoom/reflow and semantic reading criteria; carried no-JS semantics remain |
| Performance budget | IN SCOPE | Q1/Q2/Q4/Q5 separate build/development graph from browser bytes; propose measurable budgets, no invented accepted numbers |
| Testing | IN SCOPE | Retain existing build-first Playwright/no-JS execution; Q1 adds type-check coverage, Q3/Q4 define design proofs, Q5 updates assertions to fresh facts |
| Privacy / analytics | IN SCOPE, explicit Null | Q5: no site analytics/tracking/visitor persistence; deployment-specific logging/privacy is deferred with deployment |
| Deployment | OPERATOR-DEFERRED | Angel: "not until I say so"; no hosting/provider/publishing work |

Astro/static and frontend/npm/local-lockfile are retained decisions: stack-selection R2 and topology-tiebreak Q1/Q2, as prospectively carried in their runbooks. Backend/persistence/contracts remain Null. These are not new candidate ballots. Historical image ceilings/metadata/aspect and encoded-body accounting remain safety context when relevant; they do not authorize the old portrait or any new asset. Text-only is the baseline until fresh imagery and applicable policy are selected and verified.

## Current untraced defaults and proposed disposition

Every item below is an observation of current files, not a research lock. Functional semantics already traced to no-JS/a11y decisions are retained while their visual values are reopened.

| Current choice / location | Proposed disposition |
|---|---|
| `astro.config.mjs`, `playwright.config.mjs`, `frontend/src/data/portfolio.mjs`, `frontend/tests/static.spec.mjs` are JS; no tsconfig/check command | Q1 names which migrate toTS and any explicit infrastructure exception; no silent `.mjs` retention |
| `.astro` frontmatter has ad-hoc interfaces/casts without a project checking gate | Q1 define strictness and actual coverage; emitted static build success is not type-check proof |
| `Page.astro` one global `<style is:global>` block | Q2 decide global/scoped authoring, owned tokens/utilities or justified tool; no assumed CSS-framework rejection |
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
| `portfolio.mjs` copied identity, eight skills, four old project tuples; About portrait.png | Q5 removal/replacement from fresh Angel input; archive content/assets not candidate options |
| Existing sample `frontend/src/pages/articles/first.md`, glob article index and metadata copy | Q5 distinguish demo fixture from actual operator pieces; decide authoring/ordering/URL continuity explicitly |
| Hardcoded old identity/project/portrait tests and inventory expects >=1 image | Q1/Q5 replace assertions with ratified fresh facts/asset selection; text-only must remain valid if selected |
| Current320/1280 widths and900px height used as functional matrix | Q3/Q4 add design acceptance targets; these numbers do not establish14-inch or50/50 quality |
| `astro.config.mjs` trailingSlash:'always' | Q5 make canonical URL/trailing-slash/continuity policy explicit; retain current policy as baseline pending ratified IA |
| `Page.astro` lang='en', title suffix `&#124; Portfolio`, per-page description prop and current copy | Q4/Q5 confirm content language, title/site identity and description rules from fresh input; no brand/copy inherited |
| `playwright.config.mjs` browserName:'chromium' only | Testing dimension/Q3 explicitly decide coverage/support targets; present Chromium tests do not establish other-engine support |
| Root/frontend .gitignore and frontend/backend .gitkeep | Inspected: ignored outputs/caches/env files and newline-only directory keepers; non-product housekeeping, unchanged, no API or deploy authority |
| No site analytics/tracking or visitor-persistence feature | Explicit Null: no new analytics, cookies, trackers or third-party embeds; Q5 confirms minimal public-read surface. Host logs/privacy obligations remain in operator-deferred deployment scope |

## Your Role

Evaluate explicit TS/checking coverage and cost, styling ownership/tool burden, comparable laptop/mobile reading and navigation, fresh design feasibility, and content/IA traceability to Angel's facts. Identify any missing decision dimension or mismatch with the operator purpose. Do not infer taste or product facts from the archive, or justify dependency additions through popularity.

## What We Need From You

For each question, recommend a bounded outcome with alternatives/Null, precise scope, costs and smallest distinguishing verification. Flag missing operator facts before proposing copy. Produce a coherent design/TS/content verification plan without installing tooling or implementing. Distinguish proposed numeric budgets from accepted constraints and functional tests from design-quality proof.

## Output Format

For each Q1–Q5: ADOPT/DISMISS/INVESTIGATE of the setup/design option (never TS versus JS); expected outcome; exact implementation steps for later authorized work; risks; verification; sources used (sanitized primary-source URLs/titles, or `No live web access used`). Q1 must explicitly retain the operator TS premise; a JS-only answer conflicts with scope. No invented operator vote, panel tally, approved personal fact or research lock. Optional observations may identify scope gaps.

## Constraints

Minimal third-party dependencies and in-house ownership per `~/desk/tmp/portfolio/v0.4-stack-recon/RECON.md:6`; its dated package-count estimates are context, not fresh measurements. Every new package proposal names purpose, direct/transitive development/build impact, browser impact, owned maintenance alternative and concrete need. Zero browser JS remains mandatory; static Astro, application-local npm/lockfile and no backend/persistence/contracts are retained. No React/islands/runtime UI framework, general component kit, root workspace/lockfile, CI, deployment, paid-service/auth/payment or archive import/copy work. No framework/topology/package-manager reopen is authorized here.

Current source remains unchanged while research is scoped. Later implementation must remove/replace archive-derived v0.5 data/page copy and old portrait under ratified fresh choices. The old release and its immutable decisions/intakes/ledgers/tags remain historical. Only fresh Angel facts/asset authorization can populate the new site. No new personal story/project claims, portrait permission, logo, palette, wireframe or interaction is invented by the lead.

## Premise Risks

| Risk | Source | Signal |
|---|---|---|
| Fresh content/IA reverses the v0.5 archive-migration premise | Incident sections1/4/7 and current corrective brief; existing site-shell-content decisions retained as history | Strong |
| Developer acknowledgment, before drafting | Angel declared the incident and requested TS plus agreement to the other corrective questions; current brief explicitly orders fresh content and rejects archive reuse | Acknowledged, no repeat permission gate |
| TypeScript request replaces an untraced JS implementation default, not a prior JS research lock | Current code and dated operator premise | Weak |
|14-inch physical diagonal does not determine CSS viewport;50/50 has no confirmed traffic meaning | Corrective goal versus only320/1280 functional tests | Weak |
| Language/style/design scope could hide new tooling or scope gaps again | Ten-dimension inventory and untraced-default table required by incident | Weak |
| Public purpose priority and actual fresh pieces are still missing | v0.2 operator anchor plus current fresh-content instruction | Weak |

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
 Future paid service/topology/manager triggers do not authorize reopening those excluded domains. No prior research exists for this exact slug; this is a fresh corrective topic, not a continuation/rewrite of closed site-shell-content.

## Web-Leverage / Industry Landscape

Lead has tool-backed browsing available; no live web access used for this scope/bundle. No vendor-version recommendation or researched tooling selection is claimed.

1. **Anti-hallucination / source-hygiene:** panelists with live tools should open up to3 current primary sources relevant to TS/Astro checking, styling cost or accessibility/viewport criteria. Cite a verifiable source with URL/title and author/date where present; do not invent citations or launder "industry consensus". Separate evidence from inference. Sanitize URLs: strip credentials, strip tokens, and remove query parameters carrying credentials/session/OAuth codes; cite title/domain if a URL cannot be safely cleaned. Do not paste credentials or signed URLs.
2. **Session-capability self-declaration:** state actual live browsing access yourself; not model or brand inference. Brand-based assumptions about web access are invalid because access varies by session. Without tools say `No live web access used` and omit current-source claims.
3. **Codebase-constraint supremacy:** project constraints outrank industry patterns and operator-fixed premises remain controlling. External examples challenge or enrich the scoped alternatives; they do not become authority by prestige or create missing product requirements.

## Research Questions

### Q1: How should operator-fixed TypeScript be configured and verified with minimal tooling?

Language is already decided. Compare a minimal strict Astro/TS project setup with a phased stricter setup; specify strictness flags, what checks `.astro`/standalone `.ts`/configuration/tests/Markdown-bound metadata, exact necessary development tooling and type-check command, and migration disposition for every current `.mjs`. Explain any file left JS as an explicit limited tool boundary needing operator acceptance; do not silently keep source/data/tests JS. Compare coverage and maintenance with the existing locked Node/npm/Astro/build/browser flow. No installs now.

**Status Quo / Null Option:** no project TS/checker exists: no tsconfig, type-check command or locked TypeScript/checker entry. Preserve that factual baseline during research; retaining JS-only as the final language is N/A because it conflicts with Angel's explicit TS requirement. The minimum verified TS setup is the research outcome to select, not a preselected Null. Build/browser success is not type-check proof.

### Q2: Which styling approach best serves fresh design with the least justified tooling?

Compare current plain CSS, plain Astro-scoped/global CSS with a small owned token/utility convention, and Tailwind with only required integration; another minimal option must identify a concrete missing capability. Count actual proposed build/dev dependencies and browser output separately, authoring/maintenance cost, source readability, theming/responsive/a11y needs and how design values remain traceable. No component library or design system is assumed necessary; no claim that Tailwind was previously rejected.

**Status Quo / Null Option:** plain CSS with no new third-party styling dependency. Existing values/layout remain undecided Q4 defaults, not a locked design.

### Q3: What concrete laptop-first and full-mobile viewport/interaction strategy meets the goal?

Operator direction:14-inch laptop first, mobile a full second target,50/50 long-term goal. Proposed CSS viewports for confirmation: laptop1280x800 and1440x900; mobile360x800 and390x844, plus320px stress boundary. Record actual browser innerWidth/innerHeight and zoom when Angel supplies them; neither diagonal nor DPR alone fixes CSS width. Research content-driven breakpoints, zoom/reflow, keyboard/touch navigation, text measure and comparable design acceptance across both targets. No simulated50/50 traffic claim.

**Status Quo / Null Option:** responsive semantic no-JS output with current320x900/1280x900 functional checks while target/design criteria remain unselected; no claim those checks already satisfy the operator goal. Confirm target widths before later visual implementation.

### Q4: What fresh grid, type, spacing, color and landing direction fits the public short-article purpose?

Compare a small set of fresh purpose-led directions (e.g. article-led reading surface versus a project/research overview that leads into articles), contingent on Angel's priority/taste input. Specify hierarchy, columns/container, readable measure, typography/font sourcing, spacing scale, palette/contrast, focus/touch/zoom states and laptop/mobile landing behavior with minimal owned primitives. Reassess every current CSS value. No archive screenshots, style imitation, palette/template imports or invented personal branding. Identify missing operator design facts instead of silently choosing Georgia/cream/single-column or another default. Propose measurable accessibility and page/font/CSS budgets, not an unverified compliance claim.

**Status Quo / Null Option:** no new visual system until direction is confirmed; retain the temporary functional shell only during research. Current CSS is not ratified as the new design; a plain semantic/system-font direction remains a candidate if Angel chooses it.

### Q5: What fresh pages/IA/content model should replace the archive-derived material?

Start with the supplied public project-writeup/research/university/work article purpose and fresh Angel input. Choose information hierarchy and first-visit path; decide current route continuity/removal/redirect needs, Home/About/Projects/Articles labels, actual article/demo disposition, article metadata/ordering, and minimum owned content schema. Give a removal/replacement checklist for portfolio.mjs, page copy, old project/skills tuples and portrait. No archive facts/assets can supply missing content. Identity/role/contact/about facts and each publishable piece must be freshly supplied/confirmed for this corrective scope. Assess whether fresh imagery adds value; default text-only, with old portrait removed and any fresh image needing relevant budgets/source approval/reproducibility proof.

**Status Quo / Null Option:** no invented or archive-derived replacement content; retain a minimal static publishing shell until fresh facts/pieces are supplied. Current code stays untouched during scope/research, but current archive material is not an approved final-content alternative. Preserving useful existing URL continuity can be selected separately from keeping old claims/assets.

## Scope affirmation and research-panel handoff

Angel (2026-10-11), verbatim: "yes I approve it; or lets wait for red agent before but if its good I auto approive". Independent RED.md (#v6rd) confirms all mandatory scope checks: complete dimensions, correct goal/TS/Nulls and no archive leakage. Its F1–F4 fix documentation/procedure precision without changing the agreed direction. Current #v6bd brief explicitly confirms that the conditional approval applies to these fixes and authorizes bundling. This is the later authorization superseding the original scope-only brief; no second ready-to-bundle question or fake research tally is created. The earlier TS requirement remains verbatim above.

Prepare `~/desk/tmp/portfolio/frontend-foundations/panel-batch/r1/`: copy the compiled intake there and verify/record its SHA-256 against the compiler manifest. Generate responses.md only with `python3 ~/desk/tmp/rp-lanes/response-tools/generate_final.py GEMINI DEEPSEEK MISTRAL GROK MEMO Z.AI CLAUDE.AI KIMI GPT > responses.md` in that folder (48-column U+2500 long-rule START/END, END right-aligned). Angel pastes each answer between its START/END and says "r1 in"; split verbatim using validate_final.py from the same response-tools directory. Do not hand-write responses.md, use clipboard/panel-catch, accept replies pasted into chat, or modify existing pasted files. Angel's round-specific seat additions/removals take precedence; remaining seats keep the standard order. Implementation audits use agentic CLI only, never web.

Only research bundling and the empty generated web-panel batch are authorized now. No product edit/install/build, implementation audit, commit/tag/push or deployment. Missing fresh audience/design/content facts remain explicit; panel research cannot invent or reconfirm them for Angel.
