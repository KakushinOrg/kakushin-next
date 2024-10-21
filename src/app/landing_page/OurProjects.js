"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -right-14 z-10 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <Image src="/icons/arrow-right.svg" alt="next" width={40} height={40} />
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -left-14 z-10 transform -translate-y-1/2 cursor-pointer"
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

let projects = [
  { title: "Debate", src: "/images/Projects/debate.png" },
  { title: "L3arn", src: "/images/Projects/l3arn.png" },
  { title: "Kakushin Blog", src: "/images/Projects/kakushinBlog.png" },
  {
    title: "Kakushin Postcard",
    src: "/images/Projects/kakushinPostCard.png",
  },
  { title: "Kinex AI", src: "/images/Projects/kinexaiApp.png" },
  { title: "Kinex AI", src: "/images/Projects/kinexAIApp2.png" },
  {
    title: "Kinex AI Illustration",
    src: "/images/Projects/kinexAIIllustration.png",
  },
  { title: "My BNB", src: "/images/Projects/myBnb.png" },
  { title: "My Sizer", src: "/images/Projects/mySizer.png" },
  { title: "My Sizer App", src: "/images/Projects/mysizerApp.png" },
  { title: "Riddl3", src: "/images/Projects/riddl3.png" },
  { title: "Urban", src: "/images/Projects/urban.png" },
  { title: "Urbane", src: "/images/Projects/urbane.png" },
  { title: "RAID", src: "/images/Projects/raid.png" },
  { title: "Kakushin Illustration", src: "/images/Projects/P2.png" },
  { title: "Kakushin Illustration", src: "/images/Projects/P7.png" },
  { title: "Kakushin Illustration", src: "/images/Projects/P9.png" },
  { title: "Kakushin Illustration", src: "/images/Projects/P10.png" },
  { title: "Kakushin Illustration", src: "/images/Projects/P17.png" },
  { title: "Kakushin Illustration", src: "/images/Projects/P19.png" },
  { title: "Kakushin Illustration", src: "/images/Projects/P21.png" },
  { title: "Kakushin Illustration", src: "/images/Projects/P22.png" },
];
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


const OurProjects = () => {
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

  return (
    <section className="md:p-20 p-20 bg-[#F7F7F7]" id="projects">
      {/* title */}
      <div className="text-center mb-14 md:mb-32">
        <h1 className="largeText mb-4">we do magic</h1>
        <h2 className="titleTextLG">Our Projects</h2>
      </div>
      {/* carousel */}
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="text-center">
            <div className="relative flex flex-col items-center justify-between bg-white shadow-md rounded-lg h-[380px] w-[225px] mx-auto my-10 border-2 border-gray-100">
              <div className="relative w-full h-[240px] overflow-hidden rounded-t-lg">
                <Image
                  width={430}
                  height={430}
                  src={project.src}
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
