"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/app/components/Logo";
import Link from "next/link";

// todo: cleanup
const menuLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/#about" },
  { name: "Services", link: "/#services" },
  { name: "Industry Verticals", link: "/#industry-verticals" },
  { name: "Blogs", link: "/#blogs" },
  { name: "Contact", link: "/#contact" },
];

const Navbar = ({ isExpanded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // TODO: Remove the scroll its not need if we wont scorll anyway....
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section
      className={`flex items-center justify-center md:justify-between text-white bg-transparent shadow-sm rounded-[15px] ${
        isExpanded ? "py-3" : "py-5"
      } md:px-20 lg:pl-5 lg:pr-4 z-[999] bg-transparent w-full`}
    >
      <div className="text-xl font-bold">
        <Logo />
      </div>

      <div className="md:flex space-x-4 hidden">
        <a
          href="https://www.facebook.com/profile.php?id=100087154231923"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/facebook.svg" alt="Facebook" className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/company/86423797"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
        </a>
        <a
          href="https://www.instagram.com/kakushin.io?igsh=MXE0b3MyZjB0dDA3dw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/instagram.svg" alt="Instagram" className="w-4 h-4" />
        </a>
      </div>
      {/* <div className="text-xl font-bold">
        <Logo />
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
        <div className="space-y-1 cursor-pointer">
        <span className="block w-8 h-0.5 bg-black"></span>
        <span className="block w-8 h-0.5 bg-black"></span>
        <span className="block w-8 h-0.5 bg-black"></span>
        </div>
        </div>
        
        <AnimatePresence>
        {isOpen && (
          <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`flex flex-col absolute bg-gray-100/80 w-full left-0 top-10 p-4 text-black md:hidden`}
            >
            {menuLinks.map((item) => (
              <li key={item.name} className="py-2 font-medium pl-2">
              <Link href={item.link}  onClick={() => setIsOpen(false)}>
              {item.name}
              </Link>
              </li>
              ))}
              </motion.ul>
              )}
              </AnimatePresence>
              
              <ul className="hidden md:flex md:flex-row md:space-x-6 text-black">
              {menuLinks.map((item, index) => (
                <motion.li
                key={item.name}
                className="py-2 md:py-0 font-medium"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={menuVariants}
                >
                <Link href={item.link}  onClick={() => setIsOpen(false)}>
                {item.name}
                </Link>
                </motion.li>
                ))}
                </ul> */}
    </section>
  );
};

export default Navbar;
