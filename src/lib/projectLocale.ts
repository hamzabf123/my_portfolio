import type { Locale } from "@/lib/i18n";
import { projectEnglishTranslations } from "@/data/projectTranslations";
import type { Project } from "@/data/projects";

export function getProjectCopy(project: Project, locale: Locale): Project {
  if (locale === "fr") return project;

  const translation = projectEnglishTranslations[project.slug];
  if (!translation) return project;

  return {
    ...project,
    name: translation.name,
    tagline: translation.tagline,
    summary: translation.summary,
    role: translation.role,
    year: translation.year,
    stack: translation.stack,
    highlights: translation.highlights,
    metrics: project.metrics?.map((metric, index) => ({
      ...metric,
      label: translation.metrics?.[index]?.label ?? metric.label,
    })),
    caseStudy: Object.fromEntries(
      Object.entries(project.caseStudy ?? {}).map(([key, section]) => [
        key,
        translation.caseStudy[key] ?? section,
      ])
    ),
    images: {
      ...project.images,
      gallery: project.images.gallery?.map((image, index) => ({
        ...image,
        alt: translation.gallery[index]?.alt ?? image.alt,
        caption: translation.gallery[index]?.caption ?? image.caption,
      })),
    },
    imageAlt: translation.imageAlt,
  };
}

export function getProjectLabels(locale: Locale) {
  return locale === "fr"
    ? {
        category: { AI: "IA", Design: "Design", Plugin: "Plugin", Web: "Web" },
        platform: { Web: "Web", "Figma Plugin": "Plugin Figma", "Physical Space": "Espace physique" },
        status: { Production: "En production", Completed: "Terminé", "In validation": "En validation" },
        role: "Rôle",
        platforms: "Plateformes",
        year: "Année",
        client: "Client",
        stack: "Technologies",
      }
    : {
        category: { AI: "AI", Design: "Design", Plugin: "Plugin", Web: "Web" },
        platform: { Web: "Web", "Figma Plugin": "Figma plugin", "Physical Space": "Physical space" },
        status: { Production: "In production", Completed: "Completed", "In validation": "In validation" },
        role: "Role",
        platforms: "Platforms",
        year: "Year",
        client: "Client",
        stack: "Stack",
      };
}
