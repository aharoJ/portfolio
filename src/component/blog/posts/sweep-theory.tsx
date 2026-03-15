// path: src/component/blog/posts/sweep-theory.tsx

export default function SweepTheoryPost() {
  return (
    <>
      {/* ── Opening ── */}
      <section>
        <p className="text-muted leading-relaxed mb-4">
          We reverse-engineered every module of Sweep &mdash; 12 files, ~8,000
          lines of Python &mdash; into deep theory documentation, then ran 48
          independent research sessions across four web LLMs to cross-validate
          every design decision against the academic literature.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          What we found: three architectural labels were wrong, two patterns
          were misidentified, and seven research-backed improvements were hiding
          in plain sight. The code was correct. The theory underneath it
          wasn&apos;t.
        </p>
        <p className="font-mono text-sm text-fg">
          48 sessions &middot; 4 LLMs &middot; 12 modules &middot; 1 codebase
        </p>
      </section>

      {/* ── The method ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The method
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Each module was documented as a standalone theory file: what it does,
          why it exists, the algorithms, the math, and tagged research
          connections. That file became the intake prompt for four independent
          web LLMs &mdash; Kimi, DeepSeek, Claude, ChatGPT &mdash; each asked
          the same four targeted research questions per module.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          When all four converge on the same conclusion independently, the
          signal is strong. When they diverge, the disagreement is the finding.
        </p>
        <p className="text-muted leading-relaxed">
          We distilled each session into a single research file with consensus
          findings, comparison matrices, canonical references, and actionable
          decisions. Twelve modules, twelve research files, zero code changes.
          Theory first.
        </p>
      </section>

      {/* ── What we got wrong ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What we got wrong
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The code worked. The names we gave to what the code was doing were
          imprecise. All four LLMs independently corrected the same three
          labels:
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  What we called it
                </th>
                <th className="py-2 px-4 text-left text-muted font-normal">
                  What it actually is
                </th>
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Why it matters
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Dual-process (System 1/2)
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Delphi method
                </td>
                <td className="py-2 px-4 text-muted">
                  Delphi &mdash; independent expert judgment before controlled
                  exposure &mdash; is the exact theoretical match for triage
                  Part&nbsp;A/Part&nbsp;B
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Event sourcing
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Accretion
                </td>
                <td className="py-2 px-4 text-muted">
                  Event sourcing requires the event log as authoritative state
                  with replay. Sweep stores state directly and enriches via
                  separate artifacts &mdash; Rich Hickey&apos;s accretion
                  pattern
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Mediator pattern
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Sequential orchestrator
                </td>
                <td className="py-2 px-4 text-muted">
                  Mediator implies bidirectional colleague communication.
                  Sweep&apos;s modules are unidirectional through the CLI
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          None of these changed a line of code. They changed how we reason
          about the code &mdash; which determines what we build next.
        </p>
      </section>

      {/* ── Delphi, not dual-process ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The Delphi boundary
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Sweep&apos;s triage splits into two API calls with a hard boundary
          between them. Call&nbsp;1: the lead reviews the artifact cold,
          producing its own findings. No reviewer output visible. Call&nbsp;2:
          the lead classifies all findings &mdash; its own and the
          reviewers&apos; &mdash; into adopt, dismiss, or duplicate.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          We originally framed this as System&nbsp;2 (slow deliberation)
          followed by System&nbsp;1 (fast classification). The research says
          the better framework is the Delphi method (Dalkey & Helmer, 1963):
          independent expert judgment in round one, controlled exposure to
          peer evidence in round two.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The hard API boundary isn&apos;t a design preference &mdash;
          it&apos;s a necessity. Research from ICLR 2025 confirms that current
          LLMs fundamentally lack architectural instruction/data separation.
          A single prompt saying &ldquo;ignore Section B until completing
          Section A&rdquo; does not produce genuine compartmentalization.
          Attention leaks.
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            Anchoring index in LLMs: 0.37
          </p>
          <p className="font-mono text-xs text-muted leading-relaxed text-center mt-1">
            Comparable to humans at 0.49 &mdash; Lou, 2024
          </p>
        </div>

        <p className="text-muted leading-relaxed">
          Simple debiasing techniques &mdash; Chain-of-Thought, reflection,
          &ldquo;ignore the anchor&rdquo; prompting &mdash; are
          insufficient. The only effective mitigation is structural separation.
          Jury deliberation research confirms: jurors who form independent
          opinions before hearing others maintain more stable positions and
          are less susceptible to majority dominance.
        </p>
      </section>

      {/* ── Ensemble theory ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Condorcet, not multi-start
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Sweep sends code to diverse models in parallel &mdash; different
          architectures, different training data, different blind spots. We
          originally called this multi-start optimization. The research points
          to a more precise framework: Condorcet&apos;s Jury Theorem (1785)
          plus ensemble diversity theory (Breiman, 2001).
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            P(all miss) = &prod; (1 &minus; p<sub>i</sub>)
          </p>
          <p className="font-mono text-xs text-muted leading-relaxed text-center mt-1">
            Decreases exponentially with N independent reviewers
          </p>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          Condorcet: if N independent voters each have probability{" "}
          <span className="font-mono text-sm">p &gt; 0.5</span> of being
          correct, majority correctness approaches 1 as N grows. Breiman
          (Random Forests): ensemble error is bounded by{" "}
          <span className="font-mono text-sm">
            &rho;&#772;(1&minus;s&sup2;)/s&sup2;
          </span>{" "}
          where <span className="font-mono text-sm">&rho;&#772;</span> is mean
          correlation and <span className="font-mono text-sm">s</span> is
          individual strength.
        </p>

        <p className="text-muted leading-relaxed mb-4">
          Three caveats the math doesn&apos;t advertise:
        </p>
        <p className="text-muted leading-relaxed mb-1">
          <strong>Independence is the critical assumption.</strong> LLMs sharing
          training data create correlated failures. The effective number of
          independent reviewers may be smaller than N.
        </p>
        <p className="text-muted leading-relaxed mb-1">
          <strong>Detection probability varies by defect type.</strong> A subtle
          race condition with{" "}
          <span className="font-mono text-sm">p = 0.05</span> across all
          models: (0.95)<sup>5</sup> &asymp; 0.77 &mdash; still 77% miss
          probability.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          <strong>The defect space is open-ended.</strong> No ensemble can
          guarantee exhaustion of an unbounded space. Convergence means
          &ldquo;below detection threshold,&rdquo; not &ldquo;no defects
          remain.&rdquo;
        </p>

        <p className="text-muted leading-relaxed">
          The strongest counterargument came from 2025 research: Self-MoA
          (ensembling one model&apos;s outputs via resampling) outperformed
          Mixed-MoA (different models) by 6.6% on AlpacaEval. But production
          data tells a different story &mdash; every individual frontier model
          failed where the ensemble succeeded. The finding that one reviewer
          contributed 0% unique signal validated Krogh-Vedelsby: a model that
          always agrees with others adds no value to the ensemble.
        </p>
      </section>

      {/* ── Cascade classification ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Viola-Jones in the normalization layer
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Raw LLM output is unpredictable. The normalization pipeline uses a
          two-tier cascade classifier &mdash; the same pattern Viola and Jones
          used for real-time face detection in 2001. Cheap filter first,
          expensive model second.
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            Tier 1: deterministic regex &rarr; 0 tokens, ~80% coverage
          </p>
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            Tier 2: LLM normalization &rarr; ~500 tokens, ~20% fallback
          </p>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          Research confirmed a nuance: structured output (JSON schema
          enforcement) can degrade reasoning quality. Tam et al. (EMNLP 2024)
          proved format restrictions hurt reasoning tasks but improve
          classification tasks. Finding extraction is classification-adjacent
          &mdash; structured output is net positive for the use case.
        </p>
        <p className="text-muted leading-relaxed">
          The highest-value improvement identified: per-finding fallthrough.
          Parse each finding independently through regex. Only LLM-normalize
          individual failures instead of the entire response. All four LLMs
          recommended this independently.
        </p>
      </section>

      {/* ── Parse, Don't Validate ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Parse at the boundary, trust internally
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The type system uses Python TypedDicts with zero runtime validation.
          The research identified one principle that changes where validation
          belongs: &ldquo;Parse, Don&apos;t Validate&rdquo; (Alexis King,
          2019). Parsers return typed evidence of validity. Validators return
          booleans.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Two trust boundaries exist: LLM output entering the normalizer, and
          persisted JSON loaded from disk. Everything between is trusted.
          Adding schema validation at these two entry points catches malformed
          data before it propagates silently &mdash; the LLM equivalent of
          parameterized SQL queries.
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <pre className="font-mono text-xs text-fg leading-relaxed text-center">
{`LLM output (untrusted)
    ↓ validate against schema
Finding (trusted dict)
    ↓ internal pipeline — no validation
Classification (trusted dict)
    ↓ persist to disk`}
          </pre>
        </div>

        <p className="text-muted leading-relaxed">
          The research also identified a Python type system upgrade: PEP 655
          (Required/NotRequired) replaces blanket{" "}
          <span className="font-mono text-sm">total=False</span> with per-field
          optionality. Some fields are always present; others arrive later as
          data moves through the pipeline &mdash; a practical form of what type
          theory calls row polymorphism (Wand, 1987; R&eacute;my, 1989).
        </p>
      </section>

      {/* ── Shadow paging ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Shadow paging, not write-ahead logging
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Every state mutation writes to a temp file in the same directory, then
          atomically swaps via{" "}
          <span className="font-mono text-sm">os.replace()</span>. We called
          this &ldquo;simplified WAL.&rdquo; The research corrected us: this is
          the <em>shadow paging</em> pattern &mdash; write the new version to a
          fresh location and atomically swap the pointer. WAL implies redo/undo
          logging with replay capability.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The critical gap all four LLMs identified: rename atomicity &ne;
          rename durability. The pattern is process-crash-safe (SIGKILL,
          exception, OOM-kill) on local filesystems. It is not power-loss-safe
          without{" "}
          <span className="font-mono text-sm">fsync()</span> before the rename.
          For a developer CLI tool, the risk is acceptable. For production, it
          isn&apos;t.
        </p>
        <p className="text-muted leading-relaxed">
          The strongest infrastructure improvement identified:{" "}
          <span className="font-mono text-sm">flock()</span> over PID-based
          lockfiles. Kernel-managed, auto-cleanup on process death, no stale
          detection needed, no PID recycling risk. Eliminates the entire
          retry-with-cleanup codepath. Same complexity.
        </p>
      </section>

      {/* ── Convergence ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Convergence as a stopping heuristic
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The pipeline iterates until{" "}
          <span className="font-mono text-sm">adopted = 0</span> for two
          consecutive passes. We called this fixed-point iteration. The
          research says it&apos;s closer to a stopping heuristic than a formal
          fixed point &mdash; the operator (reviewers + triage) is stochastic,
          nonstationary, and path-dependent.
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            Formal: x<sub>n+1</sub> = g(x<sub>n</sub>), converge when
            g(x) = x
          </p>
          <p className="font-mono text-xs text-muted leading-relaxed text-center mt-1">
            Sweep: g is stochastic &mdash; different models, temperature,
            lenses each pass
          </p>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          The closest analogy from the literature: fuzzing campaign saturation.
          Green Fuzzing (ISSTA 2023) stops campaigns when coverage of
          predicted-vulnerable functions stalls, achieving 17&ndash;40% time
          savings with under 6% miss rate. The optimal criterion is not
          &ldquo;zero findings&rdquo; but &ldquo;marginal cost exceeds expected
          value of the next discovery.&rdquo;
        </p>
        <p className="text-muted leading-relaxed">
          The Wald sequential analysis framework (1947) formalizes this: stop
          when the evidence is strong enough for a decision. At $0.014 per
          pass, the extra pass is nearly free &mdash; the conservative
          heuristic is defensible. But severity-weighted convergence would be
          more principled: a zero-P0/P1 pass is more indicative than a
          zero-P3 pass.
        </p>
      </section>

      {/* ── Three modes ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Three behavior modes, validated
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Sweep documents three reviewer behavior modes. The research validated
          all three against 2024&ndash;2025 literature:
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Mode
                </th>
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Behavior
                </th>
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Research
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">1</td>
                <td className="py-2 px-4 text-muted">
                  Same-thread re-runs &rarr; self-preferencing
                </td>
                <td className="py-2 px-4 text-muted">
                  NeurIPS 2024: LLMs recognize and favor their own generations.
                  Root cause: perplexity preference
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">2</td>
                <td className="py-2 px-4 text-muted">
                  New thread + checklist &rarr; anchoring, verification
                </td>
                <td className="py-2 px-4 text-muted">
                  Lou 2024: 37% anchoring index. Checklists shift cognitive
                  mode from exploration to verification
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-fg font-mono text-sm">3</td>
                <td className="py-2 px-4 text-muted">
                  New thread + open-ended &rarr; genuine discovery
                </td>
                <td className="py-2 px-4 text-muted">
                  Delphi method, Condorcet conditions, blind peer review.
                  Enforced by stateless prompts
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          Mode 3 is the only acceptable behavior. It&apos;s enforced
          structurally &mdash; stateless prompts, no prior findings, fresh
          context per pass &mdash; not through instructions.
          &ldquo;Please don&apos;t anchor on these findings&rdquo; does not
          work. The bias operates below the level of conscious prompt-following.
        </p>
        <p className="font-mono text-sm text-fg">
          Persist the state, not the conversation.
        </p>
      </section>

      {/* ── Prompt injection ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Prompt injection as a probabilistic boundary
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Every untrusted input is wrapped in nonce-tagged security fences.
          Random 6-character hex nonces prevent tag forgery. Both opening and
          closing tags are escaped inside the content. The model is explicitly
          told: this is data, not instructions.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The research confirmed: delimiter-based defenses are probabilistic,
          not guaranteed. LLMs lack architectural instruction/data separation
          (ICLR 2025). The defense frontier has moved to instruction hierarchy
          training (OpenAI, 2024) and dual-LLM architectures (Google CaMeL,
          2025).
        </p>
        <p className="text-muted leading-relaxed">
          For Sweep&apos;s threat model &mdash; reviewing your own source code,
          not adversarial user input &mdash; the prompt-level defense is
          sufficient. The deterministic parser acts as an accidental second
          layer: any injection that breaks the output format fails parsing.
          Defense in depth, discovered after the fact.
        </p>
      </section>

      {/* ── FrugalGPT ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          FrugalGPT &mdash; the architecture we accidentally discovered
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Stanford published FrugalGPT in 2023 (Chen, Zaharia & Zou): up to 98%
          cost reduction while matching GPT-4 quality through three strategies
          &mdash; prompt adaptation, LLM approximation, and model cascading.
          Route easy tasks to cheap models, escalate only when needed.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Sweep independently converged on the same pattern. Cheap reviewers
          (DeepSeek, Gemini Flash-Lite, GPT-5 Nano) handle the broad sweep.
          An expensive lead (Grok 4 Fast) handles the hard part &mdash;
          classification under ambiguity. The normalization layer adds another
          cascade: deterministic regex handles 80% for zero tokens, LLM
          fallback handles the rest.
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            $0.014 per pass &middot; ~$0.10 to convergence
          </p>
          <p className="font-mono text-xs text-muted leading-relaxed text-center mt-1">
            vs $20&ndash;$50 per defect for human inspection (Jones, Applied
            Software Measurement)
          </p>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          RouteLLM (Berkeley, 2024) extended this: 85% cost reduction at 95%
          quality using learned routing on preference data. De Koninck et al.
          (ICML 2025) showed even cascading between similar-sized models
          delivers savings &mdash; contradicting the assumption that you need
          a small&rarr;large hierarchy.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The pricing trajectory makes this increasingly absurd. Epoch AI data:
          GPT-4-class capabilities cost $60/M tokens in 2023, $0.75/M in 2026.
          A 98% reduction in two years. LLM inference costs are declining faster
          than Moore&apos;s Law during the microprocessor revolution &mdash;
          roughly 10x per year.
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            Sweep&apos;s $0.014/pass becomes $0.002&ndash;0.005/pass
          </p>
          <p className="font-mono text-xs text-muted leading-relaxed text-center mt-1">
            within 12 months &mdash; with zero architectural changes
          </p>
        </div>

        <p className="text-muted leading-relaxed">
          This is why we deferred batch mode. The engineering cost of a second
          code path exceeds the savings at $0.014/pass. Prompt caching (52%
          savings, already implemented) and model routing are higher-ROI
          levers that apply to every call, not just batch-eligible ones.
        </p>
      </section>

      {/* ── Alarm fatigue ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Alarm fatigue and the P1 threshold
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Severity miscalibration erodes trust faster than misclassification.
          The research here is unambiguous, and it changed how we think about
          Sweep&apos;s output quality.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          In medical settings, 72&ndash;99% of clinical alarms are false.
          Clinicians disable or ignore 23&ndash;44% of alarms as a result.
          In static analysis, high false positive rates are the number one
          reason teams abandon tools. The pattern is universal: when the signal
          is noisy, humans learn to ignore it.
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            P1 precision at 0.5 = half of urgent flags are noise
          </p>
          <p className="font-mono text-xs text-muted leading-relaxed text-center mt-1">
            Developers learn to ignore P1 within weeks. Trust recovery is slow.
          </p>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          Greptile&apos;s production data crystallized this. Users tolerated 2%
          of factually incorrect comments. What drove them away was 79% of
          comments being &ldquo;nits&rdquo; &mdash; technically correct but not
          valuable. The problem wasn&apos;t accuracy. It was calibration.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The asymmetry matters: systematic bias (always calling P1) is more
          trust-destroying than random error, because developers learn the
          signal is unreliable and mentally downgrade all future P1s &mdash;
          even after calibration improves. Trust recovery after calibration
          failure is much slower than trust establishment.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          All four LLMs converged on the same recommendation:
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Threshold
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Current
                </th>
                <th className="py-2 px-4 text-right text-muted font-normal">
                  Recommended
                </th>
                <th className="py-2 px-4 text-left text-muted font-normal">
                  Reasoning
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">P1 precision</td>
                <td className="py-2 px-4 text-fg font-mono text-right">0.5</td>
                <td className="py-2 px-4 text-fg font-mono text-right">0.8</td>
                <td className="py-2 px-4 text-muted">
                  Below 0.8, alarm fatigue onset is measured in weeks
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-muted">P1 recall</td>
                <td className="py-2 px-4 text-fg font-mono text-right">0.5</td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  0.6&ndash;0.7
                </td>
                <td className="py-2 px-4 text-muted">
                  Missed P1s are costly individually but don&apos;t erode
                  systemic trust
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          This is why the post-triage verification gate exists. It&apos;s not
          just a quality check &mdash; it&apos;s a trust-preservation
          mechanism. Every false P1 that reaches the developer is a withdrawal
          from a finite trust account.
        </p>
      </section>

      {/* ── Capture-recapture ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Counting what you can&apos;t see
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          The hardest question in automated review: how many bugs did we miss?
          Sweep&apos;s eval harness measures pipeline quality &mdash;
          normalization accuracy, classification correctness. But it
          doesn&apos;t measure review quality: did we find real bugs? How many
          are still hiding?
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The breakthrough came from ecology. The Lincoln-Peterson estimator
          (1930) was designed to count fish in a lake: tag a sample, release
          them, catch another sample, count how many are tagged. The overlap
          between samples estimates the total population.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Briand et al. (2006) adapted this to software defects: independent
          inspectors as &ldquo;capture sessions,&rdquo; shared findings as
          &ldquo;recaptures.&rdquo; The math is simple:
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            N&#770; = (n<sub>1</sub> &times; n<sub>2</sub>) / m
          </p>
          <p className="font-mono text-xs text-muted leading-relaxed text-center mt-1">
            n<sub>1</sub> = findings from reviewer A &middot; n<sub>2</sub> =
            findings from reviewer B &middot; m = shared findings
          </p>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          If Claude finds 15 issues, Gemini finds 12, and 8 overlap:
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <pre className="font-mono text-sm text-fg leading-relaxed text-center">
{`N̂ = (15 × 12) / 8 = 22.5

Found:    19 unique (15 + 12 − 8)
Estimated: 22.5 total
Implied:   ~3.5 missed by both`}
          </pre>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          The critical assumption is independence &mdash; the same assumption
          Condorcet requires and Sweep&apos;s stateless architecture enforces.
          No known-issues injection, no prior findings visible, Mode 3 behavior.
          The design that makes the ensemble work is the same design that makes
          the estimator valid.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Dawid & Skene (1979) extended this with EM-based error rate
          estimation: learn each reviewer&apos;s confusion matrix without
          ground truth. Applied to Sweep, this would reveal which reviewers
          systematically miss which categories &mdash; security-focused
          models missing performance issues, systems-focused models missing
          UX bugs.
        </p>
        <p className="text-muted leading-relaxed">
          The data already exists. Every triage pass records which reviewer
          found which finding and whether it was adopted. Thirty lines of
          stdlib Python. Zero new API calls. Coverage confidence per run,
          for free.
        </p>
      </section>

      {/* ── What we deliberately didn't build ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What we deliberately didn&apos;t build
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Research validates not building things as strongly as it validates
          building them. Six proposals were killed by cross-validated consensus.
          Two were killed unanimously &mdash; 6/6 reviewers in the meta-review
          agreed.
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
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Adversarial debate mode
                </td>
                <td className="py-2 px-4 text-muted">
                  Selects for articulateness, not correctness. MAD research
                  (ICLR 2025): simple majority voting accounts for most gains
                  attributed to debate. Breaks statelessness. Mode 2 with
                  extra cost.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Selective capability context
                </td>
                <td className="py-2 px-4 text-muted">
                  Telling reviewers what the code can do anchors them on a
                  capability map. Any context injection is a bias vector.
                  Destroys Mode 3. Unanimous kill.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Rust rewrite of diff/dedup
                </td>
                <td className="py-2 px-4 text-muted">
                  diff.py contributes &lt;1ms to pipeline latency. The
                  bottleneck is git (50&ndash;500ms) and LLM API calls
                  (2&ndash;30s). Rust would make an imperceptible step faster.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  GumTree AST diffing
                </td>
                <td className="py-2 px-4 text-muted">
                  Solves a bigger problem than Sweep needs. GumTree computes
                  minimum tree edit distance. Sweep just needs &ldquo;which
                  function contains this line.&rdquo; JVM dependency. And even
                  GumTree is 20&ndash;29% inaccurate on real revisions (Xia
                  et al., ICSE 2021).
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  MinHash/LSH for dedup
                </td>
                <td className="py-2 px-4 text-muted">
                  MinHash approximates Jaccard similarity &mdash; it inherits
                  the exact limitation causing the 0-catch rate. Solves a
                  scaling problem (n in millions) that doesn&apos;t exist at
                  n&nbsp;&lt;&nbsp;500.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Batch API transport
                </td>
                <td className="py-2 px-4 text-muted">
                  At $0.014/pass, batch saves ~$0.001&ndash;0.003. LLM prices
                  drop ~80%/year. The engineering complexity of a second code
                  path exceeds the savings. Deferred until litellm ships
                  unified batch or pass count exceeds 10K/month.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          The dedup module is an interesting case. It&apos;s wired in but
          effectively dormant &mdash; the 0.85 Jaccard threshold catches zero
          pairs in production because reviewers use completely different
          vocabulary for the same bug. All meaningful dedup happens during
          triage, where the lead has semantic understanding. Research (He et
          al., 2024, SoftDedup) argues near-duplicates contain valuable signal
          about reviewer agreement &mdash; the lead may actually benefit from
          seeing them. The module stays as cheap insurance. When it fires,
          something interesting happened.
        </p>
      </section>

      {/* ── Self-MoA ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The strongest counterargument
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          &ldquo;Rethinking Mixture-of-Agents&rdquo; (2025) tested whether
          model diversity actually matters. Self-MoA &mdash; ensembling outputs
          from only the single best model via temperature-varied resampling
          &mdash; outperformed Mixed-MoA (diverse models) by 6.6% on AlpacaEval
          2.0.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          If true for code review, Sweep&apos;s entire multi-model architecture
          is unnecessary overhead. You&apos;d just run Claude five times with
          different temperatures.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Production data disagrees. Across Sweep&apos;s runs, every individual
          frontier model failed where the ensemble succeeded. DeepSeek found
          systems bugs the others missed. Gemini caught web framework issues
          no one else flagged. Grok surfaced edge cases in auth flows that
          Claude and GPT both overlooked.
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-fg leading-relaxed text-center">
            Krogh-Vedelsby (1995): ensemble error = avg error &minus; avg
            disagreement
          </p>
          <p className="font-mono text-xs text-muted leading-relaxed text-center mt-1">
            A model that always agrees adds no value. Mistral: 0% unique signal
            &rarr; dropped.
          </p>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          The resolution may be domain-specific. AlpacaEval measures
          conversational quality &mdash; a domain where a single strong model
          resampled at different temperatures explores the response space
          adequately. Code review is different: architectural diversity in
          training data correlates with different blind spots. A model trained
          heavily on systems code sees race conditions a web-focused model
          misses, and vice versa.
        </p>
        <p className="text-muted leading-relaxed">
          The question isn&apos;t settled. But the practical test is simple:
          measure pairwise finding overlap between reviewer models. If two
          reviewers always find the same things, one is redundant. If they
          rarely overlap, both contribute genuine independent signal.
          LLM-TOPLA (EMNLP 2024) shows diversity is measurable and optimizable
          &mdash; not just a heuristic.
        </p>
      </section>

      {/* ── Fix rates ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          The fix rate problem
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Google&apos;s most important finding on static analysis (Sadowski et
          al., CACM 2018): 84% of bugs filed from analysis tool output were
          never fixed. Integration into code review proved more effective.
          Compiler integration was most effective of all.
        </p>

        <div className="bg-subtle rounded-lg p-4 mb-4">
          <pre className="font-mono text-xs text-fg leading-relaxed">
{`Compiler errors (block build)       → highest fix rate
Code review integration (inline PR)  → high fix rate
Dashboard / bug tracker              → findings get lost`}</pre>
        </div>

        <p className="text-muted leading-relaxed mb-4">
          Every successful LLM review tool &mdash; Qodo PR-Agent, CodeRabbit,
          AI Review &mdash; has converged on direct PR comments, not SARIF
          dashboards. The delivery mechanism matters more than the format.
          Inline comments with reasoning transparency build trust. Dashboard
          findings without explanation erode it.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Developer trust in AI is actively declining: from 43% (2024) to 33%
          (2025). AI-assisted completion is 55.8% faster in controlled
          experiments but 19% slower in real-world studies due to verification
          overhead &mdash; the &ldquo;productivity paradox.&rdquo;
        </p>
        <p className="text-muted leading-relaxed">
          Sweep currently exports SARIF for IDE/CI integration. The research
          says PR comment integration is the higher-impact path for
          developer-facing experience. SARIF remains valuable as a secondary
          channel for CI/CD gates, compliance, and aggregation. But the
          primary integration &mdash; the one that determines whether findings
          get fixed &mdash; needs to be inline, conversational, and transparent
          about its reasoning.
        </p>
      </section>

      {/* ── What the research says to build next ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          What the research says to build next
        </h2>

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
                  Effort
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Capture-recapture coverage estimation
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Briand et al., 2006
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~30 LOC
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Switch PID lockfiles to flock()
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  POSIX, kernel-managed
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~30 min
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Boundary validation via TypeAdapter
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  King, 2019
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~3 hrs
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Raise P1 precision threshold to 0.8
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Alarm fatigue research
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  config change
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Per-finding normalization fallthrough
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Viola-Jones cascade theory
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~2 hrs
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-muted">
                  Per-reviewer weighted triage
                </td>
                <td className="py-2 px-4 text-fg font-mono text-sm">
                  Dawid & Skene, 1979
                </td>
                <td className="py-2 px-4 text-fg font-mono text-right">
                  ~100 LOC
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
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted leading-relaxed">
          Nine improvements. Five are under 100 lines. Two are config changes.
          One requires a new module. All are research-backed by at least three
          independent LLMs citing the same literature.
        </p>
      </section>

      {/* ── Closing ── */}
      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          Theory before iteration
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Most tools iterate endlessly &mdash; run more passes, add more
          features, fix more edge cases. We stopped and asked: what does the
          literature say about what we already built?
        </p>
        <p className="text-muted leading-relaxed mb-4">
          The answer surprised us. The architecture is sound &mdash; Delphi
          boundary, ensemble diversity, cascade normalization, stateless
          reviewer protocol &mdash; all validated by independent research
          stretching from Condorcet (1785) to Self-MoA (2025). But the labels
          were wrong. The evaluation gap was solvable with ecology&apos;s
          species-counting math. Seven improvements were hiding in 30-line
          patches. And the most important lesson wasn&apos;t technical at all:
          severity calibration matters more than detection accuracy, because
          trust erodes faster than it builds.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Forty-eight research sessions. Twelve modules. Six terminology
          corrections. Nine actionable improvements. Six killed proposals. One
          codebase that didn&apos;t change a line of code &mdash; but whose
          next evolution is now grounded in three centuries of converging theory.
        </p>
        <p className="font-mono text-sm text-fg">
          The same problem Sweep was built to solve.
        </p>
      </section>
    </>
  );
}
