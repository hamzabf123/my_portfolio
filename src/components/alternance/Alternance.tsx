"use client";

import Link from "next/link";
import { ArrowUpRight, Briefcase, Download, GraduationCap, MapPin, Sparkles } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/site";

const copy = {
  fr: {
    eyebrow: "Projet d’alternance",
    titleStart: "Un master en alternance à Lyon,",
    titleAccent: "dès septembre 2027.",
    lead:
      "Je cherche un Bac+5 en deux ans, en contrat d’apprentissage dès la première année. Je vise une entreprise à Lyon, avec une promesse d’embauche après l’admission, et une formation qui fera de moi un Product Owner complet.",
    facts: [
      { icon: MapPin, label: "Lyon, ou à 1h30 max", detail: "Grenoble, Saint-Étienne, Annecy" },
      { icon: Briefcase, label: "Contrat d’apprentissage", detail: "Promesse d’embauche visée après l’admission" },
      { icon: GraduationCap, label: "Rentrée septembre 2027", detail: "Master d’État ou grade de master" },
    ],
    cards: [
      {
        icon: Sparkles,
        title: "Le métier visé",
        items: ["Product Owner / Product Manager", "Chef de projet digital ou IA", "Product Builder (IA, no-code)", "Avec une forte sensibilité UX"],
      },
      {
        icon: GraduationCap,
        title: "Les formations visées",
        items: ["MIAGE : informatique, gestion, IA", "Master informatique en alternance", "Management de l’innovation", "Design numérique et innovation"],
      },
      {
        icon: Briefcase,
        title: "Ce que j’apporte dès le premier jour",
        items: ["Plus d’un an chez BILL APP (stage puis CDI)", "Figma, design systems et prototypage", "Bases de données, web et React", "Des outils IA déjà livrés en production"],
      },
    ],
    cv: "Télécharger mon CV",
    contact: "Me contacter",
  },
  en: {
    eyebrow: "Work-study plan",
    titleStart: "A work-study master’s in Lyon,",
    titleAccent: "from September 2027.",
    lead:
      "I am looking for a two-year master’s with an apprenticeship contract from the first year. I am targeting a company in Lyon, with a job offer after admission, and a programme that will make me a well-rounded Product Owner.",
    facts: [
      { icon: MapPin, label: "Lyon, or within 1h30", detail: "Grenoble, Saint-Étienne, Annecy" },
      { icon: Briefcase, label: "Apprenticeship contract", detail: "Job offer targeted after admission" },
      { icon: GraduationCap, label: "Starting September 2027", detail: "State master’s or master’s degree" },
    ],
    cards: [
      {
        icon: Sparkles,
        title: "Target role",
        items: ["Product Owner / Product Manager", "Digital or AI project manager", "Product Builder (AI, no-code)", "With a strong UX focus"],
      },
      {
        icon: GraduationCap,
        title: "Target programmes",
        items: ["MIAGE: computing, management, AI", "Work-study computer science master’s", "Innovation management", "Digital design and innovation"],
      },
      {
        icon: Briefcase,
        title: "What I bring from day one",
        items: ["Over a year at BILL APP (internship, then permanent role)", "Figma, design systems and prototyping", "Databases, web and React", "AI tools already shipped to production"],
      },
    ],
    cv: "Download my CV",
    contact: "Get in touch",
  },
} as const;

export default function Alternance({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const { locale } = useLanguage();
  const text = copy[locale];
  const Heading = headingLevel;

  return (
    <section id="alternance" aria-labelledby="alternance-heading" className="w-full scroll-mt-24 overflow-x-clip border-t border-border/40">
      <div className="container-page py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-accent-cyan/20 bg-surface-1 p-6 sm:p-10 lg:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(var(--accent-cyan) / 0.18), transparent 70%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(var(--accent-purple) / 0.16), transparent 70%)" }}
          />

          <Reveal variant="left" className="relative max-w-3xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-widest text-accent-cyan">{text.eyebrow}</p>
            <Heading id="alternance-heading" className="text-[clamp(1.75rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
              {text.titleStart}{" "}
              <span className="text-accent-cyan">{text.titleAccent}</span>
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{text.lead}</p>
          </Reveal>

          <Reveal variant="up" stagger={0.06} className="relative mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {text.facts.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/40 p-4">
                <Icon size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent-cyan" aria-hidden />
                <div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="mt-0.5 text-[13px] text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal variant="up" stagger={0.08} className="relative mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            {text.cards.map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-2xl border border-border/50 bg-surface-2/50 p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background/50">
                  <Icon size={17} strokeWidth={1.75} className="text-foreground/85" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                <ul className="mt-3 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted-foreground">
                      <span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent-cyan/80" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              <Download size={15} aria-hidden />
              {text.cv}
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-border/80 px-5 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface-2/50"
            >
              {text.contact}
              <ArrowUpRight size={14} className="opacity-70" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
