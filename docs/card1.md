# 📌 Stats 섹션 — 카드 1번 구현 프롬프트

> ⚠️ 이 카드(700×450)는 **기준 카드(Card 1)**입니다.
> 이후 카드 2~4는 이 카드를 기준으로 언밸런싱하게 크기를 조정해 배치할 예정입니다.
> 지금은 카드 1번만 구현합니다. 다른 섹션/파일은 절대 수정하지 마세요.

---

## 적용 범위

```
수정 대상:  src/components/home/stats/StatCard01.tsx (신규 생성)
            src/components/home/stats/StatCard01.module.css (신규 생성)
수정 금지:  globals.css, layout.tsx, Header, Footer, HeroSection,
           ServicesSection, ProcessSection, CtaSection, 기타 모든 파일
```

---

## 카드 기본 스펙

```
width:         700px  ← 기준 크기 (다른 카드는 이 크기 기반으로 조정됨)
height:        450px
background:    #ffffff
border-radius: 60px
box-shadow:    0 20px 60px rgba(0,0,0,0.1)
overflow:      hidden
font-family:   'Noto Sans CJK KR', 'Apple SD Gothic Neo', sans-serif
```

---

## 1. 텍스트 영역 (카드 상단 중앙)

### 메인 타이틀
```
위치:        카드 상단 중앙 정렬
margin-top:  42px
font-size:   30px
font-weight: 700
color:       #111111
letter-spacing: -0.02em
z-index:     2 (SVG 위에 올라오게)
position:    relative

텍스트 내용: 글로벌 가입자 수 [1억 3000만명] 이상
            → [] 안의 "1억 3000만명"에 하이라이트 적용
```

### 하이라이트 스타일 (.hl 클래스)
```
color:          #111111 (글자색은 그대로 검정)
font-weight:    900
display:        inline-block
position:       relative

::after 의사요소 (밑줄 역할):
  content:        ''
  position:       absolute
  left:           0
  right:          0
  bottom:         -4px
  height:         7px
  background:     #6666EE  ← 보라색
  border-radius:  999px    ← 양 끝 완전 둥글게
  opacity:        0.85
```

### 서브타이틀
```
margin-top:     10px
font-size:      15px
font-weight:    400
color:          #888888
text-align:     center
position:       relative
z-index:        2
letter-spacing: -0.01em

텍스트 내용: 글로벌 커뮤니티에서 시작해보세요!
```

---

## 2. SVG 그래프 레이어

```
position: absolute
top: 0 / left: 0
width: 700 / height: 450
viewBox: "0 0 700 450"
z-index: 1 (텍스트보다 뒤)
```

### SVG defs 정의

```xml
<defs>
  <!-- 그래프 하단 그린 그라데이션 -->
  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%"   stop-color="#1EC800" stop-opacity="0.35"/>
    <stop offset="100%" stop-color="#1EC800" stop-opacity="0"/>
  </linearGradient>

  <!-- 점 glow 필터 -->
  <filter id="dotGlow" x="-80%" y="-80%" width="260%" height="260%">
    <feGaussianBlur stdDeviation="5" result="blur"/>
    <feMerge>
      <feMergeNode in="blur"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>

  <!-- 카드 경계 클리핑 (그라데이션이 카드 밖으로 나가지 않도록) -->
  <clipPath id="cardClip">
    <rect x="0" y="0" width="700" height="450" rx="60" ry="60"/>
  </clipPath>
</defs>
```

### 그라데이션 채우기 (선 아래 영역)

```xml
<!-- 선과 동일한 path + 하단 닫기 -->
<path
  d="M 0 360 C 80 360 120 280 200 260 C 280 240 300 320 390 290
     C 470 265 500 180 590 160 C 630 152 665 155 700 148
     L 700 450 L 0 450 Z"
  fill="url(#areaGrad)"
  clip-path="url(#cardClip)"
/>
```

### 메인 선 그래프

