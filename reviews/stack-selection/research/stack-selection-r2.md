# Research: Stack Selection (Round 2)

> **For**: Independent evidence-gate cross-validation
> **From**: Angel (aharoJ) + Codex -- portfolio project
> **Date**: 2026-09-29
> **Context**: R1 did not produce a robust majority for any stack choice. R2 tests whether the repository contains enough product evidence to select a stack at all; it does not reopen locked monorepo decisions.

## Locked constraints

- `apps/web` and `apps/api` are the deployable roots; neither imports the other's internals.
- pnpm-managed packages use one root workspace and lockfile; a non-pnpm API need not join it.
- Do not create an empty `packages/` directory or generic shared/types/utils/common package.
- The API is the sole semantic and migration owner of any database.
- Any public contract is transport-only: it excludes ORM, persistence, domain-internal, and UI types.
- Deployment, authentication, payments, cloud, CI platforms, and visual design are out of scope.

## Evidence baseline

At intake authoring, the repository contains no product source, endpoint definition, database requirement, or browser-consumer contract. The operator-stated facts below are supplied product evidence; they are not panel evidence and do not authorize assumptions beyond their text. The R1 aggregate was split for every question; raw responses are external and are not part of this intake.

## First-slice product facts (operator-stated)

1. The audience is the public. The portfolio branches into technical project write-ups, `$review` harness research, and university/work pieces, presented as short articles.
2. v0.2 is read-only: no login, forms, or payments. A paid code-review/QA service with login and submissions is a later direction only; it is a revisit trigger, not v0.2 evidence or sizing input.
3. Content changes rarely and is published by the operator after major reviews or milestones. There is no daily cadence and no visitor-generated content.
4. No visitor action needs to persist.

The facts neither select nor eliminate a candidate by themselves. Panelists must apply them to the gates below, including the null, no-API, and no-database outcomes where the gate fails.

## Web-Leverage / Industry Landscape

Use live, tool-backed web research only if available in this session and declare that capability yourself; do not infer it from a model name. Every web-derived claim needs a verifiable URL, author, and date where available, and must be separated from inference. Do not fabricate, launder, or include credential-bearing URLs; use `No live web access used` when applicable.

Project constraints outrank external examples and vendor documentation. External material may verify a candidate capability but cannot create a missing product requirement or override a locked boundary.

The prior Microsoft Learn ASP.NET 6 link is excluded: it is EOL-scoped. The current .NET 10 OpenAPI page was HTTP-fetchable during this intake review, but its HTML also contains an authorization banner; it is therefore not intake authority. A panelist proposing ASP.NET may cite an accessible current primary source and must state the exact version. The candidate remains neutral without that claim.

## Uniform decision rule

For each question, first evaluate its evidence gate exactly as written. `PASS` means every listed condition is present in a committed or supplied acceptance record; `FAIL` means any condition is absent. Do not substitute plausibility, roadmap intent, or a framework's capability.

- On `FAIL`, recommend `ADOPT — Status Quo / Null Option` and name the missing condition.
- On `PASS`, select exactly one listed non-null option and give the smallest verification check that distinguishes it from the other options.
- `INVESTIGATE` is allowed only when supplied evidence conflicts; name the conflicting artifacts. Absence is `FAIL`, not INVESTIGATE.

Candidate order does not express preference. Evaluate every named option, including the null option, against the same gate and locked constraints.

## Research questions

### Q1: Browser stack

**Evidence gate — PASS iff all four operator-stated conditions are true:** (1) public visitors need to read short articles; (2) v0.2 is read-only; (3) publishing is operator-owned and infrequent; and (4) no visitor action persists. All four are supplied facts. `FAIL` only if a supplied fact is contradicted.

On `PASS`, choose one: Astro static-first/islands; Next.js; static HTML/CSS/JavaScript; or Vite + React. On `FAIL`, choose the null option. Compare the supplied product facts against rendering model, browser-testability, build transparency, API-boundary clarity, and static deployment portability. Do not add a server responsibility to `apps/web` merely to justify a candidate.

### Q2: API runtime

**Evidence gate — PASS iff at least one supplied v0.2 fact requires a server-owned behavior:** private access control, a submitted form, payment processing, visitor-specific state, visitor-generated content, or a visitor action that persists. `FAIL` iff none is required. The supplied facts say none is required; a panelist may mark `PASS` only by identifying a conflicting supplied v0.2 artifact, not the later paid-service direction.

On `PASS`, choose one: ASP.NET Core Minimal APIs on the named current .NET release; Fastify on Node; Hono on Node; or minimal Node `http`. On `FAIL`, choose the null option. Compare validation surface, test seam, build/runtime complexity, toolchain count, and compatibility with Q4; treat no framework as a genuine baseline. An ASP.NET recommendation must supply an accessible current primary source for any claimed OpenAPI capability; lack of that source disqualifies only that claim, not the candidate.

### Q3: Persistence and migration

**Evidence gate — PASS iff a supplied v0.2 fact requires visitor- or server-originated mutable data to survive process restart, and names the retained data plus a migration/recovery test.** A rare operator content publication is not such a fact by itself. The supplied facts require no visitor persistence and name no server-originated mutable record; this gate is `FAIL` unless a conflicting supplied v0.2 artifact exists.

On `PASS`, choose one: PostgreSQL plus a thin query/migration layer; PostgreSQL plus an ORM; SQLite plus Drizzle; or SQLite plus explicit SQL and an API-owned numbered-SQL migration runner. On `FAIL`, choose the null option. State the migration command/test and the failure it catches. The API remains the migration owner under every non-null choice.

### Q4: Contract authority

**Evidence gate — PASS iff Q2's gate passes and a supplied v0.2 artifact establishes an actual browser-to-API boundary, with request and successful-response transport shapes plus a generated or checked browser-consumed artifact.** The supplied facts do not require an API, so this gate is `FAIL` unless Q2 identifies a conflicting supplied v0.2 artifact.

On `PASS`, choose one: API-owned OpenAPI with generated web-facing types; or API-owned runtime transport schemas local to `apps/api` with a checked hand-maintained browser client. On `FAIL`, choose the null option. A `packages/contracts` package is out of scope unless a second real consumer requires delivery of the same transport-only artifact; name that consumer and artifact if proposing it.

## Required output

For each question provide: `PASS` or `FAIL` with each gate condition checked; one recommendation in the allowed form; the exact missing condition or the selected-option differentiator; cross-question compatibility; one local command/test/artifact check and its failure mode; and `Sources used` with sanitized primary URLs or `No live web access used`. Do not introduce unlisted stacks, product requirements, or raw panel text.
