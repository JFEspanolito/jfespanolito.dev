"use client";

import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import Card from "../ui/card";
import { Github } from "@/components/icons/github";

type ProjectItem = (typeof projectsData.ES)[number];

const CardContent = (project: ProjectItem) => {
  const hasLink = !!project.link?.trim();
  const hasGithub = !!project.github?.trim();
  const techList = project.tech ?? []; // evita crash si falta tech

  return (
    <div className="flex flex-col h-full overflow-hidden rounded-2xl bg-slate-900">
      <div className="w-full aspect-[16/9] relative bg-slate-950 overflow-hidden">
        <img
          src={project.image || "/fallback.webp"} // evita crash si falta image
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-1 bg-linear-to-b from-slate-900 to-slate-800">
        <h3 className="text-sm sm:text-lg font-bold mb-2 text-(--text-muted)">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-300 mb-3 flex-1">
          {project.description}
        </p>

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

        {(hasLink || hasGithub) && (
          <div className="flex gap-2 mt-2">
            {hasLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-2 bg-(--primary) text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-(--secondary-accent) transition-colors duration-300 text-center flex items-center justify-center gap-1"
              >
                Visitar
              </a>
            )}

            {hasGithub && (
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
      className="w-full py-20 bg-(--background)"
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white tracking-tight">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 auto-rows-fr">
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
