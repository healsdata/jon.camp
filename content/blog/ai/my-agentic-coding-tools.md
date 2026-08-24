---
title: "My Current Agentic Coding Tools"
date: 2026-04-26T09:00:00-05:00
lastmod: 2026-08-23T09:00:00-05:00
author: Jon
layout: post
slug: my-agentic-coding-tools
tags:
  - agentic coding
summary: "My current Claude Code toolchain: JetBrains MCP for code intelligence, domain-specific subagents, superpowers for spec-to-PR workflows, and a Code Review Plugin."
---
I've seen a few other people share the tools they're using to write code with an AI agent and thought I'd do the same. All of this is currently in the context of Claude Code being my daily driver.  

## One-Off Tools

In addition to my main development loop, I have the following helpful tools installed.

### JetBrains MCP

One of the things that's always set the JetBrains IDEs apart for me is the built-in indexing that enables tools like _Find Usages_, _Refactoring_, and more to run quickly and holistically.
The [JetBrains MCP](https://www.jetbrains.com/help/idea/mcp-server.html) allows Claude Code to access these same tools, which, in my experience, helps save on tokens over basic grep, sed, etc.
I actually haven't tested this with the free, community versions of the JetBrains IDEs since I have a paid subscription at both work and home.

## Development Loop

### Ideate and Research 

When I'm just kicking around ideas and thinking of best practices, research and more regarding a feature, I drop into [claude.ai](https://claude.ai). 
The regular chat interface works well when referencing the company knowledge base or other documents I've uploaded to a domain- or app-specific project.
The "Research" mode is good when looking for existing patterns in similar software packages and analysis of the problem (I'll often tell it to check the [Nielsen Norman Group](https://www.nngroup.com) site for UX questions, for example.)

For me, this ends up with a sporadic notes document or a ticket in Linear. 

### Brainstorm, Plan, and Implement

When I'm ready to start planning the feature, I switch to Claude Code and fire up [superpowers](https://github.com/obra/superpowers). 
This setup walks through a few steps:

1. **Brainstorming** -- The agent looks through your code base, asks questions, and comes up with a few suggestions. This results in a "spec" document with details you'd normally receive from a product manager.
2. **Plan** -- The agent takes the spec and turns it into an implementation guide, typically with a step-wise task list. This results in a "plan" document which contains file paths, code samples, etc.  
3. **Implementation** -- Generic sub-agents use a test-driven development approach to completing the tasks. 

After steps 1 and 2, I pick a few of the domain-specific subagents and ask them to punch up the spec and plan. For example, if I'm working on a new feature on a checkout page, I'll ask the _payment-integration_
subagent to review the documents. This step has never failed to find some things to tweak, and I'll often run it multiple times because non-determinism is fun.

This tool ends with a PR being created in draft mode.

### Refactor

[code-simplifier](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/code-simplifier/agents/code-simplifier.md) is a lightweight refactoring skill that does a solid job of finding
dead code, duplicate code, etc. and updating them without changing what the code does.

### Automated Review

I've tried several code review tools and I find the most effective is the [Code Review Plugin](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/code-review/README.md).

The code review plugin launches five subagents with different prompts to find potential issues in the PR. It then reviews the findings to verify they're accurate and to assign them a score. It defaults to only
posting comments with a score of 80+, but I've found that skips too many noteworthy findings. I will typically prompt it to post all the issues that scored 50+ back to the PR. I use the PR because I run the 
code review plugin in a separate Claude Code session. It could be made up, but I like the idea of a context-free review instead of using the existing context.

Once the reviews are posted, I'll go back to my implementation session and have it address the issues. If it pushes back on any of the findings, it's a good signal I need to step in and review.

### Manual Review

Similar to when I manage engineers or lead a team, I sit down to review both the PR and the functionality of the code. I still find Claude Code is pretty shaky at creating a fully functional, fully refined feature.
So this often looks like me finding a bug or UX oddity, asking Claude to fix it, and then repeating that until I'm happy with everything. 

Once I'm satisfied, I mark the PR as ready for review and share it with the team. 

## TL;DR

* [JetBrains MCP](https://www.jetbrains.com/help/idea/mcp-server.html)
* [superpowers](https://github.com/obra/superpowers)
* [code-simplifier](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/code-simplifier/agents/code-simplifier.md) 
* [Code Review Plugin](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/code-review/README.md)

## Things I've Stopped Using

### Awesome Claude Code Subagents

When I first wrote about using [domain-specific subagents](https://github.com/VoltAgent/awesome-claude-code-subagents), I mentioned I honestly didn't know how much more 
effective they were than running a generic subagent with the same model and prompt. Over time, I found the results of
the generic subagents were on par as those from the specialized agents.