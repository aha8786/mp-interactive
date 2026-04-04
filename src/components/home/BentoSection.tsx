"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
} from "recharts";
import styles from "./BentoSection.module.css";

// ─── 데이터 ──────────────────────────────────────────────────────────────────

const barData = [
  { app: "카카오톡", value: 90 },
  { app: "유튜브", value: 75 },
  { app: "인스타그램", value: 55 },
  { app: "네이버 밴드", value: 36 },
];

// ─── 카드 A ───────────────────────────────────────────────────────────────────

function CardA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  // 점 좌표
  const greenDots = [
    { cx: 100, cy: 318 },
    { cx: 291, cy: 279 },
    { cx: 647, cy: 154 },
  ];

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${styles.cardA}`}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0 }}
      whileHover={{
        y: -8,
        scale: 1.015,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      {/* 텍스트 (SVG 위, z-index:2) */}
      <motion.div
        className={styles.cardAText}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className={styles.cardATitle}>
          글로벌 가입자 수{" "}
          <span className={styles.cardAHl}>1억 3000만명</span> 이상
        </h3>
        <p className={styles.cardASub}>글로벌 커뮤니티에서 시작해보세요!</p>
      </motion.div>

      {/* SVG 그래프 (position absolute, z-index:1) */}
      <svg
        className={styles.cardASvg}
        viewBox="0 0 700 450"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1EC800" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#1EC800" stopOpacity="0" />
          </linearGradient>
          <filter id="dotGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="purpleGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="cardClip">
            <rect x="0" y="0" width="700" height="450" rx="60" ry="60" />
          </clipPath>
        </defs>

        {/* 배경 미세 가로 격자선 — 아래 2개만 */}
        {[320, 380].map((y) => (
          <line
            key={y}
            x1="0" y1={y} x2="700" y2={y}
            stroke="#e8e8e8"
            strokeWidth="1"
            strokeDasharray="4,6"
          />
        ))}

        {/* Y축 레이블 */}
        {[
          { y: 325, label: "0.7억" },
          { y: 385, label: "0.5억" },
        ].map(({ y, label }) => (
          <text key={y} x="12" y={y} fontSize="10" fill="#cccccc" fontFamily="sans-serif">
            {label}
          </text>
        ))}

        {/* 그라데이션 채우기 — 선 그린 후 페이드인 */}
        <motion.path
          d="M 0 360 C 80 360 120 280 200 260 C 280 240 300 320 390 290
             C 470 265 500 180 590 160 C 630 152 665 155 700 148
             L 700 450 L 0 450 Z"
          fill="url(#areaGrad)"
          clipPath="url(#cardClip)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
        />

        {/* 메인 선 그래프 — 드로잉 애니메이션 */}
        <motion.path
          d="M 0 360 C 80 360 120 280 200 260 C 280 240 300 320 390 290
             C 470 265 500 180 590 160 C 630 152 665 155 700 148"
          fill="none"
          stroke="#1EC800"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        />

        {/* 그린 데이터 포인트 — 선 완성 후 순서대로 등장 */}
        {greenDots.map((dot, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 1.8 + i * 0.12, ease: "backOut" }}
            style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
          >
            <circle cx={dot.cx} cy={dot.cy} r="16" fill="rgba(30,200,0,0.10)" />
            <circle cx={dot.cx} cy={dot.cy} r="9" fill="#1EC800" filter="url(#dotGlow)" />
            <circle cx={dot.cx} cy={dot.cy} r="4" fill="white" />
          </motion.g>
        ))}

        {/* 점 3 — 보라 강조 + 밑줄~점 연결선 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 2.1 }}
        >
          {/* 밑줄 위치(y≈62)부터 보라 점 바로 위(y=210)까지 점선 */}
          <motion.line
            x1="486" y1="62"
            x2="486" y2="210"
            stroke="#6666EE"
            strokeWidth="2"
            strokeDasharray="5,5"
            strokeOpacity="0.55"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.6, delay: 2.15, ease: "easeOut" }}
          />
          {/* 펄스 링 — 점선 중간(y=98)에 위치 */}
          <circle cx="486" cy="98" r="38" fill="rgba(102,102,238,0.06)" className={styles.pulseRingOuter} />
          <circle cx="486" cy="98" r="26" fill="rgba(102,102,238,0.12)" className={styles.pulseRingInner} />
          {/* 메인 보라 dot */}
          <circle cx="486" cy="223" r="11" fill="#6666EE" filter="url(#purpleGlow)" />
          <circle cx="486" cy="223" r="4.5" fill="white" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

// ─── 카드 B 커스텀 막대 ───────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomBarShape(props: any) {
  const { x = 0, y = 0, width = 0, height = 0, fill = "#F59E0B", app } = props;
  const r = 8;
  const isBand = app === "네이버 밴드";
  const iconSize = Math.min(width * 0.62, 26);
  const iconX = x + (width - iconSize) / 2;
  const iconY = y + (height - iconSize) / 2;

  return (
    <g>
      <path
        d={`M${x + r},${y} h${width - 2 * r} a${r},${r} 0 0 1 ${r},${r} v${height - r} h${-width} v${-(height - r)} a${r},${r} 0 0 1 ${r},${-r}z`}
        fill={fill}
      />
      {isBand && height > iconSize + 12 && (
        <image
          href="/images/band/card1.png"
          x={iconX}
          y={iconY}
          width={iconSize}
          height={iconSize}
        />
      )}
    </g>
  );
}

// ─── 카드 B (오렌지 그래프) ───────────────────────────────────────────────────

function CardB() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${styles.cardB}`}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      {/* 헤더 영역 */}
      <p className={styles.cardBHeader}>국내 SNS 앱 사용자 현황</p>
      <p className={styles.cardBTitle}>
        밴드, <span className={styles.cardBTitleHl}>상위 4위</span> 앱
      </p>

      <div className={styles.chartWrap}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barData}
            margin={{ top: 10, right: 16, left: 16, bottom: 20 }}
            barCategoryGap="28%"
          >
            <XAxis
              dataKey="app"
              tick={{ fontSize: 11, fill: "#92400E", fontWeight: 700 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Bar dataKey="value" maxBarSize={52} shape={<CustomBarShape />}>
              {barData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 3 ? "#02C054" : "#F59E0B"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

// ─── 카드 C1 (퍼플) ───────────────────────────────────────────────────────────

function CardC1() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${styles.cardC1}`}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(99,102,241,0.45)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      <div className={styles.cardC1Blob1} />
      <div className={styles.cardC1Blob2} />
      <div className={styles.cardC1Head}>
        밴드가 미국에서도<br />쓰인다고요?
      </div>
      <div className={styles.cardC1A}>
        미국 진출 10년 만에 MAU{" "}
        <span className={styles.cardC1Hl}>600만 명</span> 돌파.
        미국 사용자의{" "}
        <span className={styles.cardC1Hl}>80% 이상이 10~40대</span>,
        밴드는 젊습니다.
      </div>
      <div className={styles.cardC1Source}>출처: NAVERfficial</div>
    </motion.div>
  );
}

// ─── 카드 C2 (스카이블루) ─────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CardC2() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${styles.cardC2}`}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{
        y: -6,
        scale: 1.03,
        backgroundColor: "#7DD3FC",
        boxShadow: "0 20px 40px rgba(186,230,253,0.5)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      <div className={styles.cardC2Icon}>🔄</div>
      <motion.div
        className={styles.cardC2Num}
        whileHover={{ scale: 1.05 }}
      >
        98%
      </motion.div>
      <div className={styles.cardC2Label}>고객 재계약률</div>
    </motion.div>
  );
}

// ─── 카드 CTA ─────────────────────────────────────────────────────────────────

const sparkles = [
  { cx: "50%", cy: "28%", r: 3,   delay: 0,    dur: 2.4 },
  { cx: "34%", cy: "18%", r: 2,   delay: 0.5,  dur: 2.8 },
  { cx: "66%", cy: "20%", r: 2.5, delay: 1.0,  dur: 2.2 },
  { cx: "22%", cy: "32%", r: 1.5, delay: 0.3,  dur: 3.0 },
  { cx: "78%", cy: "30%", r: 1.5, delay: 0.8,  dur: 2.6 },
  { cx: "50%", cy: "10%", r: 1.8, delay: 1.4,  dur: 2.9 },
  { cx: "42%", cy: "38%", r: 1.2, delay: 0.2,  dur: 3.2 },
  { cx: "60%", cy: "36%", r: 1.2, delay: 1.1,  dur: 2.5 },
];

function CardCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${styles.cardCTA}`}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{
        y: -6,
        scale: 1.03,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      {/* 배경 블롭 */}
      <div className={styles.ctaBlob} />

      {/* 상단 중앙 이펙트 — SVG 파티클 */}
      <div className={styles.ctaEffect}>
        <svg width="100%" height="100%" viewBox="0 0 200 80" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="ctaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#0055FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* 중앙 글로우 */}
          <ellipse cx="100" cy="40" rx="70" ry="36" fill="url(#ctaGlow)" />
          {/* 파티클 */}
          {sparkles.map((s, i) => (
            <circle
              key={i}
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill="#ffffff"
              className={styles.sparkle}
              style={{
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.dur}s`,
              }}
            />
          ))}
          {/* 가운데 별 */}
          <path
            d="M100 20 L102.3 26.9 L109.5 26.9 L103.9 31.1 L106.2 38 L100 33.8 L93.8 38 L96.1 31.1 L90.5 26.9 L97.7 26.9 Z"
            fill="#FFD700"
            className={styles.starPulse}
          />
        </svg>
      </div>

      {/* 텍스트 */}
      <div className={styles.ctaText}>
        <p className={styles.ctaQ}>광고를 해보고 싶으세요?</p>
        <p className={styles.ctaSub}>언제든지 문의해주세요!</p>
      </div>

      {/* 버튼 */}
      <Link href="/contact" className={styles.ctaBtn}>
        문의하기 →
      </Link>
    </motion.div>
  );
}

