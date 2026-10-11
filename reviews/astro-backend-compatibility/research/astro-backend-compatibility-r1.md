# Research: Astro and future backend compatibility (Round 1)

> **For**: Independent research cross-validation by web LLMs
> **From**: Angel + Codex (underlying model unverified) -- portfolio project
> **Date**: 2026-10-10
> **Context**: Revised scope explicitly approved by Angel on 2026-10-10; apply the four presented RED fixes and bundle. Retain Astro, leave backend Null, evaluate future compatibility rather than choose future infrastructure.

## About the Project

This portfolio currently serves public static content. The operator prefers few dependencies and in-house solutions, likes Astro, and considers Rust a possible future backend. No current feature requires a backend.

## Current Setup

Baseline: `a07c6f28f18153bee48970949aad0552bfd377e7`. `frontend/astro.config.mjs` sets `output: 'static'`. npm and the application-local lockfile are authoritative. Existing research locked Astro static-first, conditional islands, and Null API, persistence, and contract choices. v0.1–v0.3 are tagged; existing topic closure records are complete; this topic has no prior round.

Prior research evaluated API-boundary clarity, build/content handling, and conditional backend gates. It excluded concrete deployment and authentication design. Those criteria do not demonstrate a future Rust integration, session design, adapter compatibility, or hosting topology. Deployment invocation ownership was already assigned to repository-level infrastructure; this review carries that lock forward.

Authoritative repository context (historical proposals in the prior intake are superseded by its final runbook and current decisions):

{{FILE:frontend/astro.config.mjs}}

{{FILE:reviews/runbook/stack-selection.md}}

{{FILE:reviews/decisions.md}}

Carry prior dependency reconnaissance without repeating it: Astro's resolved production closure was 287 package locations; existing inspected static output had no script tags or JavaScript assets. These are prior snapshots, not a fresh build or measurements of future SSR. Do not compare an unresolved alternative's direct dependency count to this resolved closure. Stack replacement is excluded.

## Your Role

Evaluate integration feasibility, conditional benefits and costs, boundary ownership, and risks against the actual static setup. Distinguish technical possibility from verified compatibility and justified product need. Limit recommendations to these questions and preserve existing ownership and Null locks.

## What We Need From You

Provide a compact integration-mode comparison and a conditional readiness checklist. State what Astro helps with, what it adds, and what remains the backend's responsibility. Future examples are hypothetical probes; they do not activate existing gates. Recommend deferral when feature facts are absent. No current implementation authorization follows from this research.

## Output Format

For each question give:
1. ADOPT / DISMISS / INVESTIGATE. ADOPT may adopt only an evidence/readiness/revisit rule, never an auth, runtime, transport, contract, SSR, adapter, endpoint, host, proxy, or topology design. Today all such designs remain DEFER/Null. Describe non-Null future options only conditionally: require a concrete feature fact plus a bounded prospective proof before any non-Null recommendation could become actionable.
2. Expected outcome and the feature condition under which it applies.
3. Implementation: exact prospective verification steps; do not execute them or imply current authorization. Where Null wins, say no steps now.
4. Risks and uncertainty, including runtime or version limitations.
5. Verification: smallest future falsifiable proof and what it would establish.
6. Sources used: sanitized direct URLs/titles for load-bearing web claims, or `No live web access used`.

## Constraints

- Retain Astro and static output now; no framework selection reopening.
- Backend, persistence, and contract remain Null. Rust is a candidate, not an adopted runtime.
- Conditional comparison, no present implementation: no code, installs, new services, auth, adapters, deploy/CI changes, or implementation commitments. Lifecycle Type is determined at close, not at scope.
- Keep API/database/migrations owned by the backend, transport authority at the API boundary, and deployment invocation with repository-level infrastructure under the carried monorepo Q3 ownership lock (decisions.md). No shared internal domain package by assumption.
- Minimize added dependencies and operational burden; report required runtimes and maintenance honestly. In-house preference is not permission to invent cryptography or claim bespoke code is maintenance-free.
- Current gate facts are absent. Conditional diagrams and experiments must be labelled hypothetical.

## Premise Risks

| Risk | Source | Signal |
|---|---|---|
| Designing an unspecified backend prematurely would conflict with current Null locks; this scope evaluates conditions without choosing or implementing a backend. | decisions.md; stack-selection runbook; operator brief | Weak |
| API-boundary clarity was already evaluated, so repeat selection work would waste effort. Concrete integration modes, auth/session/form boundaries, Rust contract mismatches, and hosting costs remain untested. | stack-selection research R2 and runbook | Weak |
| Dependency count alone does not establish shipped browser weight or future runtime cost. | prior RECON.md and RED.md | Weak |

