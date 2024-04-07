---
title: "[DRAFT] Learn Math"
date: 2023-11-12T09:03:59-05:00
author: Jon
layout: post
slug: learn-math
summary: "A basic understanding of statistics gives you a great sniff test for when people are deceiving you with numbers."
---

{{< rawhtml >}}
<blockquote>
<small>
Content Warning: This post uses statistics about pitbull attacks for examples. I'm not here to offer an opinion on the underlying issue and am just using interesting statistics from "both sides" to illustrate my point.*
</small>
</blockquote>
{{< /rawhtml >}}

> Learn math. Math is how you know when they're lying to you.
>
> -- [Tom Naughton](https://www.fathead-movie.com/index.php/2010/07/13/outstanding-critique-of-the-china-study/)'s physics professor

As a software engineer, if I had gone the traditional college route and pursued a Computer Science degree, I would have taken a number of interesting math classes. But I had burnt out on math in high school after an intensive, night-time advanced math class with instructors who were incredibly poor at making anything they taught relatable, relatable, or real. To avoid more "hard math", I took stasticis instead of calculus my senior year, expecting it to be an easy A for credit.

Turns out, statistics is great. It's how you can figure out cool things like the difference between rolling one 20-sided dice vs. two 10-sided dice and the impact that'll have on your game design. 

It's also a great sniff test for when people are lying to you.

I'm going to walk through an example I saw online recently where folks were discussing whether policies banning pitbulls from apartment complexes are based in evidence or emotion. As with most online debates, it was messy and contenious, but the original poster was really trying to stick to stats. She quoted a study that showed, in a temperment test, "Pit Bulls were less likely to show aggression than [Golden Retrievers], Beagles, Bulldogs, Basset Hounds, Bichon Frise, Corgis, Chihuahuas, German Shepherds, Poodles, Yorkshire Terriers..."<sup>[1](#references)</sup>

Looking at this from a statistical standpoint, we see this quote:

> The American Temperament Testing society tested 870 Pit Bulls. 755 of those passed the test, while 115 did not. They had an 86% pass rate.

On the surface, that seems like a highly relevant number. There was a high sample size, a standardized test, and a quick review of the source doesn't appear to reveal any bias.

But you should immediately start asking questions, especially when the data seems to support one side's arguements so neatly. Questions like:

1. We're told 86% is higher than other breeds tested, but not by how much or what the relevance of the difference is.
2. Does this metric (temperment) directly correlate or predict dog attacks (the original topic)?

Sample Size

For Pitbulls and Golden Retrievers, 870 and 785 dogs were tested, respectively. There's formulas and recommendations for sample size (the number of participants tested) based on population size and other factors, but I personally look for 100+ participants most of the time. Anything smaller is looking just at the individuals tested and can't be assumed to reflect the whole population

In the latter half of the article, the author lists a number of breeds that scored lower than Pitbulls to summarize their point. However, of the nine breeds listed, only four had a 100+ sample size, with the lowest being 31 dogs, and none of the other breeds had a sample size in the 785-870 dog range from Pitbulls and Golden Retrievers. In fact, the only breed listed that was tested to the same (or greater) degree was Germand Shepherds at 3500 dogs.


Relevance
This is a classic way people use statistics to mislead without outright lying. In this article, they compare the Pitbull numbers to the Golden Retriever, "one of America's most beloved breeds" and point out that "785 Golden Retrievers [were tested]. Of those, 669 passed and 116 failed — leaving Golden Retrievers with an 85.2% pass rate."

So yes, 85.2% is absolutely less than 86%. But is it relevant? Since these are percentages, both are "X number of dogs per 100 dogs". It's hard to visualize what 0.2 dogs looks like, so let's multiply the numbers by 5 to get whole dogs.

If you encounter 500 Golden Retrievers, 74 of them will be aggressive (500 - (85.2 * 5)). If you encounter 500 Pitbulls, 70 of them will be aggressive



# References

1. Wadsworth, J. (2023, July 19). American Pit Bull Terrier Temperament Test Has Shocking Result. DogTime. https://dogtime.com/dog-health/general/1220-american-pit-bull-terrier-temperament-dog-bites