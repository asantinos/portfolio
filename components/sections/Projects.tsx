"use client";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Nomadshell",
        desc: "Full-stack vacation rental platform with real-time booking and payment processing.",
        link: "/projects/nomadshell",
        badge: null,
    },
    {
        title: "NeoBank",
        desc: "Modern fintech application with blockchain integration and advanced analytics.",
        link: "/projects/neobank",
        badge: "On progress",
    },
    {
        title: "CodeVerse",
        desc: "Interactive learning platform for developers with video streaming capabilities.",
        link: "/projects/codeverse",
        badge: "Coming soon",
    },
    {
        title: "FlowOffice",
        desc: "Comprehensive ERP and CRM solution for growing businesses.",
        link: "/projects/flowoffice",
        badge: "Coming soon",
    },
];

export default function Projects() {
    return (
        <section id="projects">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    Selected Work
                </motion.h2>

                <div className="space-y-0">
                    {projects.map((project, i) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.05,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            viewport={{ once: true }}
                            className="group block py-6 border-b border-[#1d1d1f] hover:border-[#3a3a3a] transition-colors duration-300"
                        >
                            <div className="flex items-start justify-between gap-12">
                                <div className="flex-1 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-2xl font-semibold tracking-tight leading-tight">
                                            {project.title}
                                        </h3>
                                        {project.badge && (
                                            <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#1d1d1f] text-[#86868b] border border-[#3a3a3a]">
                                                {project.badge}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-[#86868b] text-base leading-relaxed max-w-xl">
                                        {project.desc}
                                    </p>
                                </div>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-[#6e6e73] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mt-1.5"
                                >
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
