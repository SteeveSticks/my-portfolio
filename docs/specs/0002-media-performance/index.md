# 0002. Media loading for project pages and homepage

**Date**: 2026-08-25
**Status**: In Progress

## Summary

This spec makes project pages cheaper to load. Demo videos stay as files in `public/video`. Each video shows a still from the project image, starts only when it is on screen, and pauses when it leaves. Heavy screenshots in `public/img` are shrunk on disk under the same names. Files the site does not use leave the deploy. The homepage should paint its largest visible thing in under 2.5 seconds on a mid range phone.

## Requirements

**User stories**:
- As a visitor, I want a project page to open without pulling a large video first so I can read the description right away.
- As a visitor, I want the muted demo to start when I reach it so the page still feels alive.
- As a visitor on a slow phone, I want the homepage to show its main visual quickly so I do not bounce.
- As the site owner, I want to keep the same filenames in `_data/data.ts` so I do not rewrite project records.

**Acceptance criteria** (the contract, each criterion is IDed and independently checkable):
- **AC-1**: On a mid range mobile profile (or equivalent throttle), homepage Largest Contentful Paint (the time until the biggest visible thing appears) is under 2.5s. Measured with Lighthouse or Chrome performance during verify. No new analytics package.
- **AC-2**: Opening `/project/[slug]` for a project that has `vid` does not request that MP4 until the video element is in (or near) the viewport. `preload` is `none` until play starts.
- **AC-3**: When the video is on screen and the visitor does not have reduce motion, the existing muted looping autoplay starts.
- **AC-4**: When `prefers-reduced-motion: reduce`, the poster shows and the video does not autoplay. A tap or click can play it. Still no control bar.
- **AC-5**: The `<video>` `poster` is `/img/${project.img}`.
- **AC-6**: If the video file is missing or `error` fires, the block shows `project.img` via `next/image` instead of a broken video.
- **AC-7**: When the video leaves the viewport it pauses; when it returns (and reduce motion is off) it resumes.
- **AC-8**: Referenced `img` / `img2` / `img3` files in `public/img` are shrunk in place (same names). Heavy screenshots (especially Notion gallery PNGs) are no longer multi megabyte sources. `next/image` remains the renderer and may still serve AVIF/WebP.
- **AC-9**: Gallery images (`img2`, `img3`) use `next/image` with lazy loading (default, not `priority`). Lightbox still opens the same path on click.
- **AC-10**: Homepage catalog cards, `/projects` cards, Hero, and About images use `next/image` with sensible `sizes`. Hero profile is `priority` (LCP candidate). Commented navbar logo is left commented; do not wrap dead markup.
- **AC-11**: `next.config.ts` sets `images.formats` to AVIF and WebP, and cache headers on `/img/:path*`, `/video/:path*`, `/tech/:path*`.
- **AC-12**: Unreferenced files under `public/img` and `public/video` are not in the deploy. Known orphans include: `halamd-demo.mp4`, `halamd-image.png`, `halmad3.png`, `halmand2.png`, `bookstoreimg.png`, `brandLogo.png`, `hydramindappimage.png`, `job-portalimg.png`, `judesolar3.png`, `pentagonsTokenimg.png`, `repomind-img.png` (code uses `.jpg`), `silentalarmimage.png`, `startupfounder2.png`, `startupfounder3.png`, `zendsolv.png`, `zendsolv2.png`, `zendsolv3.png`. Re-scan at build time and remove anything still unreferenced. Keep `_originals/` gitignored. Do not delete files that `data.ts`, Hero, About, layout OG, StackLoop, or the resume still point at.
- **AC-13**: `/project/rag-pipelines` still has no video, no live/Github buttons, no screenshot gallery (spec 0001 AC-4). Other project pages still show video or gallery when those fields exist.
- **AC-14**: `Project` type and filename strings in `_data/data.ts` do not gain new media fields and do not rename `img` / `vid` / `img2` / `img3`.

## Decision

**Chosen option**: Option 1: Fix in place (self hosted files, loading behavior, shrink on disk)

Keep videos and images on Vercel under `public/`. Change when videos load. Shrink image bytes under the current names. Let `next/image` serve modern formats. Drop unused files from the deploy.

