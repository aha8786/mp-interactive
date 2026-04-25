export const SITE_CONFIG = {
  name: "핀잇",
  nameEn: "MP Interactive",
  description:
    "밴드 광고를 전문으로 하는 디지털 마케팅 대행사. 데이터 기반 광고 전략으로 매출을 올려드립니다.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://pinit.it.kr").trim(),
  phone: "010-6664-8786",
  email: "pinit8786@gmail.com",
  address: "경상북도 울진군 울진읍 울진중앙로 138-5",
  businessHours: "평일 09:00 ~ 24:00",
  kakaoChannel: "http://pf.kakao.com/_ZZAuX/chat",
  instagram: "https://instagram.com/mpinteractive",
  blog: "https://blog.naver.com/mpinteractive",
};

export const NAV_LINKS = [
  {
    label: "서비스",
    href: "/services",
    children: [
      { label: "네이버 밴드 광고", href: "/services/naver-ads" },
      // { label: "구글 광고", href: "/services/google-ads" },  // 준비 후 활성화
      // { label: "SNS 광고", href: "/services/sns-ads" },       // 준비 후 활성화
    ],
  },
  // { label: "포트폴리오", href: "/portfolio" }, // 실적 준비 후 활성화
  // { label: "블로그", href: "/blog" }, // 준비 후 활성화
  { label: "문의하기", href: "/contact" },
];

export const STATS = [
  {
    number: 100,
    suffix: "억+",
    label: "누적 광고 집행액",
    sub: "국내 상위 광고 대행사",
  },
  {
    number: 200,
    suffix: "+",
    label: "파트너사 수",
    sub: "다양한 업종 경험",
  },
  {
    number: 340,
    suffix: "%",
    label: "평균 ROI",
    sub: "광고비 대비 매출",
  },
  {
    number: 98,
    suffix: "%",
    label: "고객 만족도",
    sub: "재계약률 기준",
  },
];

export const SERVICES = [
  {
    id: "naver-ads",
    title: "네이버 밴드 광고",
    description:
      "네이버 밴드 광고 전문 대행. 3,500만 국내 밴드 사용자에게 타겟 광고를 집행합니다.",
    features: ["밴드 스폰서", "피드 광고", "지역 타겟팅", "커뮤니티 광고"],
    href: "/services/naver-ads",
    color: "#03C75A",
  },
  // 준비 후 활성화
  // { id: "google-ads", title: "구글 광고", ... },
  // { id: "sns-ads", title: "SNS 광고", ... },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "무료 상담",
    description: "업종, 예산, 목표를 파악합니다",
  },
  {
    number: "02",
    title: "전략 수립",
    description: "데이터 분석 기반 맞춤 전략을 수립합니다",
  },
  {
    number: "03",
    title: "광고 집행",
    description: "정확한 타겟팅으로 광고를 시작합니다",
  },
  {
    number: "04",
    title: "최적화",
    description: "A/B 테스트로 지속 성과를 개선합니다",
  },
  {
    number: "05",
    title: "리포트",
    description: "주간/월간 성과 리포트를 제공합니다",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    content:
      "네이버 광고를 직접 하다가 맡겼는데 2달 만에 문의가 3배 늘었어요. 담당자분이 꼼꼼하게 관리해주시고 리포트도 깔끔하게 보내주셔서 너무 만족합니다.",
    author: "김○○ 대표",
    company: "강남 뷰티샵",
    industry: "뷰티·미용",
    rating: 5,
  },
  {
    id: 2,
    content:
      "구글 광고 전혀 몰랐는데 해외 주문이 생기기 시작했습니다. 핀잇 덕분에 해외 진출의 첫 걸음을 뗄 수 있었습니다.",
    author: "이○○ 대표",
    company: "패션 쇼핑몰",
    industry: "이커머스",
    rating: 5,
  },
  {
    id: 3,
    content:
      "광고비는 그대로인데 매출이 늘었어요. 최적화 실력이 대단합니다. 매달 리포트 보내주시고 개선 방향도 제시해주셔서 믿고 맡길 수 있어요.",
    author: "박○○ 대표",
    company: "인테리어 업체",
    industry: "인테리어",
    rating: 5,
  },
  {
    id: 4,
    content:
      "인스타그램 광고로 팔로워도 늘고 실제 매장 방문도 늘었습니다. SNS 운영부터 광고까지 체계적으로 도와주셔서 정말 감사해요.",
    author: "최○○ 원장",
    company: "피부관리샵",
    industry: "피부·미용",
    rating: 5,
  },
  {
    id: 5,
    content:
      "학원 등록률이 30% 이상 올랐습니다. 지역 타겟팅을 정말 잘 해주셔서 실제로 우리 학원 근처 학부모들한테 정확하게 광고가 나갔어요.",
    author: "정○○ 원장",
    company: "영어학원",
    industry: "교육",
    rating: 5,
  },
];

export const BUDGET_OPTIONS = [
  "월 50만원 미만",
  "월 50~100만원",
  "월 100~300만원",
  "월 300만원 이상",
];

export const INQUIRY_TYPES = [
  "네이버밴드광고",
  // "구글광고",  // 준비 후 활성화
  // "SNS광고",   // 준비 후 활성화
  "기타",
];
