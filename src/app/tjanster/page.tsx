import { siteConfig } from "@/config/siteConfig";
import { ServiceCard } from "@/components/ui/ServiceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Våra Tjänster",
    description: siteConfig.pages.services.metaDescription,
};

export default function ServicesPage() {
    return (
        <section className="pt-32 pb-24 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wider uppercase mb-6 shadow-subtle border border-border/50">
                        {siteConfig.pages.services.badge}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                        {siteConfig.pages.services.title}
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                        {siteConfig.pages.services.intro}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {siteConfig.services.map((service) => (
                        <ServiceCard
                            key={service.slug}
                            title={service.title}
                            description={service.description}
                            slug={service.slug}
                            iconName={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
