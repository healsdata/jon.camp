---
title: "YAGNI != We Have to Earn It"
date: 2026-08-23T09:03:59-05:00
lastmod: 2026-08-23T09:03:59-05:00
author: Jon
layout: post
slug: yagni
summary: YAGNI is often misunderstood as "we have to earn it," a black and white rule that blocks important conversations. 
  Real YAGNI is critical thinking, not a mandate, and skipping it just sets up a painful rewrite later.
tags:
  - xp
  - agile
---

YAGNI, or "You Aren't Gonna Need It", is a phrase that came out of extreme programming. It has a close sibling in KISS,
or "Keep It Simple Stupid". Applied to software development, both are warnings not to add features and functionality 
today that we think or hope we'll need in the future. In his [article about it](https://martinfowler.com/bliki/Yagni.html), 
Martin Fowler discusses many of the nuances including:

> Yagni only applies to capabilities built into the software to support a presumptive feature, it does not apply to 
> effort to make the software easier to modify. Yagni is only a viable strategy if the code is easy to change...

Like most things considered and discussed by experienced software engineers, the answer to whether a presumptive feature
is good or bad to build now is "It Depends". That's the common refrain of software engineers (and lawyers) because 
important decisions require understanding, thinking, etc. Hard and fast rules don't apply to nuanced situations.

## We Have to Earn It

So earlier in my career, when I was working with an engineer with a pretty senior title, I thought I naturally understood
what he meant when he turned down a potential feature because "I want us to have to earn it". That sounded enough like
YAGNI to me that I was on board. 

But the longer we worked together, the more I noticed he was torpedoing features that would absolutely "make the software
easier to modify". A good example of this is the time he insisted we copy-and-paste code between two projects but "keep
them in sync". In his opinion, it would have been too much investment to extract the code into a library and 
apply SemVer; "we hadn't earned it yet" because only two projects were going to consume the code.

Ignoring the fact that a second consumer is a good time to extract reusable code, this decision really highlighted the
difference between YAGNI and "We Have to Earn It" for me. The first is about applying critical thinking to the potential
feature and really considering if it is necessary to write good, easily modifiable software. The latter, on the other 
hand, is a black-and-white rule that invites dramatic rewrites in the future.

## The Example

In this particular example, the idea of copying code into two separate code bases with two separate sets of engineers
working on them, while somehow keeping them in sync, is virtually wishing on a star unless you spend time investing in
it. No human is going to remember to check both repositories before every commit or bother to copy their changes to a
repository they don't even normally work in. Do they even have that codebase cloned and in a state they can run tests? 

You could add something to your AGENTS.md to tell your favorite agentic tool to do it for you, 
but non-deterministic systems are non-deterministic.

The only way to truly ensure two sets of files in two repos stay in sync is by building or deploying tooling. Perhaps
this would be a simple CI check that stops merging if they're out of sync. Or using a script to automatically merge
those files together, relying on a human to handle any complicated or conflicting changes. In any case, something has
to be built or you're not actually committing to keep the code in sync. 

### The SemVer Aside

Luckily for us, [Semantic Versioning](https://semver.org) (SemVer) is a community standard for handling this situation. 
If you're not familiar, it is a version number scheme (think 1.0.0, 2.0.1, 2.1.0, etc.) primarily for software libraries 
so that consumers of those libraries can bring in new changes in a safe, predictable way.

In SemVer, versions starting with the same first number (called Major) do not have any breaking changes as the second
(Minor) or third (Patch) number increase. So if you're currently using version 1.0.0 and upgrade to 1.1.0 or 1.0.1, you
should not need to worry about any breaking changes. The new versions might add new features or bug fixes, but your 
existing implementation should continue to work.

Conversely, a bump in the major version indicates breaking changes and you need to spend time reading the release notes,
updating and testing your implementation, etc. Most libraries try to minimize how often this happens to continue to 
provide an easy upgrade path for their consumers. For example, Express.js has been around since 2010, has had ~170
different releases, but is still on major version 5. Roughly 165 upgrades were easy to make.

### Back to Our Example

Thinking about our example again, it's easy to see how using a library and SemVer would actually make it easier to 
modify the code, both in the library and in the two repositories, because of the decreased cognitive load and concerns
over keeping things in sync and tested. The two projects could actually independently upgrade their version of the library,
which wouldn't have been possible with our copy-and-paste-then-verify features.

But one could (and did) argue that "we haven't earned SemVer" until the first time there's a breaking change in the 
code. But that's clearly not true because we "earned" standardized versioning because the only alternatives involved
inventing bespoke versioning schemes that were less effective. The community has already found a pretty efficient way
to handle versioning shared code and would iterate upon the standard if it was causing waste during development.

YAGNI is a reminder to think because, when someone tells you "YAGNI", you can push back and say "I think we are going to
need it because...". "We Haven't Earned It" is a hard stop and shuts down conversation.

## Remember, It Depends

Any hard-and-fast rule for writing software you come up with will almost certainly end up causing problems, especially 
as the industry moves more and more towards agentic coding. The engineer's superpower when coding is thinking and that
becomes doubly true when a bot is writing the code. If you've given up thinking in favor of mandates, 
you might as well just let the agent make all the decisions.

(Hilariously, in this situation, every agent and model recommended SemVer. It's in the training data, it's a well
understood standard, and it solves the problems in better ways than tinker toy solutions.) 
