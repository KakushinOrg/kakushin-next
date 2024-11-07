"use client";
import React, { useState } from "react";
import Img from "../../../public/images/Growth_Navigator.jpg";
import Image from "next/image";
import Button from "@mui/material/Button";

const Task3 = () => {
  const [expandedContent, setExpandedContent] = useState(null);

  const links = [
    {
      title: "See more about our leadership team",
    },
  ];

  const handleClick = (index) => {
    setExpandedContent(expandedContent === index ? null : index);
  };

  const Content = () => (
    <div className="mt-4">
      <h2 className="text-4xl font-medium">Our leadership</h2>
      <p className="my-5 mr-2 w-80 md:w-96">
        Meta’s leaders are guiding our company as the metaverse evolves, helping
        to create the next evolution of digital connection.
      </p>

      <div className="space-y-1">
        {links.map((link, index) => (
          <div key={index}>
            <button
              onClick={() => handleClick(index)}
              className="w-full text-left"
            >
              <p className="flex items-center gap-2 text-gray-800">
                <Image
                  className="border-solid border-[1px] border-[#ABB0B1] rounded-full p-[2px]"
                  alt="Right-Arrow"
                  src="/icons/right-arrow.svg"
                  width={20}
                  height={20}
                />
                <span className="font-bold">{link.title}</span>
              </p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="my-16 md:my-40 flex flex-wrap mx-4 flex-col md:flex-row gap-8 md:gap-28 items-center justify-center">
        <Image
          className="rounded-2xl"
          src={Img}
          width={450}
          height={450}
          alt="Growth Navigator"
        />
        {Content()}
      </div>
    </div>
  );
};

export default Task3;
