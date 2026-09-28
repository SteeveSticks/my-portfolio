"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="py-28 mt-10 px-4 sm:px-6 lg:px-4">
      <div className="max-w-2xl grid items-center justify-start text-wrap mx-auto prose">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=""
        >
          <div className="font-bold text-3xl text-black/90">
            About
          </div>
          <p>
            I&apos;m Stephen, an AI &amp; Machine Learning Engineer
            building end-to-end systems that turn raw data, documents,
            and user questions into reliable AI experiences.
          </p>
          <p className="mt-2">
            My work sits at the intersection of machine learning,
            product thinking, and full‑stack engineering. I design
            retrieval pipelines, evaluate embeddings and prompting
            strategies, build RAG systems, and ship polished
            interfaces that make those models useful in the real
            world.
          </p>
          <p className="mt-2">
            I&apos;ve built and shipped AI-powered products across
            document understanding, retrieval, and workflow
            automation, and I enjoy solving the hard parts of
            real-world ML systems: benchmarking model behavior,
            improving grounding, and translating technical complexity
            into dependable product experiences.
          </p>
          <p className="mt-2">
            I&apos;ve collaborated with major infrastructure companies
            like{" "}
            <Link
              href="https://www.linkedin.com/company/externhq/posts/?feedView=all"
              className="hover:text-green-900"
            >
              <strong>Extern</strong>
            </Link>{" "}
            on advanced product and AI engineering work. From
            architecture to implementation and iteration, I enjoy
            shipping systems that balance performance, usability, and
            business impact.
          </p>
          <p className="mt-2">
            I&apos;m also actively building in public. Connecting with
            my 230+ followers on X and learning from top mentors in
            the space—including{" "}
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
              <strong>@levelsio</strong>
            </Link>
            —has shaped how I think about building AI products and
            shipping fast with strong fundamentals.
          </p>
          <p className="mt-2">
            I also love music and play both a keyboard and a drum.
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center gap-3">
        <div className="grid">
          <Link
            href="https://www.linkedin.com/in/stephenadebanjo/?isSelfProfile=true"
            target="_blank"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="flex justify-center mt-10 px-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="py-2 px-3 bg-white shadow-sm rounded-sm w-fit"
              >
                <Image
                  src="/img/profile-pic.jpg"
                  width={180}
                  height={400}
                  alt="profile image"
                  sizes="180px"
                  className="rounded-sm bg-white w-full"
                />
                <span className="text-sm block text-center mt-1 text-gray-800">
                  @midecode
                </span>
              </motion.div>
            </motion.div>
          </Link>

          <Link
            href="https://www.linkedin.com/in/stephenadebanjo/?isSelfProfile=true"
            target="_blank"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="flex justify-center mt-10 px-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="py-2 px-3 bg-white shadow-sm rounded-sm w-fit"
              >
                <Image
                  src="/img/personal-image-garden.jpeg"
                  width={180}
                  height={400}
                  alt="profile image"
                  sizes="180px"
                  className="rounded-sm bg-white w-full"
                />
                <span className="text-sm block text-center mt-1 text-gray-800">
                  @midecode
                </span>
              </motion.div>
            </motion.div>
          </Link>
        </div>

        <div className="grid">
          <Link
            href="https://www.linkedin.com/in/stephenadebanjo/?isSelfProfile=true"
            target="_blank"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="flex justify-center mt-10 px-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="py-2 px-3 bg-white shadow-sm rounded-sm w-fit"
              >
                <Image
                  src="/img/personal-image.jpeg"
                  width={200}
                  height={200}
                  alt="profile image"
                  sizes="200px"
                  className="rounded-sm bg-white w-full max-w-[200px]"
                />
                <span className="text-sm block text-center mt-1 text-gray-800">
                  @midecode
                </span>
              </motion.div>
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="flex justify-center mt-6 px-4"
          >
            <Button className="!bg-black/90 text-white !cursor-pointer !py-4 !px-6 hover:!bg-black/82">
              <a
                href="#contact"
                aria-label="Contact for collaboration"
              >
                Let&apos;s collaborate!
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
