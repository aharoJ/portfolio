# Research: Stack Selection (Round 1)

> **For**: Independent research cross-validation by web LLMs
> **From**: Angel (aharoJ) + Codex -- portfolio project
> **Date**: 2026-09-29
> **Context**: v0.2 must select a small full-stack foundation before any scaffold is written, then subject the real scaffold to a blind implementation audit.

---

## About the Project

This portfolio is both a real product and a tune-up vehicle for `$review`. Its first full-stack slice should make application, transport, persistence, and verification boundaries easy for an independent reviewer to inspect and reproduce. The repository is deliberately near-empty, so the panel must test whether a stack is warranted rather than treating framework adoption as inevitable.

## Current Setup

The only product manifest is a minimal legacy `frontend/package.json`; there is no root workspace, application source, API, database, deployment material, or test suite. The closed monorepo-structure research locks `apps/web` and `apps/api` as eventual deployable roots, but it deliberately leaves framework, ORM, provider, contract authority, and physical-package choices open.

v0.2 is sequenced as stack research, scaffold implementation, then a blind code audit and close. The selection must therefore favor explicit, mechanically checkable boundaries over ecosystem breadth or fashionable defaults.

## Your Role

Evaluate the candidate choices below for:

1. **Feasibility**: whether the null option or each named stack can satisfy the first small release slice without inventing unearned infrastructure.
2. **Trade-offs**: build/runtime complexity, cross-language cost, framework surface, portability, operational burden, and dependency/tooling lock-in.
3. **Reviewability**: how easily a blind reviewer can trace a browser behavior through a public contract, API validation, persistence/migration, and deterministic tests.
4. **Self-verification**: exact local commands, generated artifacts, migration checks, and test seams that can prove the selected stack is wired correctly.
5. **Boundary discipline**: whether each recommendation preserves the locked application, database-owner, and transport-only rules below.

Engage with the stated options and constraints. Do not propose alternative tech stacks, wholesale rewrites, or generic advice outside the questions.

## What We Need From You

For every question, select one recommendation as `ADOPT — <option>`, `DISMISS — <option>`, or `INVESTIGATE — <specific uncertainty>`. Explicitly test the Status Quo / Null Option before recommending a non-null choice.

For an ADOPT, provide a minimal concrete scaffold outline, exact verification commands or test categories, and the failure mode each check would catch. State cross-question coupling: a proposed database/ORM or contract authority must be compatible with the API runtime you recommend. If the evidence does not justify locking a choice now, use INVESTIGATE rather than fabricating certainty.

## Output Format

For each question:

1. **ADOPT / DISMISS / INVESTIGATE** — name the selected option.
2. **Expected outcome** — what first-slice behavior and evidence it enables.
3. **Implementation** — exact commands/steps for the smallest scaffold.
4. **Risks** — operational, compatibility, and review failure modes.
5. **Verification** — commands, tests, generated artifacts, and migration checks.
6. **Sources used** — URLs/titles for every web-backed claim in this response, or `No live web access used` if the session has no web tool access. Sanitize URLs before pasting: strip credentials, tokens, OAuth codes, session IDs, and sensitive query parameters.

## Additional Observations (Optional)

Anything material that does not fit a question. Omit this section if you have nothing to add.

## Constraints

- `apps/web` and `apps/api` are the locked deployable roots. Do not reopen their topology or permit either application to import the other's internals.
- Do not create an empty `packages/` directory or generic `shared`, `types`, `utils`, or `common` package. A named package is allowed only for a demonstrated reusable boundary.
- Use one root pnpm workspace and lockfile for pnpm-managed packages. A non-pnpm API is not required to join the pnpm workspace. Catalogs and Turborepo remain evidence-gated.
- The API is the sole initial semantic and migration owner of any database. Infrastructure may invoke an application-owned migration interface but must not define schema behavior.
- Public contracts must be transport-only: no ORM, persistence, domain-internal, or UI types cross that boundary.
- Deployment-provider, authentication, payment, microservice, cloud, CI-platform, and visual-design choices are outside this research.
- This research must not create product, infrastructure, or protocol code. It must not copy or modify `$review`.

