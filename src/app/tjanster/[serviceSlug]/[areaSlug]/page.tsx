import { siteConfig } from "@/config/siteConfig";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { FAQSchema, LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { FAQ } from "@/components/ui/FAQ";
import { ContactForm } from "@/components/ui/ContactForm";
import { ChevronRight, ShieldCheck } from "lucide-react";

type Props = {
    params: { serviceSlug: string; areaSlug: string };
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const service = siteConfig.services.find((s) => s.slug === params.serviceSlug);
    const area = siteConfig.areas.find((a) => a.slug === params.areaSlug);

    if (!service || !area) {
        return { title: "Sidan hittades inte" };
    }

    return {
        title: `${service.title} i ${area.name}`,
        description: `Letar du efter experthjälp med ${service.title.toLowerCase()} i ${area.name}? Kontakta ${siteConfig.name} för professionella och pålitliga resultat.`,
    };
}

// Generate static programmatic SEO combinations
export async function generateStaticParams() {
    const paths = [];
    for (const service of siteConfig.services) {
        for (const area of siteConfig.areas) {
            paths.push({
                serviceSlug: service.slug,
                areaSlug: area.slug,
            });
        }
    }
    return paths;
}

export default function ProgrammaticLandingPage({ params }: Props) {
    const service = siteConfig.services.find((s) => s.slug === params.serviceSlug);
    const area = siteConfig.areas.find((a) => a.slug === params.areaSlug);

    if (!service || !area) {
        notFound();
    }

    const generatedFaqs = [
        {
            question: `Vad kostar en ${service.title.toLowerCase()} i ${area.name}?`,
            answer: `Priset för en ${service.title.toLowerCase()} varierar beroende på projektets omfattning och materialval. Kontakta oss för en kostnadsfri offert anpassad för ditt hem i ${area.name}.`,
        },
        {
            question: `Hur lång tid tar en ${service.title.toLowerCase()}?`,
            answer: "Tidsåtgången beror helt på storleken på projektet. Under vår första konsultation ger vi en realistisk tidsplan som vi håller fast vid.",
        },
        {
            question: `Kan ni hjälpa till med planering och inköp?`,
            answer: `Absolut. Vi erbjuder helhetslösningar för våra kunder i ${area.name} där vi bistår från idé och materialval till färdigt resultat.`,
        },
        {
            question: `Arbetar ni enbart i ${area.name}?`,
            answer: `${siteConfig.programmatic.landing.localCoverageText.replace("{primaryArea}", siteConfig.primaryServiceArea)} Vi utför årligen flera framgångsrika projekt just i ${area.name}.`,
        },
        {
            question: `Hur bokar jag en offert för ${service.title.toLowerCase()}?`,
            answer: "Fyll i kontaktformuläret på vår hemsida eller slå oss en signal, så bokar vi in ett förutsättningslöst möte hos dig.",
        },
    ];

    return (
        <>
            <LocalBusinessSchema />
            <ServiceSchema name={`${service.title} i ${area.name}`} description={`Specialiserad ${service.title.toLowerCase()} i ${area.name}.`} />
            <FAQSchema items={generatedFaqs} />

            {/* SEO Breadcrumbs */}
            <div className="bg-background pt-24 pb-4">
                <div className="container mx-auto px-4 max-w-5xl">
                    <nav className="flex text-sm text-muted-foreground whitespace-nowrap overflow-x-auto" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link href="/" className="hover:text-primary transition-colors">Hem</Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <ChevronRight className="w-4 h-4 mx-1" />
                                    <Link href="/tjanster" className="hover:text-primary transition-colors">Tjänster</Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <ChevronRight className="w-4 h-4 mx-1" />
                                    <Link href={`/tjanster/${service.slug}`} className="hover:text-primary transition-colors">{service.title}</Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <ChevronRight className="w-4 h-4 mx-1 text-foreground" />
                                    <span className="font-medium text-foreground">{area.name}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Landing Hero */}
            <section className="pt-8 pb-20 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-balance">
                                {service.title} i <span className="text-muted-foreground">{area.name}</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-balance">
                                Bor du i {area.name} och funderar på att förnya ditt hem? Våra lokala hantverkare är specialister på {service.title.toLowerCase()} och erbjuder tjänster med totalentreprenad.
                                Självklart anpassar vi oss efter dina önskemål.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {siteConfig.programmatic.landing.perks.map((perk, i) => (
                                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                        {perk}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-xl pointer-events-none" />
                            <div className="relative">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects and Content */}
            <section className="py-24 bg-muted/50 border-y border-border/50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Vanliga projekt vi gör i {area.name}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                        Vi känner väl till utmaningarna och behoven för bostäder i {area.name}. Oavsett om det rör sig om moderna villor, äldre sekelskifteshus eller bostadsrätter, anpassar vi vår {service.title.toLowerCase()} för att smälta in med fastighetens karaktär.
                        Hos oss står alltid trygghet och ett professionellt slutresultat i fokus.
                    </p>
                </div>
            </section>

            {/* Localized FAQ */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter mb-4">Frågor och svar för {area.name}</h2>
                        <p className="text-muted-foreground text-lg">Här besvarar vi de vanligaste funderingarna om just vårt utbud gällande {service.title.toLowerCase()}.</p>
                    </div>
                    <FAQ items={generatedFaqs} />
                </div>
            </section>

        </>
    );
}
