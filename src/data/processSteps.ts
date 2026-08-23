import { Brain, Compass, Layers, Palette, Rocket, type LucideIcon } from "lucide-react";
import type { LocalizedText } from "@/lib/i18n";

export interface ProcessStep {
  id: string;
  step: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    id: "understand",
    step: "01",
    title: { fr: "Comprendre", en: "Understand" },
    description: {
      fr: "Clarifier le besoin, le public et le contexte avant de choisir une direction.",
      en: "Clarify the need, audience and context before choosing a direction.",
    },
    icon: Compass,
  },
  {
    id: "shape",
    step: "02",
    title: { fr: "Donner une direction", en: "Set the direction" },
    description: {
      fr: "Poser une structure, une hiérarchie et un langage visuel qui servent le message.",
      en: "Set a structure, hierarchy and visual language that serve the message.",
    },
    icon: Layers,
  },
  {
    id: "design",
    step: "03",
    title: { fr: "Concevoir", en: "Design" },
    description: {
      fr: "Composer, prototyper et affiner les détails jusqu’à rendre l’expérience évidente.",
      en: "Compose, prototype and refine details until the experience feels obvious.",
    },
    icon: Palette,
  },
  {
    id: "accelerate",
    step: "04",
    title: { fr: "Accélérer intelligemment", en: "Accelerate with intent" },
    description: {
      fr: "Utiliser les bons outils, y compris l’IA, pour itérer vite sans compromettre la qualité.",
      en: "Use the right tools, including AI, to iterate quickly without compromising quality.",
    },
    icon: Brain,
  },
  {
    id: "deliver",
    step: "05",
    title: { fr: "Livrer", en: "Deliver" },
    description: {
      fr: "Préparer des livrables propres, cohérents et directement exploitables par l’équipe.",
      en: "Prepare clean, consistent deliverables that the team can use immediately.",
    },
    icon: Rocket,
  },
];
