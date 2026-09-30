# Research: Stack Selection (Round 2)

> **For**: Independent tie-breaking cross-validation by web LLMs
> **From**: Angel (aharoJ) + Codex -- portfolio project
> **Date**: 2026-09-29
> **Context**: R1 produced no robust majority for any of four stack decisions. This round narrows the decision predicates; it does not reopen the locked monorepo structure.

## Locked constraints

- `apps/web` and `apps/api` remain the deployable roots; neither may import the other's internals.
- Use one root pnpm workspace and lockfile for pnpm-managed packages. A non-pnpm API need not join it.
- Do not create an empty `packages/` directory or generic shared/types/utils/common package. A named package needs a demonstrated reusable boundary.
- The API is the sole initial semantic and migration owner of any database.
- Public contracts are transport-only: no ORM, persistence, domain-internal, or UI types cross the boundary.
- Deployment, authentication, payments, cloud, CI platforms, and visual design remain out of scope.

## R1 evidence and defect correction

R1 split across every candidate: web (Astro 3, Vite+React 2, null 2, static JS 1); API (Hono 3, Fastify 2, null 2, Node `http` 1); DB (SQLite explicit SQL 2, SQLite+Drizzle 1, null 2, investigate 2); contract (OpenAPI 2, runtime schemas 2, null 2, investigate 1). These are a summary, not raw panel text.

The prior ASP.NET Core comparator citation used `?view=aspnetcore-6.0`, an EOL version, and several panelists encountered a sign-in gate. Treat it as invalid intake evidence. Use only the current, accessible Microsoft Learn OpenAPI documentation for any ASP.NET-specific claim, and state the exact version/source used.

## Decision rule

For each question, choose exactly one `ADOPT — <option>` or `INVESTIGATE — <specific missing product fact>`. A null option is valid only if you name the concrete first-slice fact that makes it correct. Do not vote for a framework merely because v0.2 plans a scaffold: identify the smallest demonstrable behavior that earns it. Explain compatibility across all four choices and provide one deterministic verification check per choice.

## Research questions

### Q1: Web threshold

Assume the first slice must show one browser-rendered portfolio item, one user-triggered interaction, and one browser test. Which single option best meets that threshold: static HTML/CSS/JavaScript; Astro static-first/islands; Vite+React; or defer `apps/web` because that threshold still fails to earn a web app? Compare only build transparency, browser-testability, API-boundary clarity, and static deployment portability. Reject Next.js for this slice unless you can show a capability unavailable from the listed options that does not conflict with the separate `apps/api` root.

### Q2: API threshold

Assume the first slice must expose one validated JSON endpoint consumed by the browser and must make a generated or checked transport artifact reproducible in local tests. Which single option best meets that threshold: minimal Node `http`; Hono on Node; Fastify on Node; ASP.NET Core Minimal APIs on the current supported .NET release; or no API because the stated threshold is still insufficient? Treat `node:http` as the baseline. If selecting ASP.NET Core, verify the claimed current OpenAPI path against an accessible current Microsoft Learn source and account for its second toolchain.

### Q3: Persistence gate

Given Q2's one-endpoint threshold, should v0.2 require one durable user-authored record, or explicitly keep the endpoint read-only/fixture-backed? Choose exactly one: no database; SQLite plus explicit SQL and an API-owned numbered-SQL migration runner; SQLite plus Drizzle; PostgreSQL plus thin query/migration layer; or PostgreSQL plus ORM. State the behavioral fact that justifies persistence and the exact migration/retry checks. A database cannot be selected solely to make the audit look more complete.

### Q4: Contract authority timing

For exactly one browser consumer and one API endpoint, choose exactly one: API-owned OpenAPI with generated web types; API-owned runtime transport schemas kept local to `apps/api` with no package; or defer authority until the endpoint exists. The answer must preserve no cross-app internal imports and transport-only material. State whether the selected authority is lockable before code exists, and the concrete trigger that earns `packages/contracts`.

## Output format

For each question provide: recommendation; one-sentence rationale tied to the stated threshold; cross-question coupling; one exact command/test/artifact check and its failure mode; and `Sources used` with primary URLs or `No live web access used`. Do not invent sources. Do not paste raw responses or alter the locked constraints.
