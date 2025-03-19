"use client";

import React, { useMemo } from "react";
import Image from "next/image";

const BlogPostMasonry = () => {
  // Add a random minimum height (between 200px and 400px) to each post.
  const postsWithHeights = useMemo(() => {
    return posts.map((post) => ({
      ...post,
      randomHeight: Math.floor(Math.random() * 101) + 150,
    }));
  }, []);

  return (
    <section className="">
      {/* Use CSS columns for the masonry effect. */}
      <div className="flex flex-col gap-2 mx-auto">
        {postsWithHeights.map((post) => (
          <div
            key={post.id}
            className="mb-4 break-inside-avoid cursor-pointer transition-all ease-out hover:-translate-y-1 border-gray-50 border-2 drop-shadow-[0px_0px_7px_rgba(28,108,168,0.2)] p-4 rounded-[10px]"
            style={{ minHeight: post.randomHeight }}
          >
            <Post {...post} />
          </div>
        ))}
      </div>
    </section>
  );
};

const Post = ({ iconURL, author, title, description }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div className="rounded-md border border-neutral-500 px-1.5 py-1 text-xs uppercase text-white">
          {author}
        </div>
        <div>
          <Image width={35} height={35} src={iconURL} alt={iconURL} />
        </div>
      </div>
      <p className="my-3.5 text-lg font-medium text-white">{title}</p>
      <p className="text-sm text-neutral-50">{description}</p>
    </>
  );
};

export default BlogPostMasonry;

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
