"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

import projects, { Project, ProjectScreenshot } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        id="projects"
        title="Projets"
        desc="Quelques projets techniques représentatifs de mon parcours."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectLogo = ({
  src,
  title,
  large = false,
}: {
  src?: string;
  title: string;
  large?: boolean;
}) => {
  if (!src) return null;

  return (
    <div
      className={
        large
          ? "relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-lg"
          : "relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white p-2"
      }
    >
      <Image
        src={src}
        alt={`${title} — logo`}
        fill
        unoptimized={src.endsWith(".svg")}
        className="object-contain p-1"
      />
    </div>
  );
};

const ProjectScreenshotImage = ({
  screenshot,
  project,
}: {
  screenshot: ProjectScreenshot;
  project: Project;
}) => {
  const [src, setSrc] = React.useState(screenshot.src);

  React.useEffect(() => {
    setSrc(screenshot.src);
  }, [screenshot.src]);

  return (
    <figure className="space-y-3">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-slate-900">
        <Image
          src={src}
          alt={screenshot.alt || `${project.title} — visuel`}
          fill
          unoptimized={src.endsWith(".svg")}
          className="object-cover"
          onError={() => {
            if (screenshot.fallback && src !== screenshot.fallback) {
              setSrc(screenshot.fallback);
            }
          }}
        />
      </div>

      <figcaption className="text-sm font-semibold text-muted-foreground">
        {screenshot.alt}
      </figcaption>
    </figure>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <button className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-6 text-left transition hover:-translate-y-1 hover:border-white/30 hover:bg-slate-900/80">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_38%)] opacity-70 transition group-hover:opacity-100" />

          <div className="relative flex h-full flex-col justify-between gap-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                  {project.title}
                </h3>
              </div>

              <ProjectLogo src={project.logo} title={project.title} />
            </div>

            <p className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              Voir le détail
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </p>
          </div>
        </button>
      </ResponsiveDialogTrigger>

      <ResponsiveDialogContent className="max-w-5xl overflow-hidden border-white/10 bg-slate-950 p-0">
        <ResponsiveDialogTitle className="sr-only">
          {project.title}
        </ResponsiveDialogTitle>

        <ResponsiveDialogDescription className="sr-only">
          {project.category}
        </ResponsiveDialogDescription>

        <div className="border-b border-white/10 bg-slate-950/95 p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <ProjectLogo src={project.logo} title={project.title} large />

              <div>
                <p className="text-sm font-semibold text-muted-foreground">
                  {project.category}
                </p>

                <h3 className="mt-2 text-3xl font-black text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.github && (
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    Code source
                  </Link>
                </Button>
              )}

              {project.live && (
                <Button asChild size="sm" className="gap-2">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        <ScrollArea className="max-h-[75vh]">
          <div className="space-y-8 p-6">
            {project.screenshots?.length > 0 && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {project.screenshots.map((screenshot) => (
                  <ProjectScreenshotImage
                    key={screenshot.src}
                    screenshot={screenshot}
                    project={project}
                  />
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {project.skills.frontend?.length > 0 && (
                <div>
                  <h4 className="mb-3 text-lg font-black text-white">
                    Interface web
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.skills.frontend.map((skill) => (
                      <span
                        key={skill.title}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-white"
                      >
                        {skill.icon}
                        {skill.title}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.skills.backend?.length > 0 && (
                <div>
                  <h4 className="mb-3 text-lg font-black text-white">
                    Infrastructure / services
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.skills.backend.map((skill) => (
                      <span
                        key={skill.title}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-white"
                      >
                        {skill.icon}
                        {skill.title}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="prose prose-invert max-w-none">
              {project.content}
            </div>
          </div>
        </ScrollArea>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
};

export default ProjectsSection;
