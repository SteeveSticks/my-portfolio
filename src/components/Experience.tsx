import React from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

const Experience = () => {
  return (
    <div id="experience" className="px-2 sm:px-20 lg:px-20">
      <hr className="mt-30 px-10" />

      <div className="mt-18 p-6">
        <div>
          <h2 className="font-bold text-2xl text-black">Work Experience</h2>

          <div className="md:flex md:items-center md:justify-between grid mt-8">
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              2024-Present
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Founder and Developer{" "}
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                MideCode
              </Button>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-between grid mt-8">
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              2025-Present
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Internship Frontend Developer
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                Bright Sparks Academy
              </Button>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-between grid mt-8">
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              2025-Present
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Externship AI & Machine Learning
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                <span className="text-black">
                  Ex<span className="text-green-800">tern</span>
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-wrap prose border p-2 mt-14 rounded-sm shadow-sm">
          <Star className="text-[#3B82F6] mb-2" />
          <span className="bg-[#EEF4FF] text-[#3B82F6]">
            As a self-taught dev, I’ve built impactful projects like
            StartupFounder and a panic alarm app, solving real problems with
            Next.js and TypeScript.
            <br />
            I&apos;m actively seeking opportunities to gain hands-on experience,
            contribute to meaningful products, and grow professionally.{" "}
            <span className="text-gray-700">
              If you&apos;re looking for someone hungry to learn and build —
              let&apos;s connect.
            </span>
          </span>
        </div>
      </div>

      <hr className="mt-20" />
    </div>
  );
};

export default Experience;
