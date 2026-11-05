"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import FadeInSection from "@/components/common/FadeInSection";
import CtaSection from "@/components/home/CtaSection";
import BandPlatformCarousel from "@/components/sns/BandPlatformCarousel";

const tabs = [
  {
    id: "instagram",
    label: "인스타그램",
    title: "인스타그램 광고",
    description: "이미지, 영상, 릴스, 스토리 등 다양한 형식으로 MZ세대에게 도달합니다. 쇼핑 태그와 연동하여 즉각적인 구매로 연결합니다.",
    industries: ["패션/뷰티", "음식/카페", "피트니스", "여행"],
    effects: ["MZ세대 타겟 최적화", "쇼핑 연동으로 즉시 구매", "높은 바이럴 가능성"],
  },
  {
    id: "facebook",
    label: "페이스북",
    title: "페이스북 광고",
    description: "정밀한 오디언스 타겟팅과 픽셀 기반 리타겟팅으로 전환을 극대화합니다. 30~50대 타겟과 B2C 마케팅에 효과적입니다.",
    industries: ["B2C 전반", "부동산", "자동차", "금융"],
    effects: ["정밀 오디언스 타겟팅", "픽셀 리타겟팅 효과적", "다양한 광고 목표 설정"],
  },
  {
    id: "kakao",
    label: "카카오",
    title: "카카오 광고",
    description: "카카오톡 채널, 카카오모먼트를 활용하여 국내 최대 메신저 플랫폼에서 광고합니다. 지역 타겟팅에 특히 강합니다.",
    industries: ["음식점", "학원", "병원", "소매점"],
    effects: ["국내 시장 최적화", "카카오톡 채널 연동", "정밀 지역 타겟팅"],
  },
  {
    id: "tiktok",
    label: "틱톡",
    title: "틱톡 광고",
    description: "Z세대와 1020세대에게 영향력 있는 영상 광고 플랫폼. 챌린지 광고와 인피드 광고로 높은 인게이지먼트를 달성합니다.",
    industries: ["뷰티", "패션", "엔터테인먼트", "앱"],
    effects: ["Z세대 타겟 독점적", "높은 참여율", "바이럴 마케팅 효과"],
  },
];

