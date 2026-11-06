"use client";

import { useRef } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";
import MaskReveal from "@/components/motion/MaskReveal";
import useScrollFx from "@/components/motion/useScrollFx";
import { TIER_FULL, TIER_LITE } from "@/lib/motion";

const copy = {
  fr: {
    availability: "Master en alternance · Lyon · septembre 2027",
    greeting: "Bonjour, je suis",
    role: "Product Designer & Product Builder IA",
    tagline: "Je transforme un besoin métier en produit livré : cadrage, design, web et IA.",
    description:
      "Licencié en informatique (bases de données) et designer chez BILL APP, je prépare un master en alternance pour évoluer vers Product Owner ou chef de projet digital et IA.",
    projects: "Voir les projets",
    contact: "Me contacter",
    highlights: ["Cadrage produit", "UX/UI & prototypage", "Web & bases de données", "Workflows IA"],
  },
  en: {
    availability: "Work-study master’s · Lyon · September 2027",
    greeting: "Hi, I’m",
    role: "Product Designer & AI Product Builder",
    tagline: "I turn a business need into a shipped product: framing, design, web and AI.",
    description:
      "With a bachelor’s in computer science (databases) and a design role at BILL APP, I am preparing a work-study master’s to grow into a Product Owner or digital & AI project manager.",
    projects: "View projects",
    contact: "Get in touch",
    highlights: ["Product framing", "UX/UI & prototyping", "Web & databases", "AI workflows"],
  },
} as const;

export default function HeroContent() {
  const ref = useRef<HTMLDivElement>(null);
  const { locale } = useLanguage();
  const text = copy[locale];

  useScrollFx(
    ref,
    ({ gsap, mm, scope }) => {
      const items = scope.querySelectorAll<HTMLElement>("[data-hero-item]");
      if (!items.length) return;

      mm.add(`${TIER_FULL}, ${TIER_LITE}`, () => {
        gsap.fromTo(
          items,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.09,
            delay: 0.35,
            ease: "power3.out",
          }
        );
      });
    },
    [locale],
    { awaitIntro: true }
  );

  return (
    <div
      ref={ref}
      className="flex min-w-0 flex-col items-center gap-5 text-center sm:gap-6 md:items-start md:gap-5 md:text-left lg:gap-6 [@media(max-height:800px)]:md:gap-4"
    >
      <div data-hero-item>
        <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/60 bg-surface-1/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
          <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-400" />
          {text.availability}
        </span>
      </div>

      <MaskReveal
        as="h1"
        immediate
        delay={0.2}
        className="w-full min-w-0 font-semibold tracking-[-0.02em] text-foreground"
      >
        <span className="line-mask mb-2 text-base font-medium text-muted-foreground md:text-lg">
          <span>{text.greeting}</span>
        </span>

        <span className="line-mask">
          <span
            className="text-[clamp(2rem,5vw,4.25rem)] leading-[1.1] md:text-[clamp(2.25rem,4vw,4rem)] lg:text-[clamp(2.5rem,3.5vw,4.75rem)] [@media(max-height:800px)]:lg:text-[clamp(2rem,3vw,3.5rem)]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(38 95% 72%) 55%, hsl(248 85% 80%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {siteConfig.name}
          </span>
        </span>

        <span className="line-mask mt-2 md:mt-2">
          <span className="text-[clamp(1.55rem,4vw,3.25rem)] leading-[1.12] lg:text-[clamp(1.75rem,2.8vw,3.2rem)] [@media(max-height:800px)]:lg:text-[clamp(1.4rem,2.2vw,2.5rem)]">
            {text.role}
          </span>
        </span>

        <span className="line-mask mt-2 md:mt-3">
          <span className="text-[clamp(1.125rem,2.5vw,1.75rem)] font-medium leading-snug text-foreground/85">
            {text.tagline}
          </span>
        </span>
      </MaskReveal>

      <p
        data-hero-item
        className="w-full max-w-lg text-base leading-relaxed text-foreground/80 md:text-lg"
      >
        {text.description}
      </p>

      <div
        data-hero-item
        className="flex w-full max-w-md flex-col gap-3 sm:flex-row md:max-w-none"
      >
        <Link
          href="#work"
          className="inline-flex h-11 min-h-[44px] w-full items-center justify-center rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 sm:w-auto"
        >
          {text.projects}
        </Link>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex h-11 min-h-[44px] w-full items-center justify-center rounded-lg border border-border/80 px-5 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface-2/50 sm:w-auto"
        >
          {text.contact}
        </a>
      </div>

      <div data-hero-item className="flex items-center gap-4">
        <a
          href={`mailto:${siteConfig.email}`}
          aria-label="Email"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/40"
        >
          <Mail size={18} strokeWidth={1.75} />
        </a>
      </div>

      <div
        data-hero-item
        className="grid w-full grid-cols-2 gap-x-3 gap-y-3 border-t border-border/50 pt-5 text-left sm:grid-cols-4 md:pt-6"
      >
        {text.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-md border border-border/50 bg-surface-1/45 px-3 py-2 text-xs font-medium leading-snug text-muted-foreground"
          >
            {highlight}
          </span>
        ))}
      </div>
    </div>
  );
}
