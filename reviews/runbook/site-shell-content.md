# site-shell-content implementation runbook

Implementation Impact: yes

Research and implementation are complete. Maintain the admitted static slice and execute a fresh verification build in `frontend/` using its existing npm lockfile, Astro static output and Playwright. Keep backend, persistence and contract choices Null. No new dependency, hydration, runtime adapter, workspace, CI or deployment work is admitted.

## Build the static shell

1. Update `frontend/src/layouts/Page.astro` and its CSS with a shared identity link `/`, one semantic four-link primary navigation and a shared footer. Home `/` is active only at root; About `/about/`, Projects `/projects/`, Articles `/articles/` match exact paths or descendants at a slash boundary. Exact match uses `aria-current="page"`; the article marks Articles `aria-current="location"`. Exactly one primary item is current. Use a single responsive DOM, visible keyboard focus and semantic landmarks.
2. Replace the root article index with Home; create About, Projects and Articles index pages at the canonical paths above. Preserve `frontend/src/pages/articles/first.md` title/body/frontmatter; retarget its layout's Back to all articles link to `/articles/`. The Articles index links the existing article. Keep titles/descriptions and headings meaningful and route-specific.
3. Use only Angel Jair Haro / Software Engineer / aharoJ and eight skills: Java, Python, TypeScript, JavaScript, HTML5, CSS3, Git, Bash. Render skills as a plain list. Transcribe confirmed project fields into local source data without importing archive components:

| Title | Category | GitHub destination |
|---|---|---|
| Twitter | Web Apps | https://github.com/aharoJ/Twitter |
| 3D Portfolio | Web Apps | https://github.com/aharoJ/3D-Portfolio |
| tmux-config | Dot Files | https://github.com/aharoJ/tmux-config |
| Quantum Annealing | Machine Learning | https://github.com/aharoJ/QuantumAnnealing |

Group projects by semantic category headings. Initially omit optional category anchors. No experience, education, GPA/awards, quote, counters, ratings, descriptions, demos, hashtags, placeholder phone or unlisted claims. Source pin: `fd049bab81c18c42c6bfb2a1d98ffee325578e91`. Confirmation #b5n9: "approve with the fix, all yes". Record provenance for transcribed fields; extra claims require their own confirmation.

4. Footer text links: visible `haro.j.angel@gmail.com` with exact `mailto:haro.j.angel@gmail.com`, and `GitHub (aharoJ)` with exact `https://github.com/aharoj`. Same-tab anchors, no query-prefill, contact route/form/widget, obfuscation or archive email. Route tests inspect destinations without activating email or visiting external sites.

## Optional portrait admission

The only eligible v0.5 image is the confirmed portrait, only on About. All project images and other routes stay text-only. Text-only is a complete acceptable outcome, requiring no optimization work.

For a later portrait attempt, extract only `public/profile/aharoJ.jpeg` from the full pin outside public product assets. Original blob `05c9543705c553bf9f30c0d461b3af58512c8a9a`, SHA-256 `ea8e0e66be30f8d4326d920a71bcba1015b1bf1326abb7f454bbb71d2126c3a5`, 1,420,649 bytes, 2316×3088. Keep source provenance externally; remove source metadata before creating a managed source where appropriate, preserving a reproducible original-to-source chain. Never publish metadata dumps or the archive original through `public/`.

Use the existing Astro managed-image/default Sharp pipeline and one WebP format. Start with one 240px-wide derivative if visually sufficient; a 480px second width must earn its DPR-quality benefit. At most two distinct emitted files for this source, with preserved 3:4 aspect ratio and rendered width at most 240 CSS px. Explicitly verify actual emitted outputs: do not assume helper defaults emit only requested widths. No crop, lightbox, image focus control, extra codec configuration or dependency is required. Use actual installed API semantics (`format`, not speculative plural Image props).

All limits apply simultaneously: each portrait derivative ≤150,000 encoded bytes; all emitted images ≤1,000,000 bytes; every route's unique fetched image bodies ≤600,000 bytes; source ≤2 distinct emitted files. Portrait-only emitted ceiling is therefore 300,000 bytes. The carried 200,000-byte project-variant ceiling admits no project image in v0.5.

