import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";

const Navbar = () => {
  return (
    <header className="py-4">
      <nav className="max-w-[586px] border mx-auto bg-black/85 flex justify-between items-center py-2 px-4 rounded-full">
        <div>
          <img src="img/brandLogo.png" alt="Brand Logo" />
        </div>

        <div className="">
          <ul className="flex-between">
            <li>
              <Button variant="link">
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link href="/">Projects</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link href="/">Experience</Link>
              </Button>
            </li>
          </ul>
        </div>

        <div className="flex-between gap-2">
          <HoverCard>
            <HoverCardTrigger>
              <FiGithub className="size-6 text-white hover:text-white/90" />
            </HoverCardTrigger>
            <HoverCardContent>GitHub</HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <IoDocumentTextOutline className="size-6 text-white hover:text-white/90" />
            </HoverCardTrigger>
            <HoverCardContent>Resume</HoverCardContent>
          </HoverCard>

          <div className="border-l">
            <Button className="ml-2">
              <Link href="/">Contact</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
