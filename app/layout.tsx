import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FarhadOnCode',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>FarhadOnCode</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
