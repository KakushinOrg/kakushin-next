"use client";
import React, { useState } from "react";
import Img from "../../../public/images/Growth_Navigator.jpg";
import Image from "next/image";
import DotExpandButton from "../components/DotExpandButton";
import Accordion from "../components/Accordion";

const AboutUs = () => {
  const kakushinQuestions = [
    {
      id: "q1",
      title: "What services does Kakushin offer?",
      content:
        "Kakushin offers services like BrandCraft Tailored Triumph, LaunchPad Blitz, MVP Forge, and PivotPro Guidance to support startups from concept to market.",
    },
    {
      id: "q2",
      title: "How does Kakushin support startups?",
      content:
        "By blending creativity with strategic execution, Kakushin helps startups navigate challenges and seize opportunities, turning their ideas into reality.",
    },
  ];

  const teamQuestions = [
    {
      id: "q1",
      title: "Who is part of Kakushin's team?",
      content:
        "Our team includes strategic planners, tech innovators, research specialists, and communication experts working together to elevate startups.",
    },
    {
      id: "q2",
      title: "What makes Kakushin unique?",
      content:
        "Kakushin integrates diverse expertise with a unified goal to transform complex challenges into scalable opportunities for startups.",
    },
  ];


  return (
    <div className="">
      <div className="my-16 md:my-24 flex flex-wrap mx-4 flex-col md:flex-row gap-10 lg:gap-20 xl:gap-28 items-start justify-center">
        <div className="justify-center my-auto w-full xl:w-[35%] md:w-[50%]">
          <h2 className=" newTitleTextSM">Empowering Startup Dreams</h2>
          <p className="my-5 max-w-md paragraph">
            At Kakushin, we turn startup dreams into reality. Our services are
            designed to support every phase of the startup journey, from concept
            to market success.
          </p>

          <DotExpandButton link="https://example.com" />

          <div className="bg-gray-100 mt-8 p-6 rounded-lg w-full md:w-[95%]">
            <h2 className="text-gray-700 font-semibold text-lg mb-4">
              MORE ABOUT KAKUSHIN
            </h2>

              <Accordion data={kakushinQuestions} />
            </div>
        </div>
        <div>
          <Image
            className="rounded-3xl"
            src={Img}
            width={650}
            height={550}
            alt="Growth Navigator"
          />
        </div>
      </div>


      <div className="my-16 md:my-24 flex flex-wrap mx-4 flex-col md:flex-row gap-10 lg:gap-20 xl:gap-28 items-start justify-center">
        <div>
          <Image
            className="rounded-3xl"
            src={Img}
            width={650}
            height={650}
            alt="Growth Navigator"
          />
        </div>
        <div className="justify-center my-auto w-full xl:w-[35%] md:w-[50%]">
          <h2 className=" newTitleTextSM">
            Meet Our Team
          </h2>
          <p className="my-5 max-w-md paragraph">
            Our team of professionals collaborates seamlessly to provide
            comprehensive support to startups, ensuring they achieve their
            vision of innovation and growth.
          </p>
          <DotExpandButton link="https://example.com" />

          <div className="bg-gray-100 mt-8 p-6 rounded-lg w-full md:w-[95%]">
            <h2 className="text-gray-700 font-semibold text-lg mb-4">
              MORE ABOUT OUR TEAM
            </h2>
              <Accordion data={teamQuestions} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;