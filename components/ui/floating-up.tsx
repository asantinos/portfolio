"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useMenu } from "@/components/providers/MenuContext";

export default function FloatingUp() {
    const [visible, setVisible] = useState(false);
    const { isOpen } = useMenu();

    // Mostrar el botón solo al hacer scroll hacia abajo
    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Función de scroll suave hacia arriba
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="floating-up"
                    initial={{ opacity: 0, y: -60, scale: 0.9 }}
                    animate={{ opacity: 1, y: isOpen ? 220 : 0, scale: 1 }}
                    exit={{ opacity: 0, y: -60, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="floating-up-btn fixed top-22 right-6 z-998 cursor-pointer"
                    onClick={scrollToTop}
                >
                    <motion.div
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-14 h-14 rounded-full border border-white/20 
                       bg-white/10 backdrop-blur-md shadow-lg shadow-black/5 
                       transition-all duration-300 hover:bg-white/20"
                    >
                        <ArrowUp size={22} className="text-neutral-800" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
