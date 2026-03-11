// ../i18n/ui.ts

// 1. Definimos los idiomas disponibles
export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

// 2. Tu diccionario de traducciones (Copiado de tu contexto anterior)
export const ui = {
  es: {
    // Header
    "nav.menu1": "Menú 1",
    "nav.menu2": "Menú 2",
    "nav.menu3": "Menú 3",
    "nav.logIn": "Ingresar",

    // Footer
    "footer.sendMail": "Escríbenos a",
    "footer.copyright": "Todos los derechos reservados.",

    // Auth
    "auth.signIn": "Iniciar Sesión",

    // Send Mail
    sendMail: "mailto:<mail>?subject=Contacto%20profesional&body=Hola%20Jorge,%0A%0AQuisiera%20hablar%20sobre%20...",
    "header.emailCopied": "Correo copiado",
    "header.emailCopyError": "No se pudo copiar el correo",
    "header.emailCopyAndSend": "Clic para copiar y enviar correo",

    //tittles
    "bio.stack": "Stack Tecnológico",
    "bio.gamedev": "Diseño de Juegos de Mesa",
    "bio.tabs.stack": "Stack Laboral",
    "bio.tabs.gamedev": "Diseño de Juegos de Mesa",
    "bio.stack.frontend": "Frontend",
    "bio.stack.backend": "Backend",
    "bio.stack.automate": "Automatización",
    "bio.stack.tools": "Herramientas",
    "bio.stack.skills": "Habilidades",
  },
  en: {
    // Header
    "nav.menu1": "Menu 1",
    "nav.menu2": "Menu 2",
    "nav.menu3": "Menu 3",
    "nav.logIn": "Log In",

    // Footer
    "footer.sendMail": "Send us an email at",
    "footer.copyright": "All rights reserved.",

    // Auth
    "auth.signIn": "Sign in",

    // Send Mail
    sendMail: "mailto:<mail>?subject=Professional%20Contact&body=Hello%20Jorge,%0A%0AI%20would%20like%20to%20discuss%20about%20...",
    "header.emailCopied": "Email copied",
    "header.emailCopyError": "Could not copy email",
    "header.emailCopyAndSend": "Click to Copy and Send Mail",

    //tittles
    "bio.stack": "Technology Stack",
    "bio.gamedev": "Tabletop Game Design",
    "bio.tabs.stack": "Work Stack",
    "bio.tabs.gamedev": "Tabletop Game Design",
    "bio.stack.frontend": "Frontend",
    "bio.stack.backend": "Backend",
    "bio.stack.automate": "Automation",
    "bio.stack.tools": "Tools",
    "bio.stack.skills": "Skills",
  },
} as const;

// 3. La función mágica para usar en componentes .astro
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
