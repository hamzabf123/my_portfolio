import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";
import { languageCopy } from "@/lib/i18n";

const SocialsMenu = () => {
  const { locale } = useLanguage();
  const socials = [
    { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
    ...(siteConfig.instagram ? [{ href: siteConfig.instagram, label: "Instagram", icon: Instagram }] : []),
    ...(siteConfig.linkedIn ? [{ href: siteConfig.linkedIn, label: "LinkedIn", icon: Linkedin }] : []),
    ...(siteConfig.github ? [{ href: siteConfig.github, label: "GitHub", icon: Github }] : []),
  ];

  return (
    <nav aria-label={languageCopy[locale].socialLinks}>
      <ul className="flex space-x-6">
        {socials.map(({ href, label, icon: Icon }) => (
          <li key={label} className="link-subtle">
            <Link
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
            >
              <Icon size={22} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialsMenu;
