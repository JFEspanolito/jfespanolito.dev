const yearsOfExperience = new Date().getFullYear() - 2012;
const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/images/*.{jpeg,jpg,png,gif,webp}", { eager: true });
const socialImg = import.meta.glob<{ default: ImageMetadata }>("/src/assets/logos/*.svg", { eager: true });

export const aboutData = {
  name: "Jorge A. Falcón A.",
  nickname: "JFEspanolito",
  location: "Ciudad de México, México",
  contact: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jfespanolito",
      icon: socialImg["/src/assets/logos/linkedin.svg"].default,
    },
    {
      name: "Telegram",
      url: "https://t.me/jfespanolito",
      icon: socialImg["/src/assets/logos/telegram.svg"].default,
    },
    {
      name: "Email",
      url: "mailto:contact@jfespanolito.dev?subject=Contacto%20profesional&body=Hola%20Jorge,%0A%0AQuisiera%20hablar%20sobre%20...",
      icon: socialImg["/src/assets/logos/mail.svg"].default,
    },
  ],
  social: [
    // {
    //   name: "Twitter (x)",
    //   url: "https://twitter.com/JFEspanolito",
    //   icon: "twitter",
    // },
    // {
    //   name: "Instagram",
    //   url: "https://instagram.com/JFEspanolito",
    //   icon: "instagram",
    // },
    {
      name: "GitHub",
      url: "https://github.com/JFEspanolito",
      icon: socialImg["/src/assets/logos/github.svg"].default,
    },
    {
      name: "Wakatime",
      url: "https://wakatime.com/@JFEspanolito",
      icon: socialImg["/src/assets/logos/wakatime.svg"].default,
    },
  ],
  avatarUrl: images["/src/assets/images/JFSelfie.webp"].default,
  logoUrl: images["/src/assets/images/JFLogo.webp"].default,
  ES: [
    {
      role: "Líder de Desarrollo RPA",
      callToAction: "¡Hablemos de tus procesos!",
      headline: "Transformo procesos complejos en automatizaciones eficientes.",
      description: [
        [
          {
            text: `Arquitecto RPA y Líder Técnico con más de ${yearsOfExperience} años transformando procesos complejos en automatizaciones escalables con UiPath e IA.`,
            bold: true,
            customColor: "var(--color-blue)",
          },
          {
            text: `Diseño soluciones RPA end-to-end, lidero equipos técnicos y opero Centros de Excelencia (CoE). Más de 35 robots productivos en entornos críticos, optimización operativa a gran escala y +$3MDP anuales en impacto mediante soluciones gobernadas, documentadas y mantenibles.`,
            bold: false,
            customColor: "",
          },
        ],
        [
          {
            text: `Especialista en arquitectura RPA, calidad técnica y mejora continua. Experiencia sólida en UiPath, .NET e integración de IA en procesos empresariales.`,
            bold: false,
            customColor: "",
          },
        ],
        [
          {
            text: `Desarrollo proyectos personales que combinan ingeniería, diseño de sistemas y creatividad (actualmente el juego de rol “Ecos de las Bestias”). Interesado en tecnologías de IA, aprendizaje autodidacta y creación de experiencias lúdicas que fusionan estrategia, storytelling y software.`,
            bold: false,
            customColor: "",
          },
        ],
      ],
    },
  ],
  EN: [
    {
      name: "Jorge A. Falcón A.",
      nickname: "JFEspanolito",
      role: "RPA Development Lead",
      callToAction: "Let's talk about your processes!",
      headline: "Transforming complex processes into efficient automations.",
      description: [
        [
          {
            text: `RPA Architect and Technical Lead with over ${yearsOfExperience} years transforming complex processes into scalable automations using UiPath and AI.`,
            bold: true,
            customColor: "var(--color-blue)",
          },
          {
            text: `I design end-to-end RPA solutions, lead technical teams, and operate Centers of Excellence (CoE). Over 35 production robots in critical environments, large-scale operational optimization, and +$3M MXN annual impact through governed, documented, and maintainable solutions.`,
            bold: false,
            customColor: "",
          },
        ],
        [
          {
            text: `Specialized in RPA architecture, technical quality, and continuous improvement. Strong experience with UiPath, .NET, and AI integration into enterprise processes.`,
            bold: false,
            customColor: "",
          },
        ],
        [
          {
            text: `I develop personal projects that combine engineering, system design, and creativity (currently the tabletop RPG “Echoes of the Beasts”). Interested in AI technologies, self-directed learning, and crafting playful experiences that merge strategy, storytelling, and software.`,
            bold: false,
            customColor: "",
          },
        ],
      ],
    },
  ],
};
