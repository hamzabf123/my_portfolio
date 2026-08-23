"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const languages: { value: Locale; label: string }[] = [
  { value: "fr", label: "FR" },
  { value: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="inline-flex rounded-lg border border-border/70 bg-surface-1/70 p-0.5 text-[11px] font-semibold tracking-wide"
      aria-label="Language selector"
    >
      {languages.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setLocale(value)}
          className={`rounded-md px-2 py-1 transition-colors ${
            locale === value
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={locale === value}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
