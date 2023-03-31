import { Navigation } from '@/components/shared/Navigation'
import './globals.css'

export const metadata = {
  title: 'DQ Griffin',
  description: 'DQ Griffin personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
