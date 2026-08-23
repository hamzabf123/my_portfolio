"use client";

import MaskReveal from "@/components/motion/MaskReveal";
import Reveal from "@/components/motion/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectsHero() {
  const { locale } = useLanguage();
  const copy =
    locale === "fr"
      ? {
          eyebrow: "Projets",
          firstLine: "Des projets con\u00e7us.",
          secondLine: "Des probl\u00e8mes r\u00e9solus.",
          description:
            "Une s\u00e9lection de projets de design, d'automatisation et d'outils IA con\u00e7us pour r\u00e9pondre \u00e0 des besoins concrets.",
        }
      : {
          eyebrow: "Projects",
          firstLine: "Projects designed.",
          secondLine: "Problems solved.",
          description:
            "A selection of design, automation, and AI projects created to address concrete needs.",
        };

  return (
    <section className="pb-20 pt-8 md:pb-28 md:pt-12 lg:pb-32">
      <div className="mx-auto max-w-[900px] px-6 text-center md:px-12">
        <Reveal as="p" variant="down" className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {copy.eyebrow}
        </Reveal>

        <MaskReveal
          as="h1"
          immediate
          delay={0.1}
          className="text-[clamp(1.75rem,6vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-foreground md:text-[48px] lg:text-[64px] md:leading-[1.1]"
        >
          <span className="line-mask">
            <span>{copy.firstLine}</span>
          </span>
          <span className="line-mask">
            <span>{copy.secondLine}</span>
          </span>
        </MaskReveal>

        <Reveal
          as="p"
          variant="blur-up"
          delay={0.25}
          className="mx-auto mt-6 max-w-[720px] text-[17px] leading-relaxed text-muted-foreground md:mt-8"
        >
          {copy.description}
        </Reveal>
      </div>
    </section>
  );
}
