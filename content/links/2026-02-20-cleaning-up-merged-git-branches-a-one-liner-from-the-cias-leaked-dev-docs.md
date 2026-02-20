---
title: "Cleaning Up Merged Git Branches, a One-Liner from the CIA's Leaked Dev Docs"
date: 2026-02-20T00:00:00-05:00
published: 2026-02-20T00:00:00-05:00
link: "https://spencer.wtf/2026/02/20/cleaning-up-merged-git-branches-a-one-liner-from-the-cias-leaked-dev-docs.html"
---

Buried in the 2017 Vault7 CIA leaks was a page of internal developer git tips, including a one-liner for deleting all merged local branches by piping `git branch --merged` through grep and xargs. The author has kept it in their shell config ever since, dressed up as a `ciaclean` alias.
