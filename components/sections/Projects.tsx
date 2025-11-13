/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Globe, Instagram, Linkedin, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
    const projects = [
        {
            title: "RIQO",
            tag: "CRO Agency",
            description:
                "My Shopify-focused CRO agency. I design, build, and test experiences that improve conversion and reduce user friction.",
            tags: ["Shopify", "CRO", "A/B Testing", "UX"],
            image: "/img/project_01.jpg",
            links: {
                website: "https://riqoagency.com",
                instagram: "https://instagram.com/riqoagency",
                linkedin: "https://linkedin.com/company/riqoagency",
            },
        },
        {
            title: "Coming soon",
            tag: "In progress",
            description:
                "A new project I’m currently exploring. More details soon.",
            tags: ["SaaS", "Concept", "Prototype"],
            image: "/img/blur.png",
            links: {},
        },
    ];

    const renderLinkIcon = (type: string, url: string) => {
        const icons: any = {
            website: <Globe size={18} />,
            instagram: <Instagram size={18} />,
            linkedin: <Linkedin size={18} />,
            external: <ExternalLink size={18} />,
        };

        return (
            <a
                href={url}
                target="_blank"
                className="p-2 rounded-lg bg-white/40 backdrop-blur-sm border border-white/20 hover:bg-white/60 transition"
            >
                {icons[type]}
            </a>
        );
    };

    return (
        <section
            id="work"
            className="min-h-screen flex flex-col items-center px-6 md:px-24 mb-24 sm:mb-0"
        >
            {/* TITLE */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-semibold mb-16 text-center"
            >
                Things I’ve been building
            </motion.h2>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={cn(
                            "relative overflow-hidden rounded-2xl p-6",
                            "bg-white/40 backdrop-blur-sm border border-white/20 shadow-sm"
                        )}
                    >
                        {/* Optional image */}
                        {p.image && (
                            <div className="mb-4 rounded-xl overflow-hidden border border-white/20 shadow-sm">
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    width={800}
                                    height={400}
                                    className="object-cover w-full h-40 md:h-48"
                                />
                            </div>
                        )}

                        {/* CONTENT */}
                        <div className="relative z-10">
                            <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                                {p.tag}
                            </span>

                            <h3 className="text-2xl font-semibold mt-2 mb-3 text-neutral-800">
                                {p.title}
                            </h3>

                            <p className="text-neutral-600 max-w-sm leading-relaxed mb-4">
                                {p.description}
                            </p>

                            {/* TAGS */}
                            {p.tags && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {p.tags.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="
                                                px-3 py-1 text-xs rounded-lg
                                                bg-black/4 border border-black/5
                                                text-neutral-700
                                            "
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* LINKS */}
                            {p.links && Object.keys(p.links).length > 0 && (
                                <div className="flex gap-3">
                                    {p.links.website &&
                                        renderLinkIcon(
                                            "website",
                                            p.links.website
                                        )}
                                    {p.links.instagram &&
                                        renderLinkIcon(
                                            "instagram",
                                            p.links.instagram
                                        )}
                                    {p.links.linkedin &&
                                        renderLinkIcon(
                                            "linkedin",
                                            p.links.linkedin
                                        )}
                                    {p.links.external &&
                                        renderLinkIcon(
                                            "external",
                                            p.links.external
                                        )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
