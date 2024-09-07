import React from "react";
import { Navbar } from "./components/Navbar";

type HeaderProps = {};

export const HeaderOne = (props: HeaderProps) => {
  return (
    <div className="h-24">
      <Navbar />
    </div>
  );
};
