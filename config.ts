const config = {
  // ======================================================
  // 🔧 PROYECTO BASE (reemplaza estos placeholders)
  // ======================================================
  appName: "Portafolio",
  appDescription:
    "Portal personal jfespanolito.dev: CV, trayectoria profesional y proyectos en desarrollo web.",
  domainName: "jfespanolito.dev", // sin https:// ni slash final

  // ======================================================
  // 💬 SOPORTE / CONTACTO
  // ======================================================
  crisp: {
    id: "", // ID de Crisp (opcional)
    onlyShowOnRoutes: ["/"], // o elimina esta línea para mostrar en todo el sitio
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
    tagline: "Transformo procesos complejos en automatizaciones eficientes.", // breve eslogan del proyecto
    testimonials: {
      headline: "Transformo procesos complejos en automatizaciones eficientes.",
      subhead: "Transformo procesos complejos en automatizaciones eficientes.",
      items: [
        /* objetos como en defaultList */
      ],
    },
  },
};

export default config;