## Premise Risks

| Risk | Source | Signal |
|---|---|---|
| The empty repository may make a framework or persistent database look necessary before the first real feature proves it. | Current worktree and v0.2 premise | Weak |
| Treating the legacy `frontend/` manifest as an architectural authority would conflict with the locked `apps/web` deployable-root decision. | `reviews/decisions.md` and current worktree | Strong |
| A contract package could become a convenience dump instead of an earned public transport boundary. | `reviews/runbook/monorepo-structure.md` | Weak |

## Web-Leverage / Industry Landscape

Use live, tool-backed web research when your session actually has it. Declare your session capability yourself; do not infer browsing access from a model brand. If live web access is unavailable, state `No live web access used in this session.` and do not fabricate sources.

When this section is used, web-derived claims must cite a verifiable URL, author, and date where available, and must be clearly separated from your inference. Do not use citation-laundering such as unnamed industry consensus. Sanitize every URL: do not paste credentials, access tokens, OAuth codes, signed URLs, session IDs, or sensitive query parameters; cite title plus domain if a URL cannot be safely stripped.

Project constraints outrank external patterns or prestige. An industry example may challenge or enrich a candidate, but it cannot override the locked monorepo decisions or establish authority merely because a large company uses it. List at most three high-signal primary sources relevant to the questions.

## Research Questions

### Q1: Which browser stack, if any, should v0.2 scaffold in `apps/web`?

Evaluate these named options: static HTML/CSS/JavaScript with no framework; Astro in static-first/islands mode; Vite + React; and Next.js. Compare rendering model, browser-testability, build transparency, API-boundary clarity, deployment portability, and whether the extra runtime/server features are earned by the first slice.

**Status Quo / Null Option**: Do not scaffold `apps/web` in v0.2; retain the documentation-only state until a real product slice proves a browser application is needed.

### Q2: Which API runtime, if any, should v0.2 scaffold in `apps/api`?

Evaluate these named options: no API; a minimal Node `http` server; Hono on Node; Fastify on Node; and ASP.NET Core Minimal APIs on the current supported .NET release. Treat the plain Node server as a genuine simplicity baseline, not a strawman.

ASP.NET Core Minimal APIs is the selected non-Node comparator, not a preselected winner. It is included because Microsoft documents first-party OpenAPI generation, including build-time document output, making it a concrete alternative on the contract-verification seam. Go remains relevant as a low-surface implementation baseline, but this round uses ASP.NET Core as the stronger like-for-like non-Node contender; test that framing rather than accepting it. Source: [Microsoft Learn — OpenAPI support in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/openapi/overview?view=aspnetcore-6.0).

**Status Quo / Null Option**: Do not scaffold `apps/api`; serve only static or fixture data until a real server-side behavior, secret, or persistence requirement exists.

### Q3: Which database and data-access/migration approach, if any, should v0.2 use?

First decide whether persistence is justified. Then compare: no database; SQLite with explicit SQL and a small migration runner; PostgreSQL with a thin query/migration layer appropriate to the chosen API runtime; and PostgreSQL with a convention-bearing ORM appropriate to that runtime (for example Drizzle in Node or EF Core in .NET). Recommend one exact engine plus data-access and migration tool, or the null option, and explain compatibility with Q2.

**Status Quo / Null Option**: Keep first-slice content static or in-memory and introduce no database, ORM, migration directory, container, or backup claim.

### Q4: Is one contract authority decidable for the first real `apps/web` ↔ `apps/api` boundary, and if so what should it be?

Compare: no shared authority with API-local declarations and a hand-maintained web client; API-owned OpenAPI as the source with generated web-facing client/types; and API-owned runtime transport schemas that become an earned `packages/contracts` boundary only when the first real consumer edge warrants it. Assess whether the authority should be locked now or deferred until the first endpoint and browser consumer exist.

**Status Quo / Null Option**: Do not create a shared contract artifact or package; keep the API declaration local and hand-maintain any browser client boundary until a real endpoint proves a durable contract is needed.
