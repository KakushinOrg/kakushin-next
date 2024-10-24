import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e]" id="contact">
      <div className="flex justify-center items-center py-5">
        <Logo color="white" className="h-14" />
      </div>
      <div className="bg-[#1e1e1e] flex justify-center items-center gap-10 py-5 border-b-2 border-t-2 border-gray-50/10">
        <Link
          href="https://www.facebook.com/profile.php?id=100087154231923"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="Facebook"
            className="inline-block mx-2"
            src="/icons/facebook.svg"
            width={15}
            height={15}
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
            width={15}
            height={15}
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
            width={18}
            height={18}
          />
        </Link>
        <Link
          href="http://www.youtube.com/channel/UC52etC2bqDY4K-fHF4OUgYQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="Youtube"
            className="inline-block mx-2"
            src="/icons/youtube.svg"
            width={18}
            height={18}
          />
        </Link>
      </div>
      <div className="flex justify-center flex-col items-center py-5">
        <p className="text-white text-sm">
          © 2024 Kakushin. All rights reserved.
        </p>
        <p className="text-white text-sm">
          Made with{" "}
          <Image
            alt="Heart"
            className="inline-block mx-2"
            src="/icons/heart.svg"
            width={10}
            height={10}
          />
          and{" "}
          <Image
            alt="Coffee"
            className="inline-block mx-2"
            src="/icons/coffee.svg"
            width={10}
            height={10}
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
