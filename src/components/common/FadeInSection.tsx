"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "scale";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

function getVariants(direction: Direction) {
  const base = { opacity: 0 };
  switch (direction) {
    case "up":
      return { hidden: { ...base, y: 60 }, visible: { opacity: 1, y: 0 } };
    case "down":
      return { hidden: { ...base, y: -60 }, visible: { opacity: 1, y: 0 } };
    case "left":
      return { hidden: { ...base, x: 60 }, visible: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { ...base, x: -60 }, visible: { opacity: 1, x: 0 } };
    case "scale":
      return {
        hidden: { ...base, scale: 0.92 },
        visible: { opacity: 1, scale: 1 },
      };
    default:
      return { hidden: { ...base, y: 60 }, visible: { opacity: 1, y: 0 } };
  }
}

export default function FadeInSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const variants = getVariants(direction);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
