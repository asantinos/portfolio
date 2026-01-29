import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const host = context.request.headers.get("host") ?? "";
  const pathname = context.url.pathname;

  // Subdominio → app (rewrite)
  if (pathname === "/") {
    if (host.startsWith("stride.asantinos.com")) {
      return context.rewrite("/apps/stride");
    }
    if (host.startsWith("monked.asantinos.com")) {
      return context.rewrite("/apps/monked");
    }
  }

  // Canonical: dominio principal → subdominios
  if (
    (host === "asantinos.com" || host === "www.asantinos.com") &&
    pathname.startsWith("/apps/stride")
  ) {
    return context.redirect("https://stride.asantinos.com", 308);
  }

  if (
    (host === "asantinos.com" || host === "www.asantinos.com") &&
    pathname.startsWith("/apps/monked")
  ) {
    return context.redirect("https://monked.asantinos.com", 308);
  }

  return next();
});
