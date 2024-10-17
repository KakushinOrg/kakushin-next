import React from "react";
import Image from "next/image";
import Link from "next/link";
import WhiteLogo from "/images/logo-footer-white.png";
import BlackLogo from "/images/logo-footer-black.png";

const Logo = ({ color, className }) => {
  return (
    <div>
      <Link href="/">
        <Image
          src={color === "white" ? WhiteLogo : BlackLogo}
          alt="Picture of the author"
          className={`w-auto h-8 ${className}`}
        />
      </Link>
    </div>
  );
};

export default Logo;
