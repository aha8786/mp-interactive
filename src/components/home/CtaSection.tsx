import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import FadeInSection from "@/components/common/FadeInSection";
import { SITE_CONFIG } from "@/lib/constants";

export default function CtaSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0055FF 0%, #00D4FF 100%)" }}
    >
      {/* 배경 장식 */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "rgba(255,255,255,0.05)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "rgba(0,0,0,0.1)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInSection direction="scale">
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Pretendard, sans-serif" }}
          >
            지금 바로 무료 상담 시작하세요
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10">
            24시간 내 담당자가 연락드립니다
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-base flex items-center gap-2 transition-all hover:shadow-lg hover:scale-105"
              style={{ background: "white", color: "#0055FF" }}
            >
              무료 상담 신청하기
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="px-8 py-4 rounded-xl font-bold text-base flex items-center gap-2 transition-all hover:bg-white/20"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <Phone size={18} />
              {SITE_CONFIG.phone}
            </a>
          </div>

        </FadeInSection>
      </div>
    </section>
  );
}
