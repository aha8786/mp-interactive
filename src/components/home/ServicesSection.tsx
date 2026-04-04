"use client";

import Link from "next/link";
import { ArrowRight, Search, Target, TrendingUp } from "lucide-react";
import FadeInSection from "@/components/common/FadeInSection";

const differentiators = [
  {
    icon: Search,
    title: "키워드 데이터 분석",
    desc: "업종·경쟁사 키워드를 분석해 효율 높은 광고 구성",
  },
  {
    icon: Target,
    title: "정밀 타겟 설정",
    desc: "연령·지역·관심사 기반으로 실제 고객에게 정확히 도달",
  },
  {
    icon: TrendingUp,
    title: "광고 효율 지속 개선",
    desc: "집행 데이터를 기반으로 A/B 테스트, 클릭률 꾸준히 상승",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding" style={{ background: "#e7eeff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* AI/데이터 차별화 */}
        <FadeInSection className="mb-14">
          <h3 className="text-xl font-bold text-center mb-8" style={{ fontFamily: "Pretendard, sans-serif", color: "#1C1814" }}>
            AI와 데이터로 만드는 차별화된 퍼포먼스
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {differentiators.map((d, i) => (
              <FadeInSection key={d.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "#F6F3EC", border: "1px solid #CEC9B8", borderTop: "3px solid #03C75A" }}
                >
                  <d.icon size={24} style={{ color: "#03C75A" }} className="mb-3" />
                  <p className="font-bold mb-2" style={{ color: "#1C1814" }}>{d.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6E6860" }}>{d.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection className="text-center">
          <Link href="/services/naver-ads" className="btn-primary px-8 py-4 text-base">
            네이버 밴드 광고 자세히 보기
            <ArrowRight size={18} />
          </Link>
          <p className="mt-3 text-xs" style={{ color: "#6E6860" }}>
            출처: 와이즈앱 리테일 2024.02 · 네이버피셜 공식 채널
          </p>
        </FadeInSection>

      </div>
    </section>
  );
}
