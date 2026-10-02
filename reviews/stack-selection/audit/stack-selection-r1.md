# Code Audit: stack-selection static Astro article (Round 1)

> **For**: Independent adversarial code audit
> **From**: Angel (aharoJ) + Codex -- portfolio project
> **Date**: 2026-09-30
> **Context**: First implementation audit of the static article slice in frontend/. Review the supplied source and tests independently.

---

## Review Focus

1. Security: source-to-HTML escaping, metadata handling and dependencies within this static content surface.
2. Correctness: npm lockfile/manifest consistency, static build configuration, Markdown layout composition, article routing and navigation.
3. Edge cases: direct article entry, reading with JavaScript disabled, title/description propagation, and whether the tests exercise the stated behavior.

## About the Project

Portfolio delivers an index and a representative article as static HTML. Locked research selects Astro, frontend/ and application-local npm. Stack-selection owns this implementation audit.

## Tech Stack (Locked)

- Astro static-first article delivery; use islands only when product evidence requires them.
- Application root frontend/; manager npm; installer artifact frontend/package-lock.json; static build output frontend/dist/.
- No present API runtime, persistence/migration layer or browser-to-API contract authority.
- Versions are in the manifest and lockfile; research mandates no version pin or packageManager field.

## Output Format

- **PASS**: "Ship it. No blockers found." + confidence level.
- **FAIL**: severity, file path, line number, reproduction, fix.

If you find NOTHING new, say so honestly. Do not manufacture findings. Derive findings from the supplied source and independently trace or reproduce the failure. Do not treat this assignment or test names as proof of success.

## Additional Observations (Optional)

Omit if empty. Sources used: name supplied artifacts or primary documentation relied on; distinguish observed evidence from inference and disclose unavailable execution capabilities.

## Constraints

Review the ten frontend files in Marker Planning. Constraints and runbook supply context. Repairs must stay within this static article slice, its locked framework and manager.

No root workspace/root installer lockfile, outside installer lockfile, API/service reservation, database/ORM/migrations, browser-to-API contracts, authentication, generic packages/, catalogs, task runner, CI or deployment configuration is admitted. The pre-existing frontend/.gitkeep and backend/.gitkeep are retained baseline placeholders, outside this code scope.

Blind R1 supplies no lead findings, classifications, prior conclusions or review history.

## Marker Planning

| File | Mode | Reason | Source | Fallback |
|---|---|---|---|---|
| frontend/.gitignore | full | Complete admitted file | R1 blind full-source rule | none |
| frontend/astro.config.mjs | full | Complete admitted file | R1 blind full-source rule | none |
| frontend/package-lock.json | full | Complete admitted file | R1 blind full-source rule | none |
| frontend/package.json | full | Complete admitted file | R1 blind full-source rule | none |
| frontend/playwright.config.mjs | full | Complete admitted file | R1 blind full-source rule | none |
| frontend/src/layouts/Article.astro | full | Complete admitted file | R1 blind full-source rule | none |
| frontend/src/layouts/Page.astro | full | Complete admitted file | R1 blind full-source rule | none |
| frontend/src/pages/articles/first.md | full | Complete admitted file | R1 blind full-source rule | none |
| frontend/src/pages/index.astro | full | Complete admitted file | R1 blind full-source rule | none |
| frontend/tests/static.spec.mjs | full | Complete admitted file | R1 blind full-source rule | none |
| reviews/constraints.md | full | Current project context | R1 blind full-source rule | none |
| reviews/runbook/stack-selection.md | full | Current project context | R1 blind full-source rule | none |

## Source Code

{{FILE:frontend/.gitignore}}

{{FILE:frontend/astro.config.mjs}}

{{FILE:frontend/package-lock.json}}

{{FILE:frontend/package.json}}

{{FILE:frontend/playwright.config.mjs}}

{{FILE:frontend/src/layouts/Article.astro}}

{{FILE:frontend/src/layouts/Page.astro}}

{{FILE:frontend/src/pages/articles/first.md}}

{{FILE:frontend/src/pages/index.astro}}

{{FILE:frontend/tests/static.spec.mjs}}

### Current project constraints and execution context

{{FILE:reviews/constraints.md}}

{{FILE:reviews/runbook/stack-selection.md}}

## Audit Questions

Q1. Trace the manifest and lockfile through a clean npm installation. Are the dependency/configuration requirements sufficient and mutually consistent for this slice?

Q2. Trace both page entries through the static build configuration. Does their output support serving the article and index without an application server or SSR adapter?

Q3. Trace Markdown frontmatter through Article and Page. Are the HTML title, description, language and article content propagated correctly?

Q4. Trace direct navigation to /articles/first/, the index article link and the return link on a plain static server. Are there reproducible routing or navigation failures?

Q5. Trace what a browser needs to read each emitted page with JavaScript disabled. Does the implementation introduce hydration, client runtime or server work outside its requirements?

Q6. Evaluate HTML/text/attribute handling in the supplied content and layouts. Identify only concrete unsafe or incorrect rendering paths supported by this surface.

Q7. Evaluate the navigation tests and static-server wiring. What observable failures in the actual required behavior could escape the tests or produce a misleading result?

Q8. Inspect application-local source/configuration and generated-artifact ignore rules. Is there a concrete boundary violation or reproducibility problem in the admitted implementation?

Q9. Report any other reproducible correctness, accessibility or maintainability blocker in these files, with exact source location and a minimal repair within scope.
