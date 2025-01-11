'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { ArrowUpRight, ArrowDownRight, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react'
import type { ProjectWithDetails } from "@/types/dashboard"

// Mock data for insights
const keywordTrends = [
  { keyword: "UI/UX", mentions: 45, trend: "+12%" },
  { keyword: "Performance", mentions: 38, trend: "+8%" },
  { keyword: "Features", mentions: 32, trend: "-5%" },
  { keyword: "Support", mentions: 28, trend: "+15%" },
  { keyword: "Pricing", mentions: 25, trend: "-3%" },
]

const actionableInsights = [
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

const topicDistribution = [
  { topic: "User Interface", value: 35 },
  { topic: "Performance", value: 25 },
  { topic: "Features", value: 20 },
  { topic: "Support", value: 15 },
  { topic: "Documentation", value: 5 },
]

interface ProjectInsightsProps {
  project: ProjectWithDetails
}

export function ProjectInsights({ project }: ProjectInsightsProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200'
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'positive':
        return <ArrowUpRight className="h-4 w-4 text-green-500" />
      case 'negative':
        return <ArrowDownRight className="h-4 w-4 text-red-500" />
      default:
        return <TrendingUp className="h-4 w-4 text-yellow-500" />
    }
  }

  return (
    <div className="grid gap-6">
      {/* Topic Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Topic Distribution</CardTitle>
          <CardDescription>
            Distribution of feedback topics across all sources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ChartContainer>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topicDistribution}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis
                    dataKey="topic"
                    className="text-sm text-muted-foreground"
                  />
                  <YAxis
                    className="text-sm text-muted-foreground"
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip content={<ChartTooltip />} />
                  <Bar
                    dataKey="value"
                    fill="var(--primary)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* Keyword Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Keyword Trends</CardTitle>
          <CardDescription>
            Most mentioned keywords and their trends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {keywordTrends.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="space-y-1">
                  <p className="font-medium">{item.keyword}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.mentions} mentions
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={
                    item.trend.startsWith('+')
                      ? 'bg-green-100 text-green-700 border-green-200'
                      : 'bg-red-100 text-red-700 border-red-200'
                  }
                >
                  {item.trend}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actionable Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Actionable Insights</CardTitle>
          <CardDescription>
            Key findings that require attention
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {actionableInsights.map((insight) => (
              <div
                key={insight.id}
                className="flex items-start space-x-4 rounded-lg border p-4"
              >
                <div className="mt-0.5">
                  {insight.priority === 'high' ? (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{insight.title}</p>
                    {getTrendIcon(insight.trend)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {insight.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={getPriorityColor(insight.priority)}
                    >
                      {insight.priority.toUpperCase()}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Impact: {insight.impact}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Take Action
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

