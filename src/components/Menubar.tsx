"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/site";

interface menuInterface {
  home?: boolean;
  isContactVisible?: boolean;
  variant?: "header" | "footer";
}

const Menubar = ({
  isContactVisible = false,
  variant = "footer",
}: menuInterface) => {
  const pathname = usePathname();
  const linkClass = variant === "header" ? "nav-link" : "footer-nav-link";
  const activeClass =
    variant === "header" ? "nav-link-active" : "footer-nav-link-active";
  const listClass =
    variant === "header"
      ? "flex items-center gap-1"
      : "flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2";
  const { locale } = useLanguage();
  const copy =
    locale === "fr"
      ? { home: "Accueil", profile: "Profil", experience: "Parcours", contact: "Me contacter" }
      : { home: "Home", profile: "Profile", experience: "Experience", contact: "Contact me" };

  return (
    <nav>
      <ul className={listClass}>
        <li>
          <Link
            href="/"
            className={`${linkClass} ${pathname === "/" ? activeClass : ""}`}
          >
            {copy.home}
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            className={linkClass}
          >
            {copy.profile}
          </Link>
        </li>
        <li>
          <Link
            href="/#experience"
            className={linkClass}
          >
            {copy.experience}
          </Link>
        </li>
        {isContactVisible && (
          <li>
          <a href={`mailto:${siteConfig.email}`} className={linkClass}>
            {copy.contact}
          </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menubar;
