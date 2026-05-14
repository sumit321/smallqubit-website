# Image conventions — Small Qubit Labs

## Folder structure

```
public/images/
  articles/       → Hero images for writing articles
  authors/        → Author photos (currently: sumit.jpg)
  site/           → Site-wide assets (logo, favicon sources, etc.)
  og/             → Manually created OG images (fallback only — prefer auto-generated)
```

## Auto-generated OG images (preferred)

Every page can have an `opengraph-image.tsx` file in its folder.
Next.js generates the OG image automatically at build time — no Photoshop needed.

To add OG image to a new article:
1. Copy `app/writing/why-quantum-matters-for-ai/opengraph-image.tsx`
2. Paste into your new article folder
3. Update the `alt`, article title, tag, and read time
4. Push — Vercel generates the image automatically

## Article hero images

Naming convention: `articles/[article-slug]-hero.jpg`

Examples:
- `articles/why-quantum-matters-for-ai-hero.jpg`
- `articles/research-tools-for-quantum-ai-hero.jpg`

Recommended specs:
- Format: JPG (photos) or WebP (illustrations)
- Size: 2400×1200px minimum (Next.js will resize down automatically)
- Aspect ratio: 2:1 for hero, 5:3 for inline
- Style: Laboratory aesthetic — clean, precise, no busy backgrounds

## Using images in articles

```tsx
import ArticleImage from "@/app/components/ArticleImage";

// Hero (top of article, full width)
<ArticleImage
  src="/images/articles/your-article-hero.jpg"
  alt="Descriptive alt text"
  variant="hero"
  priority  // add this only for hero images — loads before scroll
  caption="Optional caption in JetBrains Mono"
/>

// Inline (within article body)
<ArticleImage
  src="/images/articles/your-image.jpg"
  alt="Descriptive alt text"
  variant="inline"
  caption="Source: Wikimedia Commons"
/>
```

## Recommended free image sources

| Source | Best for | License |
|---|---|---|
| [Wikimedia Commons](https://commons.wikimedia.org) | Quantum hardware photos (IBM, Google chips) | Varies — check each image |
| [Unsplash](https://unsplash.com) | Editorial photography, abstract | Free, no attribution required |
| [NASA Image Gallery](https://images.nasa.gov) | Space, physics, science | Public domain |

## External images (Unsplash, Wikimedia)

Domains are already whitelisted in `next.config.ts`.
You can use external URLs directly in `ArticleImage` without downloading:

```tsx
<ArticleImage
  src="https://images.unsplash.com/photo-xxxxx"
  alt="..."
  variant="hero"
/>
```
