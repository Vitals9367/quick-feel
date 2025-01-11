import { Project, DataSource, FeedbackEntry } from "@/types/dashboard"

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Website Feedback",
    createdAt: new Date(),
    status: "active",
    metrics: {
      sentimentScore: 8.5,
      feedbackCount: 1250,
      lastUpdated: new Date(),
      trendingTopics: ["UI", "Performance", "Speed"]
    }
  },
  {
    id: "2",
    name: "Mobile App Reviews",
    createdAt: new Date(),
    status: "active",
    metrics: {
      sentimentScore: 7.8,
      feedbackCount: 890,
      lastUpdated: new Date(),
      trendingTopics: ["Speed", "Features", "Bugs"]
    }
  }
]

export const mockDataSources: DataSource[] = [
  {
    id: "1",
    projectId: "1",
    type: "survey",
    name: "Customer Satisfaction Survey",
    status: "active",
    connectedAt: new Date(),
    settings: {
      frequency: "daily"
    }
  },
  {
    id: "2",
    projectId: "1",
    type: "social",
    name: "Twitter Mentions",
    status: "active",
    connectedAt: new Date(),
    settings: {
      frequency: "realtime",
      keywords: ["#quickfeel", "@quickfeel"]
    }
  }
]

export const mockFeedback: FeedbackEntry[] = [
  {
    id: "1",
    projectId: "1",
    sourceId: "1",
    content: "The new dashboard interface is incredibly intuitive. Love how easy it is to find everything!",
    sentiment: "positive",
    createdAt: new Date("2024-01-10T10:00:00"),
    source: {
      type: "survey",
      name: "Customer Satisfaction Survey"
    }
  },
  {
    id: "2",
    projectId: "1",
    sourceId: "2",
    content: "Loading times could be improved. Sometimes takes too long to load data.",
    sentiment: "negative",
    createdAt: new Date("2024-01-09T15:30:00"),
    source: {
      type: "website",
      name: "Website Reviews"
    }
  },
  {
    id: "3",
    projectId: "1",
    sourceId: "1",
    content: "The export functionality works well, but more format options would be helpful.",
    sentiment: "neutral",
    createdAt: new Date("2024-01-08T09:15:00"),
    source: {
      type: "survey",
      name: "Customer Satisfaction Survey"
    }
  }
]

export const mockKeywordTrends = [
  { keyword: "UI/UX", mentions: 45, trend: "+12%" },
  { keyword: "Performance", mentions: 38, trend: "+8%" },
  { keyword: "Features", mentions: 32, trend: "-5%" },
  { keyword: "Support", mentions: 28, trend: "+15%" },
  { keyword: "Pricing", mentions: 25, trend: "-3%" },
]

export const mockActionableInsights = [
  {
    id: 1,
    title: "Response Time Improvement Needed",
    description: "Customer support response times have increased by 25% this week",
    priority: "high",
    impact: "Customer Satisfaction",
    trend: "negative"
  },
  {
    id: 2,
    title: "Positive UI Feedback",
    description: "New dashboard layout receiving 92% positive feedback",
    priority: "medium",
    impact: "User Experience",
    trend: "positive"
  },
  {
    id: 3,
    title: "Feature Request Trend",
    description: "Mobile app integration most requested feature this month",
    priority: "medium",
    impact: "Product Development",
    trend: "neutral"
  }
]

export const mockTopicDistribution = [
  { topic: "User Interface", value: 35 },
  { topic: "Performance", value: 25 },
  { topic: "Features", value: 20 },
  { topic: "Support", value: 15 },
  { topic: "Documentation", value: 5 },
]

