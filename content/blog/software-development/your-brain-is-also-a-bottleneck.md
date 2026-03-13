---
title: "[DRAFT] AI vs. WIP: Your Brain Is Also a Bottleneck"
date: 2026-03-20T09:00:00-05:00
author: Jon
layout: post
slug: your-brain-is-also-a-bottleneck
tags:
  - agentic coding
  - ai
  - lean
  - ai-vs-wip
summary: "Three distinct bodies of research explain why human code review degrades under load in ways that PR merge rates don't capture: attention residue, vigilance decrement, and cognitive load theory."
---

*Part six of ten in a [series on agentic coding and WIP management](/tags/ai-vs-wip/).*

The implicit assumption behind running many agents in parallel is that human review scales with the number of agents. Three distinct research findings say it doesn't.

Sophie Leroy's attention residue research[^1] showed that when you switch from one task to another, cognitive engagement with the previous task doesn't stop. A residue remains and impairs performance on whatever you've switched to. Code review requires sustained, focused attention to catch non-obvious bugs. A developer spending the day context-switching between agent pull requests isn't providing the same review quality as one working through a single task with full attention. The switching itself is a tax on every subsequent review.

The vigilance decrement has been documented since World War II radar operator studies[^2]. Human error rates in inspection and monitoring tasks climb over sustained sessions without breaks. Code review is an inspection task. A reviewer who has been reviewing for three unbroken hours will miss defects that a fresh reviewer would catch. This is a hard biological ceiling, not something that improves with practice or better tooling.

John Sweller's cognitive load theory[^3] adds a third layer. Working memory has fixed capacity. AI-generated code typically carries higher cognitive load than code you wrote yourself, because you have no mental model of why it's structured the way it is. You're cold-reading an artifact rather than reviewing a thought process you participated in. The work of understanding what the agent did competes directly with the work of evaluating whether it's correct. Your effective review capacity per unit of time is lower, not because you're worse at reviewing, but because the artifact is harder to review.

Anthropic published research in January 2026[^4] showing that developers who used AI assistance scored 17% lower on knowledge quizzes about the code libraries they'd used. The largest gap was in debugging skills, which are the most critical skills for catching subtle review errors.

None of this shows up in PR merge rate metrics. You can merge a PR without understanding it. You can approve a change without catching the bug in it. The metric looks fine right up until the rollback.

Cognitive limits aren't a personal failing. They're the mechanism. More agents don't override them. They make those limits more consequential.

[^1]: Leroy, S. (2009). "Why Is It So Hard to Do My Work?" Organizational Behavior and Human Decision Processes, 109(2).
[^2]: Mackworth, N.H. (1948). "The Breakdown of Vigilance During Prolonged Visual Search." Quarterly Journal of Experimental Psychology.
[^3]: Sweller, J. (1988). "Cognitive Load During Problem Solving." Cognitive Science, 12(2).
[^4]: [How AI assistance impacts the formation of coding skills](https://www.anthropic.com/research/AI-assistance-coding-skills)
