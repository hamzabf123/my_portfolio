import { Brain, Database, Layout, Target, type LucideIcon } from "lucide-react";
import type { LocalizedText } from "@/lib/i18n";

export interface AboutCard {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: LucideIcon;
}

export const aboutCards: AboutCard[] = [
  {
    id: "product",
    title: { fr: "Cadrage produit", en: "Product framing" },
    description: {
      fr: "Problème, personas, benchmark, KPI et périmètre : je clarifie ce qu’il faut construire avant de le dessiner.",
      en: "Problem, personas, benchmark, KPIs and scope: I clarify what to build before designing it.",
    },
    icon: Target,
  },
  {
    id: "ux-ui",
    title: { fr: "UX/UI Design", en: "UX/UI Design" },
    description: {
      fr: "Wireframes, maquettes, prototypes et design systems dans Figma, pensés pour la vraie utilisation.",
      en: "Wireframes, mockups, prototypes and design systems in Figma, designed for real use.",
    },
    icon: Layout,
  },
  {
    id: "data-web",
    title: { fr: "Web & bases de données", en: "Web & databases" },
    description: {
      fr: "Une licence en informatique spécialité bases de données, et une pratique de React, TypeScript, SQL et Supabase.",
      en: "A computer science bachelor’s specialised in databases, and hands-on React, TypeScript, SQL and Supabase.",
    },
    icon: Database,
  },
  {
    id: "ai-workflows",
    title: { fr: "Produits & workflows IA", en: "AI products & workflows" },
    description: {
      fr: "Des plugins avec agent IA, des pipelines de contenus et Claude Code au quotidien, toujours sous contrôle humain.",
      en: "Plugins with an AI agent, content pipelines and Claude Code every day, always with human review.",
    },
    icon: Brain,
  },
];
