"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div className="py-28 mt-10 px-4 sm:px-6 lg:px-4">
      <div className="max-w-2xl grid items-center justify-start text-wrap mx-auto prose">
        <div className="">
          <div className="font-bold text-3xl text-black/90">About</div>
          <p>
            I&apos;m Adebanjo Stephen, a passionate 16-year-old self-taught
            Nigerian software engineer and an aspiring AI & Machine Language
            Expert with over 1yr +2 months of experience and a strong drive for
            building impactful web experiences.
          </p>
          <p className="mt-2">
            At 16, I’ve already built and shipped real-world products—from alarm
            apps to AI products and I’m just getting started. I love solving
            real problems through tech, learning fast, and creating beautiful,
            high-performing user interfaces.
          </p>
          <p className="mt-2">
            I’m currently working with{" "}
            <Link
              href="https://www.linkedin.com/company/externhq/posts/?feedView=all"
              className="hover:text-green-900"
            >
              <strong>Extern</strong>
            </Link>{" "}
            on advanced full-stack projects, diving deeper into AI, and actively
            preparing to land a role at a world-class company like{" "}
            <strong>Google</strong>. I’m also open to freelance and
            collaboration opportunities.
          </p>
          <p className="mt-2">
            I’m also actively building my presence in the tech community. With
            over <strong>200+ followers on X, </strong>
            I’ve learned and connected with top minds, mentors in the indie
            hacker and maker space — including people like{" "}
            <Link href="https://x.com/marc_louvion">
              <strong>@Marc Lou,</strong>
            </Link>{" "}
            <Link href="https://x.com/johnrushx">
              <strong>@johnrushx,</strong>
            </Link>{" "}
            <Link href="https://x.com/tdinh_me">
              <strong>@tdinh_me,</strong>
            </Link>{" "}
            and{" "}
            <Link href="https://x.com/levelsio">
              <strong>@levelsio.</strong>
            </Link>{" "}
            Their guidance and content have helped shape how I think about
            product-building, growth, and shipping fast.
          </p>
          <ul className="list-disc mt-3 text-gray-700">
            <li>Shipped real-world products (alarm apps, AI tools)</li>
            <li>1+ year experience in full-stack development</li>
            <li>Active in the indie hacker & maker space</li>
          </ul>
        </div>
      </div>

      <Link
        href="https://www.linkedin.com/in/stephen-adebanjo-82a6ba359/"
        target="_blank"
      >
        <div className="flex justify-center mt-10 px-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="py-2 px-3 bg-white shadow-sm rounded-sm w-fit"
          >
            <Image
              src="/img/profile-pic.jpg"
              width={200}
              height={200}
              alt="profile image"
              className="rounded-sm bg-white w-full max-w-[200px]"
            />
            <span className="text-sm block text-center mt-1 text-gray-800">
              @midecode
            </span>
          </motion.div>
        </div>
      </Link>

      <div className="flex justify-center mt-6 px-4">
        <Button className="!bg-black/90 text-white !cursor-pointer !py-4 !px-6 hover:!bg-black/82">
          <a href="#contact" aria-label="Contact for collaboration">
            Let&apos;s collaborate!
          </a>
        </Button>
      </div>
    </div>
  );
};

export default About;
