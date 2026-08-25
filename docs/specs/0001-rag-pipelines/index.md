# 0001. RAG Pipelines project and Colab list

**Date**: 2026-08-24
**Status**: In Progress

## Summary

This spec adds a **RAG Pipelines** card to the shipped projects catalog (the homepage grid and the All Shipped Projects page). Clicking it opens a project page that lists Google Colab notebooks (interactive Python notebooks hosted by Google). Each item shows a Colab icon, a title, the notebook URL, and a short description. You add and edit notebooks in the existing static data file, same as the other projects.

## Requirements

**User stories**:
- As a visitor, I want to open RAG Pipelines from the shipped catalog so I can see the Colab notebooks on this portfolio.
- As a visitor, I want each notebook as a title, URL, and short description so I can pick one and open it in Google Colab.
- As the site owner, I want to add or change notebooks by editing the static data file so I can update the list without a CMS.

**Acceptance criteria** (the contract, each criterion is IDed and independently checkable):
- **AC-1**: The homepage Shipped Projects grid shows four cards in this order: Repomind, RAG Pipelines, Jude Solar, StartupFounder. Notion App Clone is not among those four.
- **AC-2**: The All Shipped Projects page at `/projects` lists RAG Pipelines with every other shipped project, including Notion App Clone.
- **AC-3**: RAG Pipelines catalog cards on the homepage and on `/projects` show the image at `public/img/rag-pipelines.png`, the name `RAG Pipelines`, the project description, and a View Project button that goes to `/project/rag-pipelines`.
- **AC-4**: `/project/rag-pipelines` shows the project name, the one line blurb (`show`), then the bordered Description and Technologies box (`desc` and `lang`). It does not show a live demo button, a Github button, a video, or a screenshot gallery.
- **AC-5**: Below the intro box, the page lists pipeline cards in one column. Each card shows a small Colab icon (`SiGooglecolab` from `react-icons/si`), the title on top, the URL in the middle, and the description under the URL. Descriptions are plain text. Line breaks in the string are kept (`whitespace-pre-line` or equivalent). No markdown.
- **AC-6**: The title and the URL are both links to that pipeline’s `url`, opened in a new browser tab, with `rel="noopener noreferrer"`. The description is plain text, not a link. The card as a whole is not a single click target.
- **AC-7**: Pipelines render in array order from `project.pipelines` after filtering. First version has the 10 rows in **First version pipelines** (this spec), in that order.
- **AC-8**: A pipeline is skipped (not rendered) when `url` is missing, is not a string that starts with `https://colab.research.google.com/`, or repeats a `url` or `title` already kept (first kept wins).
- **AC-9**: If no pipelines remain after filtering, the intro still renders and the list region shows exactly: `No pipelines listed yet.`
- **AC-10**: Adding or changing pipelines is done by editing `_data/data.ts`. No admin UI, no CMS, no Colab API.
- **AC-11**: `generateMetadata` for `/project/rag-pipelines` follows the existing project pattern (title from `name`, description from `desc`, Open Graph image from `img`). The sitemap includes `/project/rag-pipelines` because it already maps the `projects` array.
- **AC-12**: `link` and `git` are optional on the Project type. RAG Pipelines omits them. Other projects still provide them and still show those buttons.

## Decision

**Chosen option**: Option 1: Extend the existing Project record (see [rationale.md](./rationale.md))

Ship RAG Pipelines as one Project in `_data/data.ts` with an optional `pipelines` array. Reuse the catalog and the project page intro. Render the Colab list only when `pipelines` is an array.

RECOMMEND calls locked here (pick, one line why, runner up):
- **Variant flag**: `Array.isArray(project.pipelines)`, not a new `kind` field. Why: one optional field already distinguishes this project. Runner up: `kind: "pipelines"`.
- **Shared type**: export `Project` and `Pipeline` from `_data/data.ts` and import them in page and UI files. Why: `link` and `git` become optional in one place. Runner up: keep duplicating the inline type in `ProjectPageContent`.
- **Colab icon**: `SiGooglecolab` from `react-icons/si`, decorative (`aria-hidden`). Why: `react-icons` is already a dependency. Runner up: an SVG under `public/tech/`.
- **Empty copy**: `No pipelines listed yet.` Why: short and visible. Runner up: hide the list region with no message.
- **Homepage placement**: reorder the `projects` array; keep `slice(0, 4)`. Why: AllProjects already shows the full list, including Notion. Runner up: special case the homepage filter.
- **Draft intro** (you may rewrite in data):
  - `show`: `Google Colab notebooks that retrieve, ground, and answer from your own documents.`
  - `desc`: `A set of RAG pipelines I built in Google Colab. Each card is a notebook you can open, with a short note on what that pipeline does.`
  - `lang`: `["Python", "LlamaIndex", "OpenAI", "Hugging Face"]`
