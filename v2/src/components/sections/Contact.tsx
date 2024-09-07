"use client";

import React from "react";
import { motion } from "framer-motion";

type ContactProps = {};

export default function Contact({}: ContactProps) {
  const text = "Say Hello";

  return (
    <div className="flex h-full flex-col px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
      {/* TEXT CONTAINER */}
      <div className="flex h-1/2 items-center justify-center text-6xl lg:h-full lg:w-1/2">
        <div>
          {text.split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
          😊
        </div>
      </div>
      {/* FORM CONTAINER */}
      <form className="flex h-1/2 flex-col justify-center gap-8 rounded-xl bg-emerald-50 p-24 text-xl lg:h-full lg:w-1/2">
        <span>Dear Poojan,</span>
        <textarea
          rows={6}
          className="resize-none border-b-2 border-b-black bg-transparent outline-none"
        />
        <span>My e-mail address is:</span>
        <input
          type="email"
          className="border-b-2 border-b-black bg-transparent outline-none"
        />
        <span>Regards,</span>
        <input
          type="text"
          className="border-b-2 border-b-black bg-transparent outline-none"
        />
        <button className="rounded bg-emerald-200 p-4 font-semibold text-gray-600">
          Send
        </button>
      </form>
    </div>
  );
}
