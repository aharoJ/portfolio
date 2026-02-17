# Foundation Upgrade — Step by Step

> Run these commands in your project root. Order matters.

## Step 1: Upgrade Tailwind to v4

```bash
# Remove old Tailwind v3 and its dependencies
npm uninstall tailwindcss postcss autoprefixer

# Install Tailwind v4 + the PostCSS plugin
npm install tailwindcss@latest @tailwindcss/postcss
```

## Step 2: Delete old config files

```bash
# Delete the old tailwind config (v4 doesn't use it)
rm tailwind.config.ts    # or tailwind.config.js

# Delete old postcss config (we're replacing it)
rm postcss.config.js     # or postcss.config.mjs
```

## Step 3: Drop in the new files

Copy these files from the foundation/ folder:

```
postcss.config.mjs      → project root (replace old one)
globals.css              → src/app/globals.css (replace old one)
layout.tsx               → src/app/layout.tsx (replace old one)
home-test/page.tsx       → src/app/home-test/page.tsx (new file)
```

## Step 4: Verify Geist font is available

Geist should already be in next/font/google for Next.js 15+.
If you get an import error, install the geist package:

```bash
npm install geist
```

Then change the imports in layout.tsx from:
```ts
import { Geist, Geist_Mono } from "next/font/google";
```
to:
```ts
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
```

And update the variable names accordingly.

## Step 5: Run it

```bash
npm run dev
```

Navigate to `http://localhost:3000/home-test`

You should see: white background, your photo, your name,
"Software Engineer", a short description, and four text links.

No navbar. No footer. No colors. No animations.
Just clean typography on white space.

That's the foundation.

## What you can safely ignore (for now)

- Your existing pages still work. The old `src/app/page.tsx` routes
  to `/` and home-test routes to `/home-test`. No conflicts.
- Old components in `src/components/` and `src/modules/` still exist.
  Don't delete them yet — we'll migrate what we need later.
- The Navbar import is removed from layout.tsx. It won't show on
  ANY page. When we're ready for nav, we'll build a new one that
  matches the new design system.

## What changed and why

| Before (v3)                  | After (v4)                    | Why                          |
|------------------------------|-------------------------------|------------------------------|
| tailwind.config.ts           | deleted                       | @theme in CSS replaces it    |
| @tailwind base/comp/util     | @import "tailwindcss"         | v4 syntax, one line          |
| JetBrains Mono (all weights) | Geist Sans + Mono (variable)  | Modern, variable, lighter    |
| Custom .h1/.h2/.h3 classes   | deleted                       | Use Tailwind directly        |
| bg-main, text-white          | bg-bg, text-fg                | Semantic token names         |
| Navbar in layout             | removed                       | Build when ready, not before |
| Manual <meta> tags in <head> | Metadata API only             | Next.js handles generation   |
