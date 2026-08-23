"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, LockKeyhole } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getProjectCopy, getProjectLabels } from "@/lib/projectLocale";
import { caseStudySectionOrder, hasCaseStudyContent, type CaseStudySection, type Project } from "@/data/projects";
import { projectSchema } from "@/lib/structuredData";
import JsonLd from "@/components/JsonLd";
import ProjectImage from "@/components/projects/ProjectImage";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Reveal from "@/components/motion/Reveal";
import MaskReveal from "@/components/motion/MaskReveal";
import WordScrub from "@/components/motion/WordScrub";

interface ProjectCaseStudyProps {
  project: Project;
  prev?: Project;
  next?: Project;
}

function MetaBar({ project, locale }: { project: Project; locale: "fr" | "en" }) {
  const labels = getProjectLabels(locale);
  const items = [
    project.role && { label: labels.role, value: project.role },
    { label: labels.platforms, value: project.platforms.map((platform) => labels.platform[platform]).join(" · ") },
    { label: labels.year, value: project.year },
    { label: locale === "fr" ? "Statut" : "Status", value: labels.status[project.status] },
    project.client && { label: labels.client, value: project.client },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="rounded-2xl border border-border/50 bg-surface-1 p-6 sm:p-8">
      <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/60">{item.label}</dt>
            <dd className="mt-1.5 text-sm text-foreground/85">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-7 border-t border-border/40 pt-6">
        <h2 className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/60">{labels.stack}</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-md border border-border/50 bg-surface-2/40 px-2.5 py-1 text-[13px] text-muted-foreground">{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MetricStrip({ project }: { project: Project }) {
  if (!project.metrics?.length) return null;
  const columns = project.metrics.length === 1 ? "sm:grid-cols-1" : project.metrics.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3";

  return (
    <div className={`mt-4 grid grid-cols-1 gap-4 ${columns}`}>
      {project.metrics.map((metric) => (
        <div key={metric.label} className="rounded-2xl border border-border/50 bg-surface-1 px-6 py-5" title={metric.source}>
          <p className="text-3xl font-semibold tracking-tight text-foreground">{metric.value}</p>
          <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
          {metric.source && <p className="mt-2 text-[11px] text-muted-foreground/60">{metric.source}</p>}
        </div>
      ))}
    </div>
  );
}

export default function ProjectCaseStudy({ project: sourceProject, prev: sourcePrev, next: sourceNext }: ProjectCaseStudyProps) {
  const { locale } = useLanguage();
  const project = getProjectCopy(sourceProject, locale);
  const prev = sourcePrev ? getProjectCopy(sourcePrev, locale) : undefined;
  const next = sourceNext ? getProjectCopy(sourceNext, locale) : undefined;
  const labels = getProjectLabels(locale);
  const showCaseStudy = hasCaseStudyContent(project);
  const sections = caseStudySectionOrder
    .map((key) => ({ key, section: project.caseStudy?.[key] }))
    .filter((entry) => entry.section && (entry.section.body.length > 0 || entry.section.bullets?.length)) as {
      key: (typeof caseStudySectionOrder)[number];
      section: CaseStudySection;
    }[];
  const links = [
    project.links.live && { label: locale === "fr" ? "Visiter le produit" : "Visit product", href: project.links.live },
    project.links.appStore && { label: "App Store", href: project.links.appStore },
    project.links.playStore && { label: "Google Play", href: project.links.playStore },
    project.links.source && { label: locale === "fr" ? "Code source" : "Source", href: project.links.source },
    project.links.confidentialPreview && { label: locale === "fr" ? "Aperçu V2 · confidentiel" : "Confidential preview", href: project.links.confidentialPreview, confidential: true },
  ].filter(Boolean) as { label: string; href: string; confidential?: boolean }[];

  return (
    <main className="w-full overflow-x-clip">
      <JsonLd data={projectSchema(project)} />
      <ScrollProgress />
      <article className="container-page py-10 md:py-14 lg:py-16">
        <nav aria-label={locale === "fr" ? "Fil d'Ariane" : "Breadcrumb"}>
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li><Link href="/projects" className="link-subtle">{locale === "fr" ? "Projets" : "Projects"}</Link></li>
            <li aria-hidden className="text-border"><ChevronRight size={14} /></li>
            <li aria-current="page" className="text-foreground/80">{project.name}</li>
          </ol>
        </nav>

        <header className="mt-8 md:mt-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-accent-cyan/25 bg-accent-cyan/5 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-accent-cyan/90">{labels.category[project.category]}</span>
            {project.client && <span className="rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-3 py-1 text-[11px] font-medium tracking-wide text-accent-cyan">{project.client}</span>}
            {project.status === "Production" && <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-surface-2/60 px-2.5 py-1 text-[11px] font-medium tracking-wide text-muted-foreground"><span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" />{locale === "fr" ? "En production" : "Live in production"}</span>}
          </div>

          <MaskReveal as="h1" immediate className="mt-5 max-w-4xl text-[clamp(1.875rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
            <span className="line-mask"><span>{project.name}</span></span>
          </MaskReveal>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{project.tagline}</p>

          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border/50 bg-surface-2 p-3 shadow-soft-lg sm:p-5">
            <ProjectImage src={project.images.hero} alt={project.imageAlt} sizes="(max-width: 1280px) 100vw, 1280px" className="rounded-lg" priority />
          </div>
        </header>

        <Reveal variant="blur-up" className="mt-10 flex flex-col gap-4 md:mt-12">
          <MetaBar project={project} locale={locale} />
          <MetricStrip project={project} />
        </Reveal>

        {showCaseStudy ? (
          <div className="mt-14 gap-16 md:mt-20 lg:grid lg:grid-cols-[180px_minmax(0,1fr)]">
            <nav aria-label={locale === "fr" ? "Sections de l'étude de cas" : "Case study sections"} className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
              <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/60">{locale === "fr" ? "Sur cette page" : "On this page"}</p>
              <ol className="mt-4 space-y-2.5">
                {sections.map(({ key, section }, index) => <li key={key}><Link href={`#${key}`} className="group flex items-baseline gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"><span className="font-mono text-[11px] text-muted-foreground/50">{String(index + 1).padStart(2, "0")}</span>{section.heading}</Link></li>)}
              </ol>
            </nav>

            <div className="max-w-3xl space-y-14">
              {sections.map(({ key, section }, index) => (
                <section key={key} id={key} className="scroll-mt-28">
                  <div className="flex items-center gap-3"><span className="font-mono text-xs text-accent-cyan/70">{String(index + 1).padStart(2, "0")}</span><span aria-hidden className="h-px flex-1 bg-gradient-to-r from-border to-transparent" /></div>
                  <MaskReveal as="h2" className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"><span className="line-mask"><span>{section.heading}</span></span></MaskReveal>
                  {section.body.map((paragraph, paragraphIndex) => paragraphIndex === 0 && key === "problem" ? <WordScrub key={paragraph.slice(0, 48)} text={paragraph} className="mt-4 text-lg leading-relaxed text-foreground/90 md:text-xl md:leading-relaxed" /> : <p key={paragraph.slice(0, 48)} className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[17px] md:leading-relaxed">{paragraph}</p>)}
                  {section.bullets && <ul className="mt-5 space-y-3">{section.bullets.map((bullet) => <li key={bullet.slice(0, 48)} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground md:text-[17px]"><span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent-cyan/70" /><span>{bullet}</span></li>)}</ul>}
                </section>
              ))}
            </div>
          </div>
        ) : (
          <p className="mx-auto mt-14 max-w-3xl text-base leading-relaxed text-muted-foreground md:mt-20">
            {locale === "fr" ? "La présentation détaillée de ce projet est en cours. En attendant, le produit est accessible ci-dessous ou vous pouvez" : "A detailed write-up of this project is in progress. In the meantime, the live product is linked below — or"}{" "}<Link href="/contact" className="link-subtle underline">{locale === "fr" ? "me contacter" : "get in touch"}</Link>{locale === "fr" ? " pour en parler." : " and I’ll walk you through what I built."}
          </p>
        )}

        {project.images.gallery?.length ? <section className="mt-16 md:mt-20"><h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{locale === "fr" ? "Galerie" : "Gallery"}</h2><div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">{project.images.gallery.map((shot) => <figure key={shot.src}><div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/50 bg-surface-2 p-2"><ProjectImage src={shot.src} alt={shot.alt} sizes="(max-width: 640px) 100vw, 50vw" className="rounded-lg" /></div><figcaption className="mt-3 text-sm text-muted-foreground">{shot.caption}</figcaption></figure>)}</div></section> : null}

        {links.length > 0 && <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-16">{links.map((link, index) => <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={["inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors", index === 0 ? "bg-foreground text-background hover:bg-foreground/90" : link.confidential ? "border border-amber-400/30 bg-amber-400/10 text-amber-200 hover:border-amber-300/50 hover:bg-amber-400/15" : "border border-border/80 text-foreground hover:border-border-hover hover:bg-surface-2/50"].join(" ")}>{link.confidential && <LockKeyhole size={13} className="opacity-75" />}{link.label}<ArrowUpRight size={14} className="opacity-70" /></Link>)}</div>}

        <nav aria-label={locale === "fr" ? "Navigation entre les projets" : "Project navigation"} className="mt-16 grid grid-cols-1 gap-4 border-t border-border/40 pt-10 sm:grid-cols-2 md:mt-20">
          {prev && <Link href={`/projects/${prev.slug}`} className="group rounded-xl border border-border/50 bg-surface-1 p-5 transition-colors hover:border-border-hover"><span className="flex items-center gap-1.5 text-xs text-muted-foreground"><ArrowLeft size={14} />{locale === "fr" ? "Précédent" : "Previous"}</span><span className="mt-2 block font-medium text-foreground">{prev.name}</span></Link>}
          {next && <Link href={`/projects/${next.slug}`} className="group rounded-xl border border-border/50 bg-surface-1 p-5 text-right transition-colors hover:border-border-hover sm:col-start-2"><span className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">{locale === "fr" ? "Suivant" : "Next"}<ArrowRight size={14} /></span><span className="mt-2 block font-medium text-foreground">{next.name}</span></Link>}
        </nav>

        <div className="mt-10"><Link href="/projects" className="link-subtle inline-flex items-center gap-1.5 text-sm"><ArrowLeft size={16} aria-hidden />{locale === "fr" ? "Retour aux projets" : "Back to all projects"}</Link></div>
      </article>
    </main>
  );
}
