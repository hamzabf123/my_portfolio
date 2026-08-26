/** Single source of truth for the projects shown on the portfolio. */

export type Platform = "Web" | "Figma Plugin" | "Physical Space";
export type Category = "AI" | "Design" | "Plugin" | "Web";
export type Status = "Production" | "Completed" | "In validation";

export interface CaseStudySection {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface ProjectMetric {
  value: string;
  label: string;
  source?: string;
}

export interface CaseStudy {
  context?: CaseStudySection;
  problem?: CaseStudySection;
  contribution?: CaseStudySection;
  challenges?: CaseStudySection;
  outcome?: CaseStudySection;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  category: Category;
  featured: boolean;
  order: number;
  role?: string;
  platforms: Platform[];
  year: string;
  status: Status;
  client?: string;
  stack: string[];
  highlights: string[];
  links: {
    live?: string;
    appStore?: string;
    playStore?: string;
    source?: string;
  };
  metrics?: ProjectMetric[];
  caseStudy?: CaseStudy;
  images: {
    card: string;
    hero: string;
    gallery?: { src: string; alt: string; caption: string }[];
    ogImage: string;
  };
  imageAlt: string;
}


const allProjects: Project[] = [
  {
    slug: "morocco-franchise-exhibition",
    name: "Morocco Franchise Exhibition",
    tagline: "Identité visuelle et déploiement graphique du stand BILL APP",
    summary:
      "Un espace d’exposition conçu avec le designer du stand pour rendre l’univers et les solutions BILL lisibles à grande échelle.",
    category: "Design",
    featured: true,
    order: 1,
    role: "Graphic Designer",
    platforms: ["Physical Space"],
    year: "2026",
    status: "Completed",
    client: "BILL APP",
    stack: ["Illustrator", "Photoshop", "Figma", "Signalétique", "Print"],
    highlights: [
      "Système graphique du stand",
      "Supports visuels grand format",
      "Déclinaison de l’univers BILL",
      "Collaboration avec le designer du stand",
    ],
    links: {},
    caseStudy: {
      context: {
        heading: "Contexte",
        body: [
          "BILL APP participait à la Morocco Franchise Exhibition avec un stand destiné à présenter son univers et ses solutions de digitalisation pour la restauration.",
        ],
      },
      problem: {
        heading: "L’enjeu",
        body: [
          "Dans un salon très dense, le stand devait attirer, expliquer rapidement l’offre BILL et rester cohérent sur chaque support, de loin comme de près.",
        ],
      },
      contribution: {
        heading: "Ma contribution",
        body: [
          "J’ai travaillé le design graphique de l’espace avec le designer du stand : composition des visuels, hiérarchie des messages, déclinaison de l’identité BILL et préparation des supports à grande échelle.",
        ],
        bullets: [
          "Création et adaptation des visuels du stand",
          "Mise en page des messages et des modules produits",
          "Cohérence entre l’identité de marque et l’espace physique",
        ],
      },
      outcome: {
        heading: "Résultat",
        body: [
          "Un espace de marque cohérent et immédiatement identifiable, capable de présenter plusieurs solutions BILL tout en conservant une lecture claire pour les visiteurs.",
        ],
      },
    },
    images: {
      card: "/media/projects/mfe-1.webp",
      hero: "/media/projects/mfe-1.webp",
      ogImage: "/media/projects/mfe-1.webp",
      gallery: [
        {
          src: "/media/projects/mfe-2.webp",
          alt: "Hamza Boufass et un collègue devant le stand BILL APP",
          caption: "Le stand BILL APP pendant la Morocco Franchise Exhibition.",
        },
        {
          src: "/media/projects/mfe-3.webp",
          alt: "Écran de commande sur le stand BILL APP",
          caption: "Une démonstration des produits BILL au sein de l’espace d’exposition.",
        },
        {
          src: "/media/projects/mfe-4.webp",
          alt: "Équipe BILL APP sur le stand",
          caption: "L’équipe BILL APP réunie sur le stand.",
        },
      ],
    },
    imageAlt: "Stand BILL APP à la Morocco Franchise Exhibition",
  },
  {
    slug: "export-pdf-slides",
    name: "Export PDF Slides",
    tagline: "Plugin Figma pour exporter des présentations PDF plus légères",
    summary:
      "Un plugin natif qui automatise l’export, la compression et la fusion de slides afin de produire des PDF faciles à envoyer après chaque modification.",
    category: "Plugin",
    featured: true,
    order: 2,
    role: "Product Designer & Plugin Developer",
    platforms: ["Figma Plugin"],
    year: "Octobre 2025",
    status: "Production",
    client: "BILL APP",
    stack: ["Figma Plugin API", "JavaScript", "PDF", "Compression d’images", "UX/UI"],
    highlights: [
      "Problème identifié pendant un stage chez BILL APP",
      "Export et compression automatisés dans Figma",
      "Pensé pour les présentations commerciales révisées souvent",
      "Publié sur Figma Community",
    ],
    links: {},
    metrics: [
      { value: "15", label: "slides dans le cas observé" },
      { value: "360 Mo", label: "PDF initial" },
      { value: "5–10 Mo", label: "objectif d’envoi" },
    ],
    caseStudy: {
      context: {
        heading: "Contexte",
        body: [
          "En octobre 2025, peu après l’arrivée de Figma Slides, j’ai découvert pendant mon stage chez BILL APP un problème urgent pour les présentations commerciales.",
          "Une présentation de 15 slides pouvait générer un PDF d’environ 360 Mo, alors que les managers et les commerciaux avaient besoin d’un fichier léger, entre 5 et 10 Mo, à envoyer facilement sur WhatsApp aux clients.",
        ],
      },
      problem: {
        heading: "Le problème",
        body: [
          "La première piste était une plateforme dans laquelle on colle le lien Figma pour recevoir un PDF optimisé. Cette solution devenait vite problématique : les présentations commerciales sont confidentielles et une plateforme externe aurait nécessité de gérer des liens, des autorisations et des API à chaque export.",
        ],
      },
      contribution: {
        heading: "La solution que j’ai conçue",
        body: [
          "J’ai choisi de créer un plugin Figma directement intégré au flux de travail. Il reprend et automatise la méthode manuelle observée dans l’équipe : exporter les slides sous forme d’images, les compresser, puis les fusionner dans un PDF optimisé.",
        ],
        bullets: [
          "Cadrage du problème et choix d’une solution native à Figma",
          "Conception de l’interface d’export et de réglages de qualité",
          "Automatisation de l’export, de la compression et de la fusion PDF",
          "Publication du plugin sur Figma Community",
        ],
      },
      challenges: {
        heading: "Pourquoi le plugin était nécessaire",
        body: [
          "Sur les très grandes présentations, notamment autour de 70 slides, la méthode manuelle devenait longue et fragile. Au moindre changement demandé par un manager, il fallait tout recommencer. Le plugin rend l’opération répétable, directe et compatible avec les révisions fréquentes.",
        ],
      },
      outcome: {
        heading: "Résultat",
        body: [
          "Le plugin a été utilisé directement dans le flux de travail de BILL APP, puis partagé publiquement. Les retours d’autres utilisateurs Figma ont confirmé l’intérêt de cette solution pour exporter rapidement des présentations plus faciles à envoyer.",
        ],
      },
    },
    images: {
      card: "/media/projects/export-pdf-1.webp",
      hero: "/media/projects/export-pdf-1.webp",
      ogImage: "/media/projects/export-pdf-1.webp",
      gallery: [
        {
          src: "/media/projects/export-pdf-2.webp",
          alt: "Export PDF Slides dans la recherche de plugins Figma",
          caption: "Le plugin visible dans la recherche Figma.",
        },
        {
          src: "/media/projects/export-pdf-3.webp",
          alt: "Fiche Figma Community du plugin Export PDF Slides",
          caption: "La fiche publique du plugin dans Figma Community.",
        },
        {
          src: "/media/projects/export-pdf-4.webp",
          alt: "Interface du plugin Export PDF Slides",
          caption: "L’interface d’export avec le choix de qualité et de compression.",
        },
      ],
    },
    imageAlt: "Plugin Figma Export PDF Slides publié dans Figma Community",
  },
  {
    slug: "bill-design",
    name: "BILL Design",
    tagline: "Agent IA et outils d'automatisation directement dans Figma",
    summary:
      "Un plugin modulaire qui centralise les gabarits, les mockups, les automatisations et un agent IA capable d'intervenir sur une pr\u00e9sentation.",
    category: "AI",
    featured: true,
    order: 3,
    role: "Product Designer & Plugin Developer",
    platforms: ["Figma Plugin"],
    year: "En \u00e9volution",
    status: "Production",
    client: "BILL APP",
    stack: ["Figma Plugin API", "Vite", "JavaScript", "Gemini API", "Supabase"],
    highlights: [
      "Gabarits et mockups inject\u00e9s dans Figma",
      "Sommaire, titres, orthographe et mise en emphase automatis\u00e9s",
      "Chat IA connect\u00e9 au contexte de la pr\u00e9sentation",
      "Modifications appliqu\u00e9es directement dans le fichier Figma",
    ],
    links: {},
    caseStudy: {
      context: {
        heading: "Contexte",
        body: [
          "Chez BILL APP, Figma est le lieu de production des pr\u00e9sentations commerciales. Les actions r\u00e9p\u00e9titives, les retouches et la recherche de ressources ralentissaient le travail au quotidien.",
          "J'ai donc con\u00e7u BILL Design comme un outil de travail int\u00e9gr\u00e9 \u00e0 Figma : non pas un assistant isol\u00e9, mais un environnement qui aide l'\u00e9quipe \u00e0 produire, corriger et faire \u00e9voluer ses slides sans quitter son flux habituel.",
        ],
      },
      problem: {
        heading: "L'enjeu",
        body: [
          "Il fallait regrouper les actions qui reviennent sans cesse dans une pr\u00e9sentation : choisir un gabarit, ajouter un mockup, maintenir les titres et le sommaire, corriger les textes, mettre en valeur les bons mots et rester coh\u00e9rent avec le contexte BILL.",
          "L'IA devait aussi \u00eatre utile dans le fichier lui-m\u00eame. Elle doit comprendre le brief, les ressources de l'entreprise et le contenu des slides avant de proposer ou d'appliquer une modification.",
        ],
      },
      contribution: {
        heading: "Le plugin que j'ai construit",
        body: [
          "J'ai structur\u00e9 le plugin en quatre onglets, chacun pens\u00e9 pour une \u00e9tape concr\u00e8te du travail dans Figma.",
        ],
        bullets: [
          "Gabarits : s\u00e9lection et injection de slides pr\u00eates \u00e0 adapter",
          "Mockups : recherche puis import des visuels n\u00e9cessaires au bon endroit",
          "Outils IA : synchronisation des titres, mise \u00e0 jour du sommaire, orthographe, emphase des mots-cl\u00e9s et remplacement d'ic\u00f4nes",
          "Chat IA : analyse le brief et les slides s\u00e9lectionn\u00e9es, puis applique les actions valid\u00e9es dans la pr\u00e9sentation",
        ],
      },
      challenges: {
        heading: "Un agent adapt\u00e9 au contexte BILL",
        body: [
          "Avant de r\u00e9pondre, le Chat IA s'appuie sur le brief et sur des ressources dynamiques qui d\u00e9finissent les offres, le vocabulaire et les r\u00e8gles de BILL. Les conversations sont sauvegard\u00e9es dans Supabase afin de conserver un historique de travail.",
          "Pour analyser de grandes pr\u00e9sentations, le plugin transmet les captures de slides par lots d'images JPEG num\u00e9rot\u00e9s. La cl\u00e9 Gemini personnelle est enregistr\u00e9e dans le stockage Figma de l'utilisateur ; le mod\u00e8le peut \u00eatre choisi dans les param\u00e8tres selon les limites disponibles.",
        ],
      },
      outcome: {
        heading: "R\u00e9sultat",
        body: [
          "BILL Design est devenu une bo\u00eete \u00e0 outils de production en \u00e9volution continue : elle rassemble les automatisations utiles \u00e0 l'\u00e9quipe et introduit un agent IA capable de raisonner sur une pr\u00e9sentation avant d'agir directement dans Figma.",
        ],
      },
    },
    images: {
      card: "/media/projects/bill-design-1.webp",
      hero: "/media/projects/bill-design-1.webp",
      ogImage: "/media/projects/bill-design-1.webp",
      gallery: [
        {
          src: "/media/projects/bill-design-2.webp",
          alt: "Onglet Mockups du plugin BILL Design",
          caption: "Recherche et injection de mockups directement dans Figma.",
        },
        {
          src: "/media/projects/bill-design-3.webp",
          alt: "Outils IA de BILL Design dans Figma",
          caption: "Automatisations de titres, sommaire, orthographe, emphase et ic\u00f4nes.",
        },
        {
          src: "/media/projects/bill-design-4.webp",
          alt: "Sessions du Chat IA dans BILL Design",
          caption: "Le Chat IA conserve les discussions de travail li\u00e9es aux pr\u00e9sentations.",
        },
        {
          src: "/media/projects/bill-design-5.webp",
          alt: "Chat IA BILL Design appliquant une modification",
          caption: "L'agent analyse le contexte et applique une action sur la slide s\u00e9lectionn\u00e9e.",
        },
        {
          src: "/media/projects/bill-design-6.webp",
          alt: "Param\u00e8tres Gemini de BILL Design",
          caption: "La cl\u00e9 API et le choix de mod\u00e8le restent dans le stockage Figma de l'utilisateur.",
        },
      ],
    },
    imageAlt: "Interface du plugin Figma BILL Design",
  },
  {
    slug: "bill-app-website",
    name: "BILL APP — Site web",
    tagline: "De WordPress V1 \u00e0 une V2 Next.js SSR et Sanity",
    summary:
      "Un travail men\u00e9 sur la V1 avec mon responsable de stage, puis sur une V2 plus souple dont les composants sont actuellement en validation.",
    category: "Web",
    featured: true,
    order: 4,
    role: "UI Designer & Front-end Contributor",
    platforms: ["Web"],
    year: "2026",
    status: "In validation",
    client: "BILL APP",
    stack: ["WordPress", "Elementor", "Next.js", "SSR", "Sanity"],
    highlights: [
      "V1 r\u00e9alis\u00e9e en collaboration avec mon responsable de stage",
      "Site WordPress construit avec Elementor",
      "Transition engag\u00e9e vers Next.js SSR et Sanity",
      "Composants V2 con\u00e7us et actuellement en validation",
    ],
    links: {
      live: "https://www.bill-app.fr/",
    },
    caseStudy: {
      context: {
        heading: "Contexte",
        body: [
          "J'ai particip\u00e9 \u00e0 la V1 du site BILL APP avec mon responsable de stage. Le projet \u00e9tait construit avec WordPress et Elementor pour pr\u00e9senter les solutions de digitalisation de la restauration.",
        ],
      },
      problem: {
        heading: "Pourquoi faire \u00e9voluer le site",
        body: [
          "En explorant les nouvelles possibilit\u00e9s de travail assist\u00e9 par l'IA, nous avons constat\u00e9 qu'Elementor risquait de limiter la vitesse d'\u00e9volution, la qualit\u00e9 des composants et la flexibilit\u00e9 du produit dans la dur\u00e9e.",
        ],
      },
      contribution: {
        heading: "Ma contribution",
        body: [
          "J'ai contribu\u00e9 au travail d'interface sur la V1, puis \u00e0 la conception des composants de la V2. Cette nouvelle base s'appuie sur Next.js en SSR et sur Sanity pour rendre le site plus modulaire et plus adapt\u00e9 au rythme de l'\u00e9quipe.",
        ],
        bullets: [
          "Collaboration sur la V1 WordPress avec le responsable de stage",
          "Conception de composants d'interface pour la V2",
          "Participation \u00e0 une approche plus modulaire avec Next.js SSR et Sanity",
        ],
      },
      outcome: {
        heading: "Statut actuel",
        body: [
          "La V1 reste consultable publiquement. La V2 est dans une phase de validation des composants.",
        ],
      },
    },
    images: {
      card: "/media/projects/bill-site-1.webp",
      hero: "/media/projects/bill-site-1.webp",
      ogImage: "/media/projects/bill-site-1.webp",
      gallery: [
        {
          src: "/media/projects/bill-site-2.webp",
          alt: "T\u00e9moignages clients sur le site BILL APP",
          caption: "Une section de t\u00e9moignages con\u00e7ue pour renforcer la preuve sociale.",
        },
        {
          src: "/media/projects/bill-site-3.webp",
          alt: "Composants de r\u00e9assurance du site BILL APP",
          caption: "Des composants de r\u00e9assurance et de pr\u00e9sentation des solutions BILL.",
        },
      ],
    },
    imageAlt: "Logo BILL APP",
  },
];

export const projects: Project[] = [...allProjects].sort((a, b) => a.order - b.order);
export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectNeighbours(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}

export function hasCaseStudyContent(project: Project): boolean {
  if (!project.caseStudy) return false;
  return Object.values(project.caseStudy).some(
    (section) => section && (section.body.length > 0 || (section.bullets?.length ?? 0) > 0)
  );
}

export const caseStudySectionOrder = [
  "context",
  "problem",
  "contribution",
  "challenges",
  "outcome",
] as const;
