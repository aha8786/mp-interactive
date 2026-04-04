"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/common/FadeInSection";

function PhoneCard({
  label,
  bg,
  textColor,
  src,
  alt,
  delay,
}: {
  label: string;
  bg: string;
  textColor: string;
  src: string;
  alt: string;
  delay: number;
}) {
  return (
    <FadeInSection delay={delay} direction="up">
      {/* 카드: 비율 5:9 */}
      <div
        className="relative w-full overflow-hidden flex flex-col items-center"
        style={{
          background: bg,
          aspectRatio: "5 / 9",
          paddingTop: "8%",
        }}
      >
        {/* 레이블 */}
        <p
          style={{
            fontFamily: "Pretendard, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(13px, 1.8vw, 20px)",
            color: textColor,
            letterSpacing: "-0.02em",
            marginBottom: "4%",
            lineHeight: 1,
            paddingLeft: "8%",
            alignSelf: "flex-start",
          }}
        >
          {label}
        </p>

        {/* 이미지: 카드 너비의 68.8%, 비율 9:20 */}
        <div
          style={{
            borderRadius: "20px 20px 0 0",
            overflow: "hidden",
            width: "68.8%",
            flexShrink: 0,
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={688}
            height={1538}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </FadeInSection>
  );
}

export default function TrendSection() {
  return (
    <section className="section-padding relative" style={{ background: "#F8F8F6" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">

          {/* 왼쪽: Before / After 카드 */}
          <div className="grid grid-cols-2 gap-6 items-end">
            <PhoneCard
              label="Before"
              bg="#F2F2F2"
              textColor="#494949"
              src="/images/band/before.png"
              alt="과거 밴드 광고 방식"
              delay={0}
            />
            <PhoneCard
              label="After"
              bg="#00EE77"
              textColor="#004C20"
              src="/images/band/after.png"
              alt="현재 밴드 광고 트렌드"
              delay={0.15}
            />
          </div>

          {/* 오른쪽: 텍스트 */}
          <FadeInSection delay={0.2} direction="up">
            <div className="flex flex-col justify-center">
              <h2
                className="font-black mb-4 leading-tight"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontSize: "clamp(22px, 3vw, 38px)",
                  color: "#1C1814",
                  letterSpacing: "-0.03em",
                }}
              >
                달라진 화면?<br />
                그에 맞게 광고 전략도<br />
                달라져야합니다.
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed mb-8"
                style={{ color: "#6E6860" }}
              >
                사용자의 눈길이 머무는 자리가 바뀌었습니다.<br />
                핀잇는 변화한 화면 환경에 맞는<br />
                최적의 광고 전략을 제안합니다.
              </p>
              {/* 버튼: 오른쪽 아래 */}
              <div className="flex justify-end">
                <Link href="/services/naver-ads" className="btn-primary px-6 py-3 text-sm">
                  네이버 밴드 광고 자세히 보기
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeInSection>

        </div>

      </div>

      {/* 출처: 섹션 최하단 가운데 */}
      <p className="absolute bottom-3 left-0 right-0 text-center text-xs" style={{ color: "#A09890" }}>
        출처: 와이즈앱 리테일 2024.02 · 네이버피셜 공식 채널
      </p>

    </section>
  );
}
