## [jfespanolito.dev](https://jfespanolito.dev/): Portafolio Digital

Portafolio de Jorge A. Falcón (“Espanolito”). Automatización end-to-end (UiPath), desarrollo de software y front-end con enfoque práctico.
Construido en Next.js como app estática para carga rápida y buen rendimiento. Priorizo UX y accesibilidad a proyectos clave y CV; el sitio es muestra de cómo estructuro, optimizo y entrego.

Qué vas a encontrar:
- Proyectos reales con notas de arquitectura y trade-offs.
- RPA, tooling y front-end orientados a mantenibilidad.
- Experimentos donde cruzo tecnología, diseño e ideas propias.


---

## 🛠️ Tecnologías Clave

Este proyecto está construido sobre un stack de desarrollo moderno y escalable, primando el rendimiento y la mantenibilidad.

| Categoría                        | Herramientas Utilizadas                            | Justificación y Función                                                                                           |
| :------------------------------- | :------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| **Frontend Principal**           | **Next.js 16 (App Router), React 19**              | Marco de desarrollo principal para rendimiento, _Server Components_ (aunque estáticos) y organización del código. |
| **Estilización**                 | **Tailwind CSS**, `clsx`, `tailwind-merge`         | Desarrollo rápido de UI responsiva, clases atómicas y manejo eficiente de conflictos de estilos.                  |
| **Interactividad y Animación**   | **Framer Motion**, `@headlessui/react`             | Creación de animaciones fluidas y componentes de UI accesibles (botones, _modals_, menús).                        |
| **Iconografía**                  | **Heroicons**, **Lucide React**                    | Conjuntos de iconos profesionales para mejorar la usabilidad y estética.                                          |
| **Observabilidad**               | `nextjs-toploader`                                 | Monitoreo de rendimiento en producción y barra de carga de navegación para mejor UX.                              |
| **Comunicaciones y _Marketing_** | `crisp-sdk-web`, `nodemailer`, `resend`            | Integración para chat en vivo y funcionalidad de formulario de contacto/emailing.                                 |
| **Utilidades de Desarrollo**     | `next-sitemap`, `react-hot-toast`, `react-tooltip` | Generación de Sitemaps, notificaciones de usuario y _tooltips_ interactivos.                                      |

---

## 🚀 Despliegue y Acceso

El sitio web está desplegado y optimizado para la máxima velocidad de carga.

**Website Oficial:** [jfespanolito.dev](https://jfespanolito.dev/)

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

Los componentes del directorio `components/ui` están inspirados y adaptados a partir de:

**ScrollX UI**
[Componentes de ScrollX UI](https://www.scrollxui.dev/docs/components)

<details>
  <summary> Modificaciones realizadas </summary>

- **top-secret:**
  - Soporta apertura y cierre desde top, bottom, left y right.
  - Tamaños configurables por porcentaje de viewport: 50 / 80 / 100.
  - Drag-to-close adaptado a la dirección (vertical u horizontal).
  - Animaciones con spring/tween según estado y dirección.
  - Overlay con cierre por clic externo y tecla Escape.
  - Control controlado/no controlado (open, onOpenChange, defaultOpen).
  - Override de size y direction desde Root o Content.
  - Scroll interno independiente con bloqueo de scroll del body.
- **text-spotlight:**
  - Spotlight radial que sigue el mouse y revela el texto mediante máscara.
  - Modo móvil opcional: revelado progresivo por caracteres al entrar en viewport (IntersectionObserver + requestAnimationFrame).
  - Personalización separada de estilos: texto apagado (baseTextClassName) vs texto iluminado (textClassName).
  - Parámetros del haz: color RGB, tamaño y opacidad (spotlightColor, spotlightSize, spotlightOpacity).
  - Comportamiento hover: el texto iluminado solo aparece al pasar el cursor (opacity toggle).
- **magic-dock:**
  - Permite personalizar estilos del item con `itemClassName`.
  - Opción `hoverAnimation` para activar/desactivar magnificación y expansión por hover.
  - Soporta desplazamiento del ícono al hover con `hoverDistance`.
  - Tooltip configurable arriba/abajo con `labelPosition`.
  - Hover “estable” con delay (evita flicker) antes de limpiar `hoveredIndex`.
  - Estilo de borde fijo (ya no cambia por `variant`); `variant` afecta principalmente el fondo del dock y el comportamiento tooltip.
  - Tooltip simplificado (sin líneas/gradientes decorativas del `variant="tooltip"` original) y con transición de salida explícita.
  - Dock anclado con `fixed bottom-4` y `z-50` (siempre encima) en lugar de `absolute bottom-2`.
  - Área clickeable ampliada por item (padding + margen negativo) sin alterar el tamaño visual.
  - Guard SSR para `matchMedia` en detección de touch device.
- **card:**
  - Simplificado a un solo componente (`Card`) en lugar de un sistema compuesto (CardHeader, CardContent, CardFooter, etc.).
  - API reducida: recibe `content` explícito en lugar de props arbitrarios (`React.ComponentProps<"div">`).
  - Eliminados `data-slot` y semántica interna orientada a layouts complejos.
  - Enfocado a contenedor visual genérico (overlay full con `absolute inset-0`).
  - Sin estilos de tema (`bg-card`, `text-card-foreground`, `border`, `shadow`).
  - Bordes más grandes por defecto (`rounded-2xl / sm:rounded-3xl` vs `rounded-xl`).
  - No impone estructura interna ni spacing (sin `flex`, `gap`, `px`, `py`).
  - Cambio de helper `cn` importado desde `@/libs/utils`.
- **card-flip:**
  - Soporta `children` como render-prop: permite recibir `{ flip, isFlipped }` para controlar el volteo desde el contenido.
  - Opción `hideDefaultButtons` para ocultar los botones Info/X integrados.
  - Calcula y fija la altura máxima entre front/back (ResizeObserver + medición) para evitar “saltos” al voltear.
  - Fuerza layout estable con `min-h-[250px]` y `h-full` en el contenedor.
  - Cambia el transform del reverso a `rotateY(180deg)` (en lugar de `-180deg`) manteniendo la misma animación de giro.
  - Maneja z-index/posición para asegurar que la cara activa quede arriba (front/back alternan `zIndex` y `position`).
  - Import de `cn` desde `@/libs/utils` en lugar de `@/lib/utils`.
- **avatar:**

  - Eliminado Radix UI (`@radix-ui/react-avatar`); implementación 100% custom.
  - Eliminado soporte de variantes (`close-friends`, `normal`, `none`) y anillos decorativos.
  - API simplificada: `Avatar` es solo un contenedor `div`.
  - `AvatarImage` usa `<img>` directo en lugar de `AvatarPrimitive.Image`.
  - `AvatarFallback` es un contenedor visual simple (sin lógica de fallback automática).
  - Menos estilos por defecto: sin bordes, sombras ni gradientes.
  - Tamaño base reducido (`h-10 w-10` en lugar de `h-12 / h-14`).
  - Sin dependencia de estados internos ni comportamiento controlado por Radix.
  - Cambio de helper `cn` importado desde `@/libs/utils`.

  </details>

**Oneko**
[Oneko Pet Selector by kyrie25](https://github.com/kyrie25/spicetify-oneko)
[Oneko Original by adryd325](https://github.com/adryd325/oneko.js)

<details>
  <summary> Modificaciones realizadas </summary>

- Cuenta con una "cama" drag and drop para el Pet.
- Clic izquierdo para mostrar el Pet.
- Clic derecho para cambiar el estilo del Pet.
- Clic izquierdo para guardar el Pet.
</details>

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
