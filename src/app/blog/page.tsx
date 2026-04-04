import { getAllBlogPosts } from "@/lib/mdx";
import BlogCard from "@/components/blog/BlogCard";
import FadeInSection from "@/components/common/FadeInSection";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "블로그",
  description: "디지털 광고 인사이트, 네이버광고, 구글광고, SNS광고 최신 트렌드와 실무 팁을 공유합니다.",
  path: "/blog",
});

const CATEGORIES = ["전체", "네이버광고", "구글광고", "SNS광고"];

export default function BlogPage() {
  const posts = getAllBlogPosts();
  return (
    <>
      {/* 히어로 */}
      <section className="pt-32 pb-12" style={{ background: "#F6F3EC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00D4FF" }}>
              블로그
            </p>
            <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Pretendard, sans-serif", color: "#1C1814" }}>
              디지털 광고 인사이트
            </h1>
            <p className="text-lg" style={{ color: "#6E6860" }}>
              실무 경험을 바탕으로 한 광고 전략과 최신 트렌드를 공유합니다
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 콘텐츠 */}
      <section className="section-padding" style={{ background: "#F6F3EC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* 메인 영역 */}
            <div className="flex-1">
              {posts.length === 0 ? (
                <div className="text-center py-20" style={{ color: "#6E6860" }}>
                  <p className="text-lg">아직 게시글이 없습니다.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {posts.map((post, i) => (
                    <FadeInSection key={post.slug} delay={i * 0.05} direction="scale">
                      <BlogCard post={post} />
                    </FadeInSection>
                  ))}
                </div>
              )}
            </div>

            {/* 사이드바 */}
            <aside className="lg:w-72 shrink-0">
              <FadeInSection direction="left">
                {/* 카테고리 */}
                <div
                  className="rounded-xl p-5 mb-6"
                  style={{ background: "#EDEAE1", border: "1px solid #CEC9B8" }}
                >
                  <h3 className="font-bold mb-4" style={{ color: "#1C1814" }}>카테고리</h3>
                  <ul className="flex flex-col gap-2">
                    {CATEGORIES.map((cat) => {
                      const count = cat === "전체" ? posts.length : posts.filter((p) => p.category === cat).length;
                      return (
                        <li key={cat}>
                          <button
                            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors hover:bg-black/5"
                            style={{ color: "#4A4540" }}
                          >
                            <span>{cat}</span>
                            <span
                              className="px-2 py-0.5 rounded-full text-xs"
                              style={{ background: "#CEC9B8", color: "#6E6860" }}
                            >
                              {count}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* 최신 글 */}
                <div
                  className="rounded-xl p-5"
                  style={{ background: "#EDEAE1", border: "1px solid #CEC9B8" }}
                >
                  <h3 className="font-bold mb-4" style={{ color: "#1C1814" }}>최신 글</h3>
                  <ul className="flex flex-col gap-3">
                    {posts.slice(0, 5).map((post) => (
                      <li key={post.slug}>
                        <a
                          href={`/blog/${post.slug}`}
                          className="block text-sm leading-snug transition-colors hover:text-[#00D4FF]"
                          style={{ color: "#4A4540" }}
                        >
                          {post.title}
                        </a>
                        <span className="text-xs mt-1" style={{ color: "#6E6860" }}>
                          {new Date(post.date).toLocaleDateString("ko-KR")}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
