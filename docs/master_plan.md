# 🚀 MP인터랙티브 광고대행사 사이트 — Claude Code 마스터 프롬프트

> 이 파일을 Claude Code에 그대로 붙여넣으면 전체 프로젝트가 생성됩니다.

---

## 📋 프롬프트 전문 (여기서부터 복사)

---

아래 명세에 따라 광고대행사 브랜딩 웹사이트를 처음부터 끝까지 완전하게 구현해줘.
코드 일부가 아닌 실제로 실행 가능한 전체 프로젝트를 만들어야 해.

---

## 1. 프로젝트 기본 정보

- **회사명**: MP인터랙티브
- **업종**: 디지털 광고 대행사 (네이버광고, 구글광고, SNS광고)
- **목적**: 브랜딩 + 잠재 고객 유치 + 검색엔진 노출 (네이버, 구글)
- **배포**: Vercel
- **도메인**: 추후 커스텀 도메인 연결 예정

---

## 2. 기술 스택

```
Framework:     Next.js 14 (App Router)
Language:      TypeScript
Styling:       Tailwind CSS
Animation:     Framer Motion
Icons:         Lucide React
Font:          Noto Sans KR (Google Fonts) + Pretendard
Content:       MDX (블로그/포트폴리오 파일 기반 관리)
Form:          React Hook Form
Email:         Nodemailer (문의하기 API)
Analytics:     Google Analytics 4 (환경변수로 주입)
SEO:           Next.js 내장 Metadata API
배포:          Vercel (vercel.json 포함)
```

---

## 3. 전체 폴더 구조

```
mp-interactive/
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # 전역 레이아웃, 메타태그, Schema.org
│   │   ├── page.tsx                     # 메인 홈페이지
│   │   ├── sitemap.ts                   # 자동 sitemap.xml 생성
│   │   ├── robots.ts                    # robots.txt 생성
│   │   ├── globals.css                  # 전역 스타일, CSS 변수
│   │   ├── services/
│   │   │   ├── page.tsx                 # 서비스 전체 목록
│   │   │   ├── naver-ads/page.tsx       # 네이버 광고 전문 페이지
│   │   │   ├── google-ads/page.tsx      # 구글 광고 전문 페이지
│   │   │   └── sns-ads/page.tsx         # SNS 광고 전문 페이지
│   │   ├── portfolio/
│   │   │   └── page.tsx                 # 포트폴리오/실적
│   │   ├── blog/
│   │   │   ├── page.tsx                 # 블로그 목록
│   │   │   └── [slug]/page.tsx          # 블로그 상세 (동적 라우팅)
│   │   ├── contact/
│   │   │   └── page.tsx                 # 문의하기 페이지
│   │   └── api/
│   │       └── contact/route.ts         # 문의 이메일 발송 API
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx               # 고정 헤더, 스크롤 감지
│   │   │   └── Footer.tsx               # 푸터
│   │   ├── home/
│   │   │   ├── HeroSection.tsx          # 히어로 (파티클 + 타이핑)
│   │   │   ├── StatsSection.tsx         # 숫자 카운트업 실적
│   │   │   ├── ServicesSection.tsx      # 서비스 카드 그리드
│   │   │   ├── ProcessSection.tsx       # 광고 집행 프로세스
│   │   │   ├── PortfolioSection.tsx     # 포트폴리오 미리보기
│   │   │   ├── TestimonialsSection.tsx  # 고객 후기
│   │   │   └── CtaSection.tsx           # 하단 CTA
│   │   ├── common/
│   │   │   ├── FadeInSection.tsx        # 스크롤 페이드인 래퍼
│   │   │   ├── CountUpNumber.tsx        # 숫자 카운트업
│   │   │   ├── TypingText.tsx           # 타이핑 텍스트 효과
│   │   │   └── ParticleBackground.tsx   # 파티클 배경
│   │   └── blog/
│   │       ├── BlogCard.tsx             # 블로그 카드
│   │       └── MDXContent.tsx           # MDX 렌더러
│   ├── content/
│   │   ├── blog/
│   │   │   ├── naver-ads-guide-2024.mdx
│   │   │   ├── google-ads-tips.mdx
│   │   │   └── sns-ads-beginner.mdx
│   │   └── portfolio/
│   │       ├── case-study-01.mdx
│   │       └── case-study-02.mdx
│   └── lib/
│       ├── metadata.ts                  # 메타태그 헬퍼
│       ├── mdx.ts                       # MDX 파일 파싱 유틸
│       └── constants.ts                 # 사이트 상수 (회사명, 연락처 등)
├── public/
│   ├── og-image.jpg                     # OG 이미지 (1200x630)
│   └── favicon.ico
├── vercel.json                          # 캐시 헤더, 리다이렉트 설정
├── next.config.js                       # MDX, 이미지 도메인 설정
└── .env.local.example                   # 환경변수 예시
```

