"use client";

import { useLanguage } from "@/components/LanguageProvider";

const TECH_BADGES = [
  {
    label: "Figma",
    className: "top-[2%] left-[0%] lg:top-[4%] lg:-left-[2%]",
  },
  {
    label: "Illustrator",
    className: "top-[2%] right-[0%] lg:top-[4%] lg:-right-[2%]",
  },
  {
    label: "Photoshop",
    className: "top-[36%] -left-[6%] lg:top-[38%] lg:-left-[10%]",
  },
  {
    label: "React",
    className: "top-[36%] -right-[2%] lg:top-[38%] lg:-right-[6%]",
  },
  {
    label: "Tailwind CSS",
    className: "bottom-[14%] left-[0%] lg:bottom-[16%] lg:-left-[2%]",
  },
  {
    label: "Spline 3D",
    className: "bottom-[14%] right-[0%] lg:bottom-[16%] lg:-right-[2%]",
  },
  {
    label: "Design & IA",
    className: "bottom-[0%] left-1/2 -translate-x-1/2 lg:bottom-[2%]",
    compact: true,
  },
] as const;

const TABLET_BADGES = TECH_BADGES.slice(0, 4);

function TechBadge({
  label,
  compact = false,
}: {
  label: string;
  compact?: boolean;
}) {
  return (
    <span
      className={[
        "relative z-20 inline-flex whitespace-nowrap rounded-full border border-border/60 bg-surface-1 px-2.5 py-1 font-medium text-foreground/90 shadow-soft md:px-3 md:py-1.5",
        compact ? "text-[10px] md:text-[11px]" : "text-[11px] md:text-xs",
      ].join(" ")}
    >
      {label}
    </span>
  );
}

export default function HeroPortrait() {
  const { locale } = useLanguage();
  const badges = TECH_BADGES.map((badge) =>
    badge.label === "Design & IA"
      ? { ...badge, label: locale === "fr" ? "Design & IA" : "Design & AI" }
      : badge
  );

  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px] md:max-w-[min(100%,300px)] lg:max-w-[min(100%,360px)] xl:max-w-[min(100%,400px)] [@media(min-height:900px)]:lg:max-w-[min(100%,420px)]">
      {/* Desktop — all badges above portrait */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className={`absolute z-20 ${badge.className}`}
          >
            <TechBadge
              label={badge.label}
              compact={"compact" in badge ? badge.compact : false}
            />
          </div>
        ))}
      </div>

      {/* Tablet — 4 badges */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden md:block lg:hidden">
        {TABLET_BADGES.map((badge) => (
          <div
            key={badge.label}
            className={`absolute z-20 ${badge.className}`}
          >
            <TechBadge label={badge.label} />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto aspect-square w-full">
        {/* Glow */}
        <div
          className="absolute inset-[10%] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(187 85% 53% / 0.1) 0%, hsl(258 90% 66% / 0.06) 50%, transparent 70%)",
          }}
        />

        {/* Rotating ring */}
        <div
          className="absolute inset-0 rounded-full p-px"
          style={{
            background:
              "conic-gradient(from 0deg, hsl(187 85% 53% / 0.2), hsl(258 90% 66% / 0.12), transparent 45%, hsl(187 85% 53% / 0.15))",
          }}
        >
          <div className="h-full w-full rounded-full bg-background/85" />
        </div>

        {/* Glass ring */}
        <div className="absolute inset-[2%] rounded-full border border-white/[0.06] bg-white/[0.02]" />

        {/* Portrait */}
        <div className="absolute inset-[5%] overflow-hidden rounded-full border border-border/30">
          <img
            src="/media/projects/hamza-profile.webp"
            alt={locale === "fr" ? "Hamza Boufass — UX/UI Designer et Digital Designer" : "Hamza Boufass — UX/UI Designer and Digital Designer"}
            className="h-full w-full object-cover object-top"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 440px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
