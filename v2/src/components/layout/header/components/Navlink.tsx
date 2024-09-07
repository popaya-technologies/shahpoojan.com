"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavlinkProps = {
  title: string;
  href: string;
};

export const Navlink = ({ title, href }: NavlinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`rounded p-1 ${pathname === href && "bg-black text-white"}`}
    >
      {title}
    </Link>
  );
};
