import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lumina Find - Premium Replica Store | AI-Powered Search',
  description: 'Find premium 1:1 replica products at unbeatable prices. AI-powered search for luxury replicas including LV, Gucci, Chanel, and more. Fast shipping worldwide.',
  keywords: 'replica, luxury replicas, designer replicas, LV replica, Gucci replica, Chanel replica, premium replicas, 1:1 replicas, designer shoes, luxury bags',
  authors: [{ name: 'Lumina Find' }],
  creator: 'Lumina Find',
  publisher: 'Lumina Find',
  robots: 'index, follow',
  openGraph: {
    title: 'Lumina Find - Premium Replica Store',
    description: 'Find premium 1:1 replica products at unbeatable prices. AI-powered search for luxury replicas.',
    url: 'https://luminafind.com',
    siteName: 'Lumina Find',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumina Find - Premium Replica Store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Find - Premium Replica Store',
    description: 'Find premium 1:1 replica products at unbeatable prices. AI-powered search for luxury replicas.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
          {children}
        </div>
      </body>
    </html>
  )
}
