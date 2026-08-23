"use client";

import { Star } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";
import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  fr: {
    stack: "Compétences.",
    place: "Mon environnement.",
    tags: [
      ["Design responsive", "Maîtrise HTML/CSS", "Expertise UI/UX"],
      ["JavaScript", "Esprit d'équipe", "Outils de design"],
      ["Veille design", "Résolution de problèmes", "Sens du détail"],
    ],
  },
  en: {
    stack: "Skills.",
    place: "My environment.",
    tags: [
      ["Responsive design", "HTML/CSS", "UI/UX expertise"],
      ["JavaScript", "Collaborative teamwork", "Design tools"],
      ["Design research", "Problem solving", "Attention to detail"],
    ],
  },
} as const;

const Myplace = () => {
  const { locale } = useLanguage();
  const text = copy[locale];

  return (
    <section className="pb-24">
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[40%_60%]">
        <div className="w-full">
          <h3 className="heading-subsection mb-6">{text.stack}</h3>
          <div className="card flex h-64 w-full flex-col items-baseline justify-center gap-5 overflow-hidden rounded-xl sm:h-80 lg:h-[250px]">
            {text.tags.map((row, index) => (
              <Marquee key={row[0]} direction={index === 1 ? "right" : "left"} speed={30}>
                <div className="flex items-center gap-5">
                  {row.map((tag) => (
                    <React.Fragment key={tag}>
                      <div className="tag px-4 py-2">{tag}</div>
                      <Star className={index === 1 ? "text-accent-purple" : "text-accent-cyan"} size={16} />
                    </React.Fragment>
                  ))}
                  <span />
                </div>
              </Marquee>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h3 className="heading-subsection mb-6">{text.place}</h3>
          <div className="card relative h-64 w-full overflow-hidden rounded-xl sm:h-80 lg:h-[250px]">
            <iframe
              title={text.place}
              src="https://www.google.com/maps?q=Casablanca%2C%20Morocco&output=embed"
              className="absolute left-0 top-0 h-full w-full grayscale opacity-80"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myplace;
