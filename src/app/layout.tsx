import { Roboto } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
