# 📊 Stats 섹션 카드 디자인 프롬프트

> ⚠️ 이 프롬프트는 **Stats 섹션(StatCard 컴포넌트 4개)에만** 적용됩니다.
> 다른 섹션(Hero, Services, Header, Footer 등)은 절대 건드리지 마세요.

---

## 적용 범위

```
수정 대상:  src/components/home/StatsSection.tsx 및 하위 카드 컴포넌트만
수정 금지:  globals.css, layout.tsx, Header, Footer, HeroSection,
           ServicesSection, ProcessSection, CtaSection, 기타 모든 파일
```

---

## 1. 섹션 전체 레이아웃

```tsx
<section className="stats-section">
  {/* 배경: 다크 네이비 — Stats 섹션에만 적용되는 인라인 스타일 */}
  {/* background: #0F1129, padding: 80px 24px */}

  {/* 섹션 제목 */}
  <SectionHeader
    title="숫자로 보는 광고 플랫폼 현황"
    subtitle="데이터가 증명하는 광고 효과"
    // 제목 컬러: 흰색 (다크 배경 위)
  />

  {/* 2×2 카드 그리드 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
    <StatCard01_GlobalUsers />    {/* 꺾은선 그래프 카드 */}
    <StatCard02_DomesticMAU />    {/* 막대그래프 카드 */}
    <StatCard03_SocialRate />     {/* 숫자 강조 카드 */}
    <StatCard04_UsaMAU />         {/* 숫자 강조 카드 */}
  </div>
</section>
```

---

## 2. 카드 공통 스타일

Stats 섹션 카드에만 적용되는 전용 클래스. StatsSection.module.css 또는
StatsSection.tsx 내부에서만 처리. globals.css 수정 금지.

```css
/* stats-card 전용 */
.stats-card {
  background: #F0EDE3;
  border-radius: 20px;
  padding: 32px 28px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.10);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.stats-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 200, 83, 0.15);
}
.stats-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: linear-gradient(90deg, #00C853 0%, #00E5FF 100%);
  border-radius: 20px 20px 0 0;
}
.stats-number {
  color: #00C853;
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;
}
.stats-label {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1A1A2E;
  margin-top: 4px;
}
.stats-desc {
  font-size: 0.875rem;
  color: #6B6B8A;
  margin-top: 8px;
}
```

---

## 3. 스크롤 진입 애니메이션 (4장 공통)

```
Framer Motion useInView — StatsSection 내부에서만 처리

카드 4장 순차 등장:
  카드 1: delay 0s
  카드 2: delay 0.1s
  카드 3: delay 0.2s
  카드 4: delay 0.3s

각 카드: y: 30 → 0, opacity: 0 → 1, duration: 0.5s ease
```

---

## 4. 카드 1 — 글로벌 가입자 (꺾은선 그래프)

```
콘텐츠:
  이모지:   🌍 (32px, 상단 왼쪽)
  그래프:   Recharts LineChart (꺾은선, 카드 내부 중앙)
  수치:    "1억 3,000만명" (네온 그린 #00C853, 2rem, 900)
  레이블:  "글로벌 가입자 돌파" (진한 #1A1A2E, 1rem bold)
  설명:    "글로벌 커뮤니티 앱으로 도약 중" (회색 #6B6B8A, 0.85rem)

LineChart 명세:
  width="100%" height={120}
  데이터:
    [
      { year: "'20", value: 5000 },
      { year: "'21", value: 7500 },
      { year: "'22", value: 9800 },
      { year: "'23", value: 11500 },
      { year: "'24", value: 13000 },
    ]
  선: stroke="#00C853", strokeWidth=2.5, type="monotone"
  dot: { fill: "#00C853", r: 4, strokeWidth: 0 }
  activeDot: { r: 6, fill: "#00E676" }

  영역 fill:
    <defs>
      <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#00C853" stopOpacity={0.25}/>
        <stop offset="100%" stopColor="#00C853" stopOpacity={0}/>
      </linearGradient>
    </defs>

  축: XAxis(year, 11px, #8888AA) / YAxis(hide) / CartesianGrid(hide)
  툴팁: 흰 배경, 그린 텍스트, "X만명" 포맷

  마지막 포인트 위 말풍선:
    <ReferenceLine> or <Label> → "13,000만"
    스타일: 흰 pill 배경, #00C853 텍스트, 그림자

  애니메이션:
    카드 진입 후 0.3s 뒤 시작
    isAnimationActive={true}, animationDuration={1500}

카드 내 레이아웃 순서:
  1. 이모지 🌍
  2. LineChart
  3. 수치 "1억 3,000만명"
  4. 레이블 "글로벌 가입자 돌파"
  5. 설명 "글로벌 커뮤니티 앱으로 도약 중"
```

