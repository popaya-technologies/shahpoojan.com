"use client";
import React, { useState, useRef } from "react";
import YouTube from "react-youtube";
import { motion, useInView } from "framer-motion";

const ShowcaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const opts = {
    height: "540",
    width: "960",
    playerVars: {
      autoplay: isInView ? 1 : 0,
    },
  };

  const onReady = (e) => {
    const player = e.target;

    if (isInView) player.playVideo();
  };

  const onError = (error) => {
    console.error("YouTube Player Error:", error);
  };

  const videoVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="showcase" className="md:py-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Showcase
      </h2>
      <div
        ref={ref}
        className="text-white flex justify-center items-center gap-2 py-6"
      >
        <motion.div
          variants={videoVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="w-full h-full"
        >
          <YouTube
            className="flex justify-center items-center"
            iframeClassName="w-full md:w-3/4"
            videoId="-XdzPZsDiiM"
            opts={opts}
            onReady={onReady}
            onError={onError}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
