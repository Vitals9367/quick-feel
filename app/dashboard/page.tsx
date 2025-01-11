import { Metadata } from 'next'
import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'
import { SentimentOverview } from '@/components/dashboard/sentiment-overview'
import { TrendAnalysis } from '@/components/dashboard/trend-analysis'
import { FeedbackSources } from '@/components/dashboard/feedback-sources'
import { KeyInsights } from '@/components/dashboard/key-insights'
import { RecentFeedback } from '@/components/dashboard/recent-feedback'

export const metadata: Metadata = {
  title: 'Dashboard | QuickFeel',
  description: 'Monitor and analyze your customer feedback in real-time.',
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Monitor and analyze your customer feedback in real-time."
      />
      <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-full lg:col-span-2">
          <SentimentOverview />
        </div>
        <div className="col-span-full lg:col-span-1">
          <FeedbackSources />
        </div>
        <div className="col-span-full">
          <TrendAnalysis />
        </div>
        <div className="col-span-full md:col-span-1">
          <KeyInsights />
        </div>
        <div className="col-span-full md:col-span-2">
          <RecentFeedback />
        </div>
      </div>
    </DashboardShell>
  )
}

