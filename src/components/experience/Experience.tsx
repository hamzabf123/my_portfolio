"use client";

import Reveal from "@/components/motion/Reveal";
import { Check } from "lucide-react";
import { additionalExperiences, contributions, primaryExperience } from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";
import ContributionCard from "./ContributionCard";

const copy = {
  fr: {
    eyebrow: "Expérience",
    title: "Concevoir pour des usages réels.",
    intro: "Une pratique du design nourrie par des projets concrets, des échanges clients et une exigence de production.",
    contributions: "Contributions clés",
    technologies: "Outils & technologies",
    learnings: "Ce que j'y ai appris",
  },
  en: {
    eyebrow: "Experience",
    title: "Designing for real-world use.",
    intro: "A design practice shaped by real projects, client conversations and production-level standards.",
    contributions: "Key contributions",
    technologies: "Tools & technologies",
    learnings: "What I learned",
  },
} as const;

function CompanyLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-border/50 bg-surface-2 shadow-soft">
      <img src={src} alt={alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
    </div>
  );
}

export default function Experience() {
  const { locale } = useLanguage();
  const text = copy[locale];

  return (
    <section id="experience" aria-labelledby="experience-heading" className="w-full overflow-x-clip border-t border-border/40">
      <div className="container-page py-[100px] md:py-[120px] lg:py-[140px]">
        <Reveal as="header" variant="right" className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-4 text-[10px] uppercase tracking-widest text-accent-cyan/80">{text.eyebrow}</p>
          <h2 id="experience-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {text.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{text.intro}</p>
        </Reveal>

        <Reveal variant="scale" delay={0.05} className="rounded-[24px] border border-border/50 bg-surface-1 p-6 md:p-10 lg:p-12">
          <div className="flex flex-col gap-6 border-b border-border/40 pb-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="flex min-w-0 items-start gap-4">
              <CompanyLogo src={primaryExperience.logo} alt={primaryExperience.logoAlt} />
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{primaryExperience.title}</h3>
                <p className="mt-2 text-base font-medium text-foreground/90">{primaryExperience.company}</p>
                <p className="mt-1 text-sm text-muted-foreground">{primaryExperience.location[locale]}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-3 lg:min-w-[210px] lg:text-right">
              {primaryExperience.periods.map((period) => (
                <div key={period.employmentType.fr}>
                  <p className="text-sm font-medium text-foreground">{period.employmentType[locale]}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{period.duration[locale]}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">{primaryExperience.description[locale]}</p>

          <div className="mt-10">
            <h4 className="mb-5 text-sm font-medium uppercase tracking-wider text-muted-foreground">{text.contributions}</h4>
            <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {contributions.map((contribution, index) => (
                <ContributionCard key={contribution.id} contribution={contribution} index={index} />
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-border/40 pt-8">
            <h4 className="mb-4 text-sm font-medium text-foreground">{text.technologies}</h4>
            <ul className="flex flex-wrap gap-2" aria-label={text.technologies}>
              {primaryExperience.technologies.map((tech) => (
                <li key={tech}>
                  <span className="inline-block rounded-full border border-border/60 bg-surface-2/40 px-3 py-1 text-sm text-muted-foreground transition-all [transition-duration:250ms] hover:-translate-y-px hover:border-border-hover hover:text-foreground/80">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-border/40 pt-8">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {primaryExperience.impact.map((item) => (
                <li key={item.fr} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Check size={16} strokeWidth={2} className="shrink-0 text-foreground/60" aria-hidden />
                  <span>{item[locale]}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {additionalExperiences.map((experience, index) => (
          <Reveal
            key={experience.company}
            variant="scale"
            delay={0.1 + index * 0.08}
            className="mt-5 rounded-[24px] border border-border/50 bg-surface-1 p-6 md:p-8"
          >
            <article className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
              <div className="min-w-0">
                <div className="flex items-start gap-4">
                  <CompanyLogo src={experience.logo} alt={experience.logoAlt} />
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-accent-cyan/80">
                      {experience.employmentType[locale]}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {experience.title}
                    </h3>
                    <p className="mt-2 text-base font-medium text-foreground/90">{experience.company}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{experience.location[locale]}</p>
                  </div>
                </div>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {experience.description[locale]}
                </p>

                <div className="mt-7 border-t border-border/40 pt-6">
                  <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {text.learnings}
                  </h4>
                  <ul className="grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                    {experience.learnings.map((learning) => (
                      <li key={learning.fr} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <Check size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-foreground/60" aria-hidden />
                        <span>{learning[locale]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="shrink-0 rounded-xl border border-border/40 bg-surface-2/50 px-4 py-3 lg:min-w-[210px] lg:text-right">
                <p className="text-sm font-medium text-foreground">{experience.duration[locale]}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
