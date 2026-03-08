# Blog Series Plan: "The Tools Changed. The Physics Didn't."

A 10-post series examining why agentic coding is reproducing well-understood failure modes
from lean/agile/systems theory, and what disciplined WIP management actually looks like
in an AI-assisted development context.

**Target length:** 300–500 words per post  
**Through-line:** Efficiency gains in code generation are being consumed by demand expansion
and review bottlenecks. The solution isn't more agents — it's applying principles that
software development already knows to the constraint that actually exists.

---

## Series Through-Line Argument

1. Empirical data shows AI coding tools are increasing hours worked and rollback rates, not reducing them
2. This is predictable from queueing theory: generation is not the bottleneck; review is
3. Optimizing a non-constraint (Goldratt) grows invisible WIP inventory (Reinertsen)
4. Demand expands to consume efficiency gains (Jevons Paradox)
5. Human cognitive limits create a hard ceiling on review throughput (cognitive science)
6. Sustainable pace and WIP limiting aren't comfort preferences — they're quality decisions
7. The real leverage is applying AI to the constraint (review), not the non-constraint (generation)

---

## Post 1: The Promise and the Paradox

**Hook:** AI coding tools were supposed to make developers faster. So why are they working longer hours?

**Core argument:** Establish the empirical tension without explaining it yet. Let the data speak.
End with a question that the rest of the series answers.

**Key points:**
- 90% of developers report using AI at work; 80%+ say it boosted productivity (DORA 2025)
- Yet software delivery *instability* also rose — more rollbacks and post-release patches
- Engineers merged 27.2% more PRs but had a 19.6% rise in out-of-hours commits (Multitudes)
- Berkeley Haas: employees took on more tasks, worked faster, worked more hours after AI adoption
- Workers began prompting AI during lunch, breaks, and meetings; rest stops feeling like rest
- Risk: "initial excitement could give way to fatigue, lower-quality output, and greater turnover"

**Closing question:** What if the problem isn't the tools, but how we're thinking about them?

**Sources:**
- Google DORA 2025 AI-Assisted Development Report: https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report
- Multitudes whitepaper (500+ developers): https://cdn.prod.website-files.com/610c8a14b4df1ae46b1a13a3/6941b0b2e9129ebfdfa71d4f_864f3a86793178cb6d8dcc1b464038be_What%20matters%20most%20for%20AI%20rollouts%20How%20you%20lead%20-%20Multitudes%20Whitepaper.pdf
- Scientific American, "Why Developers Using AI Are Working Longer Hours" (March 2026): https://www.scientificamerican.com/article/why-developers-using-ai-are-working-longer-hours/
- HBR, "AI Doesn't Reduce Work — It Intensifies It," Ranganathan & Ye, UC Berkeley Haas (Feb 2026): https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it

---

## Post 2: You Can't Outrun Your Bottleneck

**Hook:** The factory floor looks busy right up until it misses the deadline.

**Core argument:** Introduce Theory of Constraints without jargon. The constraint in an
agentic coding workflow isn't code generation — it's human review. Every agent you add
optimizes the wrong part of the system.

**Key points:**
- Goldratt's core rule: *never optimize a non-constraint* — it only grows the queue at the bottleneck
- Every system has exactly one constraint at any given time; improving non-constraints is waste
- In agentic workflows, code generation approaches infinite speed; review capacity is fixed and human
- A developer with 8 open agent PRs at end of day hasn't been 8x productive — they've accumulated 8x WIP
- The factory in "The Goal" looked maximally busy right before it failed to ship
- The solution isn't better agents — it's identifying and subordinating everything to the constraint

**Analogy to use:** The hospital nurse-to-patient ratio. Above a threshold, adding patients doesn't
increase throughput — it degrades outcome quality and burns out nurses. California mandated
ratios specifically because the research showed non-linear degradation past the limit.
"One nurse per eight patients" is a WIP limit.

**Closing thought:** Before you ask "how do I run more agents," ask "what is my actual bottleneck?"

**Sources:**
- Goldratt, E.M. & Cox, J. *The Goal* (1984) — Theory of Constraints
- California nurse staffing ratio research: AB 394 (1999) and subsequent outcomes studies
- Aiken et al. (2002), "Hospital Nurse Staffing and Patient Mortality," JAMA — empirical outcomes data

