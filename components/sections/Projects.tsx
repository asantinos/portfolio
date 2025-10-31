"use client";
import { motion } from "framer-motion";

type BadgeType = "progress" | "soon" | null;

interface Project {
    title: string;
    desc: string;
    link: string;
    badge: BadgeType;
}

const projects: Project[] = [
    {
        title: "Nomadshell",
        desc: "Full-stack vacation rental platform with real-time booking and payment processing.",
        link: "https://github.com/asantinos/nomadshell-project",
        badge: null,
    },
    {
        title: "NeoBank",
        desc: "Modern fintech application with blockchain integration and advanced analytics.",
        link: "#",
        badge: "progress",
    },
    {
        title: "CodeVerse",
        desc: "Interactive learning platform for developers with video streaming capabilities.",
        link: "#",
        badge: "soon",
    },
    {
        title: "FlowOffice",
        desc: "Comprehensive ERP and CRM solution for growing businesses.",
        link: "#",
        badge: "soon",
    },
];

const getBadgeStyles = (type: BadgeType) => {
    switch (type) {
        case "progress":
            return {
                text: "In Progress",
                className:
                    "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]",
            };
        case "soon":
            return {
                text: "Coming Soon",
                className:
                    "bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
            };
        default:
            return null;
    }
};

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
                            // Open in new tab if link is external
                            target={
                                project.link.startsWith("http")
                                    ? "_blank"
                                    : "_self"
                            }
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
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <h3 className="text-2xl font-semibold tracking-tight leading-tight">
                                            {project.title}
                                        </h3>
                                        {project.badge &&
                                            getBadgeStyles(project.badge) && (
                                                <motion.span
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0.8,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    transition={{
                                                        delay: 0.2,
                                                        duration: 0.3,
                                                    }}
                                                    viewport={{ once: true }}
                                                    className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm transition-all duration-300 ${
                                                        getBadgeStyles(
                                                            project.badge
                                                        )?.className
                                                    }`}
                                                >
                                                    {
                                                        getBadgeStyles(
                                                            project.badge
                                                        )?.text
                                                    }
                                                </motion.span>
                                            )}
                                    </div>
                                    <p className="text-[#86868b] text-base leading-relaxed max-w-xl">
                                        {project.desc}
                                    </p>
                                </div>
                                {project.link.startsWith("http") && (
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
                                        <line
                                            x1="7"
                                            y1="17"
                                            x2="17"
                                            y2="7"
                                        ></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
