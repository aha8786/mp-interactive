import { getAllBlogPosts } from "@/lib/mdx";
import { SITE_CONFIG } from "@/lib/constants";

export async function GET() {
  const posts = getAllBlogPosts();
  const baseUrl = SITE_CONFIG.url;

  const items = posts
    .map((post) => {
      const url = `${baseUrl}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      const content = post.content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <description><![CDATA[${post.description}]]></description>
      <content:encoded><![CDATA[${content}]]></content:encoded>
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
