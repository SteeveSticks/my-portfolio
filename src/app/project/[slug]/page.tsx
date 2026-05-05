import { projects } from "../../../../_data/data";
import { notFound } from "next/navigation";
import { ProjectPageContent } from "@/components/ProjectPageContent";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const baseUrl = "https://myportfoliome.vercel.app";
  const projectImage = `${baseUrl}/img/${project.img || "profile-pic.jpg"}`;

  return {
    title: `${project.name} | Adebanjo Stephen`,
    description: project.desc,
    openGraph: {
      title: `${project.name} | Adebanjo Stephen`,
      description: project.desc,
      type: "article",
      url: `${baseUrl}/project/${project.slug}`,
      images: [
        {
          url: projectImage,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Adebanjo Stephen`,
      description: project.desc,
      images: [projectImage],
    },
  };
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
    <ProjectPageContent
      project={{
        ...project,
        img2: project.img2,
        img3: project.img3,
      }}
    />
  );
};

export default ProjectPage;
