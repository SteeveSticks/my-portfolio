"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="py-28 mt-10 px-4 sm:px-6 lg:px-4">
      <div className="max-w-2xl grid items-center justify-start text-wrap mx-auto prose">
        <div className="">
          <div className="font-bold text-3xl text-black/90">About</div>
          <p>
            I&apos;m Adebanjo Stephen, a passionate 16-year-old self-taught
            Nigerian software engineer with over 9+ months of experience and a
            strong drive for building impactful web experiences.
          </p>
          <p className="mt-2">
            At 16, I’ve already built and shipped real-world products—from alarm
            apps to job portals—and I’m just getting started. I love solving
            real problems through tech, learning fast, and creating beautiful,
            high-performing user interfaces.
          </p>
          <p className="mt-2">
            I’m currently working on advanced full-stack projects, diving deeper
            into AI, and actively preparing to land a role at a world-class
            company like <strong>Google</strong>. I’m also open to freelance and
            collaboration opportunities.
          </p>
          <p className="mt-2">
            I’m also actively building my presence in the tech community. With
            over <strong>140+ followers on X, </strong>
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
        </div>
      </div>

      <div className="flex justify-center mt-6 px-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
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
    </div>
  );
};

export default About;
