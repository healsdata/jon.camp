---
title: "Deterministic Core, Agentic Shell"
date: 2026-02-16T12:00:00-05:00
published: 2026-02-14T00:00:00+00:00
link: "https://blog.davemo.com/posts/2026-02-14-deterministic-core-agentic-shell.html"
---

Dave proposes an architectural pattern for LLM-powered apps inspired by Gary Bernhardt's "Functional Core, Imperative Shell." The deterministic core (XState) enforces workflow rules and valid state transitions while the agentic shell (Mastra + OpenAI) handles natural conversation. Tools act as the membrane between them, letting the agent query state and take actions only as the state machine allows.
