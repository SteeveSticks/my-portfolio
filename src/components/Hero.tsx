import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Dot } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <section className="grid justify-center  items-center text-center py-24 mt-6">
        <div className="inline-flex items-center justify-center">
          <Image
            src="/img/profile-image.jpg"
            className="rounded-full"
            alt="profile logo"
            width={114}
            height={30}
          />
        </div>

        <div className="">
          <h1 className="font-bold leading-14 text-[56px] mt-4">
            Hi, I&apos;m Adebanjo Stephen.
            <br /> Software Engineer
          </h1>
          <h3 className="text-gray-600 mt-4">
            Relentless self-taught developer, passionate about crafting Next.js
            solutions,
            <br /> and driven to grow in tech.
          </h3>
        </div>

        <div className="flex items-center justify-center mt-6 gap-2">
          <Button className="!bg-black/90 text-white !cursor-pointer !py-4 !px-6 hover:!bg-black/82">
            Hire Me!
          </Button>
          <div className="border flex-center bg-[#E1F9DC] text-[#178D00] px-4 py-1 rounded-full">
            <Dot className="size-6" />
            <span>Available for collaborations</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
