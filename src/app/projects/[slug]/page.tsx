import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/metadata";
import { getProject, getProjectNeighbours, projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return createPageMetadata({
      title: "Project not found | Hamza Boufass",
      description: "That project does not exist.",
      path: `/projects/${slug}`,
      ogImage: "/profile.jpg",
    });
  }

  return createPageMetadata({
    title: `${project.name} — Case Study | ${siteConfig.name}`,
    description: project.summary,
    path: `/projects/${project.slug}`,
    ogImage: project.images.ogImage,
    ogType: "article",
    keywords: [project.name, project.category, "Case Study", ...project.stack],
  });
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getProjectNeighbours(project.slug);
  return <ProjectCaseStudy project={project} prev={prev} next={next} />;
}
