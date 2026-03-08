---
title: "AI vs. WIP: A Stable System Looks Slow and Isn't"
date: 2026-03-30T09:00:00-05:00
author: Jon
layout: post
slug: a-stable-system-looks-slow-and-isnt
tags:
  - agentic coding
  - lean
  - agile
  - ai-vs-wip
summary: "A team shipping predictably, with low rollback rates and no one burning out, might look slower than the team pushing 10x PRs per sprint. The Accelerate research shows they're not. Final post in a ten-part series on agentic coding and WIP management."
---

*Final post in a ten-part [series on agentic coding and WIP management](/tags/ai-vs-wip/). The tools changed. The physics didn't.*

> Slow is smooth, smooth is fast.

A team that ships predictably, keeps rollback rates low, and isn't burning anyone out might look slower than the team pushing ten times as many PRs per sprint. It isn't.

This series has built toward that claim from the foundation up. Generation speed was never the constraint. Review throughput is the constraint, and it's fixed by human cognitive capacity in ways that don't improve with more agents. Optimizing a non-constraint grows WIP. Growing WIP breaks Little's Law's stable-system precondition. Broken stability makes delivery unpredictable. Demand expands to consume efficiency gains. Invisible queue depth builds until it collapses into production incidents. Cognitive limits create a hard ceiling on how much review quality one person can provide per day.

That's what the DORA 2025 rollback data looks like when you describe the mechanism, not just the symptom.

What does the stable agentic system actually look like in practice? 

1. Explicit WIP limits on concurrent agent work per developer. 
2. Review throughput tracked and treated as the primary flow metric, not PR volume. 
3. Cycle time measured (PR open to merge) rather than count of PRs opened. 
4. Rollback rate treated as a first-class quality signal, not a postmortem afterthought. 
5. Sustainable pace enforced structurally rather than left to individual willpower against organizational pressure.

Forsgren, Humble, and Kim showed in Accelerate[^1] that high-performing software organizations have both higher deployment frequency and lower change failure rates. These are not traded against each other. They're correlated. The teams getting this right aren't choosing stability over speed. They're achieving both, by managing the system rather than just the tools.

Goldratt's measurement principle applies here. Measuring PR volume produces PR volume. The metric shapes behavior regardless of intent, so the metric has to be chosen deliberately.

Addy Osmani's framing fits the closing argument[^2]: "Activity isn't progress. Running on a treadmill burns calories, but it doesn't get you anywhere." The team pushing 10x PRs will outperform on a sprint velocity scorecard. The stable team wins the annual retention numbers, the incident post-mortems, and the delivery predictability conversation.

The question isn't how many agents you can run. The question is what your review throughput is and how you protect it. That's a boring question. It's also the right one.

[^1]: Forsgren, N., Humble, J., Kim, G. (2018). Accelerate: The Science of Lean Software and DevOps. IT Revolution Press.
[^2]: [The Factory Model: How Coding Agents Changed Software Engineering](https://addyosmani.com/blog/factory-model/)
