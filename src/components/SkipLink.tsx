"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { languageCopy } from "@/lib/i18n";

export default function SkipLink() {
  const { locale } = useLanguage();
  return (
    <a href="#main-content" className="skip-link">
      {languageCopy[locale].skipToContent}
    </a>
  );
}
