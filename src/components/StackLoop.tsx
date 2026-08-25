"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const techStack = [
  { name: "phyton", src: "/tech/phyton.svg" },
  { name: "PyTorch", src: "/tech/pytorch.svg" },
  { name: "Hugging Face", src: "/tech/huggingface.svg" },
  { name: "OpenAI", src: "/tech/openai.svg" },
  { name: "LlamaIndex", src: "/tech/llamaindex.svg" },
  { name: "PostgreSQL", src: "/tech/postgresql.svg" },
  { name: "FastAPI", src: "/tech/fastapi.svg" },
  { name: "Docker", src: "/tech/docker.svg" },
  { name: "Typescript", src: "/tech/typescript.svg" },
  { name: "Next.js", src: "/tech/nextjs.svg" },
];

const StackLoop = () => {
  return (
    <div className="rounded-xs overflow-hidden py-1 md:max-w-[600px] max-w-[320px] mx-auto ">
      <Marquee delay={10} speed={20}>
        <div className="flex-center gap-5 mx-3">
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
