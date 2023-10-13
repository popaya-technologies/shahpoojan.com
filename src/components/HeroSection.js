"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import swal from "sweetalert";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section id="home" className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Poojan",
                  1000,
                  "Web Developer",
                  1000,
                  "FX Artist",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
              Navigating the Technological Frontier: A Journey of Delivering
              Excellence
            </p>

            <div className="">
              <Link
                href="#contact"
                className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >
                Hire Me
              </Link>
              <button
                type="button"
                className="px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                onClick={() =>
                  swal(
                    "404",
                    "Uploading Resume.\n Please check back later.\n Thank you!",
                    "error",
                    {
                      button: "Will Do!",
                    }
                  )
                }
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2.5">
                  Download Resume
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="absolute transform -translate-y-1/2 top-1/2 right-0"
                width={300}
                height={300}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
