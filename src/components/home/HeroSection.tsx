"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import ParticleBackground from "@/components/common/ParticleBackground";
import TypingText from "@/components/common/TypingText";

// 실적 카드 — 성과 데이터 준비 후 활성화
// const floatCards = [
//   { icon: TrendingUp, label: "클릭률 340% 상승", sub: "쇼핑몰 광고 캠페인", color: "#0055FF", delay: 0 },
//   { icon: DollarSign, label: "광고비 절감 45%",  sub: "최적화 후 비교",    color: "#00D4FF", delay: 0.4 },
//   { icon: MessageSquare, label: "월 신규 문의 127건", sub: "병원 광고 사례", color: "#7C3AED", delay: 0.8 },
// ];

function getItemProps(i: number) {
  return {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  };
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#F6F3EC" }}
    >
      {/* 배경 글로우 */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,85,255,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* 파티클 */}
      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 좌측 텍스트 */}
          <div>
            {/* 메인 타이틀 */}
            <motion.h1
              {...getItemProps(1)}
              className="text-5xl md:text-6xl font-black leading-tight mb-2"
              style={{ fontFamily: "Pretendard, sans-serif", color: "#1C1814" }}
            >
              AI와 데이터로 만드는
            </motion.h1>
            <motion.h1
              {...getItemProps(2)}
              className="text-5xl md:text-6xl font-black leading-tight mb-6"
              style={{ fontFamily: "Pretendard, sans-serif" }}
            >
              <span className="gradient-text">밴드 광고</span>{" "}
              <span style={{ color: "#1C1814" }}>퍼포먼스</span>
            </motion.h1>

            {/* 타이핑 텍스트 */}
            <motion.p
              {...getItemProps(3)}
              className="text-xl md:text-2xl font-medium mb-4"
              style={{ color: "#6E6860" }}
            >
              저희는{" "}
              <span style={{ color: "#1C1814" }} className="font-bold">
                <TypingText
                  texts={["네이버 밴드 광고", "퍼포먼스 마케팅", "데이터 기반 광고", "지역 타겟팅 광고"]}
                />
              </span>{" "}
              전문입니다
            </motion.p>

            {/* 설명 */}
            <motion.p
              {...getItemProps(4)}
              className="text-base mb-8"
              style={{ color: "#6E6860", lineHeight: "1.8" }}
            >
              업종별 맞춤 전략으로 실질적인 성과를 만들어드립니다.
            </motion.p>

            {/* CTA 버튼 */}
            <motion.div
              {...getItemProps(5)}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className="btn-primary px-7 py-3.5 text-base">
                무료 광고 상담 받기
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn-ghost px-7 py-3.5 text-base">
                서비스 보기
              </Link>
            </motion.div>
          </div>

          {/* 우측: 실적 카드 — 성과 데이터 준비 후 활성화 */}
          {/* <motion.div {...getItemProps(6)} className="relative h-80 lg:h-96 hidden md:block">
            {floatCards 주석 처리됨}
          </motion.div> */}
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <ChevronDown size={20} style={{ color: "#6E6860" }} />
      </motion.div>
    </section>
  );
}
