'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Navbar() {
  // Function to handle smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        <Link 
          href="/" 
          className="flex items-center space-x-2 group"
        >
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-8 h-8 bg-[#2A9D8F] rounded-full"
          />
          <span className="text-xl font-bold text-[#1D3557] group-hover:text-[#2A9D8F] transition-colors">
            QuickFeel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-gray-600 hover:text-[#2A9D8F] transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-gray-600 hover:text-[#2A9D8F] transition-colors"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-gray-600 hover:text-[#2A9D8F] transition-colors"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-gray-600 hover:text-[#2A9D8F] transition-colors"
          >
            Testimonials
          </button>
          
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="hidden sm:inline-flex hover:text-[#2A9D8F] transition-colors"
          >
            Sign In
          </Button>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-[#2A9D8F] hover:bg-[#238579] text-white">
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}

