# Code Audit: Static portfolio shell and bounded content (Round 2)

> **For**: Independent adversarial code audit
> **From**: Angel + Codex (effective model unverified) -- portfolio project
> **Date**: 2026-10-11
> **Context**: Adversarial confirmation of the static shell and corrected image acceptance/handoff.

## Context: Round 2 -- Adaptive Inlining

Retained baseline: a604c68071178a5db24b38b016e8b51b03c2be19. Changed/new files (fully inlined, 15 files): frontend/astro.config.mjs, frontend/src/data/portfolio.mjs, frontend/src/layouts/Page.astro, frontend/src/pages/index.astro, frontend/src/pages/about.astro, frontend/src/pages/projects.astro, frontend/src/pages/articles/index.astro, frontend/src/pages/articles/first.md, frontend/tests/static.spec.mjs, frontend/dist/index.html, frontend/dist/about/index.html, frontend/dist/projects/index.html, frontend/dist/articles/index.html, frontend/dist/articles/first/index.html, reviews/runbook/site-shell-content.md.
Unchanged file requested as signatures only: frontend/package-lock.json; extraction failure falls back to full. Other unchanged selected files are small shared configuration/acceptance context and remain full. Unchanged files were reviewed at full source in Round1. Request full expansion by citing a path.

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

The prior portrait admission evidence is supplied below. Verify its claims against supplied source and actual test logic; disclose binary/native execution limits.

## Marker Planning

| File | Mode | Reason | Source | Fallback |
|---|---|---|---|---|
| frontend/.gitignore | full | Small shared acceptance/config context | C53 | none |
| frontend/astro.config.mjs | full | Changed/new from retained audit-entry baseline | C53/C59 | none |
| frontend/package.json | full | Small shared acceptance/config context | C53 | none |
| frontend/package-lock.json | sig | Unchanged lockfile; adaptive eligibility | C53 | Full if extraction unsupported |
| frontend/playwright.config.mjs | full | Small shared acceptance/config context | C53 | none |
| frontend/src/data/portfolio.mjs | full | Changed/new from retained audit-entry baseline | C53/C59 | none |
| frontend/src/layouts/Page.astro | full | Changed/new from retained audit-entry baseline | C53/C59 | none |
| frontend/src/layouts/Article.astro | full | Small shared acceptance/config context | C53 | none |
| frontend/src/pages/index.astro | full | Changed/new from retained audit-entry baseline | C53/C59 | none |
| frontend/src/pages/about.astro | full | Changed/new from retained audit-entry baseline | C53/C59 | none |
| frontend/src/pages/projects.astro | full | Changed/new from retained audit-entry baseline | C53/C59 | none |
| frontend/src/pages/articles/index.astro | full | Changed/new from retained audit-entry baseline | C53/C59 | none |
| frontend/src/pages/articles/first.md | full | Changed/new from retained audit-entry baseline | C53/C59 | none |
| frontend/tests/static.spec.mjs | full | Changed/new from retained audit-entry baseline; C59-HOT image regression suite | C53/C59 | none |
| frontend/dist/index.html | full | Changed/new from retained audit-entry baseline | C53/C59 | none |
| frontend/dist/about/index.html | full | Changed/new from retained audit-entry baseline | C53/C59 | none |
| frontend/dist/projects/index.html | full | Changed/new from retained audit-entry baseline | C53/C59 | none |
| frontend/dist/articles/index.html | full | Changed/new from retained audit-entry baseline | C53/C59 | none |
| frontend/dist/articles/first/index.html | full | Changed/new from retained audit-entry baseline | C53/C59 | none |
| reviews/constraints.md | full | Small shared acceptance/config context | C53 | none |
| reviews/runbook/site-shell-content.md | full | Changed/new from retained audit-entry baseline | C53/C59 | none |

## Source Code

{{FILE:frontend/.gitignore}}

{{FILE:frontend/astro.config.mjs}}

