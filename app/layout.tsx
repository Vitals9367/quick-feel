import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { metadata as siteMetadata, jsonLd } from '@/data/metadata'
import { CSPostHogProvider } from './providers'
import { CookieBanner } from '@/components/CookieBanner'
import ComingSoonPage from './soon/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // You can set this to true in your Vercel environment variables
  const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true'

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
          {
            isComingSoon
            ? <ComingSoonPage />
            : <>
              {children}
              <CookieBanner />
            </>
          }
        </body>
      </CSPostHogProvider>
    </html>
  )
}

