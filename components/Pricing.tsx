'use client'

import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { staggerChildren, fadeIn, slideInFromLeft } from './animations'

const plans = [
  {
    name: "Startup",
    price: "19",
    description: "Ideal for small teams or businesses.",
    features: [
      "1 project",
      "500 feedback submissions per month",
      "Basic sentiment & emotion analysis",
      "Email support (Standard response time)"
    ]
  },
  {
    name: "Growth",
    price: "39",
    description: "For growing teams with more advanced needs.",
    popular: true,
    features: [
      "Everything in Startup Plan",
      "Unlimited projects",
      "Unlimited feedback submissions",
      "Advanced sentiment & emotion analysis",
      "Priority support (Faster response time)",
      "Unlimited users",
      "Customizable reports and dashboards",
      "Custom branding"
    ]
  },
  {
    name: "Enterprise",
    price: "99",
    description: "For large enterprises needing custom solutions.",
    features: [
      "Everything in Growth Plan",
      "Single Sign-On (SSO) integration",
      "Custom Service Level Agreement (SLA)",
      "Custom integrations and API endpoints",
      "Advanced reporting features",
      "24/7 premium support"
    ]
  }
]

export default function Pricing() {
  return (
    <section className="w-full py-24">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <div className="text-[#2A9D8F] text-sm font-medium">PRICING</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Choose the Plan That Fits Your Business
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            No credit card required to get started with QuickFeel. Pay monthly for the value your team will gain.
          </p>
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3 md:gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className={cn(
                "relative rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl",
                plan.popular && "border-2 border-[#2A9D8F]"
              )}
            >
              {plan.popular && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  <div className="bg-[#2A9D8F] text-white px-3 py-1 rounded-full text-sm">
                    Most popular
                  </div>
                </motion.div>
              )}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-gray-500">{plan.description}</p>
              </div>
              <motion.ul 
                variants={staggerChildren}
                className="mt-8 space-y-4"
              >
                {plan.features.map((feature) => (
                  <motion.li 
                    key={feature}
                    variants={slideInFromLeft}
                    className="flex items-center"
                  >
                    <div className="rounded-full bg-[#2A9D8F]/10 p-1 mr-3">
                      <Check className="h-4 w-4 text-[#2A9D8F]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Button 
                className="w-full mt-8 bg-[#2A9D8F] hover:bg-[#238579] text-white transition-transform hover:scale-105 duration-200"
              >
                Start for ${plan.price}/month
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

