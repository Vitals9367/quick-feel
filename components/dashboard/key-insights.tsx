"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertCircle, ThumbsUp } from "lucide-react";

const insights = [
  {
    title: "Rising Trend",
    description: "Product quality mentions increased by 25%",
    icon: TrendingUp,
    color: "#2A9D8F",
    priority: "Positive",
  },
  {
    title: "Action Required",
    description: "Customer service response time concerns",
    icon: AlertCircle,
    color: "#E76F51",
    priority: "High",
  },
  {
    title: "Improvement",
    description: "Mobile app usability feedback improved",
    icon: ThumbsUp,
    color: "#2A9D8F",
    priority: "Positive",
  },
  {
    title: "Declining Trend",
    description: "Website loading speed complaints",
    icon: TrendingDown,
    color: "#E9C46A",
    priority: "Medium",
  },
];

export function KeyInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Insights</CardTitle>
        <CardDescription>
          Important trends and patterns identified in recent feedback
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 rounded-lg border p-4"
            >
              <div
                className={`rounded-full p-2`}
                style={{ backgroundColor: `${insight.color}15` }}
              >
                <insight.icon
                  className="h-4 w-4"
                  style={{ color: insight.color }}
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium">{insight.title}</p>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      insight.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : insight.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                    }`}
                  >
                    {insight.priority}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
