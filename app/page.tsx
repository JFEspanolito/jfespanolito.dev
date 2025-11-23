import { AboutMe } from "@/components/sections/AboutMe";
import { Experience } from "@/components/sections/Experience";
// import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
<main className="flex min-h-screen flex-col">
      
      {/* Sección 1: Fondo Base (#0a0811) */}
      <AboutMe />
      
      {/* Sección 2: Fondo Contrast (#13101f) */}
      <Experience />
      
      {/* Sección 3: Proyectos */}
      {/* <Projects /> */}

    </main>
  );
}