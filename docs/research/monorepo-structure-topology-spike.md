# Monorepo Structure Topology Spike

Status: observed evidence record; no application-layout or package-manager decision.

## Filing

On 2026-09-30, the operator approved this file at `docs/research/monorepo-structure-topology-spike.md` as an explicit exception to the earlier `inside reviews/<topic>/` wording for a project-local release-evidence record. The approval and exception are recorded in [reviews/decisions.md](../../reviews/decisions.md).

The record is outside `reviews/<topic>/` because the active topic-tree grammar permits no standalone evidence-record slot there; its `research/` slot is limited to a round draft. See [protocol.md](../../../../.skills/review-protocol/protocol.md) in the active review skill for the slot grammar.

## Boundary

- Six fresh detached copies of revision `21a2d6bd0fef7b6a1a436f9eb7bcdc8632175764` were created outside the repository worktree.
- The app payload contained one Astro page, one Markdown article, and one Playwright browser test. No product file was created in the active repository worktree.
- The measured dimensions are package/lockfile content, source/config/test content, static build output, static-output checks, and the one browser test. This record does not measure a production CI job, deployment platform, repository ownership process, or a future service.
- Astro's documented manual installation path uses `npm init --yes` followed by a local `npm install astro`: [Astro installation guide](https://docs.astro.build/en/install-and-setup/). The executed npm commands are facts about this spike; they do not assert that Astro independently selected a package manager.

## Inputs and identical payload

| Field | Observed value |
|---|---|
| Node | `v26.5.0` |
| npm | `11.17.0` |
| pnpm installed in environment | `10.15.1` |
| Python | `3.12.6` |
| Astro dependency in each app package | `^7.3.5` |
| Playwright dependency in each app package | `^1.63.0` |
| `packageManager` field in each app package | absent |
| Generated lockfile form | npm `package-lock.json`, lockfile version `3` |
| App `package.json` SHA-256 | `1908c8b4d9114266428e2dca729e2a3f97fe0f99e181ce4d9bb05fade785d8cc` in all six runs |
| App `package-lock.json` SHA-256 | `29c35a985bfdcadbaa14d0358e691687ebabae807cd5e1213e399492ebc100c1` in all six runs |
| Source/config/test aggregate SHA-256 | `b69fd24ccf45c95060397b58bb7b8df698c223ddfec853e79346bd6db7a8ee3b` in all six runs |

Every app root used the same normalized package manifest and these same files:

| File | Observed content or wiring |
|---|---|
| `package.json` | ESM; `build: astro build`; `test:browser: playwright test` |
| `astro.config.mjs` | `output: "static"` |
| `src/pages/index.astro` | one page headed `Topology Spike`, linked to `/articles/first/` |
| `src/pages/articles/first.md` | one Markdown article headed `First Markdown Article` |
| `playwright.config.mjs` | browser-test directory `./tests`; static server `python3 -m http.server 4173 --directory dist` |
| `tests/static.spec.mjs` | checks the page heading and the Markdown-article heading in Chromium |

## Command transcript summary

For every fresh copy, `git clone --no-local --quiet /Users/aharoj/.repository/portfolio /tmp/portfolio-topology-spike/<variant>` followed by `git -C /tmp/portfolio-topology-spike/<variant> checkout --quiet --detach 21a2d6bd0fef7b6a1a436f9eb7bcdc8632175764` returned the stated revision.

For each app root, each command below returned exit code `0`:

```text
npm init --yes
npm pkg set name=topology-spike version=0.0.0 private=true type=module scripts.build='astro build' scripts.test:browser='playwright test'
npm install astro
npm install --save-dev @playwright/test
npx playwright install chromium
npm run build
test -f dist/index.html && test -f dist/articles/first/index.html && rg -Fq 'Topology Spike' dist/index.html && rg -Fq 'First Markdown Article' dist/articles/first/index.html
npm run test:browser
```

After `npm init --yes`, every app manifest was normalized to the identical package, script, and module fields listed above before either dependency installation. The npm cache and Playwright browser cache were under the scratch root; the six Git worktrees, app directories, lockfiles, and `dist/` directories were separate.

## Results

| Layout and fresh run | App root from copy root | Lockfile from copy root | Astro-reported static output | Build | Static-output check | Browser test | Static-tree SHA-256 |
|---|---|---|---|---:|---:|---:|---|
| A, run 1 | `frontend/` | `frontend/package-lock.json` | `frontend/dist/` | 0 | 0 | 0 | `95c87c8edd2423421bc8e4af1aa5404780548b02734a8b1177ddd4f94796509e` |
| A, run 2 | `frontend/` | `frontend/package-lock.json` | `frontend/dist/` | 0 | 0 | 0 | `95c87c8edd2423421bc8e4af1aa5404780548b02734a8b1177ddd4f94796509e` |
| B, run 1 | `apps/web/` | `apps/web/package-lock.json` | `apps/web/dist/` | 0 | 0 | 0 | `95c87c8edd2423421bc8e4af1aa5404780548b02734a8b1177ddd4f94796509e` |
| B, run 2 | `apps/web/` | `apps/web/package-lock.json` | `apps/web/dist/` | 0 | 0 | 0 | `95c87c8edd2423421bc8e4af1aa5404780548b02734a8b1177ddd4f94796509e` |
| C, run 1 | `.` | `package-lock.json` | `dist/` | 0 | 0 | 0 | `95c87c8edd2423421bc8e4af1aa5404780548b02734a8b1177ddd4f94796509e` |
| C, run 2 | `.` | `package-lock.json` | `dist/` | 0 | 0 | 0 | `95c87c8edd2423421bc8e4af1aa5404780548b02734a8b1177ddd4f94796509e` |

Every static-tree aggregate hashes this sorted two-file manifest:

```text
47925387b0ec1f4a774eada4624876c0e93091c60adbd95b4d19399f3d6e8231  dist/articles/first/index.html
e8d1b3fde32bed75a66c73635d32be76552d965ba225073b9cbde9ec9b55db0a  dist/index.html
```

For the measured dimensions, all three layouts produced identical package/lockfile content, source/config/test content, static HTML, static-output checks, and browser-test results. The layout-dependent observed facts were the relative app, config/test, lockfile, and output paths:

| Layout | Root-relative build invocation | Root-relative artifact reference | Root-relative test wiring |
|---|---|---|---|
| A | `cd frontend && npm run build` | `frontend/dist/` | `frontend/playwright.config.mjs`; `frontend/tests/static.spec.mjs` |
| B | `cd apps/web && npm run build` | `apps/web/dist/` | `apps/web/playwright.config.mjs`; `apps/web/tests/static.spec.mjs` |
| C | `npm run build` | `dist/` | `playwright.config.mjs`; `tests/static.spec.mjs` |

## Repeat, bias controls, and non-results

- Each layout used two separate fresh copies at the same revision. The two runs per layout have matching app-manifest, lockfile, source/config/test, and static-output checksums.
- The package manifest was normalized after initialization, and the source/config/test aggregate checksum is identical across all six runs. The app-root path was the intended varying input.
- The shared scratch npm and browser caches are recorded above. A shared cache is not a shared application directory, lockfile, static-output directory, or Git worktree.
- npm printed `allow-scripts` warnings for `esbuild@0.28.2` and, on the second install, `fsevents@2.3.3`; Playwright printed a `NO_COLOR`/`FORCE_COLOR` warning. All listed commands returned `0`.
- This record does not select a layout, a tie-break rule, a package manager, a root workspace, a root lockfile, CI configuration, or deployment configuration.
