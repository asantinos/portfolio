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
        <section id="about" className="relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-center leading-tight">
                        More than just code
                    </h2>

                    <div className="max-w-2xl mx-auto space-y-6">
                        <motion.p
                            className="text-[#86868b] text-xl leading-relaxed text-center"
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
                            className="text-[#6e6e73] text-base leading-relaxed text-center"
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
                            className="pt-8"
                        >
                            <p className="text-[#86868b] text-sm text-center mb-4">
                                Click to know me better
                            </p>
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                                {funFacts.map((fact, i) => (
                                    <motion.button
                                        key={i}
                                        onClick={() =>
                                            setSelectedFact(
                                                selectedFact === i ? null : i
                                            )
                                        }
                                        onMouseEnter={() => setHoveredFact(i)}
                                        onMouseLeave={() =>
                                            setHoveredFact(null)
                                        }
                                        className="relative aspect-square bg-[#1d1d1f6d] rounded-3xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all hover:bg-[#2d2d2f6d] group"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        animate={{
                                            borderColor:
                                                selectedFact === i
                                                    ? "#0071e3"
                                                    : "transparent",
                                        }}
                                        style={{ borderWidth: 2 }}
                                    >
                                        <span className="text-3xl md:text-4xl transition-transform group-hover:scale-110">
                                            {fact.emoji}
                                        </span>
                                        <span className="text-[10px] md:text-xs text-[#86868b] text-center px-2 leading-tight">
                                            {fact.text}
                                        </span>

                                        {/* Tooltip */}
                                        {selectedFact === i && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
                                            >
                                                <div className="bg-[#1d1d1f] border border-[#2d2d2f] rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                                                    <p className="text-xs text-[#f5f5f7]">
                                                        {fact.detail}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.button>
                                ))}
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
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
