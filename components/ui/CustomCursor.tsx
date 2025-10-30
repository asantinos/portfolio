"use client";

import { motion, useMotionValue, useSpring, useVelocity } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    const velocityX = useVelocity(x);
    const velocityY = useVelocity(y);

    // Liquid-like spring with more elasticity
    const spring = { damping: 20, stiffness: 150, mass: 0.6 };
    const cursorX = useSpring(x, spring);
    const cursorY = useSpring(y, spring);

    // Create stretch effect based on velocity
    const scaleX = useSpring(1, { damping: 25, stiffness: 250 });
    const scaleY = useSpring(1, { damping: 25, stiffness: 250 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            x.set(e.clientX - 12);
            y.set(e.clientY - 12);
        };

        const handleLinkHover = () => setIsHovering(true);
        const handleLinkLeave = () => setIsHovering(false);

        const addListeners = () => {
            document.querySelectorAll("a, button").forEach((el) => {
                el.addEventListener("mouseenter", handleLinkHover);
                el.addEventListener("mouseleave", handleLinkLeave);
            });
        };

        window.addEventListener("mousemove", move);
        addListeners();

        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", move);
            document.querySelectorAll("a, button").forEach((el) => {
                el.removeEventListener("mouseenter", handleLinkHover);
                el.removeEventListener("mouseleave", handleLinkLeave);
            });
            observer.disconnect();
        };
    }, [x, y]);

    // Update scale based on velocity for liquid effect
    useEffect(() => {
        const unsubscribeX = velocityX.on("change", (latest) => {
            const velocity = Math.abs(latest);
            const stretch = Math.min(1 + velocity / 3000, 1.5);
            scaleX.set(stretch);
        });

        const unsubscribeY = velocityY.on("change", (latest) => {
            const velocity = Math.abs(latest);
            const stretch = Math.min(1 + velocity / 3000, 1.5);
            scaleY.set(stretch);
        });

        return () => {
            unsubscribeX();
            unsubscribeY();
        };
    }, [velocityX, velocityY, scaleX, scaleY]);

    return (
        <>
            {/* Main cursor dot with liquid morph */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-50"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 0.5 : 1,
                    }}
                    style={{
                        scaleX,
                        scaleY,
                    }}
                    transition={{
                        scale: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="h-6 w-6 rounded-full bg-white mix-blend-difference"
                />
            </motion.div>

            {/* Outer ring on hover with liquid effect */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-50"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 2 : 0,
                        opacity: isHovering ? 1 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                    }}
                    className="h-6 w-6 rounded-full border-2 border-white mix-blend-difference"
                    style={{
                        borderRadius: "50%",
                    }}
                />
            </motion.div>
        </>
    );
}
