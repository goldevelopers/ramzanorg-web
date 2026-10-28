import { Bricolage_Grotesque, Inter } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata = {
  title: {
    template: '%s - Ramzan Talent Scholarship - Education for All',
    default: 'Home - Ramzan Talent Scholarship - Education for All',
  },
  description:
    'Empowering Pakistan’s students with financial aid for over a decade. The Ramzan Talent Scholarship supports education and nurtures future leaders.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export const viewport = {
  themeColor: '#073B2E',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full scroll-smooth antialiased ${inter.variable} ${display.variable}`}
    >
      <body className="flex min-h-full bg-white font-sans text-base text-ink">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
