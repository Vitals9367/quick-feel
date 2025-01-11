export interface Author {
  name: string
  avatar: string
  role: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: Author
  image?: string
  category: string
  tags: string[]
  content: string
  readingTime?: string
}

export interface BlogCategory {
  name: string
  description: string
  slug: string
  count: number
}

