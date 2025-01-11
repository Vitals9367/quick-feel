'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const data = [
  { date: 'Jan 1', positive: 65, negative: 12, neutral: 23 },
  { date: 'Jan 8', positive: 72, negative: 8, neutral: 20 },
  { date: 'Jan 15', positive: 68, negative: 15, neutral: 17 },
  { date: 'Jan 22', positive: 75, negative: 10, neutral: 15 },
  { date: 'Jan 29', positive: 80, negative: 7, neutral: 13 },
  { date: 'Feb 5', positive: 78, negative: 9, neutral: 13 },
  { date: 'Feb 12', positive: 82, negative: 6, neutral: 12 },
]

export function TrendAnalysis() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <div className="space-y-1">
          <CardTitle>Sentiment Trends</CardTitle>
          <CardDescription>
            Track sentiment changes over time
          </CardDescription>
        </div>
        <Select defaultValue="30d">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="date"
                  className="text-sm text-muted-foreground"
                />
                <YAxis
                  className="text-sm text-muted-foreground"
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip content={<ChartTooltip />} />
                <Legend 
                  formatter={(value: string) => (
                    <span className="text-sm">{value}</span>
                  )}
                />
                <Line
                  type="monotone"
                  dataKey="positive"
                  stroke="#2A9D8F"
                  strokeWidth={2}
                  dot={false}
                  name="Positive"
                />
                <Line
                  type="monotone"
                  dataKey="neutral"
                  stroke="#E9C46A"
                  strokeWidth={2}
                  dot={false}
                  name="Neutral"
                />
                <Line
                  type="monotone"
                  dataKey="negative"
                  stroke="#E76F51"
                  strokeWidth={2}
                  dot={false}
                  name="Negative"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium text-muted-foreground">
              Positive Trend
            </div>
            <div className="text-2xl font-bold text-[#2A9D8F]">+17%</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium text-muted-foreground">
              Neutral Change
            </div>
            <div className="text-2xl font-bold text-[#E9C46A]">-11%</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium text-muted-foreground">
              Negative Trend
            </div>
            <div className="text-2xl font-bold text-[#E76F51]">-6%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

