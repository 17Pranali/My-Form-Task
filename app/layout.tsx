// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'My Form Project',
  description: 'A form created with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