---

## 4. 디자인 시스템

### 4-1. 컬러 팔레트

```css
/* globals.css CSS 변수 */
:root {
  --color-primary:     #0055FF;   /* 메인 블루 — CTA, 포인트 */
  --color-primary-dark:#0033CC;   /* 호버 상태 */
  --color-accent:      #00D4FF;   /* 네온 시안 — 그라디언트 끝, 강조 */
  --color-dark:        #0A0A0F;   /* 배경 (거의 검정) */
  --color-dark-card:   #12121A;   /* 카드 배경 */
  --color-dark-border: #1E1E2E;   /* 보더 */
  --color-text-primary:#FFFFFF;   /* 본문 */
  --color-text-muted:  #8888AA;   /* 서브텍스트 */
  --color-text-accent: #00D4FF;   /* 강조 텍스트 */
  --gradient-hero: linear-gradient(135deg, #0055FF 0%, #00D4FF 100%);
  --gradient-card: linear-gradient(145deg, #12121A, #1E1E2E);
}
```

**전체 테마: 다크 테마 기반**
배경은 거의 검정에 가까운 네이비 (#0A0A0F), 포인트는 전기 블루~시안 그라디언트.
고급스러운 테크/마케팅 느낌.

### 4-2. 타이포그래피

```css
/* 제목 (H1~H3): Pretendard ExtraBold/Bold */
/* 본문: Noto Sans KR Regular/Medium */
/* 강조 숫자: Pretendard Black (숫자 카운트업 등) */

font-size scale:
  display:  4.5rem / 900 weight  (히어로 메인 타이틀)
  h1:       3rem   / 800 weight
  h2:       2rem   / 700 weight
  h3:       1.5rem / 600 weight
  body:     1rem   / 400 weight
  small:    0.875rem
```

### 4-3. 공통 컴포넌트 스타일

```
카드:        배경 #12121A, 보더 1px #1E1E2E, 반경 16px
             호버시: 보더 #0055FF, 위로 4px 이동 (translateY), 블루 글로우 shadow
버튼 (Primary): 배경 그라디언트(블루→시안), 텍스트 흰색, 반경 8px
               호버시: 밝아지며 scale(1.02), 글로우 효과
버튼 (Ghost):   보더 1px #0055FF, 텍스트 #0055FF
               호버시: 배경 #0055FF, 텍스트 흰색
섹션 간격:    py-24 (모바일 py-16)
```

---

## 5. 페이지별 상세 설계

---

### 🏠 메인 홈 (/)

#### Section 1 — Hero

```
레이아웃: 전체 화면 높이 (100vh), 중앙 정렬, 다크 배경
배경:     파티클 네트워크 애니메이션 (작은 점들이 선으로 연결되며 떠다님)
          + 배경에 블루/시안 그라디언트 원형 글로우 2개 (blur 효과)

콘텐츠 (순서대로 stagger 애니메이션으로 아래서 올라옴):
  1. 상단 뱃지: "🔥 데이터 기반 광고 전문 대행사" (작은 pill 형태)
  2. 메인 타이틀 (2줄):
     "매출을 올리는"
     "디지털 광고 전략" ← "디지털 광고"는 그라디언트 텍스트(블루→시안)
  3. 서브타이틀: 타이핑 텍스트 효과
     → "네이버 광고", "구글 광고", "SNS 광고", "퍼포먼스 마케팅" 순환
     → "저희는 [        ] 전문입니다" 형태
  4. 설명 텍스트: "데이터와 경험으로 광고비를 낭비 없이 집행합니다."
  5. CTA 버튼 2개 (나란히):
     - "무료 광고 상담 받기" (Primary, 크게)
     - "서비스 보기" (Ghost)
  6. 하단 스크롤 인디케이터 (마우스 아이콘 + bounce 애니메이션)

우측 (데스크탑):
  부동하는 3개의 "실적 카드" (glassmorphism 스타일, 서로 다른 위치에 float):
  - "클릭률 340% 상승"
  - "광고비 절감 45%"
  - "월 신규 문의 127건"
  각 카드는 살짝 다른 속도로 위아래로 떠다니는 애니메이션
```

#### Section 2 — Stats (실적 수치)

```
레이아웃: 4열 그리드 (모바일 2열)
배경:     약간 밝은 카드 배경 (#12121A)

항목 4개 (스크롤 시 카운트업 시작):
  - 누적 광고 집행액: "100억+" / "국내 상위 광고 대행사"
  - 파트너사 수: "200+" / "다양한 업종 경험"
  - 평균 ROI: "340%" / "광고비 대비 매출"
  - 고객 만족도: "98%" / "재계약률 기준"

각 항목: 큰 숫자(그라디언트) + 단위 + 설명 레이블
```

#### Section 3 — Services (서비스)

```
레이아웃: 상단 섹션 제목 + 3열 카드 그리드 (모바일 1열)
섹션 제목: "우리가 잘하는 것"
서브: "업종별 최적화된 광고 전략으로 실질적인 성과를 만듭니다"

카드 3개:
  1. 네이버 광고
     아이콘: 초록색 N 로고 스타일 아이콘
     제목: "네이버 광고"
     설명: "검색광고·쇼핑광고·디스플레이광고 전문. 국내 1위 검색엔진에서 정확한 타겟에게 노출합니다."
     기능 리스트: ["검색광고", "쇼핑광고", "브랜드검색", "GFA 디스플레이"]
     링크: /services/naver-ads

  2. 구글 광고
     아이콘: 구글 컬러 G 스타일 아이콘
     제목: "구글 광고"
     설명: "글로벌 검색광고·유튜브광고·GDN 전문. 전 세계 고객을 정확하게 타겟팅합니다."
     기능 리스트: ["검색광고", "유튜브광고", "GDN", "쇼핑광고"]
     링크: /services/google-ads

  3. SNS 광고
     아이콘: 인스타/페북 그라디언트 스타일 아이콘
     제목: "SNS 광고"
     설명: "인스타그램·페이스북·카카오·틱톡 광고 전문. 바이럴부터 전환까지 성과를 만듭니다."
     기능 리스트: ["인스타그램", "페이스북", "카카오", "틱톡"]
     링크: /services/sns-ads

카드 호버: 위로 8px 이동 + 상단 보더 블루로 변경 + 배경 약간 밝아짐
```

#### Section 4 — Process (진행 프로세스)

```
레이아웃: 번호 타임라인 형식 (데스크탑 가로, 모바일 세로)
제목: "광고 집행 프로세스"
서브: "상담부터 성과 리포트까지, 체계적으로 진행합니다"

단계 5개 (각 단계 스크롤 시 순차적으로 나타남):
  01 → 무료 상담    "업종, 예산, 목표를 파악합니다"
  02 → 전략 수립   "데이터 분석 기반 맞춤 전략을 수립합니다"
  03 → 광고 집행   "정확한 타겟팅으로 광고를 시작합니다"
  04 → 최적화      "A/B 테스트로 지속 성과를 개선합니다"
  05 → 리포트      "주간/월간 성과 리포트를 제공합니다"

각 단계 사이: 점선 화살표 (→)
번호: 큰 그라디언트 텍스트
```

#### Section 5 — Portfolio Preview (포트폴리오)

```
레이아웃: 제목 + "전체 보기" 버튼 + 카드 3개 가로 스크롤
제목: "실제 성과 사례"

포트폴리오 카드 (MDX에서 최신 3개 읽어서 렌더링):
  카드 내용: 업종 뱃지 + 제목 + 핵심 수치 (예: "전환율 280% 상승") + 설명 요약

하단: "/portfolio 전체 사례 보기 →" 링크
```

#### Section 6 — Testimonials (고객 후기)

```
레이아웃: 슬라이더 (자동 재생 3초, 좌우 화살표)
카드형 후기 3~5개:

후기 카드 구성:
  - 별점 (5개 별)
  - 후기 내용 텍스트
  - 고객 정보: "OOO 대표님 / 쇼핑몰 업종"

데이터 (하드코딩, 나중에 MDX로 변경 가능):
  1. "네이버 광고를 직접 하다가 맡겼는데 2달 만에 문의가 3배 늘었어요." - 뷰티샵 대표
  2. "구글 광고 전혀 몰랐는데 해외 주문이 생기기 시작했습니다." - 쇼핑몰 대표
  3. "광고비는 그대로인데 매출이 늘었어요. 최적화 실력이 대단합니다." - 인테리어 업체 대표
```

#### Section 7 — CTA (하단 Call To Action)

```
레이아웃: 풀 와이드 블루 그라디언트 배경 섹션
큰 제목: "지금 바로 무료 상담 시작하세요"
서브: "24시간 내 담당자가 연락드립니다"
버튼: "무료 상담 신청하기" (흰색 배경, 블루 텍스트)
하단: 전화번호 + 카카오 채널 링크
```

---

### 🗂️ 서비스 목록 (/services)

```
히어로: 미니 히어로 (50vh), "서비스 소개" 제목
서비스 3개 상세 카드 (각 카드 클릭 시 전용 페이지로):
  - 더 많은 설명, 가격 안내, 진행 방식
하단: 공통 CTA
```

---

### 📄 서비스 전용 페이지 (/services/naver-ads 등)

각 서비스 페이지 공통 구조:

```
1. 히어로 섹션
   - 제목: "네이버 광고 전문 대행" (H1, SEO 핵심)
   - 서브: 핵심 가치 설명
   - CTA: 무료 상담 버튼
   - 우측: 해당 서비스 관련 일러스트/목업 이미지

2. 서비스 특징 (4열 그리드)
   - 아이콘 + 제목 + 설명

3. 세부 서비스 항목 (탭으로 전환)
   네이버 예시:
     탭1: 검색광고  탭2: 쇼핑광고  탭3: 브랜드검색  탭4: GFA
   각 탭: 서비스 설명 + 적합한 업종 + 예상 효과

4. 업종별 추천 (아코디언)
   - 쇼핑몰, 병원/의원, 학원/교육, 인테리어, 음식점 등

5. FAQ (아코디언 형태, FAQ Schema 삽입)
   - 최소 5개 질문/답변

6. CTA 섹션
```

---

### 💼 포트폴리오 (/portfolio)

```
상단: 필터 탭 (전체 / 네이버광고 / 구글광고 / SNS광고)
카드 그리드: MDX 파일에서 읽어옴
  카드: 업종 뱃지 + 제목 + 핵심 수치 + 썸네일
클릭 시: 상세 MDX 페이지로 이동 (옵션, 우선 목록만 구현)
```

---

### 📝 블로그 (/blog)

```
레이아웃: 좌측 80% 카드 그리드 + 우측 20% 사이드바
사이드바: 카테고리 목록, 최신 글 5개

블로그 카드: 썸네일 + 카테고리 뱃지 + 제목 + 날짜 + 미리보기 텍스트

블로그 상세 (/blog/[slug]):
  - 상단: 제목, 날짜, 카테고리, 예상 읽기 시간
  - MDX 렌더링 (h1~h6, 코드블록, 이미지, 인용구 스타일링)
  - 우측 TOC (목차) 고정
  - 하단: 관련 글 3개
  - 하단: 문의 CTA 배너
```

MDX 파일 예시 3개 생성:
```mdx
---
title: "2024년 네이버 광고 단가 총정리 — 업종별 CPC 비교"
date: "2024-01-15"
category: "네이버광고"
description: "2024년 최신 네이버 검색광고 클릭당 단가를 업종별로 정리했습니다."
thumbnail: "/blog/naver-ads-cpc-2024.jpg"
---
```

---

### 📞 문의하기 (/contact)

```
레이아웃: 좌우 2단 (데스크탑), 좌측: 연락처 정보, 우측: 폼

연락처 섹션:
  - 전화: 010-XXXX-XXXX
  - 이메일: contact@mpinteractive.co.kr
  - 카카오채널 링크
  - 응대 시간: 평일 09:00~18:00

문의 폼 (React Hook Form):
  필드:
    - 이름 (필수)
    - 연락처 (필수, 휴대폰 형식 유효성 검사)
    - 이메일 (필수, 이메일 형식)
    - 회사명 (선택)
    - 광고 예산 선택 (드롭다운):
      "월 50만원 미만 / 50~100만원 / 100~300만원 / 300만원 이상"
    - 문의 유형 (체크박스): 네이버광고 / 구글광고 / SNS광고 / 기타
    - 문의 내용 (텍스트에어리어, 선택)
    - 개인정보 동의 체크박스 (필수)
  제출: /api/contact 로 POST → Nodemailer로 이메일 발송
  성공 시: 감사 메시지 + 홈으로 버튼

지도 섹션 (옵션): 카카오맵 또는 구글맵 iframe
```

---

## 6. 공통 컴포넌트 상세

### Header.tsx

```
구조:
  - 로고 (좌측) + 내비게이션 (우측)
  - 스크롤 20px 이상 시: 배경 blur glassmorphism 효과로 변경
  - 모바일: 햄버거 메뉴 → 슬라이드 다운 메뉴

내비게이션 링크:
  서비스 (드롭다운: 네이버광고/구글광고/SNS광고)
  포트폴리오
  블로그
  문의하기 (CTA 스타일 버튼)

활성 페이지: 링크 하단 블루 언더라인
```

### Footer.tsx

```
4열 그리드 (모바일 2열):
  1열: 로고 + 회사 소개 한 줄 + SNS 아이콘
  2열: 서비스 링크
  3열: 빠른 링크 (블로그, 포트폴리오, 문의)
  4열: 연락처 + 주소

하단 바: 저작권 + 개인정보처리방침 링크
```

### FadeInSection.tsx

```typescript
// 스크롤 시 아래에서 위로 페이드인되는 래퍼
// Framer Motion useInView 활용
// props: children, delay(optional), direction(optional: up/left/right)
```

### CountUpNumber.tsx

```typescript
// props: end(숫자), duration(초), suffix(예: "+", "%")
// useInView로 화면에 보일 때 카운트 시작
// Framer Motion animate로 부드러운 숫자 증가
```

### TypingText.tsx

```typescript
// props: texts(string[]), speed(ms)
// 텍스트 배열을 순환하며 타이핑/삭제 효과
// 커서 blink 애니메이션 포함
```

---

## 7. 애니메이션 상세 명세

> **UI/UX 레퍼런스**: BAND 파트너 소개 페이지(partner.band.us) 스타일 — 스크롤 시 각 섹션(레이어)이 부드럽게 아래에서 위로 올라오는 방식. 전환이 자연스럽고 군더더기 없이 깔끔한 모션.

---

### 스무스 스크롤 (Lenis)

```
라이브러리: @studio-freight/lenis (또는 lenis)
설정:
  lerp: 0.08          ← 부드러움 강도 (낮을수록 더 부드럽고 무거운 느낌)
  duration: 1.2       ← 기본 스크롤 지속 시간
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))  ← ease-out-expo
  smooth: true
  direction: "vertical"

layout.tsx의 최상단에서 Lenis 초기화, Framer Motion과 연동:
  → Lenis의 raf loop를 Framer Motion의 useAnimationFrame과 연결
```

---

### 페이지 로드 애니메이션 (Hero)

```
히어로 섹션: 요소들이 0.1초 간격으로 stagger 아래→위 슬라이드인
  initial:  { opacity: 0, y: 40 }
  animate:  { opacity: 1, y: 0 }
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }  ← ease-out-quart

  순서 (delay):
  1. 뱃지         delay: 0s
  2. 타이틀 1줄   delay: 0.1s
  3. 타이틀 2줄   delay: 0.2s
  4. 타이핑 텍스트 delay: 0.3s
  5. 설명 텍스트  delay: 0.4s
  6. CTA 버튼     delay: 0.5s
  7. 떠다니는 카드 delay: 0.6s (float 애니메이션 추가 시작)
```

---

### 섹션 스크롤 트리거 애니메이션 (핵심 — BAND 스타일)

```
FadeInSection.tsx 기본 동작:
  트리거:   섹션이 뷰포트에 20% 이상 진입할 때 (margin: "0px 0px -100px 0px")
  initial:  { opacity: 0, y: 60 }
  animate:  { opacity: 1, y: 0 }
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1]   ← ease-out-expo (자연스럽고 세련된 감속)
  }
  once: true  ← 한 번 등장 후 상태 유지 (반복 없음)

방향 variants (direction prop):
  "up"    → y: 60 → 0   (기본값)
  "down"  → y: -60 → 0
  "left"  → x: 60 → 0   (우측 요소 등장 시)
  "right" → x: -60 → 0  (좌측 요소 등장 시)
  "scale" → scale: 0.92, opacity: 0 → 1  (카드 등장 시)

섹션별 구체적 애니메이션:
  Stats 섹션:
    - 섹션 자체: FadeInSection (up)
    - 4개 숫자 항목: stagger 0.1s 간격으로 scale + fadeIn
    - 숫자 카운트업: 뷰포트 진입 시 시작 (2초, ease-out)

  Services 섹션:
    - 섹션 제목: FadeInSection (up)
    - 카드 3개: staggerChildren 0.15s, 각각 scale(0.92)→1 + opacity

  Process 섹션:
    - 각 단계(01~05): stagger 0.2s 간격으로 순차 등장
    - 단계 사이 연결선: 이전 단계 등장 완료 후 왼→오 width 애니메이션

  Portfolio 섹션:
    - 카드 3개: 좌→중→우 순서로 0.1s 간격 등장

  Testimonials 섹션:
    - 슬라이더 자체: FadeInSection (up)
    - 자동 재생 전환: opacity + x 슬라이드, 0.5s ease

  CTA 섹션:
    - 배경 그라디언트 + 텍스트 전체: scale(0.96)→1 + opacity
```

---

### 마이크로 인터랙션

```
버튼 호버:
  Primary: scale(1.03) + box-shadow 확대 + 배경 밝기 +10%
  Ghost:   배경 fill 좌→우 슬라이드 (clip-path 또는 background-size 트릭), 0.25s

카드 호버:
  translateY(-8px) + border-color → #0055FF + box-shadow (블루 글로우)
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)

링크 호버:
  하단 언더라인: scaleX(0)→1, transform-origin: left, 0.25s ease-out

헤더 스크롤:
  20px 이상 스크롤 시:
    배경: transparent → rgba(10,10,15,0.85) + backdrop-blur(20px)
    보더 하단: 0 → 1px solid rgba(255,255,255,0.08)
    transition: all 0.3s ease

모바일 메뉴:
  슬라이드 다운 + 각 링크 stagger 0.05s 등장, 0.4s ease

파티클 (Hero 배경):
  점들 무작위 이동 + 일정 거리 내 선 연결
  마우스 커서 근처 점들이 약간 끌려오는 효과 (선택 사항)

떠다니는 카드 (Hero 우측):
  각 카드: y 8px 왕복 float, 3~4초 주기, 서로 다른 delay
  Framer Motion animate: { y: [0, -12, 0] }, transition: { repeat: Infinity, duration: 3.5 }
```

---

### 페이지 전환

```
Next.js App Router 기반 페이지 전환:
  layout.tsx에서 AnimatePresence 래핑
  각 페이지: initial { opacity: 0, y: 20 } → animate { opacity: 1, y: 0 }
  exit: { opacity: 0, y: -20 }
  transition: { duration: 0.4, ease: "easeInOut" }
```

---

## 8. SEO 완전 설정

### layout.tsx 전역 메타태그

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://mpinteractive.co.kr"),
  title: {
    default: "MP인터랙티브 | 디지털 광고 전문 대행사",
    template: "%s | MP인터랙티브",
  },
  description:
    "네이버, 구글, SNS 광고를 전문으로 하는 디지털 마케팅 대행사. 데이터 기반 광고 전략으로 매출을 올려드립니다.",
  keywords: ["광고대행사", "디지털마케팅", "네이버광고", "구글광고", "SNS광고", "퍼포먼스마케팅"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://mpinteractive.co.kr",
    siteName: "MP인터랙티브",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_CODE",  // 배포 후 실제 코드 입력
    other: { "naver-site-verification": "NAVER_CODE" },
  },
};
```

### Schema.org 구조화 데이터 (layout.tsx에 삽입)

```typescript
// 1. LocalBusiness Schema
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MP인터랙티브",
  description: "디지털 광고 전문 대행사",
  url: "https://mpinteractive.co.kr",
  telephone: "010-XXXX-XXXX",
  address: { "@type": "PostalAddress", addressLocality: "서울", addressCountry: "KR" },
  serviceArea: "대한민국 전국",
  priceRange: "$$",
};

