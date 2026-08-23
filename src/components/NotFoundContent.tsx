"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function NotFoundContent() {
  const { locale } = useLanguage();
  const copy = locale === "fr"
    ? { title: "Page introuvable", description: "Ce lien est peut-être obsolète. Retournez à l'accueil ou parcourez les projets.", home: "Retour à l'accueil", projects: "Voir les projets" }
    : { title: "Page not found", description: "That link may be outdated. Head back home or browse projects.", home: "Go home", projects: "View projects" };

  return (
    <main className="container-page flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-accent-cyan/80">404</p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{copy.title}</h1>
      <p className="mt-3 max-w-md text-muted-foreground">{copy.description}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-accent px-6 py-3">{copy.home}</Link>
        <Link href="/projects" className="btn-secondary px-6 py-3">{copy.projects}</Link>
      </div>
    </main>
  );
}
