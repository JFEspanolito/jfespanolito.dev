const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/projects/*.{jpeg,jpg,png,gif,webp}", { eager: true });

export const projectsData = {
  ES: [
    {
      id: 1,
      title: "Ecos de las Bestias",
      status: "En Desarrollo",
      description:
        "Plataforma web y sistema de rol táctico-narrativo propio. Los jugadores encarnan a cazadores de la Orden de los Ecos para enfrentar bestias ancestrales. Cuenta con herramientas digitales para creación de personajes, bestiario dinámico y gestión de campañas.",
      skills: [
        // Tecnología
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",

        // Ingeniería base
        "Desarrollo Full-Stack",
        "Diseño de Sistemas",
        "Diseño de Motores de Reglas",

        // Diseño de juegos
        "Diseño de Juego",
        "Diseño de Combate y Progresión",
        "Balance y Diseño Matemático",

        // Mundo y narrativa
        "Diseño Narrativo",
        "Construcción de Mundos (Worldbuilding)",
        "Diseño de Criaturas y Lore",

        // Producto
        "Diseño UX/UI",

        // Herramientas
        "Herramientas y Automatización",
      ],
      link: [
        {
          url: "https://echoesbeasts.com",
          label: "Visítala",
        },
        //github: "https://github.com/JFEspanolito/EchoesBeasts",
        // {
        //   url: "https://kickstarter.com/project/echoesbeasts",
        //   label: "Kickstarter"
        // }
      ],
      image: images["/src/assets/projects/ecosbanner.webp"].default,
      imgBgPos: "background-position: 50% 130%;",
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
        // Tech
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",

        // Core engineering
        "Full-Stack Development",
        "Systems Design",
        "Rules Engine Design",

        // Game design
        "Game Design / Diseño de Juego",
        "Combat & Progression Design / Combate y Progresión",
        "Balance & Math Design / Balance y Diseño Matemático",

        // Mundo y narrativa
        "Narrative Design / Diseño Narrativo",
        "Worldbuilding",
        "Creature & Lore Design / Criaturas y Lore",

        // Producto
        "UX/UI Design",

        // Tooling
        "Tooling & Automation",
      ],
      link: [
        {
          url: "https://echoesbeasts.com",
          label: "Visit it",
        },
        // {
        //   url: "https://kickstarter.com/project/echoesbeasts",
        //   label: "Kickstarter"
        // }
      ],
      //github: "https://github.com/JFEspanolito/EchoesBeasts",
      image: images["/src/assets/projects/ecosbanner.webp"].default,
      imgBgPos: "background-position: 50% 130%;",
    },
  ],
};
