import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const host = context.request.headers.get("host") ?? "";
  const { pathname, search } = context.url;

  // 0) Evita loops: si ya estás en /apps/... no vuelvas a reescribir
  if (pathname.startsWith("/apps/")) {
    return next();
  }

  // 1) Subdominios → app (rewrite) para CUALQUIER ruta: /, /privacy, /whatever
  if (host.startsWith("stride.asantinos.com")) {
    return context.rewrite(`/apps/stride${pathname}${search}`);
  }

  if (host.startsWith("monked.asantinos.com")) {
    return context.rewrite(`/apps/monked${pathname}${search}`);
  }

  // 2) Canonical: dominio principal → subdominios
  // Mantiene el path (ej: /apps/stride/privacy -> https://stride.asantinos.com/privacy)
  if (host === "asantinos.com" || host === "www.asantinos.com") {
    if (pathname === "/apps/stride" || pathname.startsWith("/apps/stride/")) {
      const rest = pathname.replace(/^\/apps\/stride/, "") || "/";
      return context.redirect(`https://stride.asantinos.com${rest}${search}`, 308);
    }

    if (pathname === "/apps/monked" || pathname.startsWith("/apps/monked/")) {
      const rest = pathname.replace(/^\/apps\/monked/, "") || "/";
      return context.redirect(`https://monked.asantinos.com${rest}${search}`, 308);
    }
  }

  return next();
});
