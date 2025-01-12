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
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

const data = [
  { name: "Positive", value: 65, color: "#2A9D8F" },
  { name: "Neutral", value: 25, color: "#E9C46A" },
  { name: "Negative", value: 10, color: "#E76F51" },
];

const stats = [
  { name: "Total Feedback", value: "2,847" },
  { name: "Sentiment Score", value: "8.2/10" },
  { name: "Weekly Change", value: "+12%", trend: "up" },
];

export function SentimentOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sentiment Overview</CardTitle>
        <CardDescription>
          Overall customer sentiment analysis from the past 30 days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-8 md:grid-cols-[1fr,200px]">
          <div className="h-[300px]">
            <ChartContainer>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        name={entry.name}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltip />} />
                  <Legend
                    verticalAlign="middle"
                    align="right"
                    layout="vertical"
                    formatter={(value: string) => (
                      <span className="text-sm">{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="grid gap-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="flex flex-col space-y-1 rounded-lg border p-4"
              >
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </p>
                <p className="text-2xl font-bold">{stat.value}</p>
                {stat.trend && (
                  <p
                    className={`text-xs ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}
                  >
                    {stat.trend === "up" ? "↑" : "↓"} vs last week
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
