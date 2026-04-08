import { projects } from "../../../../_data/data";
import { notFound } from "next/navigation";
import { ProjectPageContent } from "@/components/ProjectPageContent";

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
