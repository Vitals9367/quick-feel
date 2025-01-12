import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { metadata as siteMetadata, jsonLd } from '@/data/metadata'
import { CSPostHogProvider } from './providers'
import { CookieBanner } from '@/components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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

