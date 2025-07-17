import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Vivendas do Parque - Condomínio Residencial em Curitiba',
  description: 'Descubra o Vivendas do Parque, um condomínio residencial exclusivo em Curitiba com terrenos de 400m² a 600m². Localização privilegiada no bairro Santa Cândida.',
  keywords: 'vivendas do parque, condomínio, curitiba, santa cândida, terrenos, residencial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
} 