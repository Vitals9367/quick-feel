import { Metadata } from 'next'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import { PostCard } from '@/components/blog/post-card'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | QuickFeel',
  description: 'Latest insights about customer feedback analysis and experience management',
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Our Blog
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Latest insights about customer feedback analysis and experience management
        </p>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Badge key={category.slug} variant="secondary">
            <Link href={`/blog/category/${category.slug}`}>
              {category.name} ({category.count})
            </Link>
          </Badge>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

