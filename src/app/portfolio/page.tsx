import { TrendingUp } from "lucide-react";
import FadeInSection from "@/components/common/FadeInSection";
import CtaSection from "@/components/home/CtaSection";
import { getAllPortfolioItems } from "@/lib/mdx";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "포트폴리오",
  description: "핀잇의 실제 광고 성과 사례를 확인하세요. 네이버광고, 구글광고, SNS광고 분야의 성공 사례.",
  path: "/portfolio",
});

const CATEGORY_COLORS: Record<string, string> = {
  네이버광고: "#03C75A",
  구글광고: "#4285F4",
  SNS광고: "#E1306C",
};

const CATEGORIES = ["전체", "네이버광고", "구글광고", "SNS광고"];

// 폴백 데이터
const FALLBACK = [
  { slug: "case-01", title: "뷰티 쇼핑몰 네이버 광고 최적화", category: "네이버광고", keyMetric: "280%", keyMetricLabel: "전환율 상승", description: "월 광고비 200만원으로 매출 4배 달성.", client: "A 뷰티 쇼핑몰", industry: "뷰티·이커머스" },
  { slug: "case-02", title: "강남 피부과 구글 광고 신규 환자 유치", category: "구글광고", keyMetric: "340%", keyMetricLabel: "신규 문의 증가", description: "CPC 45% 절감, 신규 환자 3배 증가.", client: "B 피부과", industry: "의료·병원" },
  { slug: "case-03", title: "패션 브랜드 인스타그램 광고", category: "SNS광고", keyMetric: "520%", keyMetricLabel: "ROAS 달성", description: "광고비 대비 5.2배 매출 달성.", client: "C 패션 브랜드", industry: "패션·의류" },
  { slug: "case-04", title: "학원 카카오 지역 광고", category: "SNS광고", keyMetric: "30%", keyMetricLabel: "등록률 향상", description: "지역 타겟팅으로 학원 등록률 30% 상승.", client: "D 영어학원", industry: "교육" },
];

export default function PortfolioPage() {
  const items = getAllPortfolioItems();
  const displayItems = items.length > 0 ? items : FALLBACK;

  return (
    <>
      {/* 히어로 */}
      <section className="pt-32 pb-12" style={{ background: "#F6F3EC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00D4FF" }}>
              포트폴리오
            </p>
            <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Pretendard, sans-serif", color: "#1C1814" }}>
              실제 성과 사례
            </h1>
            <p className="text-lg" style={{ color: "#6E6860" }}>
              데이터로 증명된 광고 성과를 확인하세요
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 필터 + 그리드 */}
      <section className="section-padding" style={{ background: "#F6F3EC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 필터 탭 */}
          <FadeInSection className="flex flex-wrap gap-2 mb-10 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: cat === "전체" ? "#0055FF" : "#EDEAE1",
                  color: cat === "전체" ? "white" : "#6E6860",
                  border: `1px solid ${cat === "전체" ? "#0055FF" : "#CEC9B8"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </FadeInSection>

          {/* 카드 그리드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayItems.map((item, i) => {
              const color = CATEGORY_COLORS[item.category] || "#0055FF";
              return (
                <FadeInSection key={item.slug} delay={i * 0.08} direction="scale">
                  <div className="card p-6 flex flex-col">
                    {/* 썸네일 */}
                    <div
                      className="w-full h-44 rounded-xl mb-5 flex items-center justify-center"
                      style={{ background: `${color}11`, border: `1px solid ${color}33` }}
                    >
                      <TrendingUp size={40} style={{ color: `${color}88` }} />
                    </div>

                    {/* 메타 */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="inline-flex px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}
                      >
                        {item.category}
                      </span>
                      <span className="text-xs" style={{ color: "#6E6860" }}>{item.industry}</span>
                    </div>

                    <h3 className="font-bold mb-3 leading-snug" style={{ color: "#1C1814" }}>{item.title}</h3>

                    {/* 핵심 수치 */}
                    <div
                      className="inline-flex items-baseline gap-1 px-3 py-2 rounded-lg mb-3 w-fit"
                      style={{ background: `${color}11` }}
                    >
                      <span className="text-2xl font-black" style={{ color, fontFamily: "Pretendard, sans-serif" }}>
                        {item.keyMetric}
                      </span>
                      <span className="text-xs" style={{ color: `${color}bb` }}>
                        {item.keyMetricLabel}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: "#6E6860" }}>
                      {item.description}
                    </p>
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
