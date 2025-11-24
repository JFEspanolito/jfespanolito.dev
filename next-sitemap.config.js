/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // **CAMBIA ESTO** a la URL base de tu sitio
  siteUrl: 'https://www.jfespanolito.dev/' || process.env.SITE_URL, 
  
  // Esto hará que genere también un archivo robots.txt
  generateRobotsTxt: true, 
  
  // Puedes dejar esto vacío si solo quieres usar las opciones por defecto
  // o agregar configuraciones específicas aquí (por ejemplo, para excluir rutas)
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}