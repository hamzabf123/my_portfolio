import type { LocalizedText } from "@/lib/i18n";

export interface JourneyMilestone {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "visual-foundations",
    title: { fr: "Fondations visuelles", en: "Visual foundations" },
    description: {
      fr: "J'ai commencé par le design graphique et la composition, avec l'envie de rendre chaque message plus lisible et plus marquant.",
      en: "I started with graphic design and composition, wanting to make every message clearer and more memorable.",
    },
  },
  {
    id: "ui-design",
    title: { fr: "Design d'interfaces", en: "Interface design" },
    description: {
      fr: "J'ai approfondi l'UX/UI, les wireframes, les prototypes et les systèmes visuels pour concevoir des expériences cohérentes.",
      en: "I deepened my UX/UI practice through wireframes, prototypes and visual systems for coherent experiences.",
    },
  },
  {
    id: "web-integration",
    title: { fr: "Du design au web", en: "From design to web" },
    description: {
      fr: "L'intégration React, Next.js et TypeScript me permet de prolonger la réflexion visuelle jusqu'à une interface réelle, responsive et performante.",
      en: "React, Next.js and TypeScript integration let me carry visual thinking through to a real, responsive and performant interface.",
    },
  },
  {
    id: "ai-workflows",
    title: { fr: "Workflows augmentés par l'IA", en: "AI-augmented workflows" },
    description: {
      fr: "Aujourd'hui, j'explore des outils et des automatisations IA qui soutiennent le travail du designer au lieu de remplacer son regard.",
      en: "Today I explore AI tools and automations that support a designer's work instead of replacing their judgement.",
    },
  },
];

export const currentFocus: LocalizedText[] = [
  { fr: "UX/UI et systèmes visuels", en: "UX/UI and visual systems" },
  { fr: "Intégration web moderne", en: "Modern web integration" },
  { fr: "Outils créatifs et IA", en: "Creative tools and AI" },
];
