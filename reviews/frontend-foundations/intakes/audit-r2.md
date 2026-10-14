> **Inlining fallback**: all selected readable target files are fully inlined; missing or unusable baseline. Original audit-entry baseline was not recaptured.

# Code Audit: frontend foundations (Round 2)

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

Return `Verdict: PASS` with grounded check account and confidence if no blockers, or `Verdict: FAIL` with findings. For every finding give severity P0/P1/P2/P3, exact supplied file and line, concrete reproduction or provable path, violated requirement/consequence, and bounded fix. Name checks performed and limitations, including tests not run and unavailable runtime/device evidence. Do not manufacture findings or infer tests passed from test source. Do not add web claims without primary evidence. No live web is required.

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
- Current operator lean-core override: retain all product locks, but use one short clean/check/build/verify script, plain table-driven date/schema/selector units, one or two real build negatives (draft exclusion and failed-check cleanup), and one small browser spec. No requirement to retain the old 50/66-case fixture prover, source/output hashing or preview receipt guard. Readable formatting, tooling target <= product size. Assess concrete broken behavior, not a hypothetical general-purpose sanitizer or framework.
- Dependency scope: package-lock.json is unchanged since the prior audit packet; R2 focuses all executable code and config in full, package manifest in full. The unchanged lock is bound in the external baseline by SHA256, not re-embedded or represented as re-audited. This is a transparent outside-protocol packet choice; no adaptive compiler/protocol basis claim.
- Runtime claims remain bounded to actual provisioned Chromium, not Safari/physical devices. Small browser spec covers launch routes, 1512/390/320, both schemes, keyboard and enlarged text. Unit/build/browser results supplied separately are evidence, not instructions to infer a pass.

## Marker Planning

| File | Mode | Reason | Source | Fallback |
|---|---|---|---|---|
| frontend/.gitignore | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/.gitkeep | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/astro.config.ts | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/package.json | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/playwright.config.ts | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/src/content.config.ts | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/src/content/articles/first.md | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/src/data/site.ts | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/src/layouts/Article.astro | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/src/layouts/Page.astro | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/src/lib/article-contract.ts | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/src/lib/articles.ts | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/src/pages/articles/[id].astro | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/src/pages/harness-research.astro | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/src/pages/index.astro | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/src/pages/projects.astro | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/src/pages/university-work.astro | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/src/styles/global.css | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/tests/article-contract.spec.ts | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/tests/static.spec.ts | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/tools/build.ts | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/tests/build.spec.ts | full | R2 current full executable source | verified uncommitted build | n/a |
| frontend/tsconfig.json | full | R2 current full executable source | verified uncommitted build | n/a |

## Source Code

**File: `frontend/.gitignore`**
```
.astro/
test-results/
playwright-report/

```

**File: `frontend/.gitkeep`**
```


```

**File: `frontend/astro.config.ts`**
```typescript
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  trailingSlash: "always",
  markdown: { syntaxHighlight: false },
  vite: { cacheDir: ".astro/vite" },
});

```

**File: `frontend/package.json`**
```json
{
  "name": "@angel/portfolio-frontend",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=22.19.0",
    "npm": ">=9.6.5"
  },
  "scripts": {
    "dev": "astro dev",
    "build": "node tools/build.ts",
    "preview": "astro preview",
    "test:browser": "npm run build && playwright test",
    "check": "astro check",
    "test:unit": "node --test tests/article-contract.spec.ts",
    "prove:contracts": "node --test tests/build.spec.ts",
    "test:acceptance": "npm run test:unit && npm run prove:contracts && playwright test"
  },
  "dependencies": {
    "astro": "^7.3.5"
  },
  "devDependencies": {
    "@astrojs/check": "0.9.10",
    "@playwright/test": "^1.63.0",
    "@types/node": "22.19.0",
    "typescript": "6.0.3"
  }
}

```

**File: `frontend/playwright.config.ts`**
```typescript
import { defineConfig } from "@playwright/test";

const port = process.env.PORTFOLIO_TEST_PORT ?? "4173";

export default defineConfig({
  testDir: "./tests",
  testMatch: "static.spec.ts",
  use: {
    browserName: "chromium",
    baseURL: `http://127.0.0.1:${port}`,
    javaScriptEnabled: false,
  },
  webServer: {
    command: `npm run preview -- --host 127.0.0.1 --port ${port} --ignore-lock`,
    url: `http://127.0.0.1:${port}`,
    reuseExistingServer: false,
  },
});

