# Rationale: 0001. RAG Pipelines project and Colab list

## Context

> ⚠️ Premise note: Intro copy (`show`, `desc`, `lang`) is still a draft you may rewrite. The catalog image `public/img/rag-pipelines.png` is still a required file you add. First version pipeline rows are now listed in this spec. `/develop` copies those rows; it does not invent Colab URLs or rewrite titles (keep author spelling such as `Retriveval` and `mortage`).

The portfolio catalog treats each shipped project as one card that leads to one project page. That page today assumes a single live site, a Github repo, and media (video or screenshots). RAG work does not fit that shape. It lives as several Colab notebooks, each with its own share URL and a short note on what it does.

Visitors who only see the current four homepage cards never reach that work. Stuffing every notebook into one live URL or one Github button would hide the list you want them to scan. The catalog data lives in `_data/data.ts` as a typed array. The homepage **Shipped Projects** grid renders `projects.slice(0, 4)`. The **All Shipped Projects** page at `/projects` renders the full array. Detail routes are `/project/[slug]`. There is no CMS, no `AGENTS.md`, and no recorded delivery approach. The site is public. No auth, no database.

Not deciding leaves RAG work off the homepage (or jammed into a misleading single link) and leaves the project page code assuming every project has `link` and `git`.

No delivery approach is recorded. This spec assumes **Tracer Bullet** (a thin path through data, catalog, and detail page first, then the list behavior).

## Options considered

### Option 1: Extend the existing Project record

Add an optional `pipelines` list on the existing project object in `_data/data.ts`. Make `link` and `git` optional. Reorder the array so the homepage slice picks the right four cards. Reuse `ProjectPageContent` for the heading and intro box. When `pipelines` is an array, skip live, Github, and media, and render a pipeline list instead.

**Pros**:
- Matches how every other project is shipped (one data object, one slug, existing catalog components).
- Small type change. Other projects keep working if they still send `link` and `git`.

**Cons**:
- `ProjectPageContent` gains a branch. The file already handles video and lightbox, so the branch must stay narrow (`Array.isArray(project.pipelines)`).

### Option 2: A separate page component and route

Leave `ProjectPageContent` untouched. Add a dedicated component (and maybe a dedicated route) only for RAG Pipelines.

**Pros**:
- Zero extra branching in the current project page.

**Cons**:
- Duplicates heading, blurb, description box, tech chips, and metadata wiring. A second path for “what is a project” drifts from the catalog.

### Option 3: Treat RAG Pipelines as a normal single URL project

Add a catalog card whose `link` is one Colab (or a folder) and keep the current page with live and Github buttons.

**Pros**:
- No new UI. Fastest change.

**Cons**:
- Visitors never see the list of notebooks with descriptions. That is the feature you asked for.

## Rationale

The catalog already has a Project record, a slug route, metadata, and a sitemap derived from `_data/data.ts`. The gap is that the record assumes one live URL. Widening that record (optional `pipelines`, optional `link` and `git`) is the smallest change that still shows a list. A separate page (Option 2) would copy intro UI you asked to keep. A single live URL (Option 3) would hide the notebooks.

Static data matches a short list you edit yourself (first version is 10 notebooks, still one page, no filters). Fetching Colab previews would fail on notebooks without public metadata. A CMS is heavier than this site.
