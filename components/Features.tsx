'use client'

import { Infinity, Brain, LineChart, Plug2 } from 'lucide-react'
import { motion } from "framer-motion"
import { staggerChildren, fadeIn } from './animations'
import Container from './Container'

const features = [
  {
    icon: Infinity,
    title: "Unlimited Projects",
    description: "Collect and analyze feedback from unlimited sources."
  },
  {
    icon: Brain,
    title: "Advanced Categorization",
    description: "AI-driven sentiment and emotion analysis."
  },
  {
    icon: LineChart,
    title: "Real-time Insights",
    description: "Get actionable insights and visualized trends immediately."
  },
  {
    icon: Plug2,
    title: "Seamless Integration",
    description: "Easy-to-use API and integrations with your existing tools."
  }
]

export default function Features() {
  return (
      <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50" id="features">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center space-y-4"
          >
            <div className="text-[#2A9D8F] text-sm font-medium">FEATURES</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1D3557]">
              Transform Your Feedback Process
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              QuickFeel streamlines feedback collection and gives you the insights you need to improve.
            </p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex flex-col items-center text-center group"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-[#2A9D8F] mb-4 transition-transform group-hover:scale-110 duration-300">
                  <feature.icon size={32} className="transition-transform group-hover:rotate-12 duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
  )
}

