# Astro and future backend compatibility

Implementation Impact: no

## Outcome and authority

Retain Astro static output and the existing Null backend, persistence, and contract choices. R1 adopted four readiness/evidence/revisit rules, not future designs. This deliverable is the conditional comparison and checklist; no product code is required, so implementation is skipped and recorded in the roadmap. Rust remains a candidate.

Angel's R1 roster authorization (2026-10-10), verbatim: "A count kimi". This adds KIMI for this round only. Nine pasted bodies are preserved externally; eight topical respondents supply current recommendations. Z.AI's historical-summary reply is non-voting. Raw Q1/Q4: 8 ADOPT; Q2: 7 ADOPT/1 DISMISS; Q3: 7 ADOPT/1 INVESTIGATE. All eight retain present Null. The minority Q3 investigation is for future gate-time payload proof, included in this checklist. Every limited rule passes every-single-removal majority; no independent runtime/model execution claim.

## Conditional compatibility comparison

These are possible paths to investigate after feature facts exist, not selected architectures:

| Path | Potential benefit | Cost or limit | Smallest relevant future proof |
|---|---|---|---|
| Static shell plus separate HTTP backend | Retains independent public static delivery; backend language need not match Astro | Backend serving, request semantics and origin routing still need design; browser fetch adds JS, native form submission need not | One actual action/response through the proposed serving boundary, plus public-page availability with backend down |
| Build-time public backend reads | Emits static content with no request-time Astro runtime | Build availability depends on the source; freshness waits for rebuild; publicly emitted content must be safe to publish | Changed public fixture changes output; unavailable source has a specified failure behavior; emitted artifact disclosure check |
| Selected request-rendered Astro routes | Could provide request-specific HTML while other routes remain prerendered | Adapter and compatible request runtime, version/hosting coupling, latency, private-cache and lifecycle costs | One requested route on exact proposed versions/runtime; static reading regressions and dependency/runtime delta checked |

HTTP portability is an inference, not an executed Rust interoperability test. Current config explicitly uses `output: 'static'`; the lockfile currently resolves Astro 7.3.5. No future adapter is installed or tested. Current official docs describe an adapter for on-demand routes and individual `prerender = false` opt-outs while the remainder stays static. This is documentation-level feasibility, not an installed-version or production-host proof. [Astro on-demand rendering](https://docs.astro.build/en/guides/on-demand-rendering/) (Astro maintainers, date not stated; accessed 2026-10-10).

## Readiness checklist — use only when a concrete feature arrives

1. Supply a current feature artifact: interaction, public/private classification, freshness, mutable data and failure expectations. A future service idea alone is not evidence or implementation authority.
2. Apply the existing gates separately: API-required behavior; named restart-surviving mutable data plus migration/recovery evidence if persistence is needed; admitted API plus real request/success shapes and a generated or checked browser artifact if the contract gate is needed. Revisit topology/manager authority only when their carried triggers are actually met.
3. Compare only the integration paths relevant to that feature. Record exact lockfile versions and proposed serving runtime/adapter; explain why the existing static path suffices or does not. An API, HTML form, or future Rust preference does not itself require Astro SSR, login, persistence or browser hydration.
4. For protected resources or mutations, identify authoritative trust boundaries. Prove relevant invalid-input, unauthorized and cross-user cases, cookie/origin behavior, request forgery controls and cache isolation through the actual proposed delivery path. No universal cookie/cache recipe follows from this review; CORS is not authorization. If sessions exist, specify storage/lifetime/restart/replica behavior and respect the persistence gate. Astro's documented sessions use on-demand processing and a storage driver; that API is not a selected auth design. [Astro sessions](https://docs.astro.build/en/guides/sessions/) (Astro maintainers, date not stated; accessed 2026-10-10).
5. If a real transport boundary exists, prove actual backend serialization and consumer behavior for feature-relevant numeric limits, time semantics, omission/null, errors and malformed payloads. Include a deliberately incompatible case. TypeScript declarations do not establish runtime checking; generation is optional and must reproduce wire behavior. Keep API-owned transport separate from internal backend models. No validation library or representation is chosen.
6. Measure added resolved dependencies, shipped browser assets and request-runtime operations separately against a comparable baseline. Keep public reading/navigation acceptance, including its existing JavaScript-disabled behavior, scoped explicitly when adding an interactive feature.
7. Map deployment invocation into repository-level infrastructure and link the bounded proof, public/private cache behavior, backend failure/rollback, and actual runtime requirements in the existing release-evidence record. Infrastructure does not acquire database/migration semantics.
8. Missing feature facts, failed proof or an unsatisfied affected gate leaves that choice Null. A successful bounded proof supports a later scoped decision only; it is not automatic deployment or implementation authorization.

## Deferred choices and verification limits

No backend runtime, schema/generator/client, shared package, adapter, endpoint, session store, auth design, cookie policy, host/proxy/origin topology, CI or migration framework has been selected. No new code, install, build, or deploy was needed for this comparison. Prior dependency counts are snapshots; they do not quantify future SSR cost. Actual security and runtime compatibility remain future verification, not current certification.

Cross-origin and cross-site are separate concepts; native forms can submit without CORS preflight. Serde can omit fields using attributes; not every i64/u64 needs a string if its actual allowed range is safely represented. These qualifications prevent panel recipes from becoming design authority. [MDN CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS), [Serde omission controls](https://serde.rs/attr-skip-serializing.html), [RFC 8259](https://www.rfc-editor.org/rfc/rfc8259), [TypeScript erased assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html). Maintainers: MDN contributors, Serde maintainers, T. Bray/IETF (December 2017), Microsoft/TypeScript contributors; other page dates not asserted. Accessed 2026-10-10.

## Review evidence and reuse

Canonical draft/intake/manifest/ledger: `reviews/astro-backend-compatibility/`. Raw panel bodies and verbatim splits remain outside Git at `~/desk/tmp/portfolio/astro-backend-compatibility/panel-batch/r1/`; source SHA-256 is recorded in the sealed ledger. Vote extraction, every-removal calculation and separate scope/source qualification are under `~/desk/tmp/portfolio/v0.4-astro-backend/`. No C51/subagent or agentic CLI dispatch occurred; all external panel responses were supplied as web-paste blocks. Web identities/capabilities remain self-reported, not independent runtime proof.
