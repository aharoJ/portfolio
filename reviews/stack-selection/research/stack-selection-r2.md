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

At intake authoring, the repository contains no product source, acceptance scenario, endpoint definition, persistence requirement, or browser-consumer contract. Treat that as the complete evidence baseline. Do not infer an unstated feature from v0.2's planned scaffold or from a candidate framework.

The R1 aggregate was split for every question; raw responses are external and are not part of this intake.

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

**Evidence gate — PASS iff one acceptance record names all four facts:** (1) a browser route; (2) the exact user action; (3) the observable DOM or URL result; and (4) the browser-test command that proves that result. The current baseline fails this gate.

If the gate passes, choose one: Astro static-first/islands; Next.js; static HTML/CSS/JavaScript; or Vite + React. If it fails, choose the null option. Compare only the recorded behavior's rendering model, browser-testability, build transparency, API-boundary clarity, and static deployment portability. Do not add a server responsibility to `apps/web` merely to justify a candidate.

### Q2: API runtime

**Evidence gate — PASS iff one acceptance record names all four facts:** (1) HTTP method and path; (2) successful transport response shape; (3) one invalid-input or server-owned behavior; and (4) the local command that tests both outcomes. The current baseline fails this gate.

If the gate passes, choose one: ASP.NET Core Minimal APIs on the named current .NET release; Fastify on Node; Hono on Node; or minimal Node `http`. If it fails, choose the null option. Compare validation surface, test seam, build/runtime complexity, toolchain count, and compatibility with Q4; treat no framework as a genuine baseline. An ASP.NET recommendation must supply an accessible current primary source for any claimed OpenAPI capability; lack of that source disqualifies only that claim, not the candidate.

### Q3: Persistence and migration

**Evidence gate — PASS iff the accepted API behavior requires a durable write that remains observable after process restart, and its record names both the data to retain and a migration/recovery test.** The current baseline fails this gate.

If the gate passes, choose one: PostgreSQL plus a thin query/migration layer; PostgreSQL plus an ORM; SQLite plus Drizzle; or SQLite plus explicit SQL and an API-owned numbered-SQL migration runner. If it fails, choose the null option. State the migration command/test and the failure it catches. The API remains the migration owner under every non-null choice.

### Q4: Contract authority

**Evidence gate — PASS iff accepted records define both one browser consumer and one API endpoint, including request and successful-response transport shapes, and identify the generated or checked artifact consumed by the browser.** The current baseline fails this gate.

If the gate passes, choose one: API-owned OpenAPI with generated web-facing types; or API-owned runtime transport schemas local to `apps/api` with a checked hand-maintained browser client. If it fails, choose the null option. A `packages/contracts` package is out of scope unless a second real consumer requires delivery of the same transport-only artifact; name that consumer and artifact if proposing it.

## Required output

For each question provide: `PASS` or `FAIL` with each gate condition checked; one recommendation in the allowed form; the exact missing condition or the selected-option differentiator; cross-question compatibility; one local command/test/artifact check and its failure mode; and `Sources used` with sanitized primary URLs or `No live web access used`. Do not introduce unlisted stacks, product requirements, or raw panel text.