```

**File: `frontend/src/content.config.ts`**
```typescript
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { readdirSync, lstatSync, mkdirSync, writeFileSync } from "node:fs";
import {
  articleSchema,
  inventoryKeys,
  selectPublic,
  sourceKey,
} from "./lib/article-contract.ts";
const base = new URL("./content/articles/", import.meta.url);
const names = readdirSync(base);
for (const name of names)
  if (!lstatSync(new URL(name, base)).isFile())
    throw new Error(`Unsupported article source: ${name}`);
const keys = inventoryKeys(names);
const loader = glob({
  pattern: "*.md",
  base,
  generateId: ({ entry }) => sourceKey(entry),
});
const load = loader.load;
loader.load = async (context) => {
  // Revalidate every build, including cached entries; built-in parsing/schema owns YAML.
  context.store.clear();
  await load(context);
  const entries = [...context.store.values()].map((e) => ({
    id: e.id,
    data: articleSchema.parse(e.data),
    body: e.body ?? "",
  }));
  if (
    entries.length !== keys.length ||
    entries.some((e) => !keys.includes(e.id))
  )
    throw new Error("Loaded article identity inventory mismatch");
  mkdirSync(new URL("../.astro/", import.meta.url), { recursive: true });
  const publicEntries = selectPublic(entries);
  writeFileSync(
    new URL("../.astro/output-inventory.json", import.meta.url),
    JSON.stringify({
      publicIds: publicEntries.map((e) => e.id),
      publishedSections: [
        ...new Set(
          publicEntries.flatMap((e) =>
            e.data.status === "published" ? [e.data.section] : [],
          ),
        ),
      ],
      draftIds: entries
        .filter((e) => e.data.status === "draft")
        .map((e) => e.id),
      draftBodies: entries
        .filter((e) => e.data.status === "draft")
        .map((e) => e.body.trim())
        .filter(
          (body) => body && !publicEntries.some((e) => e.body.includes(body)),
        ),
    }),
  );
};
export const collections = {
  articles: defineCollection({ loader, schema: articleSchema }),
};

```

**File: `frontend/src/content/articles/first.md`**
```markdown
---
status: sample
title: Start with the reader
description: A short note on giving an idea room to be understood.
---

# Start with the reader

A useful page begins with something worth reading. A clear title sets an expectation. The first paragraph gives the reader a reason to stay.

## Give the idea room

Good writing needs space. Keep the lines comfortable, let the headings guide the eye, and make the next step easy to find.

A small beginning is enough. Publish one complete thought, see how it reads, and build from there.

[Back to writing](/)

```

**File: `frontend/src/data/site.ts`**
```typescript
export const identity = {
  name: "Angel J. Haro",
  role: "Software Engineer",
  email: "haro.j.angel@gmail.com",
  github: "https://github.com/aharoj",
};
export const sections = [
  { id: "projects", label: "Projects" },
  { id: "harness-research", label: "Harness research" },
  { id: "university-work", label: "University/Work" },
] as const;

```

**File: `frontend/src/layouts/Article.astro`**
```
---
import Page from './Page.astro';
import type { ArticleData } from '../lib/article-contract.ts';
interface Props {
  data: ArticleData;
}
const { data } = Astro.props;
---
<Page title={data.title} description={data.description}>
  <article>
    {data.status === 'sample' && <p class="sample">Sample article</p>}
    {data.status === 'published' && (
      <p><time datetime={data.date}>{data.date}</time></p>
    )}
    <slot />
  </article>
</Page>

