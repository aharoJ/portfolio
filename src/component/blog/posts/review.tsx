// path: src/component/blog/posts/review.tsx

export default function ReviewPost() {
  return (
    <>
      {/* ── Opening ── */}
      <section>
        <p className="text-muted leading-relaxed mb-4">
          I asked Claude to review my code. Clean. GPT agreed. Gemini
          agreed. Five models, same conversation, shown each other&apos;s
          work. Unanimous PASS.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Then I pasted the same code into five separate browser tabs. No
          shared context. No anchoring. No awareness of who else was
          reviewing.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Thirteen bugs. Two catastrophic.
        </p>
        <p className="font-mono text-sm text-fg">
          The difference wasn&apos;t the models. It was the architecture of
          the question.
        </p>
      </section>

      {/* ── The structural problem ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The structural problem
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          LLMs exhibit three distinct review behaviors depending on context
          architecture. Same thread, re-run the prompt &mdash;
          self-preferencing. New thread with prior findings &mdash;
          anchoring bias dressed as independence. New thread, open-ended, no
          prior context &mdash; genuine independent discovery.
        </p>
        <p className="text-muted leading-relaxed">
          Most developers live in the first. Fresh context per reviewer is
          the only reliable mechanism. Not a best practice &mdash; a hard
          architectural constraint.
        </p>
      </section>

      {/* ── The protocol ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The protocol
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Five commands. Two review phases.
        </p>

        <div className="bg-subtle rounded-lg p-5 mb-6">
          <pre className="font-mono text-sm text-fg leading-relaxed whitespace-pre-wrap">
{`RESEARCH — validate design decisions before writing code
research → bundle → [paste to 4+ LLMs] → resolve → close
                    ╰── repeat until converged ──╯

IMPLEMENTATION — adversarial audit after research is locked
implement → bundle → [paste to 4+ LLMs] → resolve → close
                     ╰── repeat until converged ──╯`}
          </pre>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          Research locks design decisions via majority agreement across
          independent models before code is written. Implementation hunts
          bugs until every model on the panel returns PASS. Different
          cognitive modes, different convergence criteria. Neither is
          optional &mdash; the agent enforces the sequence. Try
          implementation without completed research and it refuses.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Before external models see the code, the agent spawns four
          parallel copies of itself &mdash; Security, Correctness,
          Architecture, Test Coverage &mdash; each in isolation with defined
          scope boundaries. They catch the straightforward bugs. They share
          the same blind spots.
        </p>
        <p className="font-mono text-sm text-fg mb-6">
          The pre-filter is a net, not a gate.
        </p>
        <p className="text-muted leading-relaxed">
          The protocol iterates until every model &mdash; minimum four
          &mdash; returns PASS. Three safety gates prevent false
          convergence: adversarial confirmation when round 1 is clean across
          all models, spot-check of dropped models before declaring
          convergence, and force-disposition of findings that persist
          unresolved for three consecutive rounds. A hard round cap forces
          explicit triage when convergence isn&apos;t reached.
        </p>
      </section>

      {/* ── The noise floor ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The noise floor
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Round 1 findings are roughly 60% wrong. The protocol is built
          around this fact.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Five false positive categories, each epistemic &mdash; why is the
          model&apos;s claim wrong about the current code? A two-step
          procedure: check factual correctness first, then check whether
          preconditions exist. Order matters.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Four severity levels with one bright-line rule: if a finding can
          produce materially wrong behavior, it cannot be P3. Severity
          modulates how much corroboration you need &mdash; a potential
          catastrophic bug demands investigation from a single model, a
          documentation suggestion requires 75% agreement.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Corroboration has two vocabularies because same-family agreement
          is weaker than it looks. Four copies of Claude agreeing is roughly
          equivalent to two unrelated models agreeing &mdash; shared
          training data creates correlated blind spots. The protocol
          separates internal from external corroboration. When the coding
          agent and Claude on the web both flag something but no other model
          agrees, their agreement doesn&apos;t count. The rule is
          finding-specific &mdash; Claude counts normally whenever any other
          model family also sees the issue.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          What makes it converge: each round carries forward every dismissed
          finding with reasoning. By round 3, false positives are near zero.
        </p>
        <p className="font-mono text-sm text-fg mb-6">
          Not because models are told to stop. Because the argument is
          sound.
        </p>
        <p className="text-muted leading-relaxed">
          Five dispositions for real issues. The constraint that matters:
          DEFERRED requires an explicit owner and target. No finding leaves
          the system undecided.
        </p>
      </section>

      {/* ── The numbers ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The numbers
        </h2>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Target
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Phases
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Bugs
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Rounds
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Models
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  The protocol itself
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  13
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  138+
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  60+
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  5&ndash;7
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Sweep (Python CLI)
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  4
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  77
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  5&ndash;9
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  5
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  WiFi hardening (OpenWrt)
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  8
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  57
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  2&ndash;5
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  5
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Stage (Spring Boot + Next.js)
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  7
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  38+
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  3&ndash;8
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  5&ndash;6
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">
                  BarberOS (Spring Boot)
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  3+
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  &mdash;
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  &mdash;
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  6
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Model performance ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Model performance
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Empirical rankings from per-finding attribution across 300+
          triaged findings. Not benchmarks &mdash; adversarial performance
          under real review conditions.
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal w-8">
                  #
                </th>
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Model
                </th>
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Observed behavior
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">1</td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  ChatGPT
                </td>
                <td className="py-2 px-4 text-muted">
                  Late-round persistence. Finds bugs after every other model
                  converges.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">2</td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Gemini
                </td>
                <td className="py-2 px-4 text-muted">
                  Consistent across all rounds. No caveats.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">3</td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Codex
                </td>
                <td className="py-2 px-4 text-muted">
                  Highest unique-finding rate. Often catches what the coding
                  agent missed.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">4</td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Claude
                </td>
                <td className="py-2 px-4 text-muted">
                  Thorough R1, converges by R2&ndash;3. Subject to the
                  sole-agreement rule.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">5</td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Grok
                </td>
                <td className="py-2 px-4 text-muted">
                  Strong independent perspective.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">6</td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  DeepSeek
                </td>
                <td className="py-2 px-4 text-muted">
                  Good R1 breadth. Diminishing returns after R2.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-fg font-mono text-sm">7</td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Kimi
                </td>
                <td className="py-2 px-4 text-muted">
                  Capable. Breaks on large intakes (~170KB).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          New models enter a three-phase probation &mdash; promotion
          requires a unique P0/P1 find or &ge;50% corroboration rate.
          Existing models are re-evaluated on events, not schedules.
        </p>
      </section>

      {/* ── Reviewing the review ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Reviewing the review
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The methodology was designed entirely by Claude. It worked
          &mdash; hundreds of bugs across multiple projects. But the design
          itself had never faced external scrutiny.
        </p>

        <div className="bg-subtle rounded-lg p-5 mb-6">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <p className="font-mono text-lg text-fg">13</p>
              <p className="text-xs text-muted mt-1">phases</p>
            </div>
            <div>
              <p className="font-mono text-lg text-fg">63</p>
              <p className="text-xs text-muted mt-1">decisions locked</p>
            </div>
            <div>
              <p className="font-mono text-lg text-fg">138+</p>
              <p className="text-xs text-muted mt-1">bugs in the spec</p>
            </div>
            <div>
              <p className="font-mono text-lg text-fg">25</p>
              <p className="text-xs text-muted mt-1">constraints</p>
            </div>
          </div>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          When it started, the protocol had no research phase, no severity
          mapping, no convergence criteria, and commands named after
          cognitive steps &mdash;{" "}
          <span className="font-mono text-fg text-sm">triage</span>,{" "}
          <span className="font-mono text-fg text-sm">ship</span> &mdash;
          that meant nothing to a model that didn&apos;t invent them. What
          the external models found were Claude-isms: designs optimized for
          one model&apos;s internal reasoning but hostile to cross-agent
          reproducibility.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The dominant bug class across all 13 phases: the coding agent
          compressing the canonical spec into its own instruction file in
          ways that silently changed behavior. Three of six external P2
          fixes in one phase were behavioral compressions that went
          unnoticed until adversarial audit. This became the protocol&apos;s
          most-cited constraint &mdash; compression must be non-behavioral.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The hardest subsystem was model strategy &mdash; seven audit
          rounds, the only topic to invoke the hard round cap. The central
          debate: whether Claude-family overlap should reduce corroboration
          globally or only when no other model agrees. Round 1 split
          3&ndash;3. Round 2 resolved 5/5 after DeepSeek delivered a
          mathematical proof that the opposing camp&apos;s concern produced
          no different outcomes under the existing threshold math.
        </p>
        <p className="font-mono text-sm text-fg mb-6">
          They called it a mathematical phantom.
        </p>
        <p className="text-muted leading-relaxed">
          Specifications converge slower than code. Code has a test suite. A
          spec about how to review code has infinite surface area for
          wording precision and semantic drift between the summary and the
          operative section.
        </p>
      </section>

      {/* ── What the models get wrong ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What the models get wrong
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Across 300+ triaged findings, the dominant false-positive pattern
          is designing for imaginary teams. Persistent scope artifacts for a
          30-second conversation. JSON state-transfer files when the
          filesystem is the state. Error recovery appendices for every
          conceivable failure mode.
        </p>
        <p className="text-muted leading-relaxed">
          This is a solo workflow. One person&apos;s terminal. The models
          don&apos;t know that, so they design for a team that doesn&apos;t
          exist. By round 3, they stop &mdash; the dismissal reasoning is
          already in the prompt.
        </p>
      </section>

      {/* ── Closing ── */}
      <section className="border-t border-border pt-8">
        <p className="text-muted leading-relaxed mb-4">
          Sixty-three decisions locked by models that didn&apos;t build the
          system. A hundred thirty-eight bugs found by a spec auditing
          itself. It runs on one developer pasting documents into browser
          tabs.
        </p>
        <p className="font-mono text-sm text-fg mb-4">
          Most specifications stop being reviewed long before they stop
          being wrong.
        </p>
        <p className="font-mono text-sm text-fg">
          Research it. Implement it. Bundle it. Resolve it. Close it.
        </p>
      </section>
    </>
  );
}
