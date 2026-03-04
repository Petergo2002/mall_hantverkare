import { Star } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Testimonials() {
    return (
        <section className="bg-secondary/30 py-24 border-y border-border/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{siteConfig.testimonials.title}</h2>
                    <p className="text-muted-foreground text-lg">
                        {siteConfig.testimonials.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {siteConfig.testimonials.reviews.map((review, i) => (
                        <div key={i} className="bg-background border border-border/50 rounded-2xl p-8 shadow-subtle">
                            <div className="flex gap-1 mb-6 text-yellow-400">
                                {[...Array(review.rating)].map((_, idx) => (
                                    <Star key={idx} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-foreground leading-relaxed italic mb-8">
                                &quot;{review.text}&quot;
                            </p>
                            <div>
                                <p className="font-semibold">{review.name}</p>
                                <p className="text-sm text-muted-foreground">{review.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
