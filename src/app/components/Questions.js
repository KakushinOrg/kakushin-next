"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus, FiX } from "react-icons/fi";
import useMeasure from "react-use-measure";

export const Questions = ({ questionsData }) => {
  const [activeIndex, setActiveIndex] = useState(0); // First question open by default

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the active question
  };

  return (
    <div className="space-y-4">
      {questionsData.map((q, idx) => (
        <Question
          key={idx}
          {...q}
          isOpen={activeIndex === idx}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
};

const Question = ({ question, answer, isOpen, onToggle }) => {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="rounded-lg border-[1px] border-gray-300 px-4"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4"
      >
        <span className="text-left text-lg font-medium">{question}</span>
        <motion.span
          variants={{
            open: { rotate: "90deg" }, // Spin 90 degrees for open state
            closed: { rotate: "0deg" },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="text-xl"
        >
          {isOpen ? <FiX /> : <FiPlus />}
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? height : 0 }}
        className="overflow-hidden"
      >
        <div ref={ref} className="pb-4 text-sm text-gray-600">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Questions;
