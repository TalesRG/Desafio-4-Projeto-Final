import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SidebarItemProps } from "@/app/ui/home/types/SidebarItemProps";


const LogoutButton: React.FC<SidebarItemProps> = ({ 
    href, 
    iconSrc, 
    altText, 
    label, 
    isOpen
}) => {
    return (
        <Link
            href={href}
            className="flex items-center text-white text-lg space-x-2 pt-10">
            <Image
                src={iconSrc}
                width={25}
                height={25}
                alt={altText}
            />
            {isOpen && <span>{label}</span>}
        </Link>
    );
};

export default LogoutButton;