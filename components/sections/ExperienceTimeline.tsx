"use client";

import React from "react";
import { motion } from "motion/react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function ExperienceTimeline() {
    const data = [
        {
            title: "2013 — The Spark",
            content: (
                <div>
                    <p className="text-xs md:text-sm font-normal text-neutral-700 dark:text-neutral-300">
                        Discovered web development by accident. I wrote a few
                        lines in Notepad, saved the file as{" "}
                        <strong>.html</strong>, opened it in the browser — and
                        suddenly something clicked. Realizing that I could
                        create things from nothing but text felt magical.
                        <br />
                        <br />
                        That moment became the seed for everything I’ve built
                        since.
                    </p>
                </div>
            ),
        },
        {
            title: "2017 — First Steps",
            content: (
                <div>
                    <p className="mb-8 text-xs md:text-sm font-normal text-neutral-700 dark:text-neutral-300">
                        Started my first venture: <strong>Saints</strong>, a
                        small clothing project where I designed and produced 50
                        t-shirts. I sold half — and learned far more than I
                        expected. It taught me what building something from
                        scratch really feels like: taking risks, making
                        mistakes, and discovering how much I enjoyed creating
                        and moving ideas into the real world.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/img/saints_01.webp"
                            alt="Saints Logo"
                            width={500}
                            height={500}
                            className="h-24 w-full rounded-lg object-cover shadow-md md:h-40 lg:h-48"
                        />
                        <Image
                            src="/img/saints_02.webp"
                            alt="Saints T-Shirt"
                            width={500}
                            height={500}
                            className="h-24 w-full rounded-lg object-cover shadow-md md:h-40 lg:h-48"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2018 — Discovering Shopify",
            content: (
                <div>
                    <p className="text-xs md:text-sm font-normal text-neutral-700 dark:text-neutral-300">
                        Found <strong>Shopify</strong> and immediately got
                        hooked. I wanted to understand how great online stores
                        were built, so I went deep into its ecosystem — learning{" "}
                        <strong>Liquid</strong>, theme structure, performance
                        fundamentals, and the patterns behind high-converting
                        shopping experiences.
                        <br />
                        <br />
                        It was the first time I saw how code, design, and
                        business could converge in one place. That clarity
                        shaped the direction of everything I’ve built since.
                    </p>
                </div>
            ),
        },
        {
            title: "2020 — First Shopify Client",
            content: (
                <div>
                    <p className="text-xs md:text-sm font-normal text-neutral-700 dark:text-neutral-300">
                        Worked with my first real Shopify client — a clothing
                        brand launching its online store. I built the entire
                        ecommerce from scratch, customized Liquid features, and
                        shaped a cleaner, conversion-focused shopping
                        experience.
                        <br />
                        <br />
                        It was the first time I saw my work impact a real
                        business, and it confirmed that helping brands grow
                        through better UX and smart design was what I wanted to
                        keep doing.
                    </p>
                </div>
            ),
        },
        {
            title: "2024 — Present",
            content: (
                <div>
                    <p className="text-xs md:text-sm font-normal text-neutral-700 dark:text-neutral-300">
                        Joined <strong>Merkle</strong> as a Martech Engineer,
                        where I learned how large brands collect, structure, and
                        activate data. I worked with analytics tools, tracking
                        frameworks, CDPs, and real-world data flows — all of
                        which shaped how I approach CRO today.
                        <br />
                        <br />
                        Understanding data at scale gave me a sharper intuition
                        for user behavior, and helped me blend technical
                        tracking with UX thinking.
                    </p>
                </div>
            ),
        },
        {
            title: "Today",
            content: (
                <div>
                    <p className="mb-6 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                        Today I run <strong>RIQO</strong>, my conversion-focused
                        practice for Shopify brands. My work blends research,
                        UX, data, and development — all aimed at building stores
                        that feel clear, intentional, and effective.
                        <br />
                        <br />I partner with brands that want more than
                        aesthetics: they want structure, reasoning, and growth
                        that comes from understanding how people really buy.
                    </p>

                    <div className="mb-8 space-y-2">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                            🚀 CRO Audits & Shopify Optimization
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                            🎨 UX / UI Design with a conversion mindset
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                            💻 Building Shopify experiences
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                            📊 Tracking, analytics & experimentation
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/img/riqo_white.webp"
                            alt="RIQO Logo"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-40 lg:h-52"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section
            id="timeline"
            className="relative max-w-7xl mx-auto overflow-clip px-6 md:px-24 mb-32 sm:mb-64 "
        >
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-semibold mb-10 text-center"
            >
                My Path in Entrepreneurship
            </motion.h2>
            <Timeline data={data} />
        </section>
    );
}
