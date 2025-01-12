import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import readingTime from "reading-time";
import type { BlogPost, BlogCategory } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    image: data.image,
    category: data.category,
    tags: data.tags || [],
    content: processedContent.toString(),
    readingTime: readingTime(content).text,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostsByCategory(
  category: string,
): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase(),
  );
}

export async function getAllCategories(): Promise<BlogCategory[]> {
  const posts = await getAllPosts();
  const categories = posts.reduce(
    (acc, post) => {
      const category = post.category.toLowerCase();
      if (!acc[category]) {
        acc[category] = {
          name: post.category,
          slug: category,
          count: 0,
          description: `All posts about ${post.category}`,
        };
      }
      acc[category].count++;
      return acc;
    },
    {} as Record<string, BlogCategory>,
  );

  return Object.values(categories);
}

export function generateSEOMetadata({
  title,
  description,
  image,
  type = "article",
  publishedTime,
  authors,
  tags,
}: {
  title: string;
  description: string;
  image?: string;
  type?: string;
  publishedTime?: string;
  authors?: string[];
  tags?: string[];
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type,
      publishedTime,
      authors,
      images: image ? [image] : undefined,
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
