import { getAllBlogPosts } from "@/lib/mdx";
import { SITE_CONFIG } from "@/lib/constants";

function markdownToHtml(markdown: string, baseUrl: string): string {
  return (
    markdown
      // 헤딩
      .replace(/^### (.+)$/gm, "<h3>$1</h3>")
      .replace(/^## (.+)$/gm, "<h2>$1</h2>")
      .replace(/^# (.+)$/gm, "<h1>$1</h1>")
      // 굵게/기울임
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      // 인용구
      .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
      // 코드 블록
      .replace(/```[\w]*\n([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
      // 인라인 코드
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      // 상대경로 링크 → 절대경로
      .replace(/\[([^\]]+)\]\(\/([^)]*)\)/g, `<a href="${baseUrl}/$2">$1</a>`)
      // 외부 링크
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2">$1</a>')
      // 표 (간단 처리)
      .replace(/^\|.+\|$/gm, (row) => {
        if (/^[\s|:-]+$/.test(row)) return "";
        const cells = row
          .split("|")
          .filter((c) => c.trim())
          .map((c) => `<td>${c.trim()}</td>`)
          .join("");
        return `<tr>${cells}</tr>`;
      })
      // 순서 없는 목록
      .replace(/^[-*] (.+)$/gm, "<li>$1</li>")
      // 순서 있는 목록
      .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
      // 빈 줄 → 단락
      .replace(/\n{2,}/g, "</p><p>")
      .replace(/^(?!<)(.+)$/gm, "$1")
  );
}

export async function GET() {
  const posts = getAllBlogPosts();
  const baseUrl = SITE_CONFIG.url;

  const items = posts
    .map((post) => {
      const url = `${baseUrl}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      const htmlContent = markdownToHtml(post.content, baseUrl);
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <description><![CDATA[${post.description}]]></description>
      <content:encoded><![CDATA[<p>${htmlContent}</p>]]></content:encoded>
    </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${SITE_CONFIG.name} 블로그]]></title>
    <link>${baseUrl}/blog</link>
    <description><![CDATA[${SITE_CONFIG.description}]]></description>
    <language>ko</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
