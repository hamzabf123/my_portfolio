import { Brain, Code2, Layout, Palette, type LucideIcon } from "lucide-react";
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
    id: "ux-ui",
    title: { fr: "UX/UI Design", en: "UX/UI Design" },
    description: {
      fr: "Des interfaces structurées, accessibles et agréables à utiliser, de la recherche au prototype interactif.",
      en: "Structured, accessible and enjoyable interfaces, from research to interactive prototype.",
    },
    technologies: ["Figma", "Wireframes", "Prototypage", "Design systems"],
    icon: Layout,
  },
  {
    id: "graphic-design",
    title: { fr: "Design graphique", en: "Graphic Design" },
    description: {
      fr: "Des compositions, identités et supports de communication qui traduisent une intention de marque avec impact.",
      en: "Compositions, identities and communication materials that translate a brand intention with impact.",
    },
    technologies: ["Illustrator", "Photoshop", "Canva", "Branding"],
    icon: Palette,
  },
  {
    id: "web-integration",
    title: { fr: "Intégration web", en: "Web Integration" },
    description: {
      fr: "Des maquettes fidèlement mises en mouvement sur le web avec une attention particulière aux détails et à la fluidité.",
      en: "Interfaces faithfully brought to life on the web with close attention to detail and fluidity.",
    },
    technologies: ["HTML/CSS", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    icon: Code2,
  },
  {
    id: "ai",
    title: { fr: "Création augmentée par l’IA", en: "AI-augmented creation" },
    description: {
      fr: "Des outils IA choisis pour accélérer la recherche, l’itération et l’automatisation tout en gardant le regard du designer.",
      en: "AI tools selected to accelerate research, iteration and automation while keeping the designer’s eye in control.",
    },
    technologies: ["Codex", "Claude Code", "Prompting", "Automatisation"],
    icon: Brain,
  },
];
