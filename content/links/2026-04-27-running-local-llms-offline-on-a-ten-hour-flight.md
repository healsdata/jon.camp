---
title: "Running Local LLMs Offline on a Ten-Hour Flight"
date: 2026-04-27T00:00:00-05:00
published: 2026-04-22T00:00:00-05:00
link: "https://deploy.live/blog/running-local-llms-offline-on-a-ten-hour-flight/"
---

On a 10-hour London-to-Las Vegas flight with no wifi, Dmitri Lerko ran Gemma 4 31B and Qwen 4.6 36B on a MacBook Pro M5 Max to build a billing analytics tool on real company data and process roughly 4M tokens of smaller tasks. He hit three limits: power draw draining the battery even while plugged in, heat from 70-80W sustained GPU use, and context degradation past 100k tokens. A secondary finding: he'd been using an iPhone cable that delivered only 60W instead of the MacBook cable's 94W, a gap that went undetected without instrumentation.
