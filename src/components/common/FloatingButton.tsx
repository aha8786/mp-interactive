"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

const socialLinks = [
  {
    id: "kakao",
    label: "카카오톡",
    href: "http://pf.kakao.com/_ZZAuX/chat",
    disabled: false,
    bg: "#FEE500",
    color: "#3A1D1D",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.744 1.617 5.16 4.08 6.657L5.2 21l4.36-2.287C10.285 18.9 11.13 19 12 19c5.523 0 10-3.477 10-8S17.523 3 12 3z" />
      </svg>
    ),
  },
  {
    id: "naver",
    label: "네이버 블로그",
    href: "#",
    disabled: true,
    bg: "#03C75A",
    color: "#FFFFFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "인스타그램",
    href: "#",
    disabled: true,
    bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    color: "#FFFFFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 10, scale: 0.8 },
};

export default function FloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* 소셜 링크 버튼들 */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="social-buttons"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center gap-3"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.disabled ? undefined : link.href}
                target={link.disabled ? undefined : "_blank"}
                rel={link.disabled ? undefined : "noopener noreferrer"}
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group relative w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
                style={{
                  background: link.bg,
                  color: link.color,
                  cursor: link.disabled ? "default" : "pointer",
                  opacity: link.disabled ? 0.45 : 1,
                }}
                whileHover={link.disabled ? {} : { scale: 1.12 }}
                whileTap={link.disabled ? {} : { scale: 0.93 }}
                aria-label={link.label}
                aria-disabled={link.disabled}
              >
                {link.icon}
                {/* 툴팁 */}
                <span className="absolute right-14 whitespace-nowrap bg-[#1C1814] text-white text-xs font-medium px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                  {link.disabled ? "준비 중" : link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 메인 버튼 (돋보기) */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white cursor-pointer"
        style={{
          background: open
            ? "#1C1814"
            : "linear-gradient(135deg, #0055FF 0%, #00D4FF 100%)",
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        animate={{ rotate: open ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        aria-label={open ? "닫기" : "문의 채널 열기"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="search"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
            >
              <Search className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
