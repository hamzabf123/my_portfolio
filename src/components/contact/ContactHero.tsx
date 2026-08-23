"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import MaskReveal from "@/components/motion/MaskReveal";
import { Eye, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";
import type { LocalizedText } from "@/lib/i18n";

const AVAILABILITY_ITEMS: LocalizedText[] = [
  { fr: "Opportunités à temps plein", en: "Full-time opportunities" },
  { fr: "Projets freelance", en: "Freelance projects" },
  { fr: "Développement de produits IA", en: "AI product development" },
];

const RESUME_URL = siteConfig.resumePath;

export default function ContactHero() {
  const { locale } = useLanguage();
  const copy = locale === "fr"
    ? {
        eyebrow: "Contact",
        firstLine: "Construisons quelque chose",
        secondLine: "qui compte, ensemble.",
        description: "Vous souhaitez créer une application augmentée par l'IA, une plateforme web solide ou une expérience mobile ? Parlons de votre idée.",
        available: "Disponible pour",
        email: "M'écrire",
        cv: "Voir mon CV",
      }
    : {
        eyebrow: "Contact",
        firstLine: "Let's build something",
        secondLine: "meaningful together.",
        description: "Whether you want to build an AI-powered application, a scalable web platform or a mobile experience, I would love to hear about your idea.",
        available: "Available for",
        email: "Email me",
        cv: "View my CV",
      };
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative w-full overflow-x-clip"
    >
      <div className="container-page py-[50px]">
        <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
          {/* Subtle radial glow behind heading */}
          <div
            className="pointer-events-none absolute left-1/2 top-[18%] h-[320px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 md:h-[400px] md:w-[600px]"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(0 0% 100% / 0.04) 0%, transparent 70%)",
            }}
            aria-hidden
          />

          <Reveal
            as="p"
            variant="down"
            className="relative mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            {copy.eyebrow}
          </Reveal>

          <MaskReveal
            as="h1"
            immediate
            className="relative text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground"
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
            variant="up"
            delay={0.12}
            className="relative mt-6 max-w-[640px] text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed"
          >
            {copy.description}
          </Reveal>

          <Reveal
            variant="scale"
            delay={0.2}
            className="relative mt-8 flex max-w-full flex-col items-center gap-2 rounded-2xl border border-border/60 bg-surface-1/50 px-5 py-3.5 text-sm text-muted-foreground backdrop-blur-md sm:inline-flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-3 sm:gap-y-2 sm:rounded-full sm:py-3"
          >
            <span className="inline-flex items-center gap-2 font-medium text-foreground/90">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-emerald-400"
                aria-hidden
              />
              {copy.available}
            </span>
            <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              {AVAILABILITY_ITEMS.map((item, index) => (
                <span key={item.fr} className="inline-flex items-center gap-3">
                  {index > 0 && (
                    <span className="text-border-hover" aria-hidden>
                      •
                    </span>
                  )}
                  <span>{item[locale]}</span>
                </span>
              ))}
            </span>
          </Reveal>

          <Reveal
            variant="up"
            delay={0.28}
            className="relative mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-12 w-full min-w-[160px] items-center justify-center gap-2 rounded-xl bg-foreground px-6 text-sm font-medium text-background transition-colors duration-300 hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
              >
                <Mail size={16} strokeWidth={1.75} aria-hidden />
                {copy.email}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full min-w-[160px] items-center justify-center gap-2 rounded-xl border border-border/80 bg-transparent px-6 text-sm font-medium text-foreground transition-all duration-300 hover:border-border-hover hover:bg-surface-2/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
              >
                <Eye size={16} strokeWidth={1.75} aria-hidden />
                {copy.cv}
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
