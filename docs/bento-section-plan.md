# BentoSection 구현 계획서

> StatsSection 위에 추가할 비대칭(언밸런스) 벤토 그리드 섹션
> **v2 업데이트**: 카드 크기 확대 + 가로 스크롤 + 호버 이펙트 추가 (2026-03-12)

---

## 1. 목표

- `StatsSection` 바로 위에 새 섹션 삽입
- 이미지처럼 크기가 서로 다른 카드들이 **비대칭**으로 배치되는 "벤토 그리드" 레이아웃
- MP인터랙티브의 핵심 강점/서비스를 임팩트 있게 시각화

---

## 2. 레이아웃 구조 (이미지 기반)

```
┌─────────────────┬───────────┬────────┬──────┐
│                 │           │ 카드C1 │      │
│    카드 A       │  카드 B   ├────────┤ 카드D│
│  (와이드/큰)    │ (그래프)  │ 카드C2 │      │
└─────────────────┴───────────┴────────┴──────┘
```

### CSS Grid 사명

| 컬럼 | 비율 | 카드 | 설명 |
|------|------|------|------|
| Col 1 | `2.2fr` | **카드 A** | 큰 메인 카드 (tall, wide) — 브랜드/강점 소개 |
| Col 2 | `1.5fr` | **카드 B** | 중형 — 가로 막대 그래프 (SNS 플랫폼 비교) |
| Col 3 | `1.2fr` | **카드 C1 + C2** | 두 개 작은 카드 세로 2단 스택 |
| Col 4 | `1.0fr` | **카드 D** | 세로 긴 카드 (tall) |

**행 구성**: 단일 행, 카드 높이는 CSS `grid-row` 로 제어

### ✅ v2: 카드 크기 확대 + 가로 스크롤 적용

카드 전체를 섹션 높이에 맞게 키우고, 컨테이너가 화면 너비를 초과하면 **가로 스크롤**로 자연스럽게 넘긴다.

```css
/* 섹션 래퍼 — 가로 스크롤 허용 */
.scrollWrapper {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;  /* iOS 부드러운 스크롤 */
  scrollbar-width: none;              /* Firefox 스크롤바 숨김 */
  padding: 0 24px 32px;
}
.scrollWrapper::-webkit-scrollbar {
  display: none;                      /* Chrome/Safari 스크롤바 숨김 */
}

/* 벤토 그리드 — 최소 너비 고정 (화면 초과 시 가로 스크롤 발생) */
.bentoGrid {
  display: grid;
  grid-template-columns: 420px 300px 240px 200px;  /* 고정 px → 총 1160px+ */
  grid-template-rows: 240px 240px;                  /* 행 높이 키움 (기존 160px → 240px) */
  gap: 20px;
  min-width: 1200px;   /* 이 너비 이하 화면에서 가로 스크롤 발동 */
}

/* 카드 A: 2행 전체 차지 (총 높이 = 240+240+20gap = 500px) */
.cardA { grid-row: 1 / 3; }

/* 카드 B: 2행 전체 차지 */
.cardB { grid-row: 1 / 3; }

/* 카드 C1, C2: 각 1행씩 (높이 240px) */
.cardC1 { grid-row: 1; }
.cardC2 { grid-row: 2; }

/* 카드 D: 2행 전체 차지 */
.cardD { grid-row: 1 / 3; }
```

**JSX 구조 반영:**
```tsx
<section className={styles.section}>
  <div className={styles.scrollWrapper}>   {/* ← 가로 스크롤 컨테이너 */}
    <div className={styles.bentoGrid}>
      <CardA />
      <CardB />
      <CardC1 />
      <CardC2 />
      <CardD />
    </div>
  </div>
</section>
```

---

## 3. 각 카드 콘텐츠 명세

### 카드 A — 브랜드 메인 카드 (큰 흰/크림 배경)
- **배경색**: `#EDEAE1` (라이트 크림)
- **크기**: 가장 크고, 2행 모두 차지 (세로로 가장 긴 카드)
- **내용**:
  - 큰 타이포 슬로건: "데이터 기반 광고, 성과로 증명합니다"
  - 부제: "네이버 · 구글 · SNS 통합 운영"
  - 하단에 CTA 버튼 또는 아이콘 뱃지들 (플랫폼 아이콘)
- **포인트**: 텍스트 크기 차이로 시선 집중

---