{{FILE:frontend/package.json}}

{{FILE:frontend/package-lock.json|sig}}

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

## Review History

### Round 1 (4 models: Gemini, Astra, Fable, DeepSeek)
Found 0 P0s, 0 P1s, 1 P2, 1 P3, all dispositioned:
1. **P2**: Missing image acceptance regression gates -- FIXABLE; added whole-output inventory plus shared per-file WebP/metadata/byte checks and response MIME checks. Clean21/21 tests pass; four violating-output mutations fail; output restored. Sweep-tested; no additional eligible instance.
2. **P3**: Image admission companion evidence omitted from isolated seat input -- FIXABLE; measured evidence is now text-inlined in this handoff. Verify its actual delivery and adequacy, rather than inferring a current image-policy failure.
Raw panel outcomes were two PASS and two FAIL. The FAILs remain standing; this is continuation, not convergence.

## Findings Evaluated and Rejected

- **"Navigation expects the starting route after clicking a destination; article checks are inside the loop"** (Astra): FALSE POSITIVE / Incorrect assumption. Frozen source and current source use `toHaveURL(destination)`; the loop closes before article checks. Independent source check and About no-JS reproduction pass. Evaluate any genuinely different current defect.
- **"Quality100 necessarily produces a >150000-byte derivative"** (DeepSeek): FALSE POSITIVE / Incorrect assumption. Same managed source at240x320 through installed Sharp produces36524 bytes at quality100. Shipped quality80 file is11292 bytes. This disproof does not negate the independently fixed regression gap.
- **"Portrait shipped without admission evidence"** (DeepSeek): FALSE POSITIVE / Incorrect assumption about missing lead evidence. Provenance, inventory, independent build hashes and20-context browser results existed beforeR1; their omission from the isolated input is the separately retained handoff defect.

## What NOT to Re-Audit

- The disproved starting-route assertion, loop-placement claim and quality100 byte premise above, unless new concrete source evidence changes their preconditions.
- The original omission as a claim that the lead never ran image admission; audit the now-delivered evidence and regression implementation freely.
- Single240-width portrait as a mandatory480 omission: the research permits240 alone when visually sufficient, with any second width required to earn its benefit. Current no-JS natural dimensions240x320 and the stated binary-inspection limit remain explicit.

## Measured Acceptance Evidence

## portrait-provenance.json

```json
{
  "pin": "fd049bab81c18c42c6bfb2a1d98ffee325578e91",
  "source_sha256": "ea8e0e66be30f8d4326d920a71bcba1015b1bf1326abb7f454bbb71d2126c3a5",
  "managed_sha256": "4a73a1c949a0fdd11c35143cfb2dd1b338b879389c1c5a8f9a0fb6479f6a90ae",
  "recipe": "sharp(original).resize({width:480}).png(); default metadata stripping",
  "managed_bytes": 687559
}
```

## image-inventory.json

```json
{
  "images": [
    {
      "path": "dist/_astro/portrait.DpkCyNKr_15Erfh.webp",
      "sha256": "938f9d78e68872582e8987f69580d34c23f39fff5cc5b25f4517bcb457822fb0",
      "width": 240,
      "height": 320,
      "format": "webp",
      "bytes": 11292,
      "metadataPresent": false,
      "settings": {
        "format": "webp",
        "quality": 80,
        "width": 240,
        "height": 320
      }
    }
  ],
  "totalBytes": 11292,
  "originalNotEmitted": true
}
```

## reproducibility.json

