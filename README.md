# Small Qubit Labs — Website

The official website for [smallqubit.com](https://www.smallqubit.com).

## Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router, TypeScript) |
| Styling | [Tailwind CSS](https://tailwindcss.com) + custom design tokens |
| Fonts | Inter (UI) + JetBrains Mono (technical labels) |
| Hosting | [Vercel](https://vercel.com) |
| Domain | GoDaddy → DNS points to Vercel |
| Version control | GitHub |

## Design System

Design tokens live in `app/globals.css` under the `:root` block.
Full design spec: `../Design System/small_qubit_labs_1/DESIGN.md`

Key decisions:
- **Quantum Red** (`#e30613`) — the sole accent colour, used sparingly
- **Inter** — all UI text, tight letter-spacing for precision feel
- **JetBrains Mono** — metadata, tags, and technical labels only
- **4px border-radius** everywhere — sharp enough to feel engineered
- Light theme only — "bright laboratory" aesthetic

## Development

```bash
# Install dependencies
npm install

# Run local dev server (visit http://localhost:3000)
npm run dev

# Build for production
npm run build
```

## Deployment

Every push to the `main` branch automatically triggers a Vercel build and deploys to production. No manual steps required.

Preview deployments are created for every pull request.

## Project Phases

- **Phase 1** ✅ Toolchain setup (Next.js + GitHub + Vercel + domain)
- **Phase 2** Content — services, projects, about, writing
- **Phase 3** SEO, analytics, automation
- **Phase 4** Content pipelines, blog, AI-assisted updates
