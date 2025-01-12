"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MessageSquare, Twitter, Globe, Star } from "lucide-react";

const sources = [
  {
    name: "Direct Feedback",
    value: 456,
    percentage: 40,
    trend: "+12%",
    icon: MessageSquare,
    color: "#2A9D8F",
  },
  {
    name: "Social Media",
    value: 289,
    percentage: 25,
    trend: "+8%",
    icon: Twitter,
    color: "#1DA1F2",
  },
  {
    name: "Website Reviews",
    value: 234,
    percentage: 20,
    trend: "+5%",
    icon: Globe,
    color: "#E9C46A",
  },
  {
    name: "App Store",
    value: 172,
    percentage: 15,
    trend: "+3%",
    icon: Star,
    color: "#E76F51",
  },
];

export function FeedbackSources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Sources</CardTitle>
        <CardDescription>
          Distribution of feedback across different channels
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sources.map((source) => (
            <div key={source.name} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="p-2 rounded-md"
                    style={{ backgroundColor: `${source.color}15` }}
                  >
                    <source.icon
                      className="h-4 w-4"
                      style={{ color: source.color }}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {source.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {source.value} responses
                    </p>
                  </div>
                </div>
                <div className="text-sm text-green-500 font-medium">
                  {source.trend}
                </div>
              </div>
              <Progress
                value={source.percentage}
                className="h-2"
                indicatorClassName="bg-current"
                style={{ color: source.color }}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
