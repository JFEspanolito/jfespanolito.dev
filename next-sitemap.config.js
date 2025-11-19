// Actualiza este tag si NO usas config.domainName ni la variable de entorno SITE_URL:
// <PROJECT_DOMAIN>

// Intentamos leer el dominio desde tu config centralizada (./config.js).
// Si no existe, usamos SITE_URL y, como último recurso, un placeholder.
const appConfig = (() => {
  try {
    // Si tu config exporta `default` (ESM), accedemos a .default
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const m = require("./config");
    return m?.default || m || {};
  } catch {
    return {};
  }
})();

const domainFromConfig = appConfig?.domainName
  ? `https://${appConfig.domainName}`
  : null;

module.exports = {
  // URL base del sitio para el sitemap
  siteUrl: process.env.SITE_URL || domainFromConfig || "https://<PROJECT_DOMAIN>",

  // Generar robots.txt automáticamente
  generateRobotsTxt: true,

  // Excluir rutas dinámicas de imágenes/meta generadas por el App Router
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],

  // (Opcional) políticas básicas para robots.txt
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