- **Catalog image path**: `rag-pipelines.png` in `public/img/`. You add the file. Runner up: reuse an existing screenshot.

## Feature design

**Data model sketch**:

Project (existing, widened), identity is `slug`:
- `name` string required. This project: `RAG Pipelines`
- `slug` string required, unique. This project: `rag-pipelines`
- `show` string required (one line under the heading)
- `desc` string required (description box)
- `lang` string[] required (tech chips)
- `img` string required (filename in `public/img`)
- `vid`, `img2`, `img3` string optional, unused here
- `link` string optional (live site). Omit on RAG Pipelines
- `git` string optional (Github). Omit on RAG Pipelines
- `problem`, `solution` string optional (already used by Notion only)
- `pipelines` Pipeline[] optional. Present on RAG Pipelines (may be empty)

Pipeline (new), nested on that Project, identity is `url`:
- `title` string required, unique within the parent project
- `url` string required, unique within the parent project, must start with `https://colab.research.google.com/`
- `description` string required, about one to three sentences, plain text

Relationship: one Project has many Pipelines (nested array). Render order is array order after the filter. No database. No migration table.

**First version pipelines** (copy into `project.pipelines` in this order; titles and URLs kept as supplied, trailing space and period stripped from title 8 only):

```json
[
  {
    "title": "Comparing-embedding-models",
    "url": "https://colab.research.google.com/drive/1IJri_n2Jh-SuRZOdQKlQBfIyNSPIdnbh?usp=drive_link",
    "description": "We compared three embedding models, MiniLM-L6-v2, BGE-small-en, and E5-small-v2. We generated statistical representations of their responses, ranked the model that gave the top response, and recorded each model's retrieval time."
  },
  {
    "title": "Build a Simple Chatbot with LlamaIndex",
    "url": "https://colab.research.google.com/drive/1VVgh3RailWVT3lncM24JUjsU1Z6nwvEk",
    "description": "We used Gemini to generate responses from user input, then tested our chatbot by asking it different questions."
  },
  {
    "title": "Query Processing & Retrieval Optimization",
    "url": "https://colab.research.google.com/drive/1LQoIAj4A5uJ9ZSFLTL7hLYWLoFUcwc-w",
    "description": "Implemented an industry-standard RAG optimization, including query expansion and rewriting with an integrated hybrid retriever (keyword + vector search) and additional ranking for accurate results. Every result is presented in a table to meet company standards."
  },
  {
    "title": "Route Queries With Large Contact PDF",
    "url": "https://colab.research.google.com/drive/1oXfKvyj-jWM6ITxPpKjhQsVnWT62CR38",
    "description": "I demonstrated how to effectively use a RAG pipeline with a large document. We employed an LLM to classify document types and boundaries. By using key-concept metadata, the LLM can remember the document and execute an efficient RAG pipeline.\n\nGroup pages into logical documents, chunk them, and assign metadata to each logical document. Then predict query routing and retrieve results with a metadata filter."
  },
  {
    "title": "Routing_PDF_Queries_Using_Metadata",
    "url": "https://colab.research.google.com/drive/1VbkIBT18_kfpF00qs4vw4eOpCA75PkhC#scrollTo=p-rgstXvPSrM",
    "description": "I used the LLM and a simple base rule to classify each PDF page, assign a type, and retrieve matching files. Then I created a temporary index from a matching document and queried it for the specific answers you need."
  },
  {
    "title": "RAG_Pipeline_For_Document_Retriveval",
    "url": "https://colab.research.google.com/drive/1rCgCaLwyyvcdMbVQTIjg1BHG1b82fmdx",
    "description": "Integrated PDFs with LlamaIndex, then implemented an LLM-based query expansion and a complete end-to-end pipeline. I demonstrated the steps for extracting the best data from a large document using BM25 retrival for keyword matching."
  },
  {
    "title": "My_ChatBot_Interface",
    "url": "https://colab.research.google.com/drive/1W-Nr9YjCsb6O53pjog6t3A_JeHKSLbTp",
    "description": "Implemented a new chatbot interface using Gradio."
  },
  {
    "title": "RAG_Configurations_and_Log_Output_Differences",
    "url": "https://colab.research.google.com/drive/14ugvSu7TJsqk4WqhS25qeip3aLGEG8Gg",
    "description": "This RAG configuration uses a retriever with top-k on the specified document vector database, applies a similarity threshold, combines these settings to log the difference, and then runs the RAG."
  },
  {
    "title": "Rag_Pipeline_on_contract_document",
    "url": "https://colab.research.google.com/drive/1gkIRuaMAP7aJ_ks_u65aEWfnPOOu1LWP",
    "description": "The RAG pipeline:\n\nExtracts text from the document with PyMUdf.\nGenerates embeddings.\nPerforms query expansion and writes the result.\nImplements HybridRetriever, a hybrid of keyword and vector search.\nInitializes the large language model (LLM) and embedding models.\nExecutes a rerank call to retrieve the top-k results.\n\nThis creates a practical live RAG pipeline for most use cases."
  },
  {
    "title": "OCR_on_mortage_image",
    "url": "https://colab.research.google.com/drive/14HTqVv58q7AwvrklAjriPW0_8qPJZJ54#scrollTo=6HqMyrJBnzKp",
    "description": "Performed OCR on a PDF to obtain the text's bounding box. Extracted the bounding box and used CVT color tools to determine the exact box and the text's location. Executed the OCR action."
  }
]
```

