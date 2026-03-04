import { siteConfig } from "@/config/siteConfig";
import { Phone } from "lucide-react";

export function MobileCallButton() {
    return (
        <div className="md:hidden fixed bottom-6 right-6 z-50">
            <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-transform"
                aria-label={`Ring ${siteConfig.brandName}`}
            >
                <Phone className="w-6 h-6" />
            </a>
        </div>
    );
}
