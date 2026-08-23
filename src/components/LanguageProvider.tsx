"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { defaultLocale, type Locale } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "hamza-portfolio-locale";

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY);
    if (savedLocale === "fr" || savedLocale === "en") setLocale(savedLocale);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (nextLocale: Locale) => {
        setLocale(nextLocale);
        window.localStorage.setItem(STORAGE_KEY, nextLocale);
      },
    }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider.");
  }
  return context;
}