// ─── 카드 D (라이트 그레이) ───────────────────────────────────────────────────

const services = [
  "네이버 밴드 광고 전문 운영",
  "데이터 분석 · 리포팅",
  "소셜 광고",
  "밴드 홈, 목록, 새소식 광고",
];

function CardD() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${styles.cardD}`}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.15 }}
      whileHover={{
        y: -8,
        scale: 1.015,
        boxShadow: "0 28px 56px rgba(0,0,0,0.12)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      <p className={styles.cardDTitle}>
        원스톱<br />광고 솔루션
      </p>
      <div className={styles.serviceList}>
        {services.map((item, i) => (
          <div key={i} className={styles.serviceItem}>
            <div className={styles.serviceCheck}>✓</div>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={styles.cardDBottom}>핀잇 제공 서비스</div>
    </motion.div>
  );
}

// ─── 섹션 메인 ───────────────────────────────────────────────────────────────

export default function BentoSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!wrapperRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - wrapperRef.current.offsetLeft;
    scrollLeft.current = wrapperRef.current.scrollLeft;
    wrapperRef.current.classList.add(styles.grabbing);
  }, []);

  const onMouseLeave = useCallback(() => {
    isDragging.current = false;
    wrapperRef.current?.classList.remove(styles.grabbing);
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    wrapperRef.current?.classList.remove(styles.grabbing);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !wrapperRef.current) return;
    e.preventDefault();
    const x = e.pageX - wrapperRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    wrapperRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>네이버 밴드 NOW</p>
        <h2 className={styles.title}>성장하는 밴드, 지금이 기회입니다</h2>
      </div>

      <div
        ref={wrapperRef}
        className={styles.scrollWrapper}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className={styles.bentoGrid}>
          <CardA />
          <CardB />
          <CardC1 />
          <CardCTA />
          <CardD />
        </div>
      </div>

      <p className={styles.scrollHint}>← 좌우로 스크롤하세요 →</p>
    </section>
  );
}