RECOMMEND calls locked here (pick, one line why, runner up):
- **In view hook**: `useInView` from `framer-motion`, `once: false`, on a wrapper around the video, not the whole page motion ref. Why: Hero and catalog cards already use it. Runner up: a native IntersectionObserver hook.
- **Reduce motion**: `useReducedMotion` from `framer-motion`. Why: same library, one source of truth. Runner up: `window.matchMedia("(prefers-reduced-motion: reduce)")`.
- **Source attach**: do not set `<source src>` until the video should load (on screen and reduce motion is off, or the visitor asked to play). Why: some browsers still fetch with `preload="none"` if `src` is present. Runner up: always set `src` and rely on `preload="none"` only.
- **Cache header**: `public, max-age=86400, stale-while-revalidate=604800` on `/img`, `/video`, `/tech`. Why: filenames do not hash, so one day, not one year. Runner up: one year immutable cache.
- **Image formats**: `images.formats: ["image/avif", "image/webp"]` in `next.config.ts`. Why: Next already runs `sharp`. Runner up: WebP only.
- **Shrink cap**: longest side about 1600px, no upscale, keep the original extension, aim under 300KB when the format allows. Why: gallery and catalog display widths are far smaller than the current multi megabyte PNGs. Runner up: 1200px cap.
- **Shrink method**: one off `sharp` pass, no `package.json` script. Why: you declined a lasting compress recipe. Runner up: a checked in `npm run compress-media` script.
- **Hero LCP**: `priority` plus `sizes` on `/img/profile-image.jpg`. Why: it is the likely homepage LCP element. Runner up: `priority` on the first catalog card instead.
- **Commented navbar logo**: leave the commented `<img>` alone. Why: wrapping dead markup does not change LCP. Runner up: convert it in case it is uncommented later.
- **Fonts**: leave Geist weights as they are. Why: this slice is media. Runner up: drop unused weights if AC-1 still fails after images.

## Feature design

**Data model sketch**:

Project (existing, unchanged), identity is `slug`:
- `img` string required. Filename under `public/img`. Also the video poster.
- `vid` string optional. Filename under `public/video`.
- `img2`, `img3` string optional. Gallery filenames under `public/img`.
- No `poster`, width, height, alt, or blur fields.

Pipeline (unchanged). Relationship: one Project has many Pipelines. No database. No schema migration.

**State transitions** (demo video):
- idle (poster only, no `src`) → loading/playing when on screen and reduce motion is off
- playing → paused when it leaves the viewport (keep `src`)
- paused → playing when it returns and reduce motion is off
- idle → playing on tap/click when reduce motion is on
- any → image fallback when `error` fires or the file is missing

**API surface**:

| Surface | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| `ProjectPageContent` video block | render | `project.vid`, `project.img`, in view, reduce motion | poster URL, optional MP4, play/pause | public | `error` → show `project.img` |
| `next/image` on catalog, gallery, Hero, About | render | filename, `sizes`, `priority` on Hero only | optimized image | public | missing file → Next image error |
| `GET /img/*`, `/video/*`, `/tech/*` | static | path | file bytes plus cache header | public | 404 |
| `/_next/image` | Next optimizer | src, width, quality | AVIF or WebP | public | 400 on bad src |

**Value sourcing**:
| Action | Value produced / displayed | Source |
|---|---|---|
| Homepage LCP under 2.5s | LCP time | Lighthouse or Chrome performance on a mid range mobile profile (or equivalent throttle), decided in this spec |
| Video not requested early | MP4 request timing | `src` attached only when load is allowed; `preload="none"` |
| Muted loop on screen | play() | `useInView` on the video wrapper plus `useReducedMotion` false |
| Poster still | poster URL | `/img/${project.img}` from `_data/data.ts` |
| Reduce motion still | no autoplay | `useReducedMotion()` from `framer-motion` |
| Tap to play under reduce motion | play() | click/keyboard on the video element sets a local play intent |
| Video error fallback | static image | `project.img` via `next/image` |
| Pause off screen | pause() | `useInView` becomes false, `once: false` |
| Shrunk gallery/catalog bytes | file size on disk | one off `sharp` resize of referenced files, same names |
| Gallery lazy | loading | `next/image` default (no `priority`) |
| Hero LCP hint | `priority` | decided in this spec for `/img/profile-image.jpg` |
| Cache | `Cache-Control` | `next.config.ts` headers, value decided above |
| Orphans gone | files absent from `public/` | delete unreferenced names listed in AC-12 after a re-scan |
| Pipelines page has no video | variant | `Array.isArray(project.pipelines)` from spec 0001 |
| Filenames in data | `img`/`vid`/`img2`/`img3` strings | existing `_data/data.ts`, not renamed |

