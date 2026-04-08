"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Dot } from "lucide-react";
import StackLoop from "./StackLoop";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div>
      <section ref={ref} className="grid justify-center items-center text-center py-24 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center justify-center"
        >
          <Image
            src="/img/profile-image.jpg"
            className="rounded-full mt-6"
            alt="profile logo"
            width={114}
            height={30}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className=""
        >
          <h1 className="font-bold md:leading-14 leading-8 md:text-[56px] text-[28px] mt-6">
            Hi, I&apos;m Adebanjo Stephen.
            <br /> Software Engineer
          </h1>
          <h3 className="text-gray-600 mt-4 flex-wrap md:px-0 px-4">
            Relentless self-taught developer, passionate about crafting Next.js
            solutions,
            <br />
            and driven to grow in tech.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center mt-6 gap-2 flex-wrap"
        >
          <Button className="!bg-black/90 text-white !cursor-pointer !py-4 !px-6 hover:!bg-black/82">
            <a href="#contact">Hire Me!</a>
          </Button>
          <div className="border flex-center bg-[#E1F9DC] text-[#178D00] px-4 py-1 rounded-full">
            <Dot className="size-6" />
            <span>Available for collaborations</span>
          </div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <StackLoop />
      </motion.div>
    </div>
  );
};

export default Hero;
