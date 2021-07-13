---
title: "Cracking the Password in Trivia Murder Party"
date: 2020-07-04T09:03:59-05:00
author: Jon
layout: post
aliases:
  - /2020/07/cracking-trivia-murder-party-password/
categories:
  - password
  - learning
---

_This is a follow-up to my post on finding the [best passwords for Trivia Murder Party](/bell/2020/06/trivia-murder-party-password/). See that post for the rules of Password in Jackbox's Trivia Murder Party 2 and more background information._

The actual best way to crack the password in game would be an interactive tool that immediate surfaces the best next word to try based on the previous results. If you enter _cost_ and learn the last letter is _T_ and the first letter isn't _C_, then there's no reason to try _coin_. But that seems a bit too much like cheating.

So instead, this strategy centers around a word list that will help you identify the vowels (including _y_) in the opponents' words. Once you've identified one or more vowels, you can start making logical guesses from there. Remember, R S T N L are still the most consonants, even when only considering four-letter words.

Vowels are the obvious choice. In my word set, there's only five words that don't contain a vowel: brrr, cwms, pfft, psst, and tsks. There's also only one word entirely made of vowels, yoyo.

I also considered the time limits on the game. You're given 30 seconds to crack the password. If you can type 60wpm and take into account some network and brain latency, you'll get about 15 guesses.

To start off identifying a short list of words to use to find the vowels, I wanted to create a regex that would find the next helpful in the word list. There was no point in doing `/[aeoiuy][aeoiuy][aeoiuy][aeoiuy]/` because we already know there's only one word that matches. Instead, I created four regexes:

```
[a-z][aeoiuy][aeoiuy][aeoiuy]
[aeoiuy][a-z][aeoiuy][aeoiuy]
[aeoiuy][aeoiuy][a-z][aeoiuy]
[aeoiuy][aeoiuy][aeoiuy][a-z]
```

Once I ran them and found the matches, I then looped over each match and created a new set of regexes that eliminated the vowels provided by the matched word. For example, when "yoyo" matched, the new regex set was:

```
[a-z][aeiuy][aeoiu][aeiuy]
[aeoiu][a-z][aeoiu][aeiuy]
[aeoiu][aeiuy][a-z][aeiuy]
[aeoiu][aeiuy][aeoiu][a-z]
```

I called this code recursively for a maximum of 8 matching words. Six words would be the ideal number, as there as six vowels, but again, we know there's only one word made entirely of vowels. Seven would be better, but it was taking some time to run and I wanted to start seeing results faster.

One of the first results was:

## yoyo > uvea > aeon > luau > oily > eyre > iris > ptui

While those are all valid words, some of them are archaic, rare, or just weird. I don't know what word list Trivia Murder Party is using, so then I manually began to remove words that seemed pretty uncommon. I wanted to find an option that used more common, every day words.

## buoy > lieu > mayo > yeti > iota > eyre > uric > onus

These words all look pretty common to me, so next time I get a chance, I'm going to see if the game accepts _lieu_ and _eyre_. If so, this is the shortest list of words to identify all the vowels. Additionally, _onus_ will be helpful to find (or rule out) an _S_ in the last spot, the most common letter placement from our study.

If eyre or lieu isn't accepted, here are other options I'll try:

- **aloe > luau > oily > yeti > yoyo > eyes > your > ions > unit** - Is yoyo acceptable to the game?
- **luau > mayo > idea > oboe > eely > yogi > unit > blue > sill > type** - One word longer, but everyone word seems very likely to be accepted.

And remember, if you have't matched ANY letters by this point, try **brrr > cwms > pfft > psst > tsks**.

I'm sure there's more optimization to be done here, taking into account the frequency of consonants in each position. Additionally, once you have the optimal word list, there must be an optimal order in which to enter them. For example, if you think your opponent has read my post on the best passwords to use, _eely_, _eyre_ or _eyes_ should be your first word to seek out that starting _E_.
