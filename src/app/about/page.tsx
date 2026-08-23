import { redirect } from "next/navigation";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Profil | ${siteConfig.name}`,
  description: "Profil, expertise et parcours de Hamza Boufass.",
  path: "/about",
  ogImage: "/profile.jpg",
});

export default function AboutPage() {
  redirect("/#about");
}
