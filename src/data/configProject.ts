// ../data/configProject.ts
export const configProject = {
  // ======================================================
  // 🧩 PROYECTO (metadata / web)
  // ======================================================
  appName: "JFEspanolito.dev",
  tabname: "JFEspanolito",
  appDescription: "Portafolio profesional de Jorge A. Falcón A.",
  ogTitle: "JFEspanolito | Desarrollo Web & Automatización RPA",
  ogDescription:
    "Portafolio de Jorge A. Falcón A. — Desarrollador Full-Stack y especialista en automatización RPA con UiPath, Next.js, Astro y TypeScript.",
  domainName: "jfespanolito.dev",
  siteUrl: "https://jfespanolito.dev",
  copyright: `© ${new Date().getFullYear()} — El código fuente de este sitio es público y puede consultarse y reutilizarse. La información personal y profesional presentada no está autorizada para copia ni redistribución.`,

  // ======================================================
  // 🌐 METADATOS / SEO
  // ======================================================
  language: "en-US",
  themeColor: "#000000",
  colors: {
    main: "#111111",
    background: "#000000",
    foreground: "#ffffff",
  },
  keywords: ["Jorge A. Falcón A.", "RPA", "UiPath", "Automatización", "Desarrollo"],
  author: "Jorge A. Falcón A.",
  twitter: "@JFEspanolito",

  // Rutas hacia imágenes base
  // se recomienda qué las imagenes sean de 1200x630px para OG y 1024x512px para Twitter
  images: {
    ogDefault: "/cover/cover.png",
    twitterCard: "/cover/cover.png",
    favicon: "/cover/favicon.ico",
    icon16: "/cover/favicon.ico",
    icon32: "/cover/favicon.ico",
    icon192: "/cover/cover.webp",
    icon512: "/cover/cover.webp",
    appleTouch: "/cover/cover.webp",
    safariMask: "/cover/cover.webp",
  },

  // ======================================================
  // 💬 SOPORTE / CONTACTO (público)
  // ======================================================
  support: {
    email: "hola@jfespanolito.dev",
  },

  // ======================================================
  // ✉️ RESEND (client-side references)
  // ======================================================
  resend: {
    fromAdmin: "hola@jfespanolito.dev",
    fromNoReply: "noreply@jfespanolito.dev",
  },

  // ======================================================
  // 📣 MARKETING (placeholders)
  // ======================================================
  marketing: {
    tagline: "Automation architecture, RPA leadership, and full-stack delivery.",
    testimonials: {
      headline: "Selected professional outcomes",
      subhead: "Public testimonials will appear here when available.",
      items: [],
    },
  },

  // ======================================================
  // Menú de navegación (labels y rutas)
  // ======================================================
  navigation: {
    ES: {
      home: { label: "Inicio", href: "#Resumen" },
      bio: { label: "Bio", href: "#Bio" },
      experience: { label: "XP · Experiencia", href: "#Experiencia" },
      projects: { label: "Side Quest · Proyectos", href: "#Proyectos" },
      certificates: { label: "Logros · Certificados", href: "#Certificados" },
    },
    EN: {
      home: { label: "Home", href: "#Resumen" },
      bio: { label: "Bio", href: "#Bio" },
      experience: { label: "XP · Experience", href: "#Experiencia" },
      projects: { label: "Side Quest · Projects", href: "#Proyectos" },
      certificates: { label: "Achievements · Certificates", href: "#Certificados" },
    },
  },
};
