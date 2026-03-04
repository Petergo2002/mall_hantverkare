import { siteConfig } from "@/config/siteConfig";

export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: siteConfig.name,
        image: `${siteConfig.url}/og-image.jpg`,
        "@id": siteConfig.url,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.schema.streetAddress,
            addressLocality: siteConfig.schema.addressLocality,
            postalCode: siteConfig.schema.postalCode,
            addressCountry: siteConfig.schema.addressCountry,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.schema.geo.latitude,
            longitude: siteConfig.schema.geo.longitude,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function ServiceSchema({ name, description }: { name: string; description: string }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: name,
        provider: {
            "@type": "LocalBusiness",
            name: siteConfig.name,
        },
        areaServed: siteConfig.areas.map(area => ({
            "@type": "City",
            name: area.name
        })),
        description: description,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
