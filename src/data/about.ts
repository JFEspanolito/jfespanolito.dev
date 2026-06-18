export const yearsOfExperience = new Date().getFullYear() - 2012;
const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/*.{jpeg,jpg,png,gif,webp}",
  { eager: true },
);
const socialImg = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/logos/*.svg",
  { eager: true },
);
const projectImages = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/projects/*.{jpeg,jpg,png,gif,webp}",
  { eager: true },
);

import avatar from "../assets/images/JFSelfie.webp";
import logo from "../assets/images/JFLogo.webp";

export const aboutData = {
  name: "Jorge A. Falcón A.",
  nickname: "JFEspanolito",
  location: "Ciudad de México, México",
  domainwebsite: "www.jfespanolito.dev",
  contact: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jfespanolito",
      icon: socialImg["../assets/logos/linkedin.svg"].default,
    },
    {
      name: "Telegram",
      url: "https://t.me/jfespanolito",
      icon: socialImg["../assets/logos/telegram.svg"].default,
    },
    {
      name: "Email",
      url: "mailto:hola@jfespanolito.dev",
      icon: socialImg["../assets/logos/mail.svg"].default,
    },
  ],
  social: [
    {
      name: "GitHub",
      url: "https://github.com/JFEspanolito",
      icon: socialImg["../assets/logos/github.svg"].default,
    },
  ],
  linktree: {
    contact: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jfespanolito",
        icon: socialImg["../assets/logos/linkedin.svg"].default,
      },
      {
        name: "Telegram",
        url: "https://t.me/jfespanolito",
        icon: socialImg["../assets/logos/telegram.svg"].default,
      },
      {
        name: "Email",
        url: "mailto:hola@jfespanolito.dev",
        icon: socialImg["../assets/logos/mail.svg"].default,
      },
    ],
    laboralMedia: [
      {
        name: "GitHub",
        url: "https://github.com/JFEspanolito",
        icon: socialImg["../assets/logos/github.svg"].default,
      },
    ],
    socialMedia: [
      {
        name: "Instagram",
        url: "https://instagram.com/jfespanolito",
        icon: socialImg["../assets/logos/instagram.svg"].default,
      },
    ],
    projects: [
      {
        name: "Echoes of the Beasts",
        url: "https://echoesbeasts.com",
        icon: projectImages["../assets/projects/ecosbanner.webp"].default,
      },
      {
        name: "Plantacora",
        url: "https://plantacora.com",
        icon: projectImages["../assets/projects/plantacora.webp"].default,
      },
    ],
    supportProjects: [
      // {
      //   name: "Ko-Fi",
      //   url: "https://ko-fi.com/jfespanolito",
      // },
      // {
      //   name: "Patreon",
      //   url: "https://www.patreon.com/c/jfespanolito",
      // },
    ],
  },
  avatarUrl: avatar,
  logoUrl: logo,

  ES: [
    {
      role: "Automation Architect | RPA Technical Lead",
      sc: "ISC",
      Major: "Ingeniería en Sistemas Computacionales",
      callToAction: "¡Hablemos de tus procesos!",
      headline:
        "Diseño y gobierno arquitecturas de automatización de alto impacto.",
      description: [
        [
          {
            text: `Arquitecto de Automatización e Ingeniero en Sistemas con más de ${yearsOfExperience} años diseñando y escalando soluciones empresariales con UiPath e IA.`,
            bold: true,
            customColor: "var(--color-blue)",
          },
          {
            text: ` Especialista en la operación de Centros de Excelencia (CoE) y despliegue de robots unattended en entornos críticos. He generado más de $3M MXN anuales mediante la optimización de procesos y automatización gobernada.`,
            bold: false,
            customColor: "",
          },
        ],
        [
          {
            text: `Experto en ecosistemas .NET, integración de APIs y adopción de IA (MCP, Prompt Engineering) en flujos de negocio. Mi enfoque prioriza la arquitectura robusta y la mantenibilidad sobre el código rápido.`,
            bold: false,
            customColor: "",
          },
        ],
        [
          {
            text: `En mi faceta "indie", diseño sistemas complejos como "Ecos de las Bestias", fusionando ingeniería, modelos matemáticos de balance y narrativa digital.`,
            bold: false,
            customColor: "",
          },
        ],
      ],
      education: [
        {
          institution: "Platzi",
          degree: "Aprendizaje Continuo en Ingeniería y Tecnología",
          period: "2022 – Actualidad",
          notes: [
            "Especialización en IA, n8n, Prompt Engineering y desarrollo Full-Stack.",
          ],
        },
        {
          institution: "Universidad Autónoma de Guadalajara",
          degree: "Ingeniería en Sistemas Computacionales",
          period: "2008 – 2011",
          notes: [
            "Cédula Profesional: 8259277",
            "Enfoque en diseño de sistemas y desarrollo de software.",
          ],
        },
      ],
    },
  ],
  EN: [
    {
      role: "Automation Architect | RPA Technical Lead",
      sc: "CSE",
      Major: "Computer Systems Engineering",
      callToAction: "Let's optimize your business processes!",
      headline:
        "Architecting governed automation and high-impact AI solutions.",
      description: [
        [
          {
            text: `Automation Architect and Systems Engineer with over ${yearsOfExperience} years designing and scaling enterprise solutions using UiPath and AI.`,
            bold: true,
            customColor: "var(--color-blue)",
          },
          {
            text: ` Expert in CoE operations and unattended robot deployments in critical environments. I have generated +$3M MXN in annual savings through governed and scalable automation.`,
            bold: false,
            customColor: "",
          },
        ],
        [
          {
            text: `Specialized in .NET ecosystems, API integration, and AI implementation (MCP, LLMs) within business workflows. I prioritize SOLID foundations and architectural integrity.`,
            bold: false,
            customColor: "",
          },
        ],
        [
          {
            text: `In my indie dev projects, I build complex systems like "Echoes of the Beasts," merging engineering principles with mathematical balancing and digital storytelling.`,
            bold: false,
            customColor: "",
          },
        ],
      ],
      education: [
        {
          institution: "Platzi",
          degree: "Continuous Education in Engineering & Technology",
          period: "2022 – Present",
          notes: [
            "Specialized training in AI, n8n, Prompt Engineering, and Full-Stack development.",
          ],
        },
        {
          institution: "Universidad Autónoma de Guadalajara",
          degree: "Computer Systems Engineering",
          period: "2008 – 2011",
          notes: [
            "Professional License: 8259277",
            "Focused on system design and software engineering foundations.",
          ],
        },
      ],
    },
  ],
  skillsAndTools: {
    work: {
      frontend: ["TypeScript", "Tailwind CSS", "Next.js", "Astro"],
      backend: ["Python", ".NET (C#)", "SQL Server", "REST APIs"],
      automate: [
        "UiPath Suite (Full)",
        "n8n (Professional)",
        "MCP (Model Context Protocol)",
        "AI & LLM Integration",
        "BPM (Bizagi, Bic Cloud)",
      ],
      tools: [
        "Orchestrator On-Premise",
        "Git / GitHub",
        "Docker",
        "AWS / Azure",
        "IIS / Windows Server",
        "Jira",
      ],
    },
    indieGameDev: {
      gamedesign: [
        "Rules Engine Design",
        "Combat & Progression Design",
        "Math Balance Modeling",
        "Systems Architecture",
        "Worldbuilding",
      ],
      tools: ["Next.js", "Vercel", "Tabletop Creator Pro"],
    },
  },
};
