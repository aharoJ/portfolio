# Code Audit: frontend foundations (Round 1)

> **Record**: operator-authorized audit (KI-09), not a /review implement round
> **For**: Independent adversarial agentic CLI audit
> **From**: Angel + portfolio Codex
> **Date**: 2026-10-14
> **Context**: Review the completed uncommitted static frontend. Audit authority is KI-09; no protocol research-basis, close or version claim.

## Review Focus

1. Security: automatic resources, emitted output, owned path cleanup and external dependency boundaries.
2. Correctness: metadata/source identity, deterministic shared selection, draft exclusion and build acceptance.
3. Edge cases: failure/rebuild lifecycle, cached content, type coverage, exact UI constraints and proof harness behavior.

## About the Project

A text-only public portfolio for Angel J. Haro, Software Engineer. Launch has one preserved sample article and three empty writing sections. Future operator-authored articles may be published or source-visible drafts; drafts must be absent from emitted public output.

## Tech Stack (Locked)

Static Astro 7.3.5; frontend-local npm/application lockfile; TypeScript 6.0.3 and @astrojs/check 0.9.10; Node >=22.19.0 native erasable TypeScript; Playwright 1.63.0. Owned plain CSS, no browser JavaScript/fonts/images, no new parser/date/runner/component library. Current declared Node types are 22.19.0. Do not suggest framework migration or unrelated dependency upgrades.

## Output Format

Return `Verdict: PASS` with grounded check account and confidence if no blockers, or `Verdict: FAIL` with findings. For every finding give severity P0/P1/P2/P3, exact supplied file and line, concrete reproduction or provable path, violated requirement/consequence, and bounded fix. Name checks actually performed and limitations, including tests not run and unavailable runtime/device evidence. Do not manufacture findings or infer tests passed from test source. Do not add web claims without primary evidence. No live web is required.

## Additional Observations (Optional)

Keep observations separate from grounded findings. Honest static review is allowed; do not claim physical-device, runtime or clinical evidence you did not obtain.

## Constraints

- Scope: the full supplied frontend and its executable proof harness. No backend/deploy/domain/origin/404/feed expansion. Review fresh requirements, not archive preservation. No edits or reads of the production repository from the isolated panel seat.
- Identity: Angel J. Haro; Software Engineer; haro.j.angel@gmail.com; https://github.com/aharoj. Text only. Three visible links Projects, Harness research, University/Work. Home through identity on inner pages. Truthful empty heading plus "Nothing published here yet." Home intro→all public Writing→contacts. No invented biography or launch pieces.
- Routes: /, /projects/, /harness-research/, /university-work/, /articles/first/; local slash-always paths. Future article routes /articles/<id>/ independent of section. Sample title/description/body preserved except return link to /. Sample visibly labeled, H1 once.
- Metadata: required trimmed nonempty title/description; required literal sample|published|draft; unknown keys rejected. sample forbids date/section keys even null/empty. published requires genuine Gregorian YYYY-MM-DD string plus one projects|harness-research|university-work section. draft optional date/section must validate if present; source-visible drafts allowed; no draft emitted route/listing/distinctive sentinel. Dates validate possibility, not provenance; future published dates allowed at next successful build, no scheduling. Raw source keys lowercase ASCII single segment, unsupported names and duplicates checked before loader insertion across all statuses. No override/auto-slugification. Shared selector: published date-desc/ASCII key-asc then sample key-asc; home all public, section published-only matching.
- TypeScript Profile A: Astro strict base; strict/noEmit/Bundler/verbatimModuleSyntax/allowJs:false/noUncheckedIndexedAccess/noFallthroughCasesInSwitch; unused-locals/unused-parameters/implicit-returns/exact-optional/implicit-override remain false. Explicit app/config/data/Astro/test/tool inclusion; no owned JS. Check before accepting build; targeted tsc only a reproduced checker gap. Runner errors are not type diagnostics.
- Quiet: system sans/root100%/body1rem 1.65/UI1.5; home name1rem600; article H1 1.5rem/1.25/600 tracking-.015em; H2 1.125rem; labels .875rem; mono only sample label. 34rem CONTENT column with1.25rem gutters (outer36.5rem border-box). Same type at1512/390, no width breakpoint. Spacing .25/.5/1/1.5/2.5/4rem;4rem page top;2.5rem major groups;1rem paragraph/list gap;.25rem title/description gap. Underlined links; noncolor current cue;2px text-colored focus/3px offset; visible skip-on-focus, wrapping nav. No accent/motion/toggle/persistence/font/image/browser script.
- Exact palette light background#FCFCFB/text-links-focus#171717/muted#5C5C5A/functionalrule#8F8F8C/hairline#E8E8E6; dark #111111/#ECECEA/#A3A3A0/#6E6E6B/#262626. color-scheme light dark with light fallback and dark system media. No universal comfort/eye-health claim; actual MacBook/iPhone/Safari and human preference remain separate from Chromium emulation.
- Build: single wrapper invalidates prior owned dist/acceptance before check→Astro build→verification; owned paths refuse symlinks/out-of-root; handled failure/interruption invalidates partial output. Expected HTML derived from same validated public selector, with fixed section/home paths. Reject unexpected HTML/nonHTML assets/unreferenced CSS/scripts/fonts/images/maps/JSON/symlinks/legacy paths/draft paths/sentinels. Every measured framework file requires explicit path/type/purpose accounting; no wildcard _astro allowance. Output expectations cannot come from whatever happened to emit. Never accept stale output after a failed invocation.
- Fresh-source scan: owned product source/config/tools/emitted output; historical reviews/dependencies/generated caches/negative test fixtures excluded. Retired identity Angel Jair Haro, standalone handle aharoJ, old archive skills/project tuples, portrait references/assets and obsolete portfolio.mjs imports absent. Accepted lowercase GitHub URL and sample prose remain allowed; no ban on generic TypeScript/Git words. Narrow verifier-constant exception only, not renderable data or whole tools tree.
- Automatic resources must be local/owned/manifest-resolved: no remote/protocol-relative/data resources, CSS @import/remote url(), third-party requests/trackers. Contact anchors may navigate on explicit user action. Ambiguous references fail acceptance. Browser request observation complements source/output scans.
- Every emitted HTML <=30000 raw UTF8 and <=10000 deterministic gzip bytes; owned CSS <=6000 raw. Inline CSS counts once in document and is reported as subtotal; linked unique CSS accounted per route and corpus. Report HTML and combined payload separately without a new combined ceiling. Fonts/images/browser JS=0 including orphan assets/requests. No arbitrary home cap or silent budget increase.
- Proofs: isolated fixture copy outside production with read-only dependency reuse, no install; required metadata negatives/positive controls, raw identities, draft sentinel across all output, published→draft rebuild, failed-check cleanup; fixture cleanup and final production build preserve original failure status. Pure schema/calendar/selector tests separate from integration; browser tests exclude Node spec. Primary1512/390 both schemes, supplementary320/intermediate/DPR2/text spacing/reflow/keyboard/touch. Provisioned Chromium only, no automatic repeated install. Claimed proofs require actual results, not source assertions.

