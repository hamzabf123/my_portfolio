"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { defaultLocale, getPageTitle, type Locale } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "hamza-portfolio-locale";

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const pathname = usePathname();

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY);
    if (savedLocale === "fr" || savedLocale === "en") setLocale(savedLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    const title = `${getPageTitle(locale, pathname)} | Hamza Boufass`;
    const updateTitle = () => {
      if (document.title !== title) document.title = title;
    };

    updateTitle();
    const titleUpdate = window.setTimeout(updateTitle, 0);
    const headObserver = new MutationObserver(updateTitle);
    headObserver.observe(document.head, { childList: true, subtree: true, characterData: true });

    return () => {
      window.clearTimeout(titleUpdate);
      headObserver.disconnect();
    };
  }, [locale, pathname]);

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
