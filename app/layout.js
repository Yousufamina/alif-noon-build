import './globals.css'
import { Inter } from 'next/font/google'
import Lazyloader from '@/components/Lazyloader'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alif Noon Properties',
  description: 'A Reat Estate Agency in Dubai... Welcome to Alif noon properties, the premier destination for real estate in Dubai: With years of experience and commitment to',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Lazyloader>{children}</Lazyloader>
      </body>
    </html>
  )
}
