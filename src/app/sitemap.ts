import { siteConfig } from "@/config/siteConfig";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Static routes
    const routes = ["", "/om-oss", "/tjanster", "/omraden", "/kontakt"].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly" as const,
            priority: route === "" ? 1 : 0.8,
        })
    );

    // Dynamic service routes
    const serviceRoutes = siteConfig.services.map((service) => ({
        url: `${baseUrl}/tjanster/${service.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    // Programmatic area landing pages
    const programmaticRoutes = siteConfig.services.flatMap((service) =>
        siteConfig.areas.map((area) => ({
            url: `${baseUrl}/tjanster/${service.slug}/${area.slug}`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        }))
    );

    return [...routes, ...serviceRoutes, ...programmaticRoutes];
}
