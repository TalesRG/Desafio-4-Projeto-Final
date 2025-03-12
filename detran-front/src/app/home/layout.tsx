"use client";

import React, { useState } from "react";
import NavigationLink from "@/app/ui/home/navegation-link";
import LogoutButton from "@/app/ui/home/logout-button";
import Image from "next/image";
import Link from "next/link";
import DetranLogo from "@/app/ui/detran-logo";
import "../globals.css";
import { geistSans } from "@/app/ui/fonts";

// --------------------
//   BARRA LATERAL
// --------------------
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado de abertura da sidebar

    return (
        <div
            className={`
        flex flex-col items-center p-4 transition-all duration-300
        ${isOpen ? "md:w-64 w-48" : "w-16"}
        bg-[var(--side-bar-background)] 
      `}
        >
            {/* Logo e Botão de Toggle */}
            <div className="flex justify-between items-center w-full mb-6">
                <div className="hidden md:block">
                    <Link href="/home">
                        {isOpen && <DetranLogo />}
                    </Link>
                </div>
                <button
                    className="hover:bg-[var(--item-selected)] p-2 rounded-md"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image
                        src="/menu-bar.svg"
                        width={24}
                        height={24}
                        alt="Menu"
                    />
                </button>
            </div>

            {/* Links de navegação */}
            <nav className="flex flex-col gap-4 mt-4 w-full">
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

            {/* Botão de Logout - alinhado embaixo */}
            <div className="mt-auto w-full">
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

// --------------------
//   ROOT LAYOUT
// --------------------
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
        <body className={`${geistSans.className} antialiased`}>
        {/*
          Contêiner flex que ocupa a tela inteira:
          - min-h-screen: altura mínima = 100% da viewport
          - w-screen: largura total da viewport
          - bg-gradient-to-br ...: exemplo de gradiente (opcional)
        */}
        <div className="flex min-h-screen w-screen bg-[var(--background)]">
            <Sidebar />
            <main className="flex-1 p-6 md:p-10 overflow-auto">
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}
