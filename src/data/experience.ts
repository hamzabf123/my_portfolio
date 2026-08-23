import { Brain, Code2, Layout, Presentation, type LucideIcon } from "lucide-react";
import type { LocalizedText } from "@/lib/i18n";

export interface Contribution {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: LucideIcon;
}

export const primaryExperience = {
  title: "Digital Designer",
  company: "BILL APP",
  companyUrl: "",
  location: { fr: "Casablanca, Maroc", en: "Casablanca, Morocco" },
  logo: "/media/projects/bill-app-logo.webp",
  logoAlt: "Logo BILL APP",
  periods: [
    {
      employmentType: { fr: "CDI", en: "Permanent role" },
      duration: { fr: "Depuis avril 2026", en: "Since April 2026" },
    },
    {
      employmentType: { fr: "Stage", en: "Internship" },
      duration: {
        fr: "Octobre 2025 \u2014 avril 2026",
        en: "October 2025 \u2014 April 2026",
      },
    },
  ],
  employmentType: { fr: "CDI", en: "Permanent role" },
  duration: {
    fr: "Depuis 3 mois · après un stage de 6 mois d’octobre à avril",
    en: "3 months to date · after a 6-month internship from October to April",
  },
  description: {
    fr: "Je participe à la digitalisation 360 du secteur de la restauration : interfaces web, supports de présentation, refonte de site, automatisations créatives et exploration d’outils IA pour fluidifier les workflows.",
    en: "I contribute to the 360° digitalisation of the restaurant sector through web interfaces, presentation materials, website redesigns, creative automation and AI-tool exploration to streamline workflows.",
  },
  technologies: [
    "Figma",
    "Illustrator",
    "Photoshop",
    "Canva",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
  ],
  impact: [
    { fr: "Maquettes et wireframes", en: "Wireframes and interfaces" },
    { fr: "Supports de présentation", en: "Presentation materials" },
    { fr: "Refonte web moderne", en: "Modern web redesign" },
    { fr: "Automatisation créative", en: "Creative automation" },
  ],
};

export const additionalExperiences = [
  {
    title: "UI Designer & Infographiste",
    company: "Olfactive",
    location: { fr: "Casablanca, Maroc", en: "Casablanca, Morocco" },
    logo: "/media/projects/olfactive-logo.webp",
    logoAlt: "Logo Olfactive",
    employmentType: { fr: "Stage", en: "Internship" },
    duration: { fr: "Juillet 2025 — octobre 2025", en: "July 2025 — October 2025" },
    description: {
      fr: "Ma premi\u00e8re exp\u00e9rience structurante en UI design et infographie : j'y ai d\u00e9couvert Figma et compris qu'il pouvait devenir le centre de mon travail de designer.",
      en: "My formative first experience in UI and graphic design, where I discovered Figma and saw how it could become central to my design practice.",
    },
    learnings: [
      {
        fr: "Premi\u00e8res interventions sur le site web destin\u00e9 au client Orange.",
        en: "First web contributions for Orange as a client.",
      },
      {
        fr: "Cr\u00e9ation de visuels et pr\u00e9paration de supports imprim\u00e9s avec l'agence Deco Bec.",
        en: "Creating visuals and preparing print assets with the Deco Bec agency.",
      },
      {
        fr: "D\u00e9couverte de Figma, des interfaces et d'un nouveau champ pour mon parcours de designer.",
        en: "Discovering Figma, interface design, and a new direction for my career as a designer.",
      },
    ],
  },
];

export const contributions: Contribution[] = [
  {
    id: "ux-ui",
    title: { fr: "Interfaces centrées utilisateur", en: "User-centred interfaces" },
    description: {
      fr: "Création de wireframes et de maquettes web pour clarifier les parcours et les priorités.",
      en: "Creating wireframes and web interfaces that clarify flows and priorities.",
    },
    icon: Layout,
  },
  {
    id: "presentations",
    title: { fr: "Présentations clients", en: "Client presentations" },
    description: {
      fr: "Conception de pitch decks, slides et supports visuels pour les rendez-vous clients.",
      en: "Designing pitch decks, slides and visual assets for client meetings.",
    },
    icon: Presentation,
  },
  {
    id: "web",
    title: { fr: "Refonte & intégration web", en: "Web redesign & integration" },
    description: {
      fr: "Refonte du site avec React, Tailwind CSS, GSAP et une approche moderne de la motion.",
      en: "Redesigning websites with React, Tailwind CSS, GSAP and a modern approach to motion.",
    },
    icon: Code2,
  },
  {
    id: "ai",
    title: { fr: "Outils IA & automatisation", en: "AI tools & automation" },
    description: {
      fr: "Exploration d’outils et de plugins pour accélérer les processus de création au quotidien.",
      en: "Exploring tools and plugins that speed up everyday creative processes.",
    },
    icon: Brain,
  },
];
