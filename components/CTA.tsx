'use client'

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { motion } from "framer-motion"
import { fadeIn, scaleUp } from './animations'
import Container from "./Container"

export default function CTA() {
  return (
    <section className="w-full py-24 bg-[#1D3557] text-white overflow-hidden">
      <Container>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col items-center space-y-8 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unlock the Power of Customer Feedback Today
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            Take the guesswork out of improving your business. QuickFeel makes it easy to turn feedback into growth.
          </p>
          <div className="flex flex-col items-center space-y-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-[#2A9D8F] hover:bg-[#238579] text-white text-lg px-8 py-6 relative after:absolute after:inset-0 after:rounded-md after:border-2 after:border-[#2A9D8F] after:animate-pulse after:opacity-70"
              >
                Start Your Journey Now – Get Actionable Insights in Minutes
              </Button>
            </motion.div>
            <p className="text-gray-300 text-sm mt-4">
              Join hundreds of businesses already using QuickFeel to transform feedback into results.
            </p>
            <motion.div 
              variants={scaleUp}
              className="w-full max-w-2xl rounded-lg overflow-hidden shadow-[0_0_30px_rgba(42,157,143,0.2)] mt-8"
            >
              <Image
                src="/quick-feel-dashboard2.jpg"
                alt="QuickFeel Analytics Dashboard"
                width={500}
                height={250}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

