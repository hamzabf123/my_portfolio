import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Projets | ${siteConfig.name}`,
  description: "Une sélection de projets de design, de produit et d’outils créés par Hamza Boufass.",
  path: "/projects",
  ogImage: "/profile.jpg",
  keywords: ["UX/UI Design", "Graphic Design", "Figma Plugin", "BILL APP"],
});

export default function ProjectsPage() {
  return (
    <main className="overflow-x-clip">
      <ProjectsHero />
      <ProjectShowcase />
    </main>
  );
}
