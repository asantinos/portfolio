import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
    const host = context.request.headers.get("host") ?? "";
    const url = new URL(context.request.url);

    // Solo redirige cuando estás en la raíz del subdominio
    if (url.pathname === "/" || url.pathname === "") {
        if (host.startsWith("stride.asantinos.com")) {
            return context.redirect("/apps/stride", 308);
        }

        if (host.startsWith("monked.asantinos.com")) {
            return context.redirect("/apps/monked", 308);
        }
    }

    return next();
});
