"use client";

import { createContext, useContext, useState } from "react";

interface MenuContextType {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MenuContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </MenuContext.Provider>
    );
}

export const useMenu = () => {
    const ctx = useContext(MenuContext);
    if (!ctx) throw new Error("useMenu must be used within MenuProvider");
    return ctx;
};
