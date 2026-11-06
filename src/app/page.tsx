import About from "@/components/about/About";
import Alternance from "@/components/alternance/Alternance";
import HowIBuildProducts from "@/components/process/HowIBuildProducts";
import Expertise from "@/components/expertise/Expertise";
import Experience from "@/components/experience/Experience";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Hero from "@/components/hero/Hero";
import Statement from "@/components/Statement";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, defaultDescription } from "@/lib/metadata";
import { personSchema } from "@/lib/structuredData";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: defaultDescription,
  path: "/",
  ogImage: "/profile.jpg",
  keywords: [
    siteConfig.title,
    "Product Designer",
    "Product Owner alternance",
    "Chef de projet IA",
    "MIAGE",
    "UX/UI Designer",
    "Figma",
    "React",
    "AI workflows",
  ],
});

const Home = () => {
  return (
    <main className="w-full overflow-x-clip">
      <JsonLd data={personSchema()} />
      <Hero />
      <Statement />
      <FeaturedProjects />
      <Alternance />
      <About />
      <Experience />
      <Expertise />
      <HowIBuildProducts />
    </main>
  );
};

export default Home;
