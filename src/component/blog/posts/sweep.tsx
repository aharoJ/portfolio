// ═══════════════════════════════════════════════════════════════
// path: src/component/blog/posts/sweep.tsx
// ═══════════════════════════════════════════════════════════════
//
// Blog post content: Sweep — multi-model spec review.
// React Server Component. Zero client JS.
//
// ═══════════════════════════════════════════════════════════════

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
          Kimi — paid tiers, long sessions, hours of back-and-forth. By the end
          I was confident the code was clean. Every model I asked agreed.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Then I ran it through Sweep.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Five P1 bugs. An infinite login loop. Stale authentication roles
          surviving a refresh failure. A token acquisition call missing a
          critical parameter that would silently break under specific redirect
          conditions.
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
          When you iterate with a model — even across separate conversations —
          you&apos;re operating inside a review pattern I call{" "}
          <em>convergence anchoring</em>. The model sees code that it or its
          peers helped shape. It pattern-matches against the solution structure
          it already endorsed. It verifies rather than discovers.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          This isn&apos;t a hallucination problem. The model isn&apos;t wrong
          about what it sees. It just can&apos;t see what it&apos;s anchored to.
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
          Sweep is a multi-model review pipeline. It sends your code to multiple
          LLM reviewers in parallel — each one seeing the codebase cold, with no
          knowledge of prior reviews, no conversation history, no awareness of
          who else is reviewing.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          A lead model triages the combined findings: adopt, dismiss, or flag as
          duplicate. The system runs iterative passes until convergence — when
          new passes stop surfacing new findings.
        </p>
        <p className="text-muted leading-relaxed">
          That&apos;s it. The architecture is simple. The results aren&apos;t.
        </p>
      </section>

      {/* ── Real runs, real numbers ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Real runs, real numbers
        </h2>

        {/* Run 1 */}
        <h3 className="text-base font-semibold tracking-tight mb-1">
          Run 1 — Next.js frontend (6,200 lines)
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
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Dismissed (noise filtered)
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">117</td>
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

        <p className="text-muted leading-relaxed mb-8">
          Pass 1 caught the critical bugs. Pass 2 found refinements. The triage
          correctly dismissed 71% of raw findings as noise — mostly from one
          model that dumped 102 findings, the vast majority irrelevant.
        </p>

        {/* Run 2 */}
        <h3 className="text-base font-semibold tracking-tight mb-1">
          Run 2 — Fish shell system (custom CLI)
        </h3>
        <p className="text-sm text-muted mb-4">
          A codebase that had defeated every individual frontier model. I&apos;d
          tried Claude, GPT, Grok, Gemini, Kimi separately. None of them could
          fully resolve the issues.
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
          No single model found all 24 P1s. One caught the regex quoting bugs.
          Another caught command substitution splits. A third found path
          traversal. The ensemble covered territory none of them covered alone.
        </p>
        <p className="font-mono text-sm text-fg">Seven cents.</p>
      </section>

      {/* ── What the numbers actually mean ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What the numbers actually mean
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The cost per finding isn&apos;t the point. It&apos;s what the findings
          survived.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          These weren&apos;t lint warnings on untouched code. The auth module had
          been through 30+ review iterations with frontier models. The Fish
          shell codebase had been thrown at every major model individually. These
          bugs survived real engineering effort, real model review, real
          iteration.
        </p>
        <p className="text-muted leading-relaxed">
          Sweep found them because it&apos;s designed to defeat the exact
          failure mode that individual model review can&apos;t escape: the
          inability to see what you&apos;ve already endorsed.
        </p>
      </section>

      {/* ── What's next ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What&apos;s next
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Sweep is still in active development. I&apos;m fine-tuning reviewer
          selection, convergence behavior, and the triage pipeline. The results
          are promising enough that I&apos;m using it on my own production code —
          which is the only endorsement that matters.
        </p>
        <p className="text-muted leading-relaxed">
          If you&apos;re shipping code that&apos;s been &ldquo;fully
          reviewed&rdquo; by one model, you might want to ask: reviewed by how
          many independent perspectives?
        </p>
      </section>
    </>
  );
}
