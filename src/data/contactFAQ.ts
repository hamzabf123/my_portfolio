import type { LocalizedText } from "@/lib/i18n";

export interface FAQItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export const contactFAQ: FAQItem[] = [
  {
    id: "services",
    question: { fr: "Quels services proposez-vous ?", en: "What services do you provide?" },
    answer: {
      fr: "Je conçois des interfaces UX/UI, des identités visuelles, des sites web modernes et des outils créatifs augmentés par l'IA.",
      en: "I design UX/UI interfaces, visual identities, modern websites and AI-augmented creative tools.",
    },
  },
  {
    id: "full-time",
    question: { fr: "Êtes-vous ouvert à un poste à temps plein ?", en: "Are you available for full-time roles?" },
    answer: {
      fr: "Oui, je peux échanger autour de collaborations et d'opportunités qui combinent design, produit et technologies web.",
      en: "Yes, I am open to conversations about opportunities combining design, product and web technologies.",
    },
  },
  {
    id: "remote",
    question: { fr: "Travaillez-vous à distance ?", en: "Do you work remotely?" },
    answer: {
      fr: "Oui. Je suis à l'aise avec la collaboration à distance et les équipes réparties sur plusieurs fuseaux horaires.",
      en: "Yes. I am comfortable collaborating remotely with teams across different time zones.",
    },
  },
  {
    id: "technologies",
    question: { fr: "Quelles technologies utilisez-vous ?", en: "What technologies do you use?" },
    answer: {
      fr: "Je travaille notamment avec Figma, Illustrator, Photoshop, React, Next.js, TypeScript, Tailwind CSS et des outils IA.",
      en: "I work with Figma, Illustrator, Photoshop, React, Next.js, TypeScript, Tailwind CSS and AI tools.",
    },
  },
];
