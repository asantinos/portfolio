"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const text = "Álex Santos";

export default function Hero() {
    return (
        <section id="hero">
            <div className="max-w-5xl mx-auto px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block relative"
                >
                    <h1 className="relative">
                        <LiquidMeltingText text={text} />
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-6 text-[#86868b]"
                >
                    Full Stack Developer. CRO & eCommerce Growth Specialist.
                </motion.p>
            </div>
        </section>
    );
}

function LiquidMeltingText({ text }: { text: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse position tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Distance from center for intensity
    const distanceFromCenter = useMotionValue(1000);
    const smoothDistance = useSpring(distanceFromCenter, { damping: 15, stiffness: 120, mass: 0.4 });

    // Transform distance to filter values for MORE INTENSE liquid melting
    const turbulenceFreq = useTransform(smoothDistance, [0, 450], [0.08, 0]);
    const displacementScale = useTransform(smoothDistance, [0, 450], [45, 0]);
    const blurAmount = useTransform(smoothDistance, [0, 450], [2.5, 0]);
    const dilateRadius = useTransform(smoothDistance, [0, 450], [4, 0]);

    // State to hold filter values
    const [filterValues, setFilterValues] = useState({
        turbFreq: 0,
        displaceScale: 0,
        blur: 0,
        dilate: 0,
    });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const relativeX = (e.clientX - centerX) / (rect.width / 2);
            const relativeY = (e.clientY - centerY) / (rect.height / 2);

            mouseX.set(relativeX);
            mouseY.set(relativeY);

            const distX = e.clientX - centerX;
            const distY = e.clientY - centerY;
            const distance = Math.sqrt(distX * distX + distY * distY);

            distanceFromCenter.set(distance);
        };

        const handleMouseLeave = () => {
            mouseX.set(0);
            mouseY.set(0);
            distanceFromCenter.set(1000);
        };

        window.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [mouseX, mouseY, distanceFromCenter]);

    // Update filter values when motion values change
    useEffect(() => {
        const unsubscribe = smoothDistance.on("change", () => {
            setFilterValues({
                turbFreq: turbulenceFreq.get(),
                displaceScale: displacementScale.get(),
                blur: blurAmount.get(),
                dilate: dilateRadius.get(),
            });
        });

        return unsubscribe;
    }, [smoothDistance, turbulenceFreq, displacementScale, blurAmount, dilateRadius]);

    return (
        <div ref={containerRef} className="relative inline-block">
            {/* SVG Filter for liquid melting effect */}
            <svg className="absolute w-0 h-0">
                <defs>
                    {/* Main liquid melting filter - EXTREME morphing */}
                    <filter id="liquidMelt" x="-200%" y="-200%" width="500%" height="500%">
                        {/* Multi-layered turbulence for chaotic organic motion */}
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency={filterValues.turbFreq}
                            numOctaves={4}
                            seed={12}
                            result="turb1"
                        />

                        {/* First displacement - horizontal stretching */}
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="turb1"
                            scale={filterValues.displaceScale}
                            xChannelSelector="R"
                            yChannelSelector="G"
                            result="displaced1"
                        />

                        {/* Second turbulence layer for more randomness */}
                        <feTurbulence
                            type="turbulence"
                            baseFrequency={filterValues.turbFreq * 0.625}
                            numOctaves={3}
                            seed={25}
                            result="turb2"
                        />

                        {/* Second displacement - adds rotational distortion */}
                        <feDisplacementMap
                            in="displaced1"
                            in2="turb2"
                            scale={filterValues.displaceScale * 0.667}
                            xChannelSelector="G"
                            yChannelSelector="B"
                            result="displaced2"
                        />

                        {/* Heavy blur to create strong letter merging */}
                        <feGaussianBlur
                            in="displaced2"
                            stdDeviation={filterValues.blur}
                            result="blurred"
                        />

                        {/* Aggressive dilate for melting/joining effect */}
                        <feMorphology
                            in="blurred"
                            operator="dilate"
                            radius={filterValues.dilate}
                            result="dilated"
                        />

                        {/* Erode to refine but keep the melt */}
                        <feMorphology
                            in="dilated"
                            operator="erode"
                            radius={filterValues.dilate * 0.375}
                            result="eroded"
                        />

                        {/* Additional blur for smoothness */}
                        <feGaussianBlur
                            in="eroded"
                            stdDeviation={filterValues.blur * 0.4}
                            result="smooth"
                        />

                        {/* Strong contrast boost */}
                        <feColorMatrix
                            in="smooth"
                            type="matrix"
                            values="1.2 0 0 0 0
                                    0 1.2 0 0 0
                                    0 0 1.2 0 0
                                    0 0 0 2 -0.3"
                            result="contrast"
                        />

                        {/* Composite for final blend */}
                        <feComposite
                            in="contrast"
                            in2="SourceGraphic"
                            operator="atop"
                            result="final"
                        />
                    </filter>
                </defs>
            </svg>

            {/* Render text with filter applied */}
            <motion.span
                style={{
                    filter: "url(#liquidMelt)",
                    display: "inline-block",
                    willChange: "filter",
                }}
            >
                {text}
            </motion.span>
        </div>
    );
}
