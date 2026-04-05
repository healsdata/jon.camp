---
title: "AI vs. WIP: Optimize the Constraint"
date: 2026-03-25T09:00:00-05:00
author: Jon
layout: post
slug: optimize-the-constraint-and-what-that-looks-like
aliases:
  - /software-development/optimize-the-constraint-and-what-that-looks-like/
tags:
  - agentic coding
  - lean
  - agile
  - ai-vs-wip
summary: "If human review is the bottleneck, that's where AI has the most leverage. Goldratt's prescription: exploit the constraint, then elevate it, then subordinate everything else to it. A team doing this looks slower than a team pushing 10x PRs per sprint. It isn't."
---

*Part seven of seven in a [series on agentic coding and WIP management](/tags/ai-vs-wip/).*

> Slow is smooth, smooth is fast.

The previous six posts made the case for a specific diagnosis. Code generation isn't the bottleneck in agentic coding workflows. Human review is. The agents are fast. Review is slow, cognitively expensive, and doesn't scale linearly with the number of agents you throw at the generation side.

Goldratt's prescription follows directly from the diagnosis.[^1] Exploit the constraint first: give it the best resources, remove friction from it. Then elevate it: find ways to increase its capacity. Finally, subordinate everything else to it. Every other decision in the system should serve the constraint's throughput.

This changes where AI belongs in the workflow.

Review is where AI has actual leverage. An agent that produces a PR could also produce a structured context document covering its decisions and the alternatives it considered. That document cuts the cognitive load on the reviewer. They're not cold-reading an artifact; they have a map. Risk-stratified review queues would let reviewers spend deep attention where it matters most and fast-path low-risk changes. These are uses of AI that improve the constraint rather than pile more work in front of it.

On the workflow side, hard limits on concurrent open agent PRs per developer keep the queue from building into the exponential-wait-time zone that Kingman describes. Agent work queued but not started until review capacity is available means generation speed doesn't decouple from review speed. Cycle time metrics surfaced in real time, PR open to merge, make the queue depth visible rather than invisible.

Paul Graham's maker's schedule insight applies at the individual level.[^2] One focused agent session per maker's block, dispatched at the start and reviewed at the end, converts the context-switching problem into a batching solution. The managerial work of supervising agents gets bounded to defined windows, which protects the maker time that deep work requires.

Anthropic's writing on building effective agents points in the same direction.[^3] Simpler, more targeted agents with clear scope are easier to review than broad agents with unbounded reach. Scope control is a review-quality decision.

A team shipping predictably, with low rollback rates and no one burning out, might look slower than the team pushing ten times as many PRs per sprint. Forsgren, Humble, and Kim showed in Accelerate that high-performing software organizations have both higher deployment frequency and lower change failure rates.[^4] These aren't traded against each other. They're correlated. The teams getting this right aren't choosing stability over speed. They're achieving both, by managing the system rather than just the tools.

Addy Osmani's framing fits here: "Activity isn't progress. Running on a treadmill burns calories, but it doesn't get you anywhere."[^5] The team pushing 10x PRs will outperform on a sprint velocity scorecard. The stable team wins the annual retention numbers, the incident post-mortems, and the delivery predictability conversation.

The question isn't how many agents you can run. The question is what your review throughput is and how you protect it.

[^1]: Goldratt, E.M. (1984). The Goal.
[^2]: [Maker's Schedule, Manager's Schedule](https://paulgraham.com/makersschedule.html)
[^3]: [Building effective agents](https://www.anthropic.com/research/building-effective-agents)
[^4]: Forsgren, N., Humble, J., Kim, G. (2018). Accelerate.
[^5]: [The Factory Model: How Coding Agents Changed Software Engineering](https://addyosmani.com/blog/factory-model/)
