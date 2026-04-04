"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import FadeInSection from "@/components/common/FadeInSection";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const t = TESTIMONIALS[current];

  return (
    <section className="section-padding" style={{ background: "#EDEAE1" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#00D4FF" }}>
            고객 후기
          </p>
          <h2 className="section-title">고객들의 이야기</h2>
        </FadeInSection>

        <FadeInSection direction="up">
          <div className="relative">
            {/* 메인 카드 */}
            <div
              className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
              style={{ background: "#F6F3EC", border: "1px solid #CEC9B8" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* 별점 */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>

                  {/* 따옴표 */}
                  <div
                    className="text-6xl font-black leading-none mb-2"
                    style={{ color: "#0055FF", fontFamily: "Georgia, serif", opacity: 0.3 }}
                  >
                    &#8220;
                  </div>

                  <p
                    className="text-lg md:text-xl leading-relaxed mb-8"
                    style={{ color: "#1C1814" }}
                  >
                    {t.content}
                  </p>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ background: "linear-gradient(135deg, #0055FF, #00D4FF)" }}
                    >
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: "#1C1814" }}>{t.author}</p>
                      <p className="text-sm" style={{ color: "#6E6860" }}>
                        {t.company} · {t.industry}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 화살표 */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "#CEC9B8", border: "1px solid #BEB9A8" }}
                aria-label="이전 후기"
              >
                <ChevronLeft size={16} style={{ color: "#1C1814" }} />
              </button>

              {/* 인디케이터 */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? "24px" : "8px",
                      height: "8px",
                      background: i === current ? "#0055FF" : "#CEC9B8",
                    }}
                    aria-label={`${i + 1}번째 후기`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "#CEC9B8", border: "1px solid #BEB9A8" }}
                aria-label="다음 후기"
              >
                <ChevronRight size={16} style={{ color: "#1C1814" }} />
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
