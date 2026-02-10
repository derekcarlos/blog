# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro 5 multilingual blog template with i18n support for English (`en`) and Simplified Chinese (`zh-cn`). The site is **environment-driven**: all key metadata (site URL, title, description, author, social links) are configured via `.env` variables rather than hardcoded, enabling easy multi-environment deployment and reuse.

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type-check and build for production
npm run build

# Preview production build locally
npm run preview

# Preview with Cloudflare Workers emulation
npm run preview:worker

# Deploy to Cloudflare (requires wrangler auth)
npm run deploy

# Generate blog post cover images
npm run generate-covers

# Update blog post tags
npm run update-blog-tags

# Index content to Algolia (requires Algolia env vars)
npm run algolia-index
```

## Environment Configuration

Before starting development, copy `.env.example` to `.env` and configure at minimum:

- `PUBLIC_SITE_URL` - Full site URL (required for sitemap, canonical URLs, OG tags)
- `PUBLIC_SITE_TITLE_EN` / `PUBLIC_SITE_TITLE_ZH_CN` - Site titles per language
- `PUBLIC_SITE_DESCRIPTION_EN` / `PUBLIC_SITE_DESCRIPTION_ZH_CN` - Site descriptions
- `PUBLIC_AUTHOR_NAME` - Default author name for posts

Optional services (Giscus comments, Algolia search, Google Analytics) are also configured via environment variables. See `.env.example` for the complete list.

## Architecture & Key Concepts

### i18n System

- **Language configuration**: `src/locales.ts` defines supported locales (`en`, `zh-cn`) and default locale
- **Translation utilities**: `src/i18n.ts` exports:
  - `useTranslations(lang)` - Returns a `t()` function for getting locale-specific strings
  - `Multilingual` type - Object with keys for each locale
  - `getLocalePaths(url)` - Returns locale-specific paths for language switcher
- **Routing**: Astro's built-in i18n with `prefixDefaultLocale: true` (all routes include language prefix, e.g., `/en/blog`)
- **String constants**: `src/consts.ts` contains all UI text as `Multilingual` objects, with environment variable fallbacks for site metadata

### Content Structure

- **Blog posts**: MDX files in `src/blog/en/` and `src/blog/zh-cn/`
- **Content schema**: Defined in `src/content.config.ts`
  - Required: `title`, `description`, `date`
  - Optional: `updated`, `author`, `tags` (max 3), `categories`, `series`
- **Frontmatter example**:
  ```yaml
  ---
  title: "Post Title"
  description: "Short description"
  date: 2025-01-01T00:00:00.000Z
  author: "Author Name"  # falls back to PUBLIC_AUTHOR_NAME
  tags: ["tag1", "tag2"]
  ---
  ```

### Page Routing

Pages use `[lang]` dynamic routes in `src/pages/[lang]/`:
- `/[lang]/` - Home with latest posts
- `/[lang]/blog/[...page]` - Paginated blog list
- `/[lang]/blog/[slug]` - Individual post
- `/[lang]/archive` - All posts chronologically
- `/[lang]/series` - Posts grouped by series
- `/[lang]/tags` - Posts grouped by tags
- `/[lang]/about`, `/[lang]/projects`, `/[lang]/sponsor`, etc.

### Layouts

- `src/layouts/Base.astro` - Root layout with SEO, analytics, header/footer
- `src/layouts/Article.astro` - Blog post layout with breadcrumbs, TOC, share buttons, comments

### Components

Key components in `src/components/`:
- `Header.astro` - Navigation with language switcher
- `Footer.astro` - Footer with social links and bottom nav (status, analytics, copyright, privacy)
- `SearchModal.astro` - Search interface (local or Algolia)
- `ArticleShare.astro` - Social sharing (copy link, X, Weibo, LinkedIn, Facebook, Instagram)
- `Giscus.astro` - Comment system
- `PaginationNav.astro` - Pagination controls
- `TableOfContents.astro` - Auto-generated TOC from headings

### Base Path Support

The template supports deployment to subdirectories (e.g., GitHub Pages project sites) via `PUBLIC_BASE_PATH` environment variable. This is normalized in `astro.config.mjs` to ensure correct format (starts and ends with `/` if non-empty).

## Deployment

- **Cloudflare Pages/Workers**: Use `.github/workflows/deploy-cloudflare.yml` or `npm run deploy` (requires `wrangler` CLI logged in)
- **GitHub Pages**: Use `.github/workflows/gh-pages.yml` - pushes to `main` trigger build to `gh-pages` branch

Ensure CI environments have access to necessary environment variables (set in GitHub Actions secrets or injected in workflow).

## TypeScript Configuration

- Path alias `@/*` maps to `src/*`
- Strict mode enabled
- Extends `astro/tsconfigs/strict`

## Utility Scripts

Scripts in `scripts/` directory:
- `algolia-index.mjs` - Indexes blog posts to Algolia
- `generate-blog-covers.mjs` - Generates cover images for posts
- `update-blog-tags.mjs` - Updates/normalizes post tags
- `create-instantsearch-app.mjs` - Sets up Algolia InstantSearch
