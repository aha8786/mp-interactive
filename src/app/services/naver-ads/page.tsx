import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import NaverBandAdsClient from "./NaverBandAdsClient";

export const metadata: Metadata = {
  title: "네이버 밴드 광고 대행 | 밴드 광고 전문 핀잇",
  description:
    "네이버 밴드 광고 전문 대행사 핀잇. 밴드 홈·새소식·내 밴드 목록 세 가지 지면에서 30~50대 핵심 소비층에게 정밀 타겟팅 밴드 광고를 집행합니다. 지역 광고·커뮤니티 광고 무료 상담.",
  keywords: [
    "네이버 밴드 광고",
    "밴드 광고",
    "네이버 밴드 광고 대행",
    "밴드 광고 대행",
    "밴드광고",
    "밴드광고대행",
    "네이버밴드광고",
    "네이버밴드광고대행",
    "밴드 스폰서 광고",
    "밴드 피드 광고",
    "밴드 지역 광고",
    "네이버 광고 대행사",
    "핀잇",
  ],
  openGraph: {
    title: "네이버 밴드 광고 대행 | 밴드 광고 전문 핀잇",
    description:
      "국내 MAU 1,800만 네이버 밴드에서 30~50대 핵심 소비층을 정밀 타겟팅. 밴드 홈·새소식·내 밴드 목록 광고 전문 대행.",
    url: `${SITE_CONFIG.url}/services/naver-ads`,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/naver-ads`,
  },
};

export default function NaverBandAdsPage() {
  return <NaverBandAdsClient />;
}
