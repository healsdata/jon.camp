---
title: "Tools & Techniques: More Isn't Always Better"
date: 2024-07-12T09:03:59-05:00
lastmod: 2024-07-12T09:03:59-05:00
author: Jon
layout: post
slug: all-the-techniques
summary: There are a lot of helpful tools and techniques in the agile and development community, 
  but mixing them all together can lead to unintended side effects and consequences. 
tags:
  - xp
  - agile
---

One of my favorite board games is Carcassonne. It is easy to teach to new players but has randomness and strategy aspects 
that lead to endless replayability. As of this writing, there are ten large expansions and dozens of mini expansions. 
The expansions are of different quality and enjoyability, but one thing I would absolutely not recommend is playing with
them all at once. Here's what one BoardGameGeek forum poster said on the matter:

> I was once succumbed to this torture. I really do not plan on ever doing it again, I couldn't even bring myself to play regular old [Carcassonne] for a year after this.
> 
> I just fail to see the point... perhaps fun in theory but horribly long and tedious in practice.
> 
> -- [Branko K.](https://boardgamegeek.com/thread/641010/article/6606013#6606013)

## Strong-Style Pairing

When I first sat down to write this post, I was going to share how I didn't like [Llewellyn’s strong-style pairing](https://llewellynfalco.blogspot.com/2014/06/llewellyns-strong-style-pairing.html)
after being forced to do it for a year. I saw it as a crutch to solve some specific problems people have while pair-programming,
but not something appropriate for a daily driver. But then I reread the original blog post and found myself agreeing with
the author's take on many things. He specifically lays out common pairing problems and discusses how his approach addresses them.

I quickly realized that my team had layered other techniques and tools on top of strong-style pairing that either didn't work 
with the approach or flat out conflicted with the original purpose.

## Rotation Timers or Mechanisms

One of the common challenges with pair-programming is when someone grabs the keyboard, codes for a long time, and the other
person(s) are just left idly watching. Llewellyn’s article specifically calls this out as something the strong-style
approach addresses.

An alternative way to address this is with rotation timers or mechanisms. For example, TDD proponents often recommend 
that one person  writes a test, passes the keyboard so the next person writes the code to make it pass, adds another test, 
and then passes the keyboard again. 

My team had added a timer technique from [mob programming](https://www.agilealliance.org/resources/experience-reports/mob-programming-agile2014/) on top of strong-style pairing:

> We rotate the Driver every 15 minutes, so no one is attached to the keyboard for very long. Using a randomized list of 
> who is working that day, we “rotate” through the list: Every 15 minutes the current Driver moves away from the 
> keyboard and joins the Navigators and the next person on the list moves to the keyboard to start typing.

Strong-style pairing says that, if you have an idea, you become the navigator and give instructions to the driver to 
implement it. Additionally, it says "The right time to discuss and challenge design decisions is **after the solution is 
out of the navigators head** or when the navigator is confused and unable to navigate." (emphasis added)

But with timers, the navigator often won't have time to get the solution out of their head. They're forced to stop, often
mid-sentence, and hand the reins over to someone else. Someone who may not have understood where things were going -- 
specifically because one of the two techniques involved told them not to ask questions _yet_.

## Strict Mob Programming Roles

In addition to timers, my team had adopted strict roles from Willem Larsen's [Mob Programming: The Role Playing Game](https://github.com/willemlarsen/mobprogrammingrpg).
This includes splitting up the non-drivers into a single navigator and multiple "mobbers". Of note, this conflicts
with the mob programming article above which continually refers to the non-drivers as navigators and gives them equal
footing. 

This also creates a new role not specified in strong-style pairing -- someone who doesn't know what's going on and isn't 
being guided to do anything. The RPG recommends they "contribute an idea" and "ask questions till they understand" -- 
behaviors that are discouraged by strong-style pairing wherein we're supposed to trust the navigator until they 
finish their thought. In practice, mobbers end to do what mob.sh recommends: "Maria checks her twitter".

Additionally, under this set of roles, the navigator is supposed to "Ask for ideas", in conflict of the recommendation
that you become the navigator when you have an idea you want to implement. I can only assume this was borne out of the 
fact that the navigator doesn't know what's going on and is randomly assigned (the RPG encourages using a
3-minute mob timer).

## Talking stick

In an attempt to double down on the three roles, my team implemented the [talking stick](https://en.wikipedia.org/wiki/Talking_stick) 
concept; only the navigator was allowed to speak and mobbers needed to use chat. The stated intent was to ensure the 
driver wasn't just jumping ahead with ideas contributed from the mobbers before the navigator selected one. But in retrospect, 
I think the root of the problem was that the previous navigator was just trying to finish their existing idea, as described
by strong-style pairing.

## Conclusion

With the best of intentions, my team had combined four collaboration techniques that ultimately led to gridlock. On 
their own, each tool was meant to address a specific issue or "turn up the good" of specific behaviors. But they weren't
necessarily designed to work together and often detracted from the effectiveness of each other. 

When looking at a situation with your team, consider the best tool or technique available to help. When the next
situation arises, don't just layer another tool or technique on top. Consider if you're still being served by the 
existing approach and _switch_, if necessary.


