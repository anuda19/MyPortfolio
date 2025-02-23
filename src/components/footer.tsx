import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Link
            href="#"
            className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
          >
            &copy; {CURRENT_YEAR} Anurag Sinha
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href="https://www.linkedin.com/in/anurag-sinha-0a6a41148/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              href="https://x.com/AnuragS19533346?t=lbK-lialXzNVAJ0g866nSA&s=08"
              target="_blank"
            >
              <FaTwitterSquare size={30} />
            </Link>
            <Link href="https://github.com/anuda19" target="_blank">
              <FaGithub size={30} />
            </Link>
            <Link href="https://leetcode.com/u/anurag_sinha/" target="_blank">
              <SiLeetcode size={30} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
