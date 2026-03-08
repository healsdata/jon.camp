# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo static site generator project for a personal technical blog and portfolio (jon.camp). The site uses a custom "wizard" theme.

## Commands

```bash
just dev          # Start dev server with drafts (hugo server -D)
hugo              # Build for production (output to /public)
```

The dev server runs on localhost:1313 with hot reload.

## Architecture

- **config.yaml** - Hugo configuration (base URL, theme, permalinks)
- **content/** - Markdown content organized by category
  - `blog/` contains posts in subdirectories: `interviewing/`, `metrics/`, `software-development/`, `things-i-built/`, `other/`
- **layouts/** - Custom Hugo templates and shortcodes
  - `shortcodes/rawhtml.html` - Passthrough for embedding raw HTML in markdown
- **themes/wizard/** - Custom theme (all visual design)
- **static/** - Images, favicon, robots.txt
- **public/** - Generated output (gitignored)

## URL Structure

Configured in config.yaml permalinks:
- Homepage: `/:slug/`
- Blog posts: `/:sections[1:]/:slug/` (e.g., `/metrics/post-title/`)

## Content Conventions

- Posts with `[DRAFT]` in title are works in progress
- Use `{{< rawhtml >}}...{{< /rawhtml >}}` shortcode for embedded HTML
- Aliases in frontmatter handle redirects from old paths
- Never use emdashes (—), endashes (–), colons (:), or semicolons (;) when writing text content for blog or link posts
- All dates in frontmatter must be full timestamps with timezone (e.g., `2026-02-13T12:00:00-05:00`), not bare dates
- When updating an existing post, always add or update the `lastmod` field with a full timestamp
- For link posts created by the new-link skill, if the source article's published date has no time available, use `00:00:00` for the time portion

## Constraints

- Do NOT use alternative user-agents or other workarounds to bypass websites that prevent AI bot access. If you cannot access a site, ask the user to provide the content.


## Avoiding AI Telltales: A Writing Checklist
You MUST avoid the known AI Telltales described below:

### Punctuation & Formatting
**Em dashes** — Use sparingly. LLMs over-deploy them in place of commas, parentheses, and colons, often in a punchy, sales-copy cadence. LLMs use em dashes in a formulaic way, often mimicking "punched up" sales-like writing by over-emphasizing clauses or parallelisms.
**Excessive bolding and bullet points*** — Other signs include excessive use of em dashes, overuse of the word "moreover," promotional material, and formatting issues. Wikipedia Resist structuring everything as nested lists; prefer prose where prose is natural.

### Word-Level Tells
Certain words are statistically overrepresented in LLM output. Flag and reconsider these on sight:

"Moreover" — almost a signature word for LLM transitions
"Delves" — e.g., "the song delves into themes of..." is a strong tell
"Heritage," "pivotal," "significant," "notable," "breathtaking" — promotional language describing something as "breathtaking" Wikipedia is a recognized marker
"Quietly" — one noted tell is the tendency to describe things as happening "quietly" Wikipedia

### Sentence & Structural Patterns
**Importance inflation** — LLM writing often puffs up the importance of the subject matter by adding statements about how arbitrary aspects of the topic represent or contribute to a broader topic. 

**The "not just X, but Y" construction** — LLMs commonly use parallel constructions involving "not", "but", or "however" framing things as though correcting a misconception the reader might hold. This pattern ("Not only does X... but it also Y...") reads as artificially rhetorical.
The rule of three — AI overuses the rule of three because it's a convenient mechanism for generalizing vs. discussing specifics.
***Vague hedging where specificity is possible** — Phrases like "while specific information is limited" or "details about this remain unclear" signal the model filling space rather than knowing something.
**Overgeneralization** — AIs tend to overgeneralize material from a few sources, such as presenting opinions as widely held, or wording a list like more elements exist even though sources only support the ones mentioned.
**Unnecessary tables** — AIs tend to create unnecessary, small tables that could be better represented in prose.

### Tone & Voice
**Statistical regression to the mean** — AI uses statistical algorithms to infer what should come next based on its training corpus, so it tends to regress to the mean — the most statistically likely result that applies to the widest variety of cases. Wikipedia The practical result is prose that feels smooth but generic, hitting expected notes without texture or surprise. Push for specificity, idiosyncrasy, and concrete detail.
**Promotional affect in informational writing** — Avoid framing neutral facts as achievements or milestones ("this enabled the region to develop...", "this initiative was part of a broader movement...").
**Needless length** — AI-generated content being needlessly long is a clear tell Wikipedia, often manifesting as reiterated points and padding. Say the thing once, clearly.

The meta-point: most of these patterns stem from the same root cause — LLMs optimize for plausible, broadly applicable text rather than accurate, specific, situated text. The antidote in almost every case is the same: be more specific, more concrete, and more willing to just stop.