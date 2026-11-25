import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Kunal Bhardwaj | Sr. Mobile App Developer',
  description: 'Senior Mobile Application Developer with nearly 4 years of experience building scalable, high-performance mobile applications using Flutter and React Native for Android & iOS.',
  keywords: ['Senior Mobile App Developer', 'Flutter Developer', 'React Native Developer', 'Android Developer', 'iOS Developer', 'Dart', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'Kunal Bhardwaj'],
  authors: [{ name: 'Kunal Bhardwaj' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Kunal Bhardwaj | Sr. Mobile App Developer',
    description: 'Senior Mobile Application Developer with nearly 4 years of experience building scalable, high-performance mobile applications using Flutter and React Native.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>" />
      </head>
      <body className="antialiased bg-[#121212]">
        {children}
      </body>
    </html>
  )
}
