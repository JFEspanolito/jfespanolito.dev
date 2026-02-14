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
        "Plataforma web y sistema de rol táctico-narrativo propio. Los jugadores encarnan a cazadores de la Orden de los Ecos para enfrentar bestias ancestrales. Cuenta con herramientas digitales para creación de personajes, bestiario dinámico y gestión de campañas.",
      skills: [
        // Tecnología
        "TypeScript",
        "Tailwind CSS",

        // Ingeniería base
        "Desarrollo Full-Stack",
        "Diseño de Motores de Reglas",

        // Diseño de juegos
        "Diseño de Combate y Progresión",
        "Balance y Diseño Matemático",

        // Mundo y narrativa
        "Diseño Narrativo",
        "Construcción de Mundos",
        "Diseño de Criaturas y Lore",

        // Producto
        "Diseño UX/UI",

        // Herramientas
        "Herramientas y Automatización",
      ],
      topskills: ["Next.js 14", "Diseño de Juego", "Diseño de Sistemas"],
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
      image: images["../assets/projects/ecosbanner.webp"].default,
      imgBgPos: "background-size: 120%; background-position: 50% 120%;",
    },
    {
      id: 2,
      title: "Heladería Ocho MX",
      status: "En Desarrollo",
      description:
        "Portal web para la heladería artesanal Ocho MX. Permite a los clientes explorar el menú, realizar cotizaciones para eventos y conocer la historia de la marca.",
      skills: [
        // Tecnología
        "TypeScript",
        "Tailwind CSS",
      ],
      topskills: [
        // Tecnología
        "Astro 5",
        // Producto
        "Diseño UX/UI",
      ],
      link: [
        {
          url: "https://ochomx-com.vercel.app",
          label: "Visítala",
        },
        //github: "https://github.com/JFEspanolito/EchoesBeasts",
        // {
        //   url: "https://kickstarter.com/project/echoesbeasts",
        //   label: "Kickstarter"
        // }
      ],
      image: images["../assets/projects/ochoBanner.webp"].default,
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
        "TypeScript",
        "Tailwind CSS",

        // Core engineering
        "Full-Stack Development",
        "Rules Engine Design",

        // Game design
        "Combat & Progression Design",
        "Balance & Math Design",

        // Mundo y narrativa
        "Narrative Design",
        "Worldbuilding",
        "Creature & Lore Design",

        // Producto
        "UX/UI Design",

        // Tooling
        "Tooling & Automation",
      ],
      topskills: ["Next.js 14", "Game Design", "Systems Design"],
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
      image: images["../assets/projects/ecosbanner.webp"].default,
      imgBgPos: "background-position: 50% 130%;",
    },
    {
      id: 2,
      title: "Heladería Ocho MX",
      status: "In Development",
      description:
        "Web portal for the artisanal ice cream shop Ocho MX. Allows customers to explore the menu, request quotes for events, and learn about the brand's history.",
      skills: [
        // Tecnología
        "TypeScript",
        "Tailwind CSS",
      ],
      topskills: [
        // Tecnología
        "Astro 5",
        // Producto
        "Diseño UX/UI",
      ],
      link: [
        {
          url: "https://ochomx-com.vercel.app",
          label: "Visítala",
        },
        //github: "https://github.com/JFEspanolito/EchoesBeasts",
        // {
        //   url: "https://kickstarter.com/project/echoesbeasts",
        //   label: "Kickstarter"
        // }
      ],
      image: images["../assets/projects/ochoBanner.webp"].default,
      imgBgPos: "background-position: 50% 130%;",
    },
  ],
};
