# Verify: Media loading · spec 0002 · updated 2026-08-25
_Steps derived from spec 0002 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## UI / manual
- [ ] Visit `/` on a mid range mobile profile or equivalent throttle (Lighthouse or Chrome performance) → Largest Contentful Paint under 2.5s → AC-1
- [ ] Inspect homepage Hero image → `next/image` with `priority`, `sizes` set → AC-10
- [ ] Inspect homepage catalog and `/projects` cards → `next/image` with `sizes`, not `priority` → AC-10
- [ ] Visit `/project/Notion` with DevTools network open, filter Media → `notion-video.mp4` is absent until the video is scrolled on screen; `preload` is `none` → AC-2, AC-5
- [ ] When the video is on screen and reduce motion is off → muted looping playback starts with poster `/img/notionclone.png` (or that project's `img`) → AC-3, AC-5
- [ ] Scroll the video off screen → playback pauses; scroll back → playback resumes → AC-7
- [ ] Enable `prefers-reduced-motion: reduce`, reload a project with `vid` → poster only, no autoplay; tap/click starts playback; no control bar → AC-4
- [ ] Temporarily rename or break a project MP4, reload → the block shows `project.img` via `next/image`, not a broken video → AC-6
- [ ] On a project with `img2`/`img3` → gallery images lazy load; click still opens the lightbox at the same path → AC-9
- [ ] Visit `/project/rag-pipelines` → no video, no live/Github buttons, no screenshot gallery → AC-13
- [ ] Visit `/project/repomind` (or another standard project) → video/gallery behavior still present → AC-13

## Commands
- [ ] Inspect `public/img` and `public/video` → listed orphans in AC-12 are gone; `_originals/` still gitignored; referenced files remain → AC-12
- [ ] Inspect disk sizes of `notion-img1.png` and `notion-img2.png` → no longer multi megabyte sources; filenames unchanged → AC-8, AC-14
- [ ] `git diff _data/data.ts` for this slice → no new media fields and no renamed `img`/`vid`/`img2`/`img3` strings → AC-14
- [ ] Inspect `next.config.ts` → `images.formats` includes AVIF and WebP; `Cache-Control` on `/img/:path*`, `/video/:path*`, `/tech/:path*` → AC-11
- [ ] `npx tsc --noEmit` → TypeScript typecheck passes with 0 errors → AC-14
- [ ] `npx next build` → production build succeeds → AC-1, AC-11

## Acceptance-criteria coverage
- AC-1 covered by homepage LCP step · AC-2 covered by network log step · AC-3 covered by on screen autoplay step · AC-4 covered by reduce motion step · AC-5 covered by poster URL step · AC-6 covered by broken MP4 step · AC-7 covered by scroll pause/resume step · AC-8 covered by disk size command · AC-9 covered by gallery lazy/lightbox step · AC-10 covered by Hero and catalog image inspect · AC-11 covered by next.config inspect and build · AC-12 covered by orphan file inspect · AC-13 covered by rag-pipelines and standard project regression · AC-14 covered by data.ts diff
