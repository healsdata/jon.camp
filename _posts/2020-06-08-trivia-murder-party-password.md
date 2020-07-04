---
title: 'Best Passwords for Trivia Murder Party'
date: 2020-06-08T09:03:59-05:00
author: Jon
layout: post
permalink: /2020/06/trivia-murder-party-password/
categories:
  - password
  - learning
---
Due to COVID-19 and Pennsylvania's stay-at-home order, I've been playing a lot of [Jackbox Games](https://www.jackboxgames.com) with my friends. If you're unfamiliar with the games, one person in the group has to own the game and then streams it (we've been using Discord for this). Everyone else is then able to play the game remotely through a web page that let's you enter answers.

One of my group's favorite games is [Trivia Murder Party 2](https://www.jackboxgames.com/trivia-murder-party-two/):

 > The game show-loving serial killer from Trivia Murder Party is back, with more trivia and dastardly new mini-games. Can you and your friends survive a night in the Murder Hotel? Who will win? Who will you betray? When was the last time anyone cleaned these rooms?

Password, one of the many mini-games, is a word puzzle that stood out to me as something I could use a bit of programming to get a competitive advantage in. The description, from the [Jackbox Games Wiki](https://jackboxgames.fandom.com/wiki/Trivia_Murder_Party_2), is:

> Each at-risk player is asked to submit a real 4-letter English word as their password. Then, safe players and ghosts try to guess the passwords before time runs out. If a guess has a letter in the right spot, the letter will be shown to the players. Anyone who has their password guessed in time dies.

The first time I played this game, I thought "lynx" would be a great password because it doesn't have a vowel in it. But one of my friends guessed it relatively quickly after realizing the lack of values. My new hypothesis for the "best" password is a word made up of letters that are least likely to appear in any given spot.

Finding a list of four-letter English words was harder than I thought. Most search results hit on things for Scrabble players and wanted to charge for access to the list. I eventually found [All Scrabble Words](http://www.allscrabblewords.com/4-letter-words/) which gave me a ton of words. I then peppered in some more from around the web. In total, once I filtered out duplicates, I ended up with 4,000 four-letter words to examine.

After running a bit of code to count the occurrences of each letter in each spot, I ended up with these results:

|letter|first|second|third|fourth|
|-------|--------|---------|---------|---------|
|a|193|756|337|214|
|b|261|24|107|59|
|c|234|37|147|27|
|d|235|27|135|214|
|e|107|540|369|525|
|f|192|9|75|82|
|g|193|30|126|95|
|h|188|122|33|110|
|i|60|524|254|96|
|j|87|3|10|2|
|k|129|26|86|193|
|l|215|181|296|190|
|m|219|38|165|104|
|n|105|77|329|188|
|o|112|716|231|140|
|p|264|43|131|127|
|q|15|1|1|0|
|r|186|196|356|122|
|s|355|21|190|837|
|t|250|41|213|325|
|u|41|406|155|40|
|v|76|15|59|3|
|w|167|41|83|57|
|x|1|20|22|24|
|y|74|95|53|199|
|z|35|5|31|21|

The next step was to take the least common letters in each spot and iterate over every combination until it matched a word from the original word list. I ended up needing to use more letters in each spot than I expected (16!) to get a list of ten words:

* echo
* eddo
* etch
* etui
* expo
* impi
* itch
* ovum
* umbo
* updo

I haven't been on the "at-risk" side of the Password mini-game since finishing this list but I'm definitely excited to give them a try. I'm not sure if the game will accept the more obscure words, but echo, etch, and itch should all work. Additionally, I want to work on building a list of words for players on the other side. Effectively, what words should you enter to most quickly identify the password entered by your opponents. Stay tuned for another post on that!