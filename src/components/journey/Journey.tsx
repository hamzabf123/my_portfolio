"use client";

import Reveal from "@/components/motion/Reveal";
import { currentFocus, journeyMilestones } from "@/data/journey";
import JourneyMilestoneItem from "./JourneyMilestoneItem";
import { useLanguage } from "@/components/LanguageProvider";

const gradientText = {
  backgroundImage:
    "linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(38 95% 72%) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

export default function Journey() {
  const { locale } = useLanguage();
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="w-full overflow-x-clip border-t border-border/40"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 py-[100px] md:px-12 md:py-[120px] lg:py-[140px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[45fr_55fr] lg:gap-20">
          {/* Left column */}
          <div className="flex flex-col text-center lg:text-left">
            <Reveal
              as="p"
              variant="left"
              className="mb-4 text-[10px] uppercase tracking-widest text-accent-cyan/80"
            >
              {locale === "fr" ? "Mon parcours" : "My journey"}
            </Reveal>

            <Reveal
              as="h2"
              variant="left"
              delay={0.06}
              id="journey-heading"
              className="text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground md:text-[40px] lg:text-[56px]"
            >
              {locale === "fr" ? "De la curiosité" : "From curiosity"}
              <br />
              {locale === "fr" ? "à la création" : "to building"}
              <br />
              <span style={gradientText}>{locale === "fr" ? "de produits IA" : "AI products"}</span>.
            </Reveal>

            <Reveal
              as="p"
              variant="left"
              delay={0.12}
              className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0 lg:max-w-none"
            >
              {locale === "fr"
                ? "J'ai commencé par la curiosité, puis le design et le web m'ont progressivement conduit vers la création d'expériences digitales utiles et prêtes à être utilisées."
                : "I started with curiosity, then design and the web gradually led me toward building useful digital experiences that are ready for real use."}
            </Reveal>

            <Reveal
              variant="blur-up"
              delay={0.18}
              className="mt-10 border-t border-border/50 pt-8"
            >
              <p className="text-sm font-medium text-foreground">
                {locale === "fr" ? "Focus actuel" : "Current focus"}
              </p>
              <ul className="mt-4 space-y-2">
                {currentFocus.map((item) => (
                  <li
                    key={item.fr}
                    className="flex items-center justify-center gap-2.5 text-base text-muted-foreground lg:justify-start"
                  >
                    <span
                      className="h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60"
                      aria-hidden
                    />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right column — vertical journey */}
          <Reveal
            as="ol"
            variant="rise"
            delay={0.1}
            className="relative mx-auto w-full max-w-lg list-none lg:mx-0 lg:max-w-none"
            aria-label={locale === "fr" ? "Étapes du parcours" : "Career milestones"}
          >
            {journeyMilestones.map((milestone, index) => (
              <JourneyMilestoneItem
                key={milestone.id}
                milestone={milestone}
                index={index}
                isLast={index === journeyMilestones.length - 1}
              />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