**Key invariants**:
- `Project` media fields stay filename strings. No new media fields.
- RAG Pipelines (`pipelines` array present) never renders the video or gallery block.
- Poster always comes from `img`, never from a separate file convention.
- MP4 files in `public/video` (except `_originals/`) are not re-encoded in this slice.
- No new npm dependencies.

**Security model**:
- All media is public on purpose. No auth.
- Removing unreferenced files is the privacy win (old project shots leave the live origin).
- Do not expose `_originals/` (already gitignored).

**Configuration required**:
- None. No new env vars.

**Critical test scenarios**:
- Happy path: open `/project/notion-app-clone` (or the Notion slug), confirm no MP4 in the network log until the video is on screen, then muted loop starts, verifies **AC-2**, **AC-3**, **AC-5**
- Reduce motion: enable the OS setting, reload, poster only, tap plays, verifies **AC-4**
- Failure: break or rename the MP4, page shows `project.img`, verifies **AC-6**
- Off screen: scroll away, video pauses, scroll back, it resumes, verifies **AC-7**
- Gallery: Notion extra screenshots are small on disk and lazy, lightbox still opens, verifies **AC-8**, **AC-9**
- Homepage: Hero `priority`, Lighthouse LCP under 2.5s, verifies **AC-1**, **AC-10**
- Orphans: listed unused files are gone, verifies **AC-12**
- Regression: `/project/rag-pipelines` still has no video or gallery; `data.ts` media keys unchanged, verifies **AC-13**, **AC-14**

## Build plan

Tracer Bullet: one heavy project page through video behavior first, then the rest of the media surface.

1. [x] On the Notion project page, in view autoplay, poster from `img`, pause off screen, reduce motion still, error fallback. Prove in DevTools that the MP4 is not requested on first paint. Satisfies **AC-2**, **AC-3**, **AC-4**, **AC-5**, **AC-6**, **AC-7**. (Network proof is for `/check verify`.)
2. [x] Same video behavior for every `project.vid` (Repomind, Jude Solar, StartupFounder). Pipelines variant untouched. Satisfies **AC-13**.
3. [x] Shrink referenced images in `public/img` in place, starting with `notion-img1.png` and `notion-img2.png`, then other oversized catalog and gallery files. Satisfies **AC-8**.
4. [x] `sizes` and `priority` on `next/image`: Hero `priority`; catalog and gallery lazy; About below the fold lazy. Satisfies **AC-9**, **AC-10**.
5. [x] `next.config.ts` formats plus cache headers. Satisfies **AC-11**.
6. [x] Delete unreferenced public files (list in AC-12, re-scan). Satisfies **AC-12**.
7. [x] Confirm `_data/data.ts` media fields unchanged. Satisfies **AC-14**.
8. [ ] Verify homepage LCP under 2.5s on a throttled mobile profile; if it fails, shrink remaining homepage sources before touching fonts. Satisfies **AC-1**.

## Consequences

**Positive**:
- Project pages stop downloading 2 to 5MB videos before the visitor scrolls.
- Multi megabyte gallery PNGs stop dominating the Notion page.
- Repeat visits reuse cached `/img`, `/video`, and `/tech` for a day.
- Unused old screenshots leave the live site.

**Negative / tradeoffs**:
- Modest cache (one day) means a replaced screenshot can look stale until max-age ends, unless you rename the file.
- Shrink on disk is a one off. A new huge PNG you add later will ship huge until you shrink it by hand.
- `src` attached only when needed means a brief empty poster wait on first view (the MP4 then starts).
- LCP is a lab number. Real phones on bad networks can still miss 2.5s.

**Neutral**:
- Video look stays a muted loop with no controls.
- Geist font payload is unchanged in this slice.
- Spec 0001 pipeline pages are unchanged.

## Follow-up

- [ ] Root `AGENTS.md` is still missing (deferred from spec 0001). Does not block this feature.
- [ ] If homepage LCP still misses 2.5s after images, cut unused Geist weights (layout loads 400 through 900 today).
- [ ] Re-encode MP4s smaller only if in view loading is not enough on real mobile networks.

## Rationale

Reasoning and options: see [rationale.md](./rationale.md).

## Migration plan

**Strategy**: no migration needed (one deploy, static files plus component behavior)

**Phases**:
1. Ship code, shrunk images, cache headers, and orphan deletes together.

**Rollback**: revert the commit. Image bytes and deleted files return from git.

**Risks**: a visitor with a cached old image keeps it for up to one day. A too aggressive shrink could make a screenshot look soft; recopy from git and shrink less.
