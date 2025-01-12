import { siteConfig } from '@/data/site-config'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'

export default function Loading() {
  try {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={siteConfig.logo} alt="logo" width={32} height={32}/>
            <span className="text-2xl font-bold text-[#1D3557]">QuickFeel</span>
          </div>

          {/* Loading Animation */}
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-[#2A9D8F]" />
            <p className="text-lg text-gray-500">Loading...</p>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error in loading state:', error)
    return null
  }
}

