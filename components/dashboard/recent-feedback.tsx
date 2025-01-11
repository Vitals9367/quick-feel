'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const feedbackItems = [
  {
    id: 1,
    customer: {
      name: "Sarah Thompson",
      email: "sarah.t@example.com",
      avatar: "/avatars/sarah.jpg",
    },
    sentiment: "positive",
    content: "The new dashboard interface is incredibly intuitive. Love how easy it is to find everything!",
    source: "Email",
    time: "5 minutes ago"
  },
  {
    id: 2,
    customer: {
      name: "Michael Chen",
      email: "m.chen@example.com",
      avatar: "/avatars/michael.jpg",
    },
    sentiment: "negative",
    content: "Had trouble connecting my account with the API. The error messages weren't very helpful.",
    source: "Support Ticket",
    time: "23 minutes ago"
  },
  {
    id: 3,
    customer: {
      name: "Emily Rodriguez",
      email: "emily.r@example.com",
      avatar: "/avatars/emily.jpg",
    },
    sentiment: "neutral",
    content: "The export feature works well, but it would be nice to have more format options.",
    source: "In-App",
    time: "1 hour ago"
  },
  {
    id: 4,
    customer: {
      name: "James Wilson",
      email: "j.wilson@example.com",
      avatar: "/avatars/james.jpg",
    },
    sentiment: "positive",
    content: "Customer support team was extremely helpful in resolving my integration issues.",
    source: "Trustpilot",
    time: "2 hours ago"
  }
]

export function RecentFeedback() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <div className="space-y-1">
          <CardTitle>Recent Feedback</CardTitle>
          <CardDescription>
            Latest feedback from your customers
          </CardDescription>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Feedback</SelectItem>
            <SelectItem value="positive">Positive Only</SelectItem>
            <SelectItem value="negative">Negative Only</SelectItem>
            <SelectItem value="neutral">Neutral Only</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {feedbackItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start space-x-4 rounded-lg border p-4"
            >
              <Avatar>
                <AvatarImage src={item.customer.avatar} alt={item.customer.name} />
                <AvatarFallback>{item.customer.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{item.customer.name}</p>
                    <p className="text-sm text-muted-foreground">{item.customer.email}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      item.sentiment === 'positive'
                        ? 'border-green-500 text-green-500'
                        : item.sentiment === 'negative'
                        ? 'border-red-500 text-red-500'
                        : 'border-yellow-500 text-yellow-500'
                    }
                  >
                    {item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)}
                  </Badge>
                </div>
                <p className="text-sm text-gray-700">{item.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-xs text-muted-foreground">
                      via {item.source}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.time}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

