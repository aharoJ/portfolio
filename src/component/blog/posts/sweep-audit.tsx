// path: src/component/blog/posts/sweep-audit.tsx

export default function SweepAuditPost() {
  return (
    <>
      {/* ── Opening ── */}
      <section>
        <p className="text-muted leading-relaxed mb-4">
          We built a multi-model review pipeline. Then we pointed it at itself.
          Not the output &mdash; the source code. Every module. Every function.
          Every trust boundary.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Four CC subagents with calibrated adversarial mindsets run first.
          Then the code goes to web LLMs that have never seen the codebase.
          Round after round until every model says &ldquo;ship it.&rdquo;
        </p>
        <p className="font-mono text-sm text-fg">
          278 bugs. 15 modules. 97 rounds. 1,553 tests.
        </p>
      </section>

      {/* ── The campaign ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The campaign
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Thirteen modules audited over four days, plus two pre-campaign modules
          from a week earlier. Every module got the same treatment: four parallel
          CC subagents (Security Adversary, Correctness Pedant, Architecture
          Critic, Test Coverage Hunter), then web LLM rounds with Claude and
          ChatGPT until convergence.
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Module
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Lines
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Rounds
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Bugs
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Tests
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">cli.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">2,550</td>
                <td className="py-2 px-4 text-fg font-mono text-right">12</td>
                <td className="py-2 px-4 text-fg font-mono text-right">45</td>
                <td className="py-2 px-4 text-fg font-mono text-right">74</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">state.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">2,213</td>
                <td className="py-2 px-4 text-fg font-mono text-right">11</td>
                <td className="py-2 px-4 text-fg font-mono text-right">45</td>
                <td className="py-2 px-4 text-fg font-mono text-right">54</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">patch.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">320</td>
                <td className="py-2 px-4 text-fg font-mono text-right">16</td>
                <td className="py-2 px-4 text-fg font-mono text-right">32</td>
                <td className="py-2 px-4 text-fg font-mono text-right">70</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">prompts.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">1,658</td>
                <td className="py-2 px-4 text-fg font-mono text-right">9</td>
                <td className="py-2 px-4 text-fg font-mono text-right">26</td>
                <td className="py-2 px-4 text-fg font-mono text-right">80</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">triage.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">2,277</td>
                <td className="py-2 px-4 text-fg font-mono text-right">6</td>
                <td className="py-2 px-4 text-fg font-mono text-right">26</td>
                <td className="py-2 px-4 text-fg font-mono text-right">28</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">github.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">400</td>
                <td className="py-2 px-4 text-fg font-mono text-right">7</td>
                <td className="py-2 px-4 text-fg font-mono text-right">21</td>
                <td className="py-2 px-4 text-fg font-mono text-right">34</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">ts_scope.py + diff.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">&mdash;</td>
                <td className="py-2 px-4 text-fg font-mono text-right">5</td>
                <td className="py-2 px-4 text-fg font-mono text-right">14</td>
                <td className="py-2 px-4 text-fg font-mono text-right">20</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">runner.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">2,203</td>
                <td className="py-2 px-4 text-fg font-mono text-right">7</td>
                <td className="py-2 px-4 text-fg font-mono text-right">11</td>
                <td className="py-2 px-4 text-fg font-mono text-right">10</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">dedup.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">320</td>
                <td className="py-2 px-4 text-fg font-mono text-right">8</td>
                <td className="py-2 px-4 text-fg font-mono text-right">11</td>
                <td className="py-2 px-4 text-fg font-mono text-right">31</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">batch.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">220</td>
                <td className="py-2 px-4 text-fg font-mono text-right">2</td>
                <td className="py-2 px-4 text-fg font-mono text-right">11</td>
                <td className="py-2 px-4 text-fg font-mono text-right">15</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">sarif.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">216</td>
                <td className="py-2 px-4 text-fg font-mono text-right">2</td>
                <td className="py-2 px-4 text-fg font-mono text-right">10</td>
                <td className="py-2 px-4 text-fg font-mono text-right">30</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">eval/harness.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">760</td>
                <td className="py-2 px-4 text-fg font-mono text-right">2</td>
                <td className="py-2 px-4 text-fg font-mono text-right">9</td>
                <td className="py-2 px-4 text-fg font-mono text-right">27</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">types.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">240</td>
                <td className="py-2 px-4 text-fg font-mono text-right">2</td>
                <td className="py-2 px-4 text-fg font-mono text-right">3</td>
                <td className="py-2 px-4 text-fg font-mono text-right">33</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">chunk.py</td>
                <td className="py-2 px-4 text-fg font-mono text-right">187</td>
                <td className="py-2 px-4 text-fg font-mono text-right">2</td>
                <td className="py-2 px-4 text-fg font-mono text-right">2</td>
                <td className="py-2 px-4 text-fg font-mono text-right">22</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">generate-intake.sh</td>
                <td className="py-2 px-4 text-fg font-mono text-right">&mdash;</td>
                <td className="py-2 px-4 text-fg font-mono text-right">6</td>
                <td className="py-2 px-4 text-fg font-mono text-right">12</td>
                <td className="py-2 px-4 text-fg font-mono text-right">&mdash;</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-fg font-semibold">Total</td>
                <td className="py-2 px-4 text-fg font-mono text-right font-semibold">&mdash;</td>
                <td className="py-2 px-4 text-fg font-mono text-right font-semibold">97</td>
                <td className="py-2 px-4 text-fg font-mono text-right font-semibold">278</td>
                <td className="py-2 px-4 text-fg font-mono text-right font-semibold">528</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          Sorted by bug count. The largest modules produced the most bugs, but
          not proportionally &mdash; patch.py at 320 lines produced 32 bugs
          across 16 rounds. dedup.py, a dormant module with zero production
          catches, needed 8 rounds and produced 11 bugs.
        </p>
      </section>

      {/* ── ChatGPT as MVP ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The model that wouldn&apos;t stop finding bugs
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The campaign ran Claude and ChatGPT in parallel every round. The
          pattern was consistent: Claude converged early, ChatGPT kept finding
          real bugs.
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            github.py: Claude PASSed Rounds 4&ndash;7. ChatGPT found a real P2
            in every one.
          </p>
          <p className="font-mono text-xs text-muted leading-relaxed text-center mt-1">
            dedup.py: Claude PASSed Rounds 1&ndash;7. ChatGPT found a real bug
            in every one.
          </p>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          In github.py, ChatGPT found the non-string field rendering crash
          (Round 4), the line-zero API bug (Round 4), the corroborated_count
          type mismatch (Round 5), and the argv-size fragility in comment
          posting (Round 6) &mdash; all while Claude declared the module
          &ldquo;production-ready.&rdquo;
        </p>
        <p className="text-muted leading-relaxed mb-4">
          In dedup.py, ChatGPT peeled back seven consecutive layers of the
          same bug class: type guards on untrusted data. Same-reviewer
          comparisons, unsanitized prompt injection, malformed container
          shapes, synthetic ID collisions, invalid ID types, alias validation,
          and canonicalization gaps. Each round Claude PASSed. Each round
          ChatGPT found the next layer.
        </p>
        <p className="text-muted leading-relaxed">
          This is the thesis of Sweep playing out on Sweep itself. Ensemble
          diversity catches what same-model reviewers miss. Not because one
          model is smarter &mdash; because they have genuinely different blind
          spots. That&apos;s Mode 3.
        </p>
      </section>

      {/* ── The bug class that wouldn't die ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The bug class that wouldn&apos;t die
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          One bug class appeared in every module:
          non-string values from LLM output reaching code that assumes strings.
          A finding with{" "}
          <span className="font-mono text-fg text-sm">
            {"{"}title: 42{"}"}
          </span>{" "}
          crashes{" "}
          <span className="font-mono text-fg text-sm">.replace()</span>. A
          classification with{" "}
          <span className="font-mono text-fg text-sm">
            {"{"}classification: [&quot;ADOPT&quot;]{"}"}
          </span>{" "}
          passes key-presence checks but fails string comparison. An ID of{" "}
          <span className="font-mono text-fg text-sm">None</span> maps to an
          empty-string dict key, silently overwriting prior entries.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The fix is always the same: validate type at the trust boundary, not
          just presence. Pydantic TypeAdapter for structured fields. A simple{" "}
          <span className="font-mono text-fg text-sm">_safe_text()</span>{" "}
          coercion helper for rendered fields. The pattern was so consistent
          that we codified it as gotcha #71.
        </p>
        <p className="text-muted leading-relaxed">
          The lesson: LLM output is not just &ldquo;might be wrong.&rdquo;
          It&apos;s &ldquo;might be the wrong type entirely.&rdquo; Every{" "}
          <span className="font-mono text-fg text-sm">.get()</span> that
          assumes the value is a string is a crash waiting for a model having
          a bad day.
        </p>
      </section>

      {/* ── The modules that surprised us ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The modules that surprised us
        </h2>

        <h3 className="text-base font-semibold tracking-tight mb-1">
          patch.py &mdash; 16 rounds, 32 bugs
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          A 320-line module that generates patches from adopted findings. It
          took more rounds than the 2,277-line triage module. Fence validation,
          identity checks, whitespace preservation, all-skipped accounting
          &mdash; the surface area was deceptive. Lines of code is not a
          predictor of audit complexity.
        </p>

        <h3 className="text-base font-semibold tracking-tight mb-1">
          github.py &mdash; almost skipped
        </h3>
        <p className="text-muted leading-relaxed mb-4">
          We nearly moved on to the next module after Round 3. The commit said
          &ldquo;shipped v2.20, 3 rounds, 17 bugs.&rdquo; Then we fed Round 4
          to web LLMs. ChatGPT found 2 more P2s. Then 1 more. Then 1 more.
          Final count: 7 rounds, 21 bugs. The module that was &ldquo;done&rdquo;
          needed four more rounds.
        </p>

        <h3 className="text-base font-semibold tracking-tight mb-1">
          dedup.py &mdash; 299 lines, dormant, 8 rounds
        </h3>
        <p className="text-muted leading-relaxed">
          Zero production catches. The module exists as cheap insurance in case
          the lead model&apos;s dedup logic ever fails. It produced more audit
          rounds than types.py, eval/harness.py, sarif.py, chunk.py, and
          batch.py combined. Dormancy doesn&apos;t mean correctness.
        </p>
      </section>

      {/* ── The numbers ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The final numbers
        </h2>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Modules audited</td>
                <td className="py-2 px-4 text-fg font-mono text-right">15</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Total rounds</td>
                <td className="py-2 px-4 text-fg font-mono text-right">97</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Bugs found and fixed</td>
                <td className="py-2 px-4 text-fg font-mono text-right">278</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Regression tests added</td>
                <td className="py-2 px-4 text-fg font-mono text-right">528</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Total tests passing</td>
                <td className="py-2 px-4 text-fg font-mono text-right">1,553</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Gotchas documented</td>
                <td className="py-2 px-4 text-fg font-mono text-right">72</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Versions shipped</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  v2.11 &rarr; v2.25
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">Duration</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  4 days
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          528 regression tests means every fix has a test that prevents
          re-introduction. Seventy-two gotchas means every non-obvious design
          constraint is documented. The test suite went from 1,121 to 1,553.
          The source-to-test ratio is now roughly 1:1.
        </p>
      </section>

      {/* ── The eval ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Before and after
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Same artifact. Same four reviewers. Same lead model. The only
          difference: 278 bug fixes. We ran the full pipeline on the same
          codebase review that produced the v20 eval baseline, then compared.
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Metric
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v20 (before)
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v25 (after)
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Change
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Total adopted</td>
                <td className="py-2 px-4 text-fg font-mono text-right">69</td>
                <td className="py-2 px-4 text-fg font-mono text-right">40</td>
                <td className="py-2 px-4 text-fg font-mono text-right">-42%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Adopt rate</td>
                <td className="py-2 px-4 text-fg font-mono text-right">52%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">29%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">-23pp</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Dismiss rate</td>
                <td className="py-2 px-4 text-fg font-mono text-right">18%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">54%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">+36pp</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P1&rarr;P2 downgrades</td>
                <td className="py-2 px-4 text-fg font-mono text-right">0</td>
                <td className="py-2 px-4 text-fg font-mono text-right">3</td>
                <td className="py-2 px-4 text-fg font-mono text-right">new</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">ALREADY_ADDRESSED (P2)</td>
                <td className="py-2 px-4 text-fg font-mono text-right">&mdash;</td>
                <td className="py-2 px-4 text-fg font-mono text-right">28</td>
                <td className="py-2 px-4 text-fg font-mono text-right">new</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">Eval pass rate</td>
                <td className="py-2 px-4 text-fg font-mono text-right">100%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">100%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">&mdash;</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P1 precision</td>
                <td className="py-2 px-4 text-fg font-mono text-right">100%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">100%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">&mdash;</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">QWK</td>
                <td className="py-2 px-4 text-fg font-mono text-right">1.000</td>
                <td className="py-2 px-4 text-fg font-mono text-right">1.000</td>
                <td className="py-2 px-4 text-fg font-mono text-right">&mdash;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          Adopt rate collapsed from 52% to 29%. Not because the pipeline finds
          fewer bugs &mdash; because the bugs are already fixed. Twenty-eight
          findings were dismissed as ALREADY_ADDRESSED in Pass 2 alone. The
          verification gate caught 3 overpromoted P1s and auto-downgraded them
          to P2.
        </p>

        <h3 className="text-base font-semibold tracking-tight mb-1">
          Reviewer signal shift
        </h3>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Reviewer
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v20 signal
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v25 signal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">deepseek</td>
                <td className="py-2 px-4 text-fg font-mono text-right">73%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">27%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">gpt-nano</td>
                <td className="py-2 px-4 text-fg font-mono text-right">75%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">27%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">grok</td>
                <td className="py-2 px-4 text-fg font-mono text-right">42%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">62%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">gemini-lite</td>
                <td className="py-2 px-4 text-fg font-mono text-right">21%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">17%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">lead (grok)</td>
                <td className="py-2 px-4 text-fg font-mono text-right">62%</td>
                <td className="py-2 px-4 text-fg font-mono text-right">69%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          DeepSeek and GPT-Nano dropped from 73&ndash;75% signal to 27%. Not
          because they got worse &mdash; because they keep finding the same
          issues, and now the lead correctly dismisses them as already fixed.
          Grok&apos;s signal increased from 42% to 62%: it finds fewer but
          more novel issues that survive the stricter triage. The lead&apos;s
          own signal rose from 62% to 69%.
        </p>
      </section>

      {/* ── Confusion matrix ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Severity calibration
        </h2>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Severity
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v20 (90)
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  v25 (138)
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P0</td>
                <td className="py-2 px-4 text-fg font-mono text-right">17 (19%)</td>
                <td className="py-2 px-4 text-fg font-mono text-right">15 (11%)</td>
                <td className="py-2 px-4 text-fg font-mono text-right">&darr;</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P1</td>
                <td className="py-2 px-4 text-fg font-mono text-right">10 (11%)</td>
                <td className="py-2 px-4 text-fg font-mono text-right">35 (25%)</td>
                <td className="py-2 px-4 text-fg font-mono text-right">&uarr;</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P2</td>
                <td className="py-2 px-4 text-fg font-mono text-right">50 (56%)</td>
                <td className="py-2 px-4 text-fg font-mono text-right">63 (46%)</td>
                <td className="py-2 px-4 text-fg font-mono text-right">still dominant</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">P3</td>
                <td className="py-2 px-4 text-fg font-mono text-right">13 (14%)</td>
                <td className="py-2 px-4 text-fg font-mono text-right">25 (18%)</td>
                <td className="py-2 px-4 text-fg font-mono text-right">&uarr;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            Confusion matrix (v25): perfect diagonal.
          </p>
          <p className="font-mono text-xs text-muted leading-relaxed text-center mt-1">
            P0:15 &middot; P1:35 &middot; P2:63 &middot; P3:25 &mdash; zero
            misclassifications &middot; QWK 1.000
          </p>
        </div>

        <p className="text-muted leading-relaxed">
          P0 share dropped from 19% to 11%. P1 share rose from 11% to 25%
          &mdash; but with 100% precision and 3 auto-downgrades. The
          verification gate is doing its job: every P1 that reaches the
          changelog has code-path evidence. The confusion matrix is a perfect
          diagonal. No severity was ever misclassified.
        </p>
      </section>

      {/* ── Closing ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The pipeline reviewing the pipeline
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The methodology was designed to produce Mode 3 behavior: genuine
          independent discovery, not anchored verification. The campaign
          validated that this works &mdash; not just on spec documents and
          student code, but on the review pipeline&apos;s own source.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          ChatGPT found bugs that Claude missed, round after round, in the
          same codebase. Not because one is better. Because they&apos;re
          different. That&apos;s the entire point. One model reviewing its own
          work converges to its own blind spots. Multiple models converge to
          the actual bugs.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          278 bugs in code that was already working, tested, and
          production-deployed. Every one of them found by a model that had
          never seen the code before that round.
        </p>
        <p className="font-mono text-sm text-fg">
          Independence is structural, not instructional.
        </p>
      </section>
    </>
  );
}
