import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButton from "@/components/common/FloatingButton";
import { SITE_CONFIG } from "@/lib/constants";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | 디지털 광고 전문 대행사`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "광고대행사",
    "광고대행",
    "디지털마케팅",
    "네이버밴드",
    "네이버밴드광고대행",
    "네이버밴드광고",
    "구글광고",
    "SNS광고",
    "퍼포먼스마케팅",
    "핀잇",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_CODE",
    other: { "naver-site-verification": "NAVER_CODE" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_CONFIG.name,
  description: "디지털 광고 전문 대행사",
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "서울",
    addressCountry: "KR",
  },
  serviceArea: "대한민국 전국",
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
