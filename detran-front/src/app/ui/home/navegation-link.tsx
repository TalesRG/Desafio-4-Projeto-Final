import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SidebarItemProps } from "@/app/ui/home/types/SidebarItemProps";

const NavigationLink: React.FC<SidebarItemProps> = ({
  href, 
  iconSrc, 
  altText, 
  label, 
  isOpen 
}) => {
  return (
    <Link
      href={href}
      className="flex items-center text-lg space-x-2 hover:bg-[var(--item-selected)] p-1 rounded-md transition-all duration-300"
    >
      <Image src={iconSrc} width={25} height={25} alt={altText} />
      {isOpen && <span className="pr-7">{label}</span>}
    </Link>
  );
};

export default NavigationLink;
