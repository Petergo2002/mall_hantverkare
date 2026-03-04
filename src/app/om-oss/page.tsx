import { siteConfig } from "@/config/siteConfig";
import { TrustIndicators } from "@/components/ui/TrustIndicators";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Om Oss",
    description: siteConfig.pages.about.metaDescription,
};

export default function AboutPage() {
    return (
        <>
            <section className="pt-32 pb-24 bg-background">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wider uppercase mb-6 shadow-subtle border border-border/50">
                                {siteConfig.pages.about.badge}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-8 text-balance">
                                {siteConfig.pages.about.titlePrefix} <span className="text-primary">{siteConfig.pages.about.titleHighlight}</span>
                            </h1>
                            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                                {siteConfig.pages.about.paragraphs.map((paragraph, index) => (
                                    <p key={index} className={index > 0 ? "mt-6" : undefined}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="relative w-full aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://images.unsplash.com/photo-1541888086925-081349e6dbcc?q=80&w=1200&auto=format&fit=crop"
                                alt={siteConfig.pages.about.titleHighlight}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <TrustIndicators />
        </>
    );
}
