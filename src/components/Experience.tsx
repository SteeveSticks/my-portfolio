"use client";

import React, { useRef } from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="experience" ref={ref} className="px-2 sm:px-20 lg:px-20">
      <hr className="mt-30 px-10" />

      <div className="mt-18 p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-bold text-2xl text-black">Work Experience</h2>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="md:flex md:items-center md:justify-between grid mt-8"
          >
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              2024-Present
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Founder and Developer{" "} at
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                MideCode
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="md:flex md:items-center md:justify-between grid mt-8"
          >
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              2025-2026
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Frontend Developer at
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                Bright <span className="text-yellow-600/90">Sparks Academy</span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="md:flex md:items-center md:justify-between grid mt-8"
          >
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              2025-Present
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Externship AI & Machine Learning at
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                <span className="text-black">
                  Ex<span className="text-green-800">tern</span>
                </span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="md:flex md:items-center md:justify-between grid mt-8"
          >
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              2025-Present
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
              Backend Engineer at 
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                <span className="text-black">
                  Zend<span className="text-[#1ABC55]">solv</span>
                </span>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="text-wrap prose border p-2 mt-14 rounded-sm shadow-sm"
        >
          <Star className="text-[#3B82F6] mb-2" />
          <span className="bg-[#EEF4FF] text-[#3B82F6]">
            As a self-taught dev, I’ve built impactful projects and AI products, solving real problems with
            Next.js, TypeScript, and AI.
            <br />
            I&apos;m actively seeking opportunities to gain hands-on experience,
            contribute to meaningful products, and grow professionally.{" "}
            <span className="text-gray-700">
              If you&apos;re looking for someone hungry to learn and build —
              let&apos;s connect.
            </span>
          </span>
        </motion.div>
      </div>

      <hr className="mt-15" />
    </div>
  );
};

export default Experience;
