const yearsOfExperience = new Date().getFullYear() - 2012;

export const aboutData = {
  ES: [
    {
      name: "Jorge A. Falcón A.",
      nickname: "JFEspanolito",
      role: "Líder de Desarrollo RPA & Full Stack .NET",
      headline: "Transformo procesos complejos en automatizaciones eficientes.",
      description: [
        [
          {
            text: `Ingeniero de Sistemas con ${yearsOfExperience} años de experiencia en automatización y liderazgo técnico. `,
            bold: true,
            customColor: "var(--secondary-accent)",
          },
          {
            text: `Experto en UiPath y diseño de arquitecturas RPA end-to-end. Liderazgo de equipos y operación de Centros de Excelencia (CoE).
         Éxito en la optimización de cargas operativas a gran escala. Enfoque en calidad, documentación y mejora continua.`,
            bold: false,
            customColor: "",
          },
        ],
        [
          {
            text: `Desarrollo proyectos propios que combinan tecnología, diseño de sistemas y creatividad (actualmente, el juego de rol "Ecos de las Bestias").
         Interesado en IA generativa, aprendizaje autodidacta y diseño de experiencias lúdicas que integran ingeniería y storytelling.`,
            bold: false,
            customColor: "",
          },
        ],
      ],
      avatarUrl: "/images/JFSelfie.webp",
      logoUrl: "/images/JFLogo.webp",
      location: "Ciudad de México, México",
      social: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jfespanolito",
          icon: "linkedin",
        },
        {
          name: "Twitter (x)",
          url: "https://twitter.com/JFEspanolito",
          icon: "twitter",
        },
        {
          name: "Telegram",
          url: "https://t.me/jfespanolito",
          icon: "telegram",
        },
        { name: "Email", url: "mailto:contact.jf@passinbox.com", icon: "mail" },
        {
          name: "GitHub",
          url: "https://github.com/JFEspanolito",
          icon: "github",
        },
        {
          name: "Wakatime",
          url: "https://wakatime.com/@JFEspanolito",
          icon: "wakaTime",
        },
      ],
    },
  ],
  EN: [
    {
      name: "Jorge Alejandro Falcón",
      role: "RPA Development Lead & Full Stack .NET",
      headline: "Transforming complex processes into efficient automations.",
      description: [
        [
          {
            text: `Systems Engineer with ${yearsOfExperience} years of experience in automation and technical leadership. `,
            bold: true,
            customColor: "",
          },
          {
            text: `Expert in UiPath and end-to-end RPA architecture design. Experienced in team leadership and operating Centers of Excellence (CoE).
         Proven success optimizing large-scale operational workloads. Focused on quality, documentation, and continuous improvement.`,
            bold: false,
            customColor: "",
          },
        ],
        [
          {
            text: `I develop personal projects that combine technology, systems design, and creativity (currently the tabletop RPG “Echoes of the Beasts”).
         Interested in generative AI, self-directed learning, and designing playful experiences that integrate engineering, storytelling, and user behavior.`,
            bold: false,
            customColor: "",
          },
        ],
      ],
      avatarUrl: "/images/JFSelfie.webp",
      logoUrl: "/images/JFLogo.webp",
      location: "Mexico City, Mexico",
      social: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jfespanolito",
          icon: "linkedin",
        },
        {
          name: "Twitter (x)",
          url: "https://twitter.com/JFEspanolito",
          icon: "twitter",
        },
        {
          name: "Telegram",
          url: "https://t.me/jfespanolito",
          icon: "telegram",
        },
        { name: "Email", url: "mailto:contact.jf@passinbox.com", icon: "mail" },
        {
          name: "GitHub",
          url: "https://github.com/JFEspanolito",
          icon: "github",
        },
        {
          name: "Wakatime",
          url: "https://wakatime.com/@JFEspanolito",
          icon: "wakaTime",
        },
      ],
    },
  ],
};
