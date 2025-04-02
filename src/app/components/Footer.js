import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] border-t-2 border-[#114074]">
      <div className="flex justify-center items-center py-5 bg-[#0a192e]">
        <Logo color="white" className="h-14" />
      </div>
      <div className="bg-[#0a192e] flex justify-center items-center gap-10 py-5 border-b-2 border-t-2 border-[#114074]">
        <Link
          href="https://www.facebook.com/profile.php?id=100087154231923"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="Facebook"
            className="inline-block mx-2"
            src="/icons/facebook.svg"
            width={25}
            height={25}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/company/86423797/admin/dashboard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="LinkedIn"
            className="inline-block mx-2"
            src="/icons/linkedin.svg"
            width={25}
            height={25}
          />
        </Link>
        <Link
          href="https://www.instagram.com/kakushin.io?igsh=MXE0b3MyZjB0dDA3dw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="Instagram"
            className="inline-block mx-2"
            src="/icons/instagram.svg"
            width={25}
            height={25}
          />
        </Link>
      </div>
      <div className="flex justify-center flex-col items-center py-5 bg-[#0a192e]">
        <p className="text-white text-sm">
          © 2025 Kakushin. All rights reserved.
        </p>
        <p className="text-white text-sm">
          Made with{" "}
          <Image
            alt="Heart"
            className="inline-block mx-2"
            src="/icons/heart.svg"
            width={20}
            height={20}
          />
          and{" "}
          <Image
            alt="Coffee"
            className="inline-block mx-2"
            src="/icons/coffee.svg"
            width={20}
            height={20}
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
