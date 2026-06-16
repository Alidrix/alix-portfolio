"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin, Mail } from "lucide-react";
import { usePreloader } from "../preloader";
import ScrollDownIcon from "../scroll-down-icon";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center px-6 md:px-12 lg:px-24"
    >
      {!isLoading && (
        <div className="z-10 flex max-w-4xl flex-col items-start gap-6">
          <div className="space-y-3">
            <p className="text-xl font-bold text-muted-foreground md:text-2xl">
              Bonjour, je suis
            </p>

            <h1 className="text-7xl font-black leading-none tracking-tight text-white md:text-8xl lg:text-9xl">
              {config.author.split(" ")[0]}
              <br />
              {config.author.split(" ").slice(1).join(" ")}
            </h1>

            <p className="max-w-3xl text-xl font-bold text-muted-foreground md:text-2xl">
              Ingénieur Infrastructure, Réseau & Cybersécurité
            </p>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Profil hybride orienté infrastructure, réseau, sécurité offensive
              et défense opérationnelle. Je construis, sécurise et teste des
              environnements techniques avec une approche concrète, méthodique
              et orientée preuves.
            </p>
          </div>

          <div className="flex w-full max-w-sm flex-col gap-3">
            <Button asChild className="w-full justify-center gap-2">
              <Link href="/resume">
                <File className="h-5 w-5" />
                Voir mon CV
              </Link>
            </Button>

            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" className="gap-2">
                <Link href={`mailto:${config.email}`}>
                  <Mail className="h-5 w-5" />
                  Me contacter
                </Link>
              </Button>

              <Button asChild variant="outline" size="icon" aria-label="GitHub">
                <Link
                  href={config.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="icon" aria-label="LinkedIn">
                <Link
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      <ScrollDownIcon />
    </section>
  );
};

export default HeroSection;
