import type { LocalizedText } from "@/lib/i18n";

export interface JourneyMilestone {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "computer-science",
    title: { fr: "Licence en informatique", en: "Computer science degree" },
    description: {
      fr: "Faculté des Sciences Ben M’Sik (2022–2025), spécialité bases de données : modélisation, SQL, programmation et méthodes de projet.",
      en: "Faculty of Sciences Ben M’Sik (2022–2025), databases track: data modelling, SQL, programming and project methods.",
    },
  },
  {
    id: "ui-design",
    title: { fr: "Design d’interfaces", en: "Interface design" },
    description: {
      fr: "Chez Olfactive puis BILL APP, j’ai appris l’UX/UI, les wireframes, les prototypes et les design systems sur de vrais clients.",
      en: "At Olfactive and then BILL APP, I learned UX/UI, wireframes, prototypes and design systems on real clients.",
    },
  },
  {
    id: "product-tools",
    title: { fr: "Des outils pour l’équipe", en: "Tools for the team" },
    description: {
      fr: "J’ai repéré des problèmes du quotidien et livré des plugins Figma, dont un agent IA, utilisés en production.",
      en: "I spotted everyday problems and shipped Figma plugins, including an AI agent, used in production.",
    },
  },
  {
    id: "product-launch",
    title: { fr: "Lancer un produit", en: "Launching a product" },
    description: {
      fr: "Avec RU$H, j’ai porté le lancement d’une marque : cadrage, offre, design system, site et contenus.",
      en: "With RU$H, I led a brand launch: framing, offer, design system, website and content.",
    },
  },
  {
    id: "next-step",
    title: { fr: "Prochaine étape : un master en alternance", en: "Next: a work-study master’s" },
    description: {
      fr: "À partir de septembre 2027, à Lyon : consolider la gestion de projet, les systèmes d’information et l’IA pour devenir Product Owner.",
      en: "From September 2027 in Lyon: strengthening project management, information systems and AI to become a Product Owner.",
    },
  },
];

export const currentFocus: LocalizedText[] = [
  { fr: "Produit et gestion de projet", en: "Product and project management" },
  { fr: "UX/UI et design systems", en: "UX/UI and design systems" },
  { fr: "Données, web et IA", en: "Data, web and AI" },
];
