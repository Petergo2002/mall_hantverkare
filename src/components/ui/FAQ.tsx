"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
    items: { question: string; answer: string }[];
}

export function FAQ({ items }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="w-full max-w-3xl mx-auto divide-y divide-border/50 border-y border-border/50">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={index} className="py-2">
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="flex w-full items-center justify-between py-4 text-left font-medium transition-colors hover:text-primary focus:outline-none"
                        >
                            <span className="text-base md:text-lg">{item.question}</span>
                            <ChevronDown
                                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                        >
                            <div className="overflow-hidden text-muted-foreground leading-relaxed">
                                <p className="pb-6 pt-2 pr-12">{item.answer}</p>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Schema generation is handled separately on the page component but these questions align with it */}
        </div>
    );
}
