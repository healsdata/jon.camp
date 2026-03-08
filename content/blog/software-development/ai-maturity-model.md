---
title: "A So-Called AI Naturity Model"
date: 2026-02-24T09:00:00-05:00
lastmod: 2026-03-08T12:00:00-05:00
author: Jon
layout: post
slug: ai-maturity-model
tags:
  - vibe coding
  - agile
summary: "A critique of a viral 'AI Maturity Model' that reframes forced adoption and performance review enforcement as maturity. Contrasted with well-known frameworks like DORA and Tuckman's stages, which focus on team growth and practice rather than top-down tool mandates."
---

I came across this post on a supposed "AI Maturity Model" recently and I had a visceral, negative reaction. The word "authoritarian" immediately came to mind instead of maturity. 

{{< rawhtml >}}
<img aria-describedby="caption-42" src="/images/content/ai-maturity-model/ai-maturity-model.png" alt="
I've talked to many engineering leaders about adopting AI into their teams, and have seen a clear maturity curve emerge.

Tier 1 - Explore. Give people access to most any tool. Relax security restrictions. Encourage sharing through meetups, posts, or chat rooms.

Tier 2 - Push. No longer optional. Adoption gets measured, sometimes tied to performance reviews. Usually binary as in people have to "use" it. Teams, usually their manager, own the rollout and enforcement.

Tier 3 - Own. A central team takes over. Tools get standardized. The metric shifts from "are people using it?" to "what's it actually worth?"

A popular ticketing company is a good example. They are at Tier 2 with adoption tied to performance reviews, but another popular HR company we talked to is on to Tier 3. A pattern with Tier 3 is the CTO or board is unsatisified with the results from Tier 2 so assign a team to own the problem. 

I debated whether it was worth adding a 'Tier 0 - Anxiety', as I talk to other leaders who have a CTO or VP of Marketing who learned to vibe code and now want Engineering to "do it too". It is often accompanied by a strong FOMO (fear of missing out), and often, folks at this Tier 0 don't even know where to start.

My question: what's Tier 4? Is it cost-driven standardization? Is a focus on efficiency?"/>
{{< /rawhtml >}}

After pondering it for a bit, I realized that at no point does the author mentions being concerned about building better teams, products, engineers, UX, etc. 
The entire thesis of the maturity model is forcing people to use a tool for so-called MBA-inspired gains. This is in direct opposition of every maturity model I've ever seen lauded, taught, or put into practice which focus more on "practice makes perfect". To use an imprecise sports metaphor, maturity models are about teams doing drills, then scrimmages, then games, then tournaments, etc.

To fully belabor the sports metaphor, let's reframe the so-called maturity model as a kid wanting to play basketball:

 * *Tier 0:* Little Timmy heard from a friend how cool playing basketball is and mentions to his parents that he is interested in trying it.
 * *Tier 1:* Timmy's dad gives him a basketball and tells him to go outside and play.
 * *Tier 2:* Timmy's parents decide his allowance is tied to how often he goes outside and plays basketball. Maybe he even gets $0.10 for each free throw he sinks.
 * *Tier 3:* Poor Timmy didn't get good enough at basketball quickly enough, so his big brother, Charles, is signed up to play for the school team since he's taller. 
 * *Tier 4:* Charles's entire high school and collegiate life is planned around him getting into the NBA. 

Honestly, that doesn't sound anything at all like a good way to teach Timmy how to enjoy playing basketball with his friends.

## Well-Known Maturity Models

Compare all of this to popular maturity models that exist in many different parts of the software industry: DevOps Research and Assessment (DORA)[^1], Tuckman’s stages of group development[^2], and even leeser known ones like Shu Ha Ri[^3] and the Agile Fluency Model[^4]. In each of these frameworks, the goal is to describe teams and practices as the engineers involve learn, grow and, well, mature.

### Prescriptive at First

In Tuckman's model, teams go from just having formed up through performing (or adjourning, really. Birds have to leave the nest eventually). Along the way Tucker describes the needs of the team at that stage and how leadership should support them. The most hands-on, prescriptive leadership is at the beginning. This idea of prescriptiveness is echoed as the first steps of Shu Ha Ri, Scrum, etc.

The goal in each of these models is for the team to take more ownership and be more self-leading as time goes on. The idea is "practice makes perfect" in the same vein as sports teams doing drills, scrimmages, and then games.

### The Platform Angle

In the comments of this post, another engineering leader said it reminded them of the platform model, wherein an operations team provides guardrails and the "golden path" for development teams to build software. 
In practice, this usually means the operations team picks a standard stack (e.g. GitHub + AWS + Kubernetes, GitLab + Vercel, etc.) and provides examples, automation, etc. for using it. 
The door remains open for teams to pick other tools, although the leniency varies wildly by organization.

But that isn't a maturity model. The leading DevOps model, DORA, measures capabilities and performance of the team. An "elite" team takes less than one hour to restore service after a production incident, compared to the "low" performing team that can take a week, month, or longer[^5].

The tools and techniques that allow teams to mature aren't the maturity model. The maturity model isn't prescriptive about the tools and techniques -- only the capabilities of the team.

## Framing is Important

Frankly, if the original poster had simply said "these are different ways I see leaders driving adoption of AI," I probably would have brushed past the post. If he had included pros and cons of each approach, instead of laying them out as a desirable progression, I would have even given it a like.

**But framing it as a maturity model is both wrong and dangerous.**

As an industry, we shouldn't encourage leaders to cram usage down engineers' throats via performance reviews and PIPs. 
We shouldn't create a situation where the `AGENTS.md` file is owned by a specific guild within the company and no one else can change it when they find problems.
And, in a field that's evolving as quickly as agentic coding is right now, we're years away from "cost-driven standardization" not being actively harmful.
(The Claude Code models everyone is currently calling a game changer were released *three* months ago. If you force your teams to standardize on them now, you'll miss the next big step up.)



[^1]: https://dora.dev/guides/dora-metrics/
[^2]: https://www.wcupa.edu/coral/tuckmanStagesGroupDelvelopment.aspx
[^3]: https://resources.scrumalliance.org/Article/art-shu-ha-ri-scrum
[^4]: https://www.agilefluency.org/model.php
[^5]: https://www.techtarget.com/whatis/feature/Explaining-the-largest-IT-outage-in-history-and-whats-next