```

**File: `frontend/src/layouts/Page.astro`**
```
---
import { identity, sections } from '../data/site.ts';
import '../styles/global.css';
interface Props {
  title: string;
  description: string;
}
const { title, description } = Astro.props;
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <title>{title} | {identity.name}</title>
  </head>
  <body>
    <a class="skip" href="#main">Skip to content</a>
    <header>
      {Astro.url.pathname !== '/' && (
        <a class="identity" href="/">{identity.name}</a>
      )}
      <nav aria-label="Primary">
        <ul>
          {sections.map(section => (
            <li>
              <a
                href={`/${section.id}/`}
                aria-current={Astro.url.pathname === `/${section.id}/` ? 'page' : undefined}
              >{section.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    <main id="main" tabindex="-1"><slot /></main>
    <footer aria-label="Contact">
      <a href={`mailto:${identity.email}`}>{identity.email}</a>
      <a href={identity.github}>GitHub</a>
    </footer>
  </body>
</html>

```

**File: `frontend/src/lib/article-contract.ts`**
```typescript
import { z } from "astro/zod";
export function calendarDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const year = Number(value.slice(0, 4)),
    month = Number(value.slice(5, 7)),
    day = Number(value.slice(8, 10));
  const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][
    month - 1
  ];
  return days !== undefined && day >= 1 && day <= days;
}
// Four-digit proleptic Gregorian years 0000–9999; validation is not provenance.
const text = z.string().trim().min(1);
const date = z
  .string()
  .refine(calendarDate, "Expected genuine Gregorian YYYY-MM-DD");
const section = z.enum(["projects", "harness-research", "university-work"]);
const common = { title: text, description: text };
export const articleSchema = z.discriminatedUnion("status", [
  z.object({ ...common, status: z.literal("sample") }).strict(),
  z
    .object({ ...common, status: z.literal("published"), date, section })
    .strict(),
  z
    .object({
      ...common,
      status: z.literal("draft"),
      date: date.optional(),
      section: section.optional(),
    })
    .strict(),
]);
export type ArticleData = z.infer<typeof articleSchema>;
export function sourceKey(name: string): string {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(name))
    throw new Error(`Unsupported article source name: ${name}`);
  return name.slice(0, -3);
}
export function inventoryKeys(names: string[]): string[] {
  const keys = names.map(sourceKey);
  if (new Set(keys).size !== keys.length)
    throw new Error("Duplicate article source key");
  return keys;
}
export function selectPublic<T extends { id: string; data: ArticleData }>(
  entries: T[],
  sectionId?: string,
): T[] {
  const ascii = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0);
  return entries
    .filter(
      (e) =>
        e.data.status !== "draft" &&
        (!sectionId ||
          (e.data.status === "published" && e.data.section === sectionId)),
    )
    .sort((a, b) => {
      if (a.data.status === "published" && b.data.status === "published")
        return ascii(b.data.date, a.data.date) || ascii(a.id, b.id);
      if (a.data.status !== b.data.status)
        return a.data.status === "published" ? -1 : 1;
      return ascii(a.id, b.id);
    });
}

```

**File: `frontend/src/lib/articles.ts`**
```typescript
import { getCollection } from "astro:content";
import { selectPublic } from "./article-contract.ts";
export async function publicArticles(section?: string) {
  return selectPublic(await getCollection("articles"), section);
}

```

**File: `frontend/src/pages/articles/[id].astro`**
```
---
import { render } from 'astro:content';
import Article from '../../layouts/Article.astro';
import { publicArticles } from '../../lib/articles.ts';
export async function getStaticPaths() {
  return (await publicArticles()).map(entry => ({
    params: { id: entry.id },
    props: { entry },
  }));
}
const { entry } = Astro.props;
const { Content } = await render(entry);
---
<Article data={entry.data}><Content /></Article>

```

**File: `frontend/src/pages/harness-research.astro`**
```
---
import Page from '../layouts/Page.astro';
import { publicArticles } from '../lib/articles.ts';
const articles = await publicArticles('harness-research');
---
<Page title="Harness research" description="Harness research writing by Angel J. Haro.">
  <h1>Harness research</h1>
  {articles.length === 0 ? (
    <p>Nothing published here yet.</p>
  ) : (
    <ul class="writing">
      {articles.map(entry => (
        <li>
          <a href={`/articles/${entry.id}/`}>{entry.data.title}</a>
          <p class="muted">{entry.data.description}</p>
        </li>
      ))}
    </ul>
  )}
</Page>

```

**File: `frontend/src/pages/index.astro`**
```
---
import Page from '../layouts/Page.astro';
import { identity } from '../data/site.ts';
import { publicArticles } from '../lib/articles.ts';
const articles = await publicArticles();
---
<Page title="Writing" description="Writing by Angel J. Haro, Software Engineer.">
  <h1 class="name">{identity.name}</h1>
  <p class="muted">{identity.role}</p>
  <p>Writing about projects, harness research, and university and work.</p>
  <h2>Writing</h2>
  <ul class="writing">
    {articles.map(entry => (
      <li>
        <a href={`/articles/${entry.id}/`}>{entry.data.title}</a>
        <p class="muted">{entry.data.description}</p>
        {entry.data.status === 'sample' ? (
          <span class="sample">Sample article</span>
        ) : entry.data.status === 'published' && (
          <time datetime={entry.data.date}>{entry.data.date}</time>
        )}
      </li>
    ))}
  </ul>
