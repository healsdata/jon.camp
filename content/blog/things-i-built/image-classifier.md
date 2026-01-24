---
title: "Building an ML-Powered Image Classifier with Claude"
date: 2026-01-23
tags:
  - learning
  - vibe coding
---

I recently built an image classification and curation system to help organize a few thousand photos, screenshots, and memes that had been stuffed into a "Unsorted" folder over the years.
I decided to vibe code the project, both to get more experience with Claude Code but also because using models in my code is relatively new to me.

<!--more-->

This wasn't my first crack at the problem. I'd previously cobbled together a solution using ChatGPT (I didn't have a paid AI tool at home.) I copied code snippets, pasting them into PyCharm, copying errors back, and repeating. 

The result worked, but it was pretty inaccurate. The models it suggested were smaller and less capable, nothing ran on my GPU, and the whole thing felt brittle.

Plus, I only got a handful of prompts per day with the free plan.

## Enter Claude Code

Over the holidays, I saw a bunch of posts mentioning that Opus 4.5 was a game changer for vibe coding. I installed Claude Code and grabbed the $20 subscription to check it out.

The difference with Claude Code was night and day. Instead of copying snippets back and forth, Claude worked directly in my codebase -- reading files, making edits, running commands, and iterating on errors without me as the middleman. 

This was also a huge difference from the Copilot plugin I'd been using in my IDE at work. It felt less like using a tool and more like delegating tasks to a junior developer that was great at asking follow-up questions.

Claude suggested more capable models, figured out why they weren't running on my GPU, and built simple web pages for viewing and selecting images.

## Models Used

The system Claude & I built combines multiple AI models, each chosen for a specific task:

**YOLOv8** handles person detection, counting how many people appear in each image. This forms the foundation for initial categorization.

**OpenCLIP** distinguishes photographs from illustrations and artwork. It checkes each image, generating similarity scores that determine classification.

**BLIP** generates descriptive captions for every image. After removing filler words from the captions, they became the new file name for the images.

I let the models categorize the images but used the web view to verify those categories. After all, even Google Photos manages to confuse the black cats in this house for each other.

## Conclusions

The whole system runs locally, processes images in batches, and stores everything in a SQLite database. It's not fancy, but it solves my problem and taught me a lot about integrating multiple AI models into a cohesive workflow. 

In retrospect, BLIP probably would have been able to do the whole job. I added it last to generate the captions but they had enough details to do the classification. It yielded phrases like "A digital painting of a fountain with a dragon in the middle."

More importantly, I got a bunch of practice with Claude Code, which is now the tool of choice at my day job. 
