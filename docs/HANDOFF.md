# HANDOFF.md — 작업 이력

구현하거나 수정한 내용을 최신순으로 기록합니다.

---

## [2026-04-24] SEO 강화 — 네이버 밴드 광고 키워드 타겟팅

### 목표 키워드
- 네이버 밴드 광고 / 밴드 광고 / 네이버 밴드 광고 대행 / 밴드 광고 대행

### 변경 파일
- `src/app/services/naver-ads/page.tsx` — 서버 컴포넌트로 분리 + 메타데이터(title, description, keywords, OG) 추가
- `src/app/services/naver-ads/NaverBandAdsClient.tsx` — 기존 클라이언트 컴포넌트 분리
- `src/app/layout.tsx` — 전역 keywords에 띄어쓰기 포함 밴드 광고 키워드 추가
- `src/app/sitemap.ts` — naver-ads 우선순위 0.9→0.95, changeFrequency monthly→weekly 변경
- `src/content/blog/naver-band-ads-guide.mdx` — 밴드 광고 전용 블로그 포스트 신규 생성

### 이유
- 기존 page.tsx가 "use client"로 메타데이터 미적용 상태였음 → 서버/클라이언트 분리로 해결
- 기존 키워드가 붙여쓰기("네이버밴드광고")만 포함 → 띄어쓰기 형태 추가
- 블로그 포스트(롱폼 콘텐츠)는 검색 랭킹에서 가장 효과적인 수단 → 밴드 광고 전용 가이드 생성

---

## [2026-03-13] 네이버 밴드 광고 체험 섹션 구현 (/services/naver-ads)

### 변경 파일
- `src/app/services/naver-ads/page.tsx` (섹션 추가)

### 구현 내용
- **흰색 배경 섹션** (`background: #ffffff`) 페이지 하단에 추가
- **이미지 Floating 영역** (height: 720px):
  - `list_ad.png` — 좌상단 (left:100, top:110, width:650, rotate:-12°), 4.4초 부유 애니메이션
  - `home_ad.png` — 우상단 (left:1110, top:130, width:300, rotate:+12°), 5.0초 부유 애니메이션
  - `new_ad.png` — 중앙 하단 (left:720, top:460, width:330, rotate:+2°), 3.8초 부유 애니메이션
  - 중앙 텍스트: "네이버 밴드 광고로 이런걸 할수 있어요!" + 부제
- **Q&A 카드 영역** (`max-w-5xl` 컨테이너):
  - Q1+Q2: `grid md:grid-cols-2 gap-4` 나란히 배치
  - Q3: 전체 너비, 탭 버튼(새소식/내 밴드 목록/밴드 홈), 2컬럼 이미지 프리뷰 패널
  - 디폴트: `useState("new")` — 새소식 탭 활성화
  - 카드 스타일: `background: #F6F3EC`, `border: 1px solid #CEC9B8`, radius 16px
  - Q 배지: `rgba(0,85,255,0.1)` 파란 계열 / A 배지: `rgba(3,199,90,0.12)` 초록 계열

### 이유
밴드 광고 상품(새소식/목록/홈) 구분을 직관적으로 체험할 수 있도록 인터랙티브 섹션 추가

---

## [2026-03-11] Stats 섹션 리디자인 (Recharts 차트 카드 4장)

### 변경 파일
- `src/components/home/StatsSection.tsx` (전면 재작성)
- `src/components/home/StatsSection.module.css` (신규)
- `src/app/page.tsx` (BandStatsSection → StatsSection 교체)
- `requirements.txt` (recharts 추가)

### 구현 내용
- `recharts` 패키지 설치 (AreaChart, BarChart 사용)
- 섹션 배경: 다크 네이비 `#0F1129`
- 카드 공통: 배경 `#F0EDE3`, 상단 그린→시안 4px 바, hover 시 y:-6 + 그림자 강조
- **카드 1** — 글로벌 가입자: AreaChart(꺾은선+그라디언트 fill), 2020→2024 데이터
- **카드 2** — 국내 MAU: BarChart layout="vertical", 앱별 비교, 밴드 막대 그린 강조
- **카드 3** — 소셜미디어 이용률: 소수점 1자리 카운트업 (0 → 28.6%)
- **카드 4** — 미국 MAU: 정수 카운트업 (0 → 710만) + 성장 pill 배지
- Framer Motion useInView 스크롤 진입 시 순차 등장 (delay 0/0.1/0.2/0.3s)

