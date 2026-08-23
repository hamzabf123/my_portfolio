"use client";

import Menubar from "./Menubar";
import SocialsMenu from "./SocialsMenu";
import FooterCta from "./FooterCta";
import { siteConfig } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";

const Footer = () => {
  const year = new Date().getFullYear();
  const { locale } = useLanguage();

  return (
    <footer className="footer-shell">
      <div className="container-page pt-16 lg:pt-20">
        <FooterCta />

        <div className="footer-grid">
          <div className="footer-nav">
            <Menubar isContactVisible={true} variant="footer" />
          </div>

          <div className="footer-social">
            <SocialsMenu />
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-body-sm text-muted-foreground">©{year} {locale === "fr" ? "Tous droits réservés." : "All rights reserved."}</p>
          <p className="text-body-sm text-muted-foreground">
            {locale === "fr" ? "Conçu par" : "Designed by"} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
