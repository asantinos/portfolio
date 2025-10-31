"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 pb-28 sm:pb-20"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-center space-y-8 sm:space-y-12"
                >
                    <h2 className="leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4">
                        Let&apos;s work together.
                    </h2>

                    <div className="space-y-6 sm:space-y-8">
                        <a
                            href="mailto:aleexsantos1509@gmail.com"
                            className="inline-block text-[#86868b] text-base sm:text-lg md:text-xl hover:text-white active:text-white transition-colors duration-300 px-4 break-all sm:break-normal"
                        >
                            aleexsantos1509@gmail.com
                        </a>

                        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base">
                            <a
                                href="https://github.com/asantinos"
                                target="_blank"
                                className="text-[#6e6e73] hover:text-white active:text-white transition-colors duration-300 touch-manipulation"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/asantinos"
                                target="_blank"
                                className="text-[#6e6e73] hover:text-white active:text-white transition-colors duration-300 touch-manipulation"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://riqoagency.com"
                                target="_blank"
                                className="text-[#6e6e73] hover:text-white active:text-white transition-colors duration-300 touch-manipulation"
                            >
                                RIQO
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Logo pinned near bottom */}
            <div className="absolute bottom-32 sm:bottom-6 left-1/2 -translate-x-1/2">
                <Image
                    src="/AS_logo.svg"
                    alt="Álex Santos Logo"
                    width={65}
                    height={65}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 select-none pointer-events-none"
                />
            </div>
        </section>
    );
}
