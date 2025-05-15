import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border ">
      <nav className="max-w-[526px] border mx-auto py-2 bg-white flex justify-between items-center">
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

        <div className="border-l">
          <Button className="ml-2">
            <Link href="/">Contact</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
