---
title: 'Mastodon'
date: 2022-11-11T08:35:00-05:00
summary: "Thoughts and information about the federated social network, Mastodon"
---

I decided to leave Twitter after Elon Musk's takeover and subsequent unprofessional behavior. I revived my old Mastodon account [@healsdata@fosstodon.org](https://fosstodon.org/@healsdata) and started learning more about the differences between the two platforms. What follows is my notes, learnings, and recommendations.

# Federation

Unlike Twitter, which is a single platform owned by a single company, Mastodon is made up of a countless number of servers owned individually by companies and hobbyist administrators. Those servers use the ActivityPub protocol to talk to each other and your posts (referred to as Toots!) can be viewed by anyone on any of these servers. If this sounds weird, remember that this is how e-mail works. I use GMail, which is owned by Google, while my father still uses AOL. We can email each other with no problem. In fact, this is why user names on Mastodon have the username and domain name parts -- the domain name is the name of your server.

This federation does have an impact on what posts you see on Mastodon:

* Home -- Includes posts from those you follow and posts they've boosted (comparible to Retweets).
* Local Timeline -- This is posts from anyone on the same server as you. More on this later.
* Federated Timeline -- All posts that appear in "Home" for anyone on the same server as you.

Because the local timeline is folks from the same server as you, many Mastodon servers are built around a particular topic. phpc.social focuses on the PHP programming language, infosec.exchange focues on infosec, and dice.camp focuses board games. This is a great way to see a toots from folks with similar interests (and maybe find new accounts to follow). Conversely, it is recommended that companies and organizations start their own Mastodon server so that people who work there are easily verified as employees. The official Mastodon server for the Internet Archive, for example, is mastodon.archive.org. Anyone who's handle ends with @mastodon.archive.org is therefore an employee or representative of the organization.

Because of federation, there's some other new experiences you might encounter:

* The easiest way to follow someone is to search for their handle from your server. This works on both the web interface and mobile apps. If you try to follow them by clicking "Follow" on their profile, and you're not on the same server, you'll be asked for your own handle first. Think of this like adding contacts to your own email client -- you have to do it on your end, because the other person's email provider has no idea who you are.
* Search won't go through all the toots in the world. It will only search through toots in your Federated Timeline. This is generally regarded as a good thing because it makes it harder for bad actors to search for a key phrase and harass anyone who's said it.

# Harassment and Moderation

There's a few familar ways for you to deal with bad actors on Mastodon -- muting and blocking. These work like you would expect if you're a Twitter ex-pat. A muted user's toots won't appear in your timelines and a blocked user won't be able to see your toots or direct message you.

However, reporting a person or toot works a bit different. Instead of going to a single governing body, like Twitter (the company), it goes to the administrators of your server. They have a few tools at their disposal to deal with troublemakers. If the user is on the same server as you, they can ban the user from using that server. If the user is on another server, they can block that user and/or escalate the issue to the administrators of that server. And, if it turns out another server is full of bad actors, the admins can block a whole server. In fact, there are block lists that many server administrators use to block traffic from known... hive of scum and villainy.

The downside, of course, is that moderation on your server is handled by folks who are usually running the server as a hobby. You may not agree with their decisions and moderation will vary from server to server. Thankfully, it is relatively easy to switch to a new server with a better reputation if your admins let you down.

