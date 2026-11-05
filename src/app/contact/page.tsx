import { Clock, MessageCircle, MessageSquare } from "lucide-react";
import FadeInSection from "@/components/common/FadeInSection";
import { SITE_CONFIG } from "@/lib/constants";

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "카카오톡",
    value: "카카오톡 채널로 문의하기",
    href: SITE_CONFIG.kakaoChannel,
    external: true,
    iconBg: "#FEE500",
    iconColor: "#3A1D1D",
  },
  {
    icon: MessageSquare,
    label: "문자 메시지",
    value: SITE_CONFIG.phone,
    href: `sms:${SITE_CONFIG.phone}`,
    external: false,
    iconBg: "rgba(0,85,255,0.15)",
    iconColor: "#0055FF",
  },
];

const STEPS = ["카카오톡 또는 문자로 문의", "업종 및 목표 파악 (10~15분)", "맞춤 광고 전략 제안 (무료)", "광고 집행 여부는 자유롭게 결정"];

export default function ContactPage() {
  return (
    <>
      {/* 히어로 */}
      <section className="pt-32 pb-12" style={{ background: "#F0F5FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#0055FF" }}>
              문의하기
            </p>
            <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Pretendard, sans-serif", color: "#1C1814" }}>
              무료 상담 신청
            </h1>
            <p className="text-lg" style={{ color: "#6B7280" }}>
              카카오톡 또는 문자 메시지로 문의해주세요
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 문의 채널 */}
      <section className="section-padding" style={{ background: "#F0F5FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 좌측: 문의 채널 */}
            <FadeInSection direction="right">
              <h2 className="text-2xl font-bold mb-8" style={{ color: "#1C1814" }}>문의 채널</h2>
              <div className="flex flex-col gap-4 mb-8">
                {CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-4 p-5 rounded-2xl hover:opacity-80 transition-opacity"
                      style={{ background: "#ffffff", border: "1px solid #DBEAFE" }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: channel.iconBg }}
                      >
                        <Icon size={22} style={{ color: channel.iconColor }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#6E6860" }}>
                          {channel.label}
                        </p>
                        <p className="font-bold" style={{ color: "#1C1814" }}>{channel.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* 응대 시간 */}
              <div className="flex items-center gap-2 text-sm" style={{ color: "#6E6860" }}>
                <Clock size={16} style={{ color: "#0055FF" }} />
                응대 시간: {SITE_CONFIG.businessHours}
              </div>
            </FadeInSection>

            {/* 우측: 상담 진행 방식 */}
            <FadeInSection direction="left">
              <div className="p-8 rounded-2xl" style={{ background: "#ffffff", border: "1px solid #DBEAFE" }}>
                <h2 className="text-2xl font-bold mb-6" style={{ color: "#1C1814" }}>상담 진행 방식</h2>
                <ul className="flex flex-col gap-4" style={{ color: "#6E6860" }}>
                  {STEPS.map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0"
                        style={{ background: "rgba(0,85,255,0.2)", color: "#0055FF" }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
}
