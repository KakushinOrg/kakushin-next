"use client";
import { useEffect, useRef } from "react";
import styles from "./complexButton.module.css";

export const ComplexButton = ({ text, onClick }) => {
  return (
    <div className="min-h-fit flex items-center justify-center">
      <ShinySkeuButton onClick={onClick} text={text} />
    </div>
  );
};

const ShinySkeuButton = ({ text, onClick }) => {
  const parentRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    btnRef.current.addEventListener("mouseover", () => {
      parentRef.current.style.setProperty("--size", "250px");
      parentRef.current.style.setProperty(
        "--shineColor",
        "rgba(255, 255, 255, 0.3)"
      );
    });

    btnRef.current.addEventListener("mouseleave", () => {
      parentRef.current.style.setProperty("--size", "0px");
      parentRef.current.style.setProperty(
        "--shineColor",
        "rgba(255, 255, 255, 0.0)"
      );
    });

    btnRef.current.addEventListener("mousemove", (e) => {
      parentRef.current.style.setProperty("--x", e.offsetX + "px");
      parentRef.current.style.setProperty("--y", e.offsetY + "px");
    });
  }, []);

  return (
    <div ref={parentRef} className={styles.skeuParent}>
      <button
        onClick={onClick}
        ref={btnRef}
        className={`overflow-hidden font-mono font-bold cursor-pointer text-white rounded px-4 py-2 bg-[radial-gradient(100%_100%_at_100%_0%,_#f0ce79_0%,_#dbad39_100%)] transition-[box-shadow_0.15s_ease,_transform_0.15s_ease] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[inset_0px_3px_7px_#dbad39] ${styles.skeu}`}
      >
        {text}
      </button>
    </div>
    // <p className="from-[#f0ce79] from-10% to-[#dbad39]">

    // </p>
  );
};