### 카드 B — SNS 플랫폼 막대 그래프 (오렌지/앰버 배경)
- **배경색**: `#F59E0B` (앰버/오렌지)
- **크기**: 2행 모두 차지
- **내용**:
  - 세로 막대 그래프 (Recharts `BarChart`)
  - 데이터: 카카오톡, 유튜브, 인스타그램, 네이버 밴드 (이미지와 동일)
  - 막대 색상: 진한 갈색 (`#92400E` 계열)
  - 마지막 막대(네이버 밴드)에 초록 `B` 로고 배지
  - X축 라벨: 카카오톡 / 유튜브 / 인스타그램 / 네이버 밴드
- **포인트**: 오렌지 배경으로 시선 집중

```tsx
const bentoBarData = [
  { app: "카카오톡", value: 90 },
  { app: "유튜브",   value: 82 },
  { app: "인스타그램", value: 50 },
  { app: "네이버 밴드", value: 36 },
];
```

---

### 카드 C1 — 수치 강조 카드 (퍼플/블루 배경)
- **배경색**: `#6366F1` (인디고/퍼플)
- **크기**: 1행만 (작은 카드)
- **내용**:
  - 큰 숫자 + 단위: `+340%` 또는 `ROAS 340%`
  - 부제: "평균 광고 수익률"
- **포인트**: 퍼플 배경 + 흰 텍스트

---

### 카드 C2 — 수치 강조 카드 (연한 스카이블루 배경)
- **배경색**: `#BAE6FD` (라이트 블루)
- **크기**: 1행만 (작은 카드)
- **내용**:
  - 숫자: `98%` 또는 `500+`
  - 부제: "고객 재계약률" 또는 "운영 캠페인"
- **포인트**: 밝은 파랑 배경 + 다크 텍스트

---

### 카드 D — 세로 긴 카드 (연한 회색/흰 배경)
- **배경색**: `#F1F5F9` (라이트 슬레이트)
- **크기**: 2행 모두 차지 (Col 4)
- **내용**:
  - 아이콘 + 짧은 키워드 리스트 (세로 스택)
  - 예: 네이버 광고 ✓ / 구글 광고 ✓ / SNS 광고 ✓ / 데이터 분석 ✓
  - 또는 업력/파트너 로고 뱃지
- **포인트**: 가장 오른쪽, 조용한 보조 카드

---

## 4. 반응형 처리 (v2: 가로 스크롤 전략)

> 모든 화면 크기에서 **가로 스크롤**로 통일. 별도 미디어 쿼리 없이 `min-width` 고정으로 처리.

| 브레이크포인트 | 동작 |
|---|---|
| `>= 1200px` | 그리드가 뷰포트 안에 딱 맞게 보임 |
| `< 1200px` | 가로 스크롤 발동 — 카드들이 잘리지 않고 옆으로 스크롤 |
| 모바일 | 동일하게 가로 스크롤 (카드 크기 그대로 유지, 터치 스와이프) |

**스크롤 UX 개선 옵션:**
- 섹션 하단에 "← 스크롤하여 더 보기 →" 힌트 텍스트 표시 (모바일만)
- 드래그 스크롤 지원 (마우스 드래그로도 가로 이동): `mousedown` / `mousemove` 이벤트 처리

---

## 5. 파일 생성 목록

| 파일 | 역할 |
|------|------|
| `src/components/home/BentoSection.tsx` | 섹션 메인 컴포넌트 |
| `src/components/home/BentoSection.module.css` | 그리드 레이아웃 CSS Module |

---

## 6. page.tsx 수정

```tsx
// src/app/page.tsx
import BentoSection from "@/components/home/BentoSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BentoSection />        {/* ← 여기에 추가 (StatsSection 위) */}
      <StatsSection />
      <TrendSection />
      ...
    </>
  );
}
```

---

## 7. 컴포넌트 스켈레톤 (구현 시작점)

```tsx
// BentoSection.tsx 구조
export default function BentoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bentoGrid}>
        <CardA />   {/* Col1, 2행 */}
        <CardB />   {/* Col2, 2행 — 오렌지 + 막대그래프 */}
        <CardC1 />  {/* Col3, 1행 — 퍼플 */}
        <CardC2 />  {/* Col3, 2행 — 라이트블루 */}
        <CardD />   {/* Col4, 2행 */}
      </div>
    </section>
  );
}
```

---

## 8. 디자인 참고 색상 (이미지 기준)

