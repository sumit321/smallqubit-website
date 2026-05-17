# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server at http://localhost:3000
npm run build     # Production build
npm run lint      # Run ESLint
npm run deploy    # Commit + push to trigger Vercel deploy (uses deploy.sh)
```

`deploy.sh` accepts an optional commit message: `./deploy.sh "your message"`. Without one it generates a timestamp message. Every push to `main` auto-deploys to production via Vercel. There are no tests.

## Architecture

Next.js 15 App Router with TypeScript and Tailwind CSS v4. All routes live under `app/` using file-system routing.

**Page structure:** Each route is a Server Component (`app/<route>/page.tsx`) with a co-located `metadata` export for SEO. The root layout (`app/layout.tsx`) wraps every page with `<Nav>` and `<Footer>`, applies the two Google Fonts as CSS variables, and sets the site-wide `Metadata`.

**Writing articles** follow a fixed pattern: a new article needs three things — (1) a folder at `app/writing/<slug>/`, (2) a `page.tsx` with the article content, (3) an `opengraph-image.tsx` for the OG image. The article must also be added manually to the `articles` array in `app/writing/page.tsx` (the index is hand-curated, not auto-generated from the filesystem).

**Components:** Only three shared components exist in `app/components/`:
- `Nav.tsx` — sticky header, client component (uses `usePathname` for active link). Nav links are hardcoded in the `links` array at the top of the file — add new top-level routes there.
- `Footer.tsx` — static server component.
- `ArticleImage.tsx` — wraps Next.js `<Image>` with three preset `variant` sizes (`hero`, `inline`, `thumb`). Use this instead of raw `<Image>` in articles.

## Design System

All design tokens are CSS custom properties defined in `app/globals.css` under `:root`. Tailwind is used for layout and spacing utilities; brand-specific styles use the CSS classes defined in `globals.css`.

Key rules:
- **Quantum Red** (`--color-primary: #bc000a`) is the only accent colour — use it sparingly.
- Font stack: `--font-sans` (SF Pro → Inter fallback) for all UI text; `--font-mono` (SF Mono → JetBrains Mono fallback) for metadata, tags, and technical labels only.
- No shadows anywhere — use `border` and `border-color` transitions instead.
- Reuse the semantic CSS classes from `globals.css` (`display-xl`, `headline-md`, `body-lg`, `label-mono`, `badge`, `card`, `btn-primary`, `btn-secondary`, `dot`, `divider`) rather than composing raw Tailwind utilities for these patterns.
- `border-radius` is 4px (`--radius-base`) everywhere; `--radius-pill` for dots/pills only.

## Images

External images from `images.unsplash.com` and `upload.wikimedia.org` are whitelisted in `next.config.ts`. Use `<ArticleImage>` with the appropriate `variant` prop for all editorial images.
