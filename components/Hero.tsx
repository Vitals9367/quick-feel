'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { fadeIn, scaleUp } from './animations'

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto min-h-[calc(100vh-80px)] pt-16">
      <motion.h1 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-[#1D3557]"
      >
        Turn Customer Feedback Into Actionable Insights
      </motion.h1>
      <motion.p 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-xl mb-8 text-gray-600 max-w-3xl"
      >
        QuickFeel helps you analyze feedback instantly, using AI to categorize sentiment and emotion, streamlining decision-making.
      </motion.p>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={scaleUp}
        className="flex gap-4 mb-16"
      >
        <Button 
          size="lg"
          className="bg-[#2A9D8F] hover:bg-[#238579] text-white text-lg px-8 py-6 transition-transform hover:scale-105 duration-200"
        >
          Get Started Now – See Results in Minutes
        </Button>
      </motion.div>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={scaleUp}
        className="w-full max-w-3xl rounded-lg overflow-hidden shadow-2xl hover:shadow-xl transition-shadow duration-300"
      >
        <Image
          src="/quick-feel-dashboard.jpg"
          alt="QuickFeel Dashboard"
          width={600}
          height={300}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  )
}

