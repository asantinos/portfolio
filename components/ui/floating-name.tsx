"use client";

import { motion } from "motion/react";
import { MorphingText } from "@/components/ui/morphing-text";
import { Sansation } from "next/font/google";
import Image from "next/image";

const sansation = Sansation({ subsets: ["latin"], weight: ["400"] });

export default function FloatingName() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
            }}
            className="fixed top-10 md:top-8 left-6 z-998"
        >
            <div className="flex items-center gap-2">
                <Image
                    width={32}
                    height={32}
                    src={"/img/favicon.ico"}
                    alt="asantinos Logo"
                />
                {/* <div
                    className={`${sansation.className} font-semibold tracking-tight text-xl md:text-2xl select-none transition-all`}
                >
                    álex
                    <span>santos</span>
                </div> */}

                <MorphingText
                    texts={[
                        "CRO Expert",
                        "FullStack Dev",
                        "UX Optimizer",
                        "Data Driven",
                        "Design Nerd",
                    ]}
                    className="text-neutral-800 -mt-[1.6rem] select-none"
                />
            </div>
        </motion.div>
    );
}
