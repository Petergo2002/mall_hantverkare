import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-16 pb-16 md:pt-24 md:pb-24 border-b border-border/50">
            <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-muted text-foreground text-sm font-semibold tracking-wider uppercase mb-6 shadow-sm border border-border">
                        {siteConfig.hero.badge}
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl text-balance mb-6">
                        {siteConfig.hero.headingPrefix}{" "}
                        <span className="text-primary">{siteConfig.hero.headingAccent}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance mb-8 mx-auto lg:mx-0">
                        {siteConfig.hero.description}
                    </p>

                    <ul className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 mb-10 text-sm md:text-base font-medium text-foreground/80">
                        {siteConfig.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-secondary" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href={`tel:${siteConfig.contact.phone}`}
                            className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Phone className="w-5 h-5" />
                            {siteConfig.hero.primaryCta}
                        </a>
                        <Link
                            href="/kontakt"
                            className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border-2 border-primary/20 bg-background px-8 text-base font-bold text-primary shadow-sm transition-colors hover:bg-muted hover:border-primary/30"
                        >
                            {siteConfig.hero.secondaryCta}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 w-full max-w-2xl lg:max-w-none relative animate-fade-in">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://images.unsplash.com/photo-1541888086925-081349e6dbcc?q=80&w=2000&auto=format&fit=crop"
                            alt={`${siteConfig.name} - ${siteConfig.shortDescription}`}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 border-4 border-background/20 rounded-2xl pointer-events-none" />
                    </div>

                    {/* Floating badge for extra trust */}
                    <div className="absolute -bottom-6 -left-6 md:-left-10 bg-background p-6 rounded-xl shadow-xl border border-border flex items-center gap-4 hidden sm:flex">
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground">
                            <span className="font-bold text-lg">5.0</span>
                        </div>
                        <div>
                            <p className="font-bold text-sm text-foreground">Högsta betyg</p>
                            <p className="text-xs text-muted-foreground">Baserat på kundomdömen</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
