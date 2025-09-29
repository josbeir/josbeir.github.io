# Copilot Instructions for AI Coding Agents

## Project Overview
This is a Hugo-based static site/blog project using the `beir` theme. The codebase is organized for Hugo conventions, with custom layouts, assets, and configuration files. Tailwind CSS is used for styling, and some JavaScript assets are present for interactivity.

## Key Directories & Files
- `hugo.toml`: Main Hugo configuration.
- `themes/beir/`: Custom theme with layouts, assets, and partials.
- `content/`: Markdown source for posts and pages.
- `static/`: Static files (images, favicon, etc.) copied as-is to `public/`.
- `public/`: Generated output after build (do not edit directly).
- `assets/`, `themes/beir/assets/`: Source CSS/JS for Tailwind and theme.
- `layouts/`, `themes/beir/layouts/`: Hugo templates and partials.
- `archetypes/`: Default frontmatter for new content.
- `data/`, `themes/beir/data/`: YAML data files for site-wide variables.

## Build & Development Workflow
- **Build site:** `hugo` (generates output in `public/`)
- **Local server:** `hugo server -D` (includes drafts)
- **Tailwind CSS:** Configured via `tailwind.config.js`, source in `assets/css/` and `themes/beir/assets/css/`
- **NPM scripts:** Check `package.json` for any custom build steps (e.g., Tailwind, JS bundling)

## Project-Specific Patterns
- **Layouts:** Hugo templates use Go templating (`{{ ... }}`), with partials in `_partials/` and reusable blocks in `themes/beir/layouts/_partials/`.
- **Recent posts:** See `themes/beir/layouts/home.html` for grid/card pattern and summary truncation.
- **Content organization:** Posts are in `content/posts/`, with images in subfolders.
- **Theme overrides:** Custom theme files in `themes/beir/` override base Hugo behavior.
- **Data files:** Use YAML in `data/` for global variables (e.g., site metadata).

## Integration Points
- **Tailwind CSS:** Integrated via assets and config; ensure CSS is built before serving.
- **Hugo:** All content, layouts, and data flow through Hugo's build system.
- **NPM:** Used for managing frontend dependencies and build tools.

## Conventions & Tips
- Do not edit files in `public/`—they are generated.
- Use Hugo's templating for all dynamic HTML.
- Place images for posts in the same folder as the post's markdown for easy referencing.
- For new content, use archetypes for consistent frontmatter.
- When updating theme/layouts, check for partials and inheritance in `themes/beir/layouts/`.

## Example: Recent Posts Card
See `themes/beir/layouts/home.html`:
```html
{{ range first 6 site.RegularPages }}
  <div class="card bg-base-300 shadow-sm">
    <div class="card-body">
      <h2 class="text-3xl mb-1"><a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a></h2>
      <p class="text-sm text-gray-500 mb-2">
        {{ .Date.Format "January 2, 2006" }}
      </p>
      {{ .Summary | safeHTML | truncate 150 }}
      <div class="card-actions justify-end">
        <a class="btn btn-outline btn-primary btn-md" href="{{ .Permalink }}">View post</a>
      </div>
    </div>
  </div>
{{ end }}
```

---
If any section is unclear or missing, please specify what needs improvement or additional detail.