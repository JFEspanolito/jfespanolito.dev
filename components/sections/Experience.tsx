"use client";

import config from "@/config";
import { motion } from "framer-motion";
import {
  CardFlip,
  CardFlipFront,
  CardFlipBack,
  CardFlipHeader,
  CardFlipTitle,
  CardFlipDescription,
  CardFlipContent,
  CardFlipFooter,
} from "@/components/ui/card-flip";
import { experienceData } from "@/data/resume";
import { Badge } from "../ui/badge";

export function Experience() {
  const lang = "ES";
  const jobs = experienceData[lang] || [];

  return (
    <motion.section
      id="experience"
      className="w-full py-20 bg-(--background-contrast)"
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white tracking-tight">
          Experiencia <span className="text-(--primary)">Profesional</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
          {jobs.map((job) => (
            <div key={job.id} className="flex h-full" id={`job-${job.id}`}>
              <CardFlip
                className="flex w-full h-full"
                hideDefaultButtons={true}
              >
                {({ flip }) => [
                  // --- FRENTE ---
                  <CardFlipFront
                    key="front"
                    className="h-full flex flex-col border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] backdrop-blur-sm hover:border-(--primary) transition-colors p-6"
                  >
                    <CardFlipHeader className="shrink-0">
                      <div className="mb-3">
                        <span className="text-(--secondary-accent) text-x font-mono font-bold bg-(--card) px-2 py-1 rounded-md">
                          {job.period}
                        </span>
                      </div>
                      <CardFlipTitle className="text-2xl text-(----text-body) leading-snug mb-1">
                        {job.role}
                      </CardFlipTitle>
                      <CardFlipDescription className="text-xl font-medium text-(--text-muted)">
                        <p className="mb-2">{job.company}</p>
                      </CardFlipDescription>
                    </CardFlipHeader>

                    <CardFlipContent className="flex-1 my-4">
                      <p className="text-x text-(--text-body)] leading-relaxed mb-4">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-6 mb-4">
                        {job.topskills.map((topSkill) => (
                          <Badge
                            key={topSkill}
                            className="bg-(--ring-color) text-(--text-body) border-0 text-x"
                          >
                            {topSkill}
                          </Badge>
                        ))}
                      </div>
                    </CardFlipContent>

                    <CardFlipFooter className="shrink-0 justify-center mt-auto">
                      <button
                        onClick={() => {
                          flip();
                          // Scroll en móvil
                          if (window.innerWidth < 768) {
                            setTimeout(() => {
                              document
                                .getElementById(`job-${job.id}`)
                                ?.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                            }, 100);
                          }
                        }}
                        className="text-2xl text-(----text-body) hover:text-(--secondary-accent) transition-colors flex items-center gap-1 cursor-pointer animate-pulse"
                      >
                        <p>Clic para detalles ↻</p>
                      </button>
                    </CardFlipFooter>
                  </CardFlipFront>,

                  // --- DORSO ---
                  <CardFlipBack
                    key="back"
                    className="h-full flex flex-col border-[rgba(255,255,255,0.08)] bg-[#161321] backdrop-blur-sm p-6"
                  >
                    <div className="flex-1">
                      <h3 className="text-(--primary)] font-bold mb-6 text-lg uppercase tracking-wider text-center">
                        Actividades
                      </h3>

                      <ul className="list-disc list-inside text-(--text-body) text-sm space-y-2 text-left w-full px-2">
                        {job.activities?.map((activity) => (
                          <li key={activity} className="leading-relaxed">
                            {activity}
                          </li>
                        )) || <li className="list-none">{job.description}</li>}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {job.skills.map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-(--ring-color) text-(--text-body) border-0 text-x"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={flip}
                      className="text-2xl text-(----text-body) hover:text-(--secondary-accent) underline-offset-4 mt-auto mb-6 text-center"
                    >
                      ↻ Volver
                    </button>
                  </CardFlipBack>
                ]}
              </CardFlip>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
