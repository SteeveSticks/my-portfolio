import type { Pipeline } from "../../_data/data";

const COLAB_PREFIX = "https://colab.research.google.com/";

/**
 * Filters a pipelines array per AC-8:
 * - Keeps only rows whose url is a string starting with the Colab prefix.
 * - Drops later duplicates by url or title (first kept wins).
 */
export function filterPipelines(pipelines: Pipeline[]): Pipeline[] {
  const seenUrls = new Set<string>();
  const seenTitles = new Set<string>();
  const result: Pipeline[] = [];

  for (const p of pipelines) {
    if (typeof p.url !== "string" || !p.url.startsWith(COLAB_PREFIX)) {
      continue;
    }

    if (seenUrls.has(p.url) || seenTitles.has(p.title)) {
      continue;
    }

    seenUrls.add(p.url);
    seenTitles.add(p.title);
    result.push(p);
  }

  return result;
}
