"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const techStack = [
  { name: "React", src: "/tech/react.svg" },
  { name: "Next.js", src: "/tech/nextjs.svg" },
  { name: "Tailwind", src: "/tech/tailwind.svg" },
  { name: "Typescript", src: "/tech/typescript.svg" },
  { name: "Nodejs", src: "/tech/nodejs.svg" },
  { name: "Javascript ", src: "/tech/javascript.svg" },
  { name: "Firebase", src: "/tech/firebase.svg" },
  { name: "Mongodb", src: "/tech/mongodb.svg" },
  { name: "phyton", src: "/tech/phyton.svg" },
];

const StackLoop = () => {
  return (
    <div className="rounded-xs overflow-hidden py-1 md:max-w-[400px] max-w-[320px] mx-auto ">
      <Marquee delay={5} speed={30}>
        <div className="flex-center gap-3 mx-3">
          {techStack.map((tech, index) => (
            <div key={index} className="">
              <Image
                src={tech.src}
                alt={tech.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default StackLoop;
