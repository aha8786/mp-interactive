import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, company, inquiryTypes, message } = body;

    // 필수 필드 검증
    if (!name || !phone || !email) {
      return NextResponse.json({ error: "필수 필드가 누락되었습니다." }, { status: 400 });
    }

    // 환경변수 확인
    const {
      EMAIL_SERVER_HOST,
      EMAIL_SERVER_PORT,
      EMAIL_SERVER_USER,
      EMAIL_SERVER_PASSWORD,
      CONTACT_RECEIVE_EMAIL,
    } = process.env;

    if (!EMAIL_SERVER_HOST || !EMAIL_SERVER_USER || !EMAIL_SERVER_PASSWORD) {
      // 개발 환경: 콘솔에 출력
      console.log("=== 문의 접수 ===");
      console.log({ name, phone, email, company, inquiryTypes, message });
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_SERVER_HOST,
      port: Number(EMAIL_SERVER_PORT) || 587,
      secure: false,
      auth: {
        user: EMAIL_SERVER_USER,
        pass: EMAIL_SERVER_PASSWORD,
      },
    });

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 12px;">
        <h2 style="color: #0055FF; margin-bottom: 24px;">핀잇 새 문의가 접수되었습니다</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold; width: 120px; color: #555;">이름</td><td style="padding: 8px;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">연락처</td><td style="padding: 8px;">${phone}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">이메일</td><td style="padding: 8px;">${email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">회사명</td><td style="padding: 8px;">${company || "-"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">문의 유형</td><td style="padding: 8px;">${Array.isArray(inquiryTypes) ? inquiryTypes.join(", ") : "-"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">문의 내용</td><td style="padding: 8px; white-space: pre-wrap;">${message || "-"}</td></tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `"핀잇 홈페이지" <${EMAIL_SERVER_USER}>`,
      to: CONTACT_RECEIVE_EMAIL || EMAIL_SERVER_USER,
      subject: `[문의] ${name}님`,
      html: htmlContent,
      replyTo: email,
    });

    // 자동 회신 이메일
    await transporter.sendMail({
      from: `"핀잇" <${EMAIL_SERVER_USER}>`,
      to: email,
      subject: "[핀잇] 문의가 접수되었습니다",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #0055FF;">문의 접수 완료</h2>
          <p>${name}님, 문의해 주셔서 감사합니다!</p>
          <p>24시간 내 담당자가 연락드릴 예정입니다.</p>
          <p>급하신 경우 <a href="tel:010-6664-8786">010-6664-8786</a>으로 전화 주세요.</p>
          <p style="margin-top: 24px; color: #999; font-size: 12px;">핀잇 드림</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("이메일 발송 오류:", error);
    return NextResponse.json({ error: "이메일 발송에 실패했습니다." }, { status: 500 });
  }
}
