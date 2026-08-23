"use client";

import type { Project } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";
import { getProjectLabels } from "@/lib/projectLocale";

interface ProjectMetaRowProps {
  project: Project;
}

export default function ProjectMetaRow({ project }: ProjectMetaRowProps) {
  const { locale } = useLanguage();
  const labels = getProjectLabels(locale);
  const items = [
    project.role && { label: labels.role, value: project.role },
    {
      label: locale === "fr" ? "Plateforme" : "Platform",
      value: project.platforms.map((platform) => labels.platform[platform]).join(" · "),
    },
    { label: labels.year, value: project.year },
    project.client && { label: labels.client, value: project.client },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-4">
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <dt className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/55">
            {item.label}
          </dt>
          <dd className="mt-1 text-[13px] leading-snug text-foreground/80">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
