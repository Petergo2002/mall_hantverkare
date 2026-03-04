import { siteConfig } from "@/config/siteConfig";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ServiceSchema } from "@/components/seo/SchemaMarkup";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

type Props = {
    params: { serviceSlug: string };
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const service = siteConfig.services.find((s) => s.slug === params.serviceSlug);

    if (!service) {
        return { title: "Tjänst hittades inte" };
    }

    return {
        title: service.title,
        description: service.description,
    };
}

// Generate static parameters at build time for programmatic performance
export async function generateStaticParams() {
    return siteConfig.services.map((service) => ({
        serviceSlug: service.slug,
    }));
}

export default function ServicePage({ params }: Props) {
    const service = siteConfig.services.find((s) => s.slug === params.serviceSlug);

    if (!service) {
        notFound();
    }

    const processSteps = siteConfig.programmatic.servicePage.processSteps;

    return (
        <>
            <ServiceSchema name={service.title} description={service.description} />

            <section className="pt-32 pb-24 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6 shadow-subtle border border-primary/20">
                                Tjänst
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-balance">
                                {service.title}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/kontakt"
                                    className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                                >
                                    Begär offert
                                </Link>
                                <a
                                    href={`tel:${siteConfig.contact.phone}`}
                                    className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-input bg-background px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                    <Phone className="w-5 h-5" /> Ring oss
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-muted/50 border-y border-border/50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{siteConfig.programmatic.servicePage.processTitle}</h2>
                        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                            {siteConfig.programmatic.servicePage.processDescription}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, i) => (
                            <div key={i} className="relative">
                                {i !== processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-[2.5rem] left-[50%] w-full h-[1px] bg-border z-0" />
                                )}
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-background border border-border/50 shadow-subtle flex items-center justify-center text-xl font-bold text-primary mb-6">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Areas */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-8">{siteConfig.programmatic.servicePage.whyChooseTitle}</h2>
                            <ul className="space-y-6">
                                {siteConfig.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                        <span className="text-lg text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
                            <h2 className="text-2xl font-bold tracking-tight mb-6">{siteConfig.programmatic.servicePage.areasTitlePrefix} {service.title.toLowerCase()} i:</h2>
                            <div className="space-y-3">
                                {siteConfig.areas.map((area) => (
                                    <Link
                                        key={area.slug}
                                        href={`/tjanster/${service.slug}/${area.slug}`}
                                        className="flex items-center justify-between p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors shadow-sm hover:shadow-subtle group"
                                    >
                                        <span className="font-medium text-foreground">{area.name}</span>
                                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
