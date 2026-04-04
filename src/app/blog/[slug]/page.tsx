import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { getBlogPost, getAllBlogPosts } from "@/lib/mdx";
import MDXContent from "@/components/blog/MDXContent";
import FadeInSection from "@/components/common/FadeInSection";
import CtaSection from "@/components/home/CtaSection";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | ${SITE_CONFIG.name}`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  네이버광고: "#03C75A",
  구글광고: "#4285F4",
  SNS광고: "#E1306C",
};

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const allPosts = getAllBlogPosts();
  const related = allPosts
    .filter((p) => p.slug !== params.slug && p.category === post.category)
    .slice(0, 3);

  const color = CATEGORY_COLORS[post.category] || "#0055FF";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE_CONFIG.name },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="pt-28 pb-10" style={{ background: "#F6F3EC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
              style={{ color: "#6E6860" }}
            >
              <ArrowLeft size={14} />
              블로그 목록으로
            </Link>

            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ background: `${color}22`, color }}
            >
              <Tag size={11} />
              {post.category}
            </span>

            <h1
              className="text-3xl md:text-4xl font-black mb-6 leading-tight"
              style={{ fontFamily: "Pretendard, sans-serif", color: "#1C1814" }}
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm" style={{ color: "#6E6860" }}>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {new Date(post.date).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readingTime}분 읽기
              </span>
            </div>

            <div className="mt-8 mb-12 h-px" style={{ background: "#CEC9B8" }} />
          </FadeInSection>
        </div>
      </section>

      {/* 본문 */}
      <section className="pb-16" style={{ background: "#F6F3EC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <MDXContent content={post.content} />
          </FadeInSection>
        </div>
      </section>

      {/* 문의 배너 */}
      <section className="py-12" style={{ background: "#EDEAE1" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div
              className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
              style={{ background: "linear-gradient(135deg, rgba(0,85,255,0.15), rgba(0,212,255,0.1))", border: "1px solid rgba(0,85,255,0.3)" }}
            >
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: "#1C1814" }}>무료 광고 상담 받아보세요</h3>
                <p style={{ color: "#6E6860" }}>전문가가 24시간 내 연락드립니다</p>
              </div>
              <Link href="/contact" className="btn-primary px-6 py-3 text-sm shrink-0">
                무료 상담 신청
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 관련 글 */}
      {related.length > 0 && (
        <section className="section-padding" style={{ background: "#F6F3EC" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="text-xl font-bold mb-6" style={{ color: "#1C1814" }}>관련 글</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="card p-5 block group"
                  >
                    <span className="text-xs font-semibold" style={{ color }}>
                      {p.category}
                    </span>
                    <h3
                      className="text-sm font-bold mt-2 mb-1 group-hover:text-[#00D4FF] transition-colors line-clamp-2"
                      style={{ color: "#1C1814" }}
                    >
                      {p.title}
                    </h3>
                    <span className="text-xs" style={{ color: "#6E6860" }}>
                      {new Date(p.date).toLocaleDateString("ko-KR")}
                    </span>
                  </Link>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
