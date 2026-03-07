const images = import.meta.glob<{ default: ImageMetadata }>("../assets/projects/*.{jpeg,jpg,png,gif,webp}", { eager: true });

export const projectsData = {
  ES: [
    {
      id: 1,
      title: "Ecos de las Bestias",
      status: "En Desarrollo",
      description:
        "Plataforma web y sistema de rol táctico-narrativo propio. Los jugadores encarnan a cazadores de la Orden de los Ecos para enfrentar bestias ancestrales. Cuenta con herramientas digitales para creación de personajes, bestiario dinámico y gestión de campañas.",
      skills: [
        "TypeScript",
        "Tailwind CSS",
        "Desarrollo Full-Stack",
        "Diseño de Motores de Reglas",
        "Diseño de Combate y Progresión",
        "Balance y Diseño Matemático",
        "Diseño Narrativo",
        "Construcción de Mundos",
        "Diseño de Criaturas y Lore",
        "Diseño UX/UI",
        "Herramientas y Automatización",
      ],
      topskills: ["next.js 15", "Diseño de Juego", "Diseño de Sistemas"],
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
        "Portal web para la heladería artesanal Ocho MX. Permite a los clientes explorar el menú, realizar cotizaciones para eventos y conocer la historia de la marca.",
      skills: ["TypeScript", "Tailwind CSS"],
      topskills: ["Astro 5"],
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
      description: "Portafolio personal creado para la artista Midrava Art, enfocado en la exhibición visual de su obra y trayectoria.",
      skills: ["TypeScript", "Tailwind CSS"],
      topskills: ["Astro 5"],
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
        "Sitio web portafolio desarrollado para Veronica Hope 3D, especializado en la muestra de modelos y activos tridimensionales.",
      skills: ["TypeScript", "Tailwind CSS"],
      topskills: ["Astro 5"],
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
      title: "Echoes of Beasts",
      status: "In Development",
      description:
        "Web platform and proprietary tactical-narrative RPG system. Players embody hunters from the Order of Echoes to face ancestral beasts. Features digital tools for character creation, dynamic bestiary, and campaign management.",
      skills: [
        "TypeScript",
        "Tailwind CSS",
        "Full-Stack Development",
        "Rules Engine Design",
        "Combat & Progression Design",
        "Balance & Math Design",
        "Narrative Design",
        "Worldbuilding",
        "Creature & Lore Design",
        "UX/UI Design",
        "Tooling & Automation",
      ],
      topskills: ["next.js 15", "Game Design", "Systems Design"],
      link: [
        {
          url: "https://echoesbeasts.com",
          label: "Visit it",
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
        "Web portal for the artisanal ice cream shop Ocho MX. Allows customers to explore the menu, request quotes for events, and learn about the brand's history.",
      skills: ["TypeScript", "Tailwind CSS"],
      topskills: ["Astro 5", "UX/UI Design"],
      link: [
        {
          url: "https://ochomx-com.vercel.app",
          label: "Visit it",
        },
      ],
      image: images["../assets/projects/ochoBanner.webp"].default,
      imgBgPos: "background-position: 50% 130%;",
    },
    {
      id: 3,
      title: "Midrava Art",
      status: "Live",
      description: "Personal portfolio created for Midrava Art, focused on the visual exhibition of their work and professional journey.",
      skills: ["TypeScript", "Tailwind CSS"],
      topskills: ["Astro 5", "UX/UI Design"],
      link: [
        {
          url: "https://www.midrava.com/",
          label: "Visit it",
        },
      ],
      image: images["../assets/projects/midrava.webp"].default,
      imgBgPos: "background-position: 0% 100%; background-size:100% 100%;",
    },
    {
      id: 4,
      title: "Veronica Hope 3D",
      status: "Live",
      description: "Portfolio website developed for Veronica Hope 3D, specialized in showcasing 3D models and digital assets.",
      skills: ["TypeScript", "Tailwind CSS"],
      topskills: ["Astro 5", "UX/UI Design"],
      link: [
        {
          url: "https://www.veronicahope3d.com/",
          label: "Visit it",
        },
      ],
      image: images["../assets/projects/VeroHope3D.webp"].default,
      imgBgPos: "background-position: 0% 100%; background-size:100% 100%;",
    },
  ],
};
