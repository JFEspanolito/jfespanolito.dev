## jfespanolito.dev: Portafolio Digital de Alto Rendimiento

jfespanolito.dev es mi plataforma de presentación profesional. He diseñado este portafolio digital como un showcase directo y conciso de mi trayectoria, experiencia y competencia técnica en el desarrollo web frontend.

Elegí construirlo como una aplicación Next.js standalone y estática para garantizar la máxima velocidad de carga y rendimiento. Mi objetivo principal fue la optimización de la experiencia de usuario (UX), enfocándome en la accesibilidad inmediata a mis proyectos clave y mi CV. Este sitio es un ejemplo práctico de mi capacidad para entregar soluciones web rápidas y bien estructuradas.

---

## 🛠️ Tecnologías Clave

Este proyecto está construido sobre un stack de desarrollo moderno y escalable, primando el rendimiento y la mantenibilidad.

| Categoría                        | Herramientas Utilizadas                            | Justificación y Función                                                                                                      |
| :------------------------------- | :------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| **Frontend Principal**           | **Next.js 16 (App Router), React 19**              | Marco de desarrollo principal para rendimiento, _Server Components_ (aunque estáticos) y organización del código.            |
| **Estilización**                 | **Tailwind CSS**, `clsx`, `tailwind-merge`         | Desarrollo rápido de UI responsiva, clases atómicas y manejo eficiente de conflictos de estilos.                             |
| **Interactividad y Animación**   | **Framer Motion**, `@headlessui/react`             | Creación de animaciones fluidas y componentes de UI accesibles (botones, _modals_, menús).                                   |
| **Iconografía**                  | **Heroicons**, **Lucide React**                    | Conjuntos de iconos profesionales para mejorar la usabilidad y estética.                                                     |
| **Observabilidad**               |  `nextjs-toploader`       | Monitoreo de rendimiento en producción y barra de carga de navegación para mejor UX.                                         |
| **Comunicaciones y _Marketing_** | `crisp-sdk-web`, `nodemailer`, `resend`            | Integración para chat en vivo y funcionalidad de formulario de contacto/emailing.                                            |
| **Utilidades de Desarrollo**     | `next-sitemap`, `react-hot-toast`, `react-tooltip` | Generación de Sitemaps, notificaciones de usuario y _tooltips_ interactivos.                                                 |

---

## 🚀 Despliegue y Acceso

El sitio web está desplegado y optimizado para la máxima velocidad de carga.

**Website Oficial:** `www.jfespanolito.dev/`

---

## ⚙️ Instalación y Ejecución Local

Para clonar y ejecutar el portafolio en su entorno local, siga los siguientes pasos:

1.  **Clonar el repositorio:**
    `git clone https://github.com/JFEspanolito/jfespanolito.dev.git`
2.  **Acceder al directorio e instalar dependencias (usando pnpm):**
    `cd jfespanolito.dev`
    `pnpm install`
3.  **Ejecutar el servidor de desarrollo:**
    `pnpm run dev`

El sitio estará accesible en `http://localhost:3000`.

---

## 📂 Estructura del Proyecto

La organización sigue la convención del App Router de Next.js, con una clara separación entre la lógica de la aplicación y la presentación de la UI.

| Directorio   | Contenido y Propósito                                                                                                                             |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `app`        | Rutas y _layouts_ principales de Next.js (`layout.tsx`, `page.tsx`).                                                                              |
| `components` | Módulos reutilizables de React. Incluye subdirectorios para `ui`, `sections`, `layout`, e `icons`.                                                |
| `data`       | Archivos de configuración y contenido estático (`about.ts`, `projects.ts`, `resume.ts`). **Es la fuente de verdad del contenido del portafolio.** |
| `libs`       | Funciones y utilidades de _backend_ (e.g., lógica de _emailing_ con Resend/Nodemailer).                                                           |
| `public`     | Archivos estáticos como imágenes (incluyendo certificados), _favicons_ y otros activos.                                                           |
| `scripts`    | Scripts auxiliares para procesamiento de activos (ej. conversión de imágenes a `.webp`).                                                          |
| `styles`     | Hoja de estilos principal (`globals.css`).                                                                                                        |
| `config.ts`  | **Archivo de configuración centralizada** para datos del sitio (dominio, nombre, metadatos, etc.).                                                |

---

## 💡 Atribución de Componentes UI

Los componentes localizados en el directorio `components/ui` han sido **inspirados y adaptados** a mis requerimientos a partir de la librería de código abierto:

> [ScrollX UI](https://www.scrollxui.dev/docs/components)

---

## 💻 Configuración de Entorno

**Configuración Recomendada para VS Code:**

El proyecto incluye una configuración de anidamiento de archivos (_file nesting_) en el `settings.json` para VS Code. Esta configuración agrupa archivos relacionados (ej. archivos de configuración) bajo su archivo principal (ej. `package.json`), mejorando la **legibilidad del explorador de archivos**.

```
"explorer.fileNesting.enabled": true,
"explorer.fileNesting.patterns": {
  "package.json": "config.js,.eslintrc.json, next.config.js, package-lock.json, postcss.config.js, tailwind.config.ts, jsconfig.json, next-sitemap.config.js, tailwind.config.js,vercel.json,pnpm-lock.yaml,yarn.lock,tsconfig.json,postcss.config.mjs,next.config.ts,next-env.d.ts,eslint.config.mjs,.stylelintrc.json,config.ts",
  "README.md": ".gitignore,.env.example, .env.local"
}
```
