import { defineMiddleware } from "astro:middleware";

// Añade aquí nuevas apps — no hace falta tocar nada más en el middleware
const APPS = ["stride", "monked", "pump"];

export const onRequest = defineMiddleware((context, next) => {
  const host = context.request.headers.get("host") ?? "";
  const { pathname, search } = context.url;

  // 0) Evita loops: si ya estás en /apps/... no vuelvas a reescribir
  if (pathname.startsWith("/apps/")) {
    // 2) Canonical: dominio principal → subdominios
    if (host === "asantinos.com" || host === "www.asantinos.com") {
      for (const app of APPS) {
        const prefix = `/apps/${app}`;
        if (pathname === prefix || pathname.startsWith(`${prefix}/`)) {
          const rest = pathname.slice(prefix.length) || "/";
          return context.redirect(`https://${app}.asantinos.com${rest}${search}`, 308);
        }
      }
    }
    return next();
  }

  // 1) Subdominios → app (rewrite) para CUALQUIER ruta
  for (const app of APPS) {
    if (host.startsWith(`${app}.asantinos.com`)) {
      return context.rewrite(`/apps/${app}${pathname}${search}`);
    }
  }

  return next();
});
