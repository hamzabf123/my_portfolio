"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { Clock, Globe, MessageSquare } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import type { LocalizedText } from "@/lib/i18n";

const AVAILABILITY_DETAILS: { icon: typeof Clock; label: LocalizedText; value: LocalizedText; description: LocalizedText }[] = [
  {
    icon: Clock,
    label: { fr: "Délai de réponse", en: "Response time" },
    value: { fr: "Sous 24 heures", en: "Within 24 hours" },
    description: { fr: "Des réponses rapides et attentives à chaque demande.", en: "Quick, thoughtful replies to every inquiry." },
  },
  {
    icon: Globe,
    label: { fr: "Fuseau horaire", en: "Timezone" },
    value: { fr: "WET (GMT+0)", en: "WET (GMT+0)" },
    description: { fr: "Une plage de collaboration flexible avec les équipes internationales.", en: "Flexible overlap with international teams." },
  },
  {
    icon: MessageSquare,
    label: { fr: "Collaboration", en: "Engagement" },
    value: { fr: "À distance", en: "Remote-first" },
    description: { fr: "Une collaboration fluide, synchrone ou asynchrone.", en: "Async-friendly collaboration across time zones." },
  },
] as const;

export default function AvailabilitySection() {
  const { locale } = useLanguage();
  const copy = locale === "fr"
    ? { eyebrow: "Disponibilité", title: "Prêt quand vous l'êtes.", description: "J'accepte actuellement de nouveaux projets et des opportunités à temps plein porteuses de sens." }
    : { eyebrow: "Availability", title: "Ready when you are.", description: "Currently accepting new projects and open to meaningful full-time opportunities." };
  return (
    <section
      aria-labelledby="availability-heading"
      className="w-full overflow-x-clip border-t border-border/40"
    >
      <div className="container-page py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[900px]">
          <Reveal as="header" variant="blur-up" className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {copy.eyebrow}
            </p>
            <h2
              id="availability-heading"
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground"
            >
              {copy.title}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              {copy.description}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {AVAILABILITY_DETAILS.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label.fr}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex flex-col items-center rounded-[22px] border border-border/50 bg-surface-1 px-6 py-8 text-center transition-all duration-300 hover:-translate-y-[4px] hover:border-border-hover md:px-7 md:py-9"
                >
                  <Icon
                    size={18}
                    strokeWidth={1.75}
                    className="text-muted-foreground"
                    aria-hidden
                  />
                  <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label[locale]}
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                    {item.value[locale]}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description[locale]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
