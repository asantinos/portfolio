"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { subscribeToSection, navigateToSection } from "@/lib/useFullpageScroll";

const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const unsubscribe = subscribeToSection((section) => {
            setActiveSection(section);
        });
        return unsubscribe;
    }, []);

    const scrollToSection = (index: number) => {
        navigateToSection(index);
    };

    return (
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden md:block">
            <div className="flex flex-col gap-6">
                {sections.map((section, index) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(index)}
                        className="group flex items-center gap-4"
                    >
                        <div className="relative">
                            <motion.div
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    activeSection === index
                                        ? "bg-white"
                                        : "bg-[#424245]"
                                }`}
                                animate={{
                                    scale: activeSection === index ? 1.2 : 1,
                                }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                        <span
                            className={`text-sm whitespace-nowrap transition-all duration-200 ${
                                activeSection === index
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                            } ${
                                activeSection === index
                                    ? "text-white"
                                    : "text-[#86868b]"
                            }`}
                        >
                            {section.label}
                        </span>
                    </button>
                ))}
            </div>
        </nav>
    );
}