```xml
<!-- 왼쪽 끝(0)에서 오른쪽 끝(700)까지 이어지는 우상향 곡선 -->
<!-- 굴곡 2~3개의 물결형 커브 -->
<path
  d="M 0 360 C 80 360 120 280 200 260 C 280 240 300 320 390 290
     C 470 265 500 180 590 160 C 630 152 665 155 700 148"
  fill="none"
  stroke="#1EC800"
  stroke-width="9"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
```

---

## 3. 데이터 포인트 (점 4개)

### 점 공통 구조 (그린 점 — 점 1, 2, 4)

```xml
<!-- 외부 반투명 헤일로 -->
<circle cx={x} cy={y} r="16" fill="rgba(30,200,0,0.12)"/>
<!-- 메인 그린 dot + glow -->
<circle cx={x} cy={y} r="9"  fill="#1EC800" filter="url(#dotGlow)"/>
<!-- 흰 중심 -->
<circle cx={x} cy={y} r="4"  fill="white"/>
```

### 점 좌표

```
점 1: cx="100"  cy="318"  → 그린 스타일
점 2: cx="291"  cy="279"  → 그린 스타일
점 3: cx="486"  cy="223"  → 보라 강조 스타일 (아래 별도 명세)
점 4: cx="647"  cy="154"  → 그린 스타일
```

---

## 4. 점 3번 — 보라 강조 + 타이틀 연결 (핵심 포인트)

```xml
<!-- ① 타이틀 밑줄에서 내려오는 점선 연결선 -->
<line
  x1="486" y1="98"
  x2="486" y2="200"
  stroke="#6666EE"
  stroke-width="2"
  stroke-dasharray="5,5"
  stroke-opacity="0.6"
/>

<!-- ② 점선 시작점 (타이틀 밑줄 근처) 작은 원 -->
<circle cx="486" cy="98" r="4" fill="#6666EE" opacity="0.7"/>

<!-- ③ 외부 헤일로 2겹 (보라 계열) -->
<circle cx="486" cy="223" r="26" fill="rgba(102,102,238,0.10)"/>
<circle cx="486" cy="223" r="18" fill="rgba(102,102,238,0.15)"/>

<!-- ④ 메인 보라 dot + glow -->
<circle cx="486" cy="223" r="11" fill="#6666EE" filter="url(#dotGlow)"/>

<!-- ⑤ 흰 중심 -->
<circle cx="486" cy="223" r="4.5" fill="white"/>
```

**포인트 설명:**
- 점선이 타이틀의 `1억 3000만명` 하이라이트 밑줄(보라 #6666EE)과 시각적으로 이어지는 효과
- 점선 시작점 y=98은 타이틀 텍스트 하단과 맞닿는 위치
- 점선 끝점 y=200은 메인 dot(cy=223)과 살짝 간격을 두고 끝남
- 헤일로를 2겹으로 크게 만들어 다른 그린 점들보다 강조됨
- 색상 통일: 타이틀 밑줄 #6666EE = 점선 = 메인 dot 모두 동일 컬러

---

## 5. 레이어 순서 (z-index)

```
1. SVG 전체 (position: absolute, top:0, left:0)
   ├── 그라데이션 채우기 (가장 아래)
   ├── 선 그래프
   ├── 그린 점 1, 2, 4
   └── 보라 점 3 + 점선 연결 (가장 위)
2. .card-title (position: relative, z-index: 2) ← SVG 위에 올라옴
3. .card-sub   (position: relative, z-index: 2)
```

---

## 6. Claude Code 전달 방법

```
StatCard01.tsx 컴포넌트를 신규 생성해줘.
이 카드는 Stats 섹션의 첫 번째 카드이며,
이후 카드 2~4는 이 카드(700×450)를 기준 크기로 삼아
언밸런싱한 크기로 배치될 예정이야.

아래 명세대로 구현하고,
다른 파일(globals.css, layout.tsx, Header, Footer 등)은
절대 수정하지 말 것.

카드 스타일은 StatCard01.module.css로 분리해서 관리할 것.
```