"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Popaya Technologies, Self-Employed, Mumbai</li>
        <li>88 pictures, Freelance, Mumbai</li>
        <li>Assemblage, Freelance, Mumbai</li>
        <li>Prana Studios, CG Generalist, Mumbai</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Academy of Art University, San Francisco</li>
        <li>S.I.E.S. College of Commerce & Economics, Mumbai</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const divVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="about" className="text-white">
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        {/* <Image
          src={"/images/about-image.png"}
          alt="about image"
          width={500}
          height={500}
        /> */}

        <div ref={ref} className="mt-4 md:mt-0 text-left flex flex-col h-full">
          {/* <h2 className="text-4xl font-bold text-white mb-4">About Me</h2> */}
          <motion.p
            variants={divVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3 }}
            className="text-base md:text-lg mb-4"
          >
            Sphered with an innovative, strategic eye for creative content,
            special effects and design, Poojan has the ability to turn vision
            into reality. He grew up in Mumbai, India and graduated in Commerce
            before listening to his natural calling-Animation. He went on to do
            his Masters at the Academy of Art University, San Francisco.
          </motion.p>

          <motion.p
            variants={divVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-base md:text-lg mb-4"
          >
            Fresh out of his Masters, Poojan bagged the much talked about
            movie-Rachel 9000 (2013) which was selected to be screened at the
            Laemmle LA Short Film Fest (Los Angeles), besides the Roswell Film
            Fest (New Mexico) and The Other Venice Film Festival (California).
            Also winning credits in the Disney movie-Tinkerbell & The Pirate
            Fairy (2014) and Planes: Fire & Rescue (2014). Besides, he has
            dabbed in the field of web development. And, in a short while he has
            worked on a diverse technology-reactjs, nextjs, html, css
            javascript, nodejs, expressjs, mongodb....
          </motion.p>

          <motion.p
            variants={divVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="text-base md:text-lg "
          >
            Motivated by a persistent urge for high quality work and creative
            solutions, Poojan keeps enhancing his skills. He is led with a
            personal belief that films have a social responsibility,
            particularly the animation genre that makes such an indelible
            impression on the younger generation.
          </motion.p>
        </div>

        <div ref={ref} className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.div
            variants={divVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3 }}
            className="flex flex-row justify-start"
          >
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </motion.div>

          <motion.div
            variants={divVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            {isPending ? (
              <p>Loading...</p>
            ) : (
              TAB_DATA.find((data) => data.id === tab).content
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
