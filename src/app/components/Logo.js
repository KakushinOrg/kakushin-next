import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ color, className }) => {
  return (
    <div>
      <Link href="/">
        <Image
          width={200}
          height={200}
          src="/images/logo-footer-white.png"
          alt="Picture of the author"
          className={`w-auto h-8 ${className}`}
        />
      </Link>
    </div>
  );
};

export default Logo;
