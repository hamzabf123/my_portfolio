"use client";

import Menubar from "./Menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale } = useLanguage();
  const copy =
    locale === "fr"
      ? { home: "Accueil", profile: "Profil", work: "Projets", alternance: "Alternance", experience: "Parcours", contact: "Me contacter", close: "Fermer le menu", open: "Ouvrir le menu" }
      : { home: "Home", profile: "Profile", work: "Projects", alternance: "Work-study", experience: "Experience", contact: "Contact me", close: "Close menu", open: "Open menu" };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (menuOpen && target && !target.closest("#site-nav")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="nav-floating">
      <div id="site-nav" className="container-page relative">
        <div
          className={`nav-glass flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-3 ${menuOpen ? "nav-glass-open" : ""}`}
        >
          <Link href="/" className="nav-logo min-w-0">
            Hamza<span className="text-accent-cyan">.</span>
          </Link>

          <div className="hidden md:block md:justify-self-center">
            <Menubar home={true} variant="header" />
          </div>

          <div className="nav-actions md:col-start-3 md:justify-self-end">
            <LanguageSwitcher />
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden md:inline-flex btn-accent text-sm px-4 py-2"
            >
              {copy.contact}
            </a>

            <button
              className="md:hidden btn-icon h-9 w-9 shrink-0 p-0"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              aria-label={menuOpen ? copy.close : copy.open}
            >
              {menuOpen ? <X size={18} /> : <AlignJustify size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="nav-mobile-menu">
            <nav>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/"
                    className={`nav-link block ${pathname === "/" ? "nav-link-active" : ""}`}
                  >
                    {copy.home}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="nav-link block"
                  >
                    {copy.profile}
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className="nav-link block">
                    {copy.work}
                  </Link>
                </li>
                <li>
                  <Link href="/#alternance" className="nav-link block">
                    {copy.alternance}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#experience"
                    className="nav-link block"
                  >
                    {copy.experience}
                  </Link>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="nav-link block">
                    {copy.contact}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
