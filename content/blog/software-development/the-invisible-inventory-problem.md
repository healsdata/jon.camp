---
title: "[DRAFT] AI vs. WIP: The Invisible Inventory Problem"
date: 2026-03-18T09:00:00-05:00
author: Jon
layout: post
slug: the-invisible-inventory-problem
tags:
  - agentic coding
  - lean
  - wip
  - ai-vs-wip
summary: "Manufacturing inventory shows up on a balance sheet. Software WIP hides in open pull requests and a developer's head at 11pm. Agentic coding makes the accumulation dramatically faster and the visibility no better."
---

*Part five of ten in a [series on agentic coding and WIP management](/tags/ai-vs-wip/).*

A manufacturing CFO can walk the factory floor and count half-built inventory. It sits there, taking up space, showing up on the balance sheet. The cost of holding it is visible and tracked.

Don Reinertsen[^1] spent years documenting why software product development doesn't work this way. Software WIP is informational. Design-in-process hides in open branches, half-reviewed pull requests, and the context a developer is holding in working memory. None of it shows up on a balance sheet. None of it is visible to managers trying to estimate delivery dates.

Agentic coding accelerates the accumulation of this invisible WIP dramatically. Agents can open five pull requests in the time it used to take a developer to write one. The review queue builds faster. The unreviewed, not-yet-understood code accumulates faster. The cost stays invisible.

John Kingman described the queue dynamics in the early 1960s[^2]. Wait time in a queue doesn't scale proportionally with utilization. At 80% capacity utilization, queues are manageable. At 90%, they grow noticeably. Past 95%, the system effectively stops making progress. Wait time at that point isn't 20% worse than at 80%. It's exponentially worse.

Human code reviewers are exactly the kind of constrained, variable-rate resource that Kingman's formula describes. When the review queue exceeds comfortable capacity, throughput doesn't degrade gracefully. It falls off a cliff.

This is why the DORA rollback data looks sudden. Organizations can't see the queue depth building because the WIP is invisible. By the time the problem becomes visible as a production incident or a missed release, the queue has been in a bad state for a while.

Addy Osmani captures one dimension of this from the practitioner side[^3]. Agents make "confident mistakes" that require rigorous review. The cost isn't just volume. An agent doesn't flag its own uncertainty. Every PR demands genuine attention because you can't triage by skimming. The confidence is the problem.

The question isn't how much code the agents wrote. The question is how much genuinely understood, reviewed, production-ready code shipped. Those numbers can move in opposite directions at the same time.

[^1]: Reinertsen, D.G. (2009). The Principles of Product Development Flow. Celeritas Publishing.
[^2]: Kingman, J.F.C. (1961). The VUT equation (Kingman's formula) for queue wait time.
[^3]: [The Factory Model: How Coding Agents Changed Software Engineering](https://addyosmani.com/blog/factory-model/)
