import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Yousaf Ijaz Munawer',
  description: 'Six Sessions Series',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}
      <Toaster position='top-right'/>
      </body>
    </html>
  )
}
