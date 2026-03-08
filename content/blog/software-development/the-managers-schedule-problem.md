---
title: "AI vs. WIP: The Manager's Schedule Problem"
date: 2026-03-27T09:00:00-05:00
author: Jon
layout: post
slug: the-managers-schedule-problem
tags:
  - agentic coding
  - agile
  - ai
  - ai-vs-wip
summary: "Dispatching and supervising parallel agents is a manager's schedule job description. Framing it as a personal productivity win obscures that it requires a fundamentally different mode of work, one that doesn't suit all IC roles equally."
---

*Part nine of ten in a [series on agentic coding and WIP management](/tags/ai-vs-wip/).*

Paul Graham described two incompatible ways of organizing a workday[^1]. Managers operate in one-hour blocks and context-switch freely between meetings, coordination tasks, and reviews. Makers need half-day minimum chunks. A single meeting in the middle of a maker's afternoon destroys the afternoon, because the deep work doesn't restart at meeting-end the way it paused at meeting-start.

"Running parallel agents" is a management job description wearing a productivity tip as a costume.

Dispatching multiple agents, monitoring their progress, and reviewing their outputs is coordination work. It operates in manager-mode. Every agent check-in is a context switch, and Sophie Leroy's attention residue research[^2] applies to each one. Each switch leaves a cognitive residue that impairs whatever comes next. A developer juggling five agent threads isn't in a focused work state. They're in supervision mode.

This matters because the "BIG GAINS" discourse around parallel agents is implicitly arguing that ICs should restructure their days around coordination. For some roles, this is a natural fit. Engineering managers and tech leads who are already operating in coordination mode lose little by adding agent supervision to their existing context-switching. Developers working on well-scoped, genuinely parallelizable tasks with fast review cycles have a similar case.

But for ICs doing deep architectural or systems work, parallel agent management is a role change, not a tool upgrade. The work requires sustained context that gets interrupted and degraded by agent supervision.

For developers earlier in their careers, this is worse. Anthropic's January 2026 research[^3] found that developers using AI assistance knew less about the code they produced than developers who wrote it without assistance. The skill gap was largest in debugging, which is the most critical skill for effective review. Outsourcing generation to agents isn't neutral for skill development. It has costs that show up later.

And Jevons still applies. If an organization expects ICs to run ten agents, it sets expectations around ten agents' worth of output. No individual gets to work half as hard. The demand expands to consume the capacity.

The maker's schedule isn't a preference. It's a precondition for certain kinds of work to happen at all. Treating parallel agent management as universally applicable ignores who actually benefits from it and who gets squeezed into a mode of work that makes them worse at what they're good at.

[^1]: [Maker's Schedule, Manager's Schedule](https://paulgraham.com/makersschedule.html)
[^2]: Leroy, S. (2009). "Why Is It So Hard to Do My Work?" Organizational Behavior and Human Decision Processes, 109(2).
[^3]: [How AI assistance impacts the formation of coding skills](https://www.anthropic.com/research/AI-assistance-coding-skills)
