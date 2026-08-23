"use client";

import Reveal from "@/components/motion/Reveal";
import { processSteps } from "@/data/processSteps";
import { useLanguage } from "@/components/LanguageProvider";
import ProcessCard from "./ProcessCard";

const copy = {
  fr: {
    eyebrow: "Méthode",
    title: "Du brief à une expérience qui compte.",
    intro: "Chaque projet démarre par une bonne compréhension du problème, puis se construit avec intention jusqu’au dernier détail.",
  },
  en: {
    eyebrow: "Approach",
    title: "From brief to an experience that matters.",
    intro: "Every project starts with a clear understanding of the problem, then is built with intention down to the last detail.",
  },
} as const;

export default function HowIBuildProducts() {
  const { locale } = useLanguage();
  const text = copy[locale];

  return (
    <section id="process" aria-labelledby="process-heading" className="w-full overflow-x-clip border-t border-border/40">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 md:px-12 md:py-[120px] lg:py-[120px]">
        <Reveal as="header" variant="rise" className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-4 text-[10px] uppercase tracking-widest text-accent-cyan/80">{text.eyebrow}</p>
          <h2 id="process-heading" className="text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground md:text-[40px] lg:text-[56px]">
            {text.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.intro}</p>
        </Reveal>

        <ol className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-3 md:gap-x-6 md:gap-y-8">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} isLast={index === processSteps.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}
