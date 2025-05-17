"use client";

import React from "react";
import { projects } from "../../_data/data";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div id="projects">
      <div className="mt-10 py-2 grid font-bold text-3xl">
        <div className="text-center">
          <h1>Shipped Projects (Last 8 Months)</h1>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 px-6">
          {projects.map((data, index) => (
            <div key={index} className="border rounded-2xl">
              <div className="p-5">
                <div className="p-4 bg-gray-200 rounded-xl">
                  <Image
                    src={`/img/${data.img}`}
                    alt={data.name}
                    width={900}
                    height={900}
                    className="w-full object-contain overflow-hidden rounded-sm"
                  />
                </div>

                <h2 className="text-2xl font-bold mt-8 tracking-[0.5px]">
                  {data.name}
                </h2>
                <p className="text-base text-wrap prose font-light text-gray-700 line-clamp-2 mt-4 flex-grow">
                  {data.desc}
                </p>
                <Link href={`/project/${data.slug}`} className="">
                  <motion.div whileHover={{ x: 5 }}>
                    <Button className="!cursor-pointer mt-4 !bg-gray-200 hover:!bg-gray-200/80 space-x-3 transition-colors">
                      View Project <ArrowRightIcon />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
