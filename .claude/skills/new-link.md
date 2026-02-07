# new-link

Add a new link to the "Recent Readings" section.

## Usage

```
/new-link <url>
```

## Instructions

When the user invokes this skill with a URL:

1. Use WebFetch to fetch the page at the provided URL with the prompt: "Extract the title, the publication date if available, and provide a 2-3 sentence summary of what this page is about. Focus on the main point or argument."

2. Create a new markdown file in `content/links/` with the filename format: `YYYY-MM-DD-slug.md` where:
   - Date is today's date
   - Slug is derived from the title (lowercase, hyphens, no special chars)

3. The file should have this structure:
   ```
   ---
   title: "The extracted title"
   date: YYYY-MM-DD
   published: YYYY-MM-DD (if available from the article)
   link: "the-original-url"
   ---

   The 2-3 sentence summary from the fetch.
   ```

4. After creating the file, let the user know it was added and show them the title and summary.

5. If the user wants to tweak the title or summary, help them edit it.
