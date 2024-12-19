"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  desc: string;
  children: React.ReactNode;
}

const Header = ({ title, desc, children }: Props) => {
  const pathname = usePathname();
  const currentPage = pathname.substring(1);
  return (
    <div className="flex justify-between gap-16 items-center">
      <div className="flex flex-col gap-2 text-secondary">
        <h4 className="text-primary">#{currentPage}</h4>
        <h1 className="text-accent mb-2">{title}</h1>
        <p>{desc}</p>
      </div>

      {children}
    </div>
  );
};

export default Header;
