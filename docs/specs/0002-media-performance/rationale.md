# Rationale: 0002 Media loading

## Context

> ⚠️ Premise note: We measured bytes on disk (videos 1.4MB to 4.6MB, two Notion PNGs at about 7MB and 10MB) rather than a live Lighthouse run before this decision. File weight is the bottleneck we can see. AC-1 still requires a lab LCP check after the change. This is not a CDN or cache layer added on a hunch.

The portfolio is a small Next.js 15 app on Vercel. Visitors land on the homepage, scan shipped work, and open `/project/[slug]`. Several of those pages autoplay a muted MP4 from `public/video` as soon as the component mounts. The current effect calls `play()` on load with `preload="metadata"`. The browser fetches megabytes before the visitor has read the description.

Screenshot galleries sit next to those videos. Two Notion PNGs are multi megabyte sources. Catalog cards on `/` and `/projects` reuse some of the same heavy files. `next/image` is already used on cards, Hero, and About, but source files are still huge, `sizes` is missing, and the Hero image has no `priority`. A commented navbar `<img>` is not in the live tree.

`public/` also ships files no route references: an old Halamd demo video and leftover screenshots from dropped projects. Uncompressed masters under `public/video/_originals/` are already gitignored.

There is no CMS and no media table. Projects are static records in `_data/data.ts`. The owner edits filenames by hand. A new host or a new `poster` field would add process this site does not have.

If we do nothing, every project page with a demo keeps paying a multi megabyte tax on first paint, and Vercel keeps uploading orphans.

Related: spec 0001 (RAG Pipelines) requires that `/project/rag-pipelines` show no video and no gallery. This spec must not change that variant.

## Options considered

### Option 1: Fix in place (self hosted files, loading behavior, shrink on disk)

Keep files in `public/`. Teach the existing `<video>` to wait until it is on screen, show `project.img` as the poster, pause off screen, and honor reduce motion. Shrink referenced rasters with `sharp`. Let `next/image` negotiate AVIF/WebP. Delete unreferenced files. Add short cache headers in `next.config.ts`.

**Pros**:
- No new vendor, no new npm package, no `data.ts` churn
- Matches how the site already looks (muted loop, no controls)
- Byte wins land on first request and on raw `/img/` URLs, not only through the optimizer

**Cons**:
- You still operate the files. A future huge PNG ships huge until you shrink it
- Cache invalidation is filename based and we are not hashing names

### Option 2: Move videos to an external host (YouTube, Vimeo, Mux)

Replace in page MP4s with embeds or a video API. The origin stops serving large files.

**Pros**:
- Adaptive bitrate and a real player for free or cheap
- Origin deploy gets much smaller

**Cons**:
- Third party scripts, cookies, and branding
- The cinematic muted loop look is harder to keep
- A new account to operate for a personal site

### Option 3: Image and video CDN (Cloudinary or similar)

Upload media to a transform CDN. The app stores URLs or public IDs.

**Pros**:
- On the fly resize and format without a one off shrink
- Easy later additions

**Cons**:
- New vendor and (often) a bill
- `data.ts` would change from local filenames to remote URLs
- Overkill for a handful of screenshots

### Option 4: Click to play only, leave files as they are

Drop autoplay. Visitor taps a still. No shrink, no CDN.

**Pros**:
- Smallest code change for the video request
- Strongest data saving

**Cons**:
- Loses the current alive demo
- Huge PNGs still wreck the gallery even with no video
- Orphans still deploy

## Rationale

Option 1 matches the forces in Context. The owner already compressed MP4s (the `_originals/` folder is gitignored). The remaining cost is *when* those files load, plus a few enormous PNGs, plus junk in `public/`. Fixing loading and bytes in place keeps the muted loop, keeps `data.ts` stable, and avoids a vendor this site does not need.

Option 2 and 3 solve hosting, not the product. The engineer chose to stay on Vercel files. Option 4 would change the look the engineer asked to keep (on screen autoplay with a poster).

Cache is a liability if we cannot say what is cached, what invalidates it, and what stale means. We cache public static files for one day. Invalidation is "wait or rename". Stale means an old screenshot for up to a day. That is acceptable for a portfolio.

Measure then optimize: we measured disk weight. AC-1 measures LCP after the change. Fonts stay out until that number fails.

## Asset inventory (evidence)

Referenced (keep, shrink rasters as needed):
- Hero: `profile-image.jpg`
- About: `profile-pic.jpg`, `personal-image-garden.jpeg`, `personal-image.jpeg`
- OG in `layout.tsx`: `profile-pic.jpg`
- Projects in `_data/data.ts`: `repomind-img.jpg`, `repomind_img1.png`, `repomind-img3.png`, `rag-pipelines.png`, `judesolar.png`, `judesolar-img2.jpg`, `judesolar-img3.jpg`, `startupFounderimg.png`, `startup-img1.jpg`, `startup-img2.jpg`, `notionclone.png`, `notion-img1.png`, `notion-img2.png`
- Videos: `repomind-video.mp4`, `jude-solar.mp4`, `startup-video.mp4`, `notion-video.mp4`
- Resume: `adebanjo-stephen-resume.pdf`
- `public/tech/*.svg` via `StackLoop`

Unreferenced at spec time (stop shipping, re-scan at build):
- `public/video/halamd-demo.mp4`
- `public/img/halamd-image.png`, `halmad3.png`, `halmand2.png`, `bookstoreimg.png`, `brandLogo.png`, `hydramindappimage.png`, `job-portalimg.png`, `judesolar3.png`, `pentagonsTokenimg.png`, `repomind-img.png`, `silentalarmimage.png`, `startupfounder2.png`, `startupfounder3.png`, `zendsolv.png`, `zendsolv2.png`, `zendsolv3.png`
