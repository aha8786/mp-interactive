"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, Clock, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import FadeInSection from "@/components/common/FadeInSection";
import { SITE_CONFIG, INQUIRY_TYPES } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  email: string;
  company?: string;
  inquiryTypes: string[];
  message?: string;
  privacyAgreed: boolean;
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: { inquiryTypes: [] },
  });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
              24시간 내 담당자가 연락드립니다
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 폼 영역 */}
      <section className="section-padding" style={{ background: "#F0F5FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 좌측: 연락처 */}
            <FadeInSection direction="right">
              <h2 className="text-2xl font-bold mb-8" style={{ color: "#1C1814" }}>연락처 정보</h2>
              <div className="flex flex-col gap-6 mb-10">
                {[
                  { icon: Phone, label: "전화", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                  { icon: Mail, label: "이메일", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                  { icon: Clock, label: "응대 시간", value: `평일 ${SITE_CONFIG.businessHours}` },
                  { icon: MapPin, label: "주소", value: SITE_CONFIG.address },
                ].map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(0,85,255,0.15)" }}
                      >
                        <Icon size={18} style={{ color: "#0055FF" }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#6E6860" }}>
                          {item.label}
                        </p>
                        <p className="font-medium" style={{ color: "#1C1814" }}>{item.value}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block hover:opacity-80 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* 카카오 채널 버튼 */}
              <a
                href={SITE_CONFIG.kakaoChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
                style={{ background: "#FEE500", color: "#3A1D1D" }}
              >
                카카오 채널로 문의
              </a>

              {/* 안내 */}
              <div className="mt-10 p-5 rounded-xl" style={{ background: "#ffffff", border: "1px solid #DBEAFE" }}>
                <h3 className="font-semibold mb-3" style={{ color: "#1C1814" }}>상담 진행 방식</h3>
                <ul className="flex flex-col gap-2 text-sm" style={{ color: "#6E6860" }}>
                  {["문의 접수 후 24시간 내 담당자 연락", "업종 및 목표 파악 (10~15분)", "맞춤 광고 전략 제안 (무료)", "광고 집행 여부는 자유롭게 결정"].map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5"
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

            {/* 우측: 폼 */}
            <FadeInSection direction="left">
              {status === "success" ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl"
                  style={{ background: "#ffffff", border: "1px solid #DBEAFE" }}
                >
                  <CheckCircle2 size={60} style={{ color: "#03C75A" }} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "#1C1814" }}>문의가 접수되었습니다!</h3>
                  <p className="mb-8" style={{ color: "#6E6860" }}>
                    24시간 내 담당자가 연락드립니다. 감사합니다.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-primary px-6 py-3 text-sm"
                  >
                    새 문의하기
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="rounded-2xl p-8"
                  style={{ background: "#ffffff", border: "1px solid #DBEAFE" }}
                >
                  <h2 className="text-2xl font-bold mb-6" style={{ color: "#1C1814" }}>문의 폼</h2>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {/* 이름 */}
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#1C1814" }}>
                        이름 <span style={{ color: "#0055FF" }}>*</span>
                      </label>
                      <input
                        {...register("name", { required: "이름을 입력해주세요" })}
                        placeholder="홍길동"
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                        style={{
                          background: "#F8FBFF",
                          border: `1px solid ${errors.name ? "#EF4444" : "#BFDBFE"}`,
                          color: "#1C1814",
                        }}
                      />
                      {errors.name && <p className="text-xs mt-1" style={{ color: "#EF4444" }}>{errors.name.message}</p>}
                    </div>

                    {/* 연락처 */}
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#1C1814" }}>
                        연락처 <span style={{ color: "#0055FF" }}>*</span>
                      </label>
                      <input
                        {...register("phone", {
                          required: "연락처를 입력해주세요",
                          pattern: { value: /^01[0-9]-?\d{3,4}-?\d{4}$/, message: "올바른 휴대폰 번호를 입력해주세요" },
                        })}
                        placeholder="010-1234-5678"
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                        style={{
                          background: "#F8FBFF",
                          border: `1px solid ${errors.phone ? "#EF4444" : "#BFDBFE"}`,
                          color: "#1C1814",
                        }}
                      />
                      {errors.phone && <p className="text-xs mt-1" style={{ color: "#EF4444" }}>{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* 이메일 */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#1C1814" }}>
                      이메일 <span style={{ color: "#0055FF" }}>*</span>
                    </label>
                    <input
                      {...register("email", {
                        required: "이메일을 입력해주세요",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "올바른 이메일 형식을 입력해주세요" },
                      })}
                      type="email"
                      placeholder="example@company.com"
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "#F8FBFF",
                        border: `1px solid ${errors.email ? "#EF4444" : "#BFDBFE"}`,
                        color: "#1C1814",
                      }}
                    />
                    {errors.email && <p className="text-xs mt-1" style={{ color: "#EF4444" }}>{errors.email.message}</p>}
                  </div>

                  {/* 회사명 */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#1C1814" }}>회사명 (선택)</label>
                    <input
                      {...register("company")}
                      placeholder="(주)핀잇"
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: "#F8FBFF", border: "1px solid #BFDBFE", color: "#1C1814" }}
                    />
                  </div>

                  {/* 문의 유형 */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" style={{ color: "#1C1814" }}>문의 유형</label>
                    <div className="flex flex-wrap gap-2">
                      {INQUIRY_TYPES.map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            value={type}
                            {...register("inquiryTypes")}
                            className="accent-blue-500"
                          />
                          <span className="text-sm" style={{ color: "#4A4540" }}>{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 문의 내용 */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#1C1814" }}>문의 내용 (선택)</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="문의하실 내용을 자유롭게 작성해주세요."
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none"
                      style={{ background: "#F8FBFF", border: "1px solid #BFDBFE", color: "#1C1814" }}
                    />
                  </div>

                  {/* 개인정보 동의 */}
                  <div className="mb-6">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("privacyAgreed", { required: "개인정보 수집에 동의해주세요" })}
                        className="accent-blue-500 mt-1"
                      />
                      <span className="text-sm" style={{ color: "#6E6860" }}>
                        개인정보 수집 및 이용에 동의합니다. (필수)
                        <br />
                        <span className="text-xs">수집된 정보는 상담 목적으로만 활용되며, 상담 종료 후 즉시 삭제됩니다.</span>
                      </span>
                    </label>
                    {errors.privacyAgreed && (
                      <p className="text-xs mt-1" style={{ color: "#EF4444" }}>{errors.privacyAgreed.message}</p>
                    )}
                  </div>

                  {/* 에러 메시지 */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg mb-4" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
                      <AlertCircle size={14} style={{ color: "#EF4444" }} />
                      <p className="text-sm" style={{ color: "#EF4444" }}>오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full btn-primary py-3.5 text-base justify-center disabled:opacity-50"
                  >
                    {status === "loading" ? "전송 중..." : "무료 상담 신청하기"}
                  </button>
                </form>
              )}
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
}
