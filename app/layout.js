import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Pivaga',
//   description: 'Elevating Competitive Esports',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Pivaga</title>
        <link rel="icon" href="/logo.svg" type="image/x-icon" sizes="16x16"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
