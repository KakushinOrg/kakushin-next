"use client";
import React, { useState } from "react";
import Img from "../../../public/images/Growth_Navigator.jpg";
import Image from "next/image";
import DotExpandButton from "../components/DotExpandButton";
import Accordion from "../components/Accordion";
import { whatWeDo } from "@/app/components/whatWeDoData";

const AboutUs = () => {
  // const kakushinQuestions = [
  //   {
  //     id: "q1",
  //     title: "What services does Kakushin offer?",
  //     content:
  //       "Kakushin offers services like BrandCraft Tailored Triumph, LaunchPad Blitz, MVP Forge, and PivotPro Guidance to support startups from concept to market.",
  //   },
  //   {
  //     id: "q2",
  //     title: "How does Kakushin support startups?",
  //     content:
  //       "By blending creativity with strategic execution, Kakushin helps startups navigate challenges and seize opportunities, turning their ideas into reality.",
  //   },
  // ];

  return (
    <section id="about" className="pt-20">
      <div className="">
        <div className="flex flex-wrap mx-4 flex-col md:flex-row gap-10 lg:gap-20 xl:gap-28 items-start justify-center">
          <div className="justify-center my-auto w-full xl:w-[35%] md:w-[50%]">
            <h2 className=" newTitleTextSM">Who We Are</h2>
            <p className="my-5 max-w-md paragraph">
              Our expertise extends across diverse sectors, including health
              tech, EdTech, and environmental initiatives. We’re passionate
              about supporting organizations that prioritize social impact,
              sustainability, and innovation. Whether you’re launching a
              startup, scaling a project, or pivoting your strategy, Kakushin
              partners with you every step of the way to deliver measurable
              results.
            </p>

            <p className="my-5 max-w-md paragraph">
              With a commitment to environmental awareness and socially
              responsible practices, we believe in creating value not only for
              businesses but also for the communities and ecosystems they serve.
              At Kakushin, innovation meets purpose to transform visions into
              success stories.
            </p>
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

        <div className="my-32 md:my-48 flex flex-wrap mx-4 flex-col md:flex-row gap-10 lg:gap-20 xl:gap-28 items-start justify-center">
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
            <h2 className=" newTitleTextSM">What We Do</h2>
            <p className="my-5 max-w-md paragraph">
              At Kakushin, we recognize that your journey is unique, and so are
              your goals. That’s why we offer a comprehensive range of services
              designed to empower your business and bring your vision to life.
            </p>

            <div className="bg-gray-100 mt-8 p-6 rounded-lg w-full md:w-[95%]">
              <h2 className="text-gray-700 font-semibold text-lg mb-4">
                Our Key Pillars of Expertise
              </h2>
              <Accordion data={whatWeDo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
