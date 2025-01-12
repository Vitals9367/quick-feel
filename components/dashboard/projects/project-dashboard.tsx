"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectOverview } from "./project-overview";
import { ProjectFeedback } from "./project-feedback";
import { DataSourceList } from "./data-source-list";
import { ProjectReports } from "./project-reports";
import { ProjectInsights } from "./project-insights";
import { ProjectControls } from "./project-controls";
import type { ProjectWithDetails } from "@/types/dashboard";

// Mock data fetching function
const fetchProjectDetails = async (
  projectId: string,
): Promise<ProjectWithDetails> => {
  // This would be replaced with actual API call
  return {
    id: projectId,
    name: "Website Feedback",
    createdAt: new Date(),
    status: "active",
    metrics: {
      sentimentScore: 8.5,
      feedbackCount: 1250,
      lastUpdated: new Date(),
      trendingTopics: ["UI", "Performance", "Speed"],
    },
    dataSources: [
      {
        id: "1",
        projectId,
        type: "survey",
        name: "Customer Satisfaction Survey",
        status: "active",
        connectedAt: new Date(),
        settings: {
          frequency: "daily",
        },
      },
    ],
    recentFeedback: [
      {
        id: "1",
        projectId,
        sourceId: "1",
        content: "Great improvements to the UI!",
        sentiment: "positive",
        createdAt: new Date(),
        source: {
          type: "survey",
          name: "Customer Satisfaction Survey",
        },
      },
    ],
  };
};

export function ProjectDashboard({ projectId }: { projectId: string }) {
  const [project, setProject] = useState<ProjectWithDetails | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchProjectDetails(projectId).then(setProject);
  }, [projectId]);

  const handleProjectUpdate = (updatedProject: ProjectWithDetails) => {
    setProject(updatedProject);
    // TODO: Implement API call to update project
  };

  const handleProjectDelete = async (projectId: string) => {
    // TODO: Implement API call to delete project
    router.push("/dashboard");
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
          <p className="text-muted-foreground">
            Project created on {project.createdAt.toLocaleDateString()}
          </p>
        </div>
        <ProjectControls
          project={project}
          onUpdate={handleProjectUpdate}
          onDelete={handleProjectDelete}
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-background w-full justify-start border-b rounded-none p-0">
          <TabsTrigger
            value="overview"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="feedback"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Feedback
          </TabsTrigger>
          <TabsTrigger
            value="sources"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Data Sources
          </TabsTrigger>
          <TabsTrigger
            value="reports"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Reports
          </TabsTrigger>
          <TabsTrigger
            value="insights"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Insights
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <ProjectOverview project={project} />
        </TabsContent>
        <TabsContent value="feedback" className="space-y-4">
          <ProjectFeedback project={project} />
        </TabsContent>
        <TabsContent value="sources" className="space-y-4">
          <DataSourceList projectId={project.id} />
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <ProjectReports project={project} />
        </TabsContent>
        <TabsContent value="insights" className="space-y-4">
          <ProjectInsights project={project} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
