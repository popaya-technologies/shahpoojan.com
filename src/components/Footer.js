import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border-t z-10 border-t-[#33353F]">
      <div className="container p-12 flex justify-between">
        <div className="text-white flex flex-row items-center gap-3 text-lg">
          <Image src={"/images/logo.png"} alt="logo" width={20} height={20} />
          <span>Poojan Shah</span>
        </div>
        <p className="text-slate-600">All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
