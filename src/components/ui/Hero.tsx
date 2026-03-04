import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-16 pb-16 md:pt-24 md:pb-32 border-b border-border/50">
            <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Text Content - Vänster */}
                <div className="flex-1 text-center lg:text-left animate-fade-in">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6 shadow-sm border border-primary/20">
                        {siteConfig.hero.badge}
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight max-w-3xl text-balance mb-6 lg:leading-[1.1]">
                        {siteConfig.hero.headingPrefix}{" "}
                        <span className="text-primary">{siteConfig.hero.headingAccent}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance mb-8 mx-auto lg:mx-0 font-medium">
                        {siteConfig.hero.description}
                    </p>

                    <ul className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 mb-10 text-sm md:text-base font-semibold text-foreground/80">
                        {siteConfig.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                        <a
                            href={`tel:${siteConfig.contact.phone}`}
                            className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                        >
                            <Phone className="w-5 h-5" />
                            {siteConfig.hero.primaryCta}
                        </a>
                        <Link
                            href="/kontakt"
                            className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border-2 border-primary/20 bg-background px-8 text-base font-bold text-primary shadow-sm transition-colors hover:bg-muted hover:border-primary/40 w-full sm:w-auto"
                        >
                            {siteConfig.hero.secondaryCta}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Image Content - Höger */}
                <div className="flex-1 w-full max-w-2xl lg:max-w-none relative animate-fade-in [animation-delay:200ms]">
                    <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[3/4] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border-border">
                        {/* Premium Unsplash Image */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://plus.unsplash.com/premium_photo-1681506591013-8ea7a8250a2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0"
                            alt={`${siteConfig.name} - ${siteConfig.shortDescription}`}
                            className="object-cover w-full h-full object-center hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 border-4 md:border-8 border-background/10 rounded-2xl md:rounded-[2.5rem] pointer-events-none" />

                        {/* Subtle overlay gradient at the bottom for image depth */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </div>

                    {/* Floating Trust Badge */}
                    <div className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-12 bg-background p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-border flex items-center gap-4 hidden md:flex hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <div>
                            <p className="font-extrabold text-sm sm:text-base text-foreground tracking-tight">Kvalitetsgaranti</p>
                            <p className="text-xs sm:text-sm text-muted-foreground font-medium">Lång erfarenhet i branschen</p>
                        </div>
                    </div>

                    {/* Floating Rating Badge */}
                    <div className="absolute -top-6 sm:-top-8 -right-4 sm:-right-8 bg-background p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-border items-center gap-3 hidden lg:flex hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex gap-1 text-yellow-400">
                            ★ ★ ★ ★ ★
                        </div>
                        <div>
                            <p className="font-bold text-sm text-foreground">5.0 / 5 Kundnöjdhet</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
