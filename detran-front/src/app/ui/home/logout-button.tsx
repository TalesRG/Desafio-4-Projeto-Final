"use client"; // ✅ Necessário para manipular o estado do navegador

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ Para redirecionamento
import { SidebarItemProps } from "@/app/ui/home/types/SidebarItemProps";

const LogoutButton: React.FC<SidebarItemProps> = ({
                                                      href,
                                                      iconSrc,
                                                      altText,
                                                      label,
                                                      isOpen
                                                  }) => {
    const router = useRouter(); // 🚀 Hook para navegação

    const handleLogout = () => {
        // 🔹 Remove o token do localStorage
        localStorage.removeItem("access_Token");

        // 🔹 Remove do sessionStorage (caso tenha sido salvo lá)
        sessionStorage.removeItem("access_Token");

        // 🔹 Remove o token dos cookies
        document.cookie = "access_Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        // 🔹 Redireciona para a página de login
        router.push(href);
    };

    return (
        <button
            onClick={handleLogout} // ✅ Evento de clique
            className="flex items-center text-white text-lg space-x-2 pt-10"
        >
            <Image src={iconSrc} width={25} height={25} alt={altText} />
            {isOpen && <span>{label}</span>}
        </button>
    );
};

export default LogoutButton;