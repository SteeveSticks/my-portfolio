# Verify: RAG Pipelines · spec 0001 · updated 2026-08-25
_Steps derived from spec 0001 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## UI / manual
- [ ] Visit `/` and observe Shipped Projects grid → Repomind, RAG Pipelines, Jude Solar, StartupFounder displayed in that order, Notion Clone omitted → AC-1, AC-10
- [ ] Visit `/projects` → All projects listed including RAG Pipelines and Notion App Clone → AC-2
- [ ] Observe RAG Pipelines card on homepage and `/projects` → shows `rag-pipelines.png`, title "RAG Pipelines", description, and "View Project" button linking to `/project/rag-pipelines` → AC-3
- [ ] Visit `/project/rag-pipelines` → shows project name, blurb, description and tech chips box; does not show live demo button, Github button, video player, or screenshot gallery → AC-4, AC-12
- [ ] Observe pipeline list on `/project/rag-pipelines` → lists 10 Colab notebook cards in spec order, each with Colab icon, title on top, URL in middle, description underneath with preserved line breaks → AC-5, AC-7, AC-10
- [ ] Click pipeline card title and URL → both links open the Google Colab notebook in a new tab with `target="_blank"` and `rel="noopener noreferrer"`, description is non clickable text → AC-6
- [ ] Invalidate or duplicate a pipeline entry in data → non Colab URLs and duplicate URL or title entries are omitted from the list → AC-8
- [ ] Empty pipeline list in data → intro still displays and list region shows "No pipelines listed yet." → AC-9
- [ ] Inspect metadata and sitemap → `/project/rag-pipelines` has correct page title, description, OG image, and is included in `/sitemap.xml` → AC-11
- [ ] Visit `/project/repomind` → verify existing standard project behavior with live and Github buttons, video and image lightbox remains intact → AC-12

## Commands
- [ ] `npx tsc --noEmit` → TypeScript typecheck passes with 0 errors → AC-12
- [ ] `npx next build` → Next.js production build succeeds and statically generates `/project/rag-pipelines` → AC-11

## Acceptance-criteria coverage
- AC-1 covered by homepage grid order step · AC-2 covered by all projects page step · AC-3 covered by card display step · AC-4 covered by detail header and omitted buttons step · AC-5 covered by pipeline card display step · AC-6 covered by new tab link step · AC-7 covered by pipeline order step · AC-8 covered by invalid or duplicate filter step · AC-9 covered by empty state step · AC-10 covered by data editing step · AC-11 covered by SEO metadata and build command step · AC-12 covered by optional links and regression step
