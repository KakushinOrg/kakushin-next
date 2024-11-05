"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

<<<<<<< Updated upstream
const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -right-10 z-10 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <Image src="/icons/arrow-right.svg" alt="next" width={40} height={40} />
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -left-10 z-10 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src="/icons/arrow-left.svg"
        alt="previous"
        width={40}
        height={40}
      />
    </div>
  );
};

const OurProjects = () => {
  const projects = [
    { title: "Debate", image: "/images/projects/debate.png" },
    { title: "L3arn", image: "/images/projects/l3arn.png" },
    { title: "Kakushin Blog", image: "/images/projects/kakushinBlog.png" },
    {
      title: "Kakushin Postcard",
      image: "/images/projects/kakushinPostCard.png",
    },
    { title: "Kinex AI", image: "/images/projects/kinexaiApp.png" },
    { title: "Kinex AI", image: "/images/projects/kinexAIApp2.png" },
    {
      title: "Kinex AI Illustration",
      image: "/images/projects/kinexAIIllustration.png",
    },
    { title: "My BNB", image: "/images/projects/myBnb.png" },
    { title: "My Sizer", image: "/images/projects/mySizer.png" },
    { title: "My Sizer App", image: "/images/projects/mysizerApp.png" },
    { title: "Riddl3", image: "/images/projects/riddl3.png" },
    { title: "Urban", image: "/images/projects/urban.png" },
    { title: "Urbane", image: "/images/projects/urbane.png" },
    { title: "RAID", image: "/images/projects/raid.png" },
    { title: "Kakushin Illustration", image: "/images/projects/P2.png" },
    { title: "Kakushin Illustration", image: "/images/projects/P7.png" },
    { title: "Kakushin Illustration", image: "/images/projects/P9.png" },
    { title: "Kakushin Illustration", image: "/images/projects/P10.png" },
    { title: "Kakushin Illustration", image: "/images/projects/P17.png" },
    { title: "Kakushin Illustration", image: "/images/projects/P19.png" },
    { title: "Kakushin Illustration", image: "/images/projects/P21.png" },
    { title: "Kakushin Illustration", image: "/images/projects/P22.png" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1167,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

=======
let projects = [
  {
    title: "RAID",
    src: "/images/Projects/raid.png",
    description:
      "RAID is an AI safety tool that monitors models in real-time, detecting and managing rogue behaviors to ensure reliable performance. It supports popular language models like GPT-4 and LLaMA, offering essential protection for applications in customer service, content generation, and more.",
  },
  {
    title: "Dinabite",
    src: "/images/Projects/dinabite.jpg",
    description:
      "Dinabite makes social media management easy for small businesses, providing AI-powered tools to streamline posting, scheduling, and cross-platform sharing. It keeps all your messages and posts in one place and simplifies engagement, so you can focus on growing your business.",
  },
  {
    title: "My BNB",
    src: "/images/Projects/myBnb.png",
    description:
      "Mybnb offers seamless food delivery, personalized recommendations, and exclusive guest services. With tools for hosts to manage multiple locations, every stay becomes a comfortable and unique experience.",
  },
  {
    title: "L3arn",
    src: "/images/Projects/l3arn.png",
    description:
      "L3arn is an all-in-one educational platform powered by AI, connecting students with expert tutors and interactive learning tools. It offers personalized tutoring, collaborative sessions, and smart resources to make learning engaging and effective.",
  },
  {
    title: "Debate-z",
    src: "/images/Projects/debate.png",
    description:
      "Debatez is an interactive platform where users join debates on diverse topics every 30 minutes. With profile and social features, it’s perfect for connecting with like-minded individuals while engaging in lively, time-boxed discussions.",
  },
  {
    title: "Kinex AI",
    src: "/images/Projects/kinexaiApp.png",
    description:
      "Kinex AI is pioneering biomechanical analysis with advanced technology, offering real-time insights into muscle movement and performance. Designed for athletes and researchers, Kinex AI’s Medical Sleeve delivers precision feedback to enhance training and recovery.",
  },
  {
    title: "My Sizer",
    src: "/images/Projects/mySizer.png",
    description:
      "MySizer uses advanced algorithms to deliver a perfect fit, transforming your measurements into a personalized size guide across brands and styles. Shop with confidence, knowing each fit feels tailored just for you.",
  },
  {
    title: "Riddl3",
    src: "/images/Projects/riddl3.png",
    description:
      "Riddl3 is a brain-teasing app offering daily riddles and challenges to test your wit. Compete on the leaderboard, solve riddles, and share your progress with friends for a fun and engaging mental workout.",
  },
  {
    title: "Urban",
    src: "/images/Projects/urban.png",
    description:
      "Urban is a lifestyle app that curates personalized experiences in city environments. It helps users discover local events, exclusive dining options, and hidden gems, making urban exploration easy and enriching.",
  },
];

const OurProjects = () => {
>>>>>>> Stashed changes
  return (
    <section className="md:p-20 sm:p-16 p-10 bg-[#F7F7F7]" id="projects">
      {/* title */}
      <div className="text-center mb-14 md:mb-32 flex flex-col justify-center">
        <h2 className="largeText mb-4">we do magic</h2>
        <h2 className="titleTextLG">Our Projects</h2>
      </div>
      {/* carousel */}
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="text-center">
            <div className="relative flex flex-col items-center justify-between bg-white shadow-md rounded-lg h-[380px] w-[300px] mx-auto my-10 border-2 border-gray-100">
              <div className="relative w-full h-[240px] overflow-hidden rounded-t-lg">
                <Image
                  height={180}
                  width={280}
                  src={project.image}
                  alt={project.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="absolute bottom-10 text-center">
                <h3 className="font-semibold text-lg">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurProjects;
