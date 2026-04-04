---
title: "How we built a virtual filesystem for our Assistant"
date: 2026-04-03T00:00:00-05:00
published: 2026-03-24T00:00:00-05:00
link: "https://www.mintlify.com/blog/how-we-built-a-virtual-filesystem-for-our-assistant"
---

Mintlify needed their AI documentation assistant to explore docs without spinning up expensive sandboxes for each session. Their solution was ChromaFs, a virtual filesystem layer built on top of their existing Chroma vector database, exposing standard filesystem operations like `ls` and `read` that the LLM already knows how to use. Session startup time dropped from around 46 seconds to roughly 100 milliseconds.
