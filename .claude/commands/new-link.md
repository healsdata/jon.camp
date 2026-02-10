# new-link

Add a new link to the "Recent Readings" section.

## Usage

```
/new-link <url> [saved-date]
```

- `url` - The URL to add as a link
- `saved-date` (optional) - The date you saved/read this link, in YYYY-MM-DD format. Defaults to today's date if not provided.

## Instructions

When the user invokes this skill with a URL and optional saved date:

1. Use WebFetch to fetch the page at the provided URL with the prompt: "Extract the title, the publication date if available, and provide a brief summary of what this page is about in under 300 characters. Focus on the main point or argument. Keep it concise."

2. Create a new markdown file in `content/links/` with the filename format: `YYYY-MM-DD-slug.md` where:
   - Date is the saved-date if provided, otherwise today's date
   - Slug is derived from the title (lowercase, hyphens, no special chars)

3. **IMPORTANT:** Before writing the file, replace all smart/curly quotes with straight ASCII equivalents in both the title and summary:
   - `'` (U+2018) and `'` (U+2019) → `'` (straight apostrophe)
   - `"` (U+201C) and `"` (U+201D) → `"` (straight double quote)
   Hugo's typographer will double-encode these as `&rsquo;` etc. if they're already in the source.

4. The file should have this structure:
   ```
   ---
   title: "The extracted title"
   date: YYYY-MM-DD (the saved-date if provided, otherwise today)
   published: YYYY-MM-DD (if available from the article)
   link: "the-original-url"
   ---

   The 2-3 sentence summary from the fetch.
   ```

5. After creating the file, let the user know it was added and show them the title and summary.

6. If the user wants to tweak the title or summary, help them edit it.
