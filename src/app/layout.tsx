import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
  title: {
    template: '%s - Walshe HR',
    default:
      'Walshe HR',
  },
  description:
    'I’m Anna Marie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
            <SpeedInsights />
            <Analytics />
          </div>
        </Providers>
      </body>
    </html>
  )
}
