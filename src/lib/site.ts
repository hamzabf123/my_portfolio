/** Central identity and contact data for Hamza's portfolio. */
export const siteConfig = {
  name: "Hamza Boufass",
  title: "UX/UI Designer & Digital Designer",
  tagline: "Des expériences digitales claires, créatives et utiles.",
  location: { fr: "Sidi Bernoussi, Casablanca, Maroc", en: "Sidi Bernoussi, Casablanca, Morocco" },
  email: "hamzaboufass17@gmail.com",
  github: "",
  linkedIn: "",
  instagram: "",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  resumePath: "/Hamza_Boufass_CV_2026.pdf",
  /** The contact form falls back to email while no Formspree ID is configured. */
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
