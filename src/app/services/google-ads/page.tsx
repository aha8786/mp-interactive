"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import FadeInSection from "@/components/common/FadeInSection";
import CtaSection from "@/components/home/CtaSection";

const tabs = [
  {
    id: "search",
    label: "검색광고",
    title: "구글 검색광고",
    description: "구글 검색 결과 상단에 텍스트 광고를 노출합니다. 전 세계 검색 사용자에게 도달할 수 있으며, 국내외 고객 유치에 효과적입니다.",
    industries: ["B2B", "해외 진출 기업", "전문직", "쇼핑몰"],
    effects: ["글로벌 고객 도달", "구매 의향 높은 타겟", "정밀한 키워드 관리"],
  },
  {
    id: "youtube",
    label: "유튜브광고",
    title: "유튜브 광고",
    description: "국내 최대 동영상 플랫폼에서 영상 광고를 집행합니다. 인지도 향상부터 제품 홍보까지 다양한 목적으로 활용됩니다.",
    industries: ["앱 홍보", "브랜드 인지도", "제품 런칭", "이벤트"],
    effects: ["대량 노출로 인지도 향상", "영상으로 강력한 메시지", "유튜브 리타겟팅 가능"],
  },
  {
    id: "gdn",
    label: "GDN",
    title: "GDN 디스플레이 광고",
    description: "구글 네트워크의 수백만 사이트에 배너 광고를 노출합니다. 잠재 고객을 발굴하고 리타겟팅으로 전환을 유도합니다.",
    industries: ["리타겟팅", "브랜드 인지도", "앱 광고"],
    effects: ["광범위한 네트워크 활용", "정교한 리타겟팅", "다양한 광고 형식 지원"],
  },
  {
    id: "shopping",
    label: "쇼핑광고",
    title: "구글 쇼핑광고",
    description: "구글 검색 결과에 상품 이미지, 가격, 브랜드가 표시됩니다. 해외 고객과 국내 구글 쇼핑 이용자에게 효과적입니다.",
    industries: ["이커머스", "해외 판매", "다품종 쇼핑몰"],
    effects: ["높은 클릭률과 전환율", "제품 비교 구매 고객 도달", "글로벌 판매 확대"],
  },
];

const faqs = [
  {
    q: "구글 광고와 네이버 광고, 어떤 것을 선택해야 하나요?",
    a: "업종과 목표에 따라 다릅니다. 국내 소비자 대상이라면 네이버, 해외 고객을 원하거나 B2B라면 구글이 효과적입니다. 두 채널을 함께 운영하면 시너지 효과를 낼 수 있습니다.",
  },
  {
    q: "구글 광고 최소 예산은 얼마인가요?",
    a: "구글 광고는 기술적으로 최소 예산 제한이 없지만, 효과적인 운영을 위해 월 70만원 이상을 권장합니다. 특히 경쟁이 높은 키워드는 예산이 더 필요할 수 있습니다.",
  },
  {
    q: "구글 광고 계정 구조는 어떻게 설정하나요?",
    a: "계정 > 캠페인 > 광고 그룹 > 광고 구조로 설계합니다. 목표(검색, 쇼핑, 동영상)에 따라 캠페인을 분리하고, 테마별로 광고 그룹을 구성하여 Quality Score를 높입니다.",
  },
  {
    q: "광고 효과 측정은 어떻게 하나요?",
    a: "Google Analytics 4와 구글 광고를 연동하여 전환 추적을 설정합니다. 구매, 문의, 앱 다운로드 등 목표 달성을 정확히 측정하고 ROAS를 분석합니다.",
  },
  {
    q: "유튜브 광고를 하려면 영상이 필요한가요?",
    a: "네, 유튜브 광고는 기본적으로 영상이 필요합니다. 영상 소재가 없는 경우 제작 파트너사를 연결해드리거나, 이미지 기반의 동영상 광고로 대체할 수 있습니다.",
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

export default function GoogleAdsPage() {
  const [activeTab, setActiveTab] = useState("search");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const activeService = tabs.find((t) => t.id === activeTab)!;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: "#0A0A0F" }}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 30%, rgba(66,133,244,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="inline-flex px-3 py-1 rounded-full text-sm font-semibold mb-4" style={{ background: "rgba(66,133,244,0.15)", color: "#4285F4", border: "1px solid rgba(66,133,244,0.3)" }}>
                구글 광고 전문
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Pretendard, sans-serif" }}>
                구글 광고<br />전문 대행
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#8888aa" }}>
                Google Ads와 유튜브 광고로 국내외 잠재 고객에게 도달합니다. 데이터 기반 최적화로 광고 효율을 극대화합니다.
              </p>
              <Link href="/contact" className="btn-primary px-7 py-3.5 text-base">
                무료 광고 상담
                <ArrowRight size={18} />
              </Link>
            </FadeInSection>

            <FadeInSection direction="left" className="hidden md:block">
              <div className="rounded-2xl p-8" style={{ background: "#12121A", border: "1px solid rgba(66,133,244,0.2)" }}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Quality Score 향상", value: "+40%" },
                    { label: "CPC 절감율", value: "38%" },
                    { label: "전환율 향상", value: "+290%" },
                    { label: "운영 파트너사", value: "60+" },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl text-center" style={{ background: "#0A0A0F" }}>
                      <div className="text-2xl font-black mb-1" style={{ color: "#4285F4", fontFamily: "Pretendard, sans-serif" }}>{item.value}</div>
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
            <h2 className="section-title">세부 서비스</h2>
          </FadeInSection>
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all" style={{ background: activeTab === tab.id ? "#4285F4" : "#0A0A0F", color: activeTab === tab.id ? "white" : "#8888aa", border: `1px solid ${activeTab === tab.id ? "#4285F4" : "#1E1E2E"}` }}>
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
                        <CheckCircle2 size={14} style={{ color: "#4285F4" }} />
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

      <CtaSection />
    </>
  );
}
