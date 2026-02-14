---
title: "[DRAFT] Auto-Generating OpenGraph Images in Hugo"
date: 2026-02-10T21:59:17-05:00
author: Jon
layout: post
slug: auto-generating-opengraph-images-in-hugo
summary: Using Hugo's built-in image processing to auto-generate branded OpenGraph images for every post at build time, with no external tools or services.
tags:
  - hugo
---

*This post was written entirely by Claude as part of the work to implement the OG image generation system.*

Every blog post needs an OpenGraph image. It's the preview card that shows up when you share a link on Slack, Twitter, or anywhere else. Without one, you get either a blank card or whatever random image the platform decides to scrape from your page.

Making them by hand is tedious. You open Figma, type in the title, export, save it to the right folder, reference it in frontmatter. For a personal blog, that's enough friction to make you skip it entirely.

I wanted something that would just happen as part of the build. No Node scripts, no external services, no API calls. Just Hugo.

<!--more-->

## The approach

Hugo has a built-in `images.Text` filter that can overlay text onto an image. The idea is simple. Start with a branded template image, word-wrap the post title, and stamp it on at build time. Every post gets a unique OG image automatically.

## The template image

The base image is a 1200x630 PNG (the standard OG image size) that lives at `assets/images/og-template.png`. It has the site branding and visual design baked in, with a blank area reserved for the post title.

Putting it in `assets/` rather than `static/` is important. Hugo's image processing pipeline only works with files loaded through `resources.Get`, which pulls from `assets/`.

## The partial

Here's the full `layouts/partials/og-image.html` partial that does the work.

```html
{{- $img := resources.Get "images/og-template.png" -}}
{{- if $img -}}
  {{- $title := .Title -}}
  {{- $s := newScratch -}}
  {{- $s.Set "line" "" -}}
  {{- $s.Set "lines" (slice) -}}
  {{- $maxLen := 18 -}}
  {{- range (split $title " ") -}}
    {{- $cur := ($s.Get "line") -}}
    {{- $test := cond (eq $cur "") . (printf "%s %s" $cur .) -}}
    {{- if and (ne $cur "") (gt (len $test) $maxLen) -}}
      {{- $s.Add "lines" (slice $cur) -}}
      {{- $s.Set "line" . -}}
    {{- else -}}
      {{- $s.Set "line" $test -}}
    {{- end -}}
  {{- end -}}
  {{- if ne ($s.Get "line") "" -}}
    {{- $s.Add "lines" (slice ($s.Get "line")) -}}
  {{- end -}}
  {{- $wrapped := delimit ($s.Get "lines") "\n" -}}
  {{- $img = $img.Filter (images.Text $wrapped (dict
    "size" 48
    "color" "#222222"
    "x" 60
    "y" 240
    "linespacing" 8
  )) -}}
  {{- return $img.Permalink -}}
{{- end -}}
```

Let me walk through what this does.

**Loading the template.** `resources.Get` pulls the base image from `assets/images/`. If the file doesn't exist, the whole block is skipped and no OG image is generated.

**Word wrapping.** Hugo templates don't have mutable variables, so you can't just append to a string in a loop. Instead, we use `newScratch`, which gives you a mutable key-value store. The logic splits the title on spaces and builds lines up to 18 characters wide. When adding a word would exceed the limit, it starts a new line.

**Rendering the text.** The `images.Text` filter takes the wrapped string and a dict of options. `size` is the font size in pixels, `x` and `y` set where the text starts on the image, and `linespacing` adds padding between lines. The filter draws the text directly onto the image.

**Returning the result.** The partial returns the permalink to the generated image, which the calling template can drop straight into a meta tag.

## Wiring it into the head

The `head.html` partial handles picking the right image for each page.

```html
{{- $image := "images/jc.png" | absURL }}
{{- if not .IsHome }}
  {{- if .Params.image }}
    {{- $image = .Params.image | absURL }}
  {{- else }}
    {{- $ogImage := partial "og-image.html" . }}
    {{- with $ogImage }}
      {{- $image = . }}
    {{- end }}
  {{- end }}
{{- end }}
<meta property="og:image" content="{{ $image }}">
```

The logic is straightforward. The homepage gets a default site image. For any other page, if there's a custom `image` in the frontmatter, that takes priority. Otherwise, it calls the `og-image` partial to generate one from the title. This means you can always override the auto-generated image by setting `image` in a post's frontmatter.

## Caching

Hugo handles caching automatically. Generated images land in `resources/_gen/images/` and Hugo only regenerates them when the inputs change (the title or the template image). This means the first build processes every post, but subsequent builds are fast.

## Wrapping up

The whole system is about 30 lines of template code and a single PNG. No build plugins, no npm dependencies, no third-party services. It runs as part of `hugo build` and produces a unique, branded OG image for every post on the site.

It's one of those things that, once set up, you never think about again. Write a post, publish it, and the OG image just exists.
