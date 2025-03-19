"use client";

import {
  MessageSquare,
  PersonStanding,
  WorkflowIcon,
  ComputerIcon,
  ClipboardTypeIcon,
  PhoneCallIcon,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const menuLinks = [
  { name: "Home", link: "innovation" },
  { name: "About", link: "about" },
  { name: "Services", link: "services" },
  { name: "Industry Verticals", link: "industry-vertical" },
  { name: "Blogs", link: "blogs" },
  { name: "Contact", link: "contact" },
  { name: "Elevate12", link: "https://elevate12.kakushin.io/" },
];

const iconMap = {
  Home: <MessageSquare color="white" size={24} />,
  About: <PersonStanding color="white" size={24} />,
  Services: <WorkflowIcon color="white" size={24} />,
  "Industry Verticals": <ComputerIcon color="white" size={24} />,
  Blogs: <ClipboardTypeIcon color="white" size={24} />,
  Elevate12: (
    <Image
      src="/icons/elevate-12-icon.svg"
      alt="Elevate12 Icon"
      width={24}
      height={24}
    />
  ),
  Contact: <PhoneCallIcon color="white" size={24} />,
};

export default function RightSideNavigation({ setSelectedChat, selectedChat }) {
  const [activeTab, setActiveTab] = useState("Home");
  const manualNavigationRef = useRef(false);

  // If the selected chat is "contact", force activeTab to "Contact"
  useEffect(() => {
    if (selectedChat === "contact") {
      setActiveTab("Contact");
    }
  }, [selectedChat]);

  const getSectionId = (item) => {
    if (item.link.includes("#")) {
      return item.link.split("#")[1];
    }
    return item.name.toLowerCase();
  };

  useEffect(() => {
    const handleIntersect = (entries) => {
      if (manualNavigationRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intersectingId = entry.target.id;
          const activeItem = menuLinks.find(
            (item) => getSectionId(item) === intersectingId
          );
          if (activeItem) {
            setActiveTab(activeItem.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
    });

    menuLinks.forEach((item) => {
      const sectionId = getSectionId(item);
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (item) => {
    if (item.name === "Elevate12") {
      window.open(item.link, "_blank");
      return;
    }
    if (item.name === "Contact") {
      setSelectedChat("contact");
    } else {
      setSelectedChat(item.link);
    }
    setActiveTab(item.name);
    setTimeout(() => {
      manualNavigationRef.current = false;
    }, 800);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-6 flex-1 justify-center">
        <LayoutGroup>
          <AnimatePresence>
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 20 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="space-y-4"
            >
              {menuLinks.map((item) => (
                <li key={item.name} className="relative group">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    {activeTab === item.name && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-[#8d1c22] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                    <button
                      onClick={() => handleClick(item)}
                      className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#8d1c22]"
                    >
                      {iconMap[item.name] || (
                        <ExternalLink color="white" fill="white" size={24} />
                      )}
                    </button>
                    <span className="absolute right-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </LayoutGroup>
      </div>

      <div className="flex flex-col items-center space-y-4 mb-5">
        <Image
          onClick={() => window.open("https://wa.me/35796590911", "_blank")}
          alt="Whatsapp"
          src="/icons/whatsapp.svg"
          width={28}
          height={28}
          className="cursor-pointer"
        />
      </div>
    </>
  );
}
