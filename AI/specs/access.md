# Spec: Access Control / License Validation API

## Overview
Sistema de validación de licencias para productos cliente (ej. kodem-tcg.com). El portfolio actúa como servidor de licencias; los productos cliente consultan este endpoint antes de renderizar para decidir si muestran la app o una página de "mantenimiento".

---

## Objetivos
- **Control de acceso**: Activar/desactivar productos remotamente sin tocar el código del cliente.
- **Mensaje neutro**: "Página temporalmente abajo por mantenimiento" (no exponer impagos).
- **Extensible**: Soporte para múltiples productos/claves (kodem, otro-producto, etc.).
- **Sin backend**: Implementado como API Route de Astro en Vercel (serverless).

---

## Arquitectura

### 1. Configuración central (`src/data/access.ts`)
```ts
// src/data/access.ts
export const accessConfig = {
  kodem: {
    enabled: true,
    license: "PRO-2025-001",
    expiresAt: "2026-12-31T23:59:59Z", // ISO 8601
    metadata: {
      productName: "Kodem TCG",
      maxUsers: 100,
    },
  },
  // futuro: "otro-producto": { ... }
} as const;

export type ProductKey = keyof typeof accessConfig;
export type AccessResponse = {
  enabled: boolean;
  license?: string;
  expiresAt?: string;
  metadata?: Record<string, unknown>;
};
```

### 2. API Route (`src/pages/api/access/[product].ts`)
```
GET /api/access/kodem
  → 200 { enabled: true, license: "PRO-2025-001", expiresAt: "...", metadata: {...} }
  → 404 { enabled: false, error: "Product not found" }
  → 410 { enabled: false, error: "License expired" } (si expiresAt < now)

Query params opcionales:
  ?format=json (default)
  ?format=bool → devuelve solo "true" / "false" como text/plain
```

### 3. Cliente (kodem-tcg.com)
```ts
// En el entry point de la app cliente (Astro/Next/React)
async function checkLicense(productKey: string): Promise<boolean> {
  const res = await fetch(`https://jfespanolito.dev/api/access/${productKey}?format=bool`);
  return res.ok && (await res.text()) === "true";
}

// Uso:
if (!(await checkLicense("kodem"))) {
  showMaintenancePage(); // "Página temporalmente abajo por mantenimiento"
  return;
}
renderApp();
```

---

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/access/:product` | Valida licencia de un producto |
| GET | `/api/access/:product?format=bool` | Respuesta booleana simple (text/plain) |

### Response schema (JSON)
```ts
// Success (200)
{
  "enabled": true,
  "license": "PRO-2025-001",
  "expiresAt": "2026-12-31T23:59:59Z",
  "metadata": { "productName": "Kodem TCG", "maxUsers": 100 }
}

// Not found (404)
{ "enabled": false, "error": "Product not found" }

// Expired (410)
{ "enabled": false, "error": "License expired", "expiredAt": "2026-12-31T23:59:59Z" }
```

---

## Flujo de despliegue

1. **Editar `src/data/access.ts`** → activar/desactivar `enabled`, actualizar `expiresAt`.
2. **Commit + push** → Vercel rebuild automático (serverless function actualizada).
3. **Cliente** consulta en runtime (cada carga o con cache TTL corto).

---

## Seguridad / Consideraciones

- **No hay autenticación fuerte**: El endpoint es público. Para mayor seguridad:
  - Firmar respuesta con HMAC (clave compartida) y verificar en cliente.
  - O restringir por `Referer` / `Origin` (headers) — básico, evita hotlinking casual.
- **Cache**: Vercel cachea por defecto. Añadir headers:
  ```ts
  export const GET = async ({ params }) => {
    return new Response(JSON.stringify(data), {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=60", // 1 min
        "Content-Type": "application/json",
      },
    });
  };
  ```
- **Rate limiting**: Vercel Edge Functions / Middleware si se abusa.

---

## Extensibilidad futura

- **Webhooks**: Notificar a clientes cuando cambia su licencia (POST a URL registrada).
- **Dashboard admin**: UI simple para editar `access.ts` sin tocar código (genera PR).
- **Multi-entorno**: `enabled.staging`, `enabled.production`.
- **Métricas**: Log de checks (producto, IP, timestamp) → analytics.

---

## Tareas de implementación (checklist)

- [ ] Crear `src/data/access.ts` con tipado estricto
- [ ] Crear `src/pages/api/access/[product].ts` (Astro API route)
- [ ] Añadir headers `Cache-Control` apropiados
- [ ] Documentar formato de respuesta en README del proyecto
- [ ] Probar local: `npm run dev` → `curl localhost:4321/api/access/kodem`
- [ ] Desplegar a Vercel y validar en producción
- [ ] Integrar check en kodem-tcg.com (cliente)

---

## Referencias
- Astro API Routes: https://docs.astro.build/en/guides/endpoints/
- Vercel Edge Caching: https://vercel.com/docs/edge-network/caching