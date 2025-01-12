import { PostCard } from "@/components/blog/post-card";
import { getAllCategories, getPostsByCategory } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = decodeURIComponent(params.category);
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${capitalizedCategory} Posts | QuickFeel Blog`,
    description: `Read all our blog posts about ${category}`,
  };
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params.category);
  const posts = await getPostsByCategory(category);

  if (!posts.length) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
        <p className="text-gray-500 md:text-xl">All posts about {category}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
