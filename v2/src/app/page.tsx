import React from "react";
import Image from "next/image";

import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex h-full flex-col px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2">
          <Image
            src="/hero.png"
            alt="Poojan Shah"
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex h-1/2 flex-col items-center justify-center gap-8 lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">
            Lorem ipsum dolor sit amet
          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
            dicta aut asperiores omnis incidunt assumenda voluptatibus saepe
            cupiditate, nobis sunt excepturi expedita veniam neque eligendi
            culpa rerum tenetur dolor, sint voluptates ullam!
          </p>
          {/* BUTTONS */}
          <div className="flex w-full gap-4">
            <button className="rounded-lg bg-black p-4 text-white ring ring-black">
              View My Work
            </button>
            <button className="rounded-lg p-4 ring ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
