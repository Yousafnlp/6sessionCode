import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