Hash fragments (`#scrollTo=...`) and `?usp=drive_link` stay on the `url`. They still start with `https://colab.research.google.com/`.

Array order in `_data/data.ts` (homepage is the first four):
1. Repomind
2. RAG Pipelines
3. Jude Solar
4. StartupFounder
5. Notion App Clone (and any later projects)

**State transitions**: none (static content)

**API surface** (pages and links, no REST):

| Surface | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| `/` Shipped Projects grid | render | `projects.slice(0, 4)` | four cards | public | missing `img` breaks `next/image` |
| `/projects` | render | full `projects` array | all cards including Notion and RAG Pipelines | public | same |
| `/project/rag-pipelines` | GET (static) | slug | intro plus filtered pipeline list or empty message | public | unknown slug → existing `notFound()` |
| pipeline title link | GET external | `pipeline.url` | Colab in a new tab | public | skipped if URL fails AC-8 |
| pipeline URL link | GET external | `pipeline.url` | Colab in a new tab | public | same |
| `generateMetadata` | build | project `name`, `desc`, `img` | title, description, OG image | n/a | missing project → existing not found title |
| `sitemap.xml` | build | `projects` | includes `/project/rag-pipelines` | n/a | n/a |

**Value sourcing**:

| Action | Value produced / displayed | Source |
|---|---|---|
| Homepage grid order | Repomind, RAG Pipelines, Jude Solar, StartupFounder | array order in `_data/data.ts`, first four via existing `slice(0, 4)` |
| `/projects` membership | RAG Pipelines and Notion both listed | full `projects` array |
| Catalog image | card screenshot | file `public/img/rag-pipelines.png` supplied by you, field `img: "rag-pipelines.png"` |
| Catalog name | `RAG Pipelines` | `project.name` in data |
| Catalog description | project `desc` | `project.desc` in data (draft in Decision until you rewrite) |
| View Project href | `/project/rag-pipelines` | `project.slug` |
| Detail heading | `RAG Pipelines` | `project.name` |
| Detail blurb | one line under the heading | `project.show` (draft in Decision) |
| Description box | body copy | `project.desc` |
| Technology chips | chip labels | `project.lang` (draft in Decision) |
| Hide live / Github / media | those blocks not rendered | `Array.isArray(project.pipelines)` |
| Pipeline title | card heading and link text | `pipeline.title` from **First version pipelines** in this spec, copied into `_data/data.ts` |
| Pipeline URL text | visible URL | `pipeline.url` from **First version pipelines** in this spec |
| Pipeline description | text under the URL | `pipeline.description` from **First version pipelines** in this spec (plain text, line breaks kept) |
| Colab icon | small mark on each card | `SiGooglecolab` from `react-icons/si`, `aria-hidden` |
| Link target | new tab | decided here: `target="_blank"` `rel="noopener noreferrer"` |
| List order | card sequence | array order after filter |
| Skip invalid or duplicate | item not rendered | filter: prefix `https://colab.research.google.com/`, first unique `url` and `title` |
| Empty list copy | `No pipelines listed yet.` | decided in this spec |
| Metadata title | `RAG Pipelines \| Adebanjo Stephen` | existing `generateMetadata` using `project.name` |
| Metadata description | `project.desc` | existing `generateMetadata` |
| OG image | catalog image URL | existing `generateMetadata` using `project.img` |
| Sitemap URL | `https://myportfoliome.vercel.app/project/rag-pipelines` | existing `sitemap.ts` map over `projects` |

**Key invariants**:
- Only URLs that start with `https://colab.research.google.com/` render.
- Titles and URLs are unique within RAG Pipelines after the filter (first kept).
- Descriptions render as text nodes, not HTML, not markdown. Line breaks in the string stay visible.
- Other projects omit `pipelines` and still require working `link` and `git` in practice (type optional, their data still has both).
- Homepage still uses `slice(0, 4)`. Placement is data order, not a special case in `Project.tsx`.
- Notebooks you link should be shareable with anyone who has the link (authoring rule, not enforced in code).

