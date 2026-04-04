"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Cell,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import styles from "./StatsSection.module.css";

// ─── 데이터 ──────────────────────────────────────────────────────────────────

const lineData = [
  { year: "'20", value: 5000 },
  { year: "'21", value: 7500 },
  { year: "'22", value: 9800 },
  { year: "'23", value: 11500 },
  { year: "'24", value: 13000 },
];

const barData = [
  { app: "카카오톡", value: 4500 },
  { app: "유튜브", value: 4100 },
  { app: "인스타", value: 2300 },
  { app: "밴드", value: 1800 },
];

// ─── 공통 카드 래퍼 ──────────────────────────────────────────────────────────

function StatCard({
  delay,
  children,
}: {
  delay: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={styles.statsCard}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      {children}
    </motion.div>
  );
}

// ─── 카드 1: 글로벌 가입자 (꺾은선 그래프) ───────────────────────────────────

function Card01GlobalUsers() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <StatCard delay={0}>
      <div ref={ref}>
        <span style={{ fontSize: 32 }}>🌍</span>
        <div style={{ marginTop: 8 }}>
          <ResponsiveContainer width="100%" height={120}>
            <AreaChart
              data={lineData}
              margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
            >
              <defs>
                <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00C853" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#00C853" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="year"
                tick={{ fontSize: 11, fill: "#8888AA" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "none",
                  borderRadius: 8,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  color: "#00C853",
                }}
                formatter={(value) => [
                  `${(Number(value) / 100).toFixed(0)}만명`,
                  "가입자",
                ]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#00C853"
                strokeWidth={2.5}
                fill="url(#greenGrad)"
                dot={{ fill: "#00C853", r: 4, strokeWidth: 0 }}
                activeDot={{ r: 6, fill: "#00E676" }}
                isAnimationActive={isInView}
                animationDuration={1500}
                animationBegin={300}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.statsNumber}>1억 3,000만명</div>
        <div className={styles.statsLabel}>글로벌 가입자 돌파</div>
        <div className={styles.statsDesc}>글로벌 커뮤니티 앱으로 도약 중</div>
      </div>
    </StatCard>
  );
}

// ─── 카드 2: 국내 MAU (막대그래프) ──────────────────────────────────────────

const CustomYAxisTick = (props: {
  x?: number;
  y?: number;
  payload?: { value: string };
}) => {
  const { x = 0, y = 0, payload } = props;
  const isBand = payload?.value === "밴드";
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={-4}
        y={0}
        dy={4}
        textAnchor="end"
        fontSize={11}
        fill={isBand ? "#00C853" : "#6B6B8A"}
        fontWeight={isBand ? 700 : 400}
      >
        {isBand ? "밴드 🥉" : payload?.value}
      </text>
    </g>
  );
};

function Card02DomesticMAU() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <StatCard delay={0.1}>
      <div ref={ref}>
        {/* 밴드 로고 대체 아이콘 */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "linear-gradient(135deg, #00C853, #00E676)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 900,
            fontSize: 18,
          }}
        >
          B
        </div>
        <div style={{ marginTop: 12 }}>
          <ResponsiveContainer width="100%" height={140}>
            <BarChart
              layout="vertical"
              data={barData}
              margin={{ top: 0, right: 55, left: 10, bottom: 0 }}
            >
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="app"
                tick={<CustomYAxisTick />}
                width={55}
                axisLine={false}
                tickLine={false}
              />
              <Bar
                dataKey="value"
                barSize={18}
                radius={[0, 6, 6, 0]}
                isAnimationActive={isInView}
                animationDuration={1200}
                animationBegin={300}
              >
                {barData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.app === "밴드" ? "#00C853" : "#C8F5D0"}
                  />
                ))}
                <LabelList
                  dataKey="value"
                  position="right"
                  formatter={(value) =>
                    Number(value) === 1800 ? "1,800만" : ""
                  }
                  style={{ fill: "#00C853", fontSize: 11, fontWeight: 700 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.statsNumber}>
          1,800만{" "}
          <span
            style={{
              fontSize: "1.2rem",
              background: "#C8F5D0",
              color: "#00A040",
              borderRadius: 999,
              padding: "2px 10px",
              fontWeight: 700,
              verticalAlign: "middle",
            }}
          >
            4위
          </span>
        </div>
        <div className={styles.statsLabel}>국내 MAU</div>
        <div className={styles.statsDesc}>카카오톡·유튜브·인스타그램 다음</div>
      </div>
    </StatCard>
  );
}

// ─── 카드 3: 소셜미디어 이용률 (소수점 카운트업) ─────────────────────────────

function useDecimalCountUp(
  end: number,
  decimals: number,
  duration: number,
  active: boolean
) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const elapsed = (ts - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((end * eased).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(end);
    }
    requestAnimationFrame(animate);
  }, [active, end, decimals, duration]);
  return value;
}

function Card03SocialRate() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useDecimalCountUp(28.6, 1, 1.5, isInView);

  return (
    <StatCard delay={0.2}>
      <div ref={ref}>
        <span style={{ fontSize: 32 }}>📊</span>
        <div className={styles.statsNumber}>
          {count.toFixed(1)}
          <sup style={{ fontSize: "2rem", verticalAlign: "super" }}>%</sup>
        </div>
        <div className={styles.statsLabel}>소셜미디어 이용률</div>
        <div className={styles.statsDesc}>
          페이스북·틱톡보다 높은 국내 이용률
        </div>
      </div>
    </StatCard>
  );
}

// ─── 카드 4: 미국 MAU (카운트업 + pill 배지) ─────────────────────────────────

function Card04UsaMAU() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const elapsed = (ts - startTime) / 1000;
      const progress = Math.min(elapsed / 1.5, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(710 * eased));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(710);
    }
    requestAnimationFrame(animate);
  }, [isInView]);

  const pillStyle: React.CSSProperties = {
    background: "#C8F5D0",
    color: "#00A040",
    borderRadius: 999,
    padding: "2px 10px",
    fontSize: 11,
  };

  return (
    <StatCard delay={0.3}>
      <div ref={ref}>
        <span style={{ fontSize: 32 }}>🇺🇸</span>
        <div className={styles.statsNumber}>{count}만</div>
        <div className={styles.statsLabel}>미국 MAU</div>
        <div className={styles.statsDesc}>미국 고등학생 중심으로 열풍</div>
        <div
          style={{
            color: "#00C853",
            fontSize: "0.875rem",
            fontStyle: "italic",
            marginTop: 6,
          }}
        >
          곧 밴드의 붐이 옵니다
        </div>
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <span style={pillStyle}>600만</span>
          <span style={{ color: "#00C853", fontSize: 12 }}>→ ↑</span>
          <span style={pillStyle}>710만 ↑</span>
        </div>
      </div>
    </StatCard>
  );
}

// ─── 섹션 메인 ───────────────────────────────────────────────────────────────

export default function StatsSection() {
  return (
    <section style={{ background: "#0F1129", padding: "80px 24px" }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
        {/* 섹션 헤더 */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p
            style={{
              color: "#00C853",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            데이터가 증명하는 광고 효과
          </p>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 900,
              fontFamily: "Pretendard, sans-serif",
              lineHeight: 1.2,
            }}
          >
            숫자로 보는 광고 플랫폼 현황
          </h2>
        </div>

        {/* 2×2 카드 그리드 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <Card01GlobalUsers />
          <Card02DomesticMAU />
          <Card03SocialRate />
          <Card04UsaMAU />
        </div>
      </div>
    </section>
  );
}
