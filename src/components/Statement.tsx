"use client";

import WordScrub from "@/components/motion/WordScrub";
import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  fr: {
    statement:
      "Comprendre le marché, cadrer le produit, le concevoir et le livrer : je relie le métier, le design et la technique, avec l’IA comme levier.",
    caption: "Produit, UX, data et IA, au service d’un besoin réel.",
  },
  en: {
    statement:
      "Understand the market, frame the product, design it and ship it: I connect business, design and technology, with AI as leverage.",
    caption: "Product, UX, data and AI, in service of a real need.",
  },
} as const;

export default function Statement() {
  const { locale } = useLanguage();
  const text = copy[locale];

  return (
    <section className="container-page py-28 md:py-40 lg:py-48">
      <WordScrub
        as="p"
        text={text.statement}
        className="mx-auto max-w-4xl text-balance text-center text-[clamp(1.5rem,4vw,3rem)] font-semibold leading-[1.25] tracking-tight text-foreground"
      />

      <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted-foreground">
        {text.caption}
      </p>
    </section>
  );
}