---

## Post 3: The Physics of WIP

**Hook:** There's a 60-year-old equation that predicts exactly what we're seeing.

**Core argument:** Little's Law. Accessible explanation, no Greek letters required.
The stable system precondition is the key insight — and agentic coding violates it.

**Key points:**
- Little's Law: Cycle Time = WIP / Throughput (John D.C. Little, MIT, 1961)
- The law requires a *stable system* — arrival rate roughly equals departure rate
- With agents, arrival rate (code generation) can massively outpace departure rate (review/merge)
- When the system is unstable, cycle time becomes unpredictable — which is exactly what rollback data shows
- WIP limits are the mechanism for *enforcing* stability — they constrain arrival rate to match throughput
- More WIP doesn't mean more output; it means each item takes longer and the system becomes less predictable
- Walter Shewhart (1920s): need to distinguish common-cause vs. special-cause variation before you can
  reason about a system at all — agent output variance is enormous and poorly characterized

**The math in plain English:** If your team reviews 10 PRs/week and you have 50 PRs open,
your average cycle time is 5 weeks per item. Doubling agent output to 100 PRs doesn't
halve cycle time — it doubles it to 10 weeks, while making delivery dates unpredictable.

**Closing thought:** Little's Law isn't a suggestion. It's physics.

**Sources:**
- Little, J.D.C. (1961). "A Proof for the Queuing Formula L = λW." *Operations Research*, 9(3), 383–387
- Shewhart, W.A. (1931). *Economic Control of Quality of Manufactured Product*. Van Nostrand
- David Anderson, *Kanban: Successful Evolutionary Change for Your Technology Business* (2010)
  — most accessible treatment of Little's Law applied to software teams
- Troy Magennis — practical work on flow metrics and forecasting in software dev contexts

---

## Post 4: Jevons Was Here First

**Hook:** In 1865, more efficient steam engines led to England burning *more* coal, not less.
We're making the same mistake with code.

**Core argument:** The Jevons Paradox / rebound effect. Efficiency gains get consumed by
demand expansion. Organizations don't respond to "we can ship twice as fast" by working
half as much — they respond by expecting twice as many features.

**Key points:**
- William Stanley Jevons (1865): as coal use became more efficient, consumption *increased*
  because cheaper energy unlocked new applications at greater scale
- The pattern recurs: more efficient roads → more traffic; higher-yield crops → more land cleared;
  more efficient appliances → larger homes
- In software: AI tools reduce cost-per-feature → organizations expect more features →
  developers face higher total demand, not lower
- This is a *systemic* effect, not an individual one — even disciplined developers get swept up
  in elevated organizational expectations
- Tool adoption without demand management is not a productivity improvement — it's a demand
  expansion mechanism

**The workplace angle:** "Tools that are supposed to lighten the workload often lead to overload —
increased demands, decreased concentration, creation of new tasks — reducing overall productivity."
(Qatalog/Cornell research)

**Closing thought:** Jevons tells us that efficiency gains require *demand governance* to
actually reduce burden. Without it, you just raise the baseline expectation.

**Sources:**
- Jevons, W.S. (1865). *The Coal Question*. Macmillan
- Wikipedia overview with modern applications: https://en.wikipedia.org/wiki/Jevons_paradox
- Luccioni et al. (2025), "From Efficiency Gains to Rebound Effects," arXiv:2501.16548: https://arxiv.org/abs/2501.16548
- Duperrin (2025), "Are you familiar with the Jevons paradox at work?": https://www.duperrin.com/english/2025/08/20/jevons-paradox/
- Qatalog/Cornell "Workgeist Report" — switching between tools costs 9.5 min concentration recovery per interruption

---

## Post 5: The Invisible Inventory Problem

**Hook:** In a factory, half-built inventory sits on the floor and shows up on a balance sheet.
In software, it hides in open PRs and a developer's head at 11pm.

**Core argument:** Don Reinertsen's insight about invisible WIP in product development.
What you can't see, you can't manage. Agentic coding makes this dramatically worse.