const faqs = [
  {
    q: "SNS 광고에서 가장 효과적인 플랫폼은 어디인가요?",
    a: "업종과 타겟에 따라 다릅니다. 20~30대 여성 타겟이라면 인스타그램, 30~40대 전반은 페이스북, 지역 기반 소매업은 카카오, 10~20대는 틱톡이 효과적입니다.",
  },
  {
    q: "광고에 사용할 이미지/영상이 없어도 되나요?",
    a: "기본적인 소재가 필요합니다. 소재가 없을 경우 간단한 이미지 소재 제작을 도와드리거나, 크리에이티브 파트너사를 연결해드립니다. 좋은 소재가 광고 성과에 큰 영향을 미칩니다.",
  },
  {
    q: "SNS 광고 효과는 얼마나 빨리 나타나나요?",
    a: "SNS 광고는 집행 즉시 노출이 시작됩니다. 초기 1~2주는 광고 학습 기간으로 성과가 불안정할 수 있고, 3~4주 이후 안정화됩니다. 리타겟팅 광고는 더 빠른 성과를 보이기도 합니다.",
  },
  {
    q: "인플루언서 마케팅과 SNS 광고는 다른가요?",
    a: "네, 다릅니다. SNS 광고는 광고주 계정이나 광고 시스템을 통해 집행하는 유료 광고입니다. 인플루언서 마케팅은 별도로 진행하며, 두 방법을 함께 활용하면 시너지 효과가 있습니다.",
  },
  {
    q: "픽셀 설치가 꼭 필요한가요?",
    a: "필수는 아니지만 강력히 권장합니다. 메타 픽셀이나 틱톡 픽셀을 홈페이지에 설치하면 방문자 행동을 추적하여 리타겟팅 광고가 가능해지고, 전환 최적화로 광고 효율이 크게 향상됩니다.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function SnsAdsPage() {
  const [activeTab, setActiveTab] = useState("instagram");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const activeService = tabs.find((t) => t.id === activeTab)!;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: "#0A0A0F" }}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 30%, rgba(225,48,108,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="inline-flex px-3 py-1 rounded-full text-sm font-semibold mb-4" style={{ background: "rgba(225,48,108,0.15)", color: "#E1306C", border: "1px solid rgba(225,48,108,0.3)" }}>
                SNS 광고 전문
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Pretendard, sans-serif" }}>
                SNS 광고<br />전문 대행
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#8888aa" }}>
                인스타그램, 페이스북, 카카오, 틱톡 광고로 타겟 고객에게 정확히 도달합니다. 바이럴부터 전환까지 성과를 만듭니다.
              </p>
              <Link href="/contact" className="btn-primary px-7 py-3.5 text-base">
                무료 광고 상담
                <ArrowRight size={18} />
              </Link>
            </FadeInSection>

            <FadeInSection direction="left" className="hidden md:block">
              <div className="rounded-2xl p-8" style={{ background: "#12121A", border: "1px solid rgba(225,48,108,0.2)" }}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "평균 ROAS", value: "520%" },
                    { label: "광고비 절감", value: "42%" },
                    { label: "팔로워 증가율", value: "+180%" },
                    { label: "운영 파트너사", value: "70+" },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl text-center" style={{ background: "#0A0A0F" }}>
                      <div className="text-2xl font-black mb-1" style={{ color: "#E1306C", fontFamily: "Pretendard, sans-serif" }}>{item.value}</div>
                      <div className="text-xs" style={{ color: "#8888aa" }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "#12121A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-10">
            <h2 className="section-title">플랫폼별 서비스</h2>
          </FadeInSection>
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all" style={{ background: activeTab === tab.id ? "#E1306C" : "#0A0A0F", color: activeTab === tab.id ? "white" : "#8888aa", border: `1px solid ${activeTab === tab.id ? "#E1306C" : "#1E1E2E"}` }}>
                {tab.label}
              </button>
            ))}
          </div>
          <FadeInSection key={activeTab}>
            <div className="rounded-2xl p-8" style={{ background: "#0A0A0F", border: "1px solid #1E1E2E" }}>
              <h3 className="text-2xl font-bold text-white mb-3">{activeService.title}</h3>
              <p className="leading-relaxed mb-6" style={{ color: "#8888aa" }}>{activeService.description}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">적합한 업종</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.industries.map((ind) => <span key={ind} className="px-3 py-1 rounded-full text-sm" style={{ background: "#1E1E2E", color: "#ccc" }}>{ind}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">예상 효과</h4>
                  <ul className="flex flex-col gap-2">
                    {activeService.effects.map((effect) => (
                      <li key={effect} className="flex items-center gap-2 text-sm" style={{ color: "#ccc" }}>
                        <CheckCircle2 size={14} style={{ color: "#E1306C" }} />
                        {effect}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="section-padding" style={{ background: "#0A0A0F" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-10">
            <h2 className="section-title">자주 묻는 질문</h2>
          </FadeInSection>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FadeInSection key={i} delay={i * 0.05}>
                <div className="rounded-xl overflow-hidden" style={{ background: "#12121A", border: "1px solid #1E1E2E" }}>
                  <button className="w-full flex items-center justify-between px-6 py-4 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="font-semibold text-white">{faq.q}</span>
                    <ChevronDown size={16} className="shrink-0 transition-transform ml-4" style={{ color: "#8888aa", transform: openFaq === i ? "rotate(180deg)" : "none" }} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#8888aa", borderTop: "1px solid #1E1E2E" }}>
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <BandPlatformCarousel />

      <CtaSection />
    </>
  );
}
