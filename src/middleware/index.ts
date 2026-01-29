import { defineMiddleware } from "astro:middleware";

function isPublicAsset(pathname: string) {
  return (
    pathname.startsWith("/_astro/") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/fonts/")
  );
}

export const onRequest = defineMiddleware((context, next) => {
  const host = context.request.headers.get("host") ?? "";
  const { pathname, search } = context.url;

  // No tocar assets estáticos
  if (isPublicAsset(pathname)) return next();

  // Subdominios: mapear TODO a /apps/<app>/
  if (host.startsWith("stride.asantinos.com")) {
    return context.rewrite(`/apps/stride${pathname}${search}`);
  }

  if (host.startsWith("monked.asantinos.com")) {
    return context.rewrite(`/apps/monked${pathname}${search}`);
  }

  return next();
});
