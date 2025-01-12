export interface Project {
  id: string;
  name: string;
  createdAt: Date;
  status: "active" | "archived";
  metrics: {
    sentimentScore: number;
    feedbackCount: number;
    lastUpdated: Date;
    trendingTopics: string[];
  };
}

export interface DataSource {
  id: string;
  projectId: string;
  type: "survey" | "social" | "email" | "support" | "website";
  name: string;
  status: "active" | "inactive";
  connectedAt: Date;
  settings: {
    frequency: "realtime" | "hourly" | "daily" | "weekly";
    keywords?: string[];
    sentimentThreshold?: number;
  };
}

export interface FeedbackEntry {
  id: string;
  projectId: string;
  sourceId: string;
  content: string;
  sentiment: "positive" | "negative" | "neutral";
  createdAt: Date;
  source: {
    type: DataSource["type"];
    name: string;
  };
}

export interface ProjectWithDetails extends Project {
  dataSources: DataSource[];
  recentFeedback: FeedbackEntry[];
}
