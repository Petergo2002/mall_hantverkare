import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Våra Arbetsområden",
    description: siteConfig.pages.areas.metaDescription,
};

export default function AreasPage() {
    return (
        <section className="pt-32 pb-24 bg-background min-h-screen">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wider uppercase mb-6 shadow-subtle border border-border/50">
                        {siteConfig.pages.areas.badge}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-balance">
                        {siteConfig.pages.areas.titlePrefix} <span className="text-muted-foreground">{siteConfig.pages.areas.titleHighlight}</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed text-balance max-w-2xl">
                        {siteConfig.pages.areas.intro}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {siteConfig.areas.map((area) => (
                        <div
                            key={area.slug}
                            id={area.slug}
                            className="bg-muted border border-border/50 rounded-2xl p-8 hover:bg-muted/80 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <MapPin className="w-6 h-6 text-primary" />
                                <h2 className="text-2xl font-bold">{area.name}</h2>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                Vi har flera års erfarenhet av att arbeta med projekt i {area.name}. Oavsett om det är i radhus, villa eller lägenhet har vi rätt kompetens.
                            </p>

                            <div className="space-y-3 mt-8">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">{siteConfig.pages.areas.popularServicesPrefix} {area.name}</h3>
                                {siteConfig.services.map(service => (
                                    <Link
                                        key={service.slug}
                                        href={`/tjanster/${service.slug}/${area.slug}`}
                                        className="flex items-center justify-between text-sm font-medium hover:text-primary transition-colors py-2 border-b border-border/40 last:border-0 group"
                                    >
                                        {service.title}
                                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
