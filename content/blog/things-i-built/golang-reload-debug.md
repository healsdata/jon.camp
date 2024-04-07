---
title: "Go: Live Reload & Debugging in Docker"
date: 2024-04-06T09:03:59-05:00
author: Jon
layout: post
summary: An example of using Air (for live reload), Delve (for debugging), and Cobra (for CLI commands) together in Docker for local development.
---

I've been using Go at work for development for the last year. It's been going really well, but we've been running the API
for local development by simply typing ```go run . serve``` in a terminal. *(Note: We use Cobra for building commands, so
the API is starting with the `server` command.)* This leads to times when something has been change but, when you refresh
the browser, the response doesn't change. "Oh, did you restart Go?" been a common question on our mob programming calls.

For unrelated reason, we had discussed using Docker for local development. Myself and one of our staff engineers did separate 
spikes on what it would take. He did a spike on using Delve to get debugging working in Docker with Goland. I did a spike
on using Air for live reloading, so we wouldn't have to continually restart the container when making changes.

Then a bunch of other priorities came up, and we never got a chance to combine our experiments into a working solution.

I assumed using these two tools together (or similar tools) was a solved problem and spent some time poking around Google.
The closest I could find was [Debugging & Live Reloading Go app within Docker Container](https://medium.com/@hananrok/debugging-hot-reloading-go-app-within-docker-container-b44d2929e8bd)
which works well, but the author made their own reload script using inotify to watch for .go files. I wanted the power
and configuration that comes with Air.

So I took it on myself to build a working example that combines Air, for live reloading, Delve, for debugging, and 
Cobra, for running CLI commands. I built heavily on the article above as well as [Today I Learned: Golang Live-Reload for Development Using Docker Compose + Air](https://medium.easyread.co/today-i-learned-golang-live-reload-for-development-using-docker-compose-air-ecc688ee076)

You can find the code for my example here: [healsdata/golang-reload-debug](https://github.com/healsdata/golang-reload-debug)


