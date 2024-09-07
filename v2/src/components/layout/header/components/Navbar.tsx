"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/elements/Icon";
import { Navlink } from "./Navlink";
import { motion } from "framer-motion";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

type NavbarProps = {};

export const Navbar = (props: NavbarProps) => {
  const [open, setOpen] = React.useState(false);

  const topVariants = {
    open: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
    closed: { rotate: 0 },
  };

  const middleVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomVariants = {
    open: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
    closed: { rotate: 0 },
  };

  const listVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.25 },
    },
    closed: { opacity: 0, x: "100vw" },
  };

  const listItemVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: { opacity: 0, x: -10 },
  };

  return (
    <div className="flex h-full items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="hidden w-1/3 gap-4 md:flex">
        {links.map((link) => (
          <Navlink key={link.title} {...link} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href={"/"}
          className="flex items-center justify-center rounded-md bg-black p-1 text-sm font-semibold"
        >
          <span className="mr-1 text-white">Poojan</span>
          <span className="flex h-8 w-12 items-center justify-center rounded bg-white text-black">
            Shah
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden w-1/3 justify-end gap-4 md:flex">
        <Link href={"/"}>
          <Icon name="FaGithub" iconSize="24" />
        </Link>
        <Link href={"/"}>
          <Icon name="FaLinkedin" iconSize="24" />
        </Link>
      </div>
      {/* RESPONSIVE NAVBAR */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="relative z-50 flex h-8 w-10 flex-col justify-between"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "open" : "closed"}
            className="h-1 w-10 origin-left rounded bg-black"
          ></motion.div>
          <motion.div
            variants={middleVariants}
            animate={open ? "open" : "closed"}
            className="h-1 w-10 rounded bg-black"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "open" : "closed"}
            className="h-1 w-10 origin-left rounded bg-black"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            initial="closed"
            variants={listVariants}
            animate="open"
            className="absolute left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black text-4xl text-white"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.href}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};
