import React from "react";
import { SiGooglecolab } from "react-icons/si";
import type { Pipeline } from "../../_data/data";

export function PipelineCard({ pipeline }: { pipeline: Pipeline }) {
  return (
    <div className="rounded-xl border p-4 sm:p-5 md:p-6 bg-[#FAFAFA]">
      <div className="flex items-start gap-3">
        <SiGooglecolab
          className="mt-1 size-5 shrink-0 text-[#F9AB00]"
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1 space-y-2">
          <a
            href={pipeline.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold hover:underline block break-words [overflow-wrap:anywhere]"
          >
            {pipeline.title}
          </a>

          <div>
            <a
              href={pipeline.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline break-all block"
            >
              {pipeline.url}
            </a>
          </div>

          <p className="text-sm text-gray-600 whitespace-pre-line break-words [overflow-wrap:anywhere]">
            {pipeline.description}
          </p>
        </div>
      </div>
    </div>
  );
}
