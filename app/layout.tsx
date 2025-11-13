import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { MenuProvider } from "@/components/providers/MenuContext";
import DotBackground from "@/components/ui/dot-background";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Álex Santos",
    description: "CRO Shopify Expert",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} antialiased`}
                suppressHydrationWarning
            >
                <DotBackground />
                <LenisProvider>
                    <MenuProvider>{children}</MenuProvider>
                </LenisProvider>
            </body>
        </html>
    );
}
