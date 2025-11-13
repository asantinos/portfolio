"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import FloatingMenu from "@/components/ui/floating-menu";
import FloatingName from "@/components/ui/floating-name";
import FloatingUp from "@/components/ui/floating-up";

// Sections
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";

export default function HomePage() {
    useEffect(() => {
        // (opcional) acciones iniciales cuando carga la SPA
    }, []);

    return (
        <main className="relative min-h-screen w-full text-neutral-900">
            <FloatingMenu />
            <FloatingName />
            <FloatingUp />
            <HeroSection />
            <AboutSection />
            <ExperienceTimeline />
            <ProjectsSection />
            <ContactSection />
        </main>
    );
}
