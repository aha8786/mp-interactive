"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, BarChart2, Activity, FileText, Lightbulb } from "lucide-react";
import FadeInSection from "@/components/common/FadeInSection";
import CountUpNumber from "@/components/common/CountUpNumber";
import CtaSection from "@/components/home/CtaSection";


const zigzagItems = [
  {
    icon: Lightbulb,
    title: "전략",
    desc: "고객의 니즈를 반영한 전략으로 마케팅 성과를 극대화합니다.",
    lineColor: "#0055FF",
  },
  {
    icon: Activity,
    title: "모니터링",
    desc: "연관 검색어와 광고 데이터를 빠르고 정확하게 모니터링하여 변화하는 시장 흐름을 전략에 즉시 반영합니다.",
    lineColor: "#9333EA",
  },
  {
    icon: BarChart2,
    title: "분석",
    desc: "집행 데이터를 기반으로 A/B 테스트를 진행하여 클릭률 상승과 광고 효율 개선을 도모합니다.",
    lineColor: "#F59E0B",
  },
  {
    icon: FileText,
    title: "리포트",
    desc: "단순한 매체 데이터 나열이 아닌 핵심 KPI 중심의 리포트를 주·월 단위로 제공하여 명확한 방향성을 제시합니다.",
    lineColor: "#03C75A",
  },
];

