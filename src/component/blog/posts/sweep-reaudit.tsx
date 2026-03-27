// path: src/component/blog/posts/sweep-reaudit.tsx

export default function SweepReauditPost() {
  return (
    <>
      {/* ── Opening ── */}
      <section>
        <p className="text-muted leading-relaxed mb-4">
          Five days ago, we ran our multi-model review pipeline against a
          production Spring Boot module. It found 82 findings. It took hours to
          triage. More than half were wrong.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          We ranked #1 in raw detection &mdash; catching bugs no other model
          found. And dead last in practical quality. The output was unusable.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          So we fixed the pipeline. Not the findings &mdash; the machine that
          produces them. Then we ran it again. Same artifact. Same reviewers.
          Same lead model. The only difference: fifteen versions of pipeline
          improvements.
        </p>
        <p className="font-mono text-sm text-fg">
          82 &rarr; 28 findings. $0.20 &rarr; $0.10. 3.5/5 &rarr; 4/5 ground
          truth hits.
        </p>
      </section>

      {/* ── The experiment ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The experiment
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The setup is identical to the original blind audit. A Spring Boot
          backend module &mdash; ~600 lines of Java across 18 files. Student
          management for a veterinary school. OAuth2, JPA, CSV import/export,
          search. Real production code with real users.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          A separate CC session planted five hidden bugs as ground truth. Issue
          #1 (CSV injection) through Issue #5 (missing @NotNull). Two of those
          bugs &mdash; search term lowercasing and CRLF log injection &mdash;
          had never been found by any budget model at any price point across
          eleven passes.
        </p>
        <p className="text-muted leading-relaxed">
          Four budget reviewers. Four passes. One premium frontier-model pass.
          Total cost: ten cents.
        </p>
      </section>

      {/* ── The numbers ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Before and after
        </h2>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Metric
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v1.9 (7 passes)
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v2.33 (4+premium)
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Delta
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Total adopted</td>
                <td className="py-2 px-4 text-fg font-mono text-right">82</td>
                <td className="py-2 px-4 text-fg font-mono text-right">28</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  -66%
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Ground truth</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  3.5 / 5
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  4 / 5
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  +0.5
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Total cost</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.20
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.10
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  -50%
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
                  clean decay
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Duplicates</td>
                <td className="py-2 px-4 text-fg font-mono text-right">~34</td>
                <td className="py-2 px-4 text-fg font-mono text-right">10</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  -71%
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">Triageable?</td>
                <td className="py-2 px-4 text-fg font-mono text-right">no</td>
                <td className="py-2 px-4 text-fg font-mono text-right">yes</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  &mdash;
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          Less output. Better detection. Half the cost. The pipeline went from
          &ldquo;raw detection king but untriageable&rdquo; to &ldquo;strong
          detection and actionable output.&rdquo;
        </p>
      </section>

      {/* ── The bug that broke the ceiling ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The bug that broke the ceiling
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Issue #4: CRLF log injection. An attacker sends{" "}
          <span className="font-mono text-fg text-sm">%0d%0a</span> in a
          request parameter. The exception handler interpolates it into an SLF4J
          log message. The attacker forges log entries.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          No budget model had ever found this. Not in seven passes. Not in
          eleven. It requires knowing that SLF4J doesn&apos;t sanitize control
          characters, that CRLF injection is a specific OWASP category, and that
          the attack path runs from user input through exception handling to log
          output.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          In v2.29, we added a security cheat sheet to the reviewer prompt. Six
          lines. It lists rare-but-critical vulnerability patterns matched to the
          detected tech stack. For Java:{" "}
          <span className="font-mono text-fg text-sm">
            Log injection / CRLF: untrusted text written to logs
          </span>
          .
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Pass 4, Grok found it. Verified by the post-triage gate. Rated P2.
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            Recall is hard. Recognition is easy.
          </p>
          <p className="font-mono text-xs text-muted leading-relaxed text-center mt-1">
            The cheat sheet doesn&apos;t teach the model. It primes the pattern
            in working memory.
          </p>
        </div>

        <p className="text-muted leading-relaxed">
          This is the difference between asking a model &ldquo;find all security
          bugs&rdquo; and asking &ldquo;look for this specific pattern in this
          code.&rdquo; Budget models have the knowledge. They lack the
          retrieval. Six lines of prompt engineering turned a zero-percent
          detection rate into a confirmed find.
        </p>
      </section>

      {/* ── The bug that didn't break ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The one that got away
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Issue #3: the search service doesn&apos;t lowercase the search term.
          The controller does. But if anything else calls the service directly,
          case-sensitive LIKE queries miss results.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Finding this requires imagining a caller that doesn&apos;t exist yet.
          Four hops: read the controller, see the lowering, read the service,
          see it&apos;s missing, imagine a future caller, conclude the defense
          is in the wrong place. Per our research, budget models have ~0.8%
          per-pass probability on this. Even across 16 independent attempts,
          cumulative probability is ~12%.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The premium pass (GPT-4o) didn&apos;t find it either. It flagged SQL
          injection in the same method &mdash; right neighborhood, wrong bug.
          The escalation system correctly directed premium attention toward the
          search service, but the model diagnosed the wrong vulnerability.
        </p>
        <p className="text-muted leading-relaxed">
          This is the capability ceiling. Not a pipeline problem. Not a prompt
          problem. A reasoning depth problem that no model at any price point
          reliably solves. The research says so. The data confirms it.
        </p>
      </section>

      {/* ── What actually moved the needle ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What actually moved the needle
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Fifteen versions of pipeline improvements between the two runs. Here
          is what mattered, ranked by impact:
        </p>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Output budget + singleton filter
            </h3>
            <p className="text-muted leading-relaxed">
              Cap adopted findings per pass. Filter unverified singletons.
              This alone took 82 &rarr; ~35. The biggest quality-of-life
              change. The pipeline had signal buried in noise &mdash; the
              budget models were finding real bugs, but 50 false positives
              made them invisible.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Security cheat sheet
            </h3>
            <p className="text-muted leading-relaxed">
              Six lines of prompt. One ground truth hit. The highest
              impact-per-token feature in the entire pipeline. Transforms
              recall into recognition for niche attack patterns.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Cross-pass dedup
            </h3>
            <p className="text-muted leading-relaxed">
              The original run oscillated: 29 &rarr; 7 &rarr; 14 &rarr; 5
              &rarr; 3 &rarr; 11 &rarr; 13. Passes 6 and 7 re-discovered
              old bugs. Cross-pass dedup killed the oscillation. The decay is
              now monotonic: 15 &rarr; 5 &rarr; 6 &rarr; 2.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight mb-1">
              Escalation hybrid
            </h3>
            <p className="text-muted leading-relaxed">
              Budget reviewers can now say &ldquo;I see something suspicious
              but can&apos;t prove it.&rdquo; Three escalation candidates fed
              into the premium pass coverage memo, directing the frontier
              model toward MeController auth and CSV seeder concurrency. The
              system captures intuition that would otherwise vanish.
            </p>
          </div>
        </div>
      </section>

      {/* ── The hidden insight ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The hidden insight
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Gemini Flash-Lite went from 16% signal to 39% signal. Same model.
          Same prompts. Same artifact. The model didn&apos;t get better. The
          pipeline got better at extracting what was already there.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          This is the thesis playing out in data. Budget models have signal.
          They find real bugs. They also produce enormous amounts of noise.
          The original pipeline couldn&apos;t separate the two. The new
          pipeline can.
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            The models were never the bottleneck. The pipeline was.
          </p>
        </div>

        <p className="text-muted leading-relaxed">
          When Gemini-lite fires 25 findings and 4 are real, the question is
          not &ldquo;why is Gemini-lite so noisy?&rdquo; The question is
          &ldquo;why is the triage pipeline adopting the other 21?&rdquo; Fix
          the pipeline, and the model you thought was your weakest reviewer
          becomes your most improved.
        </p>
      </section>

      {/* ── The convergence question ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Convergence
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The original run never converged. Seven passes. Bayesian
          P(zero&nbsp;next&nbsp;pass) stuck at 0.1%. The pipeline kept
          re-discovering the same bugs with different wording.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The v2.33 run shows clean decay: 15 &rarr; 5 &rarr; 6 &rarr; 2.
          Chapman capture-recapture estimates 95% coverage after four passes.
          The Bayesian gate reached 3% &mdash; still below the 80% threshold,
          but trending in the right direction. Two more passes would likely
          cross it.
        </p>
        <p className="text-muted leading-relaxed">
          The pipeline can now answer the question &ldquo;when do I
          stop?&rdquo; Not perfectly. But better than &ldquo;never.&rdquo;
        </p>
      </section>

      {/* ── Closing ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What this means
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Five days. Fifteen versions. One controlled experiment. The pipeline
          went from a research prototype that produced unusable output to a
          tool that finds 80% of planted bugs at ten cents and produces a
          reviewable report.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The one bug it can&apos;t find requires reasoning about code that
          doesn&apos;t exist yet. That&apos;s not a pipeline problem. That&apos;s
          a frontier of AI capability. Every model, at every price point,
          misses it. Including the premium ones.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Everything else &mdash; the pattern matching, the data flow tracing,
          the security recognition, the severity calibration &mdash; budget
          models can do it. They just need a pipeline that knows how to listen.
        </p>
        <p className="font-mono text-sm text-fg">
          Budget models have signal. Build a pipeline that extracts it.
        </p>
      </section>
    </>
  );
}
