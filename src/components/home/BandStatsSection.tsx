"use client";

import FadeInSection from "@/components/common/FadeInSection";
import CountUpNumber from "@/components/common/CountUpNumber";

const stats = [
  {
    label: "글로벌 가입자",
    value: 13000,
    suffix: "만명",
    desc: "글로벌 커뮤니티 앱으로 도약 중",
    emoji: "🌏",
  },
  {
    label: "국내 MAU",
    value: 1800,
    suffix: "만",
    desc: "카카오톡·유튜브·인스타그램 다음",
    emoji: "📱",
  },
  {
    label: "소셜미디어 이용률",
    value: 28,
    suffix: ".6%",
    desc: "페이스북·틱톡보다 높은 국내 이용률",
    emoji: "📊",
  },
  {
    label: "미국 MAU",
    value: 710,
    suffix: "만",
    desc: "미국 고등학생에게 열풍인 커뮤니티앱",
    emoji: "🇺🇸",
  },
];

export default function BandStatsSection() {
  return (
    <section className="section-padding" style={{ background: "#0D1B3E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 헤더 */}
        <FadeInSection className="text-center mb-12">
          <div
            className="inline-flex px-3 py-1 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(3,199,90,0.15)", color: "#03C75A", border: "1px solid rgba(3,199,90,0.3)" }}
          >
            네이버 밴드 플랫폼 현황
          </div>
          <h2
            className="text-3xl md:text-4xl font-black mb-3"
            style={{ fontFamily: "Pretendard, sans-serif", color: "#ffffff" }}
          >
            국내 MAU 1,800만<br />글로벌 1억 3천만의 플랫폼
          </h2>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            검증된 플랫폼, 데이터 기반 전략으로 실질 성과를 만듭니다
          </p>
        </FadeInSection>

        {/* 카드뉴스 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <FadeInSection key={s.label} delay={i * 0.12} direction="scale">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid #CEC9B8" }}
              >
                {/* 카드 상단 컬러 바 */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: "linear-gradient(90deg, #03C75A, #00D4FF)" }}
                />
                {/* 카드 본문 */}
                <div
                  className="p-5 md:p-6 flex flex-col items-center text-center"
                  style={{ background: "#EDEAE1" }}
                >
                  <span className="text-3xl mb-3">{s.emoji}</span>
                  <p
                    className="text-3xl md:text-4xl font-black mb-1"
                    style={{ fontFamily: "Pretendard, sans-serif", color: "#03C75A" }}
                  >
                    <CountUpNumber end={s.value} suffix={s.suffix} />
                  </p>
                  <p
                    className="text-sm font-bold mb-2"
                    style={{ color: "#1C1814", fontWeight: 700 }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#5A5A5A" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* 출처 */}
        <FadeInSection className="text-center mt-6">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            출처: 와이즈앱 리테일 2024.02 · 네이버피셜 공식 채널
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
