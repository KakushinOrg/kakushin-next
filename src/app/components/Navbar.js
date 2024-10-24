"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/app/components/Logo";
import { Button } from "@mui/material";

const menuItems = ["Home", "About", "Services", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <nav
      className={`flex items-center justify-between bg-gray-100/80 text-white px-10 md:px-12 lg:px-32 z-50 ${
        isScrolled ? "py-4" : "py-6"
      } fixed top-0 left-0 w-full transition-all duration-300`}
    >
      <div className="text-xl font-bold">
        <Logo />
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        <div className="space-y-1 cursor-pointer">
          <span className="block w-8 h-0.5 bg-black"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: -10 }} // Exit transition
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`flex flex-col absolute bg-gray-100/80 w-full left-0 top-14 p-4 text-black ${
              isOpen ? "block" : "hidden"
            } md:hidden`}
          >
            {menuItems.map((item) => (
              <li key={item} className="py-2 font-medium pl-2">
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
            
            <li className="mt-4">
              <Button
                href="https://calendly.com/kakushin/30-minute-consultation"
                target="_blank"
                className="text-white hover:bg-[#c9951c] p-2 bg-[#DAA520] rounded-lg w-full"
              >
                Free Consultation
              </Button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:flex-row md:gap-4 lg:gap-5 text-black">
        {menuItems.map((item, index) => (
          <motion.li
            key={item}
            className="py-2 md:py-0 font-medium"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={menuVariants}
          >
            <a
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                if (item === "Home") {
                  window.location.href = "/";
                } else {
                  handleScrollToSection(item.toLowerCase());
                }
              }}
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>

      <Button
        href="https://calendly.com/kakushin/30-minute-consultation"
        target="_blank"
        className="text-white hover:bg-[#c9951c] p-2 bg-[#DAA520] rounded-lg hidden md:flex md:flex-wrap"
      >
        Free Consultation
      </Button>
    </nav>
  );
};

export default Navbar;
