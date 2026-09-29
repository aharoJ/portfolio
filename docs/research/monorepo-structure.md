# Monorepo structure for the portfolio test vehicle

**Research status:** recommendation only. No workspace, application, infrastructure, database, or protocol files were created by this research.

**Decision in one sentence:** rebuild as a pnpm workspace containing deployable applications under apps/, deliberately small reusable boundary packages under packages/, environment/deployment material under infra/, and a future reviews/ evidence root for this project's use of $review. Start as a modular monolith: one web application, one API application, one database lifecycle owner.

This is not a claim that a folder tree creates quality. The tree is a way to make ownership, dependency direction, deployment boundaries, and review evidence mechanically visible. That is especially valuable here because this portfolio is also the controlled vehicle for tuning the local $review protocol.

## Evidence boundary and confidence rules

There are two distinct evidence bases in this report:

- Engineering practice comes from current primary documentation and a small number of primary research sources. It supports the workspace, package graph, task-graph, container, CI, and migration recommendations.
- Statements about $review come only from this machine's installed adapter, canonical protocol, constraints, decisions, runbooks, and retained records. Each such statement has an absolute local-file citation. The report does not generalize from outside “agent” literature to the behavior of this protocol.

Confidence labels mean:

| Label | Meaning |
|---|---|
| High | Direct documentation or repeated retained local evidence supports the claim; the stated boundary is narrow. |
| Medium | The recommendation follows from direct evidence plus a stated architectural inference. |
| Low / investigate | Evidence is incomplete, future-facing, or depends on an unmade product choice. It is not a decision disguised as certainty. |

“Counterexample” is not decoration. Every major recommendation below names the condition under which it should be rejected or revisited.

## The decision

Use this target shape when implementation begins:

~~~
portfolio/
├── apps/
│   ├── web/                         # browser-facing deployable
│   └── api/                         # API + domain modules + database lifecycle owner
│       ├── src/
│       │   └── modules/             # vertical product modules, not global layers
│       └── db/
│           ├── schema/
│           ├── migrations/
│           └── seeds/               # development/test fixtures only
├── packages/
│   ├── contracts/                   # public request/response/event boundary only
│   └── config/                      # only after a configuration concern has two real consumers
├── tests/
│   └── e2e/                         # only if cross-app end-to-end tests need their own workspace
├── infra/
│   ├── compose/                     # local and production compose definitions
│   └── vps/                         # deploy, migration, backup/restore, and service-operation material
├── docs/
├── reviews/                         # future project-local $review evidence; not a copy of the harness
├── .github/workflows/
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── turbo.json
└── tsconfig.base.json
~~~

This is a proposed future tree, not a scaffold. The intentionally wiped current frontend/ and backend/ directories should become apps/web/ and apps/api/ when the rebuild starts. The root should contain orchestration and project-wide policy, not runtime application code.

### Why apps/ plus packages/ wins

An application is a terminal deployment or execution unit. A package is a reusable, dependency-constrained unit. That distinction matches Turborepo's own package taxonomy: application packages are deployable leaves, whereas library packages exist for reuse. [Turborepo package types](https://turborepo.dev/docs/core-concepts/package-types) Its task graph is built from the package-manager dependency graph, so a declared workspace boundary is more useful than a directory convention alone. [Turborepo package and task graph](https://turborepo.dev/docs/core-concepts/package-and-task-graph)

