import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="mt-8 text-center">
        <div className="inline-flex items-center rounded-full bg-[#2A9D8F]/10 px-3 py-1 text-sm text-[#2A9D8F]">
          Announcing our seed round →
        </div>
      </div>
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <CTA />
      <Footer />
    </div>
  )
}

