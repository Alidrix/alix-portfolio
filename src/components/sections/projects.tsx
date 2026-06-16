"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

import projects, { Project } from "@/data/projects";
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

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <button className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 text-left transition hover:border-white/30 hover:bg-slate-900/80">
          <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
            <Image
              src={project.src}
              alt={project.title}
              fill
              unoptimized={project.src.endsWith(".svg")}
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-2 p-5">
            <p className="text-sm font-semibold text-muted-foreground">
              {project.category}
            </p>

            <h3 className="text-2xl font-black text-white">
              {project.title}
            </h3>

            <p className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              Voir le détail
              <ArrowUpRight className="h-4 w-4" />
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
          <p className="text-sm font-semibold text-muted-foreground">
            {project.category}
          </p>

          <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <h3 className="text-3xl font-black text-white">
              {project.title}
            </h3>

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
                {project.screenshots.map((screenshot) => {
                  const imagePath = screenshot.startsWith("/")
                    ? screenshot
                    : `/assets/projects-screenshots/${project.id}/${screenshot}`;

                  return (
                    <div
                      key={screenshot}
                      className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-slate-900"
                    >
                      <Image
                        src={imagePath}
                        alt={`${project.title} — capture`}
                        fill
                        unoptimized={imagePath.endsWith(".svg")}
                        className="object-cover"
                      />
                    </div>
                  );
                })}
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