---

## 5. 카드 2 — 국내 MAU (막대그래프 + 밴드 순위)

```
콘텐츠:
  아이콘:   밴드 로고 (36px)
            공식 SVG 없을 경우 대체 →
              width/height: 36px, borderRadius: 10px
              background: linear-gradient(135deg, #00C853, #00E676)
              color: white, fontWeight: 900, fontSize: 18px, 텍스트: "B"
  그래프:   Recharts BarChart 가로 막대
  수치:    "1,800만" + "4위" 뱃지 인라인
  레이블:  "국내 MAU"
  설명:    "카카오톡·유튜브·인스타그램 다음"

BarChart 명세:
  layout="vertical", width="100%", height={140}
  데이터:
    [
      { app: "카카오톡", value: 4500 },
      { app: "유튜브",   value: 4100 },
      { app: "인스타",   value: 2300 },
      { app: "밴드",     value: 1800 },
    ]

  막대:
    기본: fill="#C8F5D0"
    밴드만: <Cell fill="#00C853"/>
    borderRadius: [0, 6, 6, 0], barSize={18}

  밴드 막대 끝 레이블:
    <LabelList position="right"> → "1,800만"
    color: #00C853, fontSize: 11px, bold

  YAxis tick 커스텀:
    밴드 항목에만 "🥉4위" 뱃지 인라인
    뱃지: 그린 pill 배경, 흰 텍스트, 8px

  축: YAxis(app, 11px, #6B6B8A) / XAxis(hide) / CartesianGrid(hide) / Tooltip(hide)

  애니메이션:
    animationDuration={1200}, animationBegin={300}

카드 내 레이아웃 순서:
  1. 밴드 아이콘 (36px, 상단 왼쪽)
  2. BarChart (height 140px)
  3. 수치 "1,800만" + "4위" 뱃지
  4. 레이블 "국내 MAU"
  5. 설명 "카카오톡·유튜브·인스타그램 다음"
```

---

## 6. 카드 3 — 소셜미디어 이용률 (숫자 강조형)

```
콘텐츠:
  이모지:   📊 (32px, 상단 왼쪽)
  수치:    "28.6%" (네온 그린 #00C853, 3rem, 900)
           → "%" 단위 2rem, superscript 스타일로 오른쪽 상단
  레이블:  "소셜미디어 이용률" (#1A1A2E, 1.1rem bold)
  설명:    "페이스북·틱톡보다 높은 국내 이용률" (#6B6B8A, 0.875rem)

그래프: 없음

애니메이션:
  스크롤 진입 시 0% → 28.6% 카운트업 (1.5s, 소수점 1자리)

카드 내 레이아웃 순서:
  1. 이모지 📊
  2. 수치 "28.6%"
  3. 레이블 "소셜미디어 이용률"
  4. 설명 "페이스북·틱톡보다 높은 국내 이용률"
```

---

## 7. 카드 4 — 미국 MAU (숫자 강조형)

```
콘텐츠:
  이모지:   🇺🇸 (32px, 상단 왼쪽)
  수치:    "710만" (네온 그린 #00C853, 3rem, 900)
  레이블:  "미국 MAU" (#1A1A2E, 1.1rem bold)
  설명:    "미국 고등학생 중심으로 열풍" (#6B6B8A, 0.875rem)
  서브:    "곧 밴드의 붐이 옵니다" (#00C853, 0.875rem, italic)

성장 pill 배지 (설명 아래):
  [600만]  →(↑)→  [710만 ↑]
  pill 스타일:
    background: #C8F5D0
    color: #00A040
    border-radius: 999px
    padding: 2px 10px
    font-size: 11px

애니메이션:
  스크롤 진입 시 0 → 710 카운트업 (1.5s)

카드 내 레이아웃 순서:
  1. 이모지 🇺🇸
  2. 수치 "710만"
  3. 레이블 "미국 MAU"
  4. 설명 "미국 고등학생 중심으로 열풍"
  5. 서브 "곧 밴드의 붐이 옵니다"
  6. pill 배지 [600만 → 710만 ↑]
```

---

## 8. Claude Code 전달 방법

```
StatsSection.tsx와 하위 카드 컴포넌트(StatCard01~04)만
위 명세대로 새로 작성 또는 수정해줘.

아래 파일들은 절대 수정하지 말 것:
  - globals.css
  - layout.tsx
  - Header.tsx / Footer.tsx
  - HeroSection.tsx
  - ServicesSection.tsx
  - ProcessSection.tsx
  - CtaSection.tsx
  - 기타 모든 파일

카드 스타일은 StatsSection.module.css로 분리하거나
StatsSection.tsx 내부 인라인으로만 처리할 것.
```