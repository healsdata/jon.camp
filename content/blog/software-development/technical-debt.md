---
title: "On Technical Debt: Fix That Jawn"
date: 2023-07-08T09:03:59-05:00
lastmod: 2024-03-24T17:17:00-04:00
author: Jon
layout: post
slug: technical-debt
summary: "Accruing technical debt after an incident is not the same as accruing technical debt in the process of building new features."
---

{{< rawhtml >}}
<blockquote>
<small>
Content Warning: This post uses the <a href="https://whyy.org/series/i-95-bridge-collapse-philadelphia/">I-95 Bridge Collapse</a> as a metaphor for technical debt and building software. The original incident resulted in the death of one driver; the real, meaningful impact of this incident should not to be minimized.
</small>
</blockquote>
{{< /rawhtml >}}

On June 11th, 2023 a bridge collapse on Interstate 95 in Philadelphia resulted in a major portion of the highway being closed for the foreseeable future. I-95 is a key artery between New York and Washington, DC that sees rougly 160,000 vehicles a day. When the incident first happened, many Philly residents on social media speculated traffic would be a nightmare for months, if not longer.

Thanks to the hard work by countless people, including construction works and government officials, a six-lane temporary bridge opened just twelve days later. It had less lanes than the original bridge and leverages a backfill for support that resulted in the underpass being closed. But traffic was flowing and it inspired this LinkedIn post:

{{< rawhtml >}}
<figure>
<img src="/images/content/technical-debt/linkedin-post.png" alt="A screen shot of a LinkedIn post, including a picture of the before and after of the bridge collapse and the temporary bridge" />
<figcaption>
A post by Aaron Held:

Pennsylvania has delivered a clear example of good technical debt that stems from an incident.

Feel free to use this to explain how much less expensive the fix would have been if we just shut down the highway and rebuilt it the right way!

Customers are complaining about increased traffic and the loss of functionality but the product team knows that the alternative would have been worse.

#TechDebt

</figcaption>

</figure>
{{< /rawhtml >}}

I'm in agreement that the temporary bridge is a good example of handling incident response. Put something in place (or in most cases, rolling back the latest changes) to get the system operational again. This can be in a way that results in a less than optimal solution but provides enough value to let a proper plan and solution follow later.

Where I think Held's post falls apart is in comparing this to technical debt where developers and product people may instead advocate for "doing it right" from the beginning. I've never worked with a developer who, when paged to join an incident response at 4am, wanted anything more than to get things back to status quo, so they could go to bed. 

In my opinion, Held is conflating conversations where development teams don't want to cut corners to get **new** features out the door. I have seen this conversation unfold many, many times, and it is often a defense mechanism. The team knows there will be problems cutting corners and simply wants to "do it the right way".


