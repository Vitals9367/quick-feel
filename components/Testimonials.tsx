'use client'

import Image from 'next/image'
import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "QuickFeel helped us identify trends we missed, saving us hours of manual work!",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "/avatars/sarah.jpg"
  },
  {
    quote: "Our customer satisfaction scores improved after using QuickFeel's insights.",
    author: "Mark Thompson",
    role: "CEO",
    company: "XYZ Co",
    avatar: "/avatars/mark.jpg"
  }
]

const companyLogos = [
  { name: "TechCorp", logo: "/logos/techcorp.svg" },
  { name: "XYZ Co", logo: "/logos/xyz.svg" },
  { name: "InnovateInc", logo: "/logos/innovate.svg" }
]

export default function Testimonials() {
  return (
    <section 
      id="testimonials"
      className="w-full py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1D3557]">
            Trusted by Industry Leaders
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed">
            See how companies are transforming their feedback process with QuickFeel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-300" />
              <div className="relative p-8">
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#1D3557]">{testimonial.author}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="mt-6 text-lg text-gray-600 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companyLogos.map((company, index) => (
              <Image
                key={index}
                src={company.logo}
                alt={company.name}
                width={120}
                height={40}
                className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

