"use client";

import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call for form submission, as user didn't request backend API setup but requested "production-ready complete website" frontend with placeholders where needed (or netlify forms etc.)
        setTimeout(() => setStatus("success"), 1500);
    };

    if (status === "success") {
        return (
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center animate-fade-in flex flex-col items-center justify-center h-full min-h-[400px]">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl mb-6">
                    ✓
                </div>
                <h3 className="text-2xl font-bold mb-2">Tack för ditt meddelande!</h3>
                <p className="text-muted-foreground">Vi återkommer till dig så snart vi kan.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-sm font-semibold text-primary hover:underline"
                >
                    Skicka ett till meddelande
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-background border border-border/50 rounded-2xl p-6 md:p-8 shadow-subtle flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label htmlFor="namn" className="text-sm font-medium">Namn *</label>
                    <input
                        type="text"
                        id="namn"
                        required
                        className="w-full h-12 px-4 rounded-lg bg-muted border border-transparent focus:bg-background focus:border-primary/30 focus:ring-1 focus:ring-primary/30 outline-none transition-all"
                        placeholder="Förnamn Efternamn"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="telefon" className="text-sm font-medium">Telefon *</label>
                    <input
                        type="tel"
                        id="telefon"
                        required
                        className="w-full h-12 px-4 rounded-lg bg-muted border border-transparent focus:bg-background focus:border-primary/30 focus:ring-1 focus:ring-primary/30 outline-none transition-all"
                        placeholder="070 123 45 67"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label htmlFor="tjanst" className="text-sm font-medium">Tjänst</label>
                    <select
                        id="tjanst"
                        className="w-full h-12 px-4 rounded-lg bg-muted border border-transparent focus:bg-background focus:border-primary/30 focus:ring-1 focus:ring-primary/30 outline-none transition-all appearance-none"
                    >
                        <option value="">Välj tjänst</option>
                        {siteConfig.services.map(s => (
                            <option key={s.slug} value={s.title}>{s.title}</option>
                        ))}
                        <option value="annat">Annat</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="omrade" className="text-sm font-medium">Område</label>
                    <select
                        id="omrade"
                        className="w-full h-12 px-4 rounded-lg bg-muted border border-transparent focus:bg-background focus:border-primary/30 focus:ring-1 focus:ring-primary/30 outline-none transition-all appearance-none"
                    >
                        <option value="">Välj område</option>
                        {siteConfig.areas.map(a => (
                            <option key={a.slug} value={a.name}>{a.name}</option>
                        ))}
                        <option value="annat">{siteConfig.forms.areaFallbackOption}</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="meddelande" className="text-sm font-medium">Meddelande</label>
                <textarea
                    id="meddelande"
                    rows={4}
                    className="w-full p-4 rounded-lg bg-muted border border-transparent focus:bg-background focus:border-primary/30 focus:ring-1 focus:ring-primary/30 outline-none transition-all resize-none"
                    placeholder="Beskriv ditt projekt kortfattat..."
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="h-14 mt-2 w-full bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-70 flex items-center justify-center"
            >
                {status === "submitting" ? "Skickar..." : "Skicka förfrågan"}
            </button>
        </form>
    );
}
