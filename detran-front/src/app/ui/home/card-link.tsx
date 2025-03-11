import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CardLinkProps } from "@/app/ui/home/types/CardLinkProps";

const CardLink: React.FC<CardLinkProps> = ({
    href,
    iconSrc,
    altText,
    title,
    description,
}) => {
    return (
        <Link 
            href={href} 
            className="border-2 rounded-xl p-5 flex flex-col items-center gap-5 shadow-lg bg-gray-200 hover:bg-gray-300 transition-all duration-300 cursor-pointer w-full md:w-1/3">
            <Image 
                src={iconSrc} 
                width={100} 
                height={100} 
                alt={altText} 
            />
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-center text-gray-700">{description}</p>
        </Link>
    );
};

export default CardLink;
