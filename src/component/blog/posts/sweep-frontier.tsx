// path: src/component/blog/posts/sweep-frontier.tsx

export default function SweepFrontierPost() {
  return (
    <>
      {/* ── Opening ── */}
      <section>
        <p className="text-muted leading-relaxed mb-4">
          There is a bug that no model can find. Not budget models. Not frontier
          models. Not ensembles of either. We know exactly what it is, exactly
          why it&apos;s hard, and exactly how hard &mdash; 0.8% per-pass
          probability, confirmed across 40+ independent attempts.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          So we built a system to find it anyway. Not by making models smarter,
          but by changing what we ask them to do. DefenseMap. Variant C+
          counterfactual probes. Coverage gap detection. A canary benchmark to
          measure it all. Four months of research, three rounds of
          cross-validation, and 2,033 regression tests.
        </p>
        <p className="font-mono text-sm text-fg">
          Then we ran the pipeline against the same code, four times, across
          four pipeline versions. Same artifact. Same reviewers. Same planted
          bugs. Only the pipeline changed.
        </p>
      </section>

      {/* ── The capability ceiling ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The capability ceiling
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          A Spring Boot backend module. 600 lines of Java across 18 files.
          Student management for a veterinary school. OAuth2, JPA, CSV
          import/export, search. Real production code with real users.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Five bugs planted as ground truth. Three are pattern-matching problems
          that any model can find: CSV formula injection, null cohort year,
          missing annotation. Two are not.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Issue #3: the search service doesn&apos;t lowercase the search term.
          The controller does. But if anything else calls the service directly,
          case-sensitive LIKE queries miss results. Finding this requires four
          hops: read the controller, see the lowering, read the service, see
          it&apos;s missing, imagine a caller that doesn&apos;t exist yet.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Issue #4: CRLF log injection. The exception handler interpolates user
          input into SLF4J log messages. An attacker sends{" "}
          <span className="font-mono text-fg text-sm">%0d%0a</span> in a
          request parameter and forges log entries. Finding this requires
          knowing that SLF4J doesn&apos;t sanitize control characters &mdash; a
          niche OWASP pattern that lives in the long tail of training data.
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            Multi-hop reasoning amplifies capability gaps exponentially.
          </p>
          <p className="font-mono text-xs text-muted leading-relaxed text-center mt-1">
            Per-step p=0.7 vs p=0.3 &rarr; 4-hop: 24% vs 0.8%. A 2.3x gap
            becomes 30x.
          </p>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          This is why model upgrades don&apos;t fix multi-hop bugs. The gap
          isn&apos;t additive. It&apos;s multiplicative.
        </p>

        <p className="text-muted leading-relaxed">
          This is the finding from our research, cross-validated by six
          independent web LLMs across two rounds. Budget models have
          approximately 0.8% per-pass probability on issue #3. Even across 16
          independent attempts, cumulative probability is roughly 12%. The
          capability ceiling is real, and more passes won&apos;t break it.
        </p>
      </section>

      {/* ── The architecture ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What we built
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Four stages. Each one exists because a specific failure mode
          killed findings in production. None requires a smarter model.
        </p>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Phase 0: DefenseMap
            </h3>
            <p className="text-muted leading-relaxed">
              Static analysis. No API calls. Regex-based extraction of
              caller-callee relationships across 10 languages. For each public
              method, identifies where input defenses live &mdash; validation,
              normalization, auth checks. If the defense is only in callers but
              not in the method itself, it&apos;s a candidate for CWE-602
              (server-side enforcement failure). 1,022 lines. 99 tests. 11
              rounds of adversarial cross-review. 37 bugs found and fixed.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Phase 0.5: Variant C+ counterfactual probes
            </h3>
            <p className="text-muted leading-relaxed">
              Takes DefenseMap candidates and asks a budget model: &ldquo;here
              is a method with the caller&apos;s defense removed. Is this
              vulnerable?&rdquo; The model doesn&apos;t need multi-hop reasoning
              because we&apos;ve already done the decomposition. It just needs
              to recognize a vulnerability in the code in front of it.
              Recognition, not recall. 621 lines. 41 tests. 6 rounds. 26 bugs
              fixed.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Coverage gaps + premium escalation
            </h3>
            <p className="text-muted leading-relaxed">
              After budget passes converge, the system generates a coverage memo
              from counterfactual verdicts &mdash; specific code regions that
              remain unexamined. Escalation candidates from budget reviewers
              (&ldquo;I see something suspicious but can&apos;t prove it&rdquo;)
              feed into the memo. A frontier model gets one shot at the gaps.
              Focused, not open-ended.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Canary benchmark
            </h3>
            <p className="text-muted leading-relaxed">
              60 hand-crafted code examples across 6 categories and 13 defense
              kinds. Java, Python, JavaScript, Go. Each example has ground truth
              for DefenseMap detection, counterfactual verdict, and budget
              reviewer detection. Dry-run mode costs nothing. Live mode probes
              20 candidates for four cents.
            </p>
          </div>
        </div>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Component
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Lines
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Tests
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Review rounds
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Bugs fixed
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">DefenseMap</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  1,022
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">99</td>
                <td className="py-2 px-4 text-fg font-mono text-right">11</td>
                <td className="py-2 px-4 text-fg font-mono text-right">37</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Counterfactual</td>
                <td className="py-2 px-4 text-fg font-mono text-right">621</td>
                <td className="py-2 px-4 text-fg font-mono text-right">41</td>
                <td className="py-2 px-4 text-fg font-mono text-right">6</td>
                <td className="py-2 px-4 text-fg font-mono text-right">26</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Coverage gaps</td>
                <td className="py-2 px-4 text-fg font-mono text-right">340</td>
                <td className="py-2 px-4 text-fg font-mono text-right">17</td>
                <td className="py-2 px-4 text-fg font-mono text-right">3</td>
                <td className="py-2 px-4 text-fg font-mono text-right">10</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">Canary benchmark</td>
                <td className="py-2 px-4 text-fg font-mono text-right">293</td>
                <td className="py-2 px-4 text-fg font-mono text-right">20</td>
                <td className="py-2 px-4 text-fg font-mono text-right">5</td>
                <td className="py-2 px-4 text-fg font-mono text-right">18</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          25 rounds of adversarial cross-review across all four components. 91
          bugs found before any of this code shipped. Each round: five
          independent web LLMs review the code, findings synthesized, bugs
          fixed, repeat until every model says &ldquo;clean.&rdquo;
        </p>
      </section>

      {/* ── The controlled experiment ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Four versions, one artifact
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Same Spring Boot module. Same four budget reviewers. Same five planted
          bugs. Same four passes. The only variable: the pipeline version.
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Metric
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v1.9
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v2.33
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v3
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v2.37
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Total adopted</td>
                <td className="py-2 px-4 text-fg font-mono text-right">52</td>
                <td className="py-2 px-4 text-fg font-mono text-right">28</td>
                <td className="py-2 px-4 text-fg font-mono text-right">37</td>
                <td className="py-2 px-4 text-fg font-mono text-right">26</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Ground truth</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  2 / 5
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  2 / 5
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  2 / 5
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  2 / 5
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Total cost</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.112
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.097
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.122
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.105
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Convergence</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  never
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  15 &rarr; 5 &rarr; 6 &rarr; 2
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  15 &rarr; 8 &rarr; 8 &rarr; 6
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  7 &rarr; 11 &rarr; 7 &rarr; 1
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">Pass 4 adopt rate</td>
                <td className="py-2 px-4 text-fg font-mono text-right">32%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">6%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">8%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">3%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          v1.9 got worse with every pass. Adopt rate climbed &mdash;
          9&nbsp;&rarr;&nbsp;12&nbsp;&rarr;&nbsp;15&nbsp;&rarr;&nbsp;16
          &mdash; because the pipeline couldn&apos;t tell the difference
          between a new bug and an old bug with new wording. More compute,
          more noise. 52 adopted findings, most of them duplicates the
          pipeline couldn&apos;t recognize.
        </p>
        <p className="text-muted leading-relaxed">
          v2.37 converges to near-zero. One adoption in the final pass at 3%.
          The pipeline stopped finding new things because there was nothing
          new to find. 26 findings total, and every one that matters from v1.9
          is still in there.
        </p>
      </section>

      {/* ── Ground truth ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The ground truth wall
        </h2>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Bug
                </th>
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Type
                </th>
                <th className="py-2 px-4 text-center text-muted font-normal">
                  v1.9
                </th>
                <th className="py-2 px-4 text-center text-muted font-normal">
                  v2.33
                </th>
                <th className="py-2 px-4 text-center text-muted font-normal">
                  v3
                </th>
                <th className="py-2 px-4 text-center text-muted font-normal">
                  v2.37
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">#1 CSV injection</td>
                <td className="py-2 px-4 text-muted">Pattern</td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  HIT
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  HIT
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  HIT
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  HIT
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">#2 Null cohort year</td>
                <td className="py-2 px-4 text-muted">Data flow</td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  HIT
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  HIT
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  HIT
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  HIT
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">#3 Search lowercasing</td>
                <td className="py-2 px-4 text-muted">Multi-hop</td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  &mdash;
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  &mdash;
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  &mdash;
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  &mdash;
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">#4 CRLF log injection</td>
                <td className="py-2 px-4 text-muted">Domain</td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  &mdash;
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  &mdash;
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  &mdash;
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  &mdash;
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">#5 Missing @NotNull</td>
                <td className="py-2 px-4 text-muted">Pattern</td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  &mdash;
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  &mdash;
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  &mdash;
                </td>
                <td className="py-2 px-4 text-fg font-mono text-center">
                  &mdash;
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          2/5 across all four versions. The ceiling doesn&apos;t move.
          Pipeline improvements reduce noise, improve convergence, cut false
          positives &mdash; but no amount of prompt engineering makes a budget
          model reason about code that doesn&apos;t exist yet.
        </p>
        <p className="text-muted leading-relaxed">
          This is why we built DefenseMap and counterfactual probes. They
          convert the multi-hop problem into a series of single-hop questions
          that budget models can answer. The pipeline version that ran this
          experiment didn&apos;t have those features enabled for this artifact
          &mdash; they target code structure that requires explicit opt-in. The
          next experiment will.
        </p>
      </section>

      {/* ── What the numbers actually show ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What the numbers actually show
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The ground truth didn&apos;t improve. But everything else did.
        </p>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Signal-to-noise: 52 &rarr; 26
            </h3>
            <p className="text-muted leading-relaxed">
              Half the findings, same ground truth coverage. v1.9 produced 52
              adopted findings because it couldn&apos;t distinguish real bugs
              from noise. v2.37 produces 26 because singleton filtering,
              output budget caps, and cross-pass dedup remove low-value
              findings before they reach the changelog. The signal was always
              there. The noise is gone.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Convergence: never &rarr; pass 4
            </h3>
            <p className="text-muted leading-relaxed">
              v1.9&apos;s adopt rate increased each pass:
              24%&nbsp;&rarr;&nbsp;21%&nbsp;&rarr;&nbsp;30%&nbsp;&rarr;&nbsp;32%.
              It was finding the same bugs with different wording. v2.37
              decays to 3% by pass 4 &mdash; textbook convergence. The
              pipeline can now answer &ldquo;when do I stop?&rdquo;
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Verification: 0% &rarr; 86%
            </h3>
            <p className="text-muted leading-relaxed">
              v1.9 had no verification gate. Every finding the lead adopted was
              taken at face value. v2.37 verifies every P0-P2 finding against
              the artifact. 25 of 26 adopted findings are verified. The one
              that isn&apos;t is flagged for human decision.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Cost: flat
            </h3>
            <p className="text-muted leading-relaxed">
              $0.112 (v1.9) vs $0.105 (v2.37). Verification, singleton
              filtering, cross-pass dedup, escalation detection &mdash; all
              essentially free. Quality filters add marginal tokens but remove
              findings that would otherwise cost human review time.
            </p>
          </div>
        </div>
      </section>

      {/* ── The research arc ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The research arc
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Three independent research questions. Each one cross-validated by
          six web LLMs that had never seen the codebase.
        </p>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Capability frontier
            </h3>
            <p className="text-muted leading-relaxed">
              Budget models follow a probability gradient, not a hard threshold.
              Multi-hop chain probability amplifies small per-step gaps
              exponentially. The research confirmed: issue #3 isn&apos;t
              unfindable &mdash; it needs ~85 passes for 50% cumulative
              probability. Task decomposition is the fix, not more passes.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Instruction compliance
            </h3>
            <p className="text-muted leading-relaxed">
              LLMs selectively ignore prompt rules during classification. 0%
              compliance on &ldquo;dismiss if depends on external config not in
              artifact&rdquo; &mdash; because positive evidence (the code path
              exists) overrides absence reasoning (the config isn&apos;t here).
              This is a documented NLP failure mode: negation failure. The fix
              is gate fields with code-enforced precedence, not better prompts.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Semantic dedup
            </h3>
            <p className="text-muted leading-relaxed">
              Per-pass dedup catches 25-33% of semantic duplicates. The other
              67-75% requires cross-pass consolidation with embedding-based
              clustering. Production data from the blind audit: 82 adopted
              findings contained 6 duplicate clusters with low lexical overlap
              but high semantic similarity. One finding with six locations beats
              six findings with the same root cause &mdash; alarm fatigue
              research says so.
            </p>
          </div>
        </div>
      </section>

      {/* ── The adversarial audit ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          91 bugs before shipping
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Every new component went through multi-model adversarial review
          before merging. Not just tests. Not just code review. Five
          independent web LLMs hunting for bugs the author and the test suite
          missed, round after round, until every model says
          &ldquo;clean.&rdquo;
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Component
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Rounds
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Bugs
                </th>
                <th className="py-2 px-4 text-left text-muted font-normal pl-6">
                  Worst bug
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">DefenseMap</td>
                <td className="py-2 px-4 text-fg font-mono text-right">11</td>
                <td className="py-2 px-4 text-fg font-mono text-right">37</td>
                <td className="py-2 px-4 text-muted pl-6">
                  JS regex matched plain calls as declarations
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Counterfactual</td>
                <td className="py-2 px-4 text-fg font-mono text-right">6</td>
                <td className="py-2 px-4 text-fg font-mono text-right">26</td>
                <td className="py-2 px-4 text-muted pl-6">
                  Findings never saved to disk (P0)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Coverage gaps</td>
                <td className="py-2 px-4 text-fg font-mono text-right">3</td>
                <td className="py-2 px-4 text-fg font-mono text-right">10</td>
                <td className="py-2 px-4 text-muted pl-6">
                  Unsanitized defense_kind in artifact text
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">Canary benchmark</td>
                <td className="py-2 px-4 text-fg font-mono text-right">5</td>
                <td className="py-2 px-4 text-fg font-mono text-right">18</td>
                <td className="py-2 px-4 text-muted pl-6">
                  Counterfactual probing with defense still present
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          The thesis proving itself. ChatGPT found bugs Claude missed. Gemini
          found bugs ChatGPT missed. No single model catches everything.
          The best reviewer is five reviewers who disagree.
        </p>
      </section>

      {/* ── The eval baseline ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The eval baseline
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          We also ran v2.37 against itself &mdash; an 87K-token deep
          architectural review of the pipeline&apos;s own source code. The
          tool reviewing its own codebase. Same artifact used in v20 and v25
          baselines.
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Metric
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v20
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v25
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v26
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Eval cases</td>
                <td className="py-2 px-4 text-fg font-mono text-right">90</td>
                <td className="py-2 px-4 text-fg font-mono text-right">138</td>
                <td className="py-2 px-4 text-fg font-mono text-right">205</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Pass rate</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  100%
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  100%
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  100%
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P1 precision</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  100%
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  100%
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  100%
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">QWK</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  1.000
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  1.000
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  1.000
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Adopted</td>
                <td className="py-2 px-4 text-fg font-mono text-right">69</td>
                <td className="py-2 px-4 text-fg font-mono text-right">40</td>
                <td className="py-2 px-4 text-fg font-mono text-right">25</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Verification rate</td>
                <td className="py-2 px-4 text-fg font-mono text-right">49%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">52%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">93%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">Cost</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.143
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.136
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.144
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          Verification rate jumped from 52% to 93%. Perfect QWK maintained.
          Adopted findings dropped 69&nbsp;&rarr;&nbsp;25 &mdash; not because
          the pipeline got worse, but because the codebase has 400+ fewer bugs
          to find. Cost unchanged. The pipeline produces less output, but
          almost every finding it produces is verified.
        </p>
      </section>

      {/* ── Closing ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Where we are
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          2,033 tests. 127 known design constraints. 400+ bugs fixed across 97
          rounds of adversarial review. A canary benchmark with 60 ground truth
          examples. An eval harness with 205 golden cases and perfect
          calibration.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The pipeline went from a research prototype that produced 52 findings
          and never converged to a tool that produces 26 verified findings and
          stops when it should. Same models. Same cost. Different pipeline.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The capability ceiling is still there. 2/5 ground truth, unchanged
          across four versions. No pipeline version moved it. But we know
          exactly where it is, exactly why it exists, and the next experiment
          has the tools the previous four didn&apos;t. DefenseMap decomposes
          the multi-hop problem. Counterfactual probes turn recall into
          recognition.
        </p>
        <p className="font-mono text-sm text-fg">
          The models were never the bottleneck. The pipeline was. Now the
          pipeline is ready, and the ceiling is the next problem to solve.
        </p>
      </section>
    </>
  );
}
