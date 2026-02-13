const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/projects/*.{jpeg,jpg,png,gif,webp}", { eager: true });

export const projectsData = {
  ES: [
    {
      id: 1,
      title: "Ecos de las Bestias",
      status: "En Desarrollo",
      description:
        "Plataforma web y sistema de rol táctico-narrativo propio. Los jugadores encarnan a cazadores de la Orden de los Ecos para enfrentar bestias ancestrales. Cuenta con herramientas digitales para creación de personajes, bestiario dinámico y gestión de campañas.",
      tech: ["HTML", "CSS", "JavaScript"],
      // tech: ["Next.js 14", "MongoDB", "Tailwind CSS", "NextAuth"],
      link: [
        {
          url: "https://echoesbeasts.com",
          label: "Visítala",
        },
        // {
        //   url: "https://kickstarter.com/project/echoesbeasts",
        //   label: "Kickstarter"
        // }
      ],
      //github: "https://github.com/JFEspanolito/EchoesBeasts",
      image: images["/src/assets/projects/ecosbanner.webp"].default,
    },
  ],
  EN: [
    {
      id: 1,
      title: "Echoes of Beasts",
      status: "In Development",
      description:
        "Web platform and proprietary tactical-narrative RPG system. Players embody hunters from the Order of Echoes to face ancestral beasts. Features digital tools for character creation, dynamic bestiary, and campaign management.",
      tech: ["Next.js 14", "MongoDB", "Tailwind CSS", "NextAuth"],
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
    },
  ],
};
