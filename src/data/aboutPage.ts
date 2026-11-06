import type { LocalizedText } from "@/lib/i18n";

export const aboutIntro: LocalizedText[] = [
  {
    fr: "Je suis Hamza, basé à Casablanca. J’ai une licence en informatique spécialité bases de données, et je travaille depuis 2025 dans le design produit chez BILL APP, une entreprise qui digitalise la restauration.",
    en: "I’m Hamza, based in Casablanca. I hold a bachelor’s in computer science specialised in databases, and since 2025 I have worked in product design at BILL APP, a company digitalising the restaurant industry.",
  },
  {
    fr: "Mon rôle a grandi vite : maquettes et présentations au départ, puis des plugins Figma utilisés en production, un agent IA, et le lancement complet de la marque RU$H. Je suis passé du « comment le dessiner » au « quoi construire, pour qui, et pourquoi ».",
    en: "My role grew quickly: mockups and presentations at first, then Figma plugins used in production, an AI agent, and the full launch of the RU$H brand. I moved from “how do we draw it” to “what should we build, for whom, and why”.",
  },
  {
    fr: "C’est ce métier que je veux consolider : Product Owner, chef de projet digital ou IA. Je cherche pour cela un master en alternance qui allie informatique, gestion de projet et IA.",
    en: "This is the role I want to grow into: Product Owner, digital or AI project manager. I am looking for a work-study master’s combining computer science, project management and AI.",
  },
];

export interface WorkPrinciple {
  title: LocalizedText;
  description: LocalizedText;
}

export const howIWork: WorkPrinciple[] = [
  {
    title: { fr: "Je commence par le vrai problème", en: "I start with the real problem" },
    description: {
      fr: "Avant de choisir une direction visuelle, je clarifie le besoin, le public et la contrainte qui peut réellement faire réussir ou échouer le projet.",
      en: "Before choosing a visual direction, I clarify the need, the audience and the constraint that can genuinely make the project succeed or fail.",
    },
  },
  {
    title: { fr: "Je rends les idées visibles rapidement", en: "I make ideas visible quickly" },
    description: {
      fr: "Les wireframes et les prototypes permettent de tester une intention tôt, d'aligner les équipes et d'éviter de polir une mauvaise solution.",
      en: "Wireframes and prototypes make it possible to test an idea early, align teams and avoid polishing the wrong solution.",
    },
  },
  {
    title: { fr: "Je garde une source de vérité", en: "I keep one source of truth" },
    description: {
      fr: "Un langage visuel cohérent, des composants réutilisables et des contenus structurés rendent le produit plus simple à faire évoluer.",
      en: "A coherent visual language, reusable components and structured content make a product easier to evolve.",
    },
  },
  {
    title: { fr: "Je conçois pour la vraie utilisation", en: "I design for real use" },
    description: {
      fr: "Je prends en compte le contexte, le rythme, les appareils et les contraintes de production pour que l'expérience reste utile au-delà de la maquette.",
      en: "I account for context, pace, devices and production constraints so the experience stays useful beyond the mockup.",
    },
  },
  {
    title: { fr: "J'utilise les bons outils au bon moment", en: "I use the right tools at the right time" },
    description: {
      fr: "Figma, le code, l'automatisation et l'IA ont chacun leur rôle. Je les combine quand ils améliorent réellement la qualité ou la vitesse du travail.",
      en: "Figma, code, automation and AI each have their place. I combine them when they genuinely improve quality or speed.",
    },
  },
  {
    title: { fr: "Je reste précis sur ce qui est livré", en: "I stay precise about what ships" },
    description: {
      fr: "Je distingue clairement une idée, un prototype, une fonctionnalité validée et un élément prêt pour la production.",
      en: "I clearly distinguish an idea, a prototype, a validated feature and something ready for production.",
    },
  },
];

export const currentlyLearning = {
  asOf: { fr: "Novembre 2026", en: "November 2026" },
  items: [
    {
      fr: "Gestion de produit : écrire des PRD, des user stories et des KPI qui guident vraiment une équipe.",
      en: "Product management: writing PRDs, user stories and KPIs that genuinely guide a team.",
    },
    {
      fr: "Agilité et pilotage de projet : sprints, priorisation, suivi des livrables.",
      en: "Agile and project delivery: sprints, prioritisation and tracking deliverables.",
    },
    {
      fr: "IA appliquée au produit : agents, automatisations et vidéo programmée (Remotion), avec une vraie relecture humaine.",
      en: "AI applied to products: agents, automation and programmatic video (Remotion), with real human review.",
    },
  ] as LocalizedText[],
};

export const beyondCode: LocalizedText = {
  fr: "Je travaille depuis Casablanca avec une curiosité constante pour les outils, les images et les nouvelles façons de construire. J'aime comprendre comment une idée devient un objet visuel, une interface puis une expérience réellement utilisée.",
  en: "I work from Casablanca with a constant curiosity for tools, images and new ways of building. I enjoy understanding how an idea becomes a visual object, then an interface and finally an experience people actually use.",
};
