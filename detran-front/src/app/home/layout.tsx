'use client';

import React, { useState } from "react";
import NavigationLink from "@/app/ui/home/navegation-link";
import LogoutButton from "@/app/ui/home/logout-button";
import Image from "next/image";
import Link from "next/link";
import DetranLogo from "@/app/ui/detran-logo";
import '../globals.css';
import { geistSans } from '@/app/ui/fonts';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // Sidebar state

    return (
        <div
            className={`${isOpen ? "md:w-80 w-fit" : "w-fit"
                } bg-[var(--side-bar-background)] p-2 md:p-8 items-center flex flex-col transition-all duration-300`}
        >
            {/* Logo and Toggle Button */}
            <div className="flex justify-between pb-4">
                <div className="hidden md:block">
                    <Link href="/home">
                        {isOpen && <DetranLogo />}
                    </Link>
                </div>
                <button
                    className="hover:bg-[var(--item-selected)] p-1 rounded-md transition-all duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image
                        src="/menu-bar.svg"
                        width={30}
                        height={30}
                        alt="Menu"
                        className="cursor-pointer justify-self-end"
                    />
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="mt-10 space-y-6 text-black">
                <NavigationLink
                    href="/home"
                    iconSrc="/home.svg"
                    altText="Home Icon"
                    label="Home"
                    isOpen={isOpen}
                />
                <NavigationLink
                    href="/home/carro"
                    iconSrc="/car-side.svg"
                    altText="Car Icon"
                    label="Veículos"
                    isOpen={isOpen}
                />
                <NavigationLink
                    href="/home/multa"
                    iconSrc="/multa.svg"
                    altText="Ticket Icon"
                    label="Multas"
                    isOpen={isOpen}
                />
                <NavigationLink
                    href="/home/proprietario"
                    iconSrc="/proprietario.svg"
                    altText="Owner Icon"
                    label="Proprietario"
                    isOpen={isOpen}
                />
            </nav>

            {/* Logout Button */}
            <div className="mt-auto">
                <LogoutButton
                    href="/"
                    iconSrc="/exit.svg"
                    altText="Logout Icon"
                    label="Sair"
                    isOpen={isOpen}
                />
            </div>
        </div>
    );
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body className={`${geistSans.className} antialiased bg-[var(--background)]`}>
                <div className="flex flex-row h-full md:h-screen">
                    <Sidebar />
                    <main className="flex-1 p-10 md:p-20">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
