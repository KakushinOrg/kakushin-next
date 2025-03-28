"use client";
import { useState, useEffect } from "react";
import "./boxMorph.css";
import AsideAboutus from "@/app/components/AsideComponents/asideAboutus";
import BlogsList from "./BlogsList";
import { motion } from "framer-motion";

// Animate container's maxHeight on hover (desktop only).
const cardVariants = {
  rest: {
    scale: 1,
    maxHeight: 140,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.02,
    maxHeight: 450,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

// Title text fade/slide in.
const titleVariants = {
  rest: {
    opacity: 0,
    y: 50,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function ChatList({ selectedCategory }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [socialMediaImages, setSocialMediaImages] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Define the corresponding LinkedIn post links in the desired order.
  const socialMediaLinks = [
    "https://www.linkedin.com/posts/kakushiniq2_startupmindset-kakushin-buildsmart-activity-7307679350298931201-coLZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPMamUB63WWsfdK_SOlgIlswn8O0x6vdrQ",
    "https://www.linkedin.com/posts/kakushiniq2_kakushin-startupsupport-websiteoptimization-activity-7305873174984822784-LBkY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPMamUB63WWsfdK_SOlgIlswn8O0x6vdrQ",
    "https://www.linkedin.com/posts/kakushiniq2_kakushin-aitransformation-humancenteredtech-activity-7304853559001440256-_CNN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPMamUB63WWsfdK_SOlgIlswn8O0x6vdrQ",
    "https://www.linkedin.com/posts/kakushiniq2_startupfunding-pitchdeck-investorready-activity-7302272160570466308-1D8D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPMamUB63WWsfdK_SOlgIlswn8O0x6vdrQ",
    "https://www.linkedin.com/posts/kakushiniq2_healthtech-aiinhealthcare-wearables-activity-7301164257843318784-klKI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPMamUB63WWsfdK_SOlgIlswn8O0x6vdrQ",
    "https://www.linkedin.com/posts/kakushiniq2_the-fintech-game-is-being-rewritten-the-activity-7298269008535945216-IqmD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPMamUB63WWsfdK_SOlgIlswn8O0x6vdrQ",
    "https://www.linkedin.com/posts/kakushiniq2_leadership-executivegrowth-businesssuccess-activity-7292545292065767426-F--v?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPMamUB63WWsfdK_SOlgIlswn8O0x6vdrQ",
    "https://www.linkedin.com/posts/kakushiniq2_kakushin-businessvalidation-empoweryouridea-activity-7288475410474921984-oNFM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPMamUB63WWsfdK_SOlgIlswn8O0x6vdrQ",
    "https://www.linkedin.com/posts/kakushiniq2_kakushin-startupsuccess-businessconsulting-activity-7287829261162270720-gTav?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPMamUB63WWsfdK_SOlgIlswn8O0x6vdrQ",
    "https://www.linkedin.com/posts/kakushiniq2_businessplan-entrepreneurship-startups-activity-7287104426736062464-zudw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPMamUB63WWsfdK_SOlgIlswn8O0x6vdrQ",
  ];

  // Update social media images on mount.
  useEffect(() => {
    // Set mobile state based on window width.
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const images = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Social Media Post ${i + 1}`,
      image: `/images/socialMediaPosts/Post ${i + 1}.jpg`,
      link: socialMediaLinks[i],
    }));

    setSocialMediaImages(images);
  }, []);

  const filteredSocialMediaPosts = socialMediaImages.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {selectedCategory === "aboutus" ? (
        <AsideAboutus />
      ) : selectedCategory === "blogs" ? (
        <BlogsList />
      ) : (
        <>
          <h1 className="titleTextLG text-center mb-5 mt-5 text-gray-300">
            Latest News
          </h1>

          {filteredSocialMediaPosts.length > 0 ? (
            <div className="space-y-4 pt-10">
              {filteredSocialMediaPosts.map((item) =>
                isMobile ? (
                  <motion.div
                    key={item.id}
                    className="boxWhiteMorph relative flex flex-col bg-[#114074] border-[#114074] border-[2px] rounded-[10px] shadow-md md:w-full mx-auto overflow-hidden"
                    style={{ maxHeight: "none" }}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto mx-auto object-contain rounded-[5px]"
                      />
                    </a>
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.id}
                    className="boxWhiteMorph relative flex flex-col bg-[#114074] border-[#114074] border-[2px] rounded-[10px] shadow-md md:w-full mx-auto overflow-hidden"
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto mx-auto object-contain rounded-[5px]"
                      />
                    </a>
                  </motion.div>
                )
              )}
            </div>
          ) : (
            <p className="text-gray-500">No results found.</p>
          )}
        </>
      )}
    </div>
  );
}
