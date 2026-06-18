"use client";

import { useState, type CSSProperties } from "react";
import { SKILLS, type Skill } from "@/data/constants";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const skills = Object.values(SKILLS);
const keyboardRows = [skills.slice(0, 6), skills.slice(6, 13), skills.slice(13)];

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skills[0]);

  return (
    <SectionWrapper
      id="skills"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[10%] top-1/3 h-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-cyan-400/10"
      />
      <SectionHeader
        id="skills"
        title="Stack technique"
        desc="(indice : appuyer sur une touche)"
        className="static mb-8 md:mb-12"
      />

      <div className="pointer-events-auto relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative [perspective:1400px]">
          <div className="absolute inset-x-[8%] bottom-[-8%] h-1/3 rounded-[50%] bg-slate-950/50 blur-3xl dark:bg-black/80" />
          <div className="relative origin-center rounded-[2rem] border border-white/15 bg-slate-950/90 p-3 shadow-[0_35px_80px_-20px_rgba(2,6,23,0.9),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl sm:p-5 md:[transform:rotateX(8deg)]">
            <div className="mb-3 flex items-center justify-between px-2 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-500 sm:text-xs">
              <span>Alix // cyber stack</span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                système prêt
              </span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {keyboardRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={cn(
                    "grid gap-2 sm:gap-3",
                    rowIndex === 0 && "grid-cols-3 sm:grid-cols-6",
                    rowIndex === 1 && "grid-cols-4 sm:grid-cols-7",
                    rowIndex === 2 && "grid-cols-3 sm:grid-cols-6",
                    rowIndex === 1 && "sm:px-5",
                    rowIndex === 2 && "sm:px-12"
                  )}
                >
                  {row.map((skill) => {
                    const isSelected = selectedSkill.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        aria-label={`${skill.label} : ${skill.shortDescription}`}
                        aria-pressed={isSelected}
                        onClick={() => setSelectedSkill(skill)}
                        onFocus={() => setSelectedSkill(skill)}
                        onMouseEnter={() => setSelectedSkill(skill)}
                        style={{ "--skill-color": skill.color } as CSSProperties}
                        className={cn(
                          "group relative flex min-h-24 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border p-2",
                          "bg-gradient-to-b from-slate-700/90 to-slate-950 text-slate-100",
                          "shadow-[0_6px_0_#020617,0_9px_15px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)]",
                          "transition-all duration-150 hover:-translate-y-1 hover:border-[var(--skill-color)] hover:shadow-[0_8px_0_#020617,0_12px_25px_-8px_var(--skill-color)]",
                          "focus-visible:-translate-y-1 focus-visible:border-[var(--skill-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--skill-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                          "active:translate-y-1 active:shadow-[0_2px_0_#020617,0_4px_8px_rgba(0,0,0,0.4)]",
                          isSelected &&
                            "border-[var(--skill-color)] bg-gradient-to-b from-slate-600 to-slate-900"
                        )}
                      >
                        <span
                          aria-hidden
                          className={cn(
                            "absolute inset-x-4 top-0 h-px bg-[var(--skill-color)] opacity-0 shadow-[0_0_12px_var(--skill-color)] transition-opacity",
                            "group-hover:opacity-100 group-focus-visible:opacity-100",
                            isSelected && "opacity-100"
                          )}
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={skill.icon}
                          alt=""
                          width={44}
                          height={44}
                          className="size-8 object-contain drop-shadow-[0_2px_5px_rgba(0,0,0,0.55)] transition-transform duration-200 group-hover:scale-110 group-focus-visible:scale-110 sm:size-10"
                        />
                        <span className="text-center text-[10px] font-semibold leading-tight sm:text-xs">
                          {skill.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            <div
              className="mt-5 min-h-32 rounded-2xl border border-white/10 bg-black/35 p-5 shadow-inner sm:flex sm:items-center sm:gap-5"
              aria-live="polite"
              aria-atomic="true"
            >
              <div
                style={{ backgroundColor: selectedSkill.color }}
                className="mb-4 h-12 w-1 shrink-0 rounded-full sm:mb-0 sm:h-16"
              />
              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  Touche sélectionnée
                </p>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {selectedSkill.label}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  {selectedSkill.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
