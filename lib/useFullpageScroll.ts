"use client";

import { useEffect, useState } from "react";

// Global state for current section
let globalCurrentSection = 0;
let globalScrollToSection: ((index: number) => void) | null = null;
const listeners = new Set<(section: number) => void>();

export const subscribeToSection = (callback: (section: number) => void): (() => void) => {
    listeners.add(callback);
    callback(globalCurrentSection); // Initial call
    return () => {
        listeners.delete(callback);
    };
};

export const navigateToSection = (index: number) => {
    if (globalScrollToSection) {
        globalScrollToSection(index);
    }
};

const notifyListeners = (section: number) => {
    globalCurrentSection = section;
    listeners.forEach((callback) => callback(section));
};

export const useFullpageScroll = () => {
    const [currentSection, setCurrentSection] = useState(0);

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("section"));
        let isScrolling = false;
        let touchStartY = 0;
        let scrollTimeout: NodeJS.Timeout;

        const scrollToSection = (index: number) => {
            if (index < 0 || index >= sections.length) return;

            isScrolling = true;
            setCurrentSection(index);
            notifyListeners(index);

            sections[index].scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 800);
        };

        // Expose to global scope
        globalScrollToSection = scrollToSection;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            if (isScrolling) return;

            // Any scroll direction triggers immediate section change
            if (Math.abs(e.deltaY) > 0) {
                if (e.deltaY > 0) {
                    scrollToSection(currentSection + 1);
                } else {
                    scrollToSection(currentSection - 1);
                }
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (isScrolling) return;

            const deltaY = touchStartY - e.changedTouches[0].clientY;

            if (Math.abs(deltaY) > 20) {
                if (deltaY > 0) {
                    scrollToSection(currentSection + 1);
                } else {
                    scrollToSection(currentSection - 1);
                }
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (isScrolling) return;

            switch (e.key) {
                case "ArrowDown":
                case "PageDown":
                    e.preventDefault();
                    scrollToSection(currentSection + 1);
                    break;
                case "ArrowUp":
                case "PageUp":
                    e.preventDefault();
                    scrollToSection(currentSection - 1);
                    break;
                case "Home":
                    e.preventDefault();
                    scrollToSection(0);
                    break;
                case "End":
                    e.preventDefault();
                    scrollToSection(sections.length - 1);
                    break;
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchend", handleTouchEnd, { passive: true });
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
            window.removeEventListener("keydown", handleKeyDown);
            clearTimeout(scrollTimeout);
        };
    }, [currentSection]);
};
