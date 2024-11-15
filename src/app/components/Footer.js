"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 md:py-12 lg:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-20 space-y-6 md:space-y-0">
        
        <div className="">
          <Logo color="white" className="" />
        </div>

        <div className="text-center md:text-left">
          <p className="text-white text-sm md:text-base mb-2 md:mb-4">
            © 2024 Kakushin. All rights reserved.
          </p>
          <p className="text-white text-sm md:text-base">
            Made with{" "}
            <Image
              alt="Heart"
              className="inline-block mx-1"
              src="/icons/heart.svg"
              width={12}
              height={12}
            />
            and{" "}
            <Image
              alt="Coffee"
              className="inline-block mx-1"
              src="/icons/coffee.svg"
              width={12}
              height={12}
            />
          </p>
        </div>

        <div className="flex space-x-4">
          <Link
            href="https://www.facebook.com/profile.php?id=100087154231923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-gray-400"
          >
            <FaFacebookF className="h-6 w-6 md:h-5 md:w-5" />
          </Link>
          <Link
            href="https://www.instagram.com/kakushin.io?igsh=MXE0b3MyZjB0dDA3dw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-400"
          >
            <FaInstagram className="h-6 w-6 md:h-5 md:w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/86423797/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="hover:text-gray-400"
          >
            <FaLinkedinIn className="h-6 w-6 md:h-5 md:w-5" />
          </Link>
          <Link
            href="http://www.youtube.com/channel/UC52etC2bqDY4K-fHF4OUgYQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
            className="hover:text-gray-400"
          >
            <FaYoutube className="h-6 w-6 md:h-5 md:w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
