---
title: "Databases Were Not Designed For This"
date: 2026-04-26T00:00:00-05:00
link: "https://arpitbhayani.me/blogs/defensive-databases/"
---

Traditional databases were built around assumptions that AI agents break: deterministic callers, intentional writes, short-lived connections, and failures that are loud and obvious. The post covers defensive patterns (soft deletes, append-only logs, idempotency keys, role-based access) for making databases safer under agentic workloads.