Before admission, prove reproducible transform using the existing lockfile installation, inventory every emitted image (path/hash/dimensions/format/settings/bytes), verify metadata stripping and visual legibility at intended widths/DPRs, and show no original or unused image is emitted. Determine alt after inspecting the actual derivative and surrounding content: empty if decorative/redundant next to identity, or a concise confirmed identity description if informative. Set intrinsic dimensions; layout must not overflow.

Collect full no-JS route image bodies in 20 fresh browser contexts: five routes × widths 320/1280 × DPR 1/2. Attach response collection before navigation, await response bodies and image completion/decoding, and total unique requested image URLs per context using actual encoded body bytes. Do not sum contexts into one route cap or substitute Content-Length, decoded memory, compressed transfer guesses, or lazy-load savings. Native lazy loading supplies no no-JS budget credit. Home, Projects, Articles and the article must request zero images.

If any admission gate fails, remove portrait references and managed product source, clean the generated output and rebuild the complete text-only shell. Verify no image artifacts/requests remain. Do not raise budgets or add dependencies to avoid Null. The admitted derivative passed actual byte/metadata/quality and reproducibility checks; recheck these gates after any source or transform change.

## Acceptance and review handoff

Extend the existing build-first JavaScript-disabled Playwright harness. Visit all five routes directly at mobile and desktop widths; traverse every primary nav link from each route, the identity link, article index link and article back-link. Verify exact active state, accessible names, heading/landmark/title/description, visible keyboard focus, no horizontal overflow, unique/resolvable fragments and all local href/src targets. Inspect built output for zero scripts, `astro-island` and `astro-server-island`. Retain the article body. Check the exact confirmed content/contact allowlist and excluded claims. Use `npm run build` and `npm run test:browser` within `frontend/`; report actual results, including portrait or text-only outcome.

Run `npm run test:browser` after any change; it builds current output and runs 21 tests: one complete inventory gate plus twenty fresh no-JS route contexts. Each collected image body must be WebP, metadata-free and within the per-file cap; RIFF/chunk bounds and unique emitted-reference equality are enforced. Probe oversize, EXIF, non-WebP and an allowed-name orphan (`portrait.unused.webp`) in isolated generated output, then rebuild and verify original hashes. Existing implementation review is closed; new product or policy changes require their own authorized review.

## Admitted image provenance

Archive original SHA-256 `ea8e0e66be30f8d4326d920a71bcba1015b1bf1326abb7f454bbb71d2126c3a5`; existing Sharp transform `resize({width:480}).png().toBuffer()` strips metadata, producing managed source SHA-256 `4a73a1c949a0fdd11c35143cfb2dd1b338b879389c1c5a8f9a0fb6479f6a90ae`. About requests one WebP240x320 quality80. Output `/_astro/portrait.DpkCyNKr_15Erfh.webp`:11292 bytes, SHA-256 `938f9d78e68872582e8987f69580d34c23f39fff5cc5b25f4517bcb457822fb0`, only VP8 chunk. About requests one11292-byte image; all other routes zero, at both viewport widths and DPRs. Rebuilds and a clean strict lockfile install reproduced all six emitted-file hashes. Visual sufficiency was checked at DPR1/2; no second width earned its bytes. Never publish the original or metadata dumps.

## Panel probe operations

Give each native seat its own writable scratch subdirectory under its private folder. Probes, temporary files and caches must stay there. Preserve exact native finals and complete command/descendant records; permission instructions alone do not enforce filesystem containment. Any exception must bind the current round, exact command and full snapshot, and must not imply verdict/quorum authority.

## Downstream model contribution evidence

Cycle: site-shell-content implementation, two audit rounds; source: immutable R1/R2 ledgers. Counts are per-cycle attributable findings, not shared aggregate updates. DeepSeek contributed R1-F1 (shared with Fable) and unique R1-F2:1U/2T,1 cycle. Fable corroborated R1-F1:0U/1T,1 cycle. Gemini and Astra:0U/0T,1 cycle each. False positives supply no bug credit. Exact effective identities and verification limits are retained in R2 admission evidence; no shared protocol Model Intel table was changed.
