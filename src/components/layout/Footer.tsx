import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin, Instagram, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#ffffff",
        borderTop: "1px solid #E8E4DC",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* 1열: 로고 + 소개 */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/images/band/logo1.png"
                alt="핀잇 로고"
                width={130}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#6E6860] leading-relaxed mb-4">
              데이터 기반 디지털 광고 전문 대행사. 네이버 밴드·구글·SNS 광고로 실질적인 매출 성장을 만들어드립니다.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.kakaoChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
                style={{ background: "#F0EDE6" }}
                aria-label="카카오 채널"
              >
                <MessageCircle size={16} className="text-[#6E6860]" />
              </a>
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "#F0EDE6", cursor: "default", opacity: 0.45 }}
                aria-label="인스타그램 (준비 중)"
                title="준비 중"
              >
                <Instagram size={16} className="text-[#6E6860]" />
              </span>
            </div>
          </div>

          {/* 2열: 서비스 */}
          <div>
            <h3 className="text-sm font-semibold mb-4" style={{ color: "#1C1814" }}>서비스</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "네이버 밴드 광고", href: "/services/naver-ads" },
                // { label: "구글 광고", href: "/services/google-ads" },  // 준비 후 활성화
                // { label: "SNS 광고", href: "/services/sns-ads" },       // 준비 후 활성화
                { label: "서비스 전체", href: "/services" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#6E6860] hover:text-[#1C1814] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3열: 빠른 링크 */}
          <div>
            <h3 className="text-sm font-semibold mb-4" style={{ color: "#1C1814" }}>빠른 링크</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                // { label: "포트폴리오", href: "/portfolio" }, // 실적 준비 후 활성화
                // { label: "블로그", href: "/blog" }, // 준비 후 활성화
                { label: "무료 상담", href: "/contact" },
                { label: "개인정보처리방침", href: "/privacy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#6E6860] hover:text-[#1C1814] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4열: 연락처 */}
          <div>
            <h3 className="text-sm font-semibold mb-4" style={{ color: "#1C1814" }}>연락처</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 text-sm text-[#6E6860] hover:text-[#1C1814] transition-colors"
                >
                  <Phone size={14} />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-sm text-[#6E6860] hover:text-[#1C1814] transition-colors"
                >
                  <Mail size={14} />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#6E6860]">
                <Clock size={14} className="shrink-0" />
                {SITE_CONFIG.businessHours}
              </li>
              <li className="flex items-start gap-2 text-sm text-[#6E6860]">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                {SITE_CONFIG.address}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 하단 바 */}
      <div style={{ borderTop: "1px solid #E8E4DC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6E6860]">
            © 2024 {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-[#6E6860] hover:text-[#1C1814] transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-xs text-[#6E6860] hover:text-[#1C1814] transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
