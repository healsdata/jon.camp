---
title: "Auto-Generating OpenGraph Images in Hugo"
date: 2026-02-10T21:59:17-05:00
lastmod: 2026-02-14T11:59:17-05:00
author: Jon
layout: post
slug: auto-generating-opengraph-images-in-hugo
summary: Using Hugo's built-in image processing to auto-generate branded OpenGraph images for every post at build time, with no external tools or services.
tags:
  - hugo
---

I recently posted a link to one of my blog articles on BlueSky and was bummed how plain it looked compared to the very cool preview image in someone else's post. 
I vaguely knew about OpenGraph and similar standards and so I went looking. 
On [opengraph.xyz](https://www.opengraph.xyz) I learned the images should be unique per article and have a call-to-action.

In the words of a famous meme, "ain't nobody got time for that".

<!--more-->

I wanted something that would just happen automagically.

1. Look for the most unique word in the blog post
2. Grab an Unsplash image for that word
3. ???
4. Profit!


## Hugo Has a Tool for That

Working with Claude, I learned that Hugo has a built-in `images.Text` filter that can overlay text onto an image. 
So the MVP for this feature was simple: make a template with a blank area, use Hugo to write the post title on that, and ship it.

### The Template Image

Given that I'm a super awesome graphic artist, I made a very basic template of my domain name and favicon. It is a 1200x630 PNG, the recommended size for most social media services. 

{{< rawhtml >}}
  <a href="/images/og-template.png"><img src="/images/og-template.png" alt="A very basic template that reads 'jon.camp' above a green line and has the letters JC in a rounded square." /></a>
{{< /rawhtml >}}


This image needed to live in in `assets/` rather than `static/` unlike the other images on my blog. Hugo's image processing pipeline only works with files loaded through `resources.Get`, which pulls from `assets/`.

### The Hugo Partial

Here's the Hugo partial I dropped in `layouts/partials/og-image.html` the work.

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

This could be simpler, but the very first post I tried it with had a long time that bled off the
side of the template image. So this got a bit more complicated, but we can walk through what it does.


**Loading the template.** `resources.Get` pulls the base image from `assets/images/`. If the file doesn't exist, the whole block is skipped and no OG image is generated.

**Word wrapping.** Hugo templates don't have mutable variables, so you can't just append to a string in a loop. Instead, we use `newScratch`, which gives you a mutable key-value store. The logic splits the title on spaces and builds lines up to 18 characters wide. When adding a word would exceed the limit, it starts a new line.

**Rendering the text.** The `images.Text` filter takes the wrapped string and a dict of options. `size` is the font size in pixels, `x` and `y` set where the text starts on the image, and `linespacing` adds padding between lines. The filter draws the text directly onto the image.

**Returning the result.** The partial returns the permalink to the generated image, which the calling template can drop straight into a meta tag.

### Wiring It Up to the Post Template

The `head.html` partial handles picking and listing the right image for each page. 

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

### Performance

Generated images land in `resources/_gen/images/` at build time so, while the build may take longer
now, the output remains a static site that only uses static assets. There's also some caching in the build step that only regenerates the images if the input, aka the title, changes.

## Wrapping up

One of the reasons I like this solution is because I'm inevitably going to forget that it exists.
I don't have to do any work to maintain images or add new ones for every post. In fact, the only
time I'm going to remember it's there is when I post a little on social media and it isn't dreadfully
boring.

### One Gotcha

While deploying to DigitalOcean, I found that the images weren't working. Turns out, I was using a much older version of Hugo on the build server than I was locally and they each handled this process differently. Hugo is still using 0.x.x versioning after... fourteen years. So it's hard to known which versions are going to dramatically change things.

But you should also keep your development and production environments using the same version. Cuts down on the "it worked on my machine!" which is exactly what happened to me here.

