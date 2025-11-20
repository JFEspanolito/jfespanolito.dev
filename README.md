# 🧩 MyNextJFTemplate

**MyNextJFTemplate** es un boilerplate profesional para **Next.js 16+** con autenticación completa, sistema de blog, panel de administración y componentes UI reutilizables.
Diseñado para acelerar el desarrollo de aplicaciones web modernas, seguras y escalables.

---

## 🚀 Características Clave

* ⚙️ **Next.js 14+ (App Router)** — arquitectura modular y server components.
* 🔐 **Autenticación avanzada** con NextAuth.js (Google + email).
* 📰 **Blog integrado** compatible con **MDX** y SEO automático.
* 🧭 **Dashboard de administración** con gestión de usuarios y métricas.
* 🧩 **Componentes UI reutilizables**, organizados por categorías.
* 🌍 **SEO optimizado** con metadata dinámica y `generateMetadata()`.
* 💅 **Estilos** con Tailwind CSS + DaisyUI.
* 💾 **Base de datos lista** (MongoDB por defecto).
* 🧠 **TypeScript parcial**, fácil de migrar a full TS.

---

## 📁 Estructura del Proyecto

```
├── app/                         # App Router de Next.js
│   ├── (private)/               # Rutas protegidas
│   │   ├── (admin)/             # Panel de administración
│   │   └── (user)/              # Dashboard de usuario
│   ├── api/                     # API Routes
│   ├── blog/                    # Sistema de blog MDX
│   ├── layout.js                # Layout global
│   └── globals.css              # Estilos globales
├── components/                  # Componentes UI
│   ├── admin/                   # Admin-specific
│   ├── basic/                   # Elementos básicos (botones, héroes, etc.)
│   ├── common/                  # Utilitarios comunes
│   └── forms/                   # Formularios y validaciones
├── libs/                        # Librerías auxiliares
│   ├── auth.js                  # Configuración NextAuth
│   ├── seo.js                   # SEO global y metadatos
│   └── config.js                # Configuración principal del proyecto
├── models/                      # Modelos Mongoose / DB
├── public/                      # Archivos estáticos
└── scripts/                     # Scripts de automatización
```

---

## 🧰 Stack Tecnológico

| Categoría         | Tecnología                | Descripción                          |
| ----------------- | ------------------------- | ------------------------------------ |
| **Framework**     | Next.js 14+               | SSR, ISR, App Router                 |
| **UI/Estilos**    | Tailwind CSS + DaisyUI    | Componentes y temas                  |
| **Autenticación** | NextAuth.js               | Google / Email / JWT                 |
| **Base de Datos** | MongoDB (Mongoose)        | Listo para Atlas u otros proveedores |
| **Estado Global** | React Hooks + Context API | Sin dependencias extras              |
| **SEO**           | Next.js Metadata API      | SEO dinámico y accesible             |

---

## ⚡ Inicio Rápido

### 1️⃣ Prerrequisitos

* Node.js 18+
* Gestor de paquetes: `pnpm`, `npm` o `yarn`
* Instancia de base de datos (MongoDB recomendada)

### 2️⃣ Instalación

```bash
git clone https://github.com/JFEspanolito/jfespanolito.com.git
cd jfespanolito.com
pnpm install
```

### 3️⃣ Variables de Entorno

```bash
cp .env.example .env.local
```

