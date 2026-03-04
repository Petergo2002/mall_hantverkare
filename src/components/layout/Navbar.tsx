"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full glass">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    {/* A simple typographic logo emphasizing clean design */}
                    <span className="text-xl font-bold tracking-tighter">
                        {siteConfig.brandName}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    <Link href="/" className="text-sm font-medium hover:text-primary/70 transition-colors">
                        Hem
                    </Link>
                    <Link href="/om-oss" className="text-sm font-medium hover:text-primary/70 transition-colors">
                        Om Oss
                    </Link>
                    <Link href="/tjanster" className="text-sm font-medium hover:text-primary/70 transition-colors">
                        Tjänster
                    </Link>
                    <Link href="/omraden" className="text-sm font-medium hover:text-primary/70 transition-colors">
                        Områden
                    </Link>
                    <Link
                        href="/kontakt"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Kontakt
                    </Link>
                    <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                        <Phone className="w-4 h-4" />
                        {siteConfig.hero.primaryCta}
                    </a>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t bg-background px-4 py-4 shadow-subtle absolute w-full left-0">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="/"
                            className="text-lg font-medium py-2 border-b border-border/40"
                            onClick={() => setIsOpen(false)}
                        >
                            Hem
                        </Link>
                        <Link
                            href="/om-oss"
                            className="text-lg font-medium py-2 border-b border-border/40"
                            onClick={() => setIsOpen(false)}
                        >
                            Om Oss
                        </Link>
                        <Link
                            href="/tjanster"
                            className="text-lg font-medium py-2 border-b border-border/40"
                            onClick={() => setIsOpen(false)}
                        >
                            Tjänster
                        </Link>
                        <Link
                            href="/omraden"
                            className="text-lg font-medium py-2 border-b border-border/40"
                            onClick={() => setIsOpen(false)}
                        >
                            Områden
                        </Link>
                        <Link
                            href="/kontakt"
                            className="inline-flex h-12 mt-2 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Kontakt
                        </Link>
                        <a
                            href={`tel:${siteConfig.contact.phone}`}
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-input bg-background/50 px-6 text-base font-medium transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            {siteConfig.contact.phone}
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
