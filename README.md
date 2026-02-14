# JFEspanolito.dev

Este sitio web busca ser mi Portafolio Profesional, al mismo tiempo una herramienta para aprender y practicar desarrollo web con Astro y React.
Anteriormente fue creado con Next.js y React, pero he decidido migrarlo a Astro para aprovechar sus beneficios en cuanto a rendimiento y experiencia de usuario.

Intenté mezclar en él, mi escencia de programador, amor a los videojuegos y mi forma personal de organizarme.

## ⚙️ Stack

| Área          | Tecnología                       |
| ------------- | -------------------------------- |
| Framework     | Astro 5.x (SSG / SSR)            |
| UI Runtime    | React 19.x (Islas)               |
| Estilos       | Tailwind CSS 4.x + DaisyUI       |
| Arquitectura  | DDD (Core / Hexagonal)           |
| Analíticas    | GA / Clarity + Partytown         |
| UX / UI Utils | Framer Motion, Lucide, Hot Toast |

---

## 🛠️ Scripts útiles

Generar árbol de directorios (Windows):

```
winget install GerdHoffmann.Tree
& "C:\Program Files (x86)\GnuWin32\bin\tree.exe" -I 'node_modules|.next|dist|.astro|.vscode' > tree.txt
```

Scripts de mantenimiento ubicados en la carpeta `scripts/`.

### 1. `convert_pdf_to_jpg.js`

Convierte la primera página de un PDF a imagen JPG.

**Requisitos:**

1.  **Ghostscript:**
    - Descarga: [Ghostscript Releases](https://github.com/ArtifexSoftware/ghostpdl-downloads/releases)
    - Busca el instalador (ej: `gs10060w64.exe`).
    - ⚠️ **Importante:** Marca la casilla "Add to PATH" durante la instalación.
    - Verificar versión: `gswin64c -version`

**Uso:**

```
node scripts/convert_pdf_to_jpg.js
```

### 2. `convert-images-to-webp.js`

Convierte imágenes `.png`, `.jpg`, `.jpeg` y `.svg` a formato moderno `.webp` en las mismas ubicaciones. Conserva los originales.

**Dependencias:**

```
npm i sharp glob
```

**Uso:**

```
node scripts/convert-images-to-webp.js
```

### 3. `convert-audio-to-webm.js`

Convierte archivos de audio (`.mp3`, `.wav`, `.m4a`, `.aac`, `.ogg`) a `.webm` (codec Opus). Conserva los originales.

**Requisitos:**

- **FFmpeg:** Debe estar instalado y agregado a las variables de entorno (PATH).
- (Opcional) `npm i glob`
- **Uso:**

```
node scripts/convert-audio-to-webm.js
```

### 4. `normalize-names.js`

Normaliza nombres de archivos y carpetas (elimina acentos, espacios por guiones bajos, pasa a minúsculas).

**Flujo de trabajo recomendado:**

- Navega a la carpeta que quieres normalizar.
- Ejecuta el script apuntando a su ubicación.

**Uso:**

```
# 1. Ir a la carpeta objetivo
cd "ruta/a/tu/carpeta/public/certificates"

# 2. Ejecutar script (ajusta la ruta según donde estés)
node "../../scripts/normalize-names.js" -r
```

**Modo prueba (Simulacro - No cambia nada, solo muestra logs):**

```
node "../../scripts/normalize-names.js" --dry
```

## 💻 VSCode recomendado

Configuración sugerida para ocultar ruido visual y mejorar la legibilidad.
VSCode Setting JSon

```
AppData\Roaming\Code\User\settings.json
```

File Nesting & Exclusions:

```
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.patterns": {
    "package.json": ",.eslintrc.json, next.config.js, package-lock.json, postcss.config.js, tailwind.config.ts, jsconfig.json, next-sitemap.config.js, tailwind.config.js,vercel.json,pnpm-lock.yaml,yarn.lock,tsconfig.json,postcss.config.mjs,next.config.ts,next-env.d.ts,eslint.config.mjs,.stylelintrc.json,config.ts,next-auth.d.ts,.dockerignore,Dockerfile,vite.config.ts,pnpm-workspace.yaml,astro.config.mjs,tailwind.config.mjs",
    "README.md": "tree.txt,llms.txt, AI_ARCHITECTURE.md, .cursorrules, .llmignore,.gitignore,.env.example,.env.local,.env*,config.js,configApi.js,config.ts,configApi.ts,llms.md",
  },
  "files.exclude": {
    ".astro": true,
    ".next": true,
    ".vscode": true,
    "**/.agent": true,
    "**/.claude": true,
    "**/.codex": true,
    "**/.cursor": true,
    "**/.gemini": true,
    "**/.opencode": true,
    "dist": true,
    "node_modules": true
  },
```
