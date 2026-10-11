# Research: Static site shell and bounded archive content (Round 1)

> **For**: Independent research cross-validation by web LLMs
> **From**: Angel + Codex (effective underlying model unverified) -- portfolio project
> **Date**: 2026-10-10
> **Context**: v0.5 scope approved with the presented image FIX on 2026-10-11. Operator: "tag and push it, then v0.5 home about projects articles". Define a static Astro shell and bounded migration; research bundle and panel preparation authorized; product implementation awaits research resolution.

## About the Project

This personal portfolio currently has a public article index and one static Markdown article. Angel requests Home, About, Projects and Articles, prefers few dependencies and in-house solutions, and retained Astro after the completed compatibility review. There is no current backend feature.

## Current Setup

Baseline: a604c68071178a5db24b38b016e8b51b03c2be19 (v0.4). Remote bleeding and the annotated v0.4 tag point to this commit. All five prior topic ledgers have terminal close actions; this exact slug has no prior cycle. Keep frontend/, npm, its local lockfile, existing Astro and Playwright, static output, conditional-only islands and backend/persistence/contract Null. v0.4 readiness rules require concrete feature facts and bounded proof before any later non-Null backend choice.

The prior inspected Astro dependency closure (287 lock locations) is a snapshot, not browser weight or future emitted-asset cost; carry it without another inventory or framework replacement comparison. Current article: title Start with the reader, route /articles/first/, readable without JS. Current root is the article index; current Back to all articles points to /. This proposed shell explicitly changes that target to /articles/ and updates old route/title assertions after research locks; it preserves article content and static/no-JS behavior.

Archive source is pinned to fd049bab81c18c42c6bfb2a1d98ffee325578e91, not the mutable v3-archive label. Only selected fields/assets below may be candidates; no React/Next import tree is migrated. Provenance is not factual verification. Angel confirmation of personal claims and destinations is separately required; panel votes or generic scope affirmation do not confirm them. Missing confirmation means omission, not invented text.

## Your Role

Evaluate route and content completeness, dependency/asset cost, accessibility and no-JS behavior, and the bounded migration's feasibility. Limit recommendations to these questions and actual facts. Do not propose alternative stacks, wholesale archive restoration, generic future backend architecture or speculative interactive features.

## What We Need From You

A reviewable route/link acceptance contract and bounded migration plan for confirmed content. Distinguish current locked constraints from candidates. Recommend narrower content/assets or Null where evidence is absent. Propose precise prospective implementation and acceptance steps without executing them now.

## Output Format

For each question:
1. ADOPT / DISMISS / INVESTIGATE, naming the exact proposed decision and its Null alternative.
2. Expected outcome and condition, without assuming change is needed.
3. Implementation: exact prospective file/commands/steps for a later authorized build.
4. Risks, including stale claims, dead links, original-image size and maintenance.
5. Verification: concrete static, keyboard, responsive and no-JS evidence relevant to that question.
6. Sources used: direct sanitized URLs/titles for any web-backed claims, or No live web access used. Strip credential/token/session queries; cite safe title/domain if a URL cannot be sanitized. Separate documented evidence, inference, and untested version applicability.

## Additional Observations (Optional)

Omit if nothing adds material evidence. No new lifecycle classification or implementation authority from generic panel enthusiasm.

## Constraints

- Operator requested the four named pages and preservation of /articles/first/. No contact page; link versus omit is Q5.
- Keep Astro static, frontend/npm/local-lockfile authority, current tests and backend/persistence/contract Null. No SSR, runtime adapter, API, database, auth, generator, service, root workspace, deployment or CI work.
- No new dependency unless evidence earns it: concrete admitted benefit, comparison to native/in-house approach, resolved graph/build/browser/maintenance cost, and explicit later scope. No such feature evidence exists now; default is no new dependency or island.
- Archive is fixed at the full commit above. Only named fields/assets below; exclude all unlisted source data, lorem/placeholder experience, placeholder phone, stats, quote, award/GPA assertions, forms and animation/icon components. Never treat a stored biography as a verified current claim.
- Freeze route labels, active state and link acceptance as below upon later research resolution; do not silently change destination meanings.
- Plain HTML/CSS grouped lists remain readable at mobile/desktop widths, keyboard-operable, with a static fallback for any later earned enhancement. Do not copy distinct desktop/mobile state trees.
- Research scope seal is N/A; no Type at scope. Compiler sealing for any implementation cycle is a later separate procedure.

## Premise Risks

