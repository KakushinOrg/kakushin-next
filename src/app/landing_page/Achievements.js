"use client";
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import "./Acheivements.module.css";

const achievementsData = [
  {
    number: 37,
    icon: "/icons/achievement-branding.svg",
    title: "Full Branding",
    description: "Completed MVP's.",
  },
  {
    number: 4,
    icon: "/icons/achievement-algorithm.svg",
    title: "Unique Algorithms",
    description: "Customized Algorithms.",
  },
  {
    number: 69,
    icon: "/icons/achievement-website.svg",
    title: "Websites",
    description: "Digital Solutions.",
  },
  {
    number: 28,
    icon: "/icons/achievement-marketing.svg",
    title: "Marketing Campaigns",
    description: "Growth Consultancy.",
  },
];

export const Achievements = () => {
  return (
    <div className="px-2 py-4">
      <div className="flex flex-col gap-5 items-start justify-center">
        <h2 className="titleTextLG">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-items-center gap-0 lg:gap-5">
          {achievementsData.map(
            (
              achievement,
              index // Fix map parameters order
            ) => (
              <Stat
                key={index}
                suffix=""
                num={achievement.number}
                subheading={achievement.description}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex flex-col items-center py-3 sm:py-4 sm:px-3 mt-10 shadow-md border-[rgba(255,255,255,0.3)] border-[1.5px] rounded-md w-40 lg:w-36 mx-auto md:mx-4 h-[8.5rem]">
      <div className="p-2 w-40">
        <p className="mb-2 text-center text-4xl font-semibold sm:text-3xl text-white">
          <span ref={ref}></span>
          {suffix}
        </p>
        <div className="w-full ">
          <p className="max-w-[10ch] text-center text-white mx-auto">
            {subheading}
          </p>
        </div>
      </div>
    </div>
  );
};