```json
{
  "identical": true,
  "files": {
    "index.html": "08fc266b8e8f3da3772e184309aed6371ef151d27dc06ac33cecb3d263256b7e",
    "projects/index.html": "83254a882907602caf65b7dd39cb4d3cb1e6659141c1650239e4b67758f620be",
    "articles/index.html": "8e0042fc557395e8d9ed990e3a911ec2616c3280abf610b41196fb61512e3380",
    "about/index.html": "fb696b8bc6f7b4d2aba95af1e0bfa33c6da5699eafdd9c063508e15d3ed31d96",
    "_astro/portrait.DpkCyNKr_15Erfh.webp": "938f9d78e68872582e8987f69580d34c23f39fff5cc5b25f4517bcb457822fb0",
    "articles/first/index.html": "d3964c2effe2d7ac2060c0e5fc143d8bc3e60141dc0fb2f6343345341c116b7a"
  },
  "install": "npm ci --ignore-scripts --engine-strict",
  "isolated": "/Users/aharoj/desk/tmp/portfolio/v0.5-site-shell/repro-frontend"
}
```

The original-to-managed chain strips metadata before product use. The build emits only the listed WebP. Current clean build output hashes equal the isolated reproduction manifest: True. Raw metadata values are intentionally absent.

The previous completed matrix covered five routes x widths320/1280 x DPR1/2 with JavaScript disabled:20 expected/0 unexpected; each About context fetched11292 encoded bytes, all others0. These measured claims bind browser-results.json and route-image-bodies.json under the same evidence directory. The final clean21-test run passed21/21 (21.1 seconds), including all20 fresh no-JS route contexts and the new complete output inventory test. Four mutation cases each produced one expected failing test, and probe output was restored.

## Regression Mutation Evidence

```json
{
  "cases": [
    {
      "case": "oversized",
      "exit": 1,
      "expected": 0,
      "unexpected": 1,
      "ignored": 0
    },
    {
      "case": "exif_metadata",
      "exit": 1,
      "expected": 0,
      "unexpected": 1,
      "ignored": 0
    },
    {
      "case": "non_webp",
      "exit": 1,
      "expected": 0,
      "unexpected": 1,
      "ignored": 0
    },
    {
      "case": "unused_emitted",
      "exit": 1,
      "expected": 0,
      "unexpected": 1,
      "ignored": 0
    }
  ],
  "restored": true,
  "original_sha256": "938f9d78e68872582e8987f69580d34c23f39fff5cc5b25f4517bcb457822fb0",
  "final_sha256": "938f9d78e68872582e8987f69580d34c23f39fff5cc5b25f4517bcb457822fb0"
}
```

## Audit Questions

Q1. Trace manifest, lockfile and configuration through a fresh static build. Is the actual five-route output reproducible without undeclared runtime/configuration requirements?
Q2. Trace canonical navigation, exact and descendant current-state behavior, direct entries, article-index/article/back-link and identity links. Identify any concrete destination or active-state error.
Q3. Trace data and layouts into HTML. Are all published personal/project/contact claims within the confirmed allowlist and safe in their rendering contexts?
Q4. Examine mobile/desktop landmarks, headings, responsive layout, keyboard traversal, focus visibility, skip link and image alt/context. Identify observable accessibility failures.
Q5. Trace the managed image through actual emitted outputs and browser selection with scripting disabled. Can excess files, metadata, oversized bodies, original copies, aspect distortion or route leaks escape the policy/tests?
Q6. Inspect all five supplied built pages for hydration/runtime work and local href/src targets. Is the static/no-JS requirement actually upheld?
Q7. Evaluate the full21-test suite, including its20-context response collection, image completion, encoded-body accounting, assertions, navigation and preview wiring. Can a concrete required failure yield misleading success?
Q8. Inspect binary provenance and reproducibility assumptions, source/output ignore rules and the text-only failure path. Separate missing inspectable evidence from a reproducible source defect.
Q9. Probe especially for malformed RIFF/chunk bounds, metadata flags, duplicate requests, asynchronous failure propagation, unreferenced images and false acceptance in the new tests. Report any other concrete correctness/security/accessibility/maintainability blocker, with exact location, minimal reproduction and bounded repair. Do not suggest a replacement stack or speculative feature.
