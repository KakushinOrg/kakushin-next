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
        <h2 className="titleTextLG">Our Achivements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
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
    <div className="flex w-fit flex-col items-center py-8 sm:py-4 sm:px-3 mt-10 shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]">
      <p className="mb-2 text-center text-4xl font-semibold sm:text-3xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-40 text-center text-neutral-600">{subheading}</p>
    </div>
  );
};
