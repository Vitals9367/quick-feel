"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/ui/date-picker-with-range";
import { Download } from "lucide-react";
import { addDays } from "date-fns";
import type { ProjectWithDetails } from "@/types/dashboard";

const reportTypes = [
  { id: "sentiment", name: "Sentiment Analysis" },
  { id: "trends", name: "Trend Analysis" },
  { id: "sources", name: "Source Performance" },
  { id: "keywords", name: "Keyword Analysis" },
];

interface ProjectReportsProps {
  project: ProjectWithDetails;
}

export function ProjectReports({ project }: ProjectReportsProps) {
  const [selectedReport, setSelectedReport] = useState(reportTypes[0].id);
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className="space-y-6">
      {/* Report Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
          <CardDescription>
            Configure and download custom reports for your feedback data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Report Type</label>
              <Select value={selectedReport} onValueChange={setSelectedReport}>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  {reportTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Date Range</label>
              <DatePickerWithRange date={date} setDate={setDate} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Data Source</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select data source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  {project.dataSources.map((source) => (
                    <SelectItem key={source.id} value={source.id}>
                      {source.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Previously generated reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "Monthly Sentiment Analysis",
                type: "Sentiment Analysis",
                date: "2024-01-01",
                size: "2.4 MB",
              },
              {
                name: "Q4 Trend Report",
                type: "Trend Analysis",
                date: "2023-12-15",
                size: "3.1 MB",
              },
              {
                name: "Source Performance Review",
                type: "Source Performance",
                date: "2023-12-01",
                size: "1.8 MB",
              },
            ].map((report, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="space-y-1">
                  <p className="font-medium">{report.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {report.type} • Generated on {report.date}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {report.size}
                  </span>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
