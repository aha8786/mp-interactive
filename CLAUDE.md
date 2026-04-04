# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 작업 규칙 (필수 준수)

1. **모든 응답과 설명은 반드시 한글로 작성한다.**
2. **패키지/라이브러리를 새로 사용할 때마다 `requirements.txt`에 기록한다.** (패키지명, 버전, 용도)
3. **코드를 구현하다가 필요한 정보가 부족하면 사용자에게 인터뷰(질문)하여 확인한 후 진행한다.** 추측으로 임의 결정하지 않는다.
4. **코드를 수정하거나 새로 구현한 내용은 `docs/HANDOFF.md`에 정리하여 기록한다.** (변경 사항, 구현 내용, 이유 포함)

---

## 프로젝트 개요

- **프로젝트명**: MP인터랙티브 공식 웹사이트
- **업종**: 디지털 광고 대행사 (네이버광고, 구글광고, SNS광고)
- **목적**: 브랜딩 + 잠재 고객 유치 + SEO (네이버, 구글)
- **배포**: Vercel

---

## 기술 스택

| 항목 | 선택 |
|------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Font | Pretendard + Noto Sans KR |
| Content | MDX (파일 기반) |
| Form | React Hook Form |
| Email | Nodemailer |
| Analytics | Google Analytics 4 |
| SEO | Next.js Metadata API |

---

## 주요 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드 (배포 전 반드시 확인)
npm run build

# 린트
npm run lint
```

---

## 디렉터리 구조

```
mp-interactive/
├── src/
│   ├── app/                     # App Router 페이지
│   │   ├── layout.tsx           # 전역 레이아웃 + 메타태그 + Schema.org
│   │   ├── page.tsx             # 홈
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── services/            # 서비스 페이지 (naver-ads, google-ads, sns-ads)
│   │   ├── portfolio/
│   │   ├── blog/[slug]/         # MDX 동적 라우팅
│   │   ├── contact/
│   │   └── api/contact/         # Nodemailer 이메일 발송
│   ├── components/
│   │   ├── layout/              # Header, Footer
│   │   ├── home/                # 홈 섹션별 컴포넌트
│   │   ├── common/              # FadeInSection, CountUpNumber, TypingText, ParticleBackground
│   │   └── blog/                # BlogCard, MDXContent
│   ├── content/
│   │   ├── blog/                # .mdx 블로그 파일
│   │   └── portfolio/           # .mdx 포트폴리오 파일
│   └── lib/
│       ├── constants.ts         # 회사 정보 상수 (회사명, 연락처 등)
│       ├── mdx.ts               # MDX 파싱 유틸
│       └── metadata.ts          # 메타태그 헬퍼
├── public/
├── docs/
│   ├── master_plan.md           # 전체 기획/설계 문서 (설계 변경 시 이 파일 수정)
│   └── HANDOFF.md               # 작업 이력
├── req.txt                      # 사용 패키지 목록
└── vercel.json
```

---

## 디자인 시스템 요약

**테마**: 다크 전용 (라이트 모드 없음)

```css
--color-primary:     #0055FF;   /* CTA, 포인트 블루 */
--color-accent:      #00D4FF;   /* 네온 시안, 그라디언트 끝 */
--color-dark:        #0A0A0F;   /* 배경 */
--color-dark-card:   #12121A;   /* 카드 배경 */
--color-dark-border: #1E1E2E;   /* 보더 */
--gradient-hero: linear-gradient(135deg, #0055FF 0%, #00D4FF 100%);
```

- **폰트**: 제목 Pretendard ExtraBold, 본문 Noto Sans KR
- **카드**: 배경 `#12121A`, 보더 1px `#1E1E2E`, 반경 16px / 호버 시 블루 보더 + 위로 이동
- **버튼**: Primary = 블루→시안 그라디언트 / Ghost = 블루 보더

---

## 구현 페이지 목록

| 경로 | 설명 |
|------|------|
| `/` | 홈 (Hero, Stats, Services, Process, Portfolio, Testimonials, CTA) |
| `/services` | 서비스 목록 |
| `/services/naver-ads` | 네이버 광고 전용 (탭 + 아코디언 + FAQ Schema) |
| `/services/google-ads` | 구글 광고 전용 |
| `/services/sns-ads` | SNS 광고 전용 |
| `/portfolio` | 포트폴리오 목록 (MDX, 필터 탭) |
| `/blog` | 블로그 목록 + 사이드바 |
| `/blog/[slug]` | 블로그 상세 + TOC |
| `/contact` | 문의 폼 (React Hook Form) |

---

## 구현 순서 (Phase)

상세 명세는 `docs/master_plan.md` 참조.

- **Phase 1**: 기반 설정 (Next.js 생성, globals.css, constants, layout, Header/Footer)
- **Phase 2**: 공통 컴포넌트 (FadeInSection, CountUpNumber, TypingText, ParticleBackground)
- **Phase 3**: 홈페이지 섹션 조립
- **Phase 4**: 서비스 페이지
- **Phase 5**: 블로그 + 포트폴리오 (MDX)
- **Phase 6**: 문의 폼 + 이메일 API
- **Phase 7**: vercel.json, 환경변수, 빌드 확인

---

## 파일 설명

| 파일 | 용도 |
|------|------|
| `docs/master_plan.md` | 전체 기획·설계 문서. 설계 변경 시 여기서 수정. |
| `docs/HANDOFF.md` | 구현/수정 이력 누적 기록 |
| `req.txt` | 사용 패키지 및 라이브러리 목록 |
