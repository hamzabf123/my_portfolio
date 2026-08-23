"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, Mail, Send } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";

const ENQUIRY_TYPES = [
  { value: "full-time", fr: "Poste à temps plein", en: "Full-time role" },
  { value: "freelance", fr: "Projet freelance / contrat", en: "Freelance / contract project" },
  { value: "ai-product", fr: "Développement de produit IA", en: "AI product development" },
  { value: "mobile", fr: "Application mobile (iOS / Android)", en: "Mobile app (iOS / Android)" },
  { value: "other", fr: "Autre demande", en: "Something else" },
] as const;

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-border/70 bg-surface-2/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-border-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/40";
const labelClass = "block text-sm font-medium text-foreground/90";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  const { locale } = useLanguage();
  const copy = locale === "fr"
    ? {
        title: "Envoyez-moi un message",
        intro: "Dites-moi ce que vous construisez. Je réponds généralement sous 24 heures.",
        disconnected: "Le formulaire n'est pas encore connecté. En attendant, l'email reste le moyen le plus rapide.",
        thanks: "Merci — votre message est bien arrivé.",
        followUp: "Je vous répondrai généralement sous 24 heures à l'adresse indiquée.",
        another: "Envoyer un autre message",
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Email",
        enquiry: "Que recherchez-vous ?",
        optional: "facultatif",
        choose: "Choisissez une option…",
        message: "Message",
        messagePlaceholder: "Quelques mots sur le projet, le calendrier et ce qui représenterait une réussite.",
        send: "Envoyer le message",
        sending: "Envoi…",
        instead: "Écrire directement par email",
        error: "L'envoi a échoué. Écrivez-moi directement par email et je vous répondrai là-bas.",
      }
    : {
        title: "Send me a message",
        intro: "Tell me what you're building. I usually reply within 24 hours.",
        disconnected: "The message form isn't connected yet. Email is the fastest route in the meantime.",
        thanks: "Thanks — that came through.",
        followUp: "I'll get back to you at the address you gave, usually within 24 hours.",
        another: "Send another message",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        enquiry: "What are you looking for?",
        optional: "optional",
        choose: "Choose one…",
        message: "Message",
        messagePlaceholder: "A sentence or two about the project, the timeline, and what success looks like.",
        send: "Send message",
        sending: "Sending…",
        instead: "Email instead",
        error: "That didn't send. Please email me directly and I'll pick it up there.",
      };

  const endpoint = siteConfig.formspreeId
    ? `https://formspree.io/f/${siteConfig.formspreeId}`
    : "";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("submitting");
    setError("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      form.reset();
      setState("success");
    } catch {
      setState("error");
      setError(copy.error);
    }
  }

  return (
    <section id="contact-form" aria-labelledby="contact-form-heading" className="w-full overflow-x-clip">
      <div className="container-page pb-16 md:pb-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border/50 bg-surface-1 p-6 sm:p-8 md:p-10">
          <h2 id="contact-form-heading" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {copy.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy.intro}</p>

          {!endpoint ? (
            <div className="mt-8 rounded-xl border border-border/60 bg-surface-2/40 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">{copy.disconnected}</p>
              <Link href={`mailto:${siteConfig.email}`} className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
                <Mail size={16} aria-hidden />
                {siteConfig.email}
              </Link>
            </div>
          ) : state === "success" ? (
            <div role="status" className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
              <p className="text-sm font-medium text-foreground">{copy.thanks}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{copy.followUp}</p>
              <button type="button" onClick={() => setState("idle")} className="mt-4 text-sm font-medium text-accent-cyan hover:underline">
                {copy.another}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className={labelClass}>{copy.name}</label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder={copy.namePlaceholder} className={`mt-2 ${inputClass}`} />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>{copy.email}</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={`mt-2 ${inputClass}`} />
              </div>

              <div>
                <label htmlFor="enquiryType" className={labelClass}>
                  {copy.enquiry} <span className="font-normal text-muted-foreground/70">({copy.optional})</span>
                </label>
                <select id="enquiryType" name="enquiryType" defaultValue="" className={`mt-2 ${inputClass}`}>
                  <option value="">{copy.choose}</option>
                  {ENQUIRY_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>{type[locale]}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>{copy.message}</label>
                <textarea id="message" name="message" required rows={5} placeholder={copy.messagePlaceholder} className={`mt-2 resize-y ${inputClass}`} />
              </div>

              {state === "error" && <p role="alert" className="text-sm text-red-400">{error}</p>}

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                <button type="submit" disabled={state === "submitting"} className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-60">
                  {state === "submitting" ? <><Loader2 size={16} className="animate-spin" aria-hidden />{copy.sending}</> : <><Send size={16} aria-hidden />{copy.send}</>}
                </button>
                <Link href={`mailto:${siteConfig.email}`} className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-border/80 px-6 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface-2/50">
                  <Mail size={16} aria-hidden />{copy.instead}
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