**Key points:**
- Manufacturing WIP is tangible: a CFO can count it, value it, reduce it explicitly
- Software WIP is informational: design-in-process (DIP) — invisible on balance sheets, invisible to managers
- Agentic coding accelerates accumulation of invisible WIP: open branches, half-reviewed PRs,
  agent-generated code no human fully understands yet, context held in developer's working memory
- The cost of high-queue states is *disproportionate*: in an M/M/1 queue at 95% utilization,
  wait times aren't 20% worse than at 80% — they're exponentially worse (Kingman formula)
- This is why the DORA rollback data looks sudden and surprising: organizations can't see
  the queue depth building until it collapses into production incidents

**Kingman formula plain-English:** Wait time in a queue doesn't scale linearly with utilization.
At 80% it's manageable. At 90% it's painful. At 95%+ the system effectively stops making progress.
Human reviewers are exactly this kind of constrained, variable-rate resource.

**Closing thought:** The question isn't "how much code did the agents write?" It's
"how much genuinely understood, reviewed, production-ready code shipped?" Those numbers
can be moving in opposite directions at the same time.

**Sources:**
- Reinertsen, D.G. *The Principles of Product Development Flow* (2009) — foundational text on
  economic cost of queues in product development
- Kingman, J.F.C. (1961) — VUT equation / Kingman's formula for queue wait time
- Agility at Scale on queue management: https://agility-at-scale.com/principles/managing-queues/

---

## Post 6: Your Brain Is Also a Bottleneck

**Hook:** Review quality degrades under load in ways that don't show up in PR merge rates.

**Core argument:** Cognitive science gives us the mechanism behind the rollback data.
Attention residue, vigilance decrement, and cognitive load in cold-reading AI-generated
code create a hard ceiling on how much review one human can do well.

**Key points:**

*Attention Residue (Sophie Leroy):*
- When you switch tasks, cognitive engagement with the previous task doesn't stop
- Residue remains and impairs performance on the new task
- Code review requires sustained, deep attention to spot non-obvious bugs
- A reviewer context-switching between agent outputs all day isn't providing the same
  cognitive quality as a focused reviewer

*Vigilance Decrement (WWII radar operator research):*
- Human error rates in inspection/monitoring tasks increase significantly over time without breaks
- Code review is an inspection task
- Longer unbroken review sessions produce more missed defects — a hard biological ceiling
- This is a fixed limit, not something that improves with practice or better tooling

*Cognitive Load Theory (Sweller):*
- Working memory has fixed capacity
- AI-generated code typically has higher cognitive load than code you wrote yourself —
  you have no mental model of *why* it's structured that way
- Reviewer is cold-reading an artifact rather than reviewing a thought process they participated in
- Extraneous cognitive load (understanding what the agent did) competes with germane cognitive
  load (evaluating correctness) — the review quality you can offer is lower per unit of time

**Closing thought:** The implicit assumption behind parallel-agents-everywhere is that
human review scales linearly with the number of agents. Cognitive science says it doesn't.

**Sources:**
- Leroy, S. (2009). "Why Is It So Hard to Do My Work?" *Organizational Behavior and Human
  Decision Processes*, 109(2) — attention residue research
- Mackworth, N.H. (1948). "The Breakdown of Vigilance During Prolonged Visual Search."
  *Quarterly Journal of Experimental Psychology* — original vigilance decrement research
- Sweller, J. (1988). "Cognitive Load During Problem Solving." *Cognitive Science*, 12(2)
  — cognitive load theory
- Anthropic (Jan 2026) research: developers using AI scored 17% lower on knowledge quizzes
  about code they generated with AI assistance; biggest gap was in debugging skills:
  https://www.anthropic.com/research/AI-assistance-coding-skills

---

## Post 7: Sustainable Pace Isn't a Soft Idea

**Hook:** Kent Beck put a 40-hour week in the XP principles not because he cared about
work-life balance. He cared about defect rates.

**Core argument:** Sustainable pace and WIP limiting are engineering quality decisions,
not comfort preferences. The empirical data from software research backs this up.

**Key points:**