### 이유
prompt2.md 명세에 따라 기존 단순 카운트업 카드를 Recharts 차트 기반 데이터 시각화 카드로 교체

---

## [2026-03-11] 네이버 밴드 플랫폼 현황 카드뉴스 캐러셀 추가

### 변경 파일
- `src/components/sns/BandPlatformCarousel.tsx` (신규)
- `src/app/services/sns-ads/page.tsx` (섹션 추가)

### 구현 내용
- Band Social AD 페이지 스타일 참고한 컬러풀 카드뉴스 캐러셀
- 마우스 드래그로 가로 스크롤 가능 (`mousedown` / `mousemove` / `mouseup` 이벤트)
- 6개 카드: 이용자 현황, 핵심 타겟, 광고 방식, 타겟팅, 성과 측정, 비용 효율
- 각 카드별 SVG 일러스트 아이콘 + 그라디언트 배경
- SNS 광고 페이지 FAQ 섹션 위에 삽입

### 이유
- 사용자 요청: Band Social AD 이미지 스타일의 드래그 가능한 카드뉴스 형식

---

## [TODO] 반응형 개선 필요 사항

### TrendSection 모바일 대응
- **파일**: `src/components/home/TrendSection.tsx`
- **문제**: Before/After 카드가 `grid-cols-2` 고정이라 모바일(768px 미만)에서 카드가 매우 좁게 표시됨
- **해결 방법**: `grid-cols-1 md:grid-cols-2` 로 변경 → 모바일에서 세로 배치, 데스크탑에서 나란히 배치
- **미작업 이유**: 사용자 확인 후 적용 예정

---

## [2026-03-10] 메인 화면 3개 항목 수정

### 변경 이유
사용자 요청: 히어로 텍스트 변경, 수치 섹션 카드뉴스 분리, Before/After 섹션 분리

### 변경 내용

**1. HeroSection 헤드라인 수정** (`src/components/home/HeroSection.tsx`)
- h1 변경: "매출을 올리는 / 디지털 광고 전략" → "AI와 데이터로 만드는 / 밴드 광고 퍼포먼스"
- 설명 문구 변경: "데이터와 경험으로 광고비를 낭비 없이 집행합니다. 업종별 맞춤 전략으로 실질적인 성과를 만들어드립니다." → "업종별 맞춤 전략으로 실질적인 성과를 만들어드립니다."

**2. BandStatsSection 신규 생성** (`src/components/home/BandStatsSection.tsx`)
- 글로벌 가입자/국내 MAU 등 4개 수치를 ServicesSection에서 분리하여 독립 섹션으로 생성
- 카드뉴스 스타일: 이모지 + 큰 숫자 + 카드 상단 컬러 바 (초록→시안 그라디언트)

