import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";

const Navbar = () => {
  return (
    <header className="py-4">
      <nav className="max-w-[586px] mx-auto bg-black/85 flex flex-wrap justify-between items-center py-2 px-4 rounded-full border outline-none shadow-md fixed left-0 right-0 z-50">
        <div>
          <Link href="/">
            <img src="/img/brandLogo.png" alt="Brand Logo" />
          </Link>
        </div>

        <div className="">
          <ul className="flex-center flex-wrap">
            <li className="">
              <Button variant="link">
                <a href="#">Home</a>
              </Button>
            </li>
            <li className="sm:block hidden">
              <Button variant="link">
                <a href="#projects">Projects</a>
              </Button>
            </li>
            <li className="sm:block hidden">
              <Button variant="link">
                <Link href="#experience">Experience</Link>
              </Button>
            </li>
          </ul>
        </div>

        <div className="flex-between gap-2 flex-wrap">
          <HoverCard>
            <HoverCardTrigger>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SteeveSticks"
              >
                <FiGithub className="size-6 text-white hover:text-white/90 cursor-pointer mr-2" />
              </Link>
            </HoverCardTrigger>
            <HoverCardContent>GitHub</HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <a
                download
                target="_blank"
                rel="noopener noreferrer"
                href="/Resume (7).pdf"
              >
                <IoDocumentTextOutline className="size-6 text-white hover:text-white/90 cursor-pointer" />
              </a>
            </HoverCardTrigger>
            <ul className="flex-between flex-wrap"></ul>
            <HoverCardContent>Resume</HoverCardContent>
          </HoverCard>

          <div className="border-l">
            <Button className="ml-2">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
