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
