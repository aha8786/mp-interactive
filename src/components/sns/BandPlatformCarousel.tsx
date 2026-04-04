"use client";

import { useRef, useState } from "react";

const cards = [
  {
    id: 1,
    bg: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
    tag: "이용자 현황",
    title: "국내 1위\n소모임 앱",
    desc: "월간 활성 이용자 1,800만 명, 개설된 밴드 2억 개 이상. 국내 최대 커뮤니티 기반 소셜 플랫폼입니다.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="38" fill="rgba(255,255,255,0.12)" />
        <circle cx="40" cy="28" r="12" fill="white" opacity="0.9" />
        <ellipse cx="40" cy="56" rx="22" ry="14" fill="white" opacity="0.9" />
        <circle cx="18" cy="32" r="8" fill="white" opacity="0.6" />
        <ellipse cx="18" cy="48" rx="13" ry="9" fill="white" opacity="0.6" />
        <circle cx="62" cy="32" r="8" fill="white" opacity="0.6" />
        <ellipse cx="62" cy="48" rx="13" ry="9" fill="white" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 2,
    bg: "linear-gradient(135deg, #0055FF 0%, #4F46E5 100%)",
    tag: "핵심 타겟",
    title: "구매력 높은\n40~60대 주도",
    desc: "전체 이용자의 60% 이상이 40~60대. 소비 여력이 높고 커뮤니티 충성도가 강한 타겟층에 직접 도달합니다.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="10" y="18" width="60" height="44" rx="8" fill="rgba(255,255,255,0.15)" />
        <rect x="18" y="26" width="44" height="6" rx="3" fill="white" opacity="0.9" />
        <rect x="18" y="38" width="28" height="4" rx="2" fill="white" opacity="0.7" />
        <rect x="18" y="48" width="20" height="4" rx="2" fill="white" opacity="0.5" />
        <circle cx="58" cy="50" r="10" fill="white" opacity="0.9" />
        <path d="M54 50l3 3 6-6" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    bg: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
    tag: "광고 방식",
    title: "게시글 하나로\n광고 시작",
    desc: "별도 랜딩페이지가 없어도 됩니다. 기존 게시글을 그대로 광고 소재로 활용해 빠르게 집행할 수 있습니다.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="12" y="14" width="56" height="52" rx="10" fill="rgba(255,255,255,0.15)" />
        <rect x="20" y="22" width="40" height="22" rx="6" fill="white" opacity="0.9" />
        <rect x="20" y="50" width="18" height="4" rx="2" fill="white" opacity="0.7" />
        <rect x="20" y="58" width="28" height="4" rx="2" fill="white" opacity="0.5" />
        <path d="M46 58h14M53 51v14" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      </svg>
    ),
  },
  {
    id: 4,
    bg: "linear-gradient(135deg, #0EA5E9 0%, #4F46E5 100%)",
    tag: "타겟팅",
    title: "관심사 · 지역\n정밀 타겟팅",
    desc: "운동, 요리, 독서 등 소모임 관심사와 지역 기반으로 광고가 노출됩니다. 관련도 높은 이용자에게만 도달합니다.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="36" r="22" fill="rgba(255,255,255,0.15)" />
        <circle cx="40" cy="36" r="14" fill="rgba(255,255,255,0.15)" />
        <circle cx="40" cy="36" r="6" fill="white" opacity="0.95" />
        <line x1="40" y1="10" x2="40" y2="18" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        <line x1="40" y1="54" x2="40" y2="62" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        <line x1="14" y1="36" x2="22" y2="36" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        <line x1="58" y1="36" x2="66" y2="36" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        <path d="M40 54 Q44 62 40 68 Q36 62 40 54Z" fill="white" opacity="0.9" />
      </svg>
    ),
  },
  {
    id: 5,
    bg: "linear-gradient(135deg, #EC4899 0%, #7C3AED 100%)",
    tag: "성과 측정",
    title: "실시간 성과\n리포트 제공",
    desc: "노출수, 클릭수, 전환 수를 실시간으로 확인합니다. 데이터 기반 최적화로 광고비 낭비를 최소화합니다.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="10" y="15" width="60" height="50" rx="8" fill="rgba(255,255,255,0.12)" />
        <rect x="18" y="50" width="8" height="8" rx="2" fill="white" opacity="0.9" />
        <rect x="30" y="40" width="8" height="18" rx="2" fill="white" opacity="0.9" />
        <rect x="42" y="30" width="8" height="28" rx="2" fill="white" opacity="0.9" />
        <rect x="54" y="22" width="8" height="36" rx="2" fill="white" opacity="0.9" />
        <path d="M18 38 L30 28 L42 20 L54 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 6,
    bg: "linear-gradient(135deg, #059669 0%, #0EA5E9 100%)",
    tag: "비용 효율",
    title: "낮은 CPM으로\n높은 도달률",
    desc: "타 SNS 대비 경쟁이 낮아 광고 단가가 저렴합니다. 같은 예산으로 더 많은 잠재 고객에게 도달할 수 있습니다.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="28" fill="rgba(255,255,255,0.12)" />
        <circle cx="40" cy="40" r="20" fill="rgba(255,255,255,0.12)" />
        <text x="40" y="46" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" opacity="0.95">₩</text>
        <path d="M40 12 A28 28 0 0 1 68 40" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        <polygon points="66,34 72,42 60,44" fill="white" opacity="0.8" />
      </svg>
    ),
  },
];

export default function BandPlatformCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(false);
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    trackRef.current!.style.cursor = "grabbing";
    trackRef.current!.style.userSelect = "none";
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!trackRef.current) return;
    const x = e.pageX - (trackRef.current.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.2;
    if (Math.abs(walk) > 4) setIsDragging(true);
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
      trackRef.current.style.userSelect = "";
    }
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

  return (
    <section className="section-padding" style={{ background: "#0A0A0F" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div
            className="inline-flex px-3 py-1 rounded-full text-sm font-semibold mb-3"
            style={{
              background: "rgba(124,58,237,0.15)",
              color: "#A855F7",
              border: "1px solid rgba(124,58,237,0.3)",
            }}
          >
            네이버 밴드
          </div>
          <h2 className="section-title">네이버 밴드 플랫폼 현황</h2>
          <p className="text-sm mt-2" style={{ color: "#8888aa" }}>
            드래그해서 더 보기
          </p>
        </div>

        {/* 드래그 캐러셀 */}
        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          className="flex gap-5 overflow-x-auto pb-6 select-none"
          style={{
            cursor: "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* 왼쪽 여백 */}
          <div className="shrink-0 w-1" />

          {cards.map((card) => (
            <div
              key={card.id}
              className="shrink-0 rounded-3xl p-7 flex flex-col justify-between"
              style={{
                background: card.bg,
                width: 300,
                minHeight: 380,
              }}
            >
              {/* 태그 */}
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                >
                  {card.tag}
                </span>
                <h3
                  className="text-2xl font-black leading-tight mb-3"
                  style={{ color: "white", fontFamily: "Pretendard, sans-serif", whiteSpace: "pre-line" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
                  {card.desc}
                </p>
              </div>

              {/* 일러스트 아이콘 */}
              <div
                className="rounded-2xl flex items-center justify-center mt-6"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  width: 100,
                  height: 100,
                  alignSelf: "flex-end",
                  padding: 16,
                }}
              >
                {card.icon}
              </div>
            </div>
          ))}

          {/* 오른쪽 여백 */}
          <div className="shrink-0 w-1" />
        </div>

        {/* 스크롤바 숨김 전역 CSS (인라인) */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </section>
  );
}
