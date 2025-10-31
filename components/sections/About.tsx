"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h2 className="text-center leading-tight">
                        Crafting digital experiences that convert.
                    </h2>

                    <div className="max-w-2xl mx-auto space-y-2">
                        <p className="text-[#86868b] text-xl leading-relaxed text-center">
                            Currently engineering marketing solutions at Merkle while building RIQO, a CRO agency focused on Shopify growth.
                        </p>
                        <p className="text-[#6e6e73] text-base leading-relaxed text-center">
                            I help brands optimize their digital presence through technical implementation, conversion-focused design, and analytics-driven insights.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
