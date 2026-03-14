// path: src/component/blog/posts/sweep.tsx

export default function SweepPost() {
  return (
    <>
      {/* ── The problem nobody talks about ── */}
      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The problem nobody talks about
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          I spent 30+ iterations on an auth module. Claude, GPT, Grok, Gemini,
          Kimi. Paid tiers, long sessions, hours of back-and-forth. Every
          model agreed the code was clean.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Then I ran it through Sweep.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Five P1 bugs. An infinite login loop. Stale auth roles surviving a
          refresh failure. A token acquisition call missing a parameter that
          would silently break under specific redirect conditions.
        </p>
        <p className="font-mono text-sm text-fg">
          Two passes. $0.098. Under a dime.
        </p>
      </section>

      {/* ── Why individual models miss things ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Why individual models miss things
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          When you iterate with a model, even across separate
          conversations, you&apos;re inside what I call{" "}
          <em>convergence anchoring</em>. The model sees code it or its peers
          helped shape. It pattern-matches against the solution structure it
          already endorsed. It verifies rather than discovers.
        </p>
        <p className="text-muted leading-relaxed">
          Every model has blind spots. The critical insight: they&apos;re not
          the same blind spots.
        </p>
      </section>

      {/* ── What Sweep does differently ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What Sweep does differently
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Sweep sends your code to multiple LLM reviewers in parallel. Each one
          sees the codebase cold. No prior reviews, no conversation
          history, no awareness of who else is reviewing.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          A lead model triages the combined findings: adopt, dismiss, or flag as
          duplicate. Iterative passes run until convergence; when new
          passes stop surfacing new findings.
        </p>
        <p className="text-muted leading-relaxed">
          The architecture is simple. The results aren&apos;t.
        </p>
      </section>

      {/* ── Real runs, real numbers ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Real runs, real numbers
        </h2>

        {/* Run 1 */}
        <h3 className="text-base font-semibold tracking-tight mb-1">
          Run 1: Next.js frontend (6,200 lines)
        </h3>
        <p className="text-sm text-muted mb-4">
          Auth module, CSP headers, accessibility, error handling.
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Passes</td>
                <td className="py-2 px-4 text-fg font-mono text-right">2</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Adopted findings</td>
                <td className="py-2 px-4 text-fg font-mono text-right">47</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P1 bugs</td>
                <td className="py-2 px-4 text-fg font-mono text-right">5</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">Total cost</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.098
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Run 2 */}
        <h3 className="text-base font-semibold tracking-tight mb-1">
          Run 2: Fish shell system (custom CLI)
        </h3>
        <p className="text-sm text-muted mb-4">
          A codebase that had defeated every frontier model individually.
          Claude, GPT, Grok, Gemini, Kimi, each tried in isolation. None
          could fully resolve the issues.
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Passes</td>
                <td className="py-2 px-4 text-fg font-mono text-right">2</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Adopted findings</td>
                <td className="py-2 px-4 text-fg font-mono text-right">86</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P1 bugs</td>
                <td className="py-2 px-4 text-fg font-mono text-right">24</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">Total cost</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.073
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          No single model found all 24 P1s. One caught regex quoting bugs.
          Another caught command substitution splits. A third found path
          traversal. The ensemble covered territory none of them covered alone.
        </p>
        <p className="font-mono text-sm text-fg">Seven cents.</p>
      </section>

      {/* ── Then reality checked ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Then reality checked
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          An external reviewer validated Run 1. Verdict: 0/5 P1s were actual
          bugs. The tool&apos;s biggest weakness was misreading existing code
          by claiming a fix was missing when it was already there.
        </p>
        <p className="text-muted leading-relaxed">
          47 findings. Five P1s. Zero real.
        </p>
      </section>

      {/* ── What broke and what I fixed ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What broke and what I fixed
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          I ran a meta-review: six models independently evaluating
          Sweep&apos;s failure modes, none seeing each other&apos;s output. 6/6
          agreed the P1 precision was trust-destroying. 5/6 independently
          proposed the same fix: a post-triage verification gate.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The core problem: the triage lead assigned severity based on reviewer
          claims, not code verification. &ldquo;Real bug&rdquo; isn&apos;t a
          property of the finding; it&apos;s a property of consequences
          in production, which the system couldn&apos;t observe.
        </p>
        <p className="text-muted leading-relaxed">
          I built the verification gate, restructured triage to require evidence
          on high-severity findings, and added pre-triage deduplication.
        </p>
      </section>

      {/* ── Run 3: the redemption ── */}
      <section className="border-t border-border pt-8">
        <h3 className="text-base font-semibold tracking-tight mb-1">
          Run 3:{" "}
          <a
            href="https://github.com/screenlite/screenlite"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-muted hover:decoration-fg transition-colors"
          >
            Security platform
          </a>{" "}
          (32,000 lines)
        </h3>
        <p className="text-sm text-muted mb-4">
          Auth, 2FA, token management, role-based access control.
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Passes</td>
                <td className="py-2 px-4 text-fg font-mono text-right">3</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Adopted findings</td>
                <td className="py-2 px-4 text-fg font-mono text-right">69</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P0 bugs</td>
                <td className="py-2 px-4 text-fg font-mono text-right">3</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P1 precision</td>
                <td className="py-2 px-4 text-fg font-mono text-right">~70%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">Total cost</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.10
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-mono text-sm text-fg mb-4">
          P1 precision: 0% &rarr; 70%.
        </p>
        <p className="text-muted leading-relaxed">
          A dime. Ten minutes. Thirty-two thousand lines.
        </p>
      </section>

      {/* ── The cost of not using it ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The cost of not using it
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          I ran the same 32k-line codebase through Claude Code manually. Opus
          4.6, agentic mode, 117+ tool calls. Twenty-five minutes. 42% of my
          daily usage quota.
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  &nbsp;
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Claude Code
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Sweep
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Time</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  25 min
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~10 min
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">API cost equivalent</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $5&ndash;15
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  $0.10
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Plan quota burned</td>
                <td className="py-2 px-4 text-fg font-mono text-right">42%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">0%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">Output</td>
                <td className="py-2 px-4 text-fg text-right">1 issue draft</td>
                <td className="py-2 px-4 text-fg text-right">
                  69 findings &middot; 3 P0s
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          Sweep calls the API directly. No agentic middleware, no tool-call
          overhead, no quota burn. Models are stateless disposable functions
          and all memory lives on the filesystem. Persist the state, not the
          conversation.
        </p>
      </section>

      {/* ── What's still broken ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What&apos;s still broken
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          70% is not 100%. The triage lead can still anchor on its own output.
          Convergence bounds cost but doesn&apos;t guarantee coverage. A
          different reviewer mix finds different bugs.
        </p>
        <p className="text-muted leading-relaxed">
          But now I have proof it works. And it costs a dime.
        </p>
      </section>

      {/* ── Looking for codebases to test ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Looking for codebases to test
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Three runs isn&apos;t enough. I need more real-world codebases to
          validate and stress-test the pipeline. If you maintain an open source
          project and want a free multi-model review, reach out. I'll publish
          the results.
        </p>
      </section>
    </>
  );
}
