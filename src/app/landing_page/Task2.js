"use client";
import React, { useState } from "react";
import Image from "next/image";
import Img from "../../../public/images/Growth_Navigator.jpg";

const PrinciplesSection = () => {
  const [expandedItem, setExpandedItem] = useState("voice");

  const principles = [
    {
      id: "voice",
      title: "Give People a Voice",
      content:
        "People deserve to be heard and to have a voice — even when that means defending the right of people we disagree with.",
    },
    {
      id: "connection",
      title: "Build Connection and Community",
      content:
        "We aim to bring people together and build meaningful communities.",
    },
    {
      id: "serve",
      title: "Serve Everyone",
      content:
        "Our services are designed to be accessible and valuable to everyone.",
    },
    {
      id: "safety",
      title: "Keep People Safe and Protect Privacy",
      content:
        "We are committed to protecting user safety and privacy in all our services.",
    },
    {
      id: "opportunity",
      title: "Promote Economic Opportunity",
      content:
        "We strive to create economic opportunities through our platform and services.",
    },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-center w-full lg:justify-evenly flex-col lg:flex-row gap-8">
        <div className="w-11/12 lg:w-[40%]">
          <h2 className="text-3xl font-bold mb-2">Our principles</h2>
          <p className="text-gray-600 mb-8">
            They embody what we stand for and guide our approach to how we build
            technology for people and their relationships.
          </p>

          {/* Image for smaller screens */}
          <div className="lg:hidden mb-8">
            <div className="w-full rounded-2xl overflow-hidden">
              <Image
                src={Img}
                className="w-full object-cover pt-1"
                alt="Principles"
              />
            </div>
          </div>

          <div className="space-y-4">
            {principles.map((principle) => (
              <div key={principle.id} className="border-b border-gray-200">
                <button
                  className="flex justify-between items-center w-full py-4 text-left"
                  onClick={() =>
                    setExpandedItem(
                      expandedItem === principle.id ? "" : principle.id
                    )
                  }
                >
                  <span className="font-semibold">{principle.title}</span>
                  <div className="transition-transform duration-500">
                    {expandedItem === principle.id ? (
                      <Image
                        alt="Minus"
                        src="/icons/minus.svg"
                        width={20}
                        height={20}
                        className="border-[1px] border-solid border-black rounded-full"
                      />
                    ) : (
                      <Image
                        alt="Plus"
                        src="/icons/plus.svg"
                        width={20}
                        height={20}
                        className="border-[1px] border-solid border-black rounded-full transform hover:rotate-90 transition duration-500"
                      />
                    )}
                  </div>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-700 ease-in-out ${
                    expandedItem === principle.id
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-gray-600">{principle.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image for xl screens */}
        <div className="hidden lg:block w-full lg:w-2/5">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={Img}
              alt="Principles"
              width={450}
              height={450}
              className="md:pt-10 xl:pt-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesSection;
