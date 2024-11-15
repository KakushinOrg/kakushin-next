"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/app/components/Logo";
import Image from "next/image";

const menuItems = ["Home", "About", "Services", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
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
    // Close menus first
    setIsOpen(false);
    setIsServicesOpen(false);

    // Add a small delay to allow menus to close before scrolling
    setTimeout(() => {
      const section = document.getElementById(id);
      const navHeight = 80; // Approximate height of the navbar

      if (section) {
        const sectionTop =
          section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: sectionTop - navHeight,
          behavior: "smooth",
        });
      }
    }, 100);
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
      className={`flex items-center justify-between bg-gray-100/80 text-white px-10 md:px-20 lg:px-60 z-50 ${
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
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`flex flex-col absolute bg-gray-100/80 w-full left-0 top-14 p-4 text-black ${
              isOpen ? "block" : "hidden"
            } md:hidden`}
          >
            {menuItems.map((item) => (
              <li key={item} className="py-2 font-medium pl-2">
                {item === "Services" ? (
                  <>
                    <div
                      className="cursor-pointer inline-flex items-center gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleServicesMenu();
                      }}
                    >
                      Services
                      <Image
                        className={`transform transition-transform duration-500 ${
                          isServicesOpen ? "rotate-180" : "rotate-0"
                        } ml-1`}
                        src="/icons/down-arrow.svg"
                        alt="arrow-down"
                        width={20}
                        height={20}
                      />
                    </div>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 mt-2 flex flex-col space-y-2"
                        >
                          <li>
                            <button
                              className="block w-full text-left py-2 hover:bg-gray-200 px-4 rounded"
                              onClick={() => handleScrollToSection("services")}
                            >
                              Our Services
                            </button>
                          </li>
                          <li>
                            <button
                              className="block w-full text-left py-2 hover:bg-gray-200 px-4 rounded"
                              onClick={() =>
                                handleScrollToSection("empowering-startup")
                              }
                            >
                              Empowering Startups
                            </button>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <button
                    className="text-left"
                    onClick={() => handleScrollToSection(item.toLowerCase())}
                  >
                    {item}
                  </button>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:flex-row md:space-x-6 text-black">
        {menuItems.map((item, index) => (
          <motion.li
            key={item}
            className="py-2 md:py-0 font-medium relative"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={menuVariants}
            onMouseEnter={item === "Services" ? toggleServicesMenu : undefined}
            onMouseLeave={item === "Services" ? toggleServicesMenu : undefined}
          >
            {item === "Services" ? (
              <div className="inline-flex items-center cursor-pointer gap-1">
                <span>Services</span>
                <Image
                  className={`transform transition-transform duration-500 ${
                    isServicesOpen ? "rotate-180" : "rotate-0"
                  }`}
                  src="/icons/down-arrow.svg"
                  alt="arrow-down"
                  width={20}
                  height={20}
                />
                {isServicesOpen && (
                  <ul className="absolute w-60 text-left top-full left-0 bg-white shadow-lg p-2 flex flex-col">
                    <button
                      className="py-2 px-8 hover:bg-gray-200 text-left"
                      onClick={() => handleScrollToSection("services")}
                    >
                      Our Services
                    </button>
                    <button
                      className="py-2 px-8 hover:bg-gray-200 text-left"
                      onClick={() =>
                        handleScrollToSection("empowering-startup")
                      }
                    >
                      Empowering Startups
                    </button>
                  </ul>
                )}
              </div>
            ) : (
              <button
                onClick={() => handleScrollToSection(item.toLowerCase())}
                className="text-left"
              >
                {item}
              </button>
            )}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
