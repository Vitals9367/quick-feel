import { Upload, Cpu, LineChart } from 'lucide-react'
import { TypeIcon as type, LucideIcon } from 'lucide-react'

export interface Step {
  icon: LucideIcon
  title: string
  description: string
}

export const steps: Step[] = [
  {
    icon: Upload,
    title: "Upload Your Feedback Data",
    description: "Simply upload customer reviews, surveys, or comments from any source."
  },
  {
    icon: Cpu,
    title: "AI Analysis in Action",
    description: "Our advanced AI categorizes feedback and identifies key trends automatically."
  },
  {
    icon: LineChart,
    title: "Get Actionable Insights",
    description: "Use clear, data-driven insights to improve your business strategy."
  }
]

