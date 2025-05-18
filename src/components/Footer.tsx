import { Mail } from "lucide-react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-12 pb-20">
      <hr className="mt-23" />

      <div className="mt-6 text-center">
        <span className="text-gray-600 text-[16px] tracking-normal">
          Copyright@2025AdebanjoStephen
        </span>

        <div className="flex items-center justify-center gap-6 mt-2">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://x.com/AdebanjoSt63916"
          >
            <FaXTwitter className="size-5 text-gray-700 hover:text-gray-600 cursor-pointer" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SteeveSticks"
          >
            <FiGithub className="size-5 text-gray-70 hover:text-gray-600 cursor-pointer" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/stephen-adebanjo-82a6ba359/"
          >
            <FaLinkedin className="size-5 text-gray-700 hover:text-gray-600 cursor-pointer" />
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:stephenadebanjo86@gmail.com"
          >
            <Mail className="size-5 text-gray-700 hover:text-gray-600 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
