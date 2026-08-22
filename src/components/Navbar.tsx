"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  const handleResumeClick = () => {
    const resumeUrl = "/adebanjo-stephen-resume.pdf";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");

    const downloadLink = document.createElement("a");
    downloadLink.href = resumeUrl;
    downloadLink.download = "Adebanjo-Stephen-Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <header className="py-4">
      <nav className="max-w-[586px] mx-auto bg-black/85 flex flex-wrap justify-between items-center py-2 px-4 rounded-full border outline-none shadow-md fixed left-0 right-0 z-50">
        {/* <div>
          <Link href="/">
            <img src="/img/brandLogo.png" alt="Brand Logo" />
          </Link>
        </div> */}

        <div className="">
          <ul className="flex-center flex-wrap">
            <li className="">
              <Button variant="link">
                <Link href="/#">Home</Link>
              </Button>
            </li>
            <li className="sm:block hidden">
              <Button variant="link">
                <Link href="/#projects">Projects</Link>
              </Button>
            </li>
            <li className="sm:block hidden">
              <Button variant="link">
                <Link href="/#experience">Experience</Link>
              </Button>
            </li>
          </ul>
        </div>

        <div className="flex-between gap-2 flex-wrap">
          <Tooltip>
            <TooltipTrigger>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SteeveSticks"
              >
                <FiGithub className="size-6 text-white hover:text-white/90 cursor-pointer mr-2" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <button
                type="button"
                onClick={handleResumeClick}
                className="text-white hover:text-white/90 cursor-pointer"
                aria-label="Open and download resume"
              >
                <IoDocumentTextOutline className="size-6" />
              </button>
            </TooltipTrigger>
            <ul className="flex-between flex-wrap"></ul>
            <TooltipContent>Resume</TooltipContent>
          </Tooltip>

          <div className="border-l">
            <Button className="ml-2">
              <Link href="/#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
