// path: src/component/blog/posts/sweep-shipped.tsx

export default function SweepShippedPost() {
  return (
    <>
      {/* ── Opening ── */}
      <section>
        <p className="text-muted leading-relaxed mb-4">
          The theory post ended with a table. Nine research-backed improvements,
          each citing the same literature across four independent LLMs. Estimated
          effort: five under 100 lines, two config changes, one new module. The
          closing line: &ldquo;The same problem Sweep was built to solve.&rdquo;
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Four days later, all nine are shipped. Plus fourteen more things the
          research didn&apos;t predict we&apos;d need.
        </p>
        <p className="font-mono text-sm text-fg">
          Nine for nine. Then we kept going.
        </p>
      </section>

      {/* ── The scorecard ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The scorecard
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Every item from &ldquo;What the research says to build next.&rdquo;
          Estimated effort vs. actual delivery.
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Improvement
                </th>
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Source
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Est. effort
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Shipped in
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Capture-recapture coverage
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Briand et al., 2006
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~30 LOC
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  v2.0
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">flock() locking</td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  POSIX, kernel-managed
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~30 min
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  v2.0
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  TypeAdapter boundary validation
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  King, 2019
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~3 hrs
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  v2.0
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  P1 precision threshold 0.8
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Alarm fatigue research
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  config change
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  v2.0
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Per-finding normalization fallthrough
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Viola-Jones cascade
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~2 hrs
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  v2.0
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Per-reviewer weighted triage
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Dawid &amp; Skene, 1979
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~100 LOC
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  v2.0
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Style normalization before triage
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Wataoka et al., 2025
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  medium
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  v2.0
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  PR comment integration
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Sadowski et al., 2018
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  new module
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  v2.5
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">
                  Severity-weighted convergence
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Green Fuzzing, 2023
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~15 LOC
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  v2.0
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          Eight shipped in v2.0. The ninth &mdash; PR comment integration
          &mdash; required a new module and landed in v2.5. Every estimate was
          in the right ballpark. The research did its job.
        </p>
      </section>

      {/* ── What we shipped beyond the list ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What we shipped beyond the list
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The nine items were the research-backed minimum. What actually shipped
          across ten versions:
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Version
                </th>
                <th className="py-2 px-4 text-left text-muted font-normal">
                  What shipped
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono">v2.0</td>
                <td className="py-2 px-4 text-muted">
                  23 research-backed improvements &middot; 856 tests
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono">v2.1</td>
                <td className="py-2 px-4 text-muted">
                  Non-interactive mode for CI and scripting
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono">v2.2</td>
                <td className="py-2 px-4 text-muted">
                  Auto-patch generation via lead model
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono">v2.3</td>
                <td className="py-2 px-4 text-muted">
                  Artifact chunking for large codebases
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono">v2.5</td>
                <td className="py-2 px-4 text-muted">
                  1-hop dependency context &middot; rich-click CLI &middot;
                  circuit breaker
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono">v2.6</td>
                <td className="py-2 px-4 text-muted">
                  Checkpoint-resume for interrupted auto sessions
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono">v2.8</td>
                <td className="py-2 px-4 text-muted">
                  Bayesian convergence gate &mdash; Chapman estimator with
                  cap/decay
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono">v2.9</td>
                <td className="py-2 px-4 text-muted">
                  Tree-sitter scope detection &mdash; 10 languages, optional
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-fg font-mono">v2.10</td>
                <td className="py-2 px-4 text-muted">
                  14 bug fixes from 5-round adversarial multi-LLM audit
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          The research told us what to build. Production told us what else we
          needed.
        </p>
      </section>

      {/* ── The calibration arc ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The calibration arc
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The first blog post documented a P1 precision of 0%. The verification
          gate brought it to 70%. But the real story is the calibration shift
          across the eval baseline &mdash; from v13 (early pipeline) to v20
          (current).
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Metric
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v13 (early)
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v20 (current)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P0+P1 rate</td>
                <td className="py-2 px-4 text-fg font-mono text-right">62%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">30%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P1 findings adopted</td>
                <td className="py-2 px-4 text-fg font-mono text-right">16</td>
                <td className="py-2 px-4 text-fg font-mono text-right">2</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P1 precision</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  unmeasured
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  100%
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  P2 share (center of gravity)
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">33%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">56%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">Eval QWK</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  &mdash;
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  1.000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          P0+P1 collapsed from 62% to 30%. Not because the pipeline finds fewer
          bugs &mdash; because it stopped over-promoting. P2 became the center of
          gravity. The two remaining P1s are real, both with code-path evidence.
        </p>
        <p className="text-muted leading-relaxed">
          The alarm fatigue research was right. Every false P1 that reaches a
          developer is a withdrawal from a finite trust account. The
          verification gate, the 0.8 precision threshold, the severity-weighted
          convergence &mdash; they exist to protect that account.
        </p>
      </section>

      {/* ── The adversarial audit ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The adversarial audit
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Tree-sitter scope detection (v2.9) was the last major feature. Before
          shipping, it went through five rounds of adversarial multi-LLM code
          review. Eight independent models. Each round: generate intake
          document, feed to web LLMs that have never seen the code, synthesize
          findings, fix, repeat.
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Rounds</td>
                <td className="py-2 px-4 text-fg font-mono text-right">5</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Independent models</td>
                <td className="py-2 px-4 text-fg font-mono text-right">8+</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Bugs found and fixed</td>
                <td className="py-2 px-4 text-fg font-mono text-right">14</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Regression tests added</td>
                <td className="py-2 px-4 text-fg font-mono text-right">20</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">Final round verdict</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  4/4 PASS
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          The pipeline reviewing its own code. Mode 3 behavior validating Mode 3
          enforcement. The bugs were real &mdash; Rust generic type extraction,
          C++ qualified identifiers, Python decorator handling, TSX grammar
          mapping. None were found by the original author or the original review
          session.
        </p>
      </section>

      {/* ── What we killed ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What we killed
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Four proposals, each researched and unanimously rejected. Saying no is
          a feature.
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Proposal
                </th>
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Why it&apos;s wrong
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Selective capability context
                </td>
                <td className="py-2 px-4 text-muted">
                  Destroys Mode 3. Any context injection is a bias vector that
                  anchors reviewers on a capability map.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Adversarial debate mode
                </td>
                <td className="py-2 px-4 text-muted">
                  Selects for articulateness, not correctness. MAD research
                  (ICLR 2025): majority voting accounts for most gains
                  attributed to debate.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Batch API transport</td>
                <td className="py-2 px-4 text-muted">
                  At $0.014/pass, batch saves ~$0.003. Prompt caching already
                  delivers 52%. Engineering complexity exceeds savings.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">
                  Per-provider prompt templates
                </td>
                <td className="py-2 px-4 text-muted">
                  Research consensus: maintainability &gt; marginal quality gain.
                  Descoped to a single thinking_budget config per reviewer.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          Every killed proposal was plausible. Some were requested. All would
          have made the system worse. The hardest engineering decisions are the
          ones where you already have working code and someone asks you to add
          more.
        </p>
      </section>

      {/* ── The numbers ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The numbers
        </h2>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Source lines</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~14,000
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Tests</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  1,121
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Test lines</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~13,700
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Research sessions</td>
                <td className="py-2 px-4 text-fg font-mono text-right">48</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Modules</td>
                <td className="py-2 px-4 text-fg font-mono text-right">15</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Design invariants</td>
                <td className="py-2 px-4 text-fg font-mono text-right">10</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Documented bug fixes</td>
                <td className="py-2 px-4 text-fg font-mono text-right">27+</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Eval baseline</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  v21 &middot; 100% pass &middot; QWK 1.000
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Cost per pass</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.014
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Cost to convergence</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~$0.10
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Cost per adopted finding
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.0021
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">
                  Remaining roadmap items
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  1 (parked)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          Nearly 1:1 ratio of test code to source code. Every design invariant
          has structural enforcement, not just documentation. The eval harness
          runs against golden fixtures created from production triage data.
        </p>
      </section>

      {/* ── What's left ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What&apos;s left
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          One item: Sentence-BERT for the dedup module. It&apos;s parked. The
          lead model handles dedup better than the dedup module ever did &mdash;
          zero catches across four production runs, while the lead correctly
          identified all 75 duplicates during triage. The module stays wired in
          as cheap insurance. If it ever fires, something interesting happened.
        </p>
        <p className="text-muted leading-relaxed">
          The roadmap is empty because the pipeline is feature-complete. Not
          because we ran out of ideas &mdash; because we killed the ones that
          didn&apos;t earn their complexity.
        </p>
      </section>

      {/* ── Closing ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Theory, then execution
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The theory post asked what the literature says about what we already
          built. This post answers: we built what the literature recommended.
          Every item. Then kept going until production stopped asking for more.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The thesis &mdash; Mode 3 behavior enforced structurally, not
          instructionally &mdash; is implemented, tested, and validated by the
          same adversarial multi-model process it was designed to enable. Ten
          design invariants, each preventing a validated failure mode. Forty-eight
          research sessions confirming the architecture was sound before we wrote
          a line of v2.0.
        </p>
        <p className="font-mono text-sm text-fg">
          Persist the state, not the conversation.
        </p>
      </section>
    </>
  );
}
