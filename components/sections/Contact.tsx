"use client";

import { motion } from "motion/react";
import { Mail, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative w-full px-6 md:px-24 py-40 text-center"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-semibold text-neutral-800 mb-6"
            >
                Let’s work together
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="max-w-md mx-auto text-neutral-600 dark:text-neutral-300 mb-12"
            >
                Whether you have a project, a question, or just want to say hi —
                I’d love to connect. Drop me a line or reach out through any
                platform below.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-6"
            >
                {/* EMAIL */}
                <a
                    href="mailto:alex@riqoagency.com"
                    className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/20 transition-all"
                >
                    <Mail className="w-5 h-5 text-neutral-700" />
                    <span className="text-neutral-800 group-hover:text-neutral-900">
                        alex@riqoagency.com
                    </span>
                </a>

                {/* INSTAGRAM */}
                <a
                    href="https://instagram.com/asantinos"
                    target="_blank"
                    className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/20 transition-all"
                >
                    <Instagram className="w-5 h-5 text-neutral-700" />
                    <span className="text-neutral-800 group-hover:text-neutral-900">
                        Instagram
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* LINKEDIN */}
                <a
                    href="https://www.linkedin.com/in/asantinos/"
                    target="_blank"
                    className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/20 transition-all"
                >
                    <Linkedin className="w-5 h-5 text-neutral-700" />
                    <span className="text-neutral-800 group-hover:text-neutral-900">
                        LinkedIn
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* GITHUB */}
                <a
                    href="https://github.com/asantinos"
                    target="_blank"
                    className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/20 transition-all"
                >
                    <Github className="w-5 h-5 text-neutral-700" />
                    <span className="text-neutral-800 group-hover:text-neutral-900">
                        GitHub
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xs text-neutral-400 mt-20"
            >
                Álex Santos © {new Date().getFullYear()}
            </motion.p>
        </section>
    );
}
