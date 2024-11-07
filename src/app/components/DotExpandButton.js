import React from "react";
import { FiArrowRight } from "react-icons/fi";

const DotExpandButton = ({ link }) => {
  return (
    <section className="inline-block">
      <a
        href={link}
        className="group flex h-10 items-center gap-2 rounded-full bg-blue-500 text-white pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-blue-600 active:bg-blue-700"
      >
        <span className="rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-blue-500">
          <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-white group-active:-rotate-45" />
        </span>
        <span>Learn More</span>
      </a>
    </section>
  );
};

export default DotExpandButton;
