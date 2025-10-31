"use client";

import { useEffect, useRef, useState } from "react";

interface LetterProps {
    char: string;
    index: number;
    mouseX: number;
    mouseY: number;
}

function MorphLetter({ char, index, mouseX, mouseY }: LetterProps) {
    const letterRef = useRef<HTMLSpanElement>(null);
    const [blur, setBlur] = useState(0);

    useEffect(() => {
        if (!letterRef.current) return;

        const rect = letterRef.current.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2;
        const letterCenterY = rect.top + rect.height / 2;

        const deltaX = mouseX - letterCenterX;
        const deltaY = mouseY - letterCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const maxDistance = 80;
        const influence = Math.max(0, 1 - distance / maxDistance);

        if (influence > 0) {
            const blurAmount = influence * 8;
            setBlur(blurAmount);
        } else {
            setBlur(0);
        }
    }, [mouseX, mouseY]);

    return (
        <span
            ref={letterRef}
            className="relative transition-all duration-500 ease-out"
            style={{
                filter: blur > 0 ? `blur(${blur}px) url(#goo)` : "none",
                color: "white",
                transition: "filter 0.5s ease-out",
            }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    );
}

interface MorphTextProps {
    text: string;
    subtitle?: string;
}

export default function MorphText({ text, subtitle }: MorphTextProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative">
            {/* SVG Filter */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="1"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"
                            result="goo"
                        />
                        <feComposite
                            in="SourceGraphic"
                            in2="goo"
                            operator="atop"
                        />
                    </filter>
                </defs>
            </svg>

            {/* Main text */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none select-none text-white">
                {text.split("").map((char, index) => (
                    <MorphLetter
                        key={index}
                        char={char}
                        index={index}
                        mouseX={mousePosition.x}
                        mouseY={mousePosition.y}
                    />
                ))}
            </h1>

            {/* Subtitle (optional) */}
            {subtitle && (
                <p className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white/70 text-md text-center whitespace-nowrap">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