| Risk | Source | Signal |
|---|---|---|
| Archive experience records contain lorem ipsum; copying imported modules could publish fabricated content. Explicitly excluded; candidate personal claims need Angel confirmation. | pinned ExperienceDesktop.tsx; prior RED | Weak |
| Five candidate binary assets total 32.83 MB; copying originals would add substantial bloat. Text-first Null; optional optimized assets require purpose and measured bounds. | pinned blob sizes | Weak |
| Home becomes a portfolio page and article index moves to /articles/, so old title/back-link test expectations must change deliberately rather than be accidentally broken. | current index/article/browser tests; operator page request | Weak |
| Archived skills tabs/project filters depend on React state. New islands are not earned by archive existence. | pinned SkillsDesktop.tsx and ProjectDesktop.tsx | Weak |

No Strong contradiction with carried static stack, ownership or backend Null. User explicitly asks for a new shell; prior article-slice copy is not a permanent site-content lock. Revisit-trigger scan is informational: six unknown actionable legacy lines, zero dormant; no backend gate is asserted met.

## Proposed route and link acceptance contract

| Canonical route | Primary nav label | Role |
|---|---|---|
| / | Home | Portfolio landing |
| /about/ | About | Confirmed identity/skills only |
| /projects/ | Projects | Confirmed bounded project records |
| /articles/ | Articles | Static index of existing article |
| /articles/first/ | No extra primary item | Existing Start with the reader article |

Navigation hrefs are canonical trailing-slash paths. Home active only for /; About/Projects/Articles active for their exact route or descendants at a slash boundary. Exact nav destination uses aria-current=page; an article descendant marks Articles aria-current=location. One active primary item on each shipped route. Logo/identity link goes to / and is tested independently. No /contact/ item or route.

Every admitted internal link, including content/category anchors, has a resolvable canonical route/unique fragment and keyboard-visible focus. Acceptance visits all five routes directly and traverses every primary link from each, the article index link and the article back-link, with JavaScript disabled at mobile and desktop widths. Static reading pages contain no script, astro-island or astro-server-island. Check heading/landmark/title/description and active-state attributes, image requests if admitted, no broken local href/src and no horizontal overflow. Existing build-first preview and JS-disabled browser harness are extended, not replaced. External/Email links are checked for approved exact scheme/destination and accessible label; no email is sent and no external browsing is required for site route tests. Public destination availability is separate evidence, not established here.

## Bounded candidate content inventory

Every citation below resolves at fd049bab81c18c42c6bfb2a1d98ffee325578e91. This is the bounded candidate allowlist. Angel confirmed the listed identity, skills, projects and image eligibility on 2026-10-11; admission and presentation remain research questions. Any additional claim requires separate confirmation.

- Home: src/modules/home/LandingDesktop.tsx, heading Angel Jair Haro, role Software Engineer, handle aharoJ only. Exclude quote, stats and imported social/UI modules.
- About: reuse those identity fields; src/modules/skills/SkillsDesktop.tsx names only Java, Python, TypeScript, JavaScript, HTML5, CSS3, Git, Bash; no proficiency ratings or icon/component imports. Exclude education, GPA/awards and every experience record.
- Projects: src/modules/projects/ProjectDesktop.tsx, ALL_PROJECTS records Twitter, 3D Portfolio, tmux-config and Quantum Annealing only. Allowed fields title, category and GitHub destination; no claims of impact/current maintenance, no unlisted hashtags, demos, repositories or descriptions.
  - Twitter: Web Apps; https://github.com/aharoJ/Twitter
  - 3D Portfolio: Web Apps; https://github.com/aharoJ/3D-Portfolio
  - tmux-config: Dot Files; https://github.com/aharoJ/tmux-config
  - Quantum Annealing: Machine Learning; https://github.com/aharoJ/QuantumAnnealing
- Articles: current frontend/src/pages/articles/first.md only; preserve title/body/frontmatter, with proposed back-link update. No archive article exists in this selected pool; do not invent an article collection.
- Optional Q5 destinations: operator-confirmed Email `mailto:haro.j.angel@gmail.com` (2026-10-11, verbatim: "email is haro.j.angel@gmail.com") and GitHub `https://github.com/aharoj`. The GitHub destination also appears in pinned src/modules/socials/items.ts. The archive email `angel@aharoj.io` from src/app/contact/page.tsx was not recognized by Angel and is rejected, not a migration candidate. Never copy the contact form, placeholder phone, other socials or imported icons. Angel also confirmed aharoj.io as the site domain; it is not itself a contact destination.

