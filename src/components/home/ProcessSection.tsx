"use client";

import FadeInSection from "@/components/common/FadeInSection";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section className="section-padding" style={{ background: "#f5f5ff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#00D4FF" }}>
            프로세스
          </p>
          <h2 className="section-title">광고 집행 프로세스</h2>
          <p className="section-subtitle mt-2">
            상담부터 성과 리포트까지, 체계적으로 진행합니다
          </p>
        </FadeInSection>

        {/* 데스크탑: 가로 타임라인 */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* 연결선 */}
          <div
            className="absolute top-10 left-[10%] right-[10%] h-px"
            style={{ background: "#C7C9D9" }}
          />
          <div
            className="absolute top-10 left-[10%] h-px"
            style={{
              background: "linear-gradient(90deg, #0055FF, #00D4FF)",
              width: "80%",
              opacity: 0.3,
            }}
          />

          {PROCESS_STEPS.map((step, i) => (
            <FadeInSection key={step.number} delay={i * 0.2} direction="up" className="flex flex-col items-center text-center w-1/5">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center relative z-10 mb-4 font-black text-xl"
                style={{
                  background: "#EEF0FF",
                  border: "2px solid #C7C9D9",
                  fontFamily: "Pretendard, sans-serif",
                }}
              >
                <span className="gradient-text">{step.number}</span>
              </div>
              <h3 className="font-bold mb-2" style={{ color: "#1C1814" }}>{step.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>
                {step.description}
              </p>
            </FadeInSection>
          ))}
        </div>

        {/* 모바일: 세로 타임라인 */}
        <div className="md:hidden flex flex-col gap-0">
          {PROCESS_STEPS.map((step, i) => (
            <FadeInSection key={step.number} delay={i * 0.15} direction="left">
              <div className="flex gap-4">
                {/* 타임라인 왼쪽 */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm shrink-0"
                    style={{
                      background: "#EEF0FF",
                      border: "2px solid #C7C9D9",
                      fontFamily: "Pretendard, sans-serif",
                    }}
                  >
                    <span className="gradient-text">{step.number}</span>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-px flex-1 my-2" style={{ background: "#C7C9D9", minHeight: "2rem" }} />
                  )}
                </div>
                {/* 콘텐츠 */}
                <div className="pb-8">
                  <h3 className="font-bold mb-1" style={{ color: "#1C1814" }}>{step.title}</h3>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
