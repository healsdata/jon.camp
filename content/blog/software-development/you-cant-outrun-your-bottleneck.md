---
title: "AI vs. WIP: You Can't Outrun Your Bottleneck"
date: 2026-03-11T09:00:00-05:00
author: Jon
layout: post
slug: you-cant-outrun-your-bottleneck
tags:
  - agentic coding
  - lean
  - agile
  - ai-vs-wip
summary: "Goldratt's rule: never optimize a non-constraint. In agentic coding, code generation isn't the bottleneck. Human review is. Adding more agents just grows the queue."
---

*Part two of seven in a [series on agentic coding and WIP management](/tags/ai-vs-wip/).*

[![Compiling](https://imgs.xkcd.com/comics/compiling.png)](https://xkcd.com/303/)

Two decades ago, XKCD published a comic showing two developers sword-fighting in the hallway. A manager walks by. One developer explains, simply, "Compiling." The manager nods and moves on. The joke was that compilation was the bottleneck. While the machine churned, there was nothing useful to do. Developers weren't slacking. The system had them waiting.

As compilers got faster, hot reloading became more prevelant, and more scripting languages became daily drivers, that bottleneck was gone. The comic became a meme template that engineering teams could use to poke fun at their current bottleneck. 

For many companies, the bottleneck became how quickly teams could write quality code. In the year or two between the pandemic and rising interest rates, companies ravenously hired more engineers to increase their throughput. 

With agentic code generation, the "hands on keyboard" bottleneck is gone. **But honestly, it feels like we've fortten to ask what next bottleneck is.** Instead, people are focused on how we can get AI to write even more code more quickly. Prominent voices in the community are flocking to ideas like "Gas Town"[^1], which is entirely about getting AI to write more code with less human interaction.

Eli Goldratt spent decades on this question, and his answer is uncomfortable. Every system has exactly one binding constraint at any given time. Improving anything that isn't the constraint doesn't increase throughput. It grows the queue in front of the constraint. You've made the non-bottleneck faster, which means more work piles up waiting for the part of the system that was already slow.

In an agentic coding workflow, code generation is not the constraint. Human review is. A developer who ends the day with eight open agent pull requests hasn't been eight times more productive. They've accumulated eight times the unreviewed work waiting for their finite attention.

Addy Osmani, writing from the practitioner side on the factory model of AI development[^2], arrives at the same place: the unsolved problem isn't code generation, it's verification. That's the bottleneck, named plainly by someone trying to help developers thrive in the new environment, not criticize it.

The mechanism becomes clearer with an analogy from medicine. California mandated nurse-to-patient staffing ratios (AB 394, 1999) after research by Aiken et al. showed non-linear outcome degradation past certain thresholds[^3]. Adding more patients beyond the limit didn't increase care throughput. It degraded quality and burned out nurses. The mandated ratio is a WIP limit. It exists because the data said so.

Human code review works the same way. Past some threshold, additional review volume doesn't get reviewed well. It gets rubber-stamped, skimmed, or deferred. *The rollback rate data from DORA suggests many teams are past that threshold already.*

Before asking how many agents you can run in parallel, ask what your actual bottleneck is. If you can't review what your agents produce, more agents make things worse.

The factory floor looks busy right up until it misses the deadline.

[^1]: [Welcome to Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04)
[^2]: [The Factory Model: How Coding Agents Changed Software Engineering](https://addyosmani.com/blog/factory-model/)
[^3]: Aiken, L.H. et al. (2002). "Hospital Nurse Staffing and Patient Mortality, Nurse Burnout, and Job Dissatisfaction." JAMA, 288(16).
