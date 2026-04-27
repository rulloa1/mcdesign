# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Luxury construction/design portfolio website for MCDesign — a high-end builder showcasing residential, commercial, civil, and hospitality projects. Originally scaffolded with Lovable.dev.

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # Production build
npm run lint      # ESLint
npm run test      # Vitest (jsdom environment)
npm run preview   # Preview production build
```

Bun lockfiles exist alongside npm — either package manager works.

## Tech Stack

- **Framework**: React 18 + TypeScript, Vite 7 (SWC plugin)
- **Styling**: Tailwind CSS 3 + shadcn/ui (Radix primitives) + Framer Motion
- **Routing**: React Router DOM v6 (client-side, SPA)
- **State/Data**: TanStack React Query (5-min stale, 10-min GC), Supabase JS client
- **Backend**: Supabase (Postgres + Edge Functions in Deno)
- **Deployment**: Vercel with SPA rewrite fallback

## Architecture

### Routing (App.tsx)
All routes defined in `App.tsx` wrapped with ErrorBoundary, QueryClientProvider, TooltipProvider, and dual toasters (Radix + Sonner). Key routes:
- `/` → Index (home), `/portfolio` → Portfolio, `/project/:id` → ProjectDetail
- `/services` → Services, `/design` → Design, `/design/:id` → DesignDetail
- `/contact` → Contact

### Data Layer
Project data lives in **static TypeScript files**, not fetched from Supabase:
- `src/data/projects.ts` — 19 construction projects with typed `Project` interface (id, title, gallery arrays, metadata). Helper functions: `getProjectById()`, `getProjectsByCategory()`, `categories[]`.
- `src/data/design-albums.ts` — Design inspiration albums with `DesignAlbum` interface.

**Supabase is only used for**:
- Gallery image reordering (admin feature via `project_gallery_orders` table)
- User roles/auth (`user_roles` table with `app_role` enum: admin/moderator/user)
- Edge functions: `save-gallery-order`, `verify-edit-pin`, `send-email`, `generate-design`

### Image Serving
Images use two patterns — know which to use:
1. **Local via Vercel**: `/projects/assets/filename.webp` (constant `GITHUB_RAW_BASE` in projects.ts)
2. **Public directory**: `/projects/subfolder/filename.ext` and `/design/subfolder/filename.ext`

Some older projects reference external URLs at `mcdesign.bio/assets/`.

### Component Organization
- `src/components/home/` — Homepage sections (Hero, About, FeaturedProjects, Services, Testimonials, CTA)
- `src/components/layout/` — Layout shell (Header, Footer, Layout wrapper)
- `src/components/gallery/` — Gallery features (NumberedGallery, SortableGalleryItem, PinDialog, AIRedesignDialog) with drag-and-drop via @dnd-kit
- `src/components/ui/` — shadcn/ui primitives (eslint `react-refresh/only-export-components` rule disabled here)

### Key Hooks
- `useGalleryOrder` — Loads/saves gallery image order from Supabase with PIN-based or auth-based admin editing and local-only fallback
- `useScrollAnimation` — IntersectionObserver-based scroll reveal (trigger-once by default)
- `use-mobile` — Responsive breakpoint detection

### Design System
Luxury palette defined via CSS custom properties in `src/index.css`:
- **Gold**: primary accent (`--gold`, `--gold-light`, `--gold-dark`)
- **Charcoal**: dark backgrounds (`--charcoal`, `--charcoal-light`)
- **Cream**: light backgrounds (`--cream`, `--cream-dark`)
- **Fonts**: Cormorant Garamond (serif headings), Inter (sans body)
- Custom animations: fade-in, fade-in-up, slide-in-left/right, scale-in
- Dark mode supported via `.dark` class (next-themes)
- Border radius set to `0rem` (sharp corners for architectural aesthetic)

### Path Alias
`@/` maps to `./src/` (configured in both tsconfig.json and vite.config.ts).

### TypeScript Config
Relaxed settings: `noImplicitAny: false`, `strictNullChecks: false`, `noUnusedLocals: false`. TypeScript won't catch null/undefined issues.

### Supabase
- Config: `supabase/config.toml`
- Migrations: `supabase/migrations/`
- Edge functions: `supabase/functions/` (Deno runtime)
- Client: `src/integrations/supabase/client.ts` (requires `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` env vars)
- Generated types: `src/integrations/supabase/types.ts`
