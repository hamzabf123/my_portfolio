"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";
import FeaturedProjectCard from "./FeaturedProjectCard";
import StackedProjectCard from "./StackedProjectCard";
import MaskReveal from "@/components/motion/MaskReveal";
import useScrollFx from "@/components/motion/useScrollFx";
import { TIER_FULL } from "@/lib/motion";

const STICKY_TOP = 96;
const STACK_GAP = 18;
const STACK_SCALE = 0.955;

const copy = {
  fr: {
    eyebrow: "Projets sélectionnés",
    lineOne: "Des projets utiles,",
    lineTwo: "pensés pour le terrain.",
    intro: "Une sélection de projets de design, de produit et d’outils qui simplifient un vrai flux de travail.",
    all: "Voir tous les projets",
  },
  en: {
    eyebrow: "Selected work",
    lineOne: "Useful projects,",
    lineTwo: "built for real work.",
    intro: "A selection of design, product and tool projects that simplify real-world workflows.",
    all: "View all projects",
  },
} as const;

export default function FeaturedProjects() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { locale } = useLanguage();
  const text = copy[locale];

  useScrollFx(stackRef, ({ gsap, mm, scope }) => {
    mm.add(TIER_FULL, () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]", scope);

      cards.forEach((card, index) => {
        const next = cards[index + 1];
        if (!next) return;

        gsap.to(card, {
          scale: STACK_SCALE,
          transformOrigin: "center top",
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: next,
            start: "top bottom",
            end: () => `top top+=${STICKY_TOP + (index + 1) * STACK_GAP}`,
            scrub: 0.25,
            invalidateOnRefresh: true,
          },
        });
      });
    });
  });

  return (
    <section id="work" className="border-t border-border/40 py-16 md:py-20 lg:py-24">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="mb-2 text-[10px] uppercase tracking-widest text-accent-cyan/80">
            {text.eyebrow}
          </p>

          <MaskReveal as="h2" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            <span className="line-mask"><span>{text.lineOne}</span></span>
            <span className="line-mask"><span>{text.lineTwo}</span></span>
          </MaskReveal>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {text.intro}
          </p>
        </div>

        <div ref={stackRef} className="hidden lg:block">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              data-stack-card
              className={`sticky ${index < featuredProjects.length - 1 ? "mb-[24vh]" : ""}`}
              style={{
                zIndex: index + 1,
                top: `${STICKY_TOP + index * STACK_GAP}px`,
              }}
            >
              <StackedProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:hidden">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link href="/projects" className="group inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
            {text.all}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
