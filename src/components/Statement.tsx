"use client";

import WordScrub from "@/components/motion/WordScrub";
import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  fr: {
    statement:
      "Du premier croquis à l’interface finale, je conçois des expériences qui rendent les marques plus claires, plus mémorables et plus utiles.",
    caption: "Design stratégique, précision visuelle et outils modernes.",
  },
  en: {
    statement:
      "From the first sketch to the final interface, I design experiences that make brands clearer, more memorable and more useful.",
    caption: "Strategic design, visual precision and modern tools.",
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
