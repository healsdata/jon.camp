---
title: "Data Portability: Google Music to Last.Fm"
date: 2020-09-12T09:03:59-05:00
author: Jon
layout: post
aliases:
  - /2020/09/data-portability-google-music-to-last-fm/
categories:
  - music
  - learning
---

I've been a subscriber to Google Play Music / YouTube Premium since it launched in 2016. I watch a lot of YouTube videos on my TV with Chromecast -- YouTube Premium makes that ad-free. Combined with a music streaming service for the whole family and its definitely worth the $15 / month.

In that time, I've had access to music both through the Google Play Music and YouTube Music apps. There's pros and cons of both: YouTube Music has musical YouTube videos that aren't available as singles on streaming services. In the other column, Google Play Music is 100% a better streaming app in every way. Especially when it comes to music discovery. A radio station in Google Play Music is a great way to discover music, similar to Pandora, Spotify, etc. A radio station in YouTube Music uses the YouTube algorithm: you get a bunch of songs from the same artist, others related to random videos you've watched, and occasionally related music.

{{< rawhtml >}}

<figure style="max-width: 100%">
  <a href="/images/content/data-portability/usher-radio.png"><img aria-describedby="caption-42" src="/images/content/data-portability/usher-radio.png" alt="Example YouTube Music radio seeded by Usher, with Usher appearing 4 times in the first 10 tracks, including #1 and #2.." /></a>
  
  <figcaption id="caption-42">
    Example YouTube Music radio seeded by Usher, with Usher appearing 4 times in the first 10 tracks, including #1 and #2.
  </figcaption>
</figure>
{{< /rawhtml >}}

Needless to say, when Google announced earlier this year that [Play Music](https://support.google.com/youtubemusic/thread/62843644?hl=en) is going away, I was bummed. I started considering other services with better music discovery, like Spotify, but I still make heavy use of ad-free YouTube and don't want to pay for two different services.

In my search for a Free/Freemium music discovery tool, I happened upon a Reddit comment recommending [Last.fm](https://www.last.fm/). Last.fm's music recommendations work on the idea of "scrobbling":

> Scrobbling involves taking the last songs you played through your media player (eg. iTunes), and filing away the info to improve, and better tailor the songs that are played for you through last.fm.
>
> -- Urban Dictionary

Last.fm has an Android app and it will log anything you play with YouTube Music. I listed to a few songs, got some recommendations from Last.fm. Huzzah, so far so good. But I really didn't want to start from scratch. Theoretically, the Google Play Music algorithm had four years of my music listening history to power new recommendations. All of that would be lost to the aether.

Again, a Reddit post to the rescue. It was recommended to combine [Google Takeout](https://takeout.google.com/settings/takeout), Google's data portability service, with [Last.fm-Scrubbler-WPF](https://github.com/coczero/Last.fm-Scrubbler-WPF), an open source tool that lets you manually scrobble songs. The tool includes a CSV importer so, in theory, it would be as simple as mapping the Google Takeout data to CSV and then running the importer.

Google Takeout's data for Google Play Music is really well structured. For each track you've ever listened to, you get a CSV file with Title, Album, Artist and Play Count. It was very simple enough to map this data to Scrubbler's format, duplicating each line once for each play count.

YouTube Music Takeout data was a bit more of a pain. You get a single `watch-history.json` file that combines your YouTube Music and YouTube history. The data only consistently provides the video's title & URL. Sometimes you get a subtitle field which can contain the YouTube channel for the video or the search term you used in YouTube Music. So to import the YouTube Music data to Last.fm, I had to leverage the YouTube metadata API to get the full information for each video by URL. Then I was able to map it to the appropriate CSV format for Scrubbler.

All in all, this took an evening of hacky coding and a few days of importing due to the Last.fm API limits -- I guess they expect you can only listen to 2,800 songs in any given day. But it worked! I'm getting some cool recommendations from Last.fm:

{{< rawhtml >}}

<figure style="max-width: 100%">
  <a href="/images/content/data-portability/lastfm-recommendations.png"><img aria-describedby="caption-43" src="/images/content/data-portability/lastfm-recommendations.png" alt="A list of song recommendations from Last.FM" /></a>
  
  <figcaption id="caption-43">
    A list of song recommendations from Last.FM
  </figcaption>
</figure>
{{< /rawhtml >}}

Next steps? I want to figure out how to automate creating playlists in YouTube Music with these recommendations.
