# Scope: Adebanjo Stephen portfolio

Public personal site for Adebanjo Stephen. Visitors scan shipped work and open a project page for each one.

**Build approach:** Tracer Bullet (thin path through data, catalog, and detail page first, then thicken the list).
**Workflow:** Alpha (`/check verify` after `/develop`). You can skip a step that does not fit.

_These are recommendations to keep your build orderly, not requirements._

## At a glance

| # | Feature | Phase | Status |
|---|---------|-------|--------|
| 1 | RAG Pipelines | Slice 1 | in-progress |
| 2 | Media performance | Slice 2 | in-progress |

## Slice 1: RAG Pipelines

### 1. RAG Pipelines · in-progress
Add a RAG Pipelines card to the shipped catalog (homepage second, also on All Shipped Projects). Clicking it opens a project page that lists Google Colab notebooks (icon, title, URL, short description).
**Done when:** visitors see RAG Pipelines as the second homepage card and on `/projects`; `/project/rag-pipelines` lists the 10 Colab notebooks from spec 0001 with title, URL, and description; Notion Clone stays on `/projects` only.
- [x] Design it (spec): `/architect RAG Pipelines`
- [x] Build it: `/develop RAG Pipelines`
   - [x] Data and catalog: types, RAG Pipelines object, homepage order, catalog image (AC-1, AC-2, AC-3, AC-10, AC-12)
   - [x] Project page variant and pipeline cards (AC-4, AC-5, AC-6, AC-7, AC-9)
   - [x] Filter, SEO, and the 10 notebook rows (AC-8, AC-11, AC-7, AC-10)
- [ ] Verify it: `/check verify RAG Pipelines`
Spec [0001](../specs/0001-rag-pipelines/index.md)

## Slice 2: Media performance

### 2. Media performance · in-progress
Make project demo pages cheaper to load: videos wait until they are on screen, heavy screenshots shrink on disk, unused files leave the deploy. Homepage LCP under 2.5s on a mid range phone.
**Done when:** a project page with a video does not fetch the MP4 until the player is on screen; gallery sources are no longer multi megabyte; unreferenced public files are gone; homepage LCP is under 2.5s on a throttled mobile profile.
- [x] Design it (spec): `/architect Media performance`
- [x] Build it: `/develop Media performance`
   - [x] Video loading on project pages (AC-2, AC-3, AC-4, AC-5, AC-6, AC-7, AC-13)
   - [x] Shrink images, next/image hints, cache headers (AC-8, AC-9, AC-10, AC-11)
   - [x] Drop unused public files; keep data.ts media fields (AC-12, AC-14)
   - code in `src/components/ProjectPageContent.tsx`, `src/components/Hero.tsx`, `src/components/About.tsx`, `src/components/Project.tsx`, `src/app/projects/page.tsx`, `next.config.ts`, `public/img/`, `public/video/`
- [ ] Verify it: `/check verify Media performance`
Spec [0002](../specs/0002-media-performance/index.md)

## Deferred

- **Project context files** (from spec 0001): root `AGENTS.md` is missing. Does not block this feature.

## Legend

**The decision box.** Every feature carries exactly one, the sub task whose label ends with `(spec)`.
**Next step** = the first unticked box.
**Atomic build tasks live in the spec's `## Build plan`, not here.**
