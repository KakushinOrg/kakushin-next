import { useState } from "react";
import { useBlogs } from "@/app/context/blogContext";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import "./boxMorph.css";
import AsideAboutus from "@/app/components/AsideComponents/asideAboutus";
import BlogPostCarousel from "../ProjectsCarousel/EmblaCarousel";
import OurServices from "@/app/landing_page/OurServices";

export default function ChatList({ selectedCategory }) {
  const { blogs, loading } = useBlogs();
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  const categoryMap = {
    innovation: "Innovation insights",
    about: "About us",
    services: "Our Services",
    industry: "Industry Vertical",
    blogs: "Blogs",
  };

  const formattedBlogs = blogs.map((blog) => ({
    id: blog.blogID,
    title: blog.title,
    category: blog.category?.toLowerCase(),
    description: documentToPlainTextString(blog.blogBody),
    slug: blog.slug,
    image: blog.blogMedia.fields.file.url.startsWith("//")
      ? `https:${blog.blogMedia.fields.file.url}`
      : blog.blogMedia.fields.file.url,
  }));

  const filteredBlogs = formattedBlogs.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const leftColumn = [];
  const rightColumn = [];
  filteredBlogs.forEach((item, index) => {
    if (index % 2 === 0) {
      leftColumn.push(item);
    } else {
      rightColumn.push(item);
    }
  });
  // data for industry verticals
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

  const OPTIONS = { slidesToScroll: "auto" };
  return (
    <>
      <h1 className="titleTextLG text-center mb-5">
        {categoryMap[selectedCategory] || ""}
      </h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="space-y-4">
        {selectedCategory === "industry" && (
          <BlogPostCarousel projects={projects} options={OPTIONS} />)}
        {selectedCategory === "services" && (
          <OurServices />)}
        {selectedCategory === "about" && (
          <AsideAboutus />)}
        {(selectedCategory == "blogs" || selectedCategory == "innovation") && (
          <>
            {filteredBlogs.length > 0 ? (
              <div className="flex gap-4">
                {/* Left Column */}
                <div className="flex-1 space-y-4">
                  {leftColumn.map((item) => (
                    <div
                      key={item.id}
                      className="boxWhiteMorph relative flex flex-col p-3 bg-white border rounded-2xl shadow-md"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-lg transition-transform duration-300 mb-3"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 blog-description">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Right Column */}
                <div className="flex-1 space-y-4">
                  {rightColumn.map((item) => (
                    <div
                      key={item.id}
                      className="boxWhiteMorph relative flex flex-col p-3 bg-white border rounded-2xl shadow-md"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-lg transition-transform duration-300 mb-3"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 blog-description">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500">No results found.</p>
            )}
          </>
        )}
      </div>
    </>
  );
}
