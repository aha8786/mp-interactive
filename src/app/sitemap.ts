import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllBlogPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/naver-ads`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const blogPosts = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: post.slug === "naver-band-ads-guide" ? 0.85 : 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
