'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home, RefreshCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    try {
      // Log the error to an error reporting service
      console.error(error)
    } catch (e) {
      // Fallback error handling
      console.error('Failed to log error:', e)
    }
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-12 w-12 rounded-full bg-[#2A9D8F]" />
          <span className="text-2xl font-bold text-[#1D3557]">QuickFeel</span>
        </div>

        {/* Error Content */}
        <div className="space-y-6 max-w-[600px]">
          <h1 className="text-7xl font-bold text-[#1D3557]">500</h1>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1D3557]">
            Something went wrong
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed">
            We apologize, but we're having some technical difficulties. Our team has been notified and is working on the fix.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="text-left bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-red-700 font-mono text-sm">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-red-500 font-mono text-sm mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Navigation Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="default" 
              className="bg-[#2A9D8F] hover:bg-[#238579] text-white"
              onClick={() => reset()}
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button 
              variant="outline" 
              className="border-[#2A9D8F] text-[#2A9D8F] hover:bg-[#2A9D8F] hover:text-white"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>

        {/* Support Information */}
        <div className="mt-8 text-sm text-gray-500">
          <p>If the problem persists, please contact our support team:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link 
              href="mailto:support@quickfeel.com" 
              className="text-[#2A9D8F] hover:underline"
            >
              support@quickfeel.com
            </Link>
            <Link 
              href="/status" 
              className="text-[#2A9D8F] hover:underline"
            >
              System Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