| 카드 | 배경 | 텍스트 |
|------|------|--------|
| A (큰 카드) | `#FFFFFF` or `#EDEAE1` | `#1C1814` |
| B (그래프) | `#F59E0B` (오렌지) | `#78350F` (다크브라운) |
| C1 (수치) | `#6366F1` (퍼플) | `#FFFFFF` |
| C2 (수치) | `#BAE6FD` (스카이블루) | `#0C4A6E` |
| D (세로) | `#F1F5F9` (라이트그레이) | `#334155` |

---

## 9. 애니메이션 & 호버 이펙트 (v2 상세 명세)

### 진입 애니메이션
- Framer Motion `useInView` + `initial={{ y: 30, opacity: 0 }}` → `animate={{ y: 0, opacity: 1 }}`
- 각 카드 `delay` 값: A=0, B=0.1, C1=0.2, C2=0.3, D=0.15

---

### ✅ v2 호버 이펙트 (카드별 개별 지정)

#### 공통 기본 트랜지션
```tsx
transition={{ duration: 0.25, ease: "easeOut" }}
```

#### 카드 A (브랜드 메인 — 크림)
```tsx
whileHover={{
  y: -8,
  scale: 1.015,
  boxShadow: "0 24px 48px rgba(0,85,255,0.15)",  // 블루 그림자
}}
```
- 배경 내부: 슬로건 텍스트 색상 `#0055FF` 로 변환 (`transition: color 0.3s`)

#### 카드 B (그래프 — 오렌지)
```tsx
whileHover={{
  y: -8,
  scale: 1.02,
  boxShadow: "0 24px 48px rgba(245,158,11,0.35)",  // 오렌지 글로우
}}
```
- 막대그래프: 호버 시 `activeBar` 강조 (Recharts 기본 지원)
- 배경 밝기 약간 올림: `filter: brightness(1.05)`

#### 카드 C1 (퍼플 수치)
```tsx
whileHover={{
  y: -6,
  scale: 1.03,
  boxShadow: "0 20px 40px rgba(99,102,241,0.4)",   // 퍼플 글로우
}}
```
- 숫자 텍스트: 호버 시 scale 1.05 (중첩 motion.span으로 처리)

#### 카드 C2 (스카이블루 수치)
```tsx
whileHover={{
  y: -6,
  scale: 1.03,
  boxShadow: "0 20px 40px rgba(186,230,253,0.5)",
  backgroundColor: "#7DD3FC",  // 약간 진해짐
}}
```

#### 카드 D (서비스 리스트 — 그레이)
```tsx
whileHover={{
  y: -8,
  scale: 1.015,
  boxShadow: "0 24px 48px rgba(0,0,0,0.12)",
}}
```
- 체크리스트 아이템: 호버 시 아이콘 색상 `#0055FF` 전환

---

### CSS 기반 보조 효과 (Framer Motion과 병행)

```css
/* 카드 공통 */
.bentoCard {
  border-radius: 20px;
  transition: border-color 0.25s ease;
  border: 2px solid transparent;
}

/* 호버 시 테두리 강조 */
.cardA:hover  { border-color: rgba(0, 85, 255, 0.3); }
.cardB:hover  { border-color: rgba(245, 158, 11, 0.5); }
.cardC1:hover { border-color: rgba(99, 102, 241, 0.5); }
.cardC2:hover { border-color: rgba(125, 211, 252, 0.7); }
.cardD:hover  { border-color: rgba(0, 85, 255, 0.2); }
```

---

### 마우스 드래그 스크롤 (데스크탑 가로 스크롤 UX)

```tsx
// scrollWrapper ref에 마우스 드래그 처리
const wrapperRef = useRef<HTMLDivElement>(null);
let isDown = false;
let startX = 0;
let scrollLeft = 0;

onMouseDown  → isDown=true, startX, scrollLeft 기록
onMouseLeave → isDown=false
onMouseUp    → isDown=false
onMouseMove  → isDown 이면 scrollLeft 계산해서 wrapperRef.current.scrollLeft 업데이트
```

---

## 10. 구현 우선순위

1. `BentoSection.module.css` — 그리드 레이아웃 먼저 잡기
2. 카드 B (그래프 카드) — Recharts 재활용
3. 나머지 카드 순서대로
4. 반응형 미디어 쿼리
5. 애니메이션 추가
6. `page.tsx` 에 삽입 후 확인

---

*작성일: 2026-03-12*
