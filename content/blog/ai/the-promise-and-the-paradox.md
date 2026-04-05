---
title: "AI vs. WIP: The Promise and the Paradox"
date: 2026-03-09T09:00:00-05:00
author: Jon
layout: post
slug: the-promise-and-the-paradox
aliases:
  - /software-development/the-promise-and-the-paradox/
tags:
  - agentic coding
  - ai
  - lean
  - ai-vs-wip
summary: "AI coding tools generate more code and more rollbacks at the same time. Before assuming adoption is the problem, it's worth asking whether something about how we're thinking about these tools makes these results predictable."
---

*First post in a seven-part [series on agentic coding and WIP management](/tags/ai-vs-wip/).*

According to Google's DORA 2025 report[^1], 90% of developers report using AI coding tools at work and more than 80% say those tools boosted their productivity. However, the same data shows that software delivery instability went up over the same period. A whitepaper from Multitudes, analyzing data from 500+ software teams[^2], found that developers using AI merged 27.2% more pull requests. They also logged a 19.6% rise in after-hours commits. 

Research from Berkeley Haas, published in HBR in February 2026[^3], found that after AI adoption, employees took on more tasks, worked faster, and worked more hours. Workers began prompting AI during lunch breaks and meetings. Rest stopped feeling like rest. The researchers warn the initial excitement "could give way to fatigue, lower-quality output, and greater turnover." Scientific American covered the same pattern in March 2026[^4]. The gap between productivity felt and stability achieved isn't a measurement artifact. Multiple independent sources point the same direction.

More code shipped, but more evenings lost. 

More deployments, but more rollbacks. 

More PRs merged, including more post-release patches.

 **A tool that generates more code but generates more incidents is a clear failure.** A tool that improves productivity but also increases hours worked is not obviously not the goal (at least for the employee).

*Something* is happening that the simple "AI makes you faster" drumbeat doesn't explain. 

The common response is to assume adoption is the problem. People aren't using the tools correctly. They need better workflows, better prompts, better agent orchestration. Run more agents. Parallelize more tasks.

But decades of research on limiting work in progess (WIP) tells us that the the problem sits upstream of adoption. 

In this series, I aim to explore what the research tells us so we don't have to reinvent the wheel. Again. 


[^1]: [2025 DORA State of AI Assisted Software Development](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report)
[^2]: [What matters most for AI rollouts: How you lead](https://cdn.prod.website-files.com/610c8a14b4df1ae46b1a13a3/6941b0b2e9129ebfdfa71d4f_864f3a86793178cb6d8dcc1b464038be_What%20matters%20most%20for%20AI%20rollouts%20How%20you%20lead%20-%20Multitudes%20Whitepaper.pdf)
[^3]: [AI Doesn't Reduce Work—It Intensifies It](https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it)
[^4]: [Why developers using AI are working longer hours](https://www.scientificamerican.com/article/why-developers-using-ai-are-working-longer-hours/)
