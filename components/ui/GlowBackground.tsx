"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function GlowBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const background = useTransform(
        [mouseX, mouseY],
        ([x, y]) =>
            `radial-gradient(600px circle at ${x}px ${y}px,
        rgba(124, 58, 237, 0.65),
        rgba(0, 0, 0, 0) 65%)`
    );

    return (
        <motion.div
            className="fixed inset-0 -z-10 transition-opacity duration-700"
            style={{
                background,
            }}
        />
    );
}
