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
    <div className="border-gray-100 border-y-2 bg-[#f4f4f7]">
      <div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
        <div className="text-center mb-14 md:mb-32">
          <h2 className="largeText mb-4">Our Achievements,</h2>
          <h2 className="titleTextLG">So Far</h2>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row">
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
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center text-7xl font-semibold sm:text-6xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-neutral-600">{subheading}</p>
    </div>
  );
};
