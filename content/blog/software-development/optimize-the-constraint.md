---
title: "[DRAFT] AI vs. WIP: Optimize the Constraint"
date: 2026-03-25T09:00:00-05:00
author: Jon
layout: post
slug: optimize-the-constraint
tags:
  - agentic coding
  - lean
  - agile
  - ai-vs-wip
summary: "If human review is the bottleneck, that's where AI has the most leverage. Goldratt's prescription: elevate the constraint, then subordinate everything else to it."
---

*Part eight of ten in a [series on agentic coding and WIP management](/tags/ai-vs-wip/).*

The previous seven posts made the case for a specific diagnosis. Code generation isn't the bottleneck in agentic coding workflows. Human review is. The agents are fast. Review is slow, cognitively expensive, and doesn't scale linearly.

Goldratt's prescription follows directly from the diagnosis[^1]. Exploit the constraint first: give it the best resources, remove friction from it. Then elevate it: find ways to increase its capacity. Finally, subordinate everything else to it. Every other decision in the system should serve the constraint's throughput.

This changes where AI belongs in the workflow.

Review is where AI has actual leverage. An agent that produces a PR could also produce a structured context document covering its decisions and the alternatives it considered. That document cuts the cognitive load on the reviewer. They're not cold-reading an artifact. They have a map. Risk-stratified review queues would let reviewers spend deep attention where it matters most and fast-path low-risk changes. These are uses of AI that improve the constraint rather than pile more work in front of it.

On the workflow side, WIP-aware agent orchestration addresses the Kingman problem directly. Hard limits on concurrent open agent PRs per developer keep the queue from building into the exponential-wait-time zone. Agent work queued but not started until review capacity is available means generation speed doesn't decouple from review speed. Cycle time metrics surfaced in real time, PR open to merge, make the queue depth visible rather than invisible.

Paul Graham's maker's schedule insight[^2] applies at the individual level. One focused agent session per maker's block, dispatched at the start and reviewed at the end, converts the context-switching problem into a batching solution. The managerial work of supervising agents gets bounded to defined windows, which protects the maker time that deep work requires.

Anthropic's writing on building effective agents[^3] points in the same direction. Simpler, more targeted agents with clear scope are easier to review than broad agents with unbounded reach. Scope control is a review-quality decision.

Otimizing the constraint is a flywheel. Every improvement to review quality and speed accelerates everything upstream of it, automatically, without changing anything else.

[^1]: Goldratt, E.M. (1984). The Goal. North River Press.
[^2]: [Maker's Schedule, Manager's Schedule](https://paulgraham.com/makersschedule.html)
[^3]: [Building effective agents](https://www.anthropic.com/research/building-effective-agents)
