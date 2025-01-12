"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import type { ProjectWithDetails } from "@/types/dashboard";

// Mock data for the sentiment trend
const sentimentTrend = [
  { date: "2024-01-01", score: 7.5 },
  { date: "2024-01-08", score: 8.0 },
  { date: "2024-01-15", score: 7.8 },
  { date: "2024-01-22", score: 8.2 },
  { date: "2024-01-29", score: 8.5 },
];

interface ProjectOverviewProps {
  project: ProjectWithDetails;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Key Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Key Metrics</CardTitle>
          <CardDescription>Current project performance</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                Sentiment Score
              </dt>
              <dd className="text-2xl font-bold">
                {project.metrics.sentimentScore.toFixed(1)}/10
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                Total Feedback
              </dt>
              <dd className="text-2xl font-bold">
                {project.metrics.feedbackCount}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                Active Sources
              </dt>
              <dd className="text-2xl font-bold">
                {project.dataSources.length}
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      {/* Sentiment Trend */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Sentiment Trend</CardTitle>
          <CardDescription>30-day sentiment score history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ChartContainer>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={sentimentTrend}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis
                    dataKey="date"
                    className="text-sm text-muted-foreground"
                  />
                  <YAxis
                    className="text-sm text-muted-foreground"
                    domain={[0, 10]}
                    ticks={[0, 2, 4, 6, 8, 10]}
                  />
                  <Tooltip content={<ChartTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#2A9D8F"
                    strokeWidth={2}
                    dot={false}
                    name="Sentiment Score"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Trending Topics</CardTitle>
          <CardDescription>
            Most discussed topics in recent feedback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.metrics.trendingTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-muted px-3 py-1 text-sm font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
