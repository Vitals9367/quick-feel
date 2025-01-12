'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'
import { motion } from "framer-motion"
import { fadeIn } from './animations'
import { siteConfig } from '@/data/site-config'

export default function Footer() {
  // Function to handle smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="w-full py-12 bg-gray-50 border-t border-gray-200"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src={siteConfig.logo} alt="logo" width={32} height={32}/>
              <span className="text-xl font-bold">QuickFeel</span>
            </div>
            <p className="text-gray-600 max-w-sm">
              Turning feedback into actionable insights.
            </p>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <a 
                href="mailto:support@quickfeel.com"
                className="hover:text-[#2A9D8F] transition-colors"
              >
                support@quickfeel.com
              </a>
            </div>
          </div>

          {/* Quick Links and CTA */}
          <div className="space-y-8">
            {/* Navigation */}
            <nav className="flex flex-wrap gap-4">
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
              <Link 
                href="/privacy"
                className="text-gray-600 hover:text-[#2A9D8F] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-gray-600 hover:text-[#2A9D8F] transition-colors"
              >
                Terms of Service
              </Link>
            </nav>

            {/* CTA */}
            <div className="space-y-4">
              <p className="text-gray-600">
                Ready to get started?
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button 
                  variant="outline" 
                  className="border-[#2A9D8F] text-[#2A9D8F] hover:bg-[#2A9D8F] hover:text-white transition-colors"
                >
                  Sign up now
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2025 QuickFeel. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 text-center md:text-right">
              Join hundreds of businesses already optimizing their feedback processes.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

