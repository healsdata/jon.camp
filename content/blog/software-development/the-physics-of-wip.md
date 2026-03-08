---
title: "AI vs. WIP: The Physics of WIP"
date: 2026-03-13T09:00:00-05:00
author: Jon
layout: post
slug: the-physics-of-wip
tags:
  - agentic coding
  - lean
  - wip
  - ai-vs-wip
summary: "Little's Law has been describing software team behavior since 1961. Agentic coding violates the precondition the law requires, and the rollback data is what that looks like in practice."
---

*Part three of ten in a [series on agentic coding and WIP management](/tags/ai-vs-wip/).*

In 1961, John D.C. Little proved a relationship that holds across any stable queuing system[^1]: **Cycle time equals WIP divided by throughput**. If your team completes 10 pull requests per week and you have 50 open, the average age of a PR in your system is five weeks. Not because anyone is lazy. Because that's what the math says.

The key word in Little's Law is "stable." The law requires that your arrival rate (new work entering the system) roughly matches your departure rate (work completing). When arrival and departure are balanced, the equation gives you a reliable prediction.

Agentic coding breaks this precondition.

Code generation now runs at speeds that can outpace human review by an order of magnitude. Arrival rate can wildly exceed departure rate. When that happens, the system is no longer stable. Little's Law doesn't break down; it still describes what's happening. The WIP number climbs, and cycle time climbs with it. Delivery becomes unpredictable because the system is genuinely unstable.

The math in plain terms: if your team reviews 10 PRs per week and you have 50 open, average cycle time is five weeks. If you double agent output to 100 open PRs, cycle time doesn't stay at five weeks. It doubles to ten. *You've shipped no additional value and made your delivery dates less reliable.*

Walter Shewhart, working in the 1920s on manufacturing quality, identified something related[^2]. Before you can reason about a system, you need to distinguish variation coming from common causes (the system itself) from variation coming from special causes (unusual events). You can't improve what you can't characterize. Agent output has enormous variance and is poorly characterized on most teams. The precondition for improvement isn't more agents. It's understanding the system you're running.

WIP limits exist to enforce stability. They constrain arrival rate to match throughput, which is the only way to keep Little's Law working in your favor rather than against you. David Anderson's work on Kanban for software teams[^3] is the most accessible treatment of how to actually implement this.

More WIP doesn't mean more output. It means each item takes longer and delivery dates become guesses.

Little's Law isn't a suggestion. It's physics.  

[^1]: Little, J.D.C. (1961). "A Proof for the Queuing Formula L = λW." Operations Research, 9(3), 383–387.
[^2]: Shewhart, W.A. (1931). Economic Control of Quality of Manufactured Product. Van Nostrand.
[^3]: Anderson, D. (2010). Kanban: Successful Evolutionary Change for Your Technology Business. Blue Hole Press.
