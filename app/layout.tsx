import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import CustomCursor from "@/components/ui/CustomCursor";
import GlowBackground from "@/components/ui/GlowBackground";
import Navigation from "@/components/ui/Navigation";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Álex Santos",
    description:
        "Portfolio of Álex Santos - Fullstack Developer, Shopify CRO and Ecommerce Growth specialist.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    <GlowBackground />
                    <Navigation />
                    {children}
                    <CustomCursor />
                </Providers>
            </body>
        </html>
    );
}
