import { ContactForm } from "@/components/ui/ContactForm";
import { siteConfig } from "@/config/siteConfig";
import { MapPin, Phone, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt",
    description: siteConfig.pages.contact.metaDescription,
};

export default function ContactPage() {
    return (
        <section className="pt-32 pb-24 bg-background min-h-screen">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <div className="flex flex-col justify-start">
                        <span className="inline-block self-start py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wider uppercase mb-6 shadow-subtle border border-border/50">
                            {siteConfig.pages.contact.badge}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                            {siteConfig.pages.contact.titlePrefix} <span className="text-muted-foreground">{siteConfig.pages.contact.titleHighlight}</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-balance max-w-md">
                            {siteConfig.pages.contact.intro}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">{siteConfig.pages.contact.phoneTitle}</h3>
                                    <a href={`tel:${siteConfig.contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {siteConfig.contact.phone}
                                    </a>
                                    <p className="text-sm text-muted-foreground/70 mt-1">{siteConfig.contact.businessHours}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">{siteConfig.pages.contact.emailTitle}</h3>
                                    <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {siteConfig.contact.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">{siteConfig.pages.contact.locationTitle}</h3>
                                    <p className="text-muted-foreground">
                                        {siteConfig.contact.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Background blur for the form */}
                        <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-xl pointer-events-none" />
                        <div className="relative h-full flex items-center">
                            <div className="w-full">
                                <ContactForm />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