**3. TrendSection 신규 생성** (`src/components/home/TrendSection.tsx`)
- "트렌드는 변합니다" Before/After를 ServicesSection에서 분리하여 독립 섹션으로 생성
- Before 카드: 연한 회색 배경 (#D9D9D9/#E8E8E8), 흑백 이미지
- After 카드: 네이버 초록(#03C75A) 배경, 컬러 이미지
- 이미지 max-width: 260px로 비율 축소

**4. ServicesSection 정리** (`src/components/home/ServicesSection.tsx`)
- 위 두 섹션으로 이전한 stats, Before/After, 헤더 블록 제거
- AI/데이터 차별화 카드 3개 + CTA만 남김

**5. page.tsx 업데이트** (`src/app/page.tsx`)
- BandStatsSection, TrendSection 임포트 및 배치 추가 (Hero → BandStats → Trend → Services → Process 순)

---

## [2026-03-10] 네이버 밴드 광고 섹션 전면 개편

### 변경 이유
- 실제 서비스 중인 광고가 네이버 밴드 하나뿐이므로 카드 선택 구조 → 단독 풀 섹션 구조로 전환
- prompt.md 홍보 내용(통계, 비포/에프터, 게재 위치, AI 차별화)을 홈과 상세 페이지에 분배

### 이미지 추가
- `image/` 폴더 5장 → `public/images/band/` 복사
  - `before.png`, `after.png` (비포/에프터)
  - `new_ad.png`, `list_ad.png`, `home_ad.png` (광고 게재 위치)

### 수정 파일 1: `src/components/home/ServicesSection.tsx` — 전면 재작성
- 기존: 서비스 카드 3개 그리드 (구글/SNS 주석 처리 상태)
- 변경: 네이버 밴드 단독 풀 섹션
  - 핵심 수치 4개 카드 (CountUpNumber: 1억 3천만, 1800만, 28.6%, 710만)
  - 비포/에프터 이미지 비교 (before.png 회색조 / after.png 풀컬러 + 그린 보더)
  - AI/데이터 차별화 3포인트 카드
  - "자세히 보기" CTA → `/services/naver-ads`

### 수정 파일 2: `src/app/services/naver-ads/page.tsx` — 전면 재작성
- 기존: 히어로 → 세부 서비스 탭(내용 오류) → FAQ → CTA
- 변경: 히어로 → MAU 1,800만 통계 → 광고 게재 위치 3장 → AI 차별화 + 입문 배너 → FAQ → CTA
  - 히어로 문구: "글로벌 가입자 1억 3,000만명" 반영
  - 세부 서비스 탭 제거 → 게재 위치 3이미지 3열 그리드로 대체
  - 입문자 배너 신규 (설정 대행 / 소재 지원 / 주간 리포트 뱃지)

### 빌드 결과
`npm run build` 성공 ✅ (타입 에러 0건)

---

## [2026-03-10] FloatingButton 컴포넌트 신규 구현

### 구현 내용
- `src/components/common/FloatingButton.tsx` 신규 생성
- 우측 하단 고정 위치 (`fixed bottom-6 right-6 z-50`)
- 메인 버튼: 돋보기(Search) 아이콘, 블루→시안 그라디언트, 클릭 시 X 아이콘으로 전환
- 펼침 버튼: 카카오톡(노란), 네이버 블로그(초록), 인스타그램(그라디언트) 각 아이콘
- Framer Motion 스태거 애니메이션 적용
- 각 버튼 호버 시 툴팁(플랫폼명) 표시
- `src/app/layout.tsx`에 `<FloatingButton />` 추가 (전역 노출)

### TODO
- 소셜 링크 `href="#"` → 실제 URL 입력 필요
  - 카카오톡: `socialLinks[0].href`
  - 네이버 블로그: `socialLinks[1].href`
  - 인스타그램: `socialLinks[2].href`

---

## [2026-03-09] 전체 테마 변경 — 다크 모드 → 라이트 모드 (크림/베이지 그레이)

### 변경 이유
전체 사이트 테마를 다크(검정 계열)에서 따뜻한 크림/베이지 그레이 라이트 테마로 변경.

### 컬러 팔레트 변경
| 변경 전 | 변경 후 | 용도 |
|---------|---------|------|
| `#0A0A0F` | `#F6F3EC` | 메인 배경 |
| `#12121A` | `#EDEAE1` | 카드/섹션 배경 |
| `#080810` | `#E3E0D7` | 푸터 배경 |
| `#1E1E2E` | `#CEC9B8` | 보더 |
| `#8888aa` | `#6E6860` | 뮤트 텍스트 |
| `#ccc`, `#aaa` | `#4A4540` | 보조 텍스트 |
| 텍스트 `white` / `#fff` | `#1C1814` | 기본 텍스트 |
| glass bg `rgba(18,18,26,0.8)` | `rgba(237,234,225,0.88)` | glass 효과 배경 |

### 유지 사항
- `--color-primary: #0055FF` (파란색 그대로)
- `--color-accent: #00D4FF` (그대로)
- `.gradient-text` (파란 그라디언트 그대로)
- `.btn-primary` 내부 텍스트 white 유지
- CTA 섹션 blue gradient 배경 그대로
- 아이콘 색상 (#03C75A, #4285F4, #E1306C 등) 그대로
- 파란 반투명 뱃지 배경 (`rgba(0,85,255,...)`) 그대로

### 수정된 파일
1. `src/app/globals.css` — CSS 변수, glass 효과, 스크롤바, MDX 스타일 업데이트
2. `src/components/layout/Header.tsx` — 스크롤 glass bg, 드롭다운 bg, 텍스트 색상 변경
3. `src/components/layout/Footer.tsx` — 배경, 보더, 텍스트 색상 변경
4. `src/components/home/HeroSection.tsx` — 배경, 메인 타이틀, 설명 텍스트 색상 변경
5. `src/components/home/ServicesSection.tsx` — 배경, 카드 텍스트 색상 변경
6. `src/components/home/ProcessSection.tsx` — 배경, 연결선, 번호 원, 텍스트 색상 변경
7. `src/components/home/TestimonialsSection.tsx` — 배경, 카드, 화살표 버튼, 텍스트 색상 변경
8. `src/components/blog/BlogCard.tsx` — 카드 텍스트 색상 변경
9. `src/app/services/naver-ads/page.tsx` — 전체 색상 치환
10. `src/app/services/page.tsx` — 전체 색상 치환
11. `src/app/blog/page.tsx` — 전체 색상 치환
12. `src/app/blog/[slug]/page.tsx` — 전체 색상 치환
13. `src/app/portfolio/page.tsx` — 전체 색상 치환
14. `src/app/contact/page.tsx` — 전체 색상 치환 + 폼 input background/border 변경

### 빌드 결과
`npm run build` 성공 확인 (18개 정적 페이지 생성)

---

## [2026-03-09] 신생 회사 런칭 대응 — 성과 섹션 비활성화 및 서비스 변경

### 변경 이유
신생 회사로 아직 실적·성과 데이터가 없어 허위 정보 노출 방지.
"네이버 광고" 서비스를 "네이버 밴드 광고 대행"으로 변경.

### 비활성화 (주석 처리)
- `src/app/page.tsx`: `StatsSection`, `PortfolioSection`, `TestimonialsSection` 주석 처리
- `src/components/home/HeroSection.tsx`: 떠다니는 실적 카드(클릭률 340%·광고비 절감 45%·월 신규 문의 127건) 주석 처리
- `src/lib/constants.ts`: NAV_LINKS에서 포트폴리오 링크 주석 처리
- `src/components/layout/Footer.tsx`: 빠른 링크에서 포트폴리오 주석 처리

### 서비스 변경: 네이버 광고 → 네이버 밴드 광고
- `src/lib/constants.ts`: SERVICES[0] 제목·설명·기능 변경, INQUIRY_TYPES 변경
- `src/app/services/naver-ads/page.tsx`: 전면 재작성 (밴드 스폰서·피드·지역·커뮤니티 광고 탭, FAQ 5개)
- `src/app/services/page.tsx`: 네이버 서비스 설명·highlights 변경
- `src/components/layout/Footer.tsx`: 서비스 링크 레이블 변경
- `src/components/home/HeroSection.tsx`: TypingText "네이버 밴드 광고"로 변경

### SEO 키워드 추가 (`src/app/layout.tsx`)
추가: "네이버밴드", "네이버밴드광고대행", "네이버밴드광고", "광고대행"

### 향후 활성화 방법
성과 데이터가 생기면:
1. `page.tsx` 주석 해제 (StatsSection, PortfolioSection, TestimonialsSection)
2. `constants.ts` STATS, TESTIMONIALS 실제 데이터로 교체
3. `HeroSection.tsx` floatCards 주석 해제 및 실제 수치 입력
4. NAV_LINKS 및 Footer 포트폴리오 주석 해제

---

## [2026-03-09] 전체 프로젝트 구현 완료 (Phase 1~7)

### 작업 내용

**Phase 1 — 기반 설정**
- Next.js 14 (App Router) + TypeScript + Tailwind CSS 프로젝트 생성
- `globals.css` — CSS 변수, 카드/버튼/섹션 공통 스타일, MDX 스타일
- `lib/constants.ts` — 회사 정보, 내비게이션, 통계, 서비스, 프로세스, 후기 데이터
- `lib/mdx.ts` — MDX 파일 파싱 유틸 (getBlogPost, getAllBlogPosts, getAllPortfolioItems)
- `lib/metadata.ts` — 메타태그 헬퍼 buildMetadata()
- `app/layout.tsx` — Noto Sans KR 폰트, Pretendard CDN, Schema.org LocalBusiness, 전역 메타태그
- `app/sitemap.ts`, `app/robots.ts`

**Phase 2 — 공통 컴포넌트**
- `FadeInSection.tsx` — 스크롤 트리거 페이드인 (up/down/left/right/scale, Framer Motion)
- `CountUpNumber.tsx` — 뷰포트 진입 시 숫자 카운트업
- `TypingText.tsx` — 텍스트 배열 순환 타이핑/삭제 효과 + 커서 깜빡임
- `ParticleBackground.tsx` — Canvas 파티클 네트워크 애니메이션 + 마우스 인터랙션

**Phase 3 — 홈페이지**
- `HeroSection.tsx` — 파티클 배경, 타이핑 텍스트, 떠다니는 실적 카드, stagger 애니메이션
- `StatsSection.tsx` — 4개 지표 카운트업
- `ServicesSection.tsx` — 3열 서비스 카드
- `ProcessSection.tsx` — 데스크탑 가로/모바일 세로 타임라인
- `PortfolioSection.tsx` — MDX 또는 폴백 데이터로 포트폴리오 미리보기
- `TestimonialsSection.tsx` — 자동 슬라이더 (4초 간격), 좌우 화살표
- `CtaSection.tsx` — 풀와이드 그라디언트 배경 CTA
- `app/page.tsx` — 섹션 조립

**Phase 4 — 서비스 페이지**
- `services/page.tsx` — 서비스 전체 목록
- `services/naver-ads/page.tsx` — 탭 전환 + 아코디언 FAQ + FAQ Schema
- `services/google-ads/page.tsx` — 동일 구조
- `services/sns-ads/page.tsx` — 동일 구조

**Phase 5 — 콘텐츠 페이지**
- MDX 블로그 3개: 네이버광고 단가, 구글광고 Quality Score, SNS광고 입문 가이드
- MDX 포트폴리오 2개: 뷰티 쇼핑몰(네이버), 피부과(구글)
- `blog/page.tsx` — 카드 그리드 + 사이드바(카테고리, 최신 글)
- `blog/[slug]/page.tsx` — MDX 렌더링 + 관련 글 + 문의 배너 + Article Schema
- `portfolio/page.tsx` — 필터 탭 + 카드 그리드
- `BlogCard.tsx`, `MDXContent.tsx`

**Phase 6 — 문의 & API**
- `contact/page.tsx` — React Hook Form, 유효성 검사, 성공 화면
- `api/contact/route.ts` — Nodemailer, 자동 회신 이메일

**Phase 7 — 마무리**
- `next.config.mjs` — 이미지 도메인 설정
- `vercel.json` — 보안 헤더, 캐시 헤더
- `.env.local.example` — 환경변수 예시
- `tailwind.config.ts` — 커스텀 색상 추가

### 수정 사항
- HeroSection.tsx: Framer Motion variants 타입 오류 수정 (custom 방식 → getItemProps 함수로 교체)
- blog/page.tsx: 미사용 변수 categories 제거
- node_modules/.bin/next: 잘못된 심볼릭 링크 수정 (복사 과정에서 발생)

### 빌드 결과
- `npm run build` 통과 ✅
- 18개 정적 페이지 생성 완료
- 타입 에러 0건

### 현재 상태
- 전체 구현 완료, 개발 서버 실행 가능 (`npm run dev`)
- Vercel 배포 준비 완료

### 다음 작업 (선택)
- 실제 이미지 추가 (OG 이미지, 블로그 썸네일, 포트폴리오 썸네일)
- Lenis 스무스 스크롤 통합
- GA4 연동 (`NEXT_PUBLIC_GA_ID`)
- 이메일 환경변수 설정 후 Nodemailer 테스트

---

## [2026-03-09] UI/UX 디자인 방향 업데이트

### 작업 내용
- `docs/master_plan.md` 섹션 7 (애니메이션 상세 명세) 전면 개선
- BAND 파트너 소개 페이지(partner.band.us) 스타일 반영:
  - **Lenis 스무스 스크롤** 추가 (lerp: 0.08, ease-out-expo 커브)
  - **섹션 진입 애니메이션**: `y: 60 → 0`, `opacity: 0 → 1`, ease `[0.22, 1, 0.36, 1]` (ease-out-expo)
  - **FadeInSection** direction 옵션 강화 (up/down/left/right/scale)
  - **스태거 애니메이션** 구체화: Stats 0.1s, Services 0.15s, Process 0.2s
  - **페이지 전환** AnimatePresence 명세 추가
  - 마이크로 인터랙션 세부 명세 보완 (버튼 fill 슬라이드, 헤더 스크롤 투명도)
- `requirements.txt`에 `lenis` 패키지 추가

### 현재 상태
- `docs/master_plan.md` 설계 완료 (UI/UX 레퍼런스 반영)
- 코드 구현 미시작 (Phase 1 대기 중)

### 다음 작업
- Phase 1: Next.js 프로젝트 스캐폴딩 및 기반 설정

---

## [2026-03-09] 프로젝트 초기 설정

### 작업 내용
- `CLAUDE.md` 생성 — Claude Code 작업 지침 및 프로젝트 아키텍처 정리
- `requirements.txt` 생성 — 사용 예정 패키지 목록 초안 작성
- `docs/HANDOFF.md` 생성 — 작업 이력 추적 파일

### 현재 상태
- `docs/master_plan.md` 에 전체 설계 명세 완료
- 코드 구현 미시작 (Phase 1 대기 중)

### 다음 작업
- Phase 1: Next.js 프로젝트 스캐폴딩 및 기반 설정

---
