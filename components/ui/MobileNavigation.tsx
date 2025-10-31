"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    subscribeToSection,
    navigateToSection,
} from "@/lib/useFullpageScroll";

const sections = [
    { id: "hero", label: "Home", icon: "home" },
    { id: "about", label: "About", icon: "user" },
    { id: "projects", label: "Work", icon: "briefcase" },
    { id: "experience", label: "Exp", icon: "code" },
    { id: "contact", label: "Contact", icon: "mail" },
];

const iconPaths = {
    home: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    briefcase:
        "M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
    mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
};

export default function MobileNavigation() {
    const [activeSection, setActiveSection] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const unsubscribe = subscribeToSection((section) => {
            setActiveSection(section);
        });
        return unsubscribe;
    }, []);

    const scrollToSection = (index: number) => {
        navigateToSection(index);
        setIsExpanded(false);
    };

    return (
        <>
            {/* Mobile Bottom Navigation - Visible only on mobile/tablet */}
            <motion.nav
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
            >
                <div className="relative">
                    {/* Expanded Menu */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-64"
                            >
                                <div className="bg-[#1d1d1f]/95 backdrop-blur-xl border border-[#424245]/50 rounded-3xl p-3 shadow-2xl">
                                    <div className="space-y-2">
                                        {sections.map((section, index) => (
                                            <motion.button
                                                key={section.id}
                                                onClick={() =>
                                                    scrollToSection(index)
                                                }
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all touch-manipulation ${
                                                    activeSection === index
                                                        ? "bg-white/10 text-white"
                                                        : "text-[#86868b] hover:bg-white/5"
                                                }`}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path
                                                        d={
                                                            iconPaths[
                                                                section.icon as keyof typeof iconPaths
                                                            ]
                                                        }
                                                    />
                                                </svg>
                                                <span className="font-medium text-sm">
                                                    {section.label}
                                                </span>
                                                {activeSection === index && (
                                                    <motion.div
                                                        layoutId="activeIndicator"
                                                        className="ml-auto w-2 h-2 rounded-full bg-white"
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 380,
                                                            damping: 30,
                                                        }}
                                                    />
                                                )}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Collapsed Navigation Bar */}
                    <div className="bg-[#1d1d1f]/95 backdrop-blur-xl border border-[#424245]/50 rounded-full px-4 py-2.5 shadow-2xl">
                        <div className="flex items-center gap-2">
                            {/* Active Section Indicator */}
                            <motion.button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 touch-manipulation"
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-white"
                                >
                                    <path
                                        d={
                                            iconPaths[
                                                sections[activeSection]
                                                    .icon as keyof typeof iconPaths
                                            ]
                                        }
                                    />
                                </svg>
                                <span className="text-white text-xs font-medium">
                                    {sections[activeSection].label}
                                </span>
                                <motion.svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    className="text-[#86868b]"
                                    animate={{
                                        rotate: isExpanded ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <path
                                        d="M3 5l3 3 3-3"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </motion.svg>
                            </motion.button>

                            {/* Quick Navigation Dots */}
                            <div className="flex items-center gap-1.5 px-2">
                                {sections.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => scrollToSection(index)}
                                        className="touch-manipulation"
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <motion.div
                                            className={`rounded-full transition-all ${
                                                activeSection === index
                                                    ? "bg-white w-6 h-1.5"
                                                    : "bg-[#424245] w-1.5 h-1.5"
                                            }`}
                                            animate={{
                                                width:
                                                    activeSection === index
                                                        ? 24
                                                        : 6,
                                                height: 6,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Backdrop when menu is expanded */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsExpanded(false)}
                        className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                    />
                )}
            </AnimatePresence>
        </>
    );
}
