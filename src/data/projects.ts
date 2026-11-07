const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/projects/*.{jpeg,jpg,png,gif,webp}",
  { eager: true },
);

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
      title: "Plantacora",
      status: "Live",
      description:
        "Bitacora de seguimiento de plantas para entusiastas de la jardinería, diseñada para el registro visual y textual del crecimiento de las plantas, con funcionalidades de calendario, recordatorios y análisis de crecimiento.",
      skills: ["NextJS", "TypeScript", "Tailwind", "Vercel", "Supabase"],
      topskills: ["NextJS"],
      link: [
        {
          url: "https://www.Plantacora.com/",
          label: "Visit Site",
        },
      ],
      image: images["../assets/projects/plantacora.webp"].default,
      imgBgPos: "background-position: 0% 100%; background-size:100% 100%;",
    },
    {
      id: 3,
      title: "ShardBugs Card Database & Deck Builder",
      status: "Live",
      description:
        "Plataforma fan-made integral para el TCG ShardBugs: catálogo completo de 880+ cartas con filtros por facción, tipo y estadísticas, constructor de mazos con motor de sinergias y combos, tracker de combate para duelos de 2 a 4 jugadores, sistema de temas por alianza, i18n y despliegue automatizado.",
      skills: [
        "Astro",
        "React",
        "TypeScript",
        "Tailwind",
        "nanostores",
        "Framer Motion",
        "Three.js",
        "Vercel",
      ],
      topskills: ["Astro", "TypeScript"],
      link: [
        {
          url: "https://shardbugs-fanmade.vercel.app/",
          label: "Visítala",
        },
      ],
      image: images["../assets/projects/shardbugs.webp"].default,
      imgBgPos: "background-position: 50% 50%; background-size: 100%;",
    },
    {
      id: 7,
      title: "Grimoire Maker",
      status: "Live",
      description:
        "Estudio de escritura y maquetación de escritorio para convertir archivos Markdown en libros, informes, revistas y manuales de rol. Funciona 100% offline sobre tu sistema de archivos local con integración Git nativa.",
      skills: [
        "Electron",
        "Vue 3",
        "Rust",
        "TypeScript",
        "Tailwind",
        "Vite",
        "Markdown AST",
      ],
      topskills: ["Electron", "Vue 3", "Rust"],
      link: [
        {
          url: "/apps/grimoire",
          label: "Ver Proyecto",
        },
      ],
      github: "https://github.com/JFEspanolito/Grimoire-Maker",
      image: images["../assets/projects/grimoire.png"].default,
      imgBgPos: "background-position: 50% 50%; background-size: contain; background-repeat: no-repeat;",
    },
    {
      id: 9,
      title: "Patch Note",
      status: "En Desarrollo",
      description:
        "ARPG de acción cooperativo para escuadrones de hasta 5 jugadores ambientado en el mundo de Syntax (proyecto de KiraBelak). Participo activamente como colaborador en el desarrollo de sistemas de juego, combate y arquitectura de red con Godot 4.",
      skills: [
        "Godot 4",
        "GDScript",
        "Netcode",
        "Diseño de Sistemas",
        "Open Source",
      ],
      topskills: ["Godot 4", "GDScript", "Netcode"],
      link: [
        {
          url: "https://patch-note-web.vercel.app/",
          label: "Visítala",
        },
      ],
      github: "https://github.com/KiraBelak/patch-note",
      image: images["../assets/projects/patchnote.png"].default,
      imgBgPos: "background-position: 50% 50%; background-size: cover;",
    },
    {
      id: 8,
      title: "PuckLife Counter",
      status: "Live",
      description:
        "Contador de vidas y utilidad de mesa para smartwatches Wear OS. Interfaz circular optimizada para AMOLED, rotación 180° para duelos frente a frente en la mesa, ruleta háptica de iniciativa y funcionamiento 100% offline.",
      skills: [
        "Kotlin",
        "Jetpack Compose for Wear OS",
        "Android SDK",
        "Haptics API",
        "Wearable Architecture",
      ],
      topskills: ["Kotlin", "Wear OS"],
      link: [
        {
          url: "/apps/pucklife",
          label: "Ver Proyecto",
        },
      ],
      image: images["../assets/projects/pucklife.png"].default,
      imgBgPos: "background-position: 50% 50%; background-size: cover;",
    },
    {
      id: 4,
      title: "Heladería Ocho MX",
      status: "En Desarrollo",
      description:
        "Portal web para marca de helados artesanales con arquitectura static-first. Optimizado para rendimiento y SEO, permite la exploración del menú, gestión de marca y solicitudes de cotización para eventos.",
      skills: ["Astro", "TypeScript", "Tailwind", "Vercel", "Optimización SEO"],
      topskills: ["Astro"],
      link: [
        {
          url: "https://ocho-mx.vercel.app/",
          label: "Visítala",
        },
      ],
      image: images["../assets/projects/ochoBanner.webp"].default,
      imgBgPos: "background-position: 50% 130%;",
    },
    {
      id: 5,
      title: "Veronica Hope 3D",
      status: "Finalizado",
      description:
        "Plataforma de portafolio para creadora 3D diseñada para la exhibición de modelos y activos tridimensionales con alto rendimiento y despliegue automatizado.",
      skills: [
        "Astro",
        "TypeScript",
        "Tailwind",
        "Vercel",
        "Optimización de activos",
      ],
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
    {
      id: 6,
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
      title: "Plantacora",
      status: "Live",
      description:
        "Plant tracking log for gardening enthusiasts, designed for visual and textual recording of plant growth, with calendar functionalities, reminders and growth analysis.",
      skills: ["NextJS", "TypeScript", "Tailwind", "Vercel", "Supabase"],
      topskills: ["NextJS"],
      link: [
        {
          url: "https://www.Plantacora.com/",
          label: "Visit Site",
        },
      ],
      image: images["../assets/projects/plantacora.webp"].default,
      imgBgPos: "background-position: 0% 100%; background-size:100% 100%;",
    },
    {
      id: 6,
      title: "ShardBugs Card Database & Deck Builder",
      status: "Live",
      description:
        "All-in-one fan-made platform for the ShardBugs TCG: full catalog of 880+ cards with faction, type and stat filters, deck builder with synergy and combo engine, combat point tracker for 2-4 player duels, alliance-based theme system, i18n, and automated deployment.",
      skills: [
        "Astro",
        "React",
        "TypeScript",
        "Tailwind",
        "nanostores",
        "Framer Motion",
        "Three.js",
        "Vercel",
      ],
      topskills: ["Astro", "TypeScript"],
      link: [
        {
          url: "https://shardbugs-fanmade.vercel.app/",
          label: "Visit Site",
        },
      ],
      image: images["../assets/projects/shardbugs.webp"].default,
      imgBgPos: "background-position: 50% 50%; background-size: 100%;",
    },
    {
      id: 7,
      title: "Grimoire Maker",
      status: "Live",
      description:
        "Desktop writing and publication layout studio turning Markdown documents into print-ready books, zines, reports, and RPG rulebooks. Operates 100% offline on local folders with built-in Git version control.",
      skills: [
        "Electron",
        "Vue 3",
        "Rust",
        "TypeScript",
        "Tailwind",
        "Vite",
        "Markdown AST",
      ],
      topskills: ["Electron", "Vue 3", "Rust"],
      link: [
        {
          url: "/apps/grimoire?lang=en",
          label: "Explore Project",
        },
      ],
      github: "https://github.com/JFEspanolito/Grimoire-Maker",
      image: images["../assets/projects/grimoire.png"].default,
      imgBgPos: "background-position: 50% 50%; background-size: contain; background-repeat: no-repeat;",
    },
    {
      id: 9,
      title: "Patch Note",
      status: "In Development",
      description:
        "Co-op action RPG for squads of up to 5 players set in the world of Syntax (project by KiraBelak). Actively contributing as a collaborator to gameplay systems, combat mechanics, and netcode architecture in Godot 4.",
      skills: [
        "Godot 4",
        "GDScript",
        "Netcode",
        "Systems Design",
        "Open Source",
      ],
      topskills: ["Godot 4", "GDScript", "Netcode"],
      link: [
        {
          url: "https://patch-note-web.vercel.app/",
          label: "Visit Site",
        },
      ],
      github: "https://github.com/KiraBelak/patch-note",
      image: images["../assets/projects/patchnote.png"].default,
      imgBgPos: "background-position: 50% 50%; background-size: cover;",
    },
    {
      id: 8,
      title: "PuckLife Counter",
      status: "Live",
      description:
        "Tabletop life tracker and match utility designed exclusively for Wear OS smartwatches. Features an AMOLED-optimized circular UI, 180° inverted readout for head-to-head play, tactile haptic initiative decider, and zero telemetry.",
      skills: [
        "Kotlin",
        "Jetpack Compose for Wear OS",
        "Android SDK",
        "Haptics API",
        "Wearable Architecture",
      ],
      topskills: ["Kotlin", "Wear OS"],
      link: [
        {
          url: "/apps/pucklife?lang=en",
          label: "Explore Project",
        },
      ],
      image: images["../assets/projects/pucklife.png"].default,
      imgBgPos: "background-position: 50% 50%; background-size: cover;",
    },
    {
      id: 4,
      title: "Ocho MX Ice Cream",
      status: "In Development",
      description:
        "Web portal for an artisanal ice cream brand featuring a static-first architecture. Optimized for high performance and SEO, enabling menu exploration, brand management, and event quote requests.",
      skills: ["Astro", "TypeScript", "Tailwind", "Vercel", "SEO Optimization"],
      topskills: ["Astro"],
      link: [
        {
          url: "https://ocho-mx.vercel.app/",
          label: "Visit Site",
        },
      ],
      image: images["../assets/projects/ochoBanner.webp"].default,
      imgBgPos: "background-position: 50% 130%;",
    },
    {
      id: 5,
      title: "Veronica Hope 3D",
      status: "Live",
      description:
        "Portfolio platform for 3D creators designed for high-performance showcasing of digital models and assets with automated deployments.",
      skills: [
        "Astro",
        "TypeScript",
        "Tailwind",
        "Vercel",
        "Asset Optimization",
      ],
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
    {
      id: 6,
      title: "Midrava Art",
      status: "Live",
      description:
        "Digital artist portfolio website focused on visual showcase, high performance, and accessibility through a static-site architecture.",
      skills: [
        "Astro",
        "TypeScript",
        "Tailwind",
        "Vercel",
        "Web Accessibility",
      ],
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
  ],
};
