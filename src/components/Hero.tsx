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
      <section
        ref={ref}
        className="grid justify-center items-center text-center py-24 md:mt-36 space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center justify-center"
        >
          <Image
            src="/img/profile-image.jpg"
            className="rounded-full md:size-40 size-28"
            alt="profile logo"
            width={100}
            height={100}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className=""
        >
          <h1 className="font-bold md:leading-14 leading-8 md:text-[50px] text-[30px]">
            <span>Hi, I&apos;m Adebanjo Stephen.</span>
            <br />
            <motion.span
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={
                isInView
                  ? { opacity: 1, clipPath: "inset(0 0% 0 0)" }
                  : { opacity: 0, clipPath: "inset(0 100% 0 0)" }
              }
              transition={{
                duration: 2,
                delay: 0.55,
                ease: "easeOut",
              }}
              className="block md:text-[46px] text-[25px]"
            >
              AI / ML Engineer
            </motion.span>
          </h1>
          <h3 className="text-gray-600 flex-wrap md:px-16 px-4 mt-2">
            <span className="hidden md:inline">
              SWE | ML Engineer building AI systems that understand
              documents, designing and shipping complex RAG pipelines,
              wiring them into full-stack applications.
            </span>
            <span className="md:hidden">
              SWE | ML Engineer building AI systems that understand
              documents, complex RAG pipelines.
            </span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 flex-wrap"
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
        animate={
          isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <StackLoop />
      </motion.div>
    </div>
  );
};

export default Hero;
