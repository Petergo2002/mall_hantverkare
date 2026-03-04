import { Hero } from "@/components/ui/Hero";
import { TrustIndicators } from "@/components/ui/TrustIndicators";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Testimonials } from "@/components/ui/Testimonials";
import { ContactForm } from "@/components/ui/ContactForm";
import { MobileCallButton } from "@/components/ui/MobileCallButton";
import { FAQ } from "@/components/ui/FAQ";
import { LocalBusinessSchema } from "@/components/seo/SchemaMarkup";
import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />

      <Hero />
      <TrustIndicators />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                {siteConfig.home.services.title}
              </h2>
              <p className="text-muted-foreground text-lg text-balance">
                {siteConfig.home.services.description}
              </p>
            </div>
            <Link
              href="/tjanster"
              className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/70 transition-colors"
            >
              {siteConfig.home.services.ctaText} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      <section className="bg-muted/50 py-24 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              {siteConfig.home.areas.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {siteConfig.home.areas.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {siteConfig.areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/omraden#${area.slug}`}
                  className="inline-flex items-center gap-2 bg-background border border-border/50 rounded-full px-6 py-3 font-medium shadow-subtle hover:scale-105 active:scale-95 transition-all"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
                {siteConfig.home.aboutPreview.title}
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 text-balance">
                {siteConfig.home.aboutPreview.description}
              </p>
              <Link
                href="/om-oss"
                className="inline-flex h-14 items-center justify-center rounded-lg bg-background px-8 text-base font-medium text-foreground transition-colors hover:bg-background/90"
              >
                {siteConfig.home.aboutPreview.ctaText}
              </Link>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden relative shadow-2xl border border-primary-foreground/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356bfb?q=80&w=1200&auto=format&fit=crop"
                alt={siteConfig.home.aboutPreview.visualLabel}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              {siteConfig.home.faq.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {siteConfig.home.faq.description}
            </p>
          </div>
          <FAQ items={siteConfig.home.faq.items} />
        </div>
      </section>

      <section className="py-24 bg-muted/50 border-t border-border/50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
                {siteConfig.home.cta.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-balance">
                {siteConfig.home.cta.description}
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-background border border-border/50 flex items-center justify-center shadow-subtle shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {siteConfig.home.cta.directCallLabel}
                    </p>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-xl font-semibold hover:text-primary transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 lg:pt-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <MobileCallButton />
    </>
  );
}
