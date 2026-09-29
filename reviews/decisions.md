# Decisions -- portfolio

## monorepo-structure (2026-09-29)

**Status:** locked by research R1; research-only close pending.

1. Retain root `frontend/` and `backend/` as the initial application locations. Do not introduce `apps/web` and `apps/api` merely for visual hierarchy. Reopen this only when a third deployable appears or a measured ownership, build, deployment, or discovery ambiguity is solved by grouping applications.
2. Do not select pnpm from the empty repository alone. If both real applications are pnpm-managed, use a single root workspace and lockfile; use `workspace:` only for real internal dependencies. Add catalog entries only for intentionally shared versions and add Turborepo only after a documented task-ordering, filtering, or caching need exceeds package-manager scripts.
3. Lock semantic ownership before selecting tools: the API is the sole initial database-semantic and migration owner; environment/VPS operations belong under `infra/` and invoke an API-owned migration interface; public transport contracts never expose ORM, persistence, or UI internals. Exact directory shape, schema authority, migration tool, and whether a contracts package is warranted remain unselected until the first real endpoint and consumer exist.
4. Use one small project-local release-evidence record inside each future `reviews/<topic>/` area. It must identify the reviewed revision, applicable contract/migration/test/CI/artifact/deployment evidence, and an explicit reason for every not-applicable or pending item. It links evidence; it neither copies nor changes canonical `$review` machinery.

**Rationale:** The compiled research intake challenged the prior `apps/` recommendation. Four isolated bounded panel sessions responded; Q1 supported retaining root application names 3–1, and Q2–Q4 converged on conditional, ownership-first decisions. The robust-majority test remains true after removing any one panel response. See `reviews/monorepo-structure/research/monorepo-structure-r1.md`, `reviews/monorepo-structure/intakes/research-r1.md`, and `reviews/monorepo-structure/state/research/resolve-r1.json`.

**Revisit triggers:** a third deployable; a second independent database writer or migration owner; evidence that pnpm is not the selected shared runtime; a real reusable public-contract artifact; measured task-graph duplication/caching need; or a project evidence record that duplicates rather than links durable evidence.
