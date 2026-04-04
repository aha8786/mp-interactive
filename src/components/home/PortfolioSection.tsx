import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import FadeInSection from "@/components/common/FadeInSection";
import { getAllPortfolioItems } from "@/lib/mdx";

const FALLBACK_ITEMS = [
  {
    slug: "case-study-01",
    title: "뷰티 쇼핑몰 네이버 광고 최적화",
    category: "네이버광고",
    keyMetric: "280%",
    keyMetricLabel: "전환율 상승",
    description: "월 광고비 200만원으로 매출 4배 달성. 키워드 최적화와 소재 A/B 테스트 적용.",
    industry: "뷰티·이커머스",
  },
  {
    slug: "case-study-02",
    title: "병원 구글 광고 신규 환자 유치",
    category: "구글광고",
    keyMetric: "340%",
    keyMetricLabel: "신규 문의 증가",
    description: "지역 타겟팅과 Quality Score 개선으로 CPC 45% 절감, 신규 환자 3배 증가.",
    industry: "의료·병원",
  },
  {
    slug: "case-study-03",
    title: "패션 브랜드 인스타그램 광고",
    category: "SNS광고",
    keyMetric: "520%",
    keyMetricLabel: "ROAS 달성",
    description: "인스타그램 쇼핑 광고와 리타겟팅 결합으로 광고비 대비 5.2배 매출 달성.",
    industry: "패션·의류",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  네이버광고: "#03C75A",
  구글광고: "#4285F4",
  SNS광고: "#E1306C",
};

export default function PortfolioSection() {
  const items = getAllPortfolioItems().slice(0, 3);
  const displayItems = items.length > 0 ? items : FALLBACK_ITEMS;

  return (
    <section className="section-padding" style={{ background: "#0A0A0F" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#00D4FF" }}>
                포트폴리오
              </p>
              <h2 className="section-title">실제 성과 사례</h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden md:flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "#0055FF" }}
            >
              전체 사례 보기
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6">
          {displayItems.map((item, i) => {
            const color = CATEGORY_COLORS[item.category] || "#0055FF";
            return (
              <FadeInSection key={item.slug} delay={i * 0.1} direction="scale">
                <Link href={`/portfolio/${item.slug}`} className="card p-6 flex flex-col group block">
                  {/* 썸네일 플레이스홀더 */}
                  <div
                    className="w-full h-40 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: `${color}11`, border: `1px solid ${color}33` }}
                  >
                    <TrendingUp size={40} style={{ color: `${color}88` }} />
                  </div>

                  {/* 뱃지 */}
                  <span
                    className="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit"
                    style={{
                      background: `${color}22`,
                      color: color,
                      border: `1px solid ${color}44`,
                    }}
                  >
                    {item.category}
                  </span>

                  <h3 className="font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                    {item.title}
                  </h3>

                  {/* 핵심 수치 */}
                  <div
                    className="inline-flex items-baseline gap-1 px-3 py-1.5 rounded-lg mb-3 w-fit"
                    style={{ background: `${color}11` }}
                  >
                    <span className="text-2xl font-black" style={{ color, fontFamily: "Pretendard, sans-serif" }}>
                      {item.keyMetric}
                    </span>
                    <span className="text-xs" style={{ color: `${color}bb` }}>
                      {item.keyMetricLabel}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: "#8888aa" }}>
                    {item.description}
                  </p>
                </Link>
              </FadeInSection>
            );
          })}
        </div>

        <FadeInSection className="text-center mt-10 md:hidden">
          <Link href="/portfolio" className="btn-ghost px-6 py-3 text-sm">
            전체 사례 보기
            <ArrowRight size={14} />
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
}
