import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { metadata as siteMetadata, jsonLd } from '@/data/metadata'
import { CSPostHogProvider } from './providers'
import { CookieBanner } from '@/components/CookieBanner'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // You can set this to true in your Vercel environment variables
  const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true'

  // If coming soon is enabled, show the coming soon page
  if (isComingSoon) {
    redirect('/soon')
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />
      </head>
      <CSPostHogProvider>
        <body className={inter.className}>
          {children}
          <CookieBanner />
        </body>
      </CSPostHogProvider>
    </html>
  )
}

