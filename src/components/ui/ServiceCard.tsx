import Link from "next/link";
import {
    ArrowRight,
    Bolt,
    Droplets,
    Hammer,
    Home,
    Paintbrush,
    Plug,
    ShowerHead,
    Wrench,
} from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    slug: string;
    iconName: string;
}

export function ServiceCard({ title, description, slug, iconName }: ServiceCardProps) {
    // Simple icon mapper based on string from siteConfig
    const renderIcon = () => {
        switch (iconName) {
            case "kök":
            case "kitchen":
                return <Home className="w-6 h-6" />;
            case "inredning":
            case "interior":
                return <Hammer className="w-6 h-6" />;
            case "electric":
            case "electrical":
                return <Bolt className="w-6 h-6" />;
            case "plumbing":
                return <Droplets className="w-6 h-6" />;
            case "bathroom":
                return <ShowerHead className="w-6 h-6" />;
            case "painting":
                return <Paintbrush className="w-6 h-6" />;
            case "installation":
                return <Plug className="w-6 h-6" />;
            case "repair":
                return <Wrench className="w-6 h-6" />;
            default:
                return <Hammer className="w-6 h-6" />;
        }
    };

    const renderImage = () => {
        switch (iconName) {
            case "kök":
            case "kitchen":
                return "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=800&auto=format&fit=crop";
            case "inredning":
            case "interior":
                return "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop";
            case "electric":
            case "electrical":
                return "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop";
            case "plumbing":
            case "bathroom":
                return "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop";
            case "painting":
                return "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop";
            default:
                return "https://images.unsplash.com/photo-1504307651254-35680f356bfb?q=80&w=800&auto=format&fit=crop";
        }
    };

    return (
        <div className="group relative flex flex-col bg-background border border-border/50 rounded-2xl shadow-sm hover:shadow-subtle transition-all duration-300 overflow-hidden">
            <div className="h-48 w-full relative overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={renderImage()} alt={title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-background/90 backdrop-blur-sm text-primary flex items-center justify-center shadow-sm">
                    {renderIcon()}
                </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                    {description}
                </p>

                <Link
                    href={`/tjanster/${slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto"
                >
                    Läs mer om {title.toLowerCase()}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Subtle hover outline */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors pointer-events-none z-10" />
        </div>
    );
}
