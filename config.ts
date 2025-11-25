const config = {
  // ======================================================
  // 🔧 PROYECTO BASE
  // ======================================================
  appName: "Portafolio",
  appDescription:
    "Portal personal jfespanolito.dev: CV, trayectoria profesional y proyectos en desarrollo web.",
  domainName: "jfespanolito.dev",

  // ======================================================
  // 🌐 METADATOS / SEO
  // ======================================================
  language: "es-MX",
  themeColor: "#0f1113",
  keywords: [
    "Espanolito",
    "Ingeniero en Sistemas",
    "RPA",
    "Automatización",
    "Desarrollo Web",
    "Next.js",
    "Portafolio",
    "CV",
  ],
  author: "JFEspanolito",
  twitter: "@JFEspanolito",
  siteUrl: "https://jfespanolito.dev",

  // Rutas hacia imágenes base
  images: {
    ogDefault: "/images/JFLogo.webp",
    twitterCard: "/images/JFLogo.webp",
    favicon: "/images/JFLogo.webp",
    icon16: "/images/JFLogo.webp",
    icon32: "/images/JFLogo.webp",
    icon192: "/images/JFLogo.webp",
    icon512: "/images/JFLogo.webp",
    appleTouch: "/images/JFLogo.webp",
    safariMask: "/images/JFLogo.webp",
  },

  // ======================================================
  // 💬 SOPORTE / CONTACTO
  // ======================================================
  crisp: {
    id: "",
    onlyShowOnRoutes: ["/"],
  },

  resend: {
    fromNoReply: `contact@jfespanolito.dev`,
    fromAdmin: `Admin at Portafolio <contact@jfespanolito.dev>`,
    supportEmail: "contact@jfespanolito.dev",
  },

  // ======================================================
  // 📣 MARKETING
  // ======================================================
  marketing: {
    tagline: "Transformo procesos complejos en automatizaciones eficientes.",
    testimonials: {
      headline: "Transformo procesos complejos en automatizaciones eficientes.",
      subhead: "Transformo procesos complejos en automatizaciones eficientes.",
      items: [],
    },
  },

  // ======================================================
  // 🔗 REDES SOCIALES (para JSON-LD)
  // ======================================================
  socials: {
    github: "https://github.com/JFEspanolito",
    linkedin: "https://www.linkedin.com/in/jfespanolito",
    twitter: "https://www.twitter.com/JFEspanolito",
    instagram: "https://www.instagram.com/JFEspanolito",
  },
};

export default config;
