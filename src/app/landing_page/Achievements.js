"use client";

import React, { useEffect, useRef, useState } from "react";
import AnimatedNumber from "../components/AnimateNumber";
import Image from "next/image";

const Achievements = () => {
  const data = [
    {
      number: 37,
      icon: "/icons/achievement-branding.svg",
      title: "Full Branding",
      description: "Limitless options.",
    },
    {
      number: 4,
      icon: "/icons/achievement-algorithm.svg",
      title: "Unique Algorithms",
      description: "Carefully typed.",
    },
    {
      number: 120,
      icon: "/icons/achievement-website.svg",
      title: "Websites",
      description: "Always working.",
    },
    {
      number: 87,
      icon: "/icons/achievement-marketing.svg",
      title: "Marketing Campaigns",
      description: "Our achievements.",
    },
  ];

  const [isVisible, setIsVisible] = useState({});
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.dataset.index]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.2 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section
      className="px-4 py-8 md:px-32 md:py-16 bg-gradient-to-r from-gray-100 to-gray-300 relative -z-10"
      style={{ backgroundImage: "/images/achievements-background.png" }}
    >
      <div className="section p-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              ref={(el) => (elementsRef.current[index] = el)}
              data-index={index}
              className="flex flex-col justify-center items-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            >
              <div className="text-5xl font-bold text-[#CFA144] mb-4">
                {/* Pass isVisible status to AnimatedNumber */}
                <AnimatedNumber
                  value={item.number}
                  isVisible={isVisible[index]}
                />
              </div>
              <h6 className="text-lg font-semibold mb-2">{item.title}</h6>
              <div className="my-4">
                <Image
                  height={20}
                  width={20}
                  src={item.icon}
                  alt={item.title}
                ></Image>
              </div>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
