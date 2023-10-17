import './globals.css'

import { Roboto } from 'next/font/google'


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: '📀 Diane Catherine Gómez Casas',
  description: 'Scrum Master',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