### Exact prospective asset candidates

- public/profile/aharoJ.jpeg — 1420649 bytes; git blob 05c9543705c553bf9f30c0d461b3af58512c8a9a; tied only to its matching admitted portrait/project record. No mandatory copy.
- public/projects/twitter.png — 3922426 bytes; git blob 0e580753bef45d9559c55e8cc5f7f2a0d0af0aa6; tied only to its matching admitted portrait/project record. No mandatory copy.
- public/projects/3D-Portfolio.png — 5584746 bytes; git blob 0790f1196c4d687effb6e6e97e483d7317b3125f; tied only to its matching admitted portrait/project record. No mandatory copy.
- public/projects/tmux.png — 18643137 bytes; git blob c950ef38252a82ba07dccb9648e77e38cf014372; tied only to its matching admitted portrait/project record. No mandatory copy.
- public/projects/QuantumAnnealing.png — 3259046 bytes; git blob 702cba7ebae39d86cfad8271d33fc333b4578ed4; tied only to its matching admitted portrait/project record. No mandatory copy.

All other binary assets are excluded. If admitted, migrate to build-managed local source assets rather than leaving oversized originals in the emitted public tree; actual transform/path choice is researched, not already locked. Record exact destination, dimensions, type, derivative hash and measured output/request bytes. No new optimizer library by assumption. Decorative versus informative image semantics must be explicit; descriptions do not claim actual asset review at scope.

### Exact archive reference paths (not migration permission)

- src/app/(home)/page.tsx — git blob 7f63f0e5a5174e748617329da3e1a212ba0e7205; 1209 bytes.
- src/modules/home/LandingDesktop.tsx — git blob 01956a5d20429654cc024860116957dafeda3b85; 2529 bytes.
- src/app/about/page.tsx — git blob d92579c08eeb806f1a5fb39253dffe128d0abea4; 1584 bytes.
- src/modules/education/EducationDesktop.tsx — git blob 74b4ccd2cdc16339e60acfeb84463c1e7517721b; 3093 bytes.
- src/modules/experience/ExperienceDesktop.tsx — git blob 1cdcde1df3a54f11ded7d4ed2752e766715bc8ce; 7004 bytes.
- src/modules/skills/SkillsDesktop.tsx — git blob 4957c799cf6550523387f790f85c93954accfc06; 8734 bytes.
- src/app/projects/page.tsx — git blob ec5ae73b6611dd29544e8ac2135c9cb50042759e; 445 bytes.
- src/modules/projects/ProjectDesktop.tsx — git blob 377c51c75dae9474c3be2e446459ee91a7fe019a; 6601 bytes.
- src/modules/socials/items.ts — git blob f8425a7d66ad9f3ab3a6202f6eb02160b8fa3757; 881 bytes.
- src/app/contact/page.tsx — git blob 61a6b0433d0f4ba0a7165f93bb099c61f9d801db; 3968 bytes.

Full SHA-256 inventory is external at ~/desk/tmp/portfolio/v0.5-site-shell/ARCHIVE-INVENTORY.json. The immutable commit plus path/blob identities bind content. Excluded source references establish omissions and are not permission to copy their data/imports. No other archive source path is selected.

## Current repository acceptance context

{{FILE:frontend/src/layouts/Page.astro}}

{{FILE:frontend/src/layouts/Article.astro}}

{{FILE:frontend/src/pages/articles/first.md}}

{{FILE:frontend/tests/static.spec.mjs}}

{{FILE:reviews/runbook/stack-selection.md}}

{{FILE:reviews/runbook/astro-backend-compatibility.md}}

## Research Questions

### Q1 — Routes, navigation and article continuity

Evaluate the proposed fixed routes and labels: `/` Home, `/about/` About, `/projects/` Projects, `/articles/` Articles, and existing `/articles/first/` Start with the reader. Keep a single shared semantic navigation, with the Articles section active on its article descendants, no hamburger dependent on JS, and the article back-link targeting `/articles/`. Preserve the existing article title/body/frontmatter, changing only that internal back-link and shared layout as warranted. An Articles index lists existing Markdown using Astro build-time capabilities; no CMS/search/feed/framework selection. Does this contract provide the smallest complete shell and no-JS route coverage?

**Status Quo / Null Option:** Keep current `/` article index, single home header link, `/articles/first/`, and its existing `/` back-link; defer the four-page shell.

### Q2 — Candidate text and project allowlist

