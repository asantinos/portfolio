"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const experience = [
    {
        role: "Founder",
        company: "RIQO",
        date: "Sep 2025 – Present",
        desc: "CRO and Ecommerce growth agency for Shopify.",
        logo: "RIQO_green.svg",
    },
    {
        role: "Martech Engineer",
        company: "Merkle",
        date: "Nov 2024 – Present",
        desc: "Implementing GTM, GA4, and Tealium iQ for enterprise clients.",
        logo: "/merkle.svg",
    },
    {
        role: "Freelance Developer",
        company: "Self-employed",
        date: "Jul 2022 – Jan 2024",
        desc: "Full-stack and Shopify development for clients worldwide.",
        logo: "/shopify.svg",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen flex items-center py-16 sm:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
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
                            className="py-4 sm:py-6 border-b border-[#1d1d1f] flex gap-3 sm:gap-4"
                        >
                            <div className="shrink-0 w-12 sm:w-16 h-full flex items-start pt-0.5 sm:pt-1">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1d1d1f6d] rounded-lg sm:rounded-xl flex items-center justify-center">
                                    {exp.logo ? (
                                        <Image
                                            width={32}
                                            height={32}
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            className="w-7 h-7 sm:w-10 sm:h-10 object-contain"
                                        />
                                    ) : (
                                        <span className="text-lg sm:text-xl font-semibold">
                                            {exp.company.charAt(0)}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col gap-1 sm:gap-2 mb-2 sm:mb-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-8">
                                        <h3 className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-base sm:text-lg md:text-xl font-semibold tracking-tight leading-tight">
                                            <span>{exp.role}</span>
                                            <span className="text-[#c7c7c7] text-sm sm:text-base font-normal">
                                                {exp.company}
                                            </span>
                                        </h3>
                                        <span className="text-[#6e6e73] text-xs sm:text-sm whitespace-nowrap">
                                            {exp.date}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-[#86868b] text-sm sm:text-base leading-relaxed">
                                    {exp.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
