"use client";
import React, { useState } from "react";
import { FiPlus, FiX, FiMinus } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion } from "framer-motion";

const Accordion = ({
  hasLink = true,
  data,
  defaultIndex = 0,
  variant = "default",
}) => {
  const [openIndices, setOpenIndices] = useState([defaultIndex]);

  const handleToggle = (index) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <div className={variant === "default" ? "space-y-4" : ""}>
      {data.map((item, idx) => (
        <AccordionItem
          hasLink={hasLink}
          key={item.id || idx}
          title={item.title || item.question}
          content={item.content || item.answer}
          isOpen={openIndices.includes(idx)}
          onToggle={() => handleToggle(idx)}
          isFirst={idx === 0}
          variant={variant}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({
  title,
  content,
  isOpen,
  onToggle,
  variant,
  isFirst,
  hasLink,
}) => {
  const [ref, { height }] = useMeasure();

  const borderClass = `rounded-lg px-4 border-[1px] rounded-[25px] my-[25px] ${
    variant === "services"
      ? `border-b-[1px] ${isFirst ? "border-t-[1px]" : ""} border-gray-300`
      : `border-[1px] ${isFirst ? "border-t-[1px]" : ""} border-gray-300`
  }`;

  const getIcon = () => {
    if (isOpen) {
      return variant === "services" ? <FiMinus /> : <FiX />;
    }
    return <FiPlus />;
  };

  return (
    <motion.div animate={isOpen ? "open" : "closed"} className={borderClass}>
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
        <div ref={ref} className="pb-4 text-sm text-gray-600 max-w-[100ch]">
          {content}
          {hasLink ? (
            <a
              className="block mt-1 underline text-blue-950"
              href={`/aboutus/${encodeURIComponent(title)}`}
              target="_blank"
            >
              Learn More
            </a>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Accordion;
