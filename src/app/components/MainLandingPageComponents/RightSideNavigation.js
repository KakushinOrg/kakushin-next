"use client";

import { MessageSquare, Users, Briefcase, Layers, RocketIcon, PhoneCallIcon, ClipboardTypeIcon, ComputerIcon, WorkflowIcon, PersonStanding, MoonIcon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
    { name: "Home", link: "/", icon: <MessageSquare size={24} /> },
    { name: "About", link: "/#about", icon: <PersonStanding size={24} /> },
    { name: "Services", link: "/#services", icon: <WorkflowIcon size={24} /> },
    { name: "Industry Verticals", link: "/#industry-verticals", icon: <ComputerIcon size={24} /> },
    { name: "Blogs", link: "/#blogs", icon: <ClipboardTypeIcon size={24} /> },
    { name: "Contact", link: "/#contact", icon: <PhoneCallIcon size={24} /> },
];

export default function RightSideNavigation() {
    const [activeTab, setActiveTab] = useState("Home");
    const [darkMode, setDarkMode] = useState(false);

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

    return (
        <>

            <div className="w-12 h-12 flex items-center justify-center mb-6">
                <img src="../../icons/youtube.svg" alt="Logo" className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col items-center space-y-6 flex-1 justify-center">
                <AnimatePresence>
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 20 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {menuLinks.map((item) => (
                            <li key={item.name} className="py-2 pl-2">
                                <button
                                    onClick={() => setActiveTab(item.name)}
                                    className={`p-2 rounded-full ${activeTab === item.name ? "bg-gray-300 hover:bg-gray-400" : "hover:bg-gray-300 hover:bg-gray-300"}`}
                                >
                                    <Link href={item.link}>{item.icon}</Link>
                                </button>

                            </li>
                        ))}
                    </motion.ul>
                </AnimatePresence>
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
                    <Sun size={28} className="cursor-pointer text-yellow-500" onClick={toggleTheme} />
                ) : (
                    <MoonIcon size={28} className="cursor-pointer text-gray-700" onClick={toggleTheme} />
                )}
            </div>
        </>
    );
}
