"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { ProjectList } from "@/components/dashboard/projects/project-list";
import { ProjectManagement } from "@/components/dashboard/projects/project-management";
import { DashboardShell } from "@/components/dashboard/shell";

export default function ProjectsPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <DashboardHeader
          heading="Projects"
          text="Manage your feedback analysis projects."
        />
        <ProjectManagement onProjectCreate={console.log} />
      </div>
      <ProjectList />
    </DashboardShell>
  );
}
