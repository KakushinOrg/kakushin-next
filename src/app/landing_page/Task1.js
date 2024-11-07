"use client";
import React, { useState } from "react";
import Img from "../../../public/images/Growth_Navigator.jpg";
import Image from "next/image";
import Button from "@mui/material/Button";

const Task = () => {
  const [expandedContent, setExpandedContent] = useState(null);

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
    setExpandedContent(expandedContent === index ? null : index);
  };

  return (
    <div>
      <div className="relative my-16 md:my-40 flex flex-wrap mx-4 flex-col md:flex-row gap-8 md:gap-28 items-start justify-center">
        <div className="mt-4">
          <h2 className="text-3xl font-semibold w-96">
            Al to help you discover new possibilities and expand your world
          </h2>
          <p className="my-5 mr-2 w-80 md:w-96">
            Through new experiences In Meta Al, and enhanced capabilities in
            Llama 3.1, we're creating the next generation of Al to help you
            discover new possibilities and expand your world.
          </p>
          <Button
            className="bg-blue-600 rounded-full px-5 py-2 text-[15px] font-medium"
            type="submit"
            variant="contained"
          >
            Learn More
          </Button>
          <div className="bg-gray-100 mt-10 p-6 rounded-lg w-[22rem] md:w-96">
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
                      <Image
                        className="border-solid border-[1px] border-[#ABB0B1] rounded-full p-[2px]"
                        alt="Right-Arrow"
                        src="/icons/right-arrow.svg"
                        width={20}
                        height={20}
                      />
                      <span className="text-base">{link.title}</span>
                    </p>
                  </button>
                  <div
                    className={`mt-2 ml-7 bg-white rounded-lg text-gray-600 text-sm transition-all duration-700 ease-in-out overflow-hidden ${
                      expandedContent === index
                        ? "max-h-[300px] p-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {expandedContent === index && link.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sticky top-0">
          <Image
            className="rounded-2xl"
            src={Img}
            width={450}
            height={450}
            alt="Growth Navigator"
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
