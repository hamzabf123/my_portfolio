import { Brain, Layout, Palette, Puzzle, type LucideIcon } from "lucide-react";
import type { LocalizedText } from "@/lib/i18n";

export interface AboutCard {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: LucideIcon;
}

export const aboutCards: AboutCard[] = [
  {
    id: "ux-ui",
    title: { fr: "UX/UI Design", en: "UX/UI Design" },
    description: {
      fr: "Wireframes, maquettes et prototypes interactifs pensés pour être intuitifs dès la première utilisation.",
      en: "Wireframes, interfaces and interactive prototypes designed to feel intuitive from the first use.",
    },
    icon: Layout,
  },
  {
    id: "visual-design",
    title: { fr: "Design graphique", en: "Graphic Design" },
    description: {
      fr: "Identités visuelles, supports de communication et compositions qui donnent une voix cohérente à une marque.",
      en: "Visual identities, communication materials and compositions that give a brand a consistent voice.",
    },
    icon: Palette,
  },
  {
    id: "web-integration",
    title: { fr: "Intégration web", en: "Web Integration" },
    description: {
      fr: "Des interfaces traduites en expériences web modernes avec HTML/CSS, React, TypeScript et Tailwind CSS.",
      en: "Interfaces translated into modern web experiences with HTML/CSS, React, TypeScript and Tailwind CSS.",
    },
    icon: Puzzle,
  },
  {
    id: "ai-workflows",
    title: { fr: "Workflows IA", en: "AI Workflows" },
    description: {
      fr: "Une veille active et des outils IA intégrés avec intention pour accélérer la création sans perdre l’exigence du design.",
      en: "Active research and intentional AI workflows that speed up creation without compromising design standards.",
    },
    icon: Brain,
  },
];
