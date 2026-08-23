import type { LocalizedText } from "@/lib/i18n";

export const aboutIntro: LocalizedText[] = [
  {
    fr: "Je conçois des interfaces, des identités visuelles et des expériences web qui rendent les idées plus claires et plus faciles à utiliser.",
    en: "I design interfaces, visual identities and web experiences that make ideas clearer and easier to use.",
  },
  {
    fr: "Mon travail relie UX/UI design, direction visuelle et intégration web. Je passe du wireframe au prototype, puis au produit final avec la même attention portée au détail.",
    en: "My work connects UX/UI design, visual direction and web integration. I move from wireframe to prototype and then to the final product with the same attention to detail.",
  },
  {
    fr: "Chez BILL APP, je travaille sur des interfaces, des supports de présentation, des projets web et des outils qui accélèrent les workflows créatifs grâce à l'automatisation et à l'IA.",
    en: "At BILL APP, I work on interfaces, presentation materials, web projects and tools that accelerate creative workflows through automation and AI.",
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
  asOf: { fr: "Août 2026", en: "August 2026" },
  items: [
    {
      fr: "Approfondir les workflows IA et les outils qui rendent la production design plus rapide sans perdre le contrôle créatif.",
      en: "Deepening AI workflows and tools that make design production faster without losing creative control.",
    },
    {
      fr: "Renforcer mes pratiques d'intégration Next.js, React et TypeScript pour transformer des systèmes visuels en interfaces solides.",
      en: "Strengthening my Next.js, React and TypeScript integration practice to turn visual systems into robust interfaces.",
    },
    {
      fr: "Mesurer davantage la performance, l'accessibilité et la qualité perçue sur de vrais appareils.",
      en: "Measuring performance, accessibility and perceived quality more deliberately on real devices.",
    },
  ] as LocalizedText[],
};

export const beyondCode: LocalizedText = {
  fr: "Je travaille depuis Casablanca avec une curiosité constante pour les outils, les images et les nouvelles façons de construire. J'aime comprendre comment une idée devient un objet visuel, une interface puis une expérience réellement utilisée.",
  en: "I work from Casablanca with a constant curiosity for tools, images and new ways of building. I enjoy understanding how an idea becomes a visual object, then an interface and finally an experience people actually use.",
};