// 2. 서비스 페이지: FAQ Schema (각 서비스 page.tsx에)
// 3. 블로그: Article Schema (blog/[slug]/page.tsx에)
// 4. 포트폴리오: 각 Case Study에 Article Schema
```

### sitemap.ts

```typescript
// 정적 페이지 + MDX 블로그 글 + MDX 포트폴리오 전부 포함
// 블로그는 changeFrequency: "weekly", priority: 0.7
// 서비스 페이지는 priority: 0.9
```

### 각 서비스 페이지 메타태그

```typescript
// naver-ads/page.tsx
export const metadata = {
  title: "네이버 광고 대행 | 검색광고·쇼핑광고 전문",
  description: "네이버 검색광고, 쇼핑광고, 브랜드검색 전문 대행. 업종별 최적화 전략으로 광고비 절감.",
  keywords: ["네이버광고대행", "네이버검색광고", "네이버광고대행사", "네이버쇼핑광고"],
};

// google-ads/page.tsx
export const metadata = {
  title: "구글 광고 대행 | Google Ads·유튜브광고 전문",
  description: "구글 검색광고, 유튜브광고, GDN 디스플레이광고 전문. 글로벌 고객 확보를 위한 구글 광고 전략.",
  keywords: ["구글광고대행", "Google Ads", "유튜브광고", "구글광고대행사"],
};

