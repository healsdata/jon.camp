---
title: "Write About Your Niche Technical Learnings"
date: 2026-02-13T23:00:00-05:00
author: Jon
layout: post
slug: write-about-technical-learnings
summary: "@feld wrote a deeply specific blog post about WolfSSL's broken TLS 1.3 implementation and it reminded me why niche technical writing matters more than most people think."
tags:
  - writing
  - software-development
---

I read a blog post this week called ["WolfSSL Sucks Too, So Now What?"](https://blog.feld.me/posts/2026/02/wolfssl-sucks-too/) and it made me smile like an idiot. 

It's a deeply specific post about how WolfSSL's TLS 1.3 implementation breaks RFC compliance around middlebox compatibility mode, and how that causes real problems for anyone running Elixir or Erlang HTTP clients against WolfSSL servers. It's something I knew nothing about and will probably never use in my career. In fact, it's the kind of thing that maybe only a few hundred people in the world will ever need to know. And it's *exactly* the kind of writing the internet needs more of.

Someone hit a wall, dug through multiple layers of "are you kidding me?", and then wrote it all down so the next person doesn't have to. That's it. That's the whole thing. And it's incredibly valuable.

## The Case for Niche Writing

There's a version of blogging advice that tells you to write for a broad audience. Pick topics with search volume. Optimize for reach. That always felt backwards to me.

The most engaging technical posts were someone explaining a very specific problem they ran into, what they tried, and what finally worked. Written for an audience of maybe twelve people who will someday Google the same error message at 2am.

That WolfSSL post is a perfect example. The author isn't trying to grow a newsletter to a million subscribers. They hit a real problem, understood it deeply enough to explain it, and published what they found. The next developer who gets mysterious TLS handshake failures connecting to a WolfSSL server now has a trail to follow.

## Writing Helps You Understand and Remember

There's a practical reason to write about what you learn, beyond helping strangers on the internet. Writing forces you to actually understand the thing. Addy Osmani [captures this well](https://addyosmani.com/blog/write-learn/). You think you understand something until you try to explain it, and then you realize there are three things you glossed over and two things you got wrong. It's basically the [Feynman Technique](https://en.wikipedia.org/wiki/Feynman_Technique) with a publish button.

But writing doesn't just clarify your thinking. It helps you [retain it](https://www.scientificamerican.com/article/why-writing-by-hand-is-better-for-memory-and-learning/). When you write something down, you have to actively process it. You have to decide what matters, figure out how to say it, and put it in an order that makes sense. That's why [taking notes works](https://www.theswaddle.com/is-this-normal-does-writing-help-you-remember) even if you never look at them again. The value isn't in having a reference. It's in the cognitive work your brain did while writing.

A blog post is just notes you organized well enough for someone else to follow. And that extra effort of making it legible to a stranger? That's even more processing. Even more remembering.

## This Isn't (Just?) For An Audience

One thing that holds people back is the idea that nobody will read it. Or that you have to post to your blog every Tuesday and Thursday to maintaining engagment. 

And honestly, they might be right. Your post about a specific Terraform provider bug might get ten visitors in its first year. But [those ten visitors needed it](https://www.smashingmagazine.com/2012/03/publish-what-you-learn/). 

And even if literally nobody reads it, you still got the benefit of having to organize your thoughts well enough to write them down. That's not nothing.


> Keep writing. Keep doing it and doing it.
>
> -- Heather Armstrong
