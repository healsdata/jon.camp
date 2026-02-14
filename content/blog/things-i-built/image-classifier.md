---
title: "Building an ML-Powered Image Classifier with Claude"
date: 2026-01-23
lastmod: 2026-02-13T13:00:00-05:00
tags:
  - learning
  - vibe coding
---

I recently built an image classification and curation system to help organize a few thousand photos, screenshots, and memes that had been stuffed into an "Unsorted" folder over the years. We are talking blurry screenshots of recipes, duplicate photos from burst mode, memes I saved in 2019 and forgot about, and buried somewhere in there, actual photos of the house, the cats, and things I actually wanted to keep.

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

## Predicting What to Keep

After classifying and sorting everything, I still had thousands of images to go through. The duplicate detector knocked out a good chunk of them automatically, catching both exact copies and near-duplicates where I had saved the same meme twice or taken three nearly identical photos of a cat sleeping on the couch. But that still left a lot of images that needed a human decision. Keep the nice photo of the kitchen renovation, trash the blurry screenshot of a shipping notification.

The selector tool let me flip through batches and mark images as worth keeping or garbage, but doing that for every single image was tedious.

So Claude and I built a prediction step. The idea is simple. After I had labeled a few hundred images by hand, we trained a logistic regression model on the CLIP embeddings of those labeled images. CLIP embeddings capture the visual "meaning" of an image as a vector, so the model learned what my kept images had in common versus the ones I tossed. It picked up pretty quickly that photos of the cats and the house were keepers, while blurry screenshots and random downloads were not.

Running `make predict` trains the model on my labeled data, then scores every unlabeled image with a probability of being worth keeping. The selector tool can then sort by predicted score, putting the most likely keepers at the top and the obvious garbage at the bottom. This turned a multi-hour slog into something I could knock out in a few minutes, mostly just confirming what the model already guessed.

The model is not doing anything groundbreaking. Logistic regression on CLIP embeddings with standard scaling and five-fold cross-validation. But it works surprisingly well because the embeddings are doing the heavy lifting. CLIP already understands visual content at a high level, so even a simple classifier on top of it can pick up on patterns like "photos with good composition" versus "blurry screenshots of nothing."

## Conclusions

The whole system runs locally, processes images in batches, and stores everything in a SQLite database. It's not fancy, but it solves my problem and taught me a lot about integrating multiple AI models into a cohesive workflow.

In retrospect, BLIP probably would have been able to do the whole job. I added it last to generate the captions but they had enough details to do the classification. It yielded phrases like "A digital painting of a fountain with a dragon in the middle."

More importantly, I got a bunch of practice with Claude Code, which is now the tool of choice at my day job.
