"use client";
import React from "react";
import ProjectCarousel from "../components/ProjectsCarousel/ProjectsCarousel";



let projects = [
  {
    title: "RAID",
    src: "/images/Projects/raid.png",
    description: "RAID is an AI safety tool that monitors models in real-time, detecting and managing rogue behaviors to ensure reliable performance. It supports popular language models like GPT-4 and LLaMA, offering essential protection for applications in customer service, content generation, and more."
  },
  {
    title: "Dinabite",
    src: "/images/Projects/dinabite.jpg",
    description: "Dinabite makes social media management easy for small businesses, providing AI-powered tools to streamline posting, scheduling, and cross-platform sharing. It keeps all your messages and posts in one place and simplifies engagement, so you can focus on growing your business."
  },
  {
    title: "My BNB",
    src: "/images/Projects/myBnb.png",
    description: "Mybnb offers seamless food delivery, personalized recommendations, and exclusive guest services. With tools for hosts to manage multiple locations, every stay becomes a comfortable and unique experience."
  },
  {
    title: "L3arn",
    src: "/images/Projects/l3arn.png",
    description: "L3arn is an all-in-one educational platform powered by AI, connecting students with expert tutors and interactive learning tools. It offers personalized tutoring, collaborative sessions, and smart resources to make learning engaging and effective."
  },
  {
    title: "Debate-z",
    src: "/images/Projects/debate.png",
    description: "Debatez is an interactive platform where users join debates on diverse topics every 30 minutes. With profile and social features, it’s perfect for connecting with like-minded individuals while engaging in lively, time-boxed discussions."
  },  
  {
    title: "Kinex AI",
    src: "/images/Projects/kinexaiApp.png",
    description: "Kinex AI is pioneering biomechanical analysis with advanced technology, offering real-time insights into muscle movement and performance. Designed for athletes and researchers, Kinex AI’s Medical Sleeve delivers precision feedback to enhance training and recovery."
  },    
  {
    title: "My Sizer",
    src: "/images/Projects/mySizer.png",
    description: "MySizer uses advanced algorithms to deliver a perfect fit, transforming your measurements into a personalized size guide across brands and styles. Shop with confidence, knowing each fit feels tailored just for you."
  },  
  {
    title: "Riddl3",
    src: "/images/Projects/riddl3.png",
    description: "Riddl3 is a brain-teasing app offering daily riddles and challenges to test your wit. Compete on the leaderboard, solve riddles, and share your progress with friends for a fun and engaging mental workout."
  },  
  { 
    title: "Urban", 
    src: "/images/Projects/urban.png", 
    description: "Urban is a lifestyle app that curates personalized experiences in city environments. It helps users discover local events, exclusive dining options, and hidden gems, making urban exploration easy and enriching."
  }
];


const OurProjects = () => {
  

  return (
    <section className="md:p-20 p-20 bg-[#F7F7F7]" id="projects">
      {/* title */}
      <div className="text-center mb-14 md:mb-32">
        <h2 className="largeText mb-4">we do magic</h2>
        <h2 className="titleTextLG">Our Projects</h2>
      </div>
      <ProjectCarousel projects={projects} />
    </section>
  );
};

export default OurProjects;
