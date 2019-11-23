---
id: 29
title: 'Io, Io, it&#8217;s off to work we go'
date: 2013-04-28T20:42:22-05:00
author: Jon
layout: post
guid: https://jon.camp/bell/?p=29
permalink: /2013/04/io-io-its-off-to-work-we-go/
categories:
  - Languages
tags:
  - 7L7W
  - io
  - learning
  - practice
---
The second language covered in _Seven Languages in Seven Weeks_ is [Io](http://iolanguage.org/). If you&#8217;re like me and enjoy Googling for help learning a new language, this one is tough. The only real sources of information about Io seem to be the official website and answers to the questions raised in this very book. As of this writing, there&#8217;s only **39** questions tagged with &#8220;iolanguage&#8221; on StackOverflow (compare to [Ruby&#8217;s](https://jon.camp/bell/2013/03/ruby-mary-poppins/) 71,477).

That being said, Tate picked Io because he &#8220;struck JavaScript because it was _too_ popular and replaced it with the next most popular prototype language&#8230;&#8221; He also indicated that he had a much stronger understanding of how JavaScript worked after learning Io. 

One thing I struggled a bit with is that most commands in Io read backwards compared to what I&#8217;m used to from other languages, but not always.  
`# PHP<br />
print "Hello, World!";<br />
echo "Hello, World!";`  
`# Io<br />
"Hello, World!" print<br />
write "Hello, World!"`

In the first example, Io is sending the _message_ print to the _sequence_ &#8220;Hello, World&#8221; while, in the second example, the sequence is being passed to the write _method_ as an argument. Loop constructs also can work from both sides.

`# 0..9<br />
for (i, 0, 9, i println)<br />
10 repeat (i, i println)`

Tate does spend a section talking about how Io is powerful when building a domain-specific language. Like Ruby, Io let&#8217;s you replace any built in functionality with new versions. For example, in one of the daily lessons, the book has you replace the built in division operator (&#8220;/&#8221;) with one that returns zero if the divisor is zero.

Overall, I felt that the real meat of this section was in the first lesson, while the other days were merely code exercises. I found this section severely lacking compared to the one on Ruby, which is Tate&#8217;s &#8220;native&#8221; language. I won&#8217;t know if that is a criticism of the book or just this section until I finish the next.