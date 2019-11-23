---
id: 23
title: Ruby == Mary Poppins
date: 2013-03-31T16:59:39-05:00
author: Jon
layout: post
guid: https://jon.camp/bell/?p=23
permalink: /2013/03/ruby-mary-poppins/
categories:
  - Languages
tags:
  - 7L7W
  - books
  - learning
  - practice
  - ruby
---
Prior to reading _Seven Languages in Seven Weeks_, my exposure to Ruby was very limited. In a &#8220;hands on&#8221; sense, my only experience was installing Graylog2, a log management package. It is written in Ruby and I needed to work with Rake to get it installed. This wasn&#8217;t hard as PHP&#8217;s Composer draws heavy inspiration from Rake.

Other than that, my knowledge of Ruby was what I gleaned from the occasional blog post that hit the front page of HN comparing PHP and Ruby. Most of them focus on syntax and how much less code you have to write in Ruby to accomplish the same thing.

Bruce A. Tate explains this as _syntactic sugar,_ &#8220;those little features that break the basic rules of the language to give programmers a little friendlier experience and make the code a little easier to understand.&#8221; And, throughout this chapter, I was able to really see that mentality shine. From tools to easily list the methods available on an object, to the names of boolean methods ending with a question mark, it really felt like a language in which clean, readable code is easy to create.

I found all of the examples and self-study challenges easy to complete probably, in part, because Ruby is a loosely-typed, object-oriented language just like PHP. Thanks to their well-written API documents and StackOverflow, anything I needed to look up was easily found.

In the last few pages of the chapter, Tate touched on the weaknesses of the language. I knew that performance was a concern as, years ago, the Penny Arcade folks were bemoaning their Rails site. On top of that, I worry that Ruby might lend itself to easily creating &#8220;clever&#8221; code that&#8217;s hard to debug and change. Tate really emphasizes Ruby as a tool to get your product to market which lets you worry about scaling issues later; this was the case for Twitter, which started out as Ruby and then rewrote core parts of their application in Scala.