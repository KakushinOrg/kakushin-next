"use client";
import React, { useState } from "react";
import Image from "next/image";
import Img from "../../../public/images/Growth_Navigator.jpg";
import Accordion from "../components/Accordion";

const ServicesSection = () => {
  const [expandedItem, setExpandedItem] = useState("development");

  const services = [
    {
      id: "development",
      title: "Web Development Wizardry",
      content:
        "From sleek websites to robust web apps, our development team crafts digital experiences that don’t just look good—they convert. Built for performance and scalability, our code is as clean as our designs are bold. Ready to level up your online presence? We’re here to make it happen.",
    },
    {
      id: "qa",
      title: "QA That Never Sleeps",
      content:
        "We’re obsessed with quality—every click, swipe, and scroll is tested to perfection. Our QA team digs deep to find what others might miss, ensuring your product doesn’t just work; it wows. Think of us as your digital bodyguard, ensuring nothing slips through the cracks.",
    },
    {
      id: "branding",
      title: "Branding Brilliance",
      content:
        "Your brand should be as bold as your vision. From unforgettable logos to storytelling that sells, we create brands that not only stand out but stick around. Let’s build a brand that not only talks the talk but walks the walk in a crowded market.",
    },
    {
      id: "business",
      title: "Business Consultation Goldmine",
      content:
        "Think of us as your secret weapon for growth. Whether it’s fine-tuning your strategy, optimizing operations, or prepping for investment, our business consulting doesn’t just guide you—it drives you. We’re all about actionable insights that turn potential into profit.",
    },
    {
      id: "ai",
      title: "AI That Knows What’s Next",
      content:
        "Why guess when you can know? Our AI solutions turn data into your business’s secret sauce—predicting trends, automating tasks, and delivering insights that keep you ahead of the game. Ready to make your startup smarter? Let’s teach your tech some tricks.",
    },
  ];

  const startups = [
    {
      id: "growth",
      title: "Growth Navigator",
      content:
        "This offering encompasses the essence of transforming startup visions into reality. From the initial MVP development to strategic market positioning, Startup Elevate provides a comprehensive toolkit for entrepreneurs ready to ascend. It's designed to navigate the complexities of the startup ecosystem, ensuring that every venture is equipped with the insights, strategies, and tools necessary for success. ",
    },
    {
      id: "elevate",
      title: "Startup Elevate",
      content:
        "Visionary Launch targets the critical early stages of a startup, focusing on ideation, branding, and market introduction. By combining the elements of BrandCraft Tailored Triumph and LaunchPad Blitz, this service ensures that startups not only debut with a strong brand identity but also with a clear, executable strategy for market penetration and growth. ",
    },
    {
      id: "visionary",
      title: "Visionary Image",
      content:
        "A service tailored for startups and research companies poised for scaling, Growth Navigator combines PivotPro Guidance with advanced operational and strategic support. It offers a roadmap for sustained growth, leveraging in-depth market research, strategic planning, and execution support to steer startups through scaling challenges, ensuring they remain agile and competitive. ",
    },
  ];

  return (
    <section>
      <div
        id="services"
        className="pt-20 my-32 md:my-48 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-60"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="titleText pb-4">Our Services</h2>
          <p className="paragraph pb-16 max-w-2xl">
            We deliver tailored solutions to help you thrive in an ever-changing
            digital world, combining innovation with excellence to drive
            meaningful results.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          {/* Text Section */}
          <div className="flex-1">
            <Accordion data={services} variant="services" />
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <Image
              src={Img}
              alt="Principles Illustration"
              width={750}
              height={970}
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div id="empowering-startup" className="my-32 md:my-48 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-60">
        <div className="flex flex-col items-center text-center">
          <h2 className="titleText pb-4">Empowering Startups</h2>{" "}
          {/* Added explicit text-left */}
          <p className="paragraph pb-16 max-w-2xl">
            {" "}
            {/* Ensure text-left utility is applied */}
            Guiding startups from launch to scale with tailored strategies,
            strong branding, and operational excellence for sustainable growth.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          {/* Text Section */}
          <div className="flex-1">
            <Image
              src={Img}
              alt="Principles Illustration"
              width={750}
              height={970}
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
          <div className="flex-1">
            <Accordion data={startups} variant="services" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
