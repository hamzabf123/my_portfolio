import { Brain, Code2, Layout, Target, type LucideIcon } from "lucide-react";
import type { LocalizedText } from "@/lib/i18n";

export interface ExpertiseCategory {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  technologies: string[];
  icon: LucideIcon;
}

export const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "product",
    title: { fr: "Produit & gestion de projet", en: "Product & project management" },
    description: {
      fr: "Cadrer un besoin, analyser le marché, prioriser et suivre la livraison par sprints avec l’équipe.",
      en: "Framing a need, analysing the market, prioritising and following delivery in sprints with the team.",
    },
    technologies: ["PRD", "Personas", "Benchmark", "KPI", "Sprints", "Roadmap"],
    icon: Target,
  },
  {
    id: "ux-ui",
    title: { fr: "UX/UI Design", en: "UX/UI Design" },
    description: {
      fr: "Des interfaces structurées et accessibles, de la recherche au prototype, avec un design system comme source de vérité.",
      en: "Structured, accessible interfaces, from research to prototype, with a design system as the source of truth.",
    },
    technologies: ["Figma", "Wireframes", "Prototypage", "Design systems", "Illustrator", "Photoshop"],
    icon: Layout,
  },
  {
    id: "web-data",
    title: { fr: "Web & données", en: "Web & data" },
    description: {
      fr: "Des maquettes livrées en interfaces réelles, et une base solide en modélisation et bases de données.",
      en: "Mockups shipped as real interfaces, backed by a solid foundation in data modelling and databases.",
    },
    technologies: ["SQL", "Modélisation de données", "Supabase", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: Code2,
  },
  {
    id: "ai",
    title: { fr: "IA appliquée", en: "Applied AI" },
    description: {
      fr: "Des outils IA intégrés aux produits et aux workflows pour aller plus vite, en gardant la décision humaine.",
      en: "AI tools built into products and workflows to move faster while keeping humans in charge of decisions.",
    },
    technologies: ["Claude Code", "Codex", "Gemini API", "Prompting", "Remotion", "Automatisation"],
    icon: Brain,
  },
];