const faqs = [
  {
    q: "네이버 밴드 광고는 어떤 업종에 효과적인가요?",
    a: "지역 기반 소상공인, 음식점, 병원, 학원, 미용업 등에 특히 효과적입니다. 밴드는 30~50대 사용자 비중이 높아 해당 연령대를 타겟으로 하는 업종에 유리합니다.",
  },
  {
    q: "네이버 밴드 광고 최소 예산이 얼마인가요?",
    a: "예산은 광고 목표와 전략에 따라 크게 달라지기 때문에 일률적으로 말씀드리기 어렵습니다. 같은 예산이라도 전략에 따라 성과 차이가 크게 나기 때문에, 무료 상담을 통해 상황에 맞는 최적 예산을 안내해드리고 있습니다. 부담 없이 문의해 주시면 목표에 맞는 구체적인 플랜을 제안해드리겠습니다.",
  },
  {
    q: "광고 효과는 언제부터 나타나나요?",
    a: "광고 집행 즉시 노출이 시작됩니다. 초기 1~2주는 데이터를 수집하며 최적화하고, 3~4주 이후부터 안정적인 성과가 나타납니다.",
  },
  {
    q: "광고 소재(이미지/영상)는 직접 준비해야 하나요?",
    a: "기본적인 소재를 제공해 주시면 광고에 맞게 편집·최적화해드립니다. 소재가 전혀 없는 경우 간단한 이미지 제작도 도움드릴 수 있으니 상담 시 말씀해 주세요.",
  },
  {
    q: "광고 성과는 어떻게 보고받을 수 있나요?",
    a: "주간·월간 성과 리포트를 이메일로 제공합니다. 노출수, 클릭수, 클릭률(CTR), 광고비 집행 현황 등 핵심 지표를 알기 쉽게 정리해 드립니다.",
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

export default function NaverBandAdsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeAd, setActiveAd] = useState<"new" | "list" | "home">("home");

  const adDetails = {
    new: {
      label: "새소식",
      src: "/images/band/New_f.png",
      imgW: 835,
      imgH: 1097,
      desc: "하단 새소식 탭을 누른 순간, 피드 최상단에 고정 노출되는 광고예요.",
      sub: "콘텐츠를 능동적으로 탐색하러 진입한 고관여 사용자에게 도달해 클릭 전환율이 높아요.",
      points: ["콘텐츠 탐색 의도를 가진 능동적 사용자에게 노출", "피드 최상단 고정으로 스크롤 전 100% 노출 보장", "콘텐츠 소비 맥락에 자연스럽게 스며드는 네이티브 형식"],
    },
    list: {
      label: "내 밴드 목록",
      src: "/images/band/Group7_clean.png",
      imgW: 695,
      imgH: 808,
      desc: "홈에서 전체보기를 탭하면 나타나는 내 밴드 목록 최하단에 노출되는 광고예요.",
      sub: "밴드를 즐겨 사용하는 충성 사용자가 목록을 훑는 맥락에서 자연스럽게 마주치는 지면이에요.",
      points: ["밴드 충성 사용자(고관여)에게 집중 노출", "목록 탐색 흐름에 녹아드는 네이티브 광고 형식", "리텐션·재방문·구매 전환 캠페인에 효과적"],
    },
    home: {
      label: "밴드 홈",
      src: "/images/band/Group22.png",
      imgW: 573,
      imgH: 580,
      desc: "밴드 앱을 실행하면 가장 먼저 보이는 홈 화면에 노출되는 광고예요.",
      sub: "하루 수백만 명의 첫 화면에 등장해 브랜드 인지도를 빠르게 끌어올릴 수 있어요.",
      points: ["앱 첫 진입 시 불가피하게 노출되는 최상위 프리미엄 지면", "전체 밴드 사용자 대상 최대 노출 볼륨 확보", "신규 고객 유입 및 브랜드 인지도 캠페인에 최적"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 히어로 */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: "#F6F3EC" }}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 30%, rgba(3,199,90,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="inline-flex px-3 py-1 rounded-full text-sm font-semibold mb-4" style={{ background: "rgba(3,199,90,0.15)", color: "#03C75A", border: "1px solid rgba(3,199,90,0.3)" }}>
                네이버 밴드 광고 전문
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Pretendard, sans-serif", color: "#1C1814" }}>
                네이버 밴드 광고<br />전문 대행
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#6E6860" }}>
                글로벌 가입자 1억 3,000만명의 플랫폼에서 정밀 타겟팅 광고를 집행합니다.<br />지역·연령·관심사 기반으로 실제 고객에게 도달합니다.
              </p>
              <Link href="/contact" className="btn-primary px-7 py-3.5 text-base">
                무료 광고 상담
                <ArrowRight size={18} />
              </Link>
            </FadeInSection>

            <FadeInSection direction="left" className="hidden md:block">
              <div className="rounded-2xl p-8" style={{ background: "#EDEAE1", border: "1px solid rgba(3,199,90,0.2)" }}>
                <h3 className="text-sm font-semibold mb-4" style={{ color: "#1C1814" }}>네이버 밴드 광고 특징</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "글로벌 가입자 1억 3,000만명",
                    "국내 MAU 1,800만 · 소셜미디어 4위",
                    "30~50대 핵심 소비층 높은 비중",
                    "변화하는 트렌드에 유연한 광고 전략",
                    "데이터 기반 맞춤형 광고 운영",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#4A4540" }}>
                      <CheckCircle2 size={14} style={{ color: "#03C75A", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 국내 MAU 1,800만 통계 */}
      <section className="section-padding" style={{ background: "#0A1628" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#03C75A" }}>
              검증된 플랫폼
            </p>
            <p className="text-7xl md:text-8xl font-black mb-3" style={{ fontFamily: "Pretendard, sans-serif", color: "#ffffff" }}>
              <CountUpNumber end={1800} suffix="만" />
            </p>
            <p className="text-xl font-semibold mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>국내 월간 활성 이용자(MAU)</p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              카카오톡·유튜브·인스타그램에 이어 국내 소셜미디어 이용률 <strong style={{ color: "#ffffff" }}>4위(28.6%)</strong>를 기록.<br />
              페이스북·틱톡보다 높은 국내 이용자를 보유한 검증된 플랫폼입니다.
            </p>
          </FadeInSection>
          <p className="mt-8 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>출처: 와이즈앱 리테일 2024.02</p>
        </div>
      </section>

      {/* 광고 소개 섹션 — 게재 위치 자리로 이동 */}
      <section style={{ background: "#ffffff" }}>

        {/* ── 모바일 레이아웃 (lg 미만) ── */}
        <div className="lg:hidden px-5 py-10">
          <div className="pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(3,199,90,0.04) 0%, transparent 70%)" }} />
          {/* 텍스트 */}
          <div className="text-center mb-8">
            <p className="text-xl font-black mb-2" style={{ fontFamily: "Pretendard, sans-serif", color: "#1C1814" }}>
              네이버 밴드 광고로 이런 걸 할 수 있어요!
            </p>
            <p className="text-sm" style={{ color: "#6E6860" }}>
              목적과 예산에 따라 노출 위치를 선택해 딱 맞는 광고를 진행해요.
            </p>
          </div>
          {/* 이미지 세로 스택 */}
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="w-full max-w-sm"
              style={{ rotate: -4 }}
              animate={{ y: [0, -8, 0], rotate: [-4, -2, -4] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ border: "1px solid #e0e0e0" }}>
                <Image src="/images/band/list_ad.png" alt="내 밴드 목록 광고" width={650} height={192} className="object-contain w-full" />
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <motion.div
                style={{ rotate: 4 }}
                animate={{ y: [0, -10, 0], rotate: [4, 6, 4] }}
                transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl" style={{ border: "1px solid #e0e0e0" }}>
                  <Image src="/images/band/home_ad.png" alt="밴드 홈 광고" width={300} height={367} className="object-contain w-full" />
                </div>
              </motion.div>
              <motion.div
                style={{ rotate: -2 }}
                animate={{ y: [0, -7, 0], rotate: [-2, 0, -2] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: "1px solid #e0e0e0" }}>
                  <Image src="/images/band/new_ad.png" alt="새소식 광고" width={330} height={98} className="object-contain w-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── 데스크탑 레이아웃 (lg 이상) ── */}
        <div className="relative overflow-hidden hidden lg:block" style={{ height: 460 }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(3,199,90,0.04) 0%, transparent 70%)" }} />

          {/* list_ad: 좌상단 */}
          <motion.div
            className="absolute"
            style={{ left: "calc(50% - 560px)", top: 30, width: "43%", maxWidth: 580, zIndex: 2, rotate: -12 }}
            animate={{ y: [0, -14, 0], rotate: [-12, -10, -12] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl" style={{ border: "1px solid #e0e0e0" }}>
              <Image src="/images/band/list_ad.png" alt="내 밴드 목록 광고" width={650} height={192} className="object-contain w-full" />
            </div>
          </motion.div>

          {/* home_ad: 우상단 */}
          <motion.div
            className="absolute"
            style={{ left: "calc(50% + 21%)", top: 30, width: "21%", maxWidth: 280, zIndex: 3, rotate: 12 }}
            animate={{ y: [0, -16, 0], rotate: [12, 10, 12] }}
            transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl" style={{ border: "1px solid #e0e0e0" }}>
              <Image src="/images/band/home_ad.png" alt="밴드 홈 광고" width={300} height={367} className="object-contain w-full" />
            </div>
          </motion.div>

          {/* 중앙 텍스트 */}
          <div className="absolute" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 5, textAlign: "center", pointerEvents: "none", whiteSpace: "nowrap" }}>
            <p className="text-2xl xl:text-3xl font-black mb-2" style={{ fontFamily: "Pretendard, sans-serif", color: "#1C1814" }}>
              네이버 밴드 광고로 이런 걸 할 수 있어요!
            </p>
            <p className="text-sm xl:text-base" style={{ color: "#6E6860" }}>
              목적과 예산에 따라 노출 위치를 선택해 딱 맞는 광고를 진행해요.
            </p>
          </div>

          {/* new_ad: 중앙 하단 */}
          <motion.div
            className="absolute"
            style={{ left: "calc(50% + 2%)", top: 260, width: "23%", maxWidth: 310, zIndex: 4, rotate: 2 }}
            animate={{ y: [0, -12, 0], rotate: [2, 4, 2] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: "1px solid #e0e0e0" }}>
              <Image src="/images/band/new_ad.png" alt="새소식 광고" width={330} height={98} className="object-contain w-full" />
            </div>
          </motion.div>
        </div>

        {/* Q&A 카드 영역 */}
        <div className="max-w-6xl mx-auto px-8 pb-20 pt-2">

          {/* Q1 + Q2 나란히 */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">

            {/* Q1 */}
            <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "#ffffff", border: "1px solid #E8E4DC", boxShadow: "0 4px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)" }}>
              <div>
                <span className="inline-block text-xs font-black tracking-widest px-2 py-0.5 rounded-full mb-3" style={{ background: "rgba(0,85,255,0.1)", color: "#0055FF" }}>Q</span>
                <p className="text-base font-bold leading-snug" style={{ color: "#1C1814" }}>특정 상품이나 게시글을<br />더 많은 사람에게 알리고 싶어요.</p>
              </div>
              <div style={{ borderTop: "1px solid #EEEBE4", paddingTop: "1rem" }}>
                <span className="inline-block text-xs font-black tracking-widest px-2 py-0.5 rounded-full mb-3" style={{ background: "rgba(3,199,90,0.12)", color: "#03C75A" }}>A</span>
                <p className="text-sm leading-relaxed" style={{ color: "#4A4540" }}>
                  밴드 게시글 홍보 광고를 활용하면 <strong style={{ color: "#1C1814" }}>비회원에게도</strong> 내 게시글을 노출할 수 있어요.
                  브랜드 인지도와 실제 반응을 동시에 높일 수 있는 가장 직접적인 방법이에요.
                </p>
              </div>
            </div>

            {/* Q2 */}
            <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "#ffffff", border: "1px solid #E8E4DC", boxShadow: "0 4px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)" }}>
              <div>
                <span className="inline-block text-xs font-black tracking-widest px-2 py-0.5 rounded-full mb-3" style={{ background: "rgba(0,85,255,0.1)", color: "#0055FF" }}>Q</span>
                <p className="text-base font-bold leading-snug" style={{ color: "#1C1814" }}>밴드 회원 수를<br />늘리고 싶어요.</p>
              </div>
              <div style={{ borderTop: "1px solid #EEEBE4", paddingTop: "1rem" }}>
                <span className="inline-block text-xs font-black tracking-widest px-2 py-0.5 rounded-full mb-3" style={{ background: "rgba(3,199,90,0.12)", color: "#03C75A" }}>A</span>
                <p className="text-sm leading-relaxed" style={{ color: "#4A4540" }}>
                  광고 목적을 <strong style={{ color: "#1C1814" }}>&lsquo;밴드 알리기&rsquo;</strong>로 설정하면 잠재 회원들에게 밴드를 노출하고 자연스럽게 가입을 유도할 수 있어요.
                  커뮤니티 성장이 목표라면 이 방식을 추천해요.
                </p>
              </div>
            </div>
          </div>

          {/* Q3 — 좌우 분할: Q(좌) / A+탭+프리뷰(우) */}
          <div className="rounded-2xl overflow-hidden" style={{ background: "#ffffff", border: "1px solid #E8E4DC", boxShadow: "0 4px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)" }}>
            <div className="grid" style={{ gridTemplateColumns: "2fr 3fr", minHeight: 380 }}>

              {/* 좌측: Q */}
              <div className="flex items-center p-10" style={{ borderRight: "1px solid #CEC9B8" }}>
                <div>
                  <span className="inline-block text-xs font-black tracking-widest px-2 py-0.5 rounded-full mb-4" style={{ background: "rgba(0,85,255,0.1)", color: "#0055FF" }}>Q</span>
                  <p className="text-xl font-bold leading-snug" style={{ color: "#1C1814" }}>내가 진행한 광고는<br />어디에 노출되나요?</p>
                </div>
              </div>

              {/* 우측: A + 탭 버튼 + 구분선 + 이미지/설명 */}
              <div className="flex flex-col">

                {/* A 배지 + 세그먼트 탭 */}
                <div className="flex items-center gap-4 px-8 py-5">
                  <span className="inline-block text-xs font-black tracking-widest px-2 py-0.5 rounded-full shrink-0" style={{ background: "rgba(3,199,90,0.12)", color: "#03C75A" }}>A</span>
                  <div className="relative flex gap-10">
                    {/* 전체 배경선 */}
                    <div className="absolute bottom-0 left-0 right-0" style={{ height: 2, background: "#E8E4DC" }} />

                    {(["home", "new", "list"] as const).map((key) => (
                      <button
                        key={key}
                        onClick={() => setActiveAd(key)}
                        className="relative pb-3 text-sm transition-colors duration-200"
                        style={{
                          color: activeAd === key ? "#0055FF" : "#6E6860",
                          fontWeight: activeAd === key ? 700 : 500,
                        }}
                      >
                        {adDetails[key].label} 광고
                        {activeAd === key && (
                          <motion.div
                            layoutId="tab-underline"
                            className="absolute bottom-0 rounded-full"
                            style={{ height: 3, background: "#0055FF", left: -8, right: -8 }}
                            transition={{ type: "spring", stiffness: 500, damping: 35 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 구분선 */}
                <div style={{ borderTop: "1px solid #EEEBE4" }} />

                {/* 이미지(좌) + 설명(우) */}
                <div className="flex-1 grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                  <AnimatePresence mode="wait">
                    {/* 이미지 */}
                    <motion.div
                      key={activeAd + "_img"}
                      className="flex items-center justify-center p-6"
                      style={{ background: "#ffffff" }}
                      initial={{ opacity: 0, scale: 0.88, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -8 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={adDetails[activeAd].src}
                        alt={adDetails[activeAd].label}
                        width={adDetails[activeAd].imgW}
                        height={adDetails[activeAd].imgH}
                        className="object-contain w-full"
                        style={{ maxWidth: 200 }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    {/* 설명 */}
                    <motion.div
                      key={activeAd + "_txt"}
                      className="flex flex-col justify-center gap-3 px-8 py-6"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                    <p className="text-base font-semibold leading-relaxed" style={{ color: "#1C1814" }}>
                      {adDetails[activeAd].desc}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6E6860" }}>
                      {adDetails[activeAd].sub}
                      </p>
                      <div style={{ borderTop: "1px solid #EEEBE4", paddingTop: "0.75rem", marginTop: "0.25rem" }}>
                        <ul className="flex flex-col gap-2">
                          {adDetails[activeAd].points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#4A4540" }}>
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#0055FF" }} />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* AI/데이터 차별화 */}
      <section className="section-padding" style={{ background: "#f2f3f5" }}>
        {/* 헤더 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <FadeInSection className="text-center">
            <h2 className="section-title" style={{ color: "#1C1814" }}>AI와 데이터로 만드는 차별화된 퍼포먼스</h2>
            <p className="section-subtitle mt-2" style={{ color: "#6B7280" }}>
              광고 효율을 높이는 건 감이 아닙니다. 데이터입니다.
            </p>
          </FadeInSection>
        </div>

        {/* 가로 지그재그 — 화면 끝에서 시작 */}
        <div className="hidden md:flex items-start px-8 lg:px-16">
          {zigzagItems.map((item, i) => (
            <FadeInSection key={item.title} delay={i * 0.12} className="flex-1">
              <div className={i % 2 === 0 ? "pt-0" : "pt-24"}>
                <div className="flex gap-6 pr-12">
                  {/* 세로선 */}
                  <div
                    className="shrink-0 w-0.5 self-stretch"
                    style={{
                      background: `linear-gradient(to bottom, ${item.lineColor}, ${item.lineColor}22)`,
                    }}
                  />
                  <div className="pb-10">
                    <h3
                      className="text-2xl font-black mb-4"
                      style={{ fontFamily: "Pretendard, sans-serif", color: "#6B7280" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#1C1814", maxWidth: "220px" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* 모바일: 세로 나열 */}
        <div className="flex md:hidden flex-col gap-12 px-6">
          {zigzagItems.map((item, i) => (
            <FadeInSection key={item.title} delay={i * 0.1}>
              <div className="flex gap-6">
                <div
                  className="shrink-0 w-0.5 self-stretch"
                  style={{
                    background: `linear-gradient(to bottom, ${item.lineColor}, ${item.lineColor}22)`,
                  }}
                />
                <div>
                  <h3
                    className="text-lg font-black mb-2"
                    style={{ fontFamily: "Pretendard, sans-serif", color: "#6B7280" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#1C1814" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: "#e7eeff" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-10">
            <h2 className="section-title" style={{ color: "#1C1814" }}>자주 묻는 질문</h2>
          </FadeInSection>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FadeInSection key={i} delay={i * 0.05}>
                <div className="rounded-xl overflow-hidden" style={{ background: "#ffffff", border: "1px solid #E8E4DC", boxShadow: "0 4px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)" }}>
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold" style={{ color: "#1C1814" }}>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className="shrink-0 transition-transform ml-4"
                      style={{ color: "#6E6860", transform: openFaq === i ? "rotate(180deg)" : "none" }}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#6E6860", borderTop: "1px solid #EEEBE4" }}>
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
