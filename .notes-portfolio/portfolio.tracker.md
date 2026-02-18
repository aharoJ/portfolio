# Portfolio Frontend Tracker — aharoj.io

> **Started:** February 17, 2026
> **Project:** Next.js portfolio at `https://aharoj.io`
> **Hosted:** Hetzner VPS (CPX21, Hillsboro) — Docker + Nginx + SSL
> **Stack:** Next.js, Tailwind CSS, TypeScript
> **Strategy:** Iterative refactor, NOT full rewrite
> **Goal:** Make the portfolio look and feel like a real engineer built it

---

## Core Principles

1. **Refactor section by section, don't nuke and rebuild.** The site is live and deployed. We improve it in place.
2. **Data lives separate from components.** Every section has a `.ts` data file. Components import from it. One place to edit content.
3. **Desktop/Mobile split is fine** when the UX genuinely diverges. Both files import from the same data file — never duplicate content.
4. **Pure Tailwind only.** No Framer Motion, no animation libraries. Hover states, transitions, and responsive breakpoints — all Tailwind.
5. **Understand every line.** If you can't explain what a class does, it doesn't belong in the codebase.

---

## Architecture Pattern

```tsx
src/modules/claude/component/
├── education/
│   ├── education.ts            ← data (single source of truth)
│   ├── EducationDesktop.tsx    ← desktop layout
│   └── EducationMobile.tsx     ← mobile layout
├── experience/
│   ├── experience.ts
│   ├── ExperienceDesktop.tsx
│   └── ExperienceMobile.tsx
├── projects/
│   ├── projects.ts
│   ├── ProjectDesktop.tsx
│   └── ProjectMobile.tsx
└── skills/
    ├── skills.ts
    ├── SkillsDesktop.tsx
    └── SkillsMobile.tsx
```

### Rules

- `.ts` file = data + types. No React, no JSX. Just the content.
- `Desktop.tsx` and `Mobile.tsx` both `import { data } from "./data"`.
- Page files use the `hidden lg:block` / `block lg:hidden` pattern.
- New section? Copy the folder structure. Data file first, components second.

---

## Changelog

### Session 1 — February 17, 2026

**What:** Refactored Education section to use shared data pattern.

**Before (the problem):**

- `EducationDesktop.tsx` had all content hardcoded inline
- `EducationMobile.tsx` had the exact same content copy-pasted
- Updating one required updating both — or forgetting and having them diverge

**After (the fix):**

- Created `education.ts` with typed data + single source of truth
- Both Desktop and Mobile import from `education.ts`
- Zero visual changes — site looks identical to the user

**Files touched:**

- `NEW` → `modules/claude/component/education/education.ts`
- `NEW` → `modules/claude/component/education/EducationDesktop.tsx`
- `NEW` → `modules/claude/component/education/EducationMobile.tsx`

**Key decisions:**
| Decision | Chose | Why | Why NOT the alternative |
|----------|-------|-----|------------------------|
| Single component vs Desktop/Mobile split | Desktop/Mobile split | Gives full control per viewport. Matches existing mental model. Experience section has genuinely different UX (accordions vs cards). | Single component is cleaner for simple sections like Education where both layouts are nearly identical. Could revisit later. |
| Framer Motion animations | No — pure Tailwind | Zero dependencies. Every line is understandable. Hover + transition utilities cover 90% of needs. | Framer Motion adds scroll-triggered entrance animations which look great. But adds a dependency and "use client" directives. Not worth the tradeoff right now. |
| Data file location | Co-located with components (`education/education.ts`) | Everything for one section lives in one folder. Easy to find, easy to delete. | Separate `data/` folder works too but adds extra navigation when editing. |
| Tailwind dynamic classes via data | `bgColor` and `textColor` as string properties | Keeps badge styling per-achievement without hardcoding in JSX. | Could use a single `variant` key and map to styles in the component. More abstraction than needed for 4 badges. |
| Content changes | Still lorem ipsum in Experience section | Education is done. Experience is next session. One section at a time. | Could have done all sections at once but that's a rewrite, not a refactor. |

---

## Sections Status

| Section      | Data Extracted | Desktop Refactored | Mobile Refactored | Content Written | Status   |
| ------------ | :------------: | :----------------: | :---------------: | :-------------: | -------- |
| Education    |       ✅       |         ✅         |        ✅         |       ✅        | **DONE** |
| Experience   |       ❌       |         ❌         |        ❌         |       ❌        | Next up  |
| Skills       |       ❌       |         ❌         |        ❌         |       ❌        | Queued   |
| Projects     |       ❌       |         ❌         |        ❌         |       ❌        | Queued   |
| Hero/Landing |       ❌       |         ❌         |        ❌         |       ❌        | Queued   |

---

## Design System (Current)

These are the existing custom Tailwind colors from your config. Keeping them for now during the refactor — we can evolve the palette later.

```
Background:     dark (site bg — whatever your current theme uses)
Card:           bg-creamy-bone → hover:bg-creamy-white
Border:         border-soft-moss (4px on cards)
Text primary:   text-soft-slate
Text heading:   text-creamyLight-pearl
Accent:         bg-soft-moss (green badges, dividers)
```

### Badge Colors (Achievement)

```
Yellow:  bg-yellow-100 text-yellow-800
Blue:    bg-blue-100 text-blue-800
Green:   bg-green-100 text-green-800
Purple:  bg-purple-100 text-purple-800
```

---

## Gotchas & Lessons

### Tailwind Dynamic Classes

Tailwind purges unused classes at build time. If you do this:

```tsx
// ❌ BROKEN — Tailwind can't see these at build time
const color = "red";
<div className={`bg-${color}-100`}>
```

Tailwind won't include `bg-red-100` in the build because it never sees the full class string.

**Fix:** Always use complete class strings in your data:

```ts
// ✅ WORKS — full strings, Tailwind can find them
bgColor: "bg-yellow-100",
textColor: "text-yellow-800",
```

### Image Component Pattern

Both Desktop and Mobile use a layered image approach:

```tsx
<div className="relative w-32 h-32 overflow-hidden rounded-xl">
  <div className="bg-creamy-ivory border border-dashed rounded-xl w-full h-full" />
  <div className="absolute inset-0 border-2 border-soft-moss rounded-xl">
    <Image src={...} alt={...} fill sizes="128px" className="object-cover" />
  </div>
</div>
```

The dashed border div acts as a placeholder/skeleton while the image loads. The absolute-positioned Image sits on top. Keep this pattern consistent across sections.

---

## Future Ideas (Not Now)

- [ ] Swap to single responsive component for simple sections (Education, Skills)
- [ ] Add Framer Motion for scroll-reveal animations after all sections are refactored
- [ ] Dark/light theme toggle
- [ ] Replace custom color palette with a more modern system (zinc/emerald)
- [ ] Image optimization (103MB public folder — some images are 18MB)
- [ ] CI/CD pipeline so pushing to main auto-deploys

---

## How to Use This Document

1. Before starting a new section, check the **Sections Status** table
2. Follow the **Architecture Pattern** — data file first, then components
3. After each session, add a new **Changelog** entry with what/why/decisions
4. If you hit a weird bug, add it to **Gotchas & Lessons** so future-you doesn't repeat it
5. **Never** update content inside a component file — always update the `.ts` data file

---

> "The problem was never the project — the problem is it's not deployed. Building something new doesn't fix that."
> — Career Strategy Session, February 14, 2026
