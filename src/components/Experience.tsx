import React from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

const Experience = () => {
  return (
    <div className="px-20">
      <hr className="mt-40 px-10" />

      <div className="mt-18 p-6">
        <div>
          <h2 className="font-bold text-2xl text-black">Work Experience</h2>

          <div className="flex-between mt-8">
            <span className="text-sm text-gray-500">2024-Present</span>

            <div className="flex-center">
              <h1 className="text-gray-500">Founder and Developer </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                MideCode
              </Button>
            </div>
          </div>
        </div>

        <div className="text-wrap prose border p-2 mt-8 rounded-sm shadow-sm">
          <Star className="text-[#3B82F6] mb-2" />
          <span className="bg-[#EEF4FF] text-[#3B82F6]">
            While I may not have formal work experience yet, I&apos;ve been
            consistently building real-world projects that solve real problems.
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
    </div>
  );
};

export default Experience;
