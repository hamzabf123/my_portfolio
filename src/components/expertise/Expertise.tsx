"use client";

import Reveal from "@/components/motion/Reveal";
import { expertiseCategories } from "@/data/expertiseCategories";
import { useLanguage } from "@/components/LanguageProvider";
import ExpertiseCard from "./ExpertiseCard";

const copy = {
  fr: {
    eyebrow: "Expertise",
    title: "Un regard design, du concept à l’écran.",
    intro: "Une boîte à outils pensée pour faire dialoguer une identité, une interface et une présence digitale cohérente.",
  },
  en: {
    eyebrow: "Expertise",
    title: "A design perspective, from concept to screen.",
    intro: "A toolkit built to connect identity, interface and a coherent digital presence.",
  },
} as const;

export default function Expertise() {
  const { locale } = useLanguage();
  const text = copy[locale];

  return (
    <section id="expertise" aria-labelledby="expertise-heading" className="w-full overflow-x-clip border-t border-border/40">
      <div className="container-page py-16 md:py-[100px] lg:py-[120px]">
        <Reveal as="header" variant="blur-up" className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-4 text-[10px] uppercase tracking-widest text-accent-cyan/80">{text.eyebrow}</p>
          <h2 id="expertise-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {text.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{text.intro}</p>
        </Reveal>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {expertiseCategories.map((category, index) => (
            <ExpertiseCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
