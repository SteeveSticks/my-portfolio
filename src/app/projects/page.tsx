"use client";

import React, { useRef } from "react";
import { projects } from "../../../_data/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function AllProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="all-projects" ref={ref} className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-10 py-2 px-1 grid font-bold md:text-3xl text-3xl"
      >
        <div className="text-center prose">
          <h1 className="text-[40px] max-md:text-[30px]">
            All Shipped Projects.
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 px-3 sm:px-4 md:px-6">
          {projects.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="border rounded-2xl"
            >
              <div className="p-5 space-y-2">
                <div className="bg-gray-50/85 border rounded-2xl overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={`/img/${data.img}`}
                      alt={data.name}
                      width={900}
                      height={900}
                      className="rounded-2xl w-full h-auto shadow-md"
                    />
                  </motion.div>
                </div>

                <h2 className="text-2xl font-bold mt-6 tracking-[0.10px]">
                  {data.name}
                </h2>

                <p className="text-base text-wrap prose font-light text-gray-700 line-clamp-2 mt-4 flex-grow">
                  {data.desc}
                </p>
                <Link href={`/project/${data.slug}`} className="">
                  <motion.div
                    whileHover={{ width: "60%" }}
                    initial={{ width: "fit-content" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button className="!cursor-pointer !bg-gray-100 hover:!bg-gray-200 !px-6 !py-6 text-[15px] font-medium mt-5 rounded-xl w-full">
                      <motion.div
                        whileHover={{ gap: "20px" }}
                        className="flex items-center gap-2"
                      >
                        <span>View Project</span>

                        <motion.span whileHover={{ scale: 1.1 }}>
                          <ChevronRight className="size-5" />
                        </motion.span>
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
