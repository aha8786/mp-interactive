import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FadeInSection from "@/components/common/FadeInSection";
import CtaSection from "@/components/home/CtaSection";
import { SERVICES } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "서비스 소개",
  description: "핀잇의 네이버 밴드 광고 전문 대행 서비스를 소개합니다.",
  path: "/services",
});

function ServiceIcon({ id }: { id: string }) {
  if (id === "naver-ads") return <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl" style={{ background: "#03C75A" }}>N</div>;
  if (id === "google-ads") return <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl" style={{ background: "#fff" }}><span style={{ color: "#4285F4" }}>G</span></div>;
  return <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl" style={{ background: "linear-gradient(135deg, #833AB4, #FD1D1D, #F56040)" }}>S</div>;
}

const serviceDetails = [
  {
    id: "naver-ads",
    pricing: "월 30만원~",
    highlights: ["3,500만 밴드 사용자 도달", "지역 타겟팅 특화", "30~50대 핵심 소비층", "소상공인 최적화"],
  },
  // 준비 후 활성화
  // { id: "google-ads", ... },
  // { id: "sns-ads", ... },
];

export default function ServicesPage() {
  return (
    <>
      {/* 미니 히어로 */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ background: "#F6F3EC" }}
      >
        <div
          className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,85,255,0.1) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00D4FF" }}>
              서비스 소개
            </p>
            <h1
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ fontFamily: "Pretendard, sans-serif", color: "#1C1814" }}
            >
              디지털 광고의 모든 것
            </h1>
            <p className="text-lg" style={{ color: "#6E6860" }}>
              데이터 기반 네이버 밴드 광고로 정확한 타겟에게 도달합니다
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 서비스 상세 카드 */}
      <section className="section-padding" style={{ background: "#F6F3EC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {SERVICES.map((service, i) => {
              const detail = serviceDetails.find((d) => d.id === service.id)!;
              return (
                <FadeInSection key={service.id} delay={i * 0.1}>
                  <div
                    className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start"
                    style={{ background: "#EDEAE1", border: "1px solid #CEC9B8" }}
                  >
                    <div className="md:w-1/2">
                      <div className="flex items-center gap-4 mb-4">
                        <ServiceIcon id={service.id} />
                        <div>
                          <h2
                            className="text-2xl font-bold"
                            style={{ fontFamily: "Pretendard, sans-serif", color: "#1C1814" }}
                          >
                            {service.title}
                          </h2>
                          <p className="text-sm" style={{ color: "#00D4FF" }}>
                            {detail.pricing}
                          </p>
                        </div>
                      </div>
                      <p className="text-base leading-relaxed mb-6" style={{ color: "#6E6860" }}>
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="btn-primary px-6 py-3 text-sm"
                      >
                        자세히 보기
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                    <div className="md:w-1/2">
                      <h3 className="text-sm font-semibold mb-4" style={{ color: "#1C1814" }}>서비스 특징</h3>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {service.features.map((feat) => (
                          <div
                            key={feat}
                            className="px-3 py-2 rounded-lg text-sm text-center"
                            style={{ background: "#F6F3EC", border: "1px solid #CEC9B8", color: "#4A4540" }}
                          >
                            {feat}
                          </div>
                        ))}
                      </div>
                      <ul className="flex flex-col gap-2">
                        {detail.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm" style={{ color: "#4A4540" }}>
                            <CheckCircle2 size={14} style={{ color: service.color, flexShrink: 0 }} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
