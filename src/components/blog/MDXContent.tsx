interface MDXContentProps {
  content: string;
}

// 간단한 마크다운 렌더러 (MDX 파일의 컨텐츠를 HTML로 변환)
function parseMarkdown(md: string): string {
  return md
    // 코드 블록
    .replace(/```(\w+)?\n([\s\S]*?)```/g, "<pre><code>$2</code></pre>")
    // 인라인 코드
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // H1~H6
    .replace(/^###### (.+)$/gm, "<h6>$1</h6>")
    .replace(/^##### (.+)$/gm, "<h5>$1</h5>")
    .replace(/^#### (.+)$/gm, "<h4>$1</h4>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    // 인용구
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    // 볼드
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // 이탤릭
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // 링크
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // 테이블
    .replace(/^\|(.+)\|$/gm, (match, content) => {
      const cells = content.split("|").map((c: string) => c.trim());
      if (cells.every((c: string) => /^[-:]+$/.test(c))) return "";
      return (
        "<tr>" +
        cells.map((c: string) => `<td>${c}</td>`).join("") +
        "</tr>"
      );
    })
    // 리스트
    .replace(/^(\d+)\. (.+)$/gm, "<li>$2</li>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    // 단락
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[h|p|b|u|o|l|c|t|a|s])/gm, "");
}

export default function MDXContent({ content }: MDXContentProps) {
  // 테이블 래핑 처리
  let processed = parseMarkdown(content);
  processed = processed.replace(/(<tr>[\s\S]*?<\/tr>)+/g, (match) => `<table>${match}</table>`);

  return (
    <div
      className="mdx-content"
      dangerouslySetInnerHTML={{ __html: processed }}
    />
  );
}
