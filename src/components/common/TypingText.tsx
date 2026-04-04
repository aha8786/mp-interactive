"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
}

export default function TypingText({
  texts,
  speed = 100,
  deleteSpeed = 60,
  pause = 2000,
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const current = texts[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pause);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentIndex, texts, speed, deleteSpeed, pause]);

  return (
    <span>
      <span>{displayText}</span>
      <span
        className="inline-block w-0.5 h-5 ml-0.5 align-middle"
        style={{
          backgroundColor: "#00D4FF",
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.1s",
        }}
      />
    </span>
  );
}
