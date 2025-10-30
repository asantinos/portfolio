"use client";
import { useLenis } from "@/lib/lenis";
import { AnimatePresence } from "framer-motion";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    useLenis();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <div key="main-root">{children}</div>
        </AnimatePresence>
    );
};
