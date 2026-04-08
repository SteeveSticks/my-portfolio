"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

type Project = {
  name: string;
  slug: string;
  show: string;
  desc: string;
  lang: string[];
  img: string;
  img2?: string;
  img3?: string;
  link: string;
  git: string;
};

export function ProjectPageContent({ project }: { project: Project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  useEffect(() => {
    if (lightboxSrc !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxSrc]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (lightboxSrc) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [lightboxSrc, closeLightbox]);

  return (
    <div className="py-3 px-4 sm:px-6 md:px-10">
      <div ref={ref} className="mt-30 text-wrap">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div>
            <h2 className="font-semibold text-[32px] sm:text-[38px] md:text-[45px]">
              {project.name}
            </h2>
            <p className="flex-grow text-gray-600 text-[16px] sm:text-[18px] md:text-[19px] mt-0">
              {project.show}
            </p>
          </div>

          <div className="mt-8 rounded-xl border p-4 sm:p-6 md:p-4 bg-[#FAFAFA]">
            <span className="font-bold text-[16px] sm:text-[17px] md:text-[18px]">
              Description
            </span>
            <p className="text-base text-wrap prose font-light text-gray-700 mt-2 flex-grow">
              {project.desc}
            </p>

            <hr className="mt-8 mb-8" />

            <div>
              <span className="font-bold text-[16px] sm:text-[17px] md:text-[18px]">
                Technologies
              </span>
              <ul className="flex flex-wrap gap-2 mt-3 ">
                {project.lang.map((tech) => (
                  <li key={tech}>
                    <span className="py-1.5 px-2 bg-[#E1F9DC] text-[#178D00] text-sm !rounded-full">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="py-2 flex justify-between gap-3 mt-8">
            <Link target="_blank" href={project.link}>
              <Button className="!py-6 mt-3 hover:!bg-black/82 !bg-black/90 text-white !cursor-pointer">
                View Project <ExternalLink />
              </Button>
            </Link>

            <Link target="_blank" href={project.git}>
              <Button className="!py-6 hover:!bg-black/82 mt-3 !bg-black/90 text-white !cursor-pointer">
                Github <FiGithub />
              </Button>
            </Link>
          </div>

          <div className="mt-12">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setLightboxSrc(`/img/${project.img}`)}
              onKeyDown={(e) =>
                e.key === "Enter" && setLightboxSrc(`/img/${project.img}`)
              }
              className="bg-gray-50/85 border px-2 sm:px-4 md:px-7 py-2 sm:py-4 md:py-7 rounded-2xl cursor-pointer"
              aria-label="View image larger"
            >
              <Image
                src={`/img/${project.img}`}
                alt={`Screenshot of ${project.name} project`}
                width={900}
                height={900}
                className="rounded-2xl w-full h-auto shadow-md"
              />
            </div>

            {(project.img2 ?? project.img3) && (
              <div className="flex justify-center items-center gap-4 mt-10">
                {project.img2 && (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      setLightboxSrc(`/img/${project.img2}`)
                    }
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      setLightboxSrc(`/img/${project.img2}`)
                    }
                    className="bg-gray-50/85 border px-2 sm:px-3 md:px-5 py-2 sm:py-3 md:py-5 rounded-2xl cursor-pointer"
                    aria-label="View image larger"
                  >
                    <Image
                      src={`/img/${project.img2}`}
                      alt={`Screenshot of ${project.name} project`}
                      width={400}
                      height={400}
                      className="rounded-2xl w-full h-auto shadow-md"
                    />
                  </div>
                )}
                {project.img3 && (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      setLightboxSrc(`/img/${project.img3}`)
                    }
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      setLightboxSrc(`/img/${project.img3}`)
                    }
                    className="bg-gray-50/85 border px-2 sm:px-3 md:px-5 py-2 sm:py-3 md:py-5 rounded-2xl cursor-pointer"
                    aria-label="View image larger"
                  >
                    <Image
                      src={`/img/${project.img3}`}
                      alt={`Screenshot of ${project.name} project`}
                      width={400}
                      height={400}
                      className="rounded-2xl w-full h-auto shadow-md"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <AnimatePresence>
            {lightboxSrc ? (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
                onClick={closeLightbox}
                role="dialog"
                aria-modal="true"
                aria-label="Image preview"
              >
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Close"
                >
                  <X className="size-5" />
                </button>
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative max-h-[90vh] max-w-[90vw]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={lightboxSrc}
                    alt={`Screenshot of ${project.name} project`}
                    width={1200}
                    height={1200}
                    className="rounded-xl max-h-[90vh] w-auto h-auto object-contain shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
