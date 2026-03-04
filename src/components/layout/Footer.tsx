import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

                    <div className="col-span-1 md:col-span-1 border-b md:border-b-0 pb-8 md:pb-0">
                        <h3 className="text-xl font-bold tracking-tighter mb-4">
                            {siteConfig.brandName}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 pr-4">
                            {siteConfig.shortDescription}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Tjänster</h4>
                        <ul className="space-y-3">
                            {siteConfig.services.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/tjanster/${service.slug}`}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Områden</h4>
                        <ul className="space-y-3">
                            {siteConfig.areas.map((area) => (
                                <li key={area.slug}>
                                    <Link
                                        href={`/omraden#${area.slug}`}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {area.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Kontakt</h4>
                        <address className="not-italic space-y-3 text-sm text-muted-foreground">
                            <p>
                                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary transition-colors">
                                    {siteConfig.contact.phone}
                                </a>
                            </p>
                            <p>
                                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                                    {siteConfig.contact.email}
                                </a>
                            </p>
                            <p>{siteConfig.contact.address}</p>
                        </address>
                    </div>

                </div>

                <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs tracking-wide text-muted-foreground">
                        &copy; {currentYear} {siteConfig.name}. Alla rättigheter förbehållna.
                    </p>
                    <div className="flex gap-4">
                        <span className="text-xs text-muted-foreground">
                            Orgnr: {siteConfig.legal.orgNumber}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