// sns-ads/page.tsx
export const metadata = {
  title: "SNS 광고 대행 | 인스타·페이스북·카카오광고 전문",
  description: "인스타그램, 페이스북, 카카오, 틱톡 광고 전문 대행. 바이럴부터 전환까지 성과를 만듭니다.",
  keywords: ["SNS광고대행", "인스타그램광고", "페이스북광고", "카카오광고"],
};
```

---

## 9. 환경변수 (.env.local.example)

```env
NEXT_PUBLIC_SITE_URL=https://mpinteractive.co.kr
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your@gmail.com
EMAIL_SERVER_PASSWORD=앱비밀번호16자리
CONTACT_RECEIVE_EMAIL=contact@mpinteractive.co.kr
```

---

## 10. vercel.json

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    },
    {
      "source": "/(.*)\\.(jpg|jpeg|png|webp|ico|svg)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

## 11. 구현 우선순위 & 순서

Claude Code는 아래 순서대로 구현해줘:

```
Phase 1 — 기반 설정
  1. Next.js 프로젝트 생성 + 패키지 설치
  2. globals.css (CSS 변수, 기본 스타일)
  3. lib/constants.ts (회사 정보 상수)
  4. lib/mdx.ts (MDX 파싱 유틸)
  5. layout.tsx (전역 메타태그, Schema, 폰트)
  6. sitemap.ts / robots.ts
  7. Header.tsx / Footer.tsx

