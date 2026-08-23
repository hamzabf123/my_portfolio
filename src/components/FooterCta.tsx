"use client";

import Link from "next/link";
import { Eye } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";
import MaskReveal from "@/components/motion/MaskReveal";
import MagneticLink from "@/components/motion/MagneticLink";

export default function FooterCta() {
  const { locale } = useLanguage();
  const copy =
    locale === "fr"
      ? { title: "Une idée, un projet, une collaboration ?", contact: "Me contacter", cv: "Voir mon CV" }
      : { title: "An idea, a project, a collaboration?", contact: "Get in touch", cv: "View my CV" };

  return (
    <div className="footer-cta">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <MaskReveal as="p" className="heading-subsection text-center text-xl md:text-2xl lg:text-left">
          <span className="line-mask"><span>{copy.title}</span></span>
        </MaskReveal>
        <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row">
          <MagneticLink href={`mailto:${siteConfig.email}`} className="btn-accent w-full sm:w-auto">
            {copy.contact}
          </MagneticLink>
          <Link
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex w-full justify-center gap-2 sm:w-auto"
          >
            <Eye size={18} /> {copy.cv}
          </Link>
        </div>
      </div>
    </div>
  );
}