*XP's Sustainable Pace (Beck):*
- Tired programmers make more mistakes; those mistakes compound into rework; rework
  increases WIP further — a feedback loop
- "Overtime is a symptom of poor planning" — not a resource to lean on

*Accelerate / DORA research (Forsgren, Humble, Kim):*
- High-performing software organizations have *both* higher deployment frequency
  *and* lower change failure rates
- The low performers are the ones who chase throughput at the expense of stability
- Speed and quality are not a tradeoff in well-run systems — they're correlated
- This directly contradicts the implicit premise of parallel agents everywhere:
  you cannot optimize the generation half of the pipeline and expect the system to self-correct

*The burnout-as-system-cost argument:*
- Burnout increases defect rates, increases turnover, destroys institutional knowledge
- The SciAm/HBR data on out-of-hours commits is a leading indicator of these lagging costs
- Organizations that can't see this are measuring throughput and ignoring the cost basis

**Closing thought:** A system that ships predictably at sustainable pace, with low rollback
rates, is outperforming a system that ships erratically at high volume. The scoreboard
just takes longer to update.

**Sources:**
- Beck, K. *Extreme Programming Explained* (1999) — sustainable pace / 40-hour week
- Forsgren, N., Humble, J., Kim, G. *Accelerate: The Science of Lean Software and DevOps* (2018)
- Scientific American piece (March 2026) for DORA instability data:
  https://www.scientificamerican.com/article/why-developers-using-ai-are-working-longer-hours/

---

## Post 8: Optimize the Constraint

**Hook:** We've spent seven posts explaining what's wrong. Here's what right looks like.

**Core argument:** If the bottleneck is review, that's where AI actually has leverage.
Use agents to make the constraint faster and higher quality, not to pile more work in front of it.

**Key points:**
- Goldratt's prescription: *elevate* the constraint — give it the best resources,
  reduce friction on it, subordinate everything else to it
- What AI-assisted review could look like:
  - Automated PR context-building: what did the agent decide, and why? What were the alternatives?
  - Risk-stratified review queues: flag high-risk changes for deep review; fast-path low-risk ones
  - Agent-generated test coverage summaries: what's tested, what isn't, what edge cases were considered
  - Automated detection of patterns that historically correlate with rollbacks in *this* codebase
- What WIP-aware agent orchestration could look like:
  - Hard limits on concurrent open agent PRs per developer
  - Agent work queued but not started until review capacity is available
  - Cycle time metrics surfaced to developers in real time (how long is your average PR sitting?)
- The maker's schedule as the individual-level WIP governor:
  - One focused agent session per maker's block: dispatch at start, review and integrate at end
  - Don't check in during the block; batch the "managerial" work into defined windows
  - Paul Graham's "office hours" solution, applied to agent supervision

**Closing thought:** The most powerful thing about optimizing the constraint is that it
compounds. Every improvement to review quality and speed accelerates *everything upstream of it*,
automatically, without changing anything else.

**Sources:**
- Goldratt, E.M. *The Goal* (1984) and *The Theory of Constraints* (1990)
- Paul Graham, "Maker's Schedule, Manager's Schedule" (2009): https://paulgraham.com/makersschedule.html
- Anthropic, "Building Effective Agents": https://www.anthropic.com/research/building-effective-agents

---

## Post 9: The Manager's Schedule Problem

**Hook:** "Running parallel agents" is a management job description in a productivity tip's clothing.

**Core argument:** The parallel-agents model implicitly restructures an IC's day around
coordination and review — a manager's schedule — while framing it as a personal efficiency
win. This is a significant role change that doesn't work equally for everyone, and
doesn't address the burnout problem.

**Key points:**
- Paul Graham's distinction: managers operate in one-hour blocks and context-switch freely;
  makers need half-day minimum chunks or the work doesn't happen
- Dispatching N agents, monitoring progress, and reviewing outputs *is* manager-mode work
- Every agent check-in is a context switch; attention residue applies to each one
- The "BIG GAINS" discourse is implicitly arguing that ICs should restructure into manager mode
- This may suit people who are already tech leads or engineering managers; for deep implementation
  ICs it's asking them to abandon the mode of work that makes them effective
