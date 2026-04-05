---
title: "AI vs. WIP: Sustainable Pace and the Maker's Schedule"
date: 2026-03-23T09:00:00-05:00
author: Jon
layout: post
slug: sustainable-pace-and-the-makers-schedule
aliases:
  - /software-development/sustainable-pace-and-the-makers-schedule/
tags:
  - agentic coding
  - agile
  - lean
  - ai-vs-wip
summary: "Kent Beck put the 40-hour week in XP because tired programmers make more defects, not because he cared about work-life balance. Parallel agent management is a manager's schedule job description wearing a productivity tip as a costume. Not everyone loses equally when the workday reorganizes around supervision."
---

*Part six of seven in a [series on agentic coding and WIP management](/tags/ai-vs-wip/).*

Kent Beck put a 40-hour work week into the core principles of Extreme Programming in 1999.[^1] It wasn't there because he thought work-life balance was important. It was there because tired programmers make more mistakes, those mistakes compound into rework, rework grows WIP, and more WIP makes developers more tired. The feedback loop runs in one direction.

"Overtime is a symptom of poor planning." That's Beck's framing. Not a comfort preference. An engineering quality observation.

The DORA research confirmed this connection at scale.[^2] Forsgren, Humble, and Kim found that high-performing software organizations have both higher deployment frequency and lower change failure rates. The low performers are the ones chasing throughput at the expense of stability. Speed and quality aren't traded against each other in well-run systems. They're correlated.

The out-of-hours commit data from the Multitudes whitepaper is a leading indicator of costs that are harder to measure.[^3] Burnout increases defect rates, increases turnover, and destroys institutional knowledge, including the kind of knowledge that makes code review fast and effective. Organizations that can't see this are measuring throughput and ignoring the cost basis.

The Scientific American piece from March 2026 describes workers prompting AI during lunch breaks and meetings.[^4] Rest that stops feeling like rest isn't recovery. It's deferred fatigue. Alexis Ohanian put it in athletic terms: overworking "isn't actually the way to sustained greatness, because you have to be spending as much time recovering and regrouping as you do working, training and practicing. Otherwise you can't be at your best for a long time." The cognitive performance literature says the same thing for knowledge workers.

The mode-of-work question matters here too. Paul Graham described two incompatible ways of organizing a workday.[^5] Managers operate in one-hour blocks and context-switch freely between meetings, coordination tasks, and reviews. Makers need half-day minimum chunks. A single meeting in the middle of a maker's afternoon destroys the afternoon, because the deep work doesn't restart at meeting-end the way it paused at meeting-start.

"Running parallel agents" is a management job description wearing a productivity tip as a costume.

Dispatching multiple agents, monitoring their progress, and reviewing their outputs is coordination work. It operates in manager-mode. Every agent check-in is a context switch, and Sophie Leroy's attention residue research applies to each one.[^6] A developer juggling five agent threads isn't in a focused work state. They're in supervision mode.

For engineering managers and tech leads already operating in coordination mode, adding agent supervision changes little. For ICs doing deep architectural or systems work, parallel agent management is a role change, not a tool upgrade. The work requires sustained context that gets interrupted and degraded by agent supervision.

For developers earlier in their careers, this is worse. Anthropic's January 2026 research found that developers using AI assistance knew less about the code they produced than developers who wrote it without assistance.[^7] The skill gap was largest in debugging. Outsourcing generation to agents has costs that show up later.

And Jevons still applies. If an organization expects ICs to run ten agents, it sets expectations around ten agents' worth of output. No individual gets to work half as hard. The demand expands to consume the capacity.

A system that ships predictably at sustainable pace, with low rollback rates and no one burning out, is outperforming a system that ships erratically at high volume. The scoreboard just takes longer to update.

[^1]: Beck, K. (1999). Extreme Programming Explained.
[^2]: Forsgren, N., Humble, J., Kim, G. (2018). Accelerate.
[^3]: [What matters most for AI rollouts: How you lead](https://cdn.prod.website-files.com/610c8a14b4df1ae46b1a13a3/6941b0b2e9129ebfdfa71d4f_864f3a86793178cb6d8dcc1b464038be_What%20matters%20most%20for%20AI%20rollouts%20How%20you%20lead%20-%20Multitudes%20Whitepaper.pdf)
[^4]: [Why developers using AI are working longer hours](https://www.scientificamerican.com/article/why-developers-using-ai-are-working-longer-hours/)
[^5]: [Maker's Schedule, Manager's Schedule](https://paulgraham.com/makersschedule.html)
[^6]: Leroy, S. (2009). "Why Is It So Hard to Do My Work?" Organizational Behavior and Human Decision Processes.
[^7]: [Anthropic: AI assistance and coding skills research](https://www.anthropic.com/research/AI-assistance-coding-skills)
