# 탭 버튼 언더라인 스타일 전환 계획서

## 목표

Q3 카드의 세그먼트 컨트롤 버튼을 **언더라인 탭 스타일**로 교체한다.
현재: 박스형 세그먼트 컨트롤 (흰 pill + 그림자)
변경 후: 텍스트 탭 + 활성 항목에 굵은 블루 언더라인

---

## 참고 이미지 분석

```
A   홈 광고      새소식      내 밴드 목록
    ──────────  ─────────────────────────
    (블루 굵음)  (회색 얇음, 전체 너비 연장)
```

- 전체 탭 아래: 얇은 회색 선 하나가 전체 너비로 깔림
- 활성 탭 아래: 굵은 블루 선이 해당 탭 너비만큼 Framer Motion으로 슬라이드 이동
- 활성 탭 텍스트: 블루(`#0055FF`), 굵음(`font-bold` 또는 `font-black`)
- 비활성 탭 텍스트: 회색(`#6E6860`), 보통 굵기

---

## 구현 방식

### 1. HTML 구조

```tsx
<div className="flex items-center gap-4 px-8 py-5">
  {/* A 배지 */}
  <span>A</span>

  {/* 탭 컨테이너 */}
  <div className="relative flex gap-6">
    {/* 전체 너비 배경선 */}
    <div className="absolute bottom-0 left-0 right-0 h-[2px]"
         style={{ background: "#E8E4DC" }} />

    {/* 각 버튼 */}
    {(["home", "new", "list"] as const).map((key) => (
      <button key={key} onClick={() => setActiveAd(key)}
        className="relative pb-3 text-sm font-semibold transition-colors duration-200"
        style={{ color: activeAd === key ? "#0055FF" : "#6E6860",
                 fontWeight: activeAd === key ? 700 : 500 }}>
        {adDetails[key].label} 광고

        {/* 활성 언더라인 (Framer Motion layoutId) */}
        {activeAd === key && (
          <motion.div
            layoutId="tab-underline"
            className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
            style={{ background: "#0055FF" }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
      </button>
    ))}
  </div>
</div>
```

### 2. 핵심 기술

| 항목 | 내용 |
|------|------|
| 언더라인 이동 애니메이션 | `motion.div` + `layoutId="tab-underline"` |
| 트랜지션 | `spring` (stiffness 500, damping 35) → 탄성 슬라이드 |
| 배경선 | `absolute` div, `height: 2px`, 회색 |
| 활성선 | `height: 3px`, `#0055FF`, `rounded-full` |
| 텍스트 색 전환 | `transition-colors duration-200` |

---

## 스타일 명세

| 상태 | 텍스트 색 | 텍스트 굵기 | 언더라인 |
|------|----------|------------|---------|
| 활성 | `#0055FF` | 700 (bold) | 3px solid `#0055FF` |
| 비활성 | `#6E6860` | 500 | 없음 |
| 배경선 | — | — | 2px solid `#E8E4DC` (전체 너비) |

---

## 변경 범위

- **파일**: `src/app/services/naver-ads/page.tsx`
- **위치**: Q3 카드 내 세그먼트 컨트롤 영역 (`A 배지 + 탭 버튼` 부분)
- **추가 import 없음**: `motion`, `AnimatePresence` 이미 import됨

---

## 미확인 사항 (확인 후 반영)

- [ ] 버튼 레이블: `홈 광고 / 새소식 광고 / 내 밴드 목록 광고` 유지? 아니면 `홈 광고 / 새소식 / 내 밴드 목록` 으로 줄일지?
- [ ] 언더라인 굵기: 3px vs 4px 선호?
- [ ] 텍스트 크기: 현재 `text-sm` 유지? 더 크게?
- [ ] A 배지 위치: 탭과 같은 줄 유지? 위로 올릴지?

