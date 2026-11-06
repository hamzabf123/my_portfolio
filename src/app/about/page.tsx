import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import AboutIntro from "@/components/about/AboutIntro";
import Journey from "@/components/journey/Journey";
import Alternance from "@/components/alternance/Alternance";

export const metadata = createPageMetadata({
  title: `Profil | ${siteConfig.name}`,
  description: "Profil, projet d’alternance et parcours de Hamza Boufass.",
  path: "/about",
  ogImage: "/profile.jpg",
});

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-clip">
      <AboutIntro />
      <Alternance />
      <Journey />
    </main>
  );
}
