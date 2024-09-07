"use client";

import React from "react";
import { Cedarville_Cursive as handwritten } from "next/font/google";

import Layout from "@/components/layout/Layout";
import { ExperienceItem } from "@/components/elements/ExperienceItem";
import { motion, useInView, useScroll } from "framer-motion";
import Brain from "@/components/elements/Brain";

const handwriting = handwritten({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export default function About() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const skillRef = React.useRef<HTMLDivElement>(null);
  const experienceRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <Layout>
      {/* CONTAINER */}
      <div ref={containerRef} className="h-full overflow-scroll lg:flex">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-24 p-4 sm:p-8 md:gap-32 md:p-12 lg:w-2/3 lg:gap-48 lg:p-20 lg:pr-0 xl:w-1/2 xl:gap-64 xl:p-48">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col justify-center gap-12">
            {/* BIOGRAPHY TITLE */}
            <h1 className="text-2xl font-bold">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quia veniam nemo rem earum omnis ipsam optio, accusamus minima
              perspiciatis.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG */}
            <div className="self-end">
              <span className={`${handwriting.className} text-4xl`}>
                Poojan
              </span>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div ref={skillRef} className="flex flex-col justify-center gap-12">
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex flex-wrap gap-4"
            >
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Redux
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            ref={experienceRef}
            className="flex flex-col justify-center gap-12 pb-48"
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              EXPERIENCES
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
            >
              {/* EXPERIENCE LIST ITEM */}
              <ExperienceItem
                experiences={[
                  {
                    title: "Job Title",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    date: "2024 - Present",
                    company: "Popaya Technologies",
                  },
                  {
                    title: "Job Title",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    date: "2024 - Present",
                    company: "Popaya Technologies",
                  },
                  {
                    title: "Job Title",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    date: "2024 - Present",
                    company: "Popaya Technologies",
                  },
                ]}
              />
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="sticky  top-0 z-30 hidden w-1/3 lg:flex xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </Layout>
  );
}
