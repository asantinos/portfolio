"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Lenis from "lenis";
import { Menu, X, Home, User, Sparkles, Briefcase, Mail } from "lucide-react";
import { useMenu } from "@/components/providers/MenuContext";

export default function FloatingMenu() {
    const { isOpen, setIsOpen } = useMenu();
    const menuRef = useRef<HTMLDivElement>(null);
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        lenisRef.current = new Lenis();
        return () => {
            lenisRef.current?.destroy();
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Ignore clicks on floating-up button
            if (target.closest(".floating-up-btn")) return;

            // Close menu if clicking outside
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const scrollToSection = (id: string) => {
        const target = document.querySelector(id);
        if (target) {
            const yOffset = -30;
            const y =
                target.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

            window.scrollTo({
                top: y,
                behavior: "smooth",
            });
        }

        setIsOpen(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed top-6 right-6 z-999 flex items-center justify-center"
            ref={menuRef}
        >
            <motion.div
                initial={false}
                animate={{
                    borderRadius: isOpen ? "30px" : "30px",
                    width: isOpen ? "220px" : "56px",
                    height: isOpen ? "280px" : "56px",
                    padding: isOpen ? "1.5rem" : "0",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(16px)",
                }}
                transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 24,
                }}
                className="flex items-center justify-center text-neutral-500 border border-white/20 shadow-lg shadow-black/5 overflow-hidden"
                onClick={() => {
                    if (!isOpen) setIsOpen(true);
                }}
                role="button"
                aria-label="Abrir menú"
            >
                <AnimatePresence initial={false} mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="menu"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col items-start space-y-4 w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center w-full mb-6">
                                <span className="text-sm text-neutral-700 uppercase tracking-wider font-semibold">
                                    NAVIGATE TO
                                </span>

                                <div
                                    onClick={() => setIsOpen(false)}
                                    onKeyDown={(e) =>
                                        e.key === "Enter" && setIsOpen(false)
                                    }
                                    role="button"
                                    tabIndex={0}
                                    aria-label="Cerrar menú"
                                    className="text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
                                >
                                    <X size={18} />
                                </div>
                            </div>

                            {[
                                {
                                    id: "#hero",
                                    label: "Home",
                                    icon: <Home size={18} />,
                                },
                                {
                                    id: "#about",
                                    label: "About me",
                                    icon: <User size={18} />,
                                },
                                {
                                    id: "#timeline",
                                    label: "Experience",
                                    icon: <Sparkles size={18} />,
                                },
                                {
                                    id: "#work",
                                    label: "Projects",
                                    icon: <Briefcase size={18} />,
                                },
                                {
                                    id: "#contact",
                                    label: "Contact",
                                    icon: <Mail size={18} />,
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) =>
                                        e.key === "Enter" &&
                                        scrollToSection(item.id)
                                    }
                                    className="flex items-center gap-3 text-left w-full text-neutral-500 hover:text-neutral-700 transition-colors cursor-pointer"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.05 * index,
                                        ease: "easeOut",
                                    }}
                                >
                                    <span>{item.icon}</span>
                                    <span className="text-base">
                                        {item.label}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="burger"
                            initial={{ scale: 1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            className="flex flex-1 items-center justify-center cursor-pointer"
                        >
                            <Menu size={22} className="text-black" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
