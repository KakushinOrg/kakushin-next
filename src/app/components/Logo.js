import React from "react";
import Image from "next/image";
import Link from "next/link";
import WhiteLogo from "../../../public/images/logo-footer-white.png";
import BlackLogo from "../../../public/images/logo-footer-black.png";

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
