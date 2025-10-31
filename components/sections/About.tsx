"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const funFacts = [
    {
        emoji: "🏃🏻‍♂️",
        text: "Fitness fan",
        detail: "Always up for a good workout or a new sport",
    },
    {
        emoji: "🏔️",
        text: "Mountain enthusiast",
        detail: "Nothing beats a good hike to clear the mind",
    },
    {
        emoji: "☕",
        text: "Coffee-powered",
        detail: "Probably on my 3rd espresso right now",
    },
    {
        emoji: "🎵",
        text: "Music lover",
        detail: "Code flows better with the right soundtrack",
    },
    {
        emoji: "📚",
        text: "Forever learning",
        detail: "Always diving into new technologies and frameworks",
    },
    {
        emoji: "🌍",
        text: "Travel curious",
        detail: "Remote work = endless possibilities",
    },
];

export default function About() {
    const [selectedFact, setSelectedFact] = useState<number | null>(null);
    const [hoveredFact, setHoveredFact] = useState<number | null>(null);

    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center py-16 sm:py-20"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="space-y-6 sm:space-y-8"
                >
                    <h2 className="text-center leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4">
                        More than just code
                    </h2>

                    <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
                        <motion.p
                            className="text-[#86868b] text-base sm:text-lg md:text-xl leading-relaxed text-center px-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Hey there! I&apos;m someone who accidentally fell in
                            love with web development and never looked back.
                            What started as curiosity turned into a passion for
                            creating digital experiences that actually make a
                            difference.
                        </motion.p>

                        <motion.p
                            className="text-[#6e6e73] text-sm sm:text-base leading-relaxed text-center px-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            By day, I&apos;m crafting marketing solutions at
                            Merkle. By night (and weekends), I&apos;m building
                            RIQO—my own CRO agency helping Shopify stores grow.
                            I believe great tech should be invisible, and
                            conversions should be inevitable.
                        </motion.p>

                        {/* Interactive Fun Facts */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="pt-6 sm:pt-8"
                        >
                            <p className="text-[#86868b] text-xs sm:text-sm text-center mb-3 sm:mb-4">
                                Tap to know me better
                            </p>
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
                                {funFacts.map((fact, i) => {
                                    // Determine tooltip alignment on mobile (3 columns)
                                    const isLeft = i % 3 === 0;
                                    const isRight = i % 3 === 2;

                                    // Default: centered
                                    let tooltipPosition =
                                        "left-1/2 -translate-x-1/2";

                                    // Mobile-specific overrides (smaller than md)
                                    if (isLeft)
                                        tooltipPosition =
                                            "left-0 translate-x-0 md:left-1/2 md:-translate-x-1/2";
                                    if (isRight)
                                        tooltipPosition =
                                            "right-0 translate-x-0 md:left-1/2 md:-translate-x-1/2";

                                    return (
                                        <motion.button
                                            key={i}
                                            onClick={() =>
                                                setSelectedFact(
                                                    selectedFact === i
                                                        ? null
                                                        : i
                                                )
                                            }
                                            className="relative aspect-square bg-[#1d1d1f6d] rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center gap-1 sm:gap-2 cursor-pointer transition-all hover:bg-[#2d2d2f6d] active:bg-[#2d2d2f6d] group touch-manipulation"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            animate={{
                                                borderColor:
                                                    selectedFact === i
                                                        ? "#ffffff"
                                                        : "transparent",
                                            }}
                                            style={{ borderWidth: 2 }}
                                        >
                                            <span className="text-2xl sm:text-3xl md:text-4xl transition-transform group-hover:scale-110">
                                                {fact.emoji}
                                            </span>
                                            <span className="text-[9px] sm:text-[10px] md:text-xs text-[#86868b] text-center px-1 sm:px-2 leading-tight">
                                                {fact.text}
                                            </span>

                                            {/* Tooltip */}
                                            {selectedFact === i && (
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    className={`absolute bottom-full mb-2 ${tooltipPosition} z-10 pointer-events-none w-max max-w-[200px] sm:max-w-none`}
                                                >
                                                    <div className="bg-[#1d1d1f] border border-[#2d2d2f] rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 shadow-xl">
                                                        <p className="text-[10px] sm:text-xs text-[#f5f5f7] whitespace-normal sm:whitespace-nowrap text-center">
                                                            {fact.detail}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden sm:flex cursor-pointer"
            >
                <span className="text-[#6e6e73] text-xs">
                    See what I&apos;ve built
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="text-[#86868b]"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M10 4V16M10 16L6 12M10 16L14 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
