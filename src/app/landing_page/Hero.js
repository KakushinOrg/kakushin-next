import React from "react";
import Whatsapp from "../../../public/images/whatsapp_social.svg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main
      className="flex flex-col items-center justify-center h-screen bg-gray-900 relative"
      id="home"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/landingPageVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center text-white">
        <h2 className="titleTextLG text-[65px]">Our Story</h2>
        <p className="font-normal mt-12 text-black text-[18px] max-w-[55rem]">
          At Kakushin, we specialize in empowering startups, Non-Profit, and
          businesses to thrive by providing tailored solutions that drive
          innovation and sustainable growth. From MVP development and AI-driven
          projects to branding and business strategy, we help turn ideas into
          impactful realities.
        </p>
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