Evaluate the bounded candidate records below, migrate selected fields only. Angel has confirmed this listed identity/skills/project pool; any additional personal/project claim requires confirmation before publication. A panel may judge presentation and omission rules; it cannot certify biography or current experience. Exclude all experience records/descriptions, placeholder phone, award/GPA claims, counters, and other unlisted material. Use minimal non-fabricated identity copy and confirmed project links; absent confirmation or usable content means omit the affected record rather than invent content. Should this limited content pool be used, narrowed, or left deferred?

**Status Quo / Null Option:** Use only current accepted article content; add no archive claims, projects or biography despite eligibility confirmation. Route shells, if Q1 passes, may use factual neutral section headings without false records.

### Q3 — Optional images and shipped-asset bounds

Evaluate text-first output versus adding only the five exact candidate images below. Original binary total is 32,830,004 bytes; unchanged copies do not fit the minimum-bloat goal. Proposed admission rule: every image has a demonstrated purpose, correct alt treatment, intrinsic dimensions, responsive sizing, and a reproducible local optimization path using already installed Astro capabilities; propose portrait <=150,000 encoded bytes and each project image <=200,000 bytes per delivered variant, with no unused original in emitted public output. Also propose at most two distinct emitted variants per admitted image (including fallback and alternate-format files), at most 1,000,000 encoded bytes across all emitted image files, and at most 600,000 image-body bytes on the largest tested route. Measure the latter on cold loads of all five routes at mobile/desktop widths and DPR 1 and 2, with JavaScript disabled and scrolling to load lazy images; count unique fetched image bodies. Inventory emitted files separately so unused derivatives cannot escape the aggregate cap. These are prospective limits, not measured results; text-only remains the default until limits are set and every applicable bound is verified. Reject admission that misses any bound. No new optimizer/image library is presumed. Should optional images earn admission, with a defensible narrower bound or scope?

**Status Quo / Null Option:** Text-only Home/About/Projects and no migrated binaries; existing article unchanged. Assets are candidates, not obligatory copies.

### Q4 — Static skills and project grouping

Evaluate plain grouped skill lists and project category headings with optional native anchor links. All approved content must be present/readable without JS; labels must not masquerade as working tabs/filters. Preserve one content model at mobile/desktop widths, semantic headings, keyboard focus, visible active navigation and no horizontal overflow. No user fact currently earns a client island, animation, icon library or filter dependency; any enhancement proposal needs a concrete interaction benefit, dependency/browser-byte cost, and a complete static fallback before a later scoped decision.

**Status Quo / Null Option:** No skills section or category controls; project records, if independently admitted by Q2, remain a simple complete static list. No new dependency or island.

### Q5 — Contact links or omission

Compare omitting contact with plain links outside the four-item primary navigation: Email using confirmed `mailto:haro.j.angel@gmail.com` and/or GitHub using confirmed `https://github.com/aharoj`. Angel confirmed these destinations on 2026-10-11 in FACTS-angel.md; their placement or omission remains the research question, not an already adopted UI decision. No contact route, form, phone, social widget or backend. Define exact accessible labels and hrefs, with keyboard/no-JS validation and external-scheme checks; testing mailto must inspect href without sending mail.

**Status Quo / Null Option:** Omit every contact link. No contact page or backend.

## Scope state and exclusions

Authorization and facts (2026-10-11; #b5n9), Angel verbatim: "approve with the fix, all yes". Immediately presented questions were: approve scope with the RED aggregate-image-budget/max-variant FIX and text-only default until set and verified; keep Twitter, 3D Portfolio, tmux-config, Quantum Annealing; keep Java, Python, TypeScript, JavaScript, HTML5, CSS3, Git, Bash; portrait yes. The supplied FACTS-angel.md records confirmation of the shown identity/title/handle and portrait plus four project-image eligibility. Earlier email confirmation verbatim: "email is haro.j.angel@gmail.com". GitHub is confirmed; archive email is rejected. Fact source: ~/desk/tmp/portfolio/v0.5-site-shell/FACTS-angel.md.

This explicitly approves the previously presented FIX and listed facts, authorizing the revised research bundle and panel batch. It does not introduce an unapproved modification or adopt the research answers. No product code, asset copy, dependency install, Type stamp, implementation authority or v0.5 commit. Exclude contact page, forms, backend, deployment, framework/toolchain replacement, wholesale styling/animation restoration, CMS and all content outside the named candidates. The existing article route is carried; proposed back-link/nav changes are explicit.
