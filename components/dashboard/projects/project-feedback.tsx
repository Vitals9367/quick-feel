"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/ui/data-table";
import {
  MessageSquare,
  Twitter,
  Globe,
  Star,
  AlertTriangle,
  CheckCircle,
  MinusCircle,
} from "lucide-react";
import { type ColumnDef } from "@tanstack/react-table";
import type { FeedbackEntry } from "@/types/dashboard";

const columns: ColumnDef<FeedbackEntry>[] = [
  {
    accessorKey: "content",
    header: "Feedback",
    cell: ({ row }) => {
      return (
        <div className="max-w-[500px] truncate">{row.getValue("content")}</div>
      );
    },
  },
  {
    accessorKey: "sentiment",
    header: "Sentiment",
    cell: ({ row }) => {
      const sentiment = row.getValue("sentiment") as string;
      return (
        <div className="flex items-center">
          {sentiment === "positive" && (
            <Badge
              variant="outline"
              className="bg-green-100 text-green-700 border-green-200"
            >
              <CheckCircle className="mr-1 h-3 w-3" />
              Positive
            </Badge>
          )}
          {sentiment === "negative" && (
            <Badge
              variant="outline"
              className="bg-red-100 text-red-700 border-red-200"
            >
              <AlertTriangle className="mr-1 h-3 w-3" />
              Negative
            </Badge>
          )}
          {sentiment === "neutral" && (
            <Badge
              variant="outline"
              className="bg-yellow-100 text-yellow-700 border-yellow-200"
            >
              <MinusCircle className="mr-1 h-3 w-3" />
              Neutral
            </Badge>
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "source.type",
    header: "Source",
    cell: ({ row }) => {
      const sourceType = row.getValue("source.type") as string;
      const sourceIcons = {
        survey: MessageSquare,
        social: Twitter,
        website: Globe,
        review: Star,
      };
      const Icon = sourceIcons[sourceType as keyof typeof sourceIcons] || Globe;
      return (
        <div className="flex items-center">
          <Icon className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="capitalize">{sourceType}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          {new Date(row.getValue("createdAt")).toLocaleDateString()}
        </div>
      );
    },
  },
];

const sentimentOptions = [
  {
    label: "Positive",
    value: "positive",
    icon: CheckCircle,
  },
  {
    label: "Neutral",
    value: "neutral",
    icon: MinusCircle,
  },
  {
    label: "Negative",
    value: "negative",
    icon: AlertTriangle,
  },
];

const sourceOptions = [
  {
    label: "Survey",
    value: "survey",
    icon: MessageSquare,
  },
  {
    label: "Social",
    value: "social",
    icon: Twitter,
  },
  {
    label: "Website",
    value: "website",
    icon: Globe,
  },
  {
    label: "Review",
    value: "review",
    icon: Star,
  },
];

// Generate mock data
const generateMockFeedback = (count: number): FeedbackEntry[] => {
  const feedbackItems: FeedbackEntry[] = [];
  const sentiments = ["positive", "negative", "neutral"] as const;
  const sources = ["survey", "social", "website", "review"] as const;

  for (let i = 0; i < count; i++) {
    feedbackItems.push({
      id: `feedback-${i}`,
      projectId: "1",
      sourceId: `source-${i}`,
      content: `This is feedback item ${i + 1}. ${
        Math.random() > 0.5
          ? "The product is working great and meets our expectations."
          : "There are some areas that need improvement."
      }`,
      sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
      createdAt: new Date(Date.now() - Math.random() * 10000000000),
      source: {
        type: sources[Math.floor(Math.random() * sources.length)],
        name: "Feedback Source",
      },
    });
  }

  return feedbackItems;
};

interface ProjectFeedbackProps {
  project: {
    id: string;
  };
}

export function ProjectFeedback({ project }: ProjectFeedbackProps) {
  const [data] = useState(() => generateMockFeedback(100));

  const filters = [
    {
      id: "sentiment",
      title: "Sentiment",
      options: sentimentOptions,
    },
    {
      id: "source.type",
      title: "Source",
      options: sourceOptions,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Feedback</h2>
          <p className="text-muted-foreground">
            View and manage feedback from all sources.
          </p>
        </div>
      </div>
      <DataTable columns={columns} data={data} filters={filters} />
    </div>
  );
}
