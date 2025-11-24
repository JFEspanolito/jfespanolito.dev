"use client";

import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import Card from "../ui/card";
import { Github } from "@/components/icons/github";

type ProjectItem = (typeof projectsData.ES)[number];

const CardContent = (project: ProjectItem) => {
  const techList = project.tech ?? [];
  const links = Array.isArray(project.link) ? project.link : [];
  const hasGithub = !!project.github?.trim();

  return (
    <div className="flex flex-col h-full overflow-hidden rounded-2xl bg-slate-900">
      {/* Imagen */}
      <div className="w-full aspect-video relative bg-slate-950 overflow-hidden">
        <img
          src={project.image || "/fallback.webp"}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-1 bg-linear-to-b from-slate-900 to-slate-800">
        {/* Título */}
        <h3 className="text-sm sm:text-lg font-bold mb-2 text-(--text-muted)">
          {project.title}
        </h3>

        {/* Status */}
        {project.status && (
          <span className="text-xs font-semibold text-(--secondary-accent) tracking-wide mb-3">
            {project.status}
          </span>
        )}

        {/* Descripción */}
        <p className="text-xs sm:text-sm text-gray-300 mb-4 flex-1">
          {project.description}
        </p>

        {/* TECNOLOGÍAS */}
        <div className="flex flex-wrap gap-2 mb-3">
          {techList.map((tech) => (
            <Badge
              key={tech}
              className="bg-(--ring-color) text-(--text-body) border-0 text-x"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* BOTONES */}
        {(links.length > 0 || hasGithub) && (
          <div className="flex flex-col gap-2 mt-2">
            {/* links dinámicos */}
            {links.map((lnk, index) => (
              <a
                key={index}
                href={lnk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3 py-2 bg-(--primary) text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-(--secondary-accent) transition-colors duration-300 text-center flex items-center justify-center gap-1"
              >
                {lnk.label}
              </a>
            ))}

            {/* GitHub */}
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3 py-2 bg-gray-700 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-gray-600 transition-colors duration-300 text-center flex items-center justify-center gap-1"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export function Project() {
  const mainCards = projectsData.ES.slice(0, 4).map((project, index) => ({
    id: index + 1,
    content: CardContent(project),
  }));

  return (
    <motion.section
      className="w-full py-20"
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white tracking-tight">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-8 auto-rows-fr">
          {mainCards.map((card) => (
            <div key={card.id} className="h-full min-h-[520px]">
              <Card content={card.content} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
