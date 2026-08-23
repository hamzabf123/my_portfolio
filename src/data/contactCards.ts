import { Github, Linkedin, Mail, MapPin, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/site";
import type { LocalizedText } from "@/lib/i18n";

export type ContactCardType = "email" | "link" | "location";

export interface ContactCardData {
  id: string;
  title: LocalizedText;
  value?: LocalizedText;
  description: LocalizedText;
  icon: LucideIcon;
  type: ContactCardType;
  href?: string;
  buttonLabel?: LocalizedText;
}

export const contactCards: ContactCardData[] = [
  {
    id: "email",
    title: { fr: "Email", en: "Email" },
    value: { fr: siteConfig.email, en: siteConfig.email },
    description: { fr: "Je réponds généralement sous 24 heures.", en: "Usually replies within 24 hours." },
    icon: Mail,
    type: "email",
    href: `mailto:${siteConfig.email}`,
  },
  {
    id: "linkedin",
    title: { fr: "LinkedIn", en: "LinkedIn" },
    description: { fr: "Mon réseau professionnel.", en: "Professional networking." },
    icon: Linkedin,
    type: "link",
    href: siteConfig.linkedIn,
    buttonLabel: { fr: "Voir le profil", en: "Visit profile" },
  },
  {
    id: "github",
    title: { fr: "GitHub", en: "GitHub" },
    description: { fr: "Explorer mes projets ouverts.", en: "Explore open-source work." },
    icon: Github,
    type: "link",
    href: siteConfig.github,
    buttonLabel: { fr: "Voir les projets", en: "View projects" },
  },
  {
    id: "location",
    title: { fr: "Localisation", en: "Location" },
    value: { fr: siteConfig.location.fr, en: "Casablanca, Morocco" },
    description: { fr: "Ouvert aux opportunités à distance.", en: "Open to remote opportunities." },
    icon: MapPin,
    type: "location",
  },
];
