import React from "react";
import { projects } from "../../../../_data/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import { FaExclamation } from "react-icons/fa6";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="py-3 px-4 sm:px-6 md:px-10">
      <div className="mt-30 text-wrap">
        <div>
          <h2 className="font-semibold text-[32px] sm:text-[38px] md:text-[45px]">
            {project.name}
          </h2>
          <p className="flex-grow text-gray-600 text-[16px] sm:text-[18px] md:text-[19px] mt-0">
            {project.show}
          </p>
        </div>

        <div className="mt-8 rounded-xl border p-4 sm:p-6 md:p-8 bg-[#FAFAFA]">
          <span className="font-bold text-[16px] sm:text-[17px] md:text-[18px]">
            Description
            <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
              <FaExclamation />
            </Button>
          </span>
          <p className="text-base text-wrap prose font-light text-gray-700 mt-2 flex-grow">
            {project.desc}
          </p>

          <h3 className="mt-3 text-red-400 text-base text-wrap prose font-light flex-grow">
            Problem i noticed: {project.problem}
          </h3>

          <h2 className="mt-3 text-base text-wrap prose font-light flex-grow">
            <span className="text-[#178D00] text-[16px]">
              Solution I rendered ✅:
            </span>{" "}
            <span className="text-gray-700 ">{project.solution}</span>
          </h2>

          <hr className="mt-8 mb-8" />

          <div>
            <span className="font-bold text-[16px] sm:text-[17px] md:text-[18px]">
              Technologies
            </span>
            <ul className="flex flex-wrap gap-2 mt-3">
              {project.lang.map((tech) => (
                <li key={tech}>
                  <Button className="bg-[#E1F9DC] text-[#178D00] ">
                    {tech}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-2 flex gap-3 mt-8">
          <Link target="_blank" href={project.link}>
            <Button className="!py-6  mt-3 !bg-black/90 text-white !cursor-pointer">
              View Project <ExternalLink />
            </Button>
          </Link>

          <Link target="_blank" href={project.git}>
            <Button className="!py-6  mt-3 !bg-black/90 text-white !cursor-pointer">
              Github <FiGithub />
            </Button>
          </Link>
        </div>

        <div className="mt-18">
          <Image
            src={`/img/${project.img}`}
            alt={`Screenshot of ${project.name} project`}
            width={900}
            height={900}
            className="rounded-sm w-full h-auto"
          />
          {project.video && (
            <video
              controls
              className="rounded-sm w-full h-auto mt-6"
              width={900}
              height={900}
            >
              <source src={`/video/${project.video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
