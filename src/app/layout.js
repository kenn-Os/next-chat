import './globals.css'
import { Dancing_Script, Inter } from 'next/font/google'

const inter = Dancing_Script({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Chat App',
  description: 'Chat App Created With Next Js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
