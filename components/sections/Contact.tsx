"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-center space-y-12"
                >
                    <h2 className="leading-tight">
                        Let&apos;s work together.
                    </h2>

                    <div className="space-y-8">
                        <a
                            href="mailto:hello@asantinos.com"
                            className="inline-block text-[#86868b] text-lg hover:text-white transition-colors duration-300"
                        >
                            aleexsantos1509@gmail.com
                        </a>

                        <div className="flex justify-center items-center gap-8 text-sm">
                            <a
                                href="https://github.com/asantinos"
                                target="_blank"
                                className="text-[#6e6e73] hover:text-white transition-colors duration-300"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/asantinos"
                                target="_blank"
                                className="text-[#6e6e73] hover:text-white transition-colors duration-300"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://riqoagency.com"
                                target="_blank"
                                className="text-[#6e6e73] hover:text-white transition-colors duration-300"
                            >
                                RIQO
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