Edita `.env.local`:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu-secret-key
DATABASE_URL=tu-database-url
GOOGLE_ID=tu-google-client-id
GOOGLE_SECRET=tu-google-client-secret
```

### 4️⃣ Ejecutar en Desarrollo

```bash
pnpm dev
```

Abrir en [http://localhost:3000](http://localhost:3000)

---

## 🧩 Configuración y Personalización

### Archivos Clave

| Archivo          | Función                                                     |
| ---------------- | ----------------------------------------------------------- |
| `libs/config.js` | Configuración general (nombre, dominio, meta, Stripe, etc.) |
| `libs/auth.js`   | Estrategias y callbacks de NextAuth                         |
| `libs/seo.js`    | Configuración SEO global                                    |
| `app/layout.js`  | Layout principal y metadatos globales                       |

### Personalizar Tu Proyecto

1. Edita **`config.js`** → nombre, dominio, metadatos, correos, etc.
2. Ajusta **`app/globals.css`** → paleta y estilos globales.
3. Agrega o modifica componentes en `/components`.
4. Crea nuevas rutas dentro de `/app`.
5. Define metadatos con `generateMetadata()` en cada página.

---

## 🔐 Autenticación

* Login / Registro con Email y Google OAuth.
* Middleware para proteger rutas.
* Sesiones persistentes.
* Roles básicos: *admin* / *user*.

| Ruta         | Rol requerido       |
| ------------ | ------------------- |
| `/dashboard` | Usuario autenticado |
| `/admin`     | Administrador       |

---

## 📰 Blog Integrado

* Soporte completo para **MDX**
* Metadata SEO por post
* Categorías y tags dinámicos
* Layout adaptable a desktop/mobile

---

## 👥 Panel de Administración

* Gestión de usuarios
* Formularios reutilizables
* Filtros, búsqueda, y paginación
* Integración lista para métricas

---

## 🎨 Componentes UI

| Categoría   | Contenido                                      |
| ----------- | ---------------------------------------------- |
| **basic/**  | Botones, hero sections, features, pricing, FAQ |
| **forms/**  | Inputs validados, textareas, botones submit    |
| **common/** | Loaders, paginadores, tooltips, selectores     |
| **admin/**  | Dashboards, tablas y CRUD UI                   |

---

## 🧱 Scripts Disponibles

```bash
pnpm run dev      # Desarrollo
pnpm run build    # Compilar producción
pnpm run start    # Servidor en producción
pnpm run lint     # Análisis de código
```

---

## 🚀 Deployment

### Vercel (Recomendado)

```bash
pnpm run build
vercel --prod
```

### Otros Providers

```bash
pnpm run build
pnpm start
```

---

## 🧩 Placeholders Globales

| Tag                        | Descripción                                          | Ejemplo                      |
| --------------------------- | ---------------------------------------------------- | ----------------------------- |
| `<PROJECT_NAME>`            | Nombre completo del proyecto / aplicación            | `MyNextApp`                   |
| `<PROJECT_DESCRIPTION>`     | Descripción breve del proyecto (SEO / metadatos)     | `Modern SaaS boilerplate`     |
| `<PROJECT_DOMAIN>`          | Dominio sin protocolo (`https://`) ni slash final    | `mynextapp.com`               |
| `<PROJECT_SUPPORT_EMAIL>`   | Correo de contacto o soporte                         | `support@mynextapp.com`       |
| `<PROJECT_TAGLINE>`         | Eslogan breve del proyecto (usado en marketing)      | `Build faster. Launch smarter.` |
| `<STRIPE_TEST_PRICE_ID>`    | ID de precio de Stripe para entorno de prueba        | `price_test_12345`            |
| `<STRIPE_PROD_PRICE_ID>`    | ID de precio de Stripe para entorno de producción    | `price_live_67890`            |
| `<STRIPE_TEST_PRICE_ID_2>`  | Segundo ID de prueba (si tienes otro plan)           | `price_test_secondary`        |
| `<STRIPE_PROD_PRICE_ID_2>`  | Segundo ID de producción                             | `price_live_secondary`        |
| `<AWS_BUCKET_NAME>`         | Nombre del bucket S3 (si usas AWS)                   | `myapp-assets`                |
| `<AWS_CDN_DOMAIN>`          | Dominio del CDN o CloudFront                         | `cdn.mynextapp.com`           |

> 🔍 **Para encontrar placeholders pendientes:**
    
	(
      echo "# Archivos con tags o comentarios pendientes de configuración"
      grep -rl "<PROJECT_" . \
        --exclude-dir=node_modules \
        --exclude-dir=.git \
        --exclude-dir=.next \
        --exclude-dir=.vscode \
        --exclude="*.lock" \
        --exclude="*.log"
    
      grep -rl "Actualizar los siguientes campos" . \
        --exclude-dir=node_modules \
        --exclude-dir=.git \
        --exclude-dir=.next \
        --exclude-dir=.vscode \
        --exclude="*.lock" \
        --exclude="*.log"
    
      grep -rl "PROJECT_NAME\|PROJECT_DESCRIPTION" . \
        --exclude-dir=node_modules \
        --exclude-dir=.git \
        --exclude-dir=.next \
        --exclude-dir=.vscode \
        --exclude="*.lock" \
        --exclude="*.log"
    
    ) | sort -u > filelist.log

### 🧾 Resultado actual (`filelist.log`)

**Archivos con tags o comentarios pendientes de configuración**

- ./app/blog/_assets/content.js
- ./app/blog/page.js
- ./app/page.js
- ./app/tos/page.js
- ./components/basic/FeaturesAccordion.js
- ./components/basic/FeaturesGrid.js
- ./components/basic/Pricing.js
- ./components/basic/Testimonials11.js
- ./components/basic/Testimonials3.js
- ./config.js
- ./next-sitemap.config.js

---

## 🧠 Troubleshooting

| Problema             | Causa probable             | Solución                            |
| -------------------- | -------------------------- | ----------------------------------- |
| Error 500 favicon    | Faltan assets en `/public` | Agrega favicon y logo               |
| Fallo de login       | Variables mal configuradas | Revisa `.env.local`                 |
| Tailwind sin aplicar | Configuración rota         | Ejecuta `pnpm dlx tailwindcss init` |

---

## ✅ Checklist de Personalización

* [ ] Reemplazar `<PROJECT_NAME>` en `config.js`, `seo.js`, `package.json`
* [ ] Configurar `NEXTAUTH_*` en `.env.local`
* [ ] Actualizar favicon/logo en `/public/`
* [ ] Ajustar dominio y correos en `config.js`
* [ ] Revisar placeholders con `grep -r "<PROJECT_" .`

---

## ✅ Checklist de Personalización

## ⚙️ Comandos de Configuración Previa

