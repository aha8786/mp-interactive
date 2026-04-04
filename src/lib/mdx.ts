import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  thumbnail: string;
  content: string;
  readingTime: number;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  keyMetric: string;
  keyMetricLabel: string;
  client: string;
  industry: string;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");
const PORTFOLIO_DIR = path.join(process.cwd(), "src/content/portfolio");

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      category: data.category || "",
      description: data.description || "",
      thumbnail: data.thumbnail || "/blog/placeholder.jpg",
      content,
      readingTime: calculateReadingTime(content),
    } as BlogPost;
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    category: data.category || "",
    description: data.description || "",
    thumbnail: data.thumbnail || "/blog/placeholder.jpg",
    content,
    readingTime: calculateReadingTime(content),
  };
}

export function getAllPortfolioItems(): PortfolioItem[] {
  if (!fs.existsSync(PORTFOLIO_DIR)) return [];
  const files = fs
    .readdirSync(PORTFOLIO_DIR)
    .filter((f) => f.endsWith(".mdx"));
  const items = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const filePath = path.join(PORTFOLIO_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || "",
      category: data.category || "",
      description: data.description || "",
      thumbnail: data.thumbnail || "/portfolio/placeholder.jpg",
      keyMetric: data.keyMetric || "",
      keyMetricLabel: data.keyMetricLabel || "",
      client: data.client || "",
      industry: data.industry || "",
      content,
    } as PortfolioItem;
  });
  return items;
}