</Page>

```

**File: `frontend/src/pages/projects.astro`**
```
---
import Page from '../layouts/Page.astro';
import { publicArticles } from '../lib/articles.ts';
const articles = await publicArticles('projects');
---
<Page title="Projects" description="Projects writing by Angel J. Haro.">
  <h1>Projects</h1>
  {articles.length === 0 ? (
    <p>Nothing published here yet.</p>
  ) : (
    <ul class="writing">
      {articles.map(entry => (
        <li>
          <a href={`/articles/${entry.id}/`}>{entry.data.title}</a>
          <p class="muted">{entry.data.description}</p>
        </li>
      ))}
    </ul>
  )}
</Page>

```

**File: `frontend/src/pages/university-work.astro`**
```
---
import Page from '../layouts/Page.astro';
import { publicArticles } from '../lib/articles.ts';
const articles = await publicArticles('university-work');
---
<Page title="University/Work" description="University/Work writing by Angel J. Haro.">
  <h1>University/Work</h1>
  {articles.length === 0 ? (
    <p>Nothing published here yet.</p>
  ) : (
    <ul class="writing">
      {articles.map(entry => (
        <li>
          <a href={`/articles/${entry.id}/`}>{entry.data.title}</a>
          <p class="muted">{entry.data.description}</p>
        </li>
      ))}
    </ul>
  )}
</Page>

```

**File: `frontend/src/styles/global.css`**
```css
:root {
  color-scheme: light dark;
  font-family: system-ui, sans-serif;
  font-size: 100%;
  line-height: 1.65;
  background: #fcfcfb;
  color: #171717;
  --muted: #5c5c5a;
  --rule: #8f8f8c;
  --hairline: #e8e8e6;
  --s1: 0.25rem;
  --s2: 0.5rem;
  --s3: 1rem;
  --s4: 1.5rem;
  --s5: 2.5rem;
  --s6: 4rem;
}
* {
  box-sizing: border-box;
}
body {
  overflow-wrap: anywhere;
  max-width: 36.5rem;
  margin: 0 auto;
  padding: var(--s6) 1.25rem;
  font-size: 1rem;
}
a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 0.2em;
  overflow-wrap: anywhere;
}
a:focus-visible,
main:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}
header,
nav,
footer {
  line-height: 1.5;
}
header {
  margin-bottom: var(--s5);
}
.identity,
.name {
  font-size: 1rem;
  font-weight: 600;
}
nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s2) var(--s4);
  list-style: none;
  padding: 0;
  margin: 0;
}
header > .identity {
  display: inline-block;
  margin-bottom: var(--s3);
}
nav a[aria-current] {
  font-weight: 600;
  text-decoration-thickness: 2px;
}
h1 {
  font-size: 1.5rem;
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -0.015em;
  margin: 0 0 var(--s3);
}
h2 {
  font-size: 1.125rem;
  line-height: 1.5;
  margin: var(--s5) 0 var(--s3);
}
p {
  margin: 0 0 var(--s3);
}
.name {
  letter-spacing: normal;
  line-height: 1.5;
  margin-bottom: var(--s1);
}
.muted,
time {
  color: var(--muted);
}
.writing {
  padding: 0;
  list-style: none;
}
.writing li {
  margin-bottom: var(--s4);
}
.writing p {
  margin-top: var(--s1);
}
.sample {
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.875rem;
  color: var(--muted);
}
footer {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s3);
  margin-top: var(--s5);
  padding-top: var(--s4);
  border-top: 1px solid var(--hairline);
  font-size: 0.875rem;
}
.skip {
  position: absolute;
  top: 0.5rem;
  left: 1.25rem;
  transform: translateY(-200%);
}
.skip:focus {
  transform: none;
}
article ul,
article ol {
  padding-left: var(--s4);
  margin-bottom: var(--s3);
}
@media (prefers-color-scheme: dark) {
  :root {
    background: #111111;
    color: #ececea;
    --muted: #a3a3a0;
    --rule: #6e6e6b;
    --hairline: #262626;
  }
}
pre {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
code {
  font: inherit;
}
time {
  font-size: 0.875rem;
}

```

**File: `frontend/tests/article-contract.spec.ts`**
```typescript
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  articleSchema,
  calendarDate,
  inventoryKeys,
  selectPublic,
} from "../src/lib/article-contract.ts";

