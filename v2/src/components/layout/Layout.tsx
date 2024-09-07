"use client";

import React from "react";
import { motion } from "framer-motion";

import { HeaderOne } from "./header/HeaderOne";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <HeaderOne />
        <main className="h-[calc(100vh-6rem)]">{children}</main>
      </motion.div>
    </>
  );
};

export default Layout;
