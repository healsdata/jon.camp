---
title: Security Questions
date: 2013-11-03T13:08:04-05:00
author: Jon
layout: post
aliases:
  - /2013/11/security-questions-are-insecure/
tags:
  - keepass
  - password
  - security
---

I'm sure it is an example of the [Baader-Meinhof Phenomenon](http://www.damninteresting.com/the-baader-meinhof-phenomenon/), but I've seen quite a few comments lately about people having their eBay, Facebook, or other online account "hacked" by their parents. One such example came from this month's issue of [Psychology Today](http://www.psychologytoday.com/blog/women-and-happiness/201303/what-do-we-owe-dying-parent):

> One morning I woke to discover my bank account overdrawn by thousands of dollars. In a late-night shopaholic moment she’d hacked both my Paypal and Ebay accounts&#8211;easily answering my security questions like "in which hospital were you born?" and "what's you mother's maiden name?"—and bought more antique French dishes than we could ever eat off of.

As the author states, her accounts were compromised because common security questions are, inherently, things that other people know. We like to believe that the people who know this information about us won't use it and that the "evil hacker" somewhere on the internet won't have access to it. Neither of these things are true. You can only tell so many different websites your mother's maiden name before one of them is hacked and that answer is forever associated with your email address.

**How to Protect Yourself**

- Lie. As long as you can remember the answer, make one up.
- Some websites allow you to set your own question. This is a simple solution, as you can pick a question and answer that is both unique to that site and limits the number of other people who know the answer. Just avoid picking question and answer combos that are from your favorite movie or TV show. Scripts are readily available online and easily Google-able.
- Treat the answers to security questions like one more password. Select another [strong password](http://xkcd.com/936/) and use it instead of the real answer.

**Use A Password Manager to Handle Security Questions**  
I'm a big advocate of using a password manager, like KeePass, to generate strong passwords and keep track of them. You can also use these programs to "answer" security questions and record your made up answers.

KeePass makes this easy with the "Advanced" tab attached to each entry. You click "Add" and then you're able to enter any other values to keep track of. There's even a option for "Enable in-memory protection" which treats the answer as sensitive and masks it out in the preview screen.

{{< rawhtml >}}

<figure style="max-width: 100%">
  <a href="/images/content/security-questions/keepass-advanced.png"><img aria-describedby="caption-42" src="/images/content/security-questions/keepass-advanced.png" alt="A screenshot from Keepass, adding the question 'What is your highschool mascot?' with random gibberish as the answer." /></a>
  
  <figcaption id="caption-42">
    My high school mascot was really a walrus...
  </figcaption>
</figure>
{{< /rawhtml >}}

When I use this option to track my answers to security questions, I also use KeePass to generate the answer. This is as simple as clicking on "Tools" and then "Generate Password List" where a list of several secure answers will appear on the "Preview" tab. Some websites limit what you can type in the security answer, so you may need to generate a password without any special characters to use it as an answer.

**Conclusion**  
Even if you are vigilant about choosing strong passwords, answering common security questions honestly can often weaken the safety of your online accounts. To protect yourself, treat security questions like one more password field. As always, this is made easier by using a password manager to generate and track your passwords.
