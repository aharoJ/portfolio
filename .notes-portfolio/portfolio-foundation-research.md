# Portfolio Foundation Research — What the 0.1% Actually Does

> **Date:** February 17, 2026
> **Sources:** Vercel Design System (Geist), Linear UI Redesign, Apple HIG,
> Brittany Chiang's portfolio, Tailwind CSS v4 docs, Web Interface Guidelines
> **Goal:** Understand the principles, then build OUR skeleton from scratch

---

## The 5 Foundational Principles (Every Elite Frontend Shares These)

### 1. The 8px Spacing Grid
**Who uses it:** Vercel, Linear, Atlassian, Apple, Material Design, every serious design system.

Every piece of spacing — padding, margin, gap — is a multiple of 8px.

```
8px  → tight (inside badges, between icon and text)
16px → default (between related elements)
24px → breathing room (between sections of a card)
32px → separation (between cards)
48px → section gap
64px → major section gap
96px → hero-level whitespace
```

**Why it works:** Your eye subconsciously detects inconsistency. When spacing follows
a mathematical scale, everything looks "right" even if you can't articulate why.
Random spacing (17px here, 23px there) is what makes amateur sites look amateur.

**In Tailwind:** The default spacing scale already uses 4px increments.
`p-2` = 8px, `p-4` = 16px, `p-6` = 24px, `p-8` = 32px.
Stick to even numbers: p-2, p-4, p-6, p-8, p-12, p-16, p-24.

---

### 2. Typography Scale with Clear Hierarchy
**Who uses it:** Vercel uses Geist with 5 sizes. Apple uses SF Pro with strict weights.
Linear uses Inter with limited sizes. Brittany Chiang uses 3 sizes max on her portfolio.

The rule: **maximum 4-5 font sizes across your entire site.**

```
Display:  clamp(2.5rem, 5vw, 4rem)   → Hero headline only
Heading:  clamp(1.5rem, 3vw, 2rem)   → Section titles
Body:     1rem (16px)                  → Default text
Small:    0.875rem (14px)              → Labels, metadata
Mono:     0.875rem                     → Code, technical details
```

**Weight matters more than size.** Use weight to create hierarchy within the same size:
- `font-bold` (700) for headings
- `font-medium` (500) for emphasis
- `font-normal` (400) for body

**The Geist approach (Vercel):** One font family, variable weight (100-900).
Sans for body, Mono for code. That's it. No decorative fonts. No display fonts.
The font does NOT draw attention to itself — the content does.

---

### 3. Deliberate Color Restraint
**Who uses it:** Vercel uses ONLY black and white with zero accent colors on their
main site. Linear went from blue accents to monochrome black/white in 2025.
Apple uses white backgrounds with product images providing all the color.

The elite formula:
```
Background:     1 color (pure white or near-black)
Text primary:   1 color (high contrast against bg)
Text secondary: 1 color (muted version of primary, for metadata)
Accent:         1 color (used EXTREMELY sparingly — links, active states)
Border:         1 color (subtle, almost invisible, for structure)
```

That's 5 colors. Total. For the whole site.

**The "prestigious" look comes from what you DON'T use.**
No gradients. No colored backgrounds on sections. No badge-colored achievements.
Just black text on white space, with one accent color for interactive elements.

**Vercel's exact approach:**
- Background: oklch(1 0 0) (pure white)
- Foreground: oklch(0 0 0) (pure black)
- That's it. Everything else is shades between those two.

---

### 4. Whitespace IS the Design
**Who uses it:** Apple (literally their entire brand), Vercel, Brittany Chiang.

From the Apple analysis: "White space around products makes them the focal point.
The generous use of white space reinforces the brand identity as luxurious,
innovative, and user-centric."

From Vercel's Web Interface Guidelines: "Prefer flex/grid/intrinsic layout over
measuring in JS. Let CSS handle flow, wrapping, and alignment."

The rule: **internal spacing ≤ external spacing.**
- Space INSIDE a card should be smaller than space BETWEEN cards
- Space between lines of text should be smaller than space between paragraphs
- Space between paragraphs should be smaller than space between sections
- This is Gestalt's Law of Proximity — things that are close are perceived as related

**In practice:** If your card has `p-8` (32px) inside, the gap between cards should be
`gap-12` (48px) or more. If sections have `py-24` (96px), the gap between sections
should never be less than that.

---

### 5. Performance as a Design Decision
**Who uses it:** Linear (entire brand built on speed), Vercel, Next.js itself.

From Vercel's guidelines:
- "Never transition: all" — only animate opacity and transform
- "Honor prefers-reduced-motion"
- "Prefer CSS over Web Animations API over JavaScript libraries"
- "Only animate when it clarifies cause & effect"
- Minimum loading state duration: 150-300ms delay before showing spinner

