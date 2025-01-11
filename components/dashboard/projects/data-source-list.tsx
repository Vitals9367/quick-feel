'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Settings2, Power, Trash2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { DataSource } from "@/types/dashboard"

export function DataSourceList({ projectId }: { projectId: string }) {
  const [dataSources, setDataSources] = useState<DataSource[]>([
    {
      id: "1",
      projectId,
      type: "survey",
      name: "Customer Satisfaction Survey",
      status: "active",
      connectedAt: new Date("2024-01-01"),
      settings: {
        frequency: "daily"
      }
    },
    {
      id: "2",
      projectId,
      type: "social",
      name: "Twitter Mentions",
      status: "active",
      connectedAt: new Date("2024-01-05"),
      settings: {
        frequency: "realtime",
        keywords: ["#quickfeel", "@quickfeel"]
      }
    }
  ])

  const [isAddSourceDialogOpen, setIsAddSourceDialogOpen] = useState(false)
  const [newSource, setNewSource] = useState({
    type: "",
    name: "",
    frequency: "daily"
  })

  const handleAddSource = () => {
    if (!newSource.type || !newSource.name) return

    const source: DataSource = {
      id: Math.random().toString(36).substr(2, 9),
      projectId,
      type: newSource.type as DataSource['type'],
      name: newSource.name,
      status: "active",
      connectedAt: new Date(),
      settings: {
        frequency: newSource.frequency as DataSource['settings']['frequency']
      }
    }

    setDataSources([...dataSources, source])
    setNewSource({ type: "", name: "", frequency: "daily" })
    setIsAddSourceDialogOpen(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Data Sources</h2>
        <Dialog open={isAddSourceDialogOpen} onOpenChange={setIsAddSourceDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Data Source
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Data Source</DialogTitle>
              <DialogDescription>
                Connect a new data source to collect feedback.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="type">Source Type</Label>
                <Select
                  value={newSource.type}
                  onValueChange={(value) => setNewSource({ ...newSource, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="survey">Survey</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="support">Support Tickets</SelectItem>
                    <SelectItem value="website">Website Reviews</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Source Name</Label>
                <Input
                  id="name"
                  value={newSource.name}
                  onChange={(e) => setNewSource({ ...newSource, name: e.target.value })}
                  placeholder="Enter source name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="frequency">Update Frequency</Label>
                <Select
                  value={newSource.frequency}
                  onValueChange={(value) => setNewSource({ ...newSource, frequency: value })}
                >
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
              <Button variant="outline" onClick={() => setIsAddSourceDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddSource}>Add Source</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {dataSources.map((source) => (
          <Card key={source.id}>
            <CardContent className="flex items-center justify-between p-6">
              <div className="space-y-1">
                <h3 className="font-medium">{source.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge variant={source.status === 'active' ? 'default' : 'secondary'}>
                    {source.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Connected {source.connectedAt.toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Settings2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Power className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-red-600">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