- It also doesn't address Jevons — if orgs expect ICs to run 10 agents, they'll set
  expectations accordingly; no one gets to work half as hard

**Who the parallel-agents model actually fits:**
- Engineering managers and tech leads already operating in coordination mode
- Developers whose current work is genuinely parallelizable and low-context (greenfield features,
  isolated bug fixes, well-specced small tasks)
- Senior developers with very fast, confident review cycles and high domain familiarity

**Who it doesn't fit:**
- ICs doing deep architectural or systems work requiring sustained context
- Developers earlier in their career who need to build understanding, not just merge output
- Anyone whose review quality is already near their cognitive load ceiling

**Closing thought:** The maker's schedule isn't a preference. It's a precondition for
certain kinds of work to happen at all.

**Sources:**
- Paul Graham, "Maker's Schedule, Manager's Schedule" (2009): https://paulgraham.com/makersschedule.html
- Leroy attention residue research (cited in Post 6)
- Anthropic (Jan 2026) on skill development regression with AI over-reliance:
  https://www.anthropic.com/research/AI-assistance-coding-skills

---

## Post 10: A Stable System Looks Slow and Isn't

**Hook:** A team that ships predictably, with low rollback rates, and no one burning out
might look slower than the team shipping 10x PRs per sprint. They're not.

**Core argument:** Tie the series together. Restate the uncomfortable conclusion from a
position of strength. This is what winning actually looks like over a longer time horizon.

**Key points:**
- Restate the through-line: generation speed was never the constraint; we've just made it
  more visible while the real constraint (review, stability, human cognition) stayed fixed
- What a stable agentic system actually looks like:
  - Explicit WIP limits on concurrent agent work per developer
  - Review throughput measured and treated as the primary flow metric
  - Cycle time tracked (PR open to merge), not just PR volume
  - Rollback rate treated as a first-class quality signal
  - Sustainable pace enforced structurally, not left to individual willpower
- Accelerate's finding: high performers have lower MTTR and lower change failure rate *and*
  higher deployment frequency — this is achievable, it just requires managing the system, not
  just the tools
- The "BIG GAINS" team will outperform on a sprint scorecard; the stable team wins the
  annual review, the retention numbers, and the incident post-mortems

**The closing reframe:**
The question isn't "how many agents can I run?" It's "what's my review throughput, and
how do I protect it?" That's a boring question. It's also the right one.

**Sources:**
- Forsgren, N., Humble, J., Kim, G. *Accelerate* (2018) — the empirical case for stability + speed
- All prior posts in the series (this one should feel like a payoff, not new information)

---

## Reference: Key Principles Summary

| Principle | Source | Application |
|-----------|--------|-------------|
| Never optimize a non-constraint | Goldratt, *The Goal* | Review is the constraint; more agents just grow the queue |
| Little's Law: CT = WIP/Throughput | J.D.C. Little (1961) | Stable system required; agents violate this precondition |
| Jevons Paradox / rebound effect | Jevons (1865) | Efficiency gains consumed by demand expansion |
| Invisible inventory / queue costs | Reinertsen, *Flow* (2009) | WIP accumulates unseen until it collapses |
| Vigilance decrement | Mackworth (1948) | Review quality degrades over sustained sessions |
| Attention residue | Leroy (2009) | Context switching degrades review quality per switch |
| Cognitive load theory | Sweller (1988) | Cold-reading AI code costs more working memory than reviewing familiar code |
| Sustainable pace | Beck, XP (1999) | Overtime/overload is a defect multiplier |
| Maker's vs. manager's schedule | Paul Graham (2009) | Parallel agents is manager-mode; not all ICs should be there |
| High performers: speed + stability | Forsgren et al., *Accelerate* (2018) | These are correlated, not traded off |
| Kingman formula | Kingman (1961) | Queue wait time grows exponentially as utilization → 100% |

---

## Key Data Points to Use Throughout

