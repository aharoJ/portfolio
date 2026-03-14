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

      {/* ── Then reality checked ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Then reality checked
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          I had an external reviewer validate the Run 1 output. Verdict: 0/5
          P1s were actual bugs. The tool&apos;s biggest weakness was
          &ldquo;misreading existing code &mdash; claiming a fix is missing when
          it&apos;s already there.&rdquo;
        </p>
        <p className="text-muted leading-relaxed">
          47 adopted findings. $0.098. Five P1s. Zero real. That gap is the
          rest of this post.
        </p>
      </section>

      {/* ── Adversarial epistemology ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Adversarial epistemology at scale
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          I ran a meta-review. Six models &mdash; Mistral, Kimi, DeepSeek,
          Gemini, ChatGPT, Claude &mdash; independently evaluated Sweep&apos;s
          next moves. None could see each other&apos;s responses. Same Mode 3
          approach Sweep itself uses.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Kimi reframed the entire problem. The framing: you&apos;re trying to
          extract genuine novel insight from opaque cognitive systems. Those
          systems are suggestible. They&apos;re inconsistent. They&apos;re
          expensive. And you can&apos;t verify their output without a human.
        </p>
        <p className="text-muted leading-relaxed">
          Every architectural decision is a bet on which guardrail to relax and
          whether the signal gain exceeds the noise cost.
        </p>
      </section>

      {/* ── The four hard problems ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The four hard problems
        </h2>

        {/* Problem 1 */}
        <h3 className="text-base font-semibold tracking-tight mb-2">
          1. You can&apos;t tell signal from noise without seeing signal
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          The triage lead classifies 30&ndash;50 findings blind. Reviewer
          identities shuffled and anonymized. Can&apos;t weight by reputation.
          Can&apos;t use consensus &mdash; Mode 3 eliminates that signal on
          purpose.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The two-call structure is the minimal defense against anchoring. Part
          A: the lead reviews independently. Part B: the lead classifies
          reviewer findings. This prevents the lead from pattern-matching its
          own analysis onto reviewer output. It doubles cost. Still not enough
          &mdash; the lead can anchor on its own Part A output.
        </p>

        {/* Problem 2 */}
        <h3 className="text-base font-semibold tracking-tight mb-2">
          2. Severity is ontologically fuzzy
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          0/5 P1s were real. The lead assigned P1 based on reviewer claims, not
          code verification. &ldquo;Real bug&rdquo; is not a property of the
          code. It&apos;s a property of consequences in production, which the
          system cannot observe.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Require evidence for P1 and you suppress legitimate findings where
          the reviewer correctly spotted a gap but didn&apos;t cite line
          numbers. Don&apos;t require it and you get false alarms. I&apos;m
          stuck between precision and recall with no clean tradeoff curve.
        </p>

        {/* Problem 3 */}
        <h3 className="text-base font-semibold tracking-tight mb-2">
          3. The capability map trap
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          Reviewers misread existing code. The obvious fix: give them a
          capability map. Tell them what functions exist, what modules handle
          what.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          6/6 models in the meta-review independently killed this idea. The map
          directly violates Mode 3 &mdash; any context injection anchors
          reviewers. The map can be wrong. Worse: reviewers stop reporting
          genuine gaps because the map says the function exists, even when the
          function is broken.
        </p>

        {/* Problem 4 */}
        <h3 className="text-base font-semibold tracking-tight mb-2">
          4. Convergence is not correctness
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          Sweep stops when passes stop surfacing new findings. This bounds
          cost. It is not the same as coverage. A different reviewer mix might
          find different bugs. Convergence measures process exhaustion, not
          completeness.
        </p>
        <p className="text-muted leading-relaxed">
          I don&apos;t have a clean answer for this one. No one does.
        </p>
      </section>

      {/* ── The meta-review ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The meta-review proved the thesis
        </h2>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Finding
                </th>
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Agreement
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg">
                  Kill the capability map (Move 5)
                </td>
                <td className="py-2 px-4 text-muted">6/6</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg">
                  Kill adversarial debate (Move 6)
                </td>
                <td className="py-2 px-4 text-muted">
                  6/6 &mdash; &ldquo;selects for articulateness, not
                  correctness&rdquo;
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg">
                  Propose post-triage verification gate (unlisted)
                </td>
                <td className="py-2 px-4 text-muted">5/6</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-fg">
                  0/5 P1s is trust-destroying, not acceptable noise
                </td>
                <td className="py-2 px-4 text-muted">6/6</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          5/6 independently proposed the same unlisted move &mdash; a
          post-triage verification gate &mdash; without knowing the others
          proposed it. That&apos;s not consensus. None of them knew the others
          existed. That&apos;s independent convergence on a real finding.
        </p>
        <p className="text-muted leading-relaxed">
          The signal was in the convergence pattern, not in any single
          model&apos;s output.
        </p>
      </section>

      {/* ── Kimi's response ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          One model said the quiet part out loud
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Kimi&apos;s response was the most interesting. It reframed the problem
          as &ldquo;adversarial epistemology at scale.&rdquo; Decomposed it into
          four sub-problems. Wrote a kids&apos; version &mdash; five kids
          searching a messy room for hidden pictures, each going in alone, a
          sixth kid judging what they found. Clear thinking. Useful framing.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Then &mdash; across two separate conversation threads &mdash; it
          essentially said: good luck, curious how it plays out. And declined
          to iterate further.
        </p>
        <blockquote className="border-l-2 border-border pl-4 my-6">
          <p className="text-fg font-mono text-sm leading-relaxed">
            Good luck with the Sweep review &mdash; it&apos;s a solid
            architecture with some genuinely hard problems to solve. If you end
            up implementing any of the moves (or discovering they were traps),
            curious how it plays out.
          </p>
        </blockquote>
        <p className="text-muted leading-relaxed">
          When a model with a 128K+ context window looks at an architectural
          problem and responds with &ldquo;this is genuinely hard, I don&apos;t
          have a clean answer&rdquo; &mdash; that&apos;s more honest than the
          models that confidently proposed solutions. Some of those solutions
          turned out to be traps.
        </p>
      </section>

      {/* ── What's still broken ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What&apos;s still broken
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The triage lead can still anchor on its own output. I have
          mitigations, not solutions.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Severity classification requires world knowledge the system
          doesn&apos;t have. Convergence bounds cost but doesn&apos;t guarantee
          coverage. A different reviewer mix finds different bugs. I can&apos;t
          know what I&apos;m not finding.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The system that finds bugs in code was built by the same process that
          produces bugs in code. Me, plus whichever models I&apos;m iterating
          with. There&apos;s no escape from that recursion.
        </p>
        <p className="text-muted leading-relaxed">
          I&apos;m still in it.
        </p>
      </section>
    </>
  );
}
