import { Shield, Wrench, CheckCircle, Users } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function TrustIndicators() {
    const renderIcon = (icon: string) => {
        switch (icon) {
            case "shield":
                return <Shield className="w-6 h-6" />;
            case "users":
                return <Users className="w-6 h-6" />;
            case "check":
                return <CheckCircle className="w-6 h-6" />;
            case "wrench":
                return <Wrench className="w-6 h-6" />;
            default:
                return <Shield className="w-6 h-6" />;
        }
    };

    return (
        <section className="py-24 bg-primary border-y border-primary/20 text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="mb-14 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-primary-foreground">
                        {siteConfig.trustIndicators.title}
                    </h2>
                    <p className="text-primary-foreground/80 text-lg leading-relaxed text-balance">
                        {siteConfig.trustIndicators.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {siteConfig.trustIndicators.items.map((item, i) => (
                        <div
                            key={i}
                            className="group p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-secondary/50 transition-all duration-300 flex flex-col items-start gap-5"
                        >
                            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shadow-md text-secondary-foreground group-hover:-translate-y-1 transition-transform duration-300">
                                {renderIcon(item.icon)}
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-foreground mb-2 text-xl tracking-tight">{item.title}</h3>
                                <p className="text-primary-foreground/70 leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