**Security model**:
- All catalog and detail pages are public. No auth, no roles.
- External Colab links use `target="_blank"` and `rel="noopener noreferrer"`.
- Pipeline text is plain text (no markdown renderer, no `dangerouslySetInnerHTML`).
- No new env vars, no Colab API token, no PII store. Compliance scope: none.

**Critical test scenarios**:
- Happy path: homepage shows RAG Pipelines second; `/projects` shows it and Notion; click View Project; intro plus 10 one column Colab cards in spec order; title and URL open the notebook in a new tab. Verifies **AC-1**, **AC-2**, **AC-3**, **AC-4**, **AC-5**, **AC-6**, **AC-7**
- Failure case: mix of a valid Colab, a missing URL, a non Colab https URL, and a duplicate title or URL; only the first valid unique Colab renders. Verifies **AC-8**
- Empty case: `pipelines: []` or every row skipped; intro still shows; copy is `No pipelines listed yet.` Verifies **AC-9**
- Other projects: Repomind (and the rest) still show live and Github buttons and media. Verifies **AC-12**
- SEO: `/project/rag-pipelines` metadata title includes RAG Pipelines; sitemap lists that path. Verifies **AC-11**
- Auth/permission: no login wall on the portfolio pages (public). Colab permission is Google’s, not this app. Verifies public read under **AC-6**

## Build plan

Assumed approach: Tracer Bullet. First a thin path (data → catalog → detail shell), then cards, then filter and SEO checks. No database migration.

1. Export `Project` and `Pipeline` types from `_data/data.ts`. Make `link` and `git` optional. Add optional `pipelines`. Add the RAG Pipelines object (`slug: "rag-pipelines"`, draft `show` / `desc` / `lang`, `img: "rag-pipelines.png"`, no `link`, no `git`). Reorder the array as specified. Satisfies **AC-1**, **AC-2**, **AC-10**, **AC-12**
2. Point catalog cards at the new image path. Keep the View Project label and `/project/${slug}` href. Add `public/img/rag-pipelines.png` (file you supply). Satisfies **AC-3**
3. Teach `ProjectPageContent` the pipelines variant: if `pipelines` is an array, render heading, blurb, description, tech chips, then a list region (empty message when the filtered list is empty). Skip live, Github, video, screenshot gallery, and lightbox on that variant. Other projects unchanged. Satisfies **AC-4**, **AC-9**
4. Add a pipeline list (new small component used only from that variant): one column stacked cards; `SiGooglecolab`; title on top; URL in the middle wrapping on small screens (`break-all` or equivalent); description under it, plain text; title and URL both link out. Satisfies **AC-5**, **AC-6**, **AC-7**
5. Add a pure filter helper (next to the data module or in `src/lib`) used by the list: keep rows whose `url` starts with `https://colab.research.google.com/`; drop later duplicate `url` or `title`. Satisfies **AC-8**
6. Confirm `generateStaticParams`, `generateMetadata`, and `sitemap.ts` pick up the new slug with no extra route file. Satisfies **AC-11**
7. Copy the 10 rows from **First version pipelines** into `pipelines` in `_data/data.ts`, same order, same titles, URLs, and descriptions. Do not invent or “fix” URLs or spellings. Satisfies **AC-5**, **AC-7**, **AC-10**

## Consequences

**Positive**:
- RAG work is visible on the homepage (second card) and on All Shipped Projects.
- Visitors can open each notebook without pretending it is one live product.
- Notion stays on `/projects`. Other project pages stay as they are.

**Negative / tradeoffs**:
- `ProjectPageContent` has a variant. Future “collection” projects will want the same branch, or the file will grow again.
- Catalog image is not in git until you add `public/img/rag-pipelines.png`. Ten stacked cards is longer than a handful; the page still has no filters.
- Private Colabs still open a Google permission wall. This app cannot fix that.

**Neutral**:
- Homepage still shows exactly four cards. Adding another featured project later means editing array order again.
- `link` and `git` are optional in the type. A new normal project that forgets them will silently lose buttons.

## Follow-up

- [ ] Add `public/img/rag-pipelines.png` (homepage and `/projects` card). Feature is not done without this file.
- [ ] Share each linked notebook so anyone with the link can view it.
- [ ] Rewrite `show`, `desc`, and `lang` if the draft copy is wrong. Notebooks mention Gemini, Gradio, and BM25; add those chips only if you want the intro to match.
- [ ] Root `AGENTS.md` is missing. Stack conventions for this repo have no durable home until one exists.
