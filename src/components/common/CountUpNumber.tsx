"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function CountUpNumber({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const startValue = 0;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(startValue + (end - startValue) * eased));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    }

    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  );
}
