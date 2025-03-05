"use client";

import {
  MessageSquare,
  PersonStanding,
  WorkflowIcon,
  ComputerIcon,
  ClipboardTypeIcon,
  PhoneCallIcon,
  MoonIcon,
  Sun,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const menuLinks = [
  { name: "Home", link: "innovation" },
  { name: "About", link: "about" },
  { name: "Services", link: "services" },
  { name: "Industry Verticals", link: "industry-vertical" },
  { name: "Blogs", link: "blogs" },
  { name: "Contact", link: "contact" },
];

const iconMap = {
  Home: <MessageSquare size={24} />,
  About: <PersonStanding size={24} />,
  Services: <WorkflowIcon size={24} />,
  "Industry Verticals": <ComputerIcon size={24} />,
  Blogs: <ClipboardTypeIcon size={24} />,
  Contact: <PhoneCallIcon size={24} />,
};

export default function RightSideNavigation({ setSelectedChat }) {
  const [activeTab, setActiveTab] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);

  const manualNavigationRef = useRef(false);

  // Load theme from localStorage (default: light)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

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

    // Observe each section on the page
    menuLinks.forEach((item) => {
      const sectionId = getSectionId(item);
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Handle click: set manual flag and update active tab
  const handleClick = (item) => {
    //manualNavigationRef.current = true;
    setSelectedChat(item.link);
    setActiveTab(item.name);
    // Reset the flag after a short delay to re-enable the scroll spy
    setTimeout(() => {
      manualNavigationRef.current = false;
    }, 800);
  };

  return (
    <>
      <div className="w-12 h-12 flex items-center justify-center mb-6">
        <img
          src="../../icons/asiL.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>

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
                        className="absolute inset-0 bg-gray-300 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                      <button
                        onClick={() => handleClick(item)}
                        className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-300"
                      >
                        {iconMap[item.name]}
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
        {darkMode ? (
          <Sun
            size={28}
            className="cursor-pointer text-yellow-500"
            onClick={toggleTheme}
          />
        ) : (
          <MoonIcon
            size={28}
            className="cursor-pointer text-gray-700"
            onClick={toggleTheme}
          />
        )}
      </div>
    </>
  );
}
