import { ProjectDashboard } from "@/components/dashboard/projects/project-dashboard";
import { DashboardShell } from "@/components/dashboard/shell";

export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <DashboardShell>
      <ProjectDashboard projectId={params.projectId} />
    </DashboardShell>
  );
}