## Marker Planning

| File | Mode | Reason | Source | Fallback |
|---|---|---|---|---|
| frontend/.gitignore | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/.gitkeep | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/astro.config.ts | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/package-lock.json | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/package.json | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/playwright.config.ts | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/src/content.config.ts | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/src/content/articles/first.md | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/src/data/site.ts | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/src/layouts/Article.astro | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/src/layouts/Page.astro | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/src/lib/article-contract.ts | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/src/lib/articles.ts | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/src/pages/articles/[id].astro | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/src/pages/harness-research.astro | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/src/pages/index.astro | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/src/pages/projects.astro | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/src/pages/university-work.astro | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/src/styles/global.css | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/tests/article-contract.spec.ts | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/tests/static.spec.ts | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/tools/build.ts | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/tools/prove-contracts.ts | full | Blind R1 full source | verified uncommitted build | n/a |
| frontend/tsconfig.json | full | Blind R1 full source | verified uncommitted build | n/a |

## Source Code

{{FILE:frontend/.gitignore}}
{{FILE:frontend/.gitkeep}}
{{FILE:frontend/astro.config.ts}}
{{FILE:frontend/package-lock.json}}
{{FILE:frontend/package.json}}
{{FILE:frontend/playwright.config.ts}}
{{FILE:frontend/src/content.config.ts}}
{{FILE:frontend/src/content/articles/first.md}}
{{FILE:frontend/src/data/site.ts}}
{{FILE:frontend/src/layouts/Article.astro}}
{{FILE:frontend/src/layouts/Page.astro}}
{{FILE:frontend/src/lib/article-contract.ts}}
{{FILE:frontend/src/lib/articles.ts}}
{{FILE:frontend/src/pages/articles/[id].astro}}
{{FILE:frontend/src/pages/harness-research.astro}}
{{FILE:frontend/src/pages/index.astro}}
{{FILE:frontend/src/pages/projects.astro}}
{{FILE:frontend/src/pages/university-work.astro}}
{{FILE:frontend/src/styles/global.css}}
{{FILE:frontend/tests/article-contract.spec.ts}}
{{FILE:frontend/tests/static.spec.ts}}
{{FILE:frontend/tools/build.ts}}
{{FILE:frontend/tools/prove-contracts.ts}}
{{FILE:frontend/tsconfig.json}}

## Audit Questions

Q1. Trace all metadata branches, date values and raw source identities before loader normalization/insertion.
Q2. Trace shared selection and publication across status changes, including caches, fixtures and emitted inventories.
Q3. Trace safe cleanup, checker/build failures, interrupts and acceptance lifecycle; identify concrete stale/partial-output paths.
Q4. Trace closed manifest, draft source/sentinel exclusion and ownership/resource accounting across every emitted file.
Q5. Trace automatic network loads from HTML/CSS and exact allowed user navigation; are ambiguous references handled explicitly?
Q6. Trace actual type inclusion, native runner semantics and whether negative probes establish the requested coverage.
Q7. Trace dependency pins/lockfile and whether integration misuses the retained framework or adds unwanted runtime behavior.
Q8. Trace exact identity/sample/Quiet/route/budget behavior and accessibility at narrow/wide/scheme/reflow settings without claiming device evidence.
Q9. Trace the test/integration driver and final production rebuild, failure preservation and whether passing assertions could miss a concrete requirement violation.
