"use client";
import { motion } from "framer-motion";

const experience = [
    {
        role: "Founder",
        company: "RIQO",
        date: "Sep 2025 – Present",
        desc: "CRO and Ecommerce growth agency for Shopify.",
    },
    {
        role: "Martech Engineer",
        company: "Merkle",
        date: "Nov 2024 – Present",
        desc: "Implementing GTM, GA4, and Tealium iQ for enterprise clients.",
    },
    {
        role: "Freelance Developer",
        company: "Self-employed",
        date: "Jul 2022 – Jan 2024",
        desc: "Full-stack and Shopify development for clients worldwide.",
    },
];

export default function Experience() {
    return (
        <section id="experience">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    Experience
                </motion.h2>

                <div className="space-y-0">
                    {experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.05,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            viewport={{ once: true }}
                            className="py-6 border-b border-[#1d1d1f]"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8 mb-4">
                                <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight leading-tight">
                                    {exp.role}{" "}
                                    <span
                                        className="text-[#c7c7c7] text-sm font-normal
                                    "
                                    >
                                        {exp.company}
                                    </span>
                                </h3>
                                <span className="text-[#6e6e73] text-sm whitespace-nowrap">
                                    {exp.date}
                                </span>
                            </div>
                            <p className="text-[#86868b] text-base leading-relaxed max-w-2xl">
                                {exp.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
