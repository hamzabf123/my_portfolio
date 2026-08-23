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
      "UX/UI Designer et infographiste créatif, je conçois des univers visuels et des interfaces centrées sur l’utilisateur. Mon approche relie réflexion stratégique, précision graphique et intégration web pour faire avancer une idée jusqu’à une expérience concrète.",
    role: "UX/UI Designer & Digital Designer",
  },
  en: {
    eyebrow: "Profile",
    titleStart: "Designing with",
    titleAccent: "intention",
    description:
      "As a UX/UI Designer and creative graphic designer, I craft visual worlds and user-centred interfaces. My approach combines strategic thinking, graphic precision and web integration to turn an idea into a tangible experience.",
    role: "UX/UI Designer & Digital Designer",
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
                  backgroundImage: "linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(187 85% 75%) 100%)",
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
              <p className="mt-0.5 text-sm text-muted-foreground">{siteConfig.location}</p>
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