const sample = { title: "Title", description: "Description", status: "sample" };
const published = {
  ...sample,
  status: "published",
  date: "2026-01-01",
  section: "projects",
};
test("strict branches", () => {
  for (const data of [sample, published, { ...sample, status: "draft" }]) {
    assert.ok(articleSchema.safeParse(data).success);
  }
  for (const patch of [
    { title: "" },
    { description: 42 },
    { extra: true },
    { status: "unknown" },
    { date: null },
    { section: "projects" },
    { status: "published" },
  ]) {
    assert.equal(articleSchema.safeParse({ ...sample, ...patch }).success, false);
  }
  assert.equal(articleSchema.safeParse({ ...published, date: "2026-02-30" }).success, false);
});
test("Gregorian dates and source keys", () => {
  for (const date of ["0000-02-29", "2000-02-29", "2024-02-29", "9999-12-31"]) {
    assert.ok(calendarDate(date));
  }
  for (const date of ["1900-02-29", "2023-02-29", "2026-02-30", "2026-13-01", "26-01-01"]) {
    assert.equal(calendarDate(date), false);
  }
  assert.deepEqual(inventoryKeys(["first.md"]), ["first"]);
  for (const names of [["First.md"], ["nested/a.md"], ["a.mdx"], ["a.md", "a.md"]]) {
    assert.throws(() => inventoryKeys(names));
  }
});
test("public selection, section filtering and stable date/key ordering", () => {
  const entry = (id: string, data: unknown) => ({
    id,
    data: articleSchema.parse(data),
  });
  const entries = [
    entry("sample", sample),
    entry("draft", { ...sample, status: "draft" }),
    entry("b", published),
    entry("a", published),
    entry("future", {
      ...published,
      date: "2099-01-01",
      section: "university-work",
    }),
  ];
  assert.deepEqual(
    selectPublic(entries).map((e) => e.id),
    ["future", "a", "b", "sample"],
  );
  assert.deepEqual(
    selectPublic(entries, "projects").map((e) => e.id),
    ["a", "b"],
  );
});

```

**File: `frontend/tests/static.spec.ts`**
```typescript
import { test, expect } from "@playwright/test";

