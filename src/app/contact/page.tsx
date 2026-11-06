import ContactPage from "@/components/contact/ContactPage";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/structuredData";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Contact | ${siteConfig.name}`,
  description:
    "Contact Hamza Boufass for UX/UI design, graphic design and modern web integration.",
  path: "/contact",
  ogImage: "/profile.jpg",
  keywords: [
    "Contact Hamza Boufass",
    "Product Designer Contact",
    "Graphic Designer Contact",
    "Alternance Lyon 2027",
  ],
});

export default function Contact() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <ContactPage />
    </>
  );
}
