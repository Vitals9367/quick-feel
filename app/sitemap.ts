import { getAllPosts } from "@/lib/posts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getAllPosts();
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "/").replace(/\/+$/, "");

  const baseSitemap = [
    {
      url: baseUrl,
      lastModified: new Date().toString(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date().toString(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date().toString(),
    },
  ];

  if (!allPosts) return baseSitemap;

  const posts = allPosts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.date,
  }));

  // Date of most recent post
  baseSitemap.forEach((entity) => (entity.lastModified = allPosts[0].date));

  return [...baseSitemap, ...posts];
}
