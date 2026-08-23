"use client";

import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectImage from "./ProjectImage";
import { useLanguage } from "@/components/LanguageProvider";
import { getProjectCopy, getProjectLabels } from "@/lib/projectLocale";

interface StackedProjectCardProps {
  project: Project;
  index: number;
}

/**
 * The card used in the desktop sticky stack.
 *
 * Deliberately carries no Framer Motion: GSAP owns the transform on these while
 * they scrub, and two libraries writing `transform` on one element fight.
 * Height is capped so a card plus the sticky offset always fits one viewport —
 * a stacking deck whose cards are taller than the screen cannot stack.
 */
export default function StackedProjectCard({
  project: sourceProject,
  index,
}: StackedProjectCardProps) {
  const { locale } = useLanguage();
  const project = getProjectCopy(sourceProject, locale);
  const labels = getProjectLabels(locale);
  const copy = locale === "fr"
    ? { caseStudy: "Voir le projet", visit: "Visiter le site", confidential: "Aper\u00e7u V2 \u00b7 confidentiel" }
    : { caseStudy: "Read case study", visit: "Visit site", confidential: "Confidential preview" };
  const badges = project.metrics?.length
    ? project.metrics.slice(0, 3).map((m) => `${m.value} ${m.label}`)
    : [labels.status[project.status], ...project.platforms.slice(0, 2).map((platform) => labels.platform[platform])];

  return (
    <article className="h-[clamp(380px,56vh,480px)] overflow-hidden rounded-3xl border border-border/60 bg-surface-1 shadow-[0_18px_52px_rgba(0,0,0,0.26)]">
      <div className="grid h-full grid-cols-[1.05fr_0.95fr] items-stretch">
        {/*
          Screenshots are ~2:1 and this column is not, so the image is contained
          rather than cropped. The panel is a step darker than the card so the
          leftover space reads as a frame instead of as dead air.
        */}
        <div className="relative border-r border-border/40 bg-surface-2 p-6">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <ProjectImage
              src={project.images.card}
              alt={project.imageAlt}
              sizes="(max-width: 1280px) 50vw, 640px"
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="flex min-h-0 flex-col justify-center gap-3.5 overflow-hidden p-8 xl:p-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent-cyan/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {labels.category[project.category]}
            </span>
            {project.client && (
              <span className="rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-accent-cyan">
                {project.client}
              </span>
            )}
          </div>

          <h3 className="text-3xl font-semibold tracking-tight text-foreground xl:text-4xl">
            {project.name}
          </h3>

          <p className="text-base text-muted-foreground">{project.tagline}</p>

          <p className="line-clamp-3 text-[15px] leading-relaxed text-muted-foreground/85">
            {project.summary}
          </p>

          <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
            {badges.map((badge) => (
              <li
                key={badge}
                className="text-xs font-medium text-foreground/70"
              >
                {badge}
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border/50 bg-surface-2/50 px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap gap-2.5">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              {copy.caseStudy}
              <ArrowUpRight size={14} className="opacity-70" />
            </Link>

            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-border/80 px-4 text-sm font-medium text-muted-foreground transition-colors hover:border-border-hover hover:text-foreground"
              >
                {copy.visit}
                <ArrowUpRight size={14} className="opacity-60" />
              </Link>
            )}

            {project.links.confidentialPreview && (
              <Link
                href={project.links.confidentialPreview}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 text-sm font-medium text-amber-200 transition-colors hover:border-amber-300/50 hover:bg-amber-400/15"
              >
                <LockKeyhole size={13} className="opacity-75" />
                {copy.confidential}
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