No Strong contradiction found. Research scope does not assert any product-trigger activation.

## Web-Leverage / Industry Landscape

Lead has live web tools and used official Astro documentation for preliminary scoping; this is not a panel result or proof against the pinned application version. Declare your actual browsing capability; model labels do not establish it. If unavailable, do not claim live verification.

Use official primary documentation for technical claims. Anti-hallucination and source-hygiene: do not invent citations or use citation-laundering; separate evidence from inference; sanitize URLs and do not paste credentials. Session-capability self-declaration is required, not brand classification; capability varies by session. Codebase-constraint supremacy: external patterns do not become authority by prestige. Cite verifiable URL, author or documentation maintainer, and publication/update date where available (otherwise say not stated); distinguish documented behavior, inference, version applicability, and untested assumptions. Check adapter/runtime requirements and external HTTP integration separately. Do not equate unanimous panel agreement with independent verification of operator facts. Strip credential/token/session query parameters; use safe title/domain references where needed. Project constraints outrank ecosystem popularity. Provide at most three high-signal primary-source examples, roughly 300 words total; mark external patterns absent from this codebase as potential gaps, not adoption authority.

Starting references (verify applicability to the pinned project before relying on them):
- https://docs.astro.build/en/guides/on-demand-rendering/
- https://docs.astro.build/en/guides/endpoints/
- https://docs.astro.build/en/guides/sessions/

## Research Questions

### Q1 — Integration modes

How can retained Astro connect to a future Rust or other backend? Compare static HTML plus separate API, build-time backend reads, and selective request rendering with an Astro adapter/endpoints. Explain benefits, costs, runtime requirements, browser JavaScript implications, and the concrete feature evidence that would justify each mode. Distinguish portable HTTP integration from adapter/runtime compatibility.

**Status Quo / Null Option:** Keep the existing static Astro output; defer every backend and integration-mode choice. No claim of proven backend readiness.

### Q2 — Forms, authentication, and sessions

For explicitly hypothetical forms or private pages, where could validation, authentication, sessions, cookie policy, CSRF/CORS, and caching responsibilities live? Compare direct backend handling with an Astro intermediary; identify build-time/private-data hazards and what requires request-time processing. Describe readiness conditions only; no present validation/auth/session design or intermediary choice is adopted. Do not infer a present need for login or forms.

**Status Quo / Null Option:** No forms, authentication, sessions, private pages, or corresponding infrastructure now; defer security design until a concrete feature exists.

### Q3 — Rust and transport contracts

What interoperability limits arise when a Rust or other backend serves Astro/browser consumers? Evaluate JSON shape and error semantics, integer/date/optional-field mismatches, runtime validation versus compile-time TypeScript declarations, and conditional contract generation. Respect API-owned transport authority and avoid making internal backend models shared frontend types. Evaluate readiness conditions only; no present validation strategy, schema tooling, contract generation, or transport design is adopted.

**Status Quo / Null Option:** No API, shared package, generated client, schema tool, or transport-contract authority now. Keep the existing contract gate; reopen only with a real boundary and checkable consumer artifact.

### Q4 — Deployment ownership and revisit evidence

Compare the operational costs and boundaries of static frontend plus independent backend versus selectively server-rendered Astro plus backend. Cover same-origin routing versus cross-origin hosting, adapter/runtime hosting constraints, cache/private response behavior, and map future deployment evidence into the already locked repository-level infrastructure ownership of deployment invocation; do not re-decide ownership. Give the minimum future feature facts and bounded proof needed to revisit current locks.

**Status Quo / Null Option:** Keep the current static artifact and existing ownership boundaries. Select no host, adapter, proxy, deployment topology, CI, or backend runtime now; retain existing revisit gates.

## Exclusions and scope state

No backend/runtime selection, persistence/ORM evaluation, framework replacement, wholesale package inventory, vendor-host selection, code or deployment implementation. API/persistence/contract gates are preserved. Integration conclusions must remain conditional, not a stealth architectural lock.

Scope authorization (Angel, 2026-10-10, verbatim as relayed in BRIEF-codex-2.md): "I APPROVE end to end; everything said I approve; lets keep it moving; love you". This approved the four already presented RED FIX rows and the revised scope. No new operator modification request accompanied that approval; protocol modification-overrides-affirmation therefore does not require another confirmation. Authorization permits bundle and panel preparation, not a present backend design or implementation. Research scope seals are N/A under the compiler; the external scope inventory remains descriptive, not a compiler seal.
