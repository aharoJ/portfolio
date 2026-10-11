# Code Audit: Static portfolio shell and bounded content (Round 1)

> **For**: Independent adversarial code audit
> **From**: Angel + Codex (effective model unverified) -- portfolio project
> **Date**: 2026-10-11
> **Context**: Blind first audit of the implemented five-route static shell in frontend/.

## Review Focus

1. Security: safe text/attribute rendering, public image metadata, source-to-output boundaries and static dependencies.
2. Correctness: exact canonical routes, shared navigation/current state, article continuity, confirmed data and contact destinations.
3. Edge cases: direct no-JS access, mobile/desktop layouts, DPR image selection, keyboard focus, all local targets, clean reproducibility and acceptance-test validity.

## About the Project

This personal portfolio adds Home, About, Projects and Articles to an existing static article slice. Research locks permit only confirmed identity, eight skill names, four project title/category/GitHub tuples and the confirmed footer destinations. An optional About-only portrait must pass the bounded policy; the complete text-only shell is the fallback. Inspect the supplied implementation independently.

## Tech Stack (Locked)

Astro static output, frontend/, npm and frontend/package-lock.json; existing Playwright/Chromium acceptance. No new dependency, hydration or runtime adapter. Backend, persistence and browser-to-API contract choices stay Null. Versions are observed in manifest/lockfile, not new research pins.

## Output Format

- **PASS**: "Ship it. No blockers found." + confidence level, grounded check account and material verification limits.
- **FAIL**: severity, file path, line number, reproduction and in-scope fix.

If you find NOTHING new, say so honestly. Do not manufacture findings. Derive findings from actual source behavior, not assignment wording or test names. Separate observed evidence from inference and disclose unavailable execution/image inspection capabilities.

## Additional Observations (Optional)

Omit if empty. Sources used: supplied artifacts or primary documentation. Sanitize source URLs; no credentials or session queries.

## Constraints

Review the listed frontend source, configuration, tests and built HTML. Project constraints and runbook supply acceptance context. Preserve canonical /, /about/, /projects/, /articles/, /articles/first/ and the existing article except its return link. Primary nav has four items; confirmed contacts stay outside it. Skills/project grouping is plain static HTML; archive component imports, invented claims, controls, project images and additional routes are excluded.

Portrait bounds are simultaneous: one WebP format, at most two emitted files/source, widths 240/480 only, render ≤240 CSS px with preserved aspect ratio; ≤150000 bytes per portrait file, ≤1000000 all emitted image bytes, ≤600000 unique image response-body bytes per route/context. No-JS lazy loading supplies no savings. Missing admission evidence selects clean text-only. No dependency/budget expansion, root workspace/lockfile, API/auth/database, CI or deployment work.

The managed binary source frontend/src/assets/portrait.png is part of the component, but binary bytes are not text-inlined. Its SHA-256 is 4a73a1c949a0fdd11c35143cfb2dd1b338b879389c1c5a8f9a0fb6479f6a90ae. Original extraction uses archive commit fd049bab81c18c42c6bfb2a1d98ffee325578e91, public/profile/aharoJ.jpeg, SHA-256 ea8e0e66be30f8d4326d920a71bcba1015b1bf1326abb7f454bbb71d2126c3a5. Source preparation: existing Sharp reads the pinned bytes, resize({width:480}).png().toBuffer() with default metadata stripping; emitted Image requests WebP 240×320 quality 80. Do not infer measured feasibility from this recipe. Binary inspection needs the supplied companion or repository; otherwise report that limitation. No raw source metadata is included.

R1 is blind: no lead findings, classification tables, previous audit outcomes or panel conclusions.

## Marker Planning

