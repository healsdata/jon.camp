---
title: "AI vs. WIP: Invisible Inventory and Cognitive Limits"
date: 2026-03-18T09:00:00-05:00
lastmod: 2026-03-21T12:18:00-05:00
author: Jon
layout: post
slug: invisible-inventory-and-cognitive-limits
tags:
  - agentic coding
  - lean
  - wip
  - ai-vs-wip
summary: "Manufacturing inventory shows up on a balance sheet. Software WIP hides in open pull requests and a developer's head at 11pm. Agentic coding makes the accumulation faster and the visibility no better — and there's a hard biological ceiling on how much review one person can do in a day."
---

*Part five of seven in a [series on agentic coding and WIP management](/tags/ai-vs-wip/).*

A manufacturing CFO can walk the factory floor and count half-built inventory. It sits there, takes up space, shows up on the balance sheet. The cost of holding it is visible and tracked.

Don Reinertsen spent years documenting why software product development doesn't work this way.[^1] Software WIP is informational. Design-in-process hides in open branches, half-reviewed pull requests, and the context a developer is holding in working memory. None of it shows up on a balance sheet. None of it is visible to managers trying to estimate delivery dates.

Agentic coding accelerates the accumulation of this invisible WIP dramatically. Agents can open five pull requests in the time it used to take a developer to write one. The review queue builds faster. The unreviewed, not-yet-understood code accumulates faster. The cost stays invisible.

John Kingman described the queue dynamics in the early 1960s.[^2] Wait time in a queue doesn't scale proportionally with utilization. At 80% capacity utilization, queues are manageable. At 90%, they grow noticeably. Past 95%, the system effectively stops making progress. Wait time at that point isn't 20% worse than at 80%. It's exponentially worse. Human code reviewers are exactly the kind of constrained, variable-rate resource that Kingman's formula describes. When the review queue exceeds comfortable capacity, throughput doesn't degrade gracefully. It falls off a cliff.

This is why the DORA rollback data looks sudden. Organizations can't see the queue depth building because the WIP is invisible. By the time the problem becomes visible as a production incident or a missed release, the queue has been in a bad state for a while.

The problem isn't just volume. Even if the queue were shorter, there are hard limits on how well a human can review what's in it.

Sophie Leroy's attention residue research showed that when you switch from one task to another, cognitive engagement with the previous task doesn't stop.[^3] A residue remains and impairs performance on whatever you've switched to. Code review requires sustained, focused attention to catch non-obvious bugs. A developer spending the day context-switching between agent pull requests isn't providing the same review quality as one working through a single task with full attention. The switching itself is a tax on every subsequent review.

The vigilance decrement has been documented since World War II radar operator studies.[^4] Human error rates in inspection and monitoring tasks climb over sustained sessions without breaks. Code review is an inspection task. A reviewer who has been reviewing for three unbroken hours will miss defects that a fresh reviewer would catch. This is a hard biological ceiling, not something that improves with practice or better tooling.

John Sweller's cognitive load theory adds a third layer.[^5] Working memory has fixed capacity. AI-generated code typically carries higher cognitive load than code you wrote yourself, because you have no mental model of why it's structured the way it is. You're cold-reading an artifact rather than reviewing a thought process you participated in. The work of understanding what the agent did competes directly with the work of evaluating whether it's correct. Your effective review capacity per unit of time is lower, not because you're worse at reviewing, but because the artifact is harder to review.

Addy Osmani captures one dimension of this from the practitioner side.[^6] Agents make "confident mistakes" that require rigorous review. An agent doesn't flag its own uncertainty. Every PR demands genuine attention because you can't triage by skimming. The confidence is the problem.

Anthropic published research in January 2026 showing that developers who used AI assistance scored 17% lower on knowledge quizzes about the code libraries they'd used.[^7] The largest gap was in debugging skills, which are the most critical skills for catching subtle review errors.

None of this shows up in PR merge rate metrics. You can merge a PR without understanding it. You can approve a change without catching the bug in it. The metric looks fine right up until the rollback.

The question isn't how much code the agents wrote. The question is how much genuinely understood, reviewed, production-ready code shipped. Those numbers can move in opposite directions at the same time.

[^1]: Reinertsen, D.G. (2009). The Principles of Product Development Flow.
[^2]: Kingman, J.F.C. (1961). The VUT equation.
[^3]: Leroy, S. (2009). "Why Is It So Hard to Do My Work?" Organizational Behavior and Human Decision Processes.
[^4]: Mackworth, N.H. (1948). "The Breakdown of Vigilance During Prolonged Visual Search."
[^5]: Sweller, J. (1988). "Cognitive Load During Problem Solving." Cognitive Science.
[^6]: [The Factory Model: How Coding Agents Changed Software Engineering](https://addyosmani.com/blog/factory-model/)
[^7]: [Anthropic: AI assistance and coding skills research](https://www.anthropic.com/research/AI-assistance-coding-skills)
