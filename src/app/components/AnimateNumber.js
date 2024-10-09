"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

function AnimatedNumber({ value, isVisible }) {
  let spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
    delay: 1.5,
  });
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isVisible) {
      spring.set(value);
    } else {
      spring.set(0);
    }
  }, [spring, value, isVisible]);

  return <motion.span>{display}</motion.span>;
}

export default AnimatedNumber;
