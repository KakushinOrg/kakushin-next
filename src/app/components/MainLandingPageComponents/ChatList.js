"use client"; // Ensures this runs only on the client

import { useState, useEffect } from "react";
import "./boxMorph.css";
import AsideAboutus from "@/app/components/AsideComponents/asideAboutus";
import BlogsList from "./BlogsList";
import { motion } from "framer-motion";

// Parent card scale on hover
const cardVariants = {
  rest: { scale: 1 }, // Default state
  hover: { scale: 1.02 }, // Slight zoom on hover
};

// Title text fade/slide in
const titleVariants = {
  rest: { opacity: 0, y: 50 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function ChatList({ selectedCategory }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [socialMediaImages, setSocialMediaImages] = useState([]);

  useEffect(() => {
    // Shuffle array to randomize images
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

    const images = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Social Media Post ${i + 1}`,
      image: `/images/socialMediaPosts/Social_Media-${i + 1}.jpg`,
    }));

    setSocialMediaImages(shuffleArray(images));
  }, []);

  const filteredSocialMediaPosts = socialMediaImages.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="space-y-4">
        {selectedCategory === "aboutus" ? (
          <AsideAboutus />
        ) : selectedCategory === "blogs" ? (
          <BlogsList />
        ) : (
          <>
            <h1 className="titleTextLG text-center mb-5 mt-5">
              Social Media Posts
            </h1>

            {filteredSocialMediaPosts.length > 0 ? (
              <div className="space-y-4 md:px-8 2xl:px-10 px-5 pt-10">
                {filteredSocialMediaPosts.map((item) => (
                  <motion.div
                    key={item.id}
                    className="boxWhiteMorph relative flex flex-col bg-white border rounded-[27px] shadow-md md:w-full mx-auto overflow-hidden"
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    {/* Wrap the image in a link to LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/kakushiniq2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto mx-auto object-contain rounded-[25px]"
                      />
                    </a>

                    {/* Title that appears on hover */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center py-3 text-lg font-semibold shadow-lg rounded-b-[27px]"
                      variants={titleVariants}
                    >
                      {item.title}
                    </motion.div>
                  </motion.div>
                ))}
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
