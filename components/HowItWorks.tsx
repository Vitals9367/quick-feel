'use client'

import { Upload, Cpu, LineChart } from 'lucide-react'
import { motion } from "framer-motion"

const steps = [
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

export default function HowItWorks() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1D3557]">
            How QuickFeel Works
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Three simple steps to transform your feedback into actionable insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 mt-16 md:grid-cols-3 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#2A9D8F]/0 via-[#2A9D8F]/30 to-[#2A9D8F]/0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#2A9D8F]/10 rounded-full blur-xl group-hover:bg-[#2A9D8F]/20 transition-colors duration-300" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white border-2 border-[#2A9D8F]/30 group-hover:border-[#2A9D8F] transition-colors duration-300">
                  <step.icon size={32} className="text-[#2A9D8F] group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#1D3557]">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

