"use client";
import React from "react";
import Whatsapp from "../../../public/images/whatsapp_social.svg";
import Image from "next/image";
import Link from "next/link";
import hero_Image from "../../../public/images/hero_Image.jpg";
import { ComplexButton } from "@/app/components/Buttons/buttons";

const Hero = () => {
  const handleContactClick = () => {
    const contactEl = document.getElementById("contact-section");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLaunchpadClick = () => {
    window.open("https://launchpad.kakushin.io", "_blank");
  };

  return (
    <main
      className="flex lg:flex-row flex-col items-center justify-center my-36 md:my-64 bg-white relative md:px-[8rem] px-[2rem] gap-12 2xl:px-[10rem]"
      id="home"
    >
      <div className="relative z-10 text-left text-white">
        <h2 className="text-[55px] text-gray-900">Our Story</h2>
        <p className="font-normal mt-12 text-gray-800 text-[18px] max-w-[55rem] text-left">
          At Kakushin, we specialize in empowering{" "}
          <span className="font-semibold text-[20px]">
            startups, Non-Profit,
          </span>{" "}
          and businesses to thrive by providing{" "}
          <span className="font-semibold text-[20px]">tailored solutions</span>{" "}
          that drive{" "}
          <span className="font-semibold text-[20px]">innovation</span> and
          <span className="font-semibold text-[20px]">
            {" "}
            sustainable growth.
          </span>{" "}
        </p>
        <p className="font-normal text-gray-800 text-[18px] max-w-[55rem] text-left">
          From MVP development and{" "}
          <span className="font-semibold text-[20px]">AI-driven </span>
          projects to branding and business strategy, we help turn ideas into
          impactful realities.
        </p>
        <div className="mt-10 flex flex-row gap-4">
          <ComplexButton text="Contact Us" onClick={handleContactClick} />
          <ComplexButton text="Launchpad" onClick={handleLaunchpadClick} />
        </div>
      </div>
      <div>
        <Image
          className="rounded-[35px] h-auto"
          src={hero_Image}
          width={1300}
          height={750}
        />
      </div>
      <div className="absolute !z-99999999">
        <Link
          className="fixed right-3 bottom-5 md:right-8 md:bottom-10"
          href="https://wa.me/35796590911"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="Whatsapp" src={Whatsapp} width={40} height={40} />
        </Link>
      </div>
    </main>
  );
};

export default Hero;
