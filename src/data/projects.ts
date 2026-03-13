const images = import.meta.glob<{ default: ImageMetadata }>("../assets/projects/*.{jpeg,jpg,png,gif,webp}", { eager: true });

export const projectsData = {
  ES: [
    {
      id: 1,
      title: "Ecos de las Bestias",
      status: "En Desarrollo",
      description:
        "Sistema de rol táctico-narrativo propio basado en reglas y plataforma web integral. Incluye gestión de personajes, bestiario dinámico y herramientas de campaña, con mecánicas de combate y progresión soportadas por modelos matemáticos para el balance de habilidades.",
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Diseño de Sistemas",
        "Diseño de Mecánicas de Juego",
        "Modelos Matemáticos",
        "Desarrollo Full-Stack",
        "Vercel",
      ],
      topskills: ["Next.js", "Diseño de Sistemas"],
      link: [
        {
          url: "https://echoesbeasts.com",
          label: "Visítala",
        },
      ],
      image: images["../assets/projects/ecosbanner.webp"].default,
      imgBgPos: "background-size: 100%; background-position: 50% 100%;",
    },
    {
      id: 2,
      title: "Heladería Ocho MX",
      status: "En Desarrollo",
      description:
        "Portal web para marca de helados artesanales con arquitectura static-first. Optimizado para rendimiento y SEO, permite la exploración del menú, gestión de marca y solicitudes de cotización para eventos.",
      skills: ["Astro", "TypeScript", "Tailwind", "Vercel", "Optimización SEO"],
      topskills: ["Astro"],
      link: [
        {
          url: "https://ochomx-com.vercel.app",
          label: "Visítala",
        },
      ],
      image: images["../assets/projects/ochoBanner.webp"].default,
      imgBgPos: "background-position: 50% 130%;",
    },
    {
      id: 3,
      title: "Midrava Art",
      status: "Finalizado",
      description:
        "Sitio web de portafolio para artista digital enfocado en presentación visual, rendimiento y accesibilidad mediante una arquitectura de sitio estático.",
      skills: ["Astro", "TypeScript", "Tailwind", "Vercel", "Accesibilidad"],
      topskills: ["Astro"],
      link: [
        {
          url: "https://www.midrava.com/",
          label: "Visítala",
        },
      ],
      image: images["../assets/projects/midrava.webp"].default,
      imgBgPos: "background-position: 0% 100%; background-size:100% 100%;",
    },
    {
      id: 4,
      title: "Veronica Hope 3D",
      status: "Finalizado",
      description:
        "Plataforma de portafolio para creadora 3D diseñada para la exhibición de modelos y activos tridimensionales con alto rendimiento y despliegue automatizado.",
      skills: ["Astro", "TypeScript", "Tailwind", "Vercel", "Optimización de activos"],
      topskills: ["Astro"],
      link: [
        {
          url: "https://www.veronicahope3d.com/",
          label: "Visítala",
        },
      ],
      image: images["../assets/projects/VeroHope3D.webp"].default,
      imgBgPos: "background-position: 0% 100%; background-size:100% 100%;",
    },
  ],
  EN: [
    {
      id: 1,
      title: "Echoes of the Beasts",
      status: "In Development",
      description:
        "Proprietary tactical-narrative RPG system and comprehensive web platform. Includes character management, dynamic bestiary, and campaign tools, featuring combat mechanics and progression supported by mathematical models for skill and encounter balance.",
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Systems Design",
        "Game Mechanics Design",
        "Mathematical Modeling",
        "Full-Stack Development",
        "Vercel",
      ],
      topskills: ["Next.js", "Systems Design"],
      link: [
        {
          url: "https://echoesbeasts.com",
          label: "Visit Site",
        },
      ],
      image: images["../assets/projects/ecosbanner.webp"].default,
      imgBgPos: "background-size: 100%; background-position: 50% 100%;",
    },
    {
      id: 2,
      title: "Ocho MX Ice Cream",
      status: "In Development",
      description:
        "Web portal for an artisanal ice cream brand featuring a static-first architecture. Optimized for high performance and SEO, enabling menu exploration, brand management, and event quote requests.",
      skills: ["Astro", "TypeScript", "Tailwind", "Vercel", "SEO Optimization"],
      topskills: ["Astro"],
      link: [
        {
          url: "https://ochomx-com.vercel.app",
          label: "Visit Site",
        },
      ],
      image: images["../assets/projects/ochoBanner.webp"].default,
      imgBgPos: "background-position: 50% 130%;",
    },
    {
      id: 3,
      title: "Midrava Art",
      status: "Live",
      description:
        "Digital artist portfolio website focused on visual showcase, high performance, and accessibility through a static-site architecture.",
      skills: ["Astro", "TypeScript", "Tailwind", "Vercel", "Web Accessibility"],
      topskills: ["Astro"],
      link: [
        {
          url: "https://www.midrava.com/",
          label: "Visit Site",
        },
      ],
      image: images["../assets/projects/midrava.webp"].default,
      imgBgPos: "background-position: 0% 100%; background-size:100% 100%;",
    },
    {
      id: 4,
      title: "Veronica Hope 3D",
      status: "Live",
      description:
        "Portfolio platform for 3D creators designed for high-performance showcasing of digital models and assets with automated deployments.",
      skills: ["Astro", "TypeScript", "Tailwind", "Vercel", "Asset Optimization"],
      topskills: ["Astro"],
      link: [
        {
          url: "https://www.veronicahope3d.com/",
          label: "Visit Site",
        },
      ],
      image: images["../assets/projects/VeroHope3D.webp"].default,
      imgBgPos: "background-position: 0% 100%; background-size:100% 100%;",
    },
  ],
};