const paths = ["/", "/projects/", "/harness-research/", "/university-work/", "/articles/first/"];
for (const width of [1512, 390, 320])
  for (const colorScheme of ["light", "dark"] as const) {
    test(`${width} ${colorScheme}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.emulateMedia({ colorScheme });
      const requests: string[] = [];
      page.on("request", (request) => requests.push(request.url()));
      for (const path of paths) {
        expect((await page.goto(path))?.status()).toBe(200);
        await expect(page.locator("h1")).toHaveCount(1);
        expect((await page.locator("body").boundingBox())?.width).toBe(Math.min(width, 584));
        for (const link of await page.locator('a[href^="/"]').all()) {
          expect(paths).toContain(await link.getAttribute("href"));
        }
        await page.keyboard.press("Tab");
        await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
        await page.keyboard.press("Enter");
        await expect(page.locator("main")).toBeFocused();
        await expect(page.locator("script,img,iframe")).toHaveCount(0);
        await page.screenshot({
          path: `test-results/screenshots/${width}-${colorScheme}-${path.replaceAll("/", "_")}.png`,
        });
        await page.evaluate(() => {
          const style = document.createElement("style");
          style.textContent =
            ":root{font-size:200%}*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}";
          document.head.append(style);
        });
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
          true,
        );
      }
      expect(
        requests.every((url) => /^http:\/\/127\.0\.0\.1:\d+\/(?:.*\/|.*\.css)?$/.test(url)),
      ).toBe(true);
    });
  }

```

**File: `frontend/tools/build.ts`**
```typescript
import { readdirSync, readFileSync, rmSync, writeFileSync, lstatSync } from "node:fs";
import { resolve, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { gzipSync } from "node:zlib";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const receipt = resolve(root, ".astro/output-acceptance.json");
const inventoryPath = resolve(root, ".astro/output-inventory.json");
let child: ReturnType<typeof spawn> | undefined;
let interrupted = 0;
function clean() {
  rmSync(receipt, { force: true });
  rmSync(dist, { recursive: true, force: true });
}
for (const signal of ["SIGINT", "SIGTERM"] as const) {
  process.on(signal, () => {
    interrupted = signal === "SIGINT" ? 130 : 143;
    child?.kill(signal);
  });
}
async function run(args: string[]) {
  await new Promise<void>((done, fail) => {
    child = spawn(process.execPath, ["node_modules/astro/bin/astro.mjs", ...args], {
      cwd: root,
      stdio: "inherit",
    });
    child.once("error", fail);
    child.once("exit", (code) =>
      code === 0 && !interrupted ? done() : fail(new Error(`astro ${args.join(" ")} failed`)),
    );
  });
}
function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = resolve(dir, name);
    const stat = lstatSync(path);
    if (stat.isSymbolicLink()) throw new Error(`Unexpected symlink: ${path}`);
    return stat.isDirectory() ? files(path) : [path];
  });
}
try {
  clean();
  // prettier-ignore
  const retired = /Angel Jair Haro|aharoJ|portrait\.png|portfolio\.mjs|\b(?:skills|projects)\s*=\s*\[/;
  for (const path of [
    ...files(resolve(root, "src")),
    ...files(resolve(root, "tools")),
    ...files(resolve(root, "tests")),
    ...readdirSync(root)
      .map((name) => resolve(root, name))
      .filter((p) => /\.(?:[cm]?js|jsx|ts)$/.test(p)),
  ]) {
    if (/\.(?:[cm]?js|jsx)$/.test(path)) throw new Error(`Owned JavaScript: ${path}`);
    if (relative(root, path).startsWith("tests/")) continue;
    const source = readFileSync(path, "utf8")
      .split("\n")
      .filter(
        (line) => path !== fileURLToPath(import.meta.url) || !line.includes("const retired ="),
      )
      .join("\n");
    if (retired.test(source)) throw new Error(`Retired source: ${path}`);
  }
  rmSync(inventoryPath, { force: true });
  await run(["check"]);
  await run(["build"]);
  const inventory: {
    publicIds: string[];
    draftIds: string[];
    draftBodies: string[];
  } = JSON.parse(readFileSync(inventoryPath, "utf8"));
  const expected = [
    "index.html",
    "projects/index.html",
    "harness-research/index.html",
    "university-work/index.html",
    ...inventory.publicIds.map((id) => `articles/${id}/index.html`),
  ].sort();
  const output = files(dist);
  const actual = output.map((path) => relative(dist, path));
  if (
    JSON.stringify(actual.filter((p) => p.endsWith(".html")).sort()) !== JSON.stringify(expected)
  ) {
    throw new Error("Unexpected HTML routes");
  }
  const cssBytes = output
    .filter((p) => p.endsWith(".css"))
    .reduce((sum, path) => sum + readFileSync(path).length, 0);
  if (cssBytes > 6000) throw new Error("CSS budget exceeded");
  const budgets = [];
  const inlineStyles = new Set<string>();
  const linkedStyles = new Set<string>();
  for (const path of output) {
    const source = readFileSync(path, "utf8");
    if (retired.test(source)) throw new Error(`Retired output: ${path}`);
    if (!/\.(html|css)$/.test(path)) throw new Error(`Unexpected output: ${path}`);
    if (inventory.draftBodies.some((body) => source.includes(body)))
      throw new Error("Draft body emitted");
    if (path.endsWith(".css")) {
      if (/\\|@import|@font-face|\b(?:url|image|(?:-webkit-)?image-set)\s*\(/i.test(source)) {
        throw new Error("CSS resource emitted");
      }
      continue;
    }
    if (
      /<(?:script|img|svg|iframe|object|embed|video|audio|source|base|form)\b|\s(?:src|srcset|poster|background|ping|style|http-equiv|on\w+)\s*=/i.test(
        source,
      )
    ) {
      throw new Error("Active HTML resource emitted");
    }
    const routeStyles = new Set<string>();
    for (const tag of source.matchAll(/<link\b[^>]*>/gi)) {
      if (!/rel="stylesheet"/.test(tag[0]) || !/href="\/_astro\/[\w.-]+\.css"/.test(tag[0])) {
        throw new Error("External or unsupported link resource");
      }
      const name = /href="([^" ]+)"/.exec(tag[0])?.[1]?.slice(1) ?? "";
      if (!actual.includes(name)) throw new Error("Missing stylesheet");
      routeStyles.add(name);
      linkedStyles.add(name);
    }
    const routeCss = [...routeStyles].reduce(
      (sum, name) => sum + readFileSync(resolve(dist, name)).length,
      0,
    );
    const inline = [...source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
      .map((match) => match[1] ?? "")
      .join("");
    if (/\\|@import|@font-face|\b(?:url|image|(?:-webkit-)?image-set)\s*\(/i.test(inline)) {
      throw new Error("Inline CSS resource emitted");
    }
    inlineStyles.add(inline);
    if (cssBytes + Buffer.byteLength(inline) > 6000) throw new Error("CSS budget exceeded");
    const raw = Buffer.byteLength(source);
    const gzip = gzipSync(source, { level: 9 }).length;
    if (raw > 30000 || gzip > 10000) throw new Error(`HTML budget exceeded: ${path}`);
    budgets.push({
      path: relative(dist, path),
      raw,
      gzip,
      css: routeCss + Buffer.byteLength(inline),
      combinedRaw: raw + routeCss,
    });
  }
  if (actual.some((name) => name.endsWith(".css") && !linkedStyles.has(name))) {
    throw new Error("Unreferenced stylesheet");
  }
  const cssCorpus =
    cssBytes + [...inlineStyles].reduce((sum, css) => sum + Buffer.byteLength(css), 0);
  if (cssCorpus > 6000) throw new Error("CSS corpus budget exceeded");
  writeFileSync(
    receipt,
    JSON.stringify({ status: "PASS", expected, actual, cssCorpus, budgets }, null, 2),
  );
  console.log(JSON.stringify(budgets, null, 2));
} catch (error) {
  clean();
  console.error(error);
  process.exitCode = interrupted || 1;
}

```

**File: `frontend/tests/build.spec.ts`**
```typescript
import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, cpSync, symlinkSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(import.meta.dirname, "..");
test("draft exclusion and failed-check cleanup", () => {
  const fixture = mkdtempSync(resolve(tmpdir(), "portfolio-build-"));
  try {
    for (const name of [
      "src",
      "tools",
      "tests",
      "astro.config.ts",
      "playwright.config.ts",
      "tsconfig.json",
      "package.json",
    ]) {
      cpSync(resolve(root, name), resolve(fixture, name), { recursive: true });
    }
    symlinkSync(resolve(root, "node_modules"), resolve(fixture, "node_modules"));
    writeFileSync(
      resolve(fixture, "src/content/articles/private.md"),
      "---\ntitle: Private\ndescription: Private description\nstatus: draft\n---\nPRIVATE_BUILD_SENTINEL\n",
    );
    const build = () =>
      spawnSync(process.execPath, ["tools/build.ts"], {
        cwd: fixture,
        encoding: "utf8",
      });
    const valid = build();
    assert.equal(valid.status, 0, valid.stdout + valid.stderr);
    assert.equal(existsSync(resolve(fixture, "dist/articles/private")), false);
    writeFileSync(resolve(fixture, "src/broken.ts"), "const broken: string = 123;\n");
    assert.notEqual(build().status, 0);
    assert.equal(existsSync(resolve(fixture, "dist")), false);
    assert.equal(existsSync(resolve(fixture, ".astro/output-acceptance.json")), false);
  } finally {
    rmSync(fixture, { recursive: true, force: true });
    const result = spawnSync(process.execPath, ["tools/build.ts"], {
      cwd: root,
      stdio: "inherit",
    });
    assert.equal(result.status, 0, "Production rebuild");
  }
});

```

**File: `frontend/tsconfig.json`**
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "moduleResolution": "Bundler",
    "verbatimModuleSyntax": true,
    "allowJs": false,
    "noUncheckedIndexedAccess": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitReturns": false,
    "exactOptionalPropertyTypes": false,
    "noImplicitOverride": false
  },
  "include": [
    ".astro/types.d.ts",
    "src/**/*",
    "astro.config.ts",
    "playwright.config.ts",
    "tests/**/*.ts",
    "tools/**/*.ts"
  ],
  "exclude": [
    "dist",
    "node_modules",
    "test-results",
    "playwright-report"
  ]
}

```


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
