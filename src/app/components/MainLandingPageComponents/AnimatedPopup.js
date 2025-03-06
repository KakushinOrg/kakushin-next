"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AnimatedPopup({ onClose }) {
  const messages = [
    "🚀 Tell me more about your AI integration services.",
    "🔍 I need help with developing an MVP. What’s the process?",
    "📂 Can I see examples of successful projects?",
    "📅 I want to schedule a meeting to discuss my project.",
    "💰 What are the typical costs associated with your branding services?",
  ];

  const [index, setIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top when popup opens (only on homepage)
    if (pathname === "/") {
      window.scrollTo(0, 0);
    }

    // Disable scrolling & navigation
    document.body.style.overflow = "hidden";
    window.onpopstate = () => history.pushState(null, "", window.location.href); // Blocks back/forward buttons

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => {
      document.body.style.overflow = "auto";
      window.onpopstate = null; // Restore navigation
      clearInterval(interval);
    };
  }, [pathname]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-lg z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md text-center relative"
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <XCircle size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          💡 Quick Questions
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          We’re here to help! Here are some common questions:
        </p>

        <AnimatePresence mode="wait">
          <motion.p
            key={messages[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold text-gray-700 px-4"
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
          onClick={onClose}
        >
          Get in Touch 💬
        </motion.button>
        {/* TODO: ADD ICON TO RIGHT */}
        <p className="text-gray-800 text-lg mb-4 mt-8">
          Click on the menu items to explore →
        </p>
      </motion.div>
    </div>
  );
}
