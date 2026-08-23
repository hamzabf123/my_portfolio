import { createPageMetadata } from "@/lib/metadata";
import NotFoundContent from "@/components/NotFoundContent";

export const metadata = createPageMetadata({
  title: "Page not found | Hamza Boufass",
  description: "The page you are looking for does not exist.",
  path: "/404",
  ogImage: "/profile.jpg",
});

export default function NotFound() {
  return <NotFoundContent />;
}
