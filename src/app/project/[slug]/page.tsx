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

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="py-3 px-10">
      <div className="min-h-screen mt-30 text-wrap">
        <div className="">
          <h2 className="font-semibold text-[45px]">{project.name}</h2>
          <p className="flex-grow text-gray-600 text-[19px] mt-0">
            {project.show}
          </p>
        </div>

        <div className="mt-8 rounded-xl border p-8 bg-[#FAFAFA]">
          <span className="font-bold text-[18px]">
            Description{" "}
            <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
              <FaExclamation />
              {project?.work}
            </Button>
          </span>
          <p className="text-base text-wrap prose font-light text-gray-700 mt-2 flex-grow">
            {project.desc}
          </p>

          <hr className="mt-8 mb-8" />

          <div>
            <span className="font-bold text-[18px]">Technologies</span>
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

        <div className="py-2 flex gap-2 mt-8">
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
            alt={project.name}
            width={900}
            height={900}
            className="rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