- **90%** of developers use AI at work; **80%+** report productivity boost (DORA 2025)
- **+27.2%** more PRs merged with AI (Multitudes) — but also...
- **+19.6%** rise in out-of-hours commits (Multitudes)
- **More rollbacks** and post-release patches correlated with higher AI usage (DORA)
- **17% lower** quiz scores on code libraries when developers used AI vs. control group (Anthropic, Jan 2026)
- **Biggest skill gap**: debugging — the most critical review skill (Anthropic, Jan 2026)
- **9.5 minutes** average concentration recovery time after task switch (Qatalog/Cornell)
- **45% productivity loss** from tool-switching alone (Qatalog/Cornell)

---

## Additional Source: Addy Osmani, "The Factory Model"

URL: https://addyosmani.com/blog/factory-model/

Osmani writes from the "how to thrive in the factory model" angle — not an adversarial source,
but a useful one. He independently arrives at several of the series' core arguments, which makes
him a corroborating citation rather than a strawman.

### Where to use him

**Post 2 (You Can't Outrun Your Bottleneck):**
> "The unsolved problem isn't code generation — it's verification."

Osmani says this explicitly. That's the same bottleneck analysis the series builds from Goldratt.
Cite him here as a practitioner independently identifying the constraint.

**Post 4 (Jevons Was Here First):**
The article cites concrete Jevons-in-action numbers: 40% more websites created, 50% more iOS apps,
35% more GitHub pushes. More generation, not more quality delivery. Use these as the Jevons data
point in concrete software-specific form.

**Post 5 (Invisible Inventory) or Post 6 (Brain Is Also a Bottleneck):**
> "Agents make 'confident mistakes' requiring rigorous review."

The word "confident" is the key. The cost isn't just review volume — it's that you can't triage
by skimming. Every PR demands genuine attention because the agent doesn't flag its own uncertainty.

**Post 8 (Optimize the Constraint):**
His "what hasn't really changed" list (requirements, abstractions, tests, tradeoffs, human oversight)
is implicitly a WIP/constraint argument. All five items are things humans must still do carefully,
and the cognitive budget for doing them is finite. Credit his framing, then extend it: the factory
model describes what good looks like individually; WIP limits describe what good looks like
at the system level.

**Post 9 (Manager's Schedule Problem):**
> "The cognitive work of understanding systems is being amplified. Every hour you spend developing
> genuine architectural understanding now pays dividends across an entire fleet."

He's describing a senior IC or tech lead — someone already operating at the systems/architectural
level. The series can use this to sharpen the "who the parallel-agents model actually fits" section:
it fits the person Osmani is writing for, not the average IC.

### Framing note

Osmani is not wrong — he's writing for a different audience at a different level of seniority.
The productive tension is: his advice assumes the verification/review problem is already solved
or managed. The series argues it isn't, and that most teams aren't Osmani's target reader.
Don't position him as an opponent — position him as the advanced case that proves the rule.

---

## Visual: XKCD #303 "Compiling"

URL: https://xkcd.com/303/
Title: "The #1 Programmer Excuse for Legitimately Slacking Off: 'My code's compiling.'"
Alt text: "Are you stealing those LCDs?" "Yeah, but I'm doing it while my code compiles."

The comic shows two developers sword-fighting on office chairs in a hallway. A manager appears,
tells them to get back to work. One says "Compiling!" The manager says "Carry on."

### Why it belongs in this series

The comic is about dead time created by a slow step in the pipeline — generation was the
bottleneck in 2006, so developers waited on the machine. The joke in the agentic era is
that the bottleneck has *flipped*. Generation is now instant; review is the constraint.
Developers aren't waiting on their tools anymore — their tools are waiting on them.

The comic captures the old world. The series describes what happened when the bottleneck moved
and nobody updated their mental model.

### Where to use it

**Post 2 (You Can't Outrun Your Bottleneck) — strongest fit.**
Open with the comic as the old world, then pivot: "The compile step got fast. We celebrated.
We forgot to ask what the next constraint was." The joke lands differently when you realize
the sword-fighters are now the bottleneck, not the compiler.

**Post 3 (Physics of WIP) — alternate fit.**
The comic illustrates a stable system: arrival rate (code) matched departure rate (compile).
Developers had idle time because the system was balanced. Agents broke that balance — now
arrival rate massively outpaces review capacity, and nobody's sword-fighting because nobody
has time.

---

## Quote and Pizazz Options (from Meditations collection)

Potential pull quotes, openers, and color — mapped to posts where they'd fit best.
These are options, not commitments. Pick and discard when writing.

### Strongest three

**Eli Goldratt** — Posts 2, 8, or 10 (measurement drives behavior)
> "Tell me how you will measure me, and then I will tell you how I will behave. If you measure me in an illogical way, don't complain about illogical behavior."

Application: measure PR volume, get PR volume. The metric is the problem. Could anchor Post 10's closing reframe or Post 8's "optimize the constraint" section.

---

**Addy Osmani** — Posts 8 or 10 (activity vs. progress)
> "activity isn't progress. Running on a treadmill burns calories, but it doesn't get you anywhere."

And: "The best behavior changes don't require you to be a better person — they require a better system."

Application: plain-English version of the series through-line. The treadmill metaphor fits "27% more PRs but more rollbacks" perfectly. Could anchor Post 10's closing.

---

**Joy Clarkson** — Posts 6 or 9 (humans don't scale like machines)
> "you are not a machine. you are more like a garden. you need different things on different days...If you expect a garden to 'produce' things with the same regularity and sameness as a machine, you will be disappointed...you will destroy it."

Application: the philosophical counterweight to "just run more agents." Human reviewers don't scale linearly. Good opener for Post 6 (cognitive bottleneck) or Post 9 (maker's schedule).

---

### Other strong options

**Zig Ziglar** — Post 4 (Jevons) or Post 10
> "The chief cause of failure and unhappiness is trading what you want most for what you want now."

Application: one-sentence plain-English Jevons Paradox. Organizations trade sustainable delivery for shipping more features right now.

---

**Mihaly Csikszentmihalyi** — Post 1 or Post 4
> "As long as we respond predictably to what feels good and what feels bad, it is easy for others to exploit our preferences for their own ends."

Application: frames how "BIG GAINS" discourse exploits developers' desire to feel productive. The agent generates code, you feel good, the cycle continues.

---

**Jean-Luc Picard** — Posts 2 or 5
> "It is possible to commit no mistakes and still lose. That is not a weakness. That is life."

Application: the system can fail even when every individual agent ran correctly and every developer worked hard. The bottleneck doesn't care about effort.

---

**Alexis Ohanian** — Post 7 (sustainable pace)
> "[Overworking is] not actually the way to sustained greatness, because...you have to be spending as much time recovering and regrouping as you do working, training and practicing. Otherwise you can't be at your best for a long time."

Application: athlete framing for what Kent Beck was arguing with XP's 40-hour week.

---

**Possible Worlds Games** — Post 7 (burnout as systemic problem)
> "Burnout is clinically understood as a combo of 6 factors...and only a fraction of it is under your control. Burnout is a systemic problem, so be kind to yourself and hard on the system."

Additional burnout facts from the same Meditations file worth considering:
- Highest burnout rates are in the 4-6 year experience band, not juniors
- Burnout is contagious through workgroups via negative social interaction
- Recovery takes months to years; most people return to work in 2-3 months

---

**Kierkegaard** — Post 1 opener
> For Kierkegaard, busyness is the sign of an unhappy person, and an attempt to distract oneself from life's important questions.

Application: tension-builder for Post 1's paradox. You're measurably busier and measurably less stable. That's not a win by any definition that matters.

---

**From Interruptions at Work (Meditations file)** — Posts 6 or 9
> "Our brains find it difficult to switch attention between tasks."

And from Novice vs. Master: "Stress without repetition builds anxiety, not capability." — could slot alongside the Anthropic skill-erosion data in Post 6.

---

## Tone Notes

- These posts are for practitioners, not academics. Avoid jargon where a plain word works.
- Each post should feel complete on its own but reward reading the series in order.
- The through-line isn't "AI bad." It's "the tools changed; the physics didn't."
  AI is genuinely powerful. The argument is about *how* to use it sustainably.
- Acknowledge the appeal of BIG GAINS — don't strawman it. The parallel agents approach
  *does* produce more code. The argument is about system-level outcomes, not individual task speed.
- Aim for a practitioner who knows agile but hasn't thought carefully about queueing theory,
  and a systems thinker who hasn't been following agentic coding developments.
