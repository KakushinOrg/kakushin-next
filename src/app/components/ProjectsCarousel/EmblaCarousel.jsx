"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import Image from "next/image";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-[#f4f4f7] py-8" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-4xl">The Team Blog</h2>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ iconURL, author, title, description }) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-all ease-out hover:-translate-y-1 bg-gray-50 hover:drop-shadow-[0px_0px_7px_rgba(28,108,168,0.2)] drop-shadow-[0px_0px_7px_rgba(28,108,168,0.1)]  p-4 m-4 rounded-[25px]"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      {/* <Image
        height={350}
        width={350}
        src={imgUrl}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a fake blog post titled ${title}`}
      /> */}
      <div className="flex justify-between items-center">
        <div className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
          {author}
        </div>
        <div className="">
          <Image width={35} height={35} src={iconURL} alt={iconURL} />
        </div>
      </div>

      <p className="mt-1.5 text-lg font-medium">{title}</p>
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  );
};

export default BlogPostCarousel;

const posts = [
  {
    id: 1,
    iconURL: "/images/industryVerticals/entrepreneurship.svg",
    author: "Entrepreneurship",
    title: "Startups & Entrepreneurs",
    description:
      "Empowering innovators to transform ideas into reality with cutting-edge tools. We offer AI-driven market analysis, proof-of-concept development, and scalable solutions to fuel your growth from seed to scale.",
  },
  {
    id: 2,
    iconURL: "/images/industryVerticals/artificial_intelligence.svg",
    author: "Artificial Intelligence",
    title: "AI & Algorithms",
    description:
      "Leverage the power of advanced machine learning models and bespoke algorithms. Our solutions unlock insights, automate processes, and solve complex challenges—driving efficiency and innovation.",
  },
  {
    id: 3,
    iconURL: "/images/industryVerticals/innovation.svg",
    author: "Innovation",
    title: "Proof of Concept Development",
    description:
      "Bringing your ideas to life through rapid prototyping and validation. Using AI simulations, digital twins, and iterative testing, we ensure your concept is market-ready with minimal risk.",
  },
  {
    id: 4,
    iconURL: "/images/industryVerticals/education.svg",
    author: "Education",
    title: "Educational Technologies",
    description:
      "Revolutionizing learning through interactive platforms and personalized AI systems. From adaptive learning algorithms to AR/VR-based experiences, we enable smarter, scalable educational solutions.",
  },
  {
    id: 5,
    iconURL: "/images/industryVerticals/social_inpact.svg",
    author: "Social Impact",
    title: "NGO & Social Impact Solutions",
    description:
      "Enhancing impact with data-driven strategies and innovative platforms. Our solutions include AI-powered tools, digital monitoring systems, and outreach platforms tailored for global sustainability and community growth.",
  },
  {
    id: 6,
    iconURL: "/images/industryVerticals/branding.svg",
    author: "Branding",
    title: "Branding & Digital Presence",
    description:
      "Helping businesses craft a future-ready identity. We combine AI-enhanced branding tools with intuitive UI/UX designs and multi-channel strategies to connect your vision with the right audience.",
  },
  {
    id: 7,
    iconURL: "/images/industryVerticals/healthcare.svg",
    author: "Healthcare",
    title: "HealthTech Innovations",
    description:
      "Driving transformation in healthcare with AI diagnostics, IoT-enabled monitoring, and telemedicine platforms. Our solutions prioritize patient care, predictive analysis, and operational efficiency.",
  },
  {
    id: 8,
    iconURL: "/images/industryVerticals/finance.svg",
    author: "Finance",
    title: "FinTech Solutions",
    description:
      "Revolutionizing financial services with blockchain technology, AI fraud detection, and digital payment innovations. We streamline transactions, enhance security, and create smarter financial ecosystems.",
  },
  {
    id: 9,
    iconURL: "/images/industryVerticals/blockchain.svg",
    author: "Blockchain",
    title: "Web3 & Blockchain",
    description:
      "Building decentralized solutions for the next internet era. From smart contracts to tokenized ecosystems, we help you create transparent, secure, and community-driven platforms.",
  },
];
