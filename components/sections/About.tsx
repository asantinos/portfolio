"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";

const AnimatedTestimonials = dynamic(
    () =>
        import("@/components/ui/animated-testimonials").then(
            (m) => m.AnimatedTestimonials
        ),
    { ssr: false }
);

export default function AboutSection() {
    const photos = [
        {
            name: "Enjoying the journey",
            designation: "Lisbon rooftops, cold breeze, good company",
            quote: "I feel most inspired when I’m exploring new places — they remind me how big the world is, and how much there is left to learn.",
            src: "/img/me_01.webp",
        },
        {
            name: "Finding balance outside",
            designation: "Morning runs in Asturias",
            quote: "Nature clears my head. Running gives me space to think, reset, and come back with better ideas.",
            src: "/img/me_03.webp",
        },
        {
            name: "Chasing perspective",
            designation: "Somewhere between mountains and new ideas",
            quote: "Travel slows me down just enough to think clearer, notice more, and see things from a different angle.",
            src: "/img/me_02.webp",
        },
        {
            name: "Enjoying the city",
            designation: "Valencia afternoons",
            quote: "I like wandering through new places with no rush — shopping a bit, taking photos, and letting the day unfold on its own.",
            src: "/img/me_04.webp",
        },
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-24 mb-32 sm:mb-64"
        >
            {/* TITLE */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-semibold mb-10"
            >
                A bit about me
            </motion.h2>

            {/* TEXT */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
                className="text-neutral-700 dark:text-neutral-300 max-w-3xl text-lg"
            >
                I like building things, understanding how people think, and
                improving whatever I touch.
                <br />
                <br />I believe good work comes from paying attention — to
                people, to patterns, and to the quiet moments in between. That’s
                where most of my ideas start.
            </motion.p>

            {/* PHOTOS WITH ANIMATED CAROUSEL */}
            <motion.div
                initial={{ scale: 0.6 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
            >
                <AnimatedTestimonials testimonials={photos} />
            </motion.div>
        </section>
    );
}
