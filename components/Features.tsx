'use client'

import { motion } from "framer-motion"
import { features } from '@/data/features'

export default function Features() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1D3557]">
            Core Benefits That Drive Results
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Experience the power of AI-driven feedback analysis and unlock valuable insights for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#2A9D8F]/5 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2A9D8F]/10 text-[#2A9D8F] group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1D3557]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

