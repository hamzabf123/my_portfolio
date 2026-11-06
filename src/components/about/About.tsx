"use client";

import Reveal from "@/components/motion/Reveal";
import { aboutCards } from "@/data/aboutCards";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/site";
import AboutCard from "./AboutCard";

const copy = {
  fr: {
    eyebrow: "Profil",
    titleStart: "Concevoir avec",
    titleAccent: "intention",
    description:
      "Formé en informatique et en bases de données, j’ai construit mon métier dans le design produit chez BILL APP. Je cadre un besoin, je le rends visible avec des maquettes et des prototypes, puis je le livre avec l’équipe, en code ou avec l’IA.",
    role: "Product Designer & Product Builder IA",
  },
  en: {
    eyebrow: "Profile",
    titleStart: "Designing with",
    titleAccent: "intention",
    description:
      "Trained in computer science and databases, I built my practice in product design at BILL APP. I frame a need, make it visible through mockups and prototypes, then ship it with the team, in code or with AI.",
    role: "Product Designer & AI Product Builder",
  },
} as const;

export default function About() {
  const { locale } = useLanguage();
  const text = copy[locale];

  return (
    <section id="about" className="w-full overflow-x-clip border-t border-border/40">
      <div className="container-page py-[50px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[45fr_55fr] lg:gap-20">
          <Reveal variant="left" stagger={0.09} className="flex flex-col text-center lg:text-left">
            <p className="mb-4 text-[10px] uppercase tracking-widest text-accent-cyan/80">
              {text.eyebrow}
            </p>

            <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground md:text-[40px] lg:text-[56px]">
              {text.titleStart}{" "}
              <span
                className="text-foreground"
                style={{
                  backgroundImage: "linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(38 95% 72%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {text.titleAccent}
              </span>
              .
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:max-w-none">
              {text.description}
            </p>

            <div className="mt-10 border-t border-border/50 pt-8">
              <p className="text-sm font-medium text-foreground">{siteConfig.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{text.role}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{siteConfig.location[locale]}</p>
            </div>
          </Reveal>

          <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {aboutCards.map((card, index) => (
              <AboutCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
