"use client";
import React, { useState } from "react";
import Img from "../../../public/images/Growth_Navigator.jpg";
import Image from "next/image";
import Button from "@mui/material/Button";

const Task = () => {
  const [expandedContent, setExpandedContent] = useState(null);

  const ArrowRight = () => (
    <svg
      className="border-[1px] rounded-full border-solid border-[#4B5563]"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  );

  const links = [
    {
      title: "What is the metaverse",
      content:
        "The metaverse is a collective virtual shared space, created by the convergence of virtually enhanced physical reality and physically persistent virtual space.",
    },
    {
      title: "How we're building the metaverse responsibly",
      content:
        "We're taking a thoughtful and methodical approach to building the metaverse. This includes focusing on privacy and security from the ground up, working with experts.",
    },
  ];

  const handleClick = (index) => {
    if (expandedContent === index) {
      setExpandedContent(null);
    } else {
      setExpandedContent(index);
    }
  };

  return (
    <div className="my-10 flex flex-wrap mx-4 flex-col md:flex-row gap-8 md:gap-28 items-center justify-center">
      {/* Image */}
      <div>
        <Image
          className="rounded-2xl"
          src={Img}
          width={450}
          height={450}
          alt="Growth Navigator"
        />
      </div>
      {/* Content */}
      <div className="mt-4">
        <h2 className="text-4xl">The Future Of Connection</h2>
        <p className="my-5 mr-2 w-80 md:w-96">
          We're moving beyond 2D screens and into immersive experiences in the
          metaverse, helping create the next evolution of social technology.
        </p>
        <Button
          className="bg-blue-600 rounded-full px-5 py-2 text-[15px] font-medium"
          type="submit"
          variant="contained"
        >
          Learn More
        </Button>
        <div className="bg-gray-100 mt-10 p-6 rounded-lg w-80 md:w-96">
          <h2 className="text-gray-700 font-semibold text-lg mb-4">
            MORE ABOUT THE METAVERSE
          </h2>

          <div className="space-y-1">
            {links.map((link, index) => (
              <div key={index}>
                <button
                  onClick={() => handleClick(index)}
                  className="w-full text-left"
                >
                  <p className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                    <ArrowRight className="text-gray-400" />
                    <span className="text-base">{link.title}</span>
                  </p>
                </button>
                {expandedContent === index && (
                  <div className="mt-2 ml-7 p-4 bg-white rounded-lg text-gray-600 text-sm">
                    {link.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