| File | Mode | Reason | Source | Fallback |
|---|---|---|---|---|
| frontend/.gitignore | full | R1 blind full-source | C55/C52 | none |
| frontend/astro.config.mjs | full | R1 blind full-source | C55/C52 | none |
| frontend/package.json | full | R1 blind full-source | C55/C52 | none |
| frontend/package-lock.json | full | R1 blind full-source | C55/C52 | none |
| frontend/playwright.config.mjs | full | R1 blind full-source | C55/C52 | none |
| frontend/src/data/portfolio.mjs | full | R1 blind full-source | C55/C52 | none |
| frontend/src/layouts/Page.astro | full | R1 blind full-source | C55/C52 | none |
| frontend/src/layouts/Article.astro | full | R1 blind full-source | C55/C52 | none |
| frontend/src/pages/index.astro | full | R1 blind full-source | C55/C52 | none |
| frontend/src/pages/about.astro | full | R1 blind full-source | C55/C52 | none |
| frontend/src/pages/projects.astro | full | R1 blind full-source | C55/C52 | none |
| frontend/src/pages/articles/index.astro | full | R1 blind full-source | C55/C52 | none |
| frontend/src/pages/articles/first.md | full | R1 blind full-source | C55/C52 | none |
| frontend/tests/static.spec.mjs | full | R1 blind full-source | C55/C52 | none |
| frontend/dist/index.html | full | R1 blind full-source | C55/C52 | none |
| frontend/dist/about/index.html | full | R1 blind full-source | C55/C52 | none |
| frontend/dist/projects/index.html | full | R1 blind full-source | C55/C52 | none |
| frontend/dist/articles/index.html | full | R1 blind full-source | C55/C52 | none |
| frontend/dist/articles/first/index.html | full | R1 blind full-source | C55/C52 | none |
| reviews/constraints.md | full | R1 blind full-source | C55/C52 | none |
| reviews/runbook/site-shell-content.md | full | R1 blind full-source | C55/C52 | none |

## Source Code

{{FILE:frontend/.gitignore}}

{{FILE:frontend/astro.config.mjs}}

{{FILE:frontend/package.json}}

{{FILE:frontend/package-lock.json}}

{{FILE:frontend/playwright.config.mjs}}

{{FILE:frontend/src/data/portfolio.mjs}}

{{FILE:frontend/src/layouts/Page.astro}}

{{FILE:frontend/src/layouts/Article.astro}}

{{FILE:frontend/src/pages/index.astro}}

{{FILE:frontend/src/pages/about.astro}}

{{FILE:frontend/src/pages/projects.astro}}

{{FILE:frontend/src/pages/articles/index.astro}}

{{FILE:frontend/src/pages/articles/first.md}}

{{FILE:frontend/tests/static.spec.mjs}}

{{FILE:frontend/dist/index.html}}

{{FILE:frontend/dist/about/index.html}}

{{FILE:frontend/dist/projects/index.html}}

{{FILE:frontend/dist/articles/index.html}}

{{FILE:frontend/dist/articles/first/index.html}}

{{FILE:reviews/constraints.md}}

{{FILE:reviews/runbook/site-shell-content.md}}

## Audit Questions

Q1. Trace manifest, lockfile and configuration through a fresh static build. Is the actual five-route output reproducible without undeclared runtime/configuration requirements?
Q2. Trace canonical navigation, exact and descendant current-state behavior, direct entries, article-index/article/back-link and identity links. Identify any concrete destination or active-state error.
Q3. Trace data and layouts into HTML. Are all published personal/project/contact claims within the confirmed allowlist and safe in their rendering contexts?
Q4. Examine mobile/desktop landmarks, headings, responsive layout, keyboard traversal, focus visibility, skip link and image alt/context. Identify observable accessibility failures.
Q5. Trace the managed image through actual emitted outputs and browser selection with scripting disabled. Can excess files, metadata, oversized bodies, original copies, aspect distortion or route leaks escape the policy/tests?
Q6. Inspect all five supplied built pages for hydration/runtime work and local href/src targets. Is the static/no-JS requirement actually upheld?
Q7. Evaluate the 20-context tests' response collection, image completion, encoded-body accounting, assertions, navigation and preview wiring. Can a concrete required failure yield misleading success?
Q8. Inspect binary provenance and reproducibility assumptions, source/output ignore rules and the text-only failure path. Separate missing inspectable evidence from a reproducible source defect.
Q9. Report any other concrete correctness/security/accessibility/maintainability blocker, with exact location, minimal reproduction and bounded repair. Do not suggest a replacement stack or speculative feature.
