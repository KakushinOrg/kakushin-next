"use client";

import {
  MessageSquare,
  PersonStanding,
  WorkflowIcon,
  ComputerIcon,
  ClipboardTypeIcon,
  PhoneCallIcon,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const menuLinks = [
  { name: "About", link: "about" },
  { name: "Services", link: "services" },
  { name: "Home", link: "innovation" },
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
  const [showSidebar, setShowSidebar] = useState(false);
  const manualNavigationRef = useRef(false);

  useEffect(() => {
    if (selectedChat === "contact") {
      setActiveTab("Contact");
    }
  }, [selectedChat]);

  const handleClick = (item) => {
    if (item.name === "Elevate12") {
      window.open(item.link, "_blank");
    } else {
      setSelectedChat(item.link);
    }
    setActiveTab(item.name);
    setShowSidebar(false);
  };

  return (
    <div className="relative">
      <button
        className="lg:hidden fixed top-4 right-4 bg-gray-800 text-white p-2 rounded-full z-[1000] transition-all duration-300"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed top-0 right-0 h-full bg-[#0a192e] border-l border-[#114074] z-[999] transition-transform duration-300 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0 lg:w-16 flex flex-col items-center`}
      >
        <div className="flex flex-col items-center space-y-6 flex-1 justify-center">
          {menuLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleClick(item)}
              className={`w-12 h-12 flex items-center justify-center rounded-full ${
                activeTab === item.name ? "bg-[#8d1c22]" : "hover:bg-[#8d1c22]"
              }`}
            >
              {iconMap[item.name] || (
                <ExternalLink color="white" fill="white" size={24} />
              )}
            </button>
          ))}
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
      </aside>
    </div>
  );
}
