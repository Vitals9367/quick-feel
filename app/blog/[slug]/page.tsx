import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Clock, Tag } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { getPostBySlug, generateSEOMetadata } from '@/lib/blog'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = await getPostBySlug(params.slug)
    
    return generateSEOMetadata({
      title: `${post.title} | QuickFeel Blog`,
      description: post.description,
      image: post.image,
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    })
  } catch {
    return {
      title: 'Not Found | QuickFeel Blog',
      description: 'The requested blog post could not be found.',
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post
  
  try {
    post = await getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-4 text-center">
          <Badge variant="secondary" className="mx-auto">
            {post.category}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {post.description}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-4">
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.author.role}</p>
          </div>
          <span className="text-muted-foreground">•</span>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            {new Date(post.date).toLocaleDateString()}
          </div>
          <span className="text-muted-foreground">•</span>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-4 w-4" />
            {post.readingTime}
          </div>
        </div>

        {post.image && (
          <div className="aspect-video relative mt-8 overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div 
          className="prose prose-lg mx-auto mt-12 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-8 flex flex-wrap gap-2">
          <Tag className="h-4 w-4 text-muted-foreground" />
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}