From Linear's approach:
- Optimistic updates (UI updates before server confirms)
- No layout shift (skeletons mirror final content exactly)
- Code splitting, virtualization for long lists

**For your portfolio specifically:**
- `next/font` self-hosts fonts (zero external requests, zero layout shift)
- `next/image` with proper `sizes` attribute (serves right size per viewport)
- No animation libraries. CSS transitions on `opacity` and `transform` only.
- No client-side JavaScript unless absolutely necessary (keep components as RSC)

---

## What Brittany Chiang's Portfolio Actually Does

brittanychiang.com is the most-referenced engineer portfolio on the internet
(6k+ stars, 3k+ forks on her v4). Here's the actual architecture:

**Layout:** Single page, two-column on desktop (sticky sidebar + scrolling content).
Mobile collapses to single column. That's the entire layout.

**Content structure:**
1. Name + title + one-sentence description + nav links + social links (left column, sticky)
2. About (short paragraph)
3. Experience (timeline, company + role + description + tech tags)
4. Projects (title + description + image)

**What she does NOT have:**
- No animations
- No colored sections
- No skill bars or progress indicators
- No testimonials
- No contact form
- No fancy hero with particles or gradients

**The lesson:** Her portfolio got her hired at Apple and Klaviyo.
It's literally just well-organized text with good typography and clean spacing.

---

## The Technical Foundation — Your Skeleton

Based on all this research, here's the approach for aharoj.io:

### Font Strategy
```
Geist Sans  → Everything (headlines, body, labels)
Geist Mono  → Code snippets, technical details (if any)
```

Geist is Vercel's open-source font, designed specifically for digital screens.
It's the default in Next.js 15+. It's inspired by Inter and Swiss typography.
Using it signals "this person knows the modern stack."

### Color Strategy (Light Mode Only — for now)
```
--color-bg:           #ffffff        white
--color-fg:           #0a0a0a        near-black
--color-fg-muted:     #6b7280        gray-500
--color-border:       #e5e7eb        gray-200
--color-accent:       #0a0a0a        same as fg (links are just underlined)
```

Why no accent color? Because Vercel and Linear proved that monochrome IS the
prestige play. Color comes from your photo, your project screenshots, and nothing else.

### Spacing Strategy (8px grid, Tailwind native)
```
Component internal:    p-4 to p-8    (16-32px)
Between related items: gap-4 to gap-6 (16-24px)
Between sections:      py-16 to py-24 (64-96px)
Page horizontal:       px-6 lg:px-0 max-w-3xl mx-auto
```

### Max Width
```
Content:  max-w-3xl (768px)  — reading width
Page:     max-w-5xl (1024px) — if you ever need wider
```

Why 768px? That's the optimal reading width (45-75 characters per line).
Every typography expert agrees on this. Vercel's docs, Medium, and Brittany Chiang
all use roughly this width.

---

## What This Means for Your Architecture

```
src/
├── app/
│   ├── layout.tsx          ← Geist font, metadata, <html> + <body>
│   ├── globals.css         ← @import "tailwindcss" + @theme tokens
│   └── page.tsx            ← Landing page (photo, name, title, links)
│
└── (future sections added as the portfolio grows)
```

**The key insight:** Your layout.tsx and globals.css ARE the foundation.
If those two files are right, everything you build on top inherits the quality.
The page.tsx for landing is just content inside that system.

**No modules/claude/ folder for now.** We're starting from zero.
The module pattern was good for iterating on the old design.
For this rebuild, the Next.js app directory IS the architecture.
Components get extracted when you need them, not before.

---

## Rules for This Rebuild

1. **No component until you need it twice.** Don't create abstractions early.
2. **No color that isn't in the @theme.** If it's not a token, it doesn't exist.
3. **No spacing that isn't on the 8px grid.** Stick to even Tailwind values.
4. **No animation that isn't opacity or transform.** And keep it under 300ms.
5. **No client component unless it needs interactivity.** RSC by default.
6. **No font size outside the 5-size scale.** Display, heading, body, small, mono.
7. **Content width never exceeds max-w-3xl.** Reading width is sacred.

---

## Sources

- Vercel Web Interface Guidelines: vercel.com/design/guidelines
- Vercel Geist Design System: vercel.com/geist/introduction
- Linear UI Redesign (Part II): linear.app/now/how-we-redesigned-the-linear-ui
- Linear Design Trend Analysis: blog.logrocket.com/ux-design/linear-design/
- 8px Grid System: cieden.com/book/sub-atomic/spacing/spacing-best-practices
- Spacing, Grids, and Layouts: designsystems.com/space-grids-and-layouts/
- Tailwind CSS v4 Release: tailwindcss.com/blog/tailwindcss-v4
- Next.js Font Optimization: nextjs.org/docs/app/getting-started/fonts
- Brittany Chiang Portfolio: brittanychiang.com
- Apple Design Principles: developer.apple.com/design/human-interface-guidelines/