## ⚙️ Comandos de Configuración Previa

## ⚙️ Comandos de Configuración Previa

- Ver dependencias instaladas: `pnpm list --depth=0`  
- Actualizar todas las dependencias a la última versión: `pnpm update --latest`

| Acción | Comando | Descripción |
| --- | --- | --- |
| Verificar npm instalado (incluido con Node.js) | `npm -v` | Comprueba que npm está disponible en el sistema |
| Instalar pnpm globalmente | `npm install -g pnpm` | Instala pnpm de forma global usando npm |
| Instalar adaptador MongoDB para autenticación | `pnpm install @auth/mongodb-adapter@latest` | Permite a NextAuth almacenar sesiones y usuarios en MongoDB |
| Instalar componentes accesibles de UI | pnpm install @headlessui/react@latest | Componentes React sin estilos predeterminados, usados junto con Tailwind
| Instalar dependencias de Estilos y Plugins | pnpm install daisyui@latest tailwindcss@latest autoprefixer@latest postcss@latest @tailwindcss/postcss | Instala los frameworks de estilos y el plugin de PostCSS requerido para el correcto funcionamiento de Tailwind en entornos modernos de Next.js
| Instalar iconos Heroicons para React | `pnpm install @heroicons/react@latest` | Paquete oficial de iconos SVG optimizados para React |
| Instalar Autoprefixer | `pnpm install autoprefixer@latest` | Añade prefijos CSS automáticamente para compatibilidad con navegadores |
| Instalar Axios | `pnpm install axios@latest` | Cliente HTTP para consumir APIs en frontend y backend |
| Instalar Crisp SDK Web | `pnpm install crisp-sdk-web@latest` | SDK para integrar el chat de soporte Crisp en la web |
| Instalar ESLint Config Next | `pnpm install eslint-config-next@latest` | Reglas ESLint recomendadas por el equipo de Next.js |
| Instalar ESLint | `pnpm install eslint@latest` | Analiza el código y detecta errores o malas prácticas |
| Instalar Form-Data | `pnpm install form-data@latest` | Permite construir formularios con archivos y datos para envío HTTP |
| Instalar MongoDB Driver | `pnpm install mongodb@latest` | Controlador oficial de MongoDB para Node.js |
| Instalar Mongoose | `pnpm install mongoose@latest` | ODM para definir modelos y esquemas de MongoDB |
| Instalar NextAuth | `pnpm install next-auth@latest` | Sistema completo de autenticación para Next.js |
| Instalar Next Sitemap | `pnpm install next-sitemap@latest` | Genera automáticamente sitemaps para SEO en proyectos Next.js |
| Instalar Next.js | `pnpm install next@latest` | Framework React para SSR, ISR y App Router |
| Instalar Next.js Toploader | `pnpm install nextjs-toploader@latest` | Barra superior de carga estilo YouTube o Vercel |
| Instalar Nodemailer | `pnpm install nodemailer@latest` | Librería para enviar correos desde Node.js |
| Instalar PostCSS | `pnpm install postcss@latest` | Herramienta para procesar CSS con plugins |
| Instalar React DOM | `pnpm install react-dom@latest` | Motor de renderizado para React en navegador o servidor |
| Instalar React Hot Toast | `pnpm install react-hot-toast@latest` | Notificaciones visuales personalizables |
| Instalar React Syntax Highlighter | `pnpm install react-syntax-highlighter@latest` | Resaltado de código para componentes React (blog, docs) |
| Instalar React Tooltip | `pnpm install react-tooltip@latest` | Tooltips ligeros y personalizables para React |
| Instalar React | `pnpm install react@latest` | Librería base para construir interfaces de usuario |
| Instalar Resend SDK | `pnpm install resend@latest` | SDK para enviar emails transaccionales con la API de Resend |
| Instalar Sharp | `pnpm install sharp@latest` | Librería para procesar imágenes de manera rápida y eficiente |
| Instalar Stripe | `pnpm install stripe@latest` | SDK oficial para integrar pagos con Stripe |
| Instalar Vercel Speed Insights | `pnpm install @vercel/speed-insights@latest` | Herramienta de medición de rendimiento integrada con Vercel |
| Instalar Gitleaks            | sudo apt install gitleaks | Descarga e instala la versión estable de Gitleaks desde los repositorios del sistema |
| Verificar Gitleaks instalado | gitleaks --version        | Comprueba que Gitleaks se instaló correctamente y muestra la versión instalada       |
| Ejecutar análisis con Gitleaks en el repositorio actual | gitleaks detect --source . | Escanea el directorio actual en busca de secretos o credenciales expuestas en el historial de Git y archivos presentes |
| Instalar dependencias de script de imágenes | npm i sharp glob | Instala 'sharp' (procesamiento de imágenes) y 'glob' (búsqueda de archivos) para el script de conversión
| Instalar el paquete de utilidad "tree" | sudo apt install tree | Permite crear una vista en forma de árbol de los archivos y carpetas dentro de una ruta.

## Comando para generar el Tree
- tree -I '.git|.next|node_modules|.env.local' > tree.txt