'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { LayoutDashboard, FolderKanban, MessageSquare, FileText, Settings, HelpCircle, Search, Plus, Cable, LineChart } from 'lucide-react'
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Project } from "@/types/dashboard"
import Image from 'next/image'
import { siteConfig } from '@/data/site-config'
import Logo from '../logo'

// Mock projects data
const mockProjects: Project[] = [
  {
    id: "1",
    name: "Website Feedback",
    createdAt: new Date(),
    status: "active",
    metrics: {
      sentimentScore: 8.5,
      feedbackCount: 1250,
      lastUpdated: new Date(),
      trendingTopics: ["UI", "Performance"]
    }
  },
  {
    id: "2",
    name: "Mobile App Reviews",
    createdAt: new Date(),
    status: "active",
    metrics: {
      sentimentScore: 7.8,
      feedbackCount: 890,
      lastUpdated: new Date(),
      trendingTopics: ["Speed", "Features"]
    }
  }
]

export function DashboardNav() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [projects, setProjects] = useState(mockProjects)

  // Get current project ID from pathname
  const currentProjectId = pathname.split('/projects/')[1]?.split('/')[0]
  const currentProject = projects.find(p => p.id === currentProjectId)

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getProjectMenuItems = (projectId: string) => [
    { name: 'Overview', href: `/dashboard/projects/${projectId}`, icon: LayoutDashboard },
    { name: 'Feedback', href: `/dashboard/projects/${projectId}/feedback`, icon: MessageSquare },
    { name: 'Data Sources', href: `/dashboard/projects/${projectId}/sources`, icon: Cable },
    { name: 'Reports', href: `/dashboard/projects/${projectId}/reports`, icon: FileText },
    { name: 'Insights', href: `/dashboard/projects/${projectId}/insights`, icon: LineChart },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <Logo />
          <span className="text-xl font-bold">QuickFeel</span>
        </div>
        <div className="px-4 py-2">
          <Input
            type="search"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <SidebarGroup>
            <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === '/dashboard'}
                  >
                    <Link href="/dashboard">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Overview
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center justify-between">
              <span>Projects</span>
              <Button variant="ghost" size="icon" className="h-4 w-4">
                <Plus className="h-4 w-4" />
              </Button>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {filteredProjects.map((project) => (
                  <SidebarMenuItem key={project.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={currentProjectId === project.id}
                    >
                      <Link href={`/dashboard/projects/${project.id}`}>
                        <FolderKanban className="mr-2 h-4 w-4" />
                        {project.name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>System</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === '/dashboard/settings'}
                  >
                    <Link href="/dashboard/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === '/dashboard/help'}
                  >
                    <Link href="/dashboard/help">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Help & Support
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

