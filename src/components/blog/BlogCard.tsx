import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { BlogPost } from "@/lib/mdx";

interface BlogCardProps {
  post: BlogPost;
}

const CATEGORY_COLORS: Record<string, string> = {
  네이버광고: "#03C75A",
  구글광고: "#4285F4",
  SNS광고: "#E1306C",
};

export default function BlogCard({ post }: BlogCardProps) {
  const color = CATEGORY_COLORS[post.category] || "#0055FF";

  return (
    <Link href={`/blog/${post.slug}`} className="card p-6 block group">
      {/* 썸네일 플레이스홀더 */}
      <div
        className="w-full h-44 rounded-xl mb-5 flex items-center justify-center"
        style={{ background: `${color}11`, border: `1px solid ${color}22` }}
      >
        <Tag size={36} style={{ color: `${color}66` }} />
      </div>

      {/* 카테고리 뱃지 */}
      <span
        className="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-3"
        style={{ background: `${color}22`, color }}
      >
        {post.category}
      </span>

      <h3
        className="font-bold mb-3 leading-snug group-hover:text-[#00D4FF] transition-colors line-clamp-2"
        style={{ color: "#1C1814" }}
      >
        {post.title}
      </h3>

      <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "#6E6860" }}>
        {post.description}
      </p>

      <div className="flex items-center gap-4 text-xs" style={{ color: "#6E6860" }}>
        <span className="flex items-center gap-1">
          <Calendar size={11} />
          {new Date(post.date).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={11} />
          {post.readingTime}분 읽기
        </span>
      </div>
    </Link>
  );
}
