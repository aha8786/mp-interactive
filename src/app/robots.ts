import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // 모든 검색 로봇: API 경로만 차단, JS/CSS 등 정적 리소스 허용
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // 네이버 검색 로봇(Yeti): 전체 허용
        userAgent: "Yeti",
        allow: "/",
      },
      {
        // 구글 검색 로봇: 전체 허용
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        // AI 검색·답변·학습 크롤러: 전체 허용
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "Bingbot",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
