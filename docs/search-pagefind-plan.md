# Add Search with Pagefind

## Context

The blog has ~141 content pages (40 posts, 101 links) and no search. The user wants a search feature covering both content types. Pagefind is the right tool: it runs after `hugo` builds the static site, generates its own index in `public/pagefind/`, requires no npm install (npx works), and has no external service dependency. It indexes rendered HTML so both posts and link pages are covered naturally.

The site has no build tooling beyond Hugo, custom CSS, and minimal JS — Pagefind fits without introducing complexity.

## Files to Create

**`content/search.md`** — new search page
```yaml
---
title: "Search"
description: "Search all posts and links on jon.camp"
layout: search
---
```

**`layouts/search/single.html`** — project-level search template (not in theme; matches existing pattern of project-level overrides)
```html
{{ define "main" }}
  <div class="search-page">
    <h1>{{ .Title }}</h1>
    <link href="/pagefind/pagefind-ui.css" rel="stylesheet">
    <div id="search"></div>
    <script src="/pagefind/pagefind-ui.js"></script>
    <script>
      window.addEventListener('DOMContentLoaded', function () {
        new PagefindUI({
          element: '#search',
          showSubResults: false,
          showImages: false,
          resetStyles: false
        });
      });
    </script>
  </div>
{{ end }}
```

Pagefind assets are loaded inline here (not via Hugo's asset pipeline) because they don't exist until after `npx pagefind` runs post-build.

## Files to Modify

### `justfile`
Add `build` recipe. `dev` stays unchanged (Pagefind won't work with `hugo server` since it serves from memory, not `public/`).
```just
build:
    hugo
    npx -y pagefind --site public
```

### `themes/wizard/layouts/_default/baseof.html`
Add `data-pagefind-body` to `<main>` to restrict indexing to page content (excludes sidebar and footer):
```html
<main data-pagefind-body>
```

### `themes/wizard/layouts/partials/sidebar.html`
Add search link at the end of `.header-links` `<ul>`, matching the existing icon+label pattern (Lucide magnifying-glass SVG, internal link, no target):
```html
  <li>
    <a href="/search/" aria-label="Search">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <span>Search</span>
    </a>
  </li>
```

The existing responsive CSS (`header-links a span { display: none }` at 768px) will automatically hide the label on mobile.

### `themes/wizard/assets/css/main.css`
Append at end of file — search page wrapper styles plus Pagefind UI overrides using the site's CSS variables. Key points:
- `--pagefind-ui-*` variables on `#search` use the existing teal color scheme
- Result cards styled to match `.post-card` (same border-radius, border, hover shadow)
- `mark` highlights use teal at 15% opacity
- IBM Plex Sans used throughout (matches existing UI chrome)

## Note on List Pages in Results

With `data-pagefind-body` on `<main>`, list pages (`/blog/`, `/links/`, `/tags/`) will still be indexed. Their main content is post-card summaries, which may appear as duplicate/noisy results. This can be addressed later by adding `data-pagefind-ignore="all"` to the outer wrapper in `home.html`, `list.html`, `blog/list.html`, and `links/list.html` — but it's out of scope for this initial implementation.

## Verification

1. Run `just build` — Hugo builds, then `npx pagefind` reports indexed page count; `public/pagefind/` directory appears
2. Serve `public/` with any static server (e.g., `npx -y http-server public -p 1314 -o`) and navigate to `/search/`
3. Type a query — results should show posts and links with teal highlights
4. Confirm the Search link appears in the sidebar nav on all pages
5. Confirm search link label hides on mobile (resize to <768px)
