"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function HeroSection() {
    const scrollToAbout = () => {
        const t = document.querySelector("#about");
        if (!t) return;

        const yOffset = -40; // tu offset
        const y = t.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    const traits = [
        "Builder mindset",
        "Detail obsessed",
        "Problem solver",
        "Ambitious mind",
    ];

    return (
        <section
            id="hero"
            className="h-screen flex flex-col justify-center items-center text-center px-6 mb-12 sm:mb-24"
        >
            {/* NAME / INTRO */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-semibold tracking-tight leading-none"
            >
                Hi, I&apos;m{" "}
                <span className="bg-linear-to-br from-neutral-900 to-neutral-500 bg-clip-text text-transparent">
                    Álex Santos
                </span>{" "}
                👋🏻
            </motion.h1>

            {/* STATEMENT */}
            <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-lg text-neutral-600 max-w-xl leading-relaxed"
            >
                I create digital experiences with intention using design,
                development and a curiosity for how people behave online.
            </motion.p>

            {/* TRAITS WITH POP */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
                {traits.map((trait, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 0.25,
                            delay: 0.4 + i * 0.06,
                            type: "spring",
                            stiffness: 300,
                        }}
                        className="
                            px-4 py-2 text-sm rounded-xl
                            bg-black/0             
                            backdrop-blur-[1.5px]
                            border border-black/10  
                            shadow-sm                
                            text-neutral-700
                            font-medium
                            select-none
                        "
                    >
                        {trait}
                    </motion.div>
                ))}
            </div>

            {/* CTA WITH SHINY + POP */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    duration: 0.3,
                    delay: 0.6,
                    stiffness: 300,
                }}
                className="group mt-10"
                onClick={scrollToAbout}
            >
                {/* FIXED MAGIC UI SHINY */}
                <ShinyButton>
                    <div className="inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>✨ More about me</span>
                        <ArrowDown className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-y-0.5" />
                    </div>
                </ShinyButton>
            </motion.div>
        </section>
    );
}