Phase 2 — 공통 컴포넌트
  8. FadeInSection.tsx
  9. CountUpNumber.tsx
  10. TypingText.tsx
  11. ParticleBackground.tsx

Phase 3 — 메인 홈페이지 (/)
  12. HeroSection.tsx (파티클 + 타이핑 + 떠다니는 카드)
  13. StatsSection.tsx (카운트업)
  14. ServicesSection.tsx (호버 카드)
  15. ProcessSection.tsx (타임라인)
  16. PortfolioSection.tsx (미리보기)
  17. TestimonialsSection.tsx (슬라이더)
  18. CtaSection.tsx
  19. page.tsx (조립)

Phase 4 — 서비스 페이지
  20. services/page.tsx
  21. services/naver-ads/page.tsx (탭 + 아코디언 + FAQ Schema)
  22. services/google-ads/page.tsx
  23. services/sns-ads/page.tsx

Phase 5 — 콘텐츠 페이지
  24. MDX 샘플 파일 3개 (blog)
  25. MDX 샘플 파일 2개 (portfolio)
  26. blog/page.tsx (목록 + 사이드바)
  27. blog/[slug]/page.tsx (상세 + TOC)
  28. portfolio/page.tsx
  29. MDXContent.tsx (MDX 렌더러)

Phase 6 — 문의 & API
  30. contact/page.tsx (React Hook Form)
  31. api/contact/route.ts (Nodemailer)

Phase 7 — 마무리
  32. vercel.json
  33. .env.local.example
  34. next.config.js (MDX 설정)
  35. README.md (실행 방법, 환경변수 안내)
```

---

## 12. 추가 요구사항

- 모든 컴포넌트는 반응형 (모바일 우선)
- 접근성: 모든 이미지 alt 텍스트, 버튼 aria-label
- TypeScript 타입 엄격하게 (any 사용 금지)
- 빈 이미지 슬롯은 placeholder (회색 bg + 아이콘)로 대체
- 로딩/스켈레톤 없이 SSG/SSR로 즉시 렌더링
- 다크 테마 고정 (라이트모드 전환 불필요)
- 폰트 Pretendard: CDN으로 불러오기 (next/font 방식)
- 콘솔 에러 없이 완전히 동작하는 상태로 완성
- npm run build 통과해야 함
- 샘플 데이터 포함 (실제처럼 보이는 텍스트, 수치)

---

이 명세대로 전체 프로젝트를 빠짐없이 만들어줘.
파일 하나씩 순서대로 생성하고, 각 파일이 완성되면 다음으로 넘어가줘.

---

*(프롬프트 끝)*