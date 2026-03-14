# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- **Package manager**: pnpm 10.13.1 (specified in `packageManager` field)
- `pnpm dev` — Start development server
- `pnpm build` — Production build
- `pnpm start` — Run production server
- `pnpm lint` — ESLint with Next.js core web vitals config
- No test suite is configured

## Architecture

**Stack**: Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4

Portfolio with static content defined in colocated `.ts` data files. No API routes or backend integration.

### Routing

- `src/app/(home)/page.tsx` — Landing page (single scroll)
- `src/app/blog/page.tsx` — Blog listing
- `src/app/blog/[slug]/page.tsx` — Individual blog posts (static params from registry)
- `src/app/layout.tsx` — Root layout (fonts, metadata, theme init script, CSP nonce)

### Component Pattern

Each section lives under `src/component/<section>/` with:
- A **data file** (`.ts`) — single source of truth for content, exports typed data + interfaces
- **Desktop** and **Mobile** component variants — toggled via Tailwind breakpoints (`hidden lg:block` / `block lg:hidden`)

All section components are React Server Components.

### Blog System

- Post metadata in `src/component/blog/blog.ts` (registry + `getPost()`)
- Post content as TSX components in `src/component/blog/posts/<slug>.tsx`
- `src/app/blog/[slug]/page.tsx` has a `postContent` map — register new posts there
- Desktop/Mobile layout wrappers: `BlogPostDesktop` / `BlogPostMobile`

### Client Boundary

`src/component/theme/ThemeProvider.tsx` is the **only** client component. Handles theme toggle, localStorage persistence, cross-tab sync, and system preference tracking.

### Theme System

- Blocking inline script in `layout.tsx` runs before hydration to prevent flash
- CSS tokens in `src/app/globals.css` via `@theme` (Tailwind v4), overridden under `[data-theme="dark"]`
- `suppressHydrationWarning` on `<html>` and the nonce script tag — both intentional

### Security (CSP)

`src/middleware.ts` generates per-request nonces (UUID → base64) and sets Content-Security-Policy headers. Uses `'strict-dynamic'` for Next.js chunk loading.

### Deployment

Docker multistage build (Node 21 Alpine) with `output: 'standalone'`. Docker Compose: Next.js + nginx reverse proxy + certbot for SSL. Nginx config in `nginx/conf.d/`.

## Style & Conventions

- Path alias: `@/*` maps to `src/*`
- Prettier with `prettier-plugin-tailwindcss` for class sorting
- Responsive: Desktop/Mobile component pairs, not media query CSS
- Data files separate content from presentation — edit data files to change displayed content
