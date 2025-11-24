"use client";

import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Card from "../ui/card";
import config from "@/config";
import { Github } from "@/components/icons/github";

export function Project() {
  const mainCards = projectsData.ES.slice(0, 4).map((project, index) => ({
    id: index + 1,
    content: (
      <div className="relative w-full h-full overflow-hidden flex flex-col">
        {/* Imagen - mitad superior */}
        <div className="h-1/2 w-full overflow-hidden relative bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Textos - mitad inferior */}
        <div className="h-1/2 w-full bg-linear-to-b from-slate-900 to-slate-800 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm sm:text-lg font-bold mb-2 text-(--text-muted)">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  className="bg-(--ring-color) text-(--text-body) border-0 text-x"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Botones de enlace */}
          <div className="flex gap-2 mt-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-2 bg-(--primary) text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-(--secondary-accent) transition-colors duration-300 text-center flex items-center justify-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Visitar
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-2 bg-gray-700 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-gray-600 transition-colors duration-300 text-center flex items-center justify-center gap-1"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <motion.section
      className="w-full py-20 bg-(--background)"
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white tracking-tight">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {mainCards.map((card) => (
            <div key={card.id} className="h-[500px] w-full">
              <Card content={card.content} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
