import { AboutMe } from "@/components/sections/AboutMe";
import { Certificate } from "@/components/sections/Certificate";
import { Experience } from "@/components/sections/Experience";
import { Project } from "@/components/sections/Projects";

export default function Home() {
  return (
<main className="flex min-h-screen flex-col">
      
      {/* Sección 1: About Me - Fondo Base (#0a0811) */}
      <AboutMe />
      
      {/* Sección 2: Experiencia - Fondo Contrast (#13101f) */}
      <Experience />
      
      {/* Sección 3: Proyectos - Fondo Base (#0a0811) */}
      <Project />
      
      {/* Sección 4: Certificaciones - Fondo Contrast (#13101f) */}
      <Certificate />

    </main>
  );
}