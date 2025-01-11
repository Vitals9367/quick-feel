import { ClipboardList, Brain, LineChart } from 'lucide-react'
import Container from './Container'

const steps = [
  {
    icon: ClipboardList,
    title: "Collect Feedback",
    description: "Gather feedback from surveys, forms, emails, and more."
  },
  {
    icon: Brain,
    title: "AI Classification",
    description: "Our AI automatically analyzes the feedback, categorizing it by sentiment, emotion, and request."
  },
  {
    icon: LineChart,
    title: "Actionable Insights",
    description: "Get a dashboard of clear insights and trends to help guide your next steps."
  }
]

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-b border-gray-200" id="how-it-works">
      <Container>
        <div className="text-center space-y-4">
          <div className="text-[#2A9D8F] text-sm font-medium">HOW IT WORKS</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1D3557]">
            Simple three-step process
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We&apos;ve made it easy to get started with QuickFeel. Here&apos;s how it works.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-[#1D3557] mb-4">
                <step.icon size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

