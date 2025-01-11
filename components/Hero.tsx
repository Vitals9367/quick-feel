'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto min-h-[calc(100vh-80px)] pt-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1D3557] leading-tight">
          Transform Customer Feedback into <span className="text-[#2A9D8F]">Actionable Insights</span> with AI
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Leverage AI to analyze feedback, uncover trends, and make smarter decisions—all in minutes.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pt-4"
        >
          <Button 
            size="lg"
            className="bg-[#2A9D8F] hover:bg-[#238579] text-white text-lg px-8 py-6"
            onClick={() => router.push('/login')}
          >
            Try QuickFeel Now
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-16 relative w-full max-w-4xl"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
        <Image
          src="/dashboard-preview.png"
          alt="QuickFeel AI Dashboard showing sentiment analysis and customer feedback trends"
          width={1200}
          height={675}
          className="w-full h-auto rounded-xl shadow-2xl border border-gray-200"
          priority
        />
      </motion.div>
    </div>
  )
}

