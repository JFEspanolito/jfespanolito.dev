// ../data/configProject.ts
export const configProject = {
  // ======================================================
  // 🧩 PROYECTO (metadata / web)
  // ======================================================
  appName: "JFEspanolito.dev",
  tabname: "JFEspanolito",
  appDescription: "Portafolio profesional de Jorge A. Falcón A.",
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
  images: {
    ogDefault: "/images/placeholder.webp",
    twitterCard: "/images/placeholder.webp",
    favicon: "/favicon.ico",
    icon16: "/favicon.ico",
    icon32: "/favicon.ico",
    icon192: "/images/placeholder-192.png",
    icon512: "/images/placeholder-512.png",
    appleTouch: "/images/placeholder-apple.png",
    safariMask: "/images/placeholder-mask.png",
  },

  // ======================================================
  // 💬 SOPORTE / CONTACTO (público)
  // ======================================================
  support: {
    email: "correo@placeholder.com",
  },

  // ======================================================
  // ✉️ RESEND (client-side references)
  // ======================================================
  resend: {
    fromAdmin: "admin@placeholder.com",
    fromNoReply: "noreply@placeholder.com",
  },

  // ======================================================
  // 📣 MARKETING (placeholders)
  // ======================================================
  marketing: {
    tagline: "<Astro Place holder>",
    testimonials: {
      headline: "<Astro Place holder>",
      subhead: "<Astro Place holder>",
      items: [],
    },
  },
};