pnpm workspaces require an explicit root pnpm-workspace.yaml and support workspace: dependencies that refuse accidental registry fallback. [pnpm workspaces](https://pnpm.io/workspaces) That is a valuable fail-closed property for a portfolio built to expose review defects: a package import either names a real local contract or fails; it does not quietly resolve to a similarly named public package.

**Counterexample.** If the product remains permanently one browser bundle, one tiny server, no shared public contract, no database lifecycle, no deployment automation, and no independent cross-app test concern, root/frontend plus root/backend is simpler. Its flatness is a legitimate advantage. But the stated target includes frontend, backend, database, CI, a VPS deployment, and review experiments. In that target, root-level service names become a weak taxonomy: where do contracts, deployment, database authority, cross-app tests, and package-wide task policy live?

**Recommendation:** adopt apps/ plus packages/ now in the architecture plan, but create only packages that have a real boundary. Do not create packages/shared, packages/utils, packages/types, packages/common, or a package per domain module by default.

**Confidence:** High for the structural distinction; Medium for the exact initial package count because the product contracts are not designed yet.

### Why not microservices, a multi-repository split, or a large “shared” layer

The recommended shape is a modular monolith, not a promise of future microservices. The API can contain independently understandable product modules while still sharing one process, database migration owner, observability path, and deployment transaction. This keeps changes such as “new endpoint plus migration plus UI” reviewable as one release slice.

Google's monorepo analysis identifies the real trade: broad visibility and unified dependency management buy coordination, while tooling, access, and stability costs grow with scale. [Google Research: Advantages and Disadvantages of a Monolithic Codebase](https://research.google/pubs/advantages-and-disadvantages-of-a-monolithic-codebase/) The portfolio is at the early coordination-rich, scale-small end of that trade. There is no evidence yet that independent deployment, independent persistence, or independent team ownership would pay for distributed-system boundaries.

**Counterexample.** If a module acquires a genuinely separate security boundary, scaling profile, uptime objective, database ownership, release cadence, and operational owner, keeping it inside one API would become the wrong kind of simplicity. That is a future architecture decision, not a folder rename. Until those facts exist, extracting services adds network failure modes and hides what should be one reviewed release slice.

**$review implication.** The local protocol begins scope by comparing the premise against existing constraints, decisions, philosophy, context, and goals; it also requires a visible null option for each research question. [scope procedure](/Users/aharoj/.skills/review-protocol/protocol.md:785) A future service-extraction topic should therefore be framed against a concrete status quo: “keep this as an API module,” with measured boundary pain. A fashionable “microservices” premise is not evidence. This is a direct protocol rule plus an inference about how to use it.

**Confidence:** High that the local protocol requires the premise/null check; Medium that a modular monolith is best for this still-empty product.

## Ownership and dependency law

The valuable part of this tree is not the names. It is the allowed arrows:

~~~
apps/web  ───────► packages/contracts
     │                     ▲
     │ HTTP                │
     ▼                     │
apps/api ───────► packages/contracts
     │
     ├──► its own domain modules
     └──► its own db/schema + db/migrations

infra/ invokes built application images and migration operations.
It does not become an importable application library.
~~~

Rules to make that diagram real:

1. An app never imports another app. The web application calls the API through a public transport boundary.
2. contracts contains only stable, public boundary material: request and response shapes, validation schemas, event envelopes, error vocabulary, and generated client types if generation is chosen.
3. contracts never imports the API, ORM, database schema, or web UI. The API maps domain and persistence representations to contract representations.
4. Product-domain code stays in apps/api/src/modules until there are two independent consumers with an actual shared lifecycle. “Might reuse later” is not enough.
5. infra consumes build outputs and explicit deployment interfaces. It does not import application source or define database schema.

The TypeScript project-reference model is useful for making build relationships explicit, but it should reinforce workspace package boundaries rather than bypass them with a giant root path-alias map. [TypeScript project references](https://www.typescriptlang.org/docs/handbook/project-references.html)

**Counterexample.** A contracts package can become a disguised internal API, leaking every ORM type and forcing unrelated UI and server changes to synchronize. The corrective rule is not “add more packages.” It is to keep contracts small, public, and versioned by compatibility tests. If the web is the only consumer of an endpoint and a type is not a transport boundary, it likely belongs in the API module rather than contracts.

**$review implication.** The protocol's implementation entry asks for source files, tests, tightly coupled dependencies, build configuration, and exclusions before the audit intake is assembled. [implementation scope](/Users/aharoj/.skills/review-protocol/protocol.md:844) A contract-changing scope should explicitly include the contract package, API mapper, web consumer, migration when applicable, and their tests. The harness should flag any scope that says “API-only” while a public contract is changed as an ambiguity to challenge, not silently accept.

**Confidence:** Medium. Explicit graph boundaries are well-supported; which types prove stable enough for contracts must be decided from actual features.

## Workspaces, versions, and the task runner

### Package manager policy

Use pnpm with:

- a single root lockfile;
- explicit workspace: protocol for every internal dependency;
- a pinned package-manager version;
- one root workspace declaration;
- disallowWorkspaceCycles enabled;
- catalog: entries only for dependencies intentionally kept on one common version.

pnpm catalogs centralize shared dependency versions, reducing duplicated upgrade edits and merge conflict surface. [pnpm catalogs](https://pnpm.io/catalogs) They are not a mandate to centralize every dependency version. A database driver or framework plugin should stay local if only one app uses it.

**Counterexample.** A catalog can become a hidden global coupling mechanism. If an API-only dependency is catalogued “for tidiness,” a harmless API update becomes a whole-repository version event. Keep a catalog small and purpose-specific: for example TypeScript/tooling shared by actual workspaces, not every indirect dependency.

**$review implication.** The local protocol treats file state rather than conversational memory as the routing authority, and its close checks are designed to make mutations cross-checkable rather than merely asserted. [cycle detection](/Users/aharoj/.skills/review-protocol/protocol.md:181) [C46 limits](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:124) A lockfile, explicit workspace dependencies, and a graph command give a future review a machine-readable state to inspect. They do not prove semantic compatibility, but they substantially reduce “the agent assumed an implicit dependency” ambiguity.

**Confidence:** High for explicit workspaces and one lockfile; Medium for catalog introduction timing.

### Task runner policy

Use Turborepo after the first full-stack cut, with the package manager as source of package truth. Define task dependencies and outputs explicitly. Use local cache initially; consider remote cache only after deciding who can read cached artifacts and whether the build inputs are safe to share.

Turborepo caching assumes a deterministic task and requires correct declared outputs and inputs. [Turborepo caching](https://turborepo.dev/docs/crafting-your-repository/caching) This is an important limitation, not merely an optimization detail. A cache hit on an undeclared environment variable, generated client, migration state, or stale output can make a review look green while checking the wrong artifact.

Recommended initial tasks:

| Task | Meaning | Cache posture |
|---|---|---|
| lint | static local policy | cacheable if inputs are declared |
| typecheck | package type boundary | cacheable |
| test:unit | deterministic unit tests | cacheable only with stable test inputs |
| test:integration | API plus ephemeral database | generally non-cacheable result; cache setup only if proven safe |
| build | deployable output | cacheable with explicit outputs |
| contracts:check | compatibility and generated-artifact freshness | cacheable when generation is deterministic |
| db:migrate:check | validates migration sequence against ephemeral DB | non-cacheable verdict |
| test:e2e | browser/API/database seam | non-cacheable verdict |
| dev | long-running process | never cached |

**Counterexample.** Installing a task runner before there are multiple packages can turn a two-command project into configuration theater. The trigger for Turborepo is not fashion; it is the first time web, API, contracts, and build/test tasks have dependencies that must execute in a reproducible order. Until then pnpm recursive scripts may be enough.

**$review implication.** A future audit must inspect both source changes and the task graph/output declaration, because the protocol's R1 audit explicitly asks for source, tests, tightly coupled dependencies, and build configuration. [implementation scope](/Users/aharoj/.skills/review-protocol/protocol.md:844) The harness should learn a concrete question: “What source, generated output, environment, and database state makes this task result valid?” A passing task with undeclared inputs is an evidence-quality issue, not automatically a product defect.

**Confidence:** Medium. The task set is fit for the intended full stack; actual scripts should wait for the chosen framework and test stack.

## Contracts: one authority, no type leakage

Choose exactly one authority for the public API shape:

- **Schema-first TypeScript boundary:** runtime schemas in packages/contracts are the source for API validation and inferred client types; or
- **API-description-first boundary:** an OpenAPI document is the source and generated client/server boundary types are derived from it.

OpenAPI is a formal description standard for HTTP APIs. [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) The choice is deliberately left open because no framework or public API style exists yet. What must not happen is dual authorship: hand-maintained controller types, independently maintained client types, and a third schema that only “usually” agree.

The desired behavior is:

1. API accepts untrusted input using the boundary authority.
2. API maps validated public input into domain commands.
3. API maps domain results into public response contracts.
4. The web imports the public contract/client rather than API internals.
5. Contract compatibility tests are part of a release slice.

**Counterexample.** A shared contract library can slow an early portfolio if every private helper becomes public ceremony. The discipline is to put only cross-process promises there. A private API module shape stays private. If a route is experimental, explicitly mark its compatibility policy rather than pretending it is stable.

**$review implication.** The protocol requires research questions to surface the status quo/null option and a premise-risk section before work begins. [research template](/Users/aharoj/.skills/review-protocol/protocol.md:1530) A contract decision should be reviewed as a falsifiable question: “Can the web call this endpoint without importing server internals, and can a breaking change be detected before deployment?” Do not scope it merely as “add types.”

**Confidence:** High for one authority and no ORM leakage; Low for schema-first versus OpenAPI-first until the first API use case exists.

## Database and migration placement

Put schema, migrations, and database tooling beneath apps/api/db because the API is the initial and sole application owner of the database lifecycle. Keep the production database service definition, volume, backup, restore, and migration invocation under infra/. The split is:

| Concern | Owner | Why |
|---|---|---|
| Schema model and migrations | apps/api/db | The API is accountable for interpreting and evolving data. |
| Development seeds/test fixtures | apps/api/db/seeds | They are coupled to domain and migration semantics. |
| Database container, persistent volume, backup/restore operations | infra/compose and infra/vps | These are environment operations, not domain schema. |
| Production migration run policy | infra/vps plus API migration command | Deployment must run it once, visibly, and before the new API processes depend on it. |
| Browser-visible data contract | packages/contracts | Database tables are not an API. |

Versioned migrations are designed to be committed and reviewed with application changes. [Prisma migrations overview](https://docs.prisma.io/docs/orm/migrations/how-migrations-work) The conclusion does not depend on choosing Prisma; any migration engine should keep ordered, reviewable migration files with the application that owns their semantics.

For deployment safety, use an expand/contract migration discipline:

1. Add compatible schema first.
2. Deploy code that can handle old and new data.
3. backfill explicitly and observe it.
4. switch reads/writes.
5. remove old schema only in a later, separately reviewed release.

**Counterexample.** A root database/ directory is justified if multiple independently deployed applications jointly own one schema and there is a clearly named migration authority. At present that would be a false statement: it would imply shared ownership before any second owner exists. If that condition arrives, split the database lifecycle deliberately, with a migration owner and an explicit compatibility protocol; do not move files because the tree “looks cleaner.”

**$review implication.** A database migration is not just a changed file. In the protocol, real defects outside ratified scope are routed and kept visible rather than counted as in-scope findings. [C99 scope routing](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:414) Therefore a feature scope that changes persistence must either ratify migration, compatibility, deploy invocation, rollback/restore evidence, and data exposure as one release slice, or deliberately route those risks with a recorded owner. The harness should reject the ambiguity “database excluded” when the code cannot run safely without it.

**Confidence:** High for co-locating a single-owner migration lifecycle; Medium for exact ORM/tool choice; High that destructive migration removal needs a later compatibility gate.

## VPS deployment and infrastructure boundary

Use application-local Dockerfiles and repository-level infrastructure:

~~~
apps/web/Dockerfile
apps/api/Dockerfile
infra/compose/production.compose.yml
infra/vps/deploy.sh
infra/vps/migrate.sh
infra/vps/backup.sh
infra/vps/restore-verify.sh
infra/vps/systemd/                 # only if Compose is not the process supervisor
~~~

This keeps a build context with the application that is built, while keeping environment orchestration and operational policy visible in one place. Docker multi-stage builds support leaving build dependencies out of the final image. [Docker multi-stage builds](https://docs.docker.com/build/building/multi-stage/) Docker's production Compose guidance is relevant for defining production services, but it does not replace a project-specific migration, backup, restore, and image-pinning policy. [Docker Compose production](https://docs.docker.com/compose/how-tos/production/)

Initial VPS rules:

- Build immutable images in CI and deploy by image digest or immutable tag, never an unqualified latest tag.
- Keep secrets outside Git and outside images. Commit an example environment schema, not credentials.
- Run the migration job exactly once per deployment under a lock. Do not let every API replica race migrations.
- Capture the deployed commit SHA, image digest, migration version, and smoke-test result as a deployment receipt.
- Test backup restore into an isolated target before treating backup as protection.
- Treat rollback after a destructive migration as a recovery plan, not an assumption. Expand/contract changes preserve rollback room.

**Counterexample.** A single VPS and a single API container can make this look overly formal. But the smallest production failure usually occurs at the seam: a new container expects a migration that did not run, a tag moves, a secret differs, or a backup is unreadable. The listed files can remain short; their value is that the operational contract is reviewable. Do not add Terraform, Kubernetes, a secrets platform, or a multi-host deployment system until a real provider/scale requirement exists.

**$review implication.** The protocol's close phase assigns distinct ownership to roadmap, changelog, decisions, constraints, and runbook material, and validates freshness before it records completion. [close ownership and preflight](/Users/aharoj/.skills/review-protocol/protocol.md:1139) For this project, a deployment receipt should be an application evidence artifact, not an attempt to copy or replace those $review records. The future harness should ask: “What proves the deployed code, migration, and health check refer to the same release slice?” That is an inference from the protocol's evidence-first close discipline, not a claim that it currently has a VPS adapter.

**Confidence:** Medium to High. The principles are mature; exact provider scripts must wait for the chosen VPS and runtime.

## CI boundaries: optimize paths, do not outsource correctness to paths

Suggested CI lanes after scaffolding:

| Lane | Trigger | Required evidence |
|---|---|---|
| Fast graph lane | every change | frozen install, lint, typecheck, unit tests, build, contract freshness |
| API/data seam lane | changes to api, contracts, migrations, or task configuration | ephemeral database migration, API integration tests, contract compatibility |
| End-to-end lane | merge to main, deploy candidate, or manually targeted seam change | browser/API/database journey, artifact and trace retention |
| Deployment lane | approved release | immutable image, one migration operation, post-deploy smoke check, receipt |
| Nightly or scheduled reliability lane | later, after a stable base exists | selective migration rehearsal, backup/restore drill, replay of known defect paths |

GitHub warns that path filtering can leave required checks pending in some workflow configurations, and that the workflow filters have limits. [GitHub Actions workflow syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax) Use changed paths to choose extra work, not as the sole source of “this change is safe.” A root task-graph check should still run for every meaningful pull request.

**Counterexample.** Running full end-to-end and restore tests on every documentation-only change wastes time and erodes trust in CI. The answer is a layered evidence policy, not one binary workflow. The fast lane is universal; more expensive seam checks are selected by declared graph and risk, with a manual override.

**$review implication.** $review distinguishes a detection-surfacing claim from proof of semantic correctness or good-faith execution. [C46 bounded claim](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:124) CI receipts likewise prove a named command and artifact relationship, not that the requirements are complete. A future audit should inspect the test selection rule, task inputs, and receipt rather than treating a green badge as a semantic verdict.

**Confidence:** High for layered CI and path-filter caution; Medium for the exact lane thresholds until the framework and test durations exist.

## How this architecture becomes a $review tuning vehicle

The intended outcome is not “use more agents.” It is a product repository whose boundaries produce sharp, inspectable review questions. The local protocol already has a two-phase research-then-implementation cycle, deterministic file-state routing, a blind first audit, durable resolve ledgers, and a close procedure. [two-phase cycle](/Users/aharoj/.skills/review-protocol/protocol.md:132) [blind R1](/Users/aharoj/.skills/review-protocol/protocol.md:897) [resolve procedure](/Users/aharoj/.skills/review-protocol/protocol.md:939)

For each portfolio change, define a release slice before code is reviewed:

| Change type | Minimum release slice to ratify | Review failure it makes visible |
|---|---|---|
| UI-only behavior | web module, user-facing test, public behavior note | hidden client-state or accessibility regression |
| API behavior | API module, contracts, API tests, web consumer if public | server/client contract drift |
| Persistence change | API module, migration, compatibility plan, integration test, deployment migration invocation | code works locally but fails on existing production data |
| Build/tooling change | workspace manifest, lockfile, task graph, affected outputs | stale cache or undeclared dependency |
| Deployment change | image build, infra operation, migration/health receipt | deployed artifact differs from reviewed artifact |

This table is a proposed project convention. It draws on the local protocol's requirement to scope source, tests, tightly coupled dependencies, build configuration, and exclusions before audit. [implementation scope](/Users/aharoj/.skills/review-protocol/protocol.md:844) It also follows its requirement to route a real out-of-scope defect rather than hide it. [C99](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:414)

### Harness experiments worth running on this vehicle

These are experiments, not protocol changes:

1. **Scope completeness replay.** Before a feature begins, write the expected release-slice members. At resolve, compare actual touched boundary files and CI evidence with that declaration. Count missed contracts, migrations, task definitions, or deploy material.
2. **Blind-versus-informed R1 comparison.** Preserve the protocol's blind R1 rule. For a small set of seeded, reversible defects, compare discovery quality only after the fact; do not put expected findings in the R1 intake. The rule against anchoring is locally grounded in C55. [C55](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:141)
3. **Evidence receipt audit.** Deliberately alter a task input, generated contract, migration order, or deploy digest in a disposable branch and determine whether the review and CI evidence identify the mismatch.
4. **Out-of-scope routing test.** Seed a real defect outside a ratified slice and verify it remains visible, routed, and does not silently expand the current change. This exercises C99 rather than rewarding scope creep. [C99](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:414)
5. **Close replay.** Re-run a completed change from durable files only and measure whether a fresh session can identify what changed, why it is safe, what remained deferred, and what receipt proves deployment.

The protocol's own tree-standardization run rejected unconsumed machinery and kept .index/ optional/non-authoritative until a real consumer and recorded browsing pain exist. [tree taxonomy runbook](/Users/aharoj/.skills/review-protocol/reviews/archive/v3.41-v3.50/runbook/tree-taxonomy-standardization.md:1) Apply the same rule here: do not add a review dashboard, an index, or an autonomous repair loop until a measured portfolio review failure has a named consumer.

**Counterexample.** A test vehicle can become artificial if it is designed only to flatter the harness. Avoid that by building a real portfolio with normal product decisions and recording a small number of predeclared experiments around its genuine seams. If the project contains only synthetic bugs, results will not transfer even to this portfolio.

**Confidence:** Medium. The protocol supports the relevant mechanics; whether these experiments improve it must be measured locally.

## Frontier: 2026 evidence, and what is still speculation

The frontier recommendation is conservative: evaluate the evaluator, retain replayable artifacts, and use selective adversarial tests. Do not assume more turns, more models, or a single score automatically improve a review.

| Idea | What current evidence suggests | Portfolio experiment | Status |
|---|---|---|---|
| Review-comment-to-test conversion | c-CRAB studies turning human review comments into tests; this supports testing past review claims rather than trusting prose alone. [c-CRAB](https://arxiv.org/abs/2603.23448) | Convert a small, accepted local finding set into independently authored regression tests. | Frontier experiment; transfer not established |
| Evaluator self-audit | OpenAI's SWE-Bench Pro analysis reports substantial task-quality issues after multi-stage evaluation. [OpenAI: Separating signal from noise](https://openai.com/index/separating-signal-from-noise-coding-evaluations/) | Label ambiguous portfolio tasks and compare review outcome with later reproduction. | Frontier experiment |
| Selective mutation | SWE-ABS reports that coverage/mutation testing can reject patches that initially pass benchmark tests. [SWE-ABS](https://arxiv.org/abs/2603.00520) | Use small reversible mutations against high-risk contract, migration, or authorization claims. | Frontier experiment; not every-run ritual |
| Long-horizon replay | Emerging benchmark work stresses evolving repositories and CI trajectories. [SWE-CI](https://arxiv.org/abs/2603.03823) [SlopCodeBench](https://arxiv.org/abs/2603.24755) | Keep a versioned local replay corpus of portfolio changes and known escapes. | Frontier experiment |
| Repeated operational runs | Terminal Bench emphasizes versioned benchmark execution and repeated runs. [Terminal Bench](https://github.com/harbor-framework/terminal-bench) | Run selected review replays repeatedly against a fixed commit and report variance. | Frontier experiment |

The mappings above are deliberately not claims about $review behavior. The local connection is only this: $review already retains drafts, intakes, resolve ledgers, constraints, decisions, and runbooks, which provide a better replay substrate than transient chat alone. [directory and SOT rules](/Users/aharoj/.skills/review-protocol/protocol.md:35) The protocol's own C46 warns that structured evidence surfaces skipped/fabricated execution claims but does not prove semantic correctness. [C46](/Users/aharoj/.skills/review-protocol/reviews/constraints.md:124) That makes evaluator self-audit and independent reproduction appropriate experiments, not replacements for the protocol.

There is no observed 2027 evidence as of this report date. Any 2027 claim is prediction. The only responsible forecast is that provenance, replay, scoped mutation, and independent verification are likely to matter more as coding systems gain more authority. Treat each as investigate until it improves a measured local outcome.

## Things explicitly not recommended yet

- No microservices.
- No second repository for frontend or backend.
- No root database/ ownership split.
- No packages/shared or packages/utils catch-all.
- No repository-wide path aliases that bypass package boundaries.
- No Nx, Moon, Bazel, Kubernetes, Terraform, remote cache, or remote review dashboard without a measured need.
- No generated review index or phase sentinel as an authority for $review routing.
- No copy of the $review harness into this portfolio. The project should retain its own evidence under reviews/ when used; the canonical protocol remains external.

The last item has a direct local reason. The protocol says file state is authoritative and makes .index/ non-authoritative, while rejecting an authoritative phase sentinel because it creates a second phase truth. [adoption tiers](/Users/aharoj/.skills/review-protocol/protocol.md:105) [phase-sentinel rationale](/Users/aharoj/.skills/review-protocol/protocol.md:112) The requested docs/research/*.done files are delivery markers for this research, not $review lifecycle state.

## Revisit triggers

Re-open this recommendation when one of these facts appears:

| Trigger | Re-open question | Current verdict |
|---|---|---|
| A second independently deployed application needs the same database | Who owns migrations and cross-app compatibility? | Investigate; do not pre-split |
| A public external API/client must be supported | Is OpenAPI-first preferable to schema-first contracts? | Investigate |
| More than two deployable apps or more than three real reusable packages | Is Turborepo's graph sufficient, and do repository boundaries need another tool? | Investigate |
| Review artifacts exceed roughly 100 topics and recorded browsing pain exists | Is a non-authoritative generated index worth adding? | Follow the local protocol's existing threshold/rationale; investigate at trigger. [index rule](/Users/aharoj/.skills/review-protocol/protocol.md:111) |
| A reproducible cache, migration, contract, or deploy escape happens | Which receipt or scope rule failed, and can a selective harness experiment detect it? | Open a focused $review topic |
| Real production scale, compliance, provider, or team-boundary requirements arrive | Does the current VPS/Compose posture still fit? | Investigate with concrete constraints |

## Final recommendation

Plan for:

1. apps/web and apps/api as the two deployable leaves;
2. packages/contracts as the first intentional shared boundary, created only with the first real API contract;
3. apps/api/db as the initial migration owner;
4. infra/ as environment and VPS operation material;
5. pnpm workspace plus explicit dependency graph, with Turborepo when the first full-stack graph warrants it;
6. layered CI and a deployment receipt that binds commit, image, migration, and smoke test;
7. a future reviews/ root for project-local $review evidence, without cloning or competing with the canonical harness.

This is the strongest structure for the stated portfolio because it makes the risky seams finite and visible: contract, migration, task graph, deploy artifact, and evidence close. It is not a claim that it remains optimal after the project has more than one database owner, deployment boundary, or organizational boundary. Those are deliberate re-open triggers, not problems to solve in advance.

