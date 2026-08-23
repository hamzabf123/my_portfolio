export type Locale = "fr" | "en";
export type LocalizedText = Record<Locale, string>;
export type LocalizedList<T> = Record<Locale, T[]>;

export const defaultLocale: Locale = "fr";

export const languageCopy = {
  fr: {
    languageSelector: "Choisir la langue",
    skipToContent: "Aller au contenu principal",
    loading: "Chargement",
    scrollToTop: "Remonter en haut",
    scrollToContent: "Voir le contenu",
    socialLinks: "Liens sociaux",
    email: "Email",
    pageTitles: { home: "Accueil", about: "Profil", contact: "Contact", projects: "Projets", notFound: "Page introuvable" },
  },
  en: {
    languageSelector: "Choose language",
    skipToContent: "Skip to main content",
    loading: "Loading",
    scrollToTop: "Scroll to top",
    scrollToContent: "Scroll to content",
    socialLinks: "Social links",
    email: "Email",
    pageTitles: { home: "Home", about: "Profile", contact: "Contact", projects: "Projects", notFound: "Page not found" },
  },
} as const;

export function getPageTitle(locale: Locale, pathname: string) {
  const copy = languageCopy[locale].pageTitles;
  if (pathname.startsWith("/about")) return copy.about;
  if (pathname.startsWith("/contact")) return copy.contact;
  if (pathname.startsWith("/projects")) return copy.projects;
  if (pathname === "/404") return copy.notFound;
  return copy.notFound;
}
