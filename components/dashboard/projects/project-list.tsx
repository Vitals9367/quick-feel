"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, MoreVertical, Archive, Edit, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import type { Project } from "@/types/dashboard";

// Available data sources
const dataSources = [
  { id: "twitter", label: "Twitter" },
  { id: "zendesk", label: "Zendesk" },
  { id: "intercom", label: "Intercom" },
  { id: "trustpilot", label: "Trustpilot" },
  { id: "google-play", label: "Google Play Store" },
  { id: "app-store", label: "App Store" },
];

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "Website Feedback Analysis",
      createdAt: new Date("2024-01-01"),
      status: "active",
      metrics: {
        sentimentScore: 8.5,
        feedbackCount: 1250,
        lastUpdated: new Date("2024-01-10"),
      },
    },
    {
      id: "2",
      name: "Mobile App User Reviews",
      createdAt: new Date("2024-01-05"),
      status: "active",
      metrics: {
        sentimentScore: 7.8,
        feedbackCount: 890,
        lastUpdated: new Date("2024-01-10"),
      },
    },
  ]);

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  const handleCreateProject = () => {
    if (!newProjectName.trim()) return;

    const newProject: Project = {
      id: Math.random().toString(36).substr(2, 9),
      name: newProjectName,
      createdAt: new Date(),
      status: "active",
      metrics: {
        sentimentScore: 0,
        feedbackCount: 0,
        lastUpdated: new Date(),
      },
    };

    setProjects([...projects, newProject]);
    setNewProjectName("");
    setSelectedSources([]);
    setIsCreateDialogOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
              <DialogDescription>
                Set up a new project to start collecting and analyzing feedback.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Project name</Label>
                <Input
                  id="name"
                  placeholder="Enter project name"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label>Data Sources</Label>
                <div className="grid grid-cols-2 gap-4">
                  {dataSources.map((source) => (
                    <div
                      key={source.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={source.id}
                        checked={selectedSources.includes(source.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedSources([...selectedSources, source.id]);
                          } else {
                            setSelectedSources(
                              selectedSources.filter((id) => id !== source.id),
                            );
                          }
                        }}
                      />
                      <Label htmlFor={source.id}>{source.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsCreateDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleCreateProject}>Create Project</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">
                {project.name}
              </CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Archive className="mr-2 h-4 w-4" />
                    Archive
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Sentiment Score
                  </span>
                  <span className="font-medium">
                    {project.metrics.sentimentScore.toFixed(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Feedback Count
                  </span>
                  <span className="font-medium">
                    {project.metrics.feedbackCount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Last Updated
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {project.metrics.lastUpdated.toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
