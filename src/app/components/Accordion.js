"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiX, FiMinus } from "react-icons/fi"; // Import FiMinus
import useMeasure from "react-use-measure";

const Accordion = ({ data, defaultIndex = 0, variant = "default" }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={variant === "default" ? "space-y-4" : ""}>
      {data.map((item, idx) => (
        <AccordionItem
          key={item.id || idx}
          title={item.title || item.question}
          content={item.content || item.answer}
          isOpen={activeIndex === idx}
          onToggle={() => handleToggle(idx)}
          isFirst={idx === 0} // Pass if it is the first item
          variant={variant} // Pass the variant to the child
        />
      ))}
    </div>
  );
};

const AccordionItem = ({ title, content, isOpen, onToggle, variant, isFirst }) => {
  const [ref, { height }] = useMeasure();

  const borderClass = `rounded-lg px-4 ${
    variant === "services"
      ? `border-b-[1px] ${isFirst ? "border-t-[1px]" : ""} border-gray-300 rounded-none`
      : `border-[1px] ${isFirst ? "border-t-[1px]" : ""} border-gray-300`
  }`;

  const getIcon = () => {
    if (isOpen) {
      return variant === "services" ? <FiMinus /> : <FiX />;
    }
    return <FiPlus />;
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={borderClass} // Apply conditional border class
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4"
      >
        <span className="text-left text-lg font-medium">{title}</span>
        <motion.span
          variants={{
            open: { rotate: variant === "services" ? "180deg" : "90deg" },
            closed: { rotate: "0deg" },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="text-xl"
        >
          {getIcon()}
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? height : 0 }}
        className="overflow-hidden"
      >
        <div ref={ref} className="pb-4 text-sm text-gray-600">
          {content}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Accordion;
