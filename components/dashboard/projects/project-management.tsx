"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import type { Project } from "@/types/dashboard";

const dataSources = [
  { id: "twitter", label: "Twitter" },
  { id: "zendesk", label: "Zendesk" },
  { id: "intercom", label: "Intercom" },
  { id: "trustpilot", label: "Trustpilot" },
  { id: "google-play", label: "Google Play Store" },
  { id: "app-store", label: "App Store" },
];

interface ProjectManagementProps {
  onProjectCreate: (project: Partial<Project>) => void;
}

export function ProjectManagement({ onProjectCreate }: ProjectManagementProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [updateFrequency, setUpdateFrequency] = useState("daily");
  const router = useRouter();

  const handleSubmit = () => {
    if (!name.trim()) return;

    const newProject = {
      name,
      status: "active" as const,
      createdAt: new Date(),
      metrics: {
        sentimentScore: 0,
        feedbackCount: 0,
        lastUpdated: new Date(),
        trendingTopics: [],
      },
    };

    onProjectCreate(newProject);
    setIsOpen(false);
    setName("");
    setSelectedSources([]);
    setUpdateFrequency("daily");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label>Data Sources</Label>
            <div className="grid grid-cols-2 gap-4">
              {dataSources.map((source) => (
                <div key={source.id} className="flex items-center space-x-2">
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
          <div className="grid gap-2">
            <Label htmlFor="frequency">Update Frequency</Label>
            <Select value={updateFrequency} onValueChange={setUpdateFrequency}>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realtime">Real-time</SelectItem>
                <SelectItem value="hourly">Hourly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Create Project</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
