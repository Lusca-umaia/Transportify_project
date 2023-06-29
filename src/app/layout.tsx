import Navbar from '../components/navbar/index'
import './globals.css'

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
