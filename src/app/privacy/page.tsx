import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${SITE_CONFIG.name} 개인정보처리방침`,
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "제1조 (개인정보의 처리 목적)",
    content: `${SITE_CONFIG.name}(이하 "회사")은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

1. 서비스 문의 및 상담 처리
   - 고객의 문의사항 접수 및 답변, 서비스 안내, 상담 연락 등의 목적으로 개인정보를 처리합니다.`,
  },
  {
    title: "제2조 (처리하는 개인정보 항목)",
    content: `회사는 다음의 개인정보 항목을 처리하고 있습니다.

1. 문의 및 상담 접수
   - 필수 항목: 성명, 연락처(휴대폰번호), 이메일 주소
   - 선택 항목: 회사명, 문의 유형, 문의 내용

2. 자동 수집 항목
   - 서비스 이용 과정에서 IP 주소, 서비스 이용 기록, 방문 일시 등이 자동으로 생성되어 수집될 수 있습니다.`,
  },
  {
    title: "제3조 (개인정보의 처리 및 보유 기간)",
    content: `① 회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.

② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.

1. 문의 및 상담 처리
   - 보유 기간: 상담 종료 후 즉시 삭제 (최대 3개월)
   - 관련 법령: 해당 없음`,
  },
  {
    title: "제4조 (개인정보의 제3자 제공)",
    content: `① 회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.

② 현재 회사는 정보주체의 개인정보를 제3자에게 제공하지 않습니다.`,
  },
  {
    title: "제5조 (개인정보처리의 위탁)",
    content: `① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.

1. 이메일 발송 서비스
   - 수탁업체: Google LLC (Gmail)
   - 위탁 업무: 문의 접수 이메일 발송

② 회사는 위탁계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무 수행 목적 외 개인정보 처리 금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.`,
  },
  {
    title: "제6조 (정보주체의 권리·의무 및 행사 방법)",
    content: `① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.

1. 개인정보 열람 요구
2. 오류 등이 있을 경우 정정 요구
3. 삭제 요구
4. 처리 정지 요구

② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.

③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.

④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.`,
  },
  {
    title: "제7조 (개인정보의 파기)",
    content: `① 회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.

② 정보주체로부터 동의받은 개인정보 보유 기간이 경과하거나 처리 목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.

③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
1. 파기 절차: 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
2. 파기 방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.`,
  },
  {
    title: "제8조 (개인정보의 안전성 확보 조치)",
    content: `회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.

1. 관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육
2. 기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치
3. 물리적 조치: 전산실, 자료보관실 등의 접근 통제`,
  },
  {
    title: "제9조 (개인정보 보호책임자)",
    content: `① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 정보주체의 개인정보 관련 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

▶ 개인정보 보호책임자
- 성명: 핀잇 개인정보 보호담당자
- 연락처: ${SITE_CONFIG.phone}
- 이메일: ${SITE_CONFIG.email}

② 정보주체는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.`,
  },
  {
    title: "제10조 (권익침해 구제 방법)",
    content: `정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁 해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고 및 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.

1. 개인정보분쟁조정위원회: (국번 없이) 1833-6972 (www.kopico.go.kr)
2. 개인정보침해신고센터: (국번 없이) 118 (privacy.kisa.or.kr)
3. 대검찰청: (국번 없이) 1301 (www.spo.go.kr)
4. 경찰청: (국번 없이) 182 (ecrm.cyber.go.kr)`,
  },
  {
    title: "제11조 (개인정보 처리방침의 변경)",
    content: `① 이 개인정보처리방침은 2025년 1월 1일부터 적용됩니다.

② 이전의 개인정보처리방침은 아래에서 확인하실 수 있습니다.
- 해당 없음 (최초 시행)`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ background: "#F6F3EC" }}>
      {/* 헤더 */}
      <section className="pt-32 pb-10" style={{ background: "#F0F5FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#0055FF" }}>
            Legal
          </p>
          <h1
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "Pretendard, sans-serif", color: "#1C1814" }}
          >
            개인정보처리방침
          </h1>
          <p className="text-base" style={{ color: "#6E6860" }}>
            시행일: 2025년 1월 1일 &nbsp;|&nbsp; {SITE_CONFIG.name}
          </p>
        </div>
      </section>

      {/* 본문 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 개요 */}
          <div
            className="p-6 rounded-2xl mb-12"
            style={{ background: "#ffffff", border: "1px solid #DBEAFE" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "#4A4540" }}>
              {SITE_CONFIG.name}(이하 &ldquo;회사&rdquo;)은 개인정보 보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령상의 개인정보 보호 규정을 준수하며, 이용자의 개인정보 보호를 위하여 최선을 다하고 있습니다. 이 방침은 회사가 운영하는 웹사이트({SITE_CONFIG.url})에 적용됩니다.
            </p>
          </div>

          {/* 조항 목록 */}
          <div className="flex flex-col gap-10">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h2
                  className="text-lg font-bold mb-4 pb-3"
                  style={{
                    color: "#1C1814",
                    borderBottom: "2px solid #DBEAFE",
                    fontFamily: "Pretendard, sans-serif",
                  }}
                >
                  {section.title}
                </h2>
                <div
                  className="text-sm leading-8 whitespace-pre-wrap"
                  style={{ color: "#4A4540" }}
                >
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* 하단 연락처 */}
          <div
            className="mt-16 p-6 rounded-2xl"
            style={{ background: "#ffffff", border: "1px solid #DBEAFE" }}
          >
            <h3 className="font-bold mb-3" style={{ color: "#1C1814" }}>개인정보 관련 문의</h3>
            <p className="text-sm mb-1" style={{ color: "#4A4540" }}>
              전화: <a href={`tel:${SITE_CONFIG.phone}`} style={{ color: "#0055FF" }}>{SITE_CONFIG.phone}</a>
            </p>
            <p className="text-sm" style={{ color: "#4A4540" }}>
              이메일: <a href={`mailto:${SITE_CONFIG.email}`} style={{ color: "#0055FF" }}>{SITE_CONFIG.email}</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
