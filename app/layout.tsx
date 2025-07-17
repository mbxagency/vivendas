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
  title: 'Terreno em Condomínio - Vivendas do Parque | Santa Cândida, Curitiba - R$ 249.000',
  description: 'Terreno de 127,15m² em condomínio fechado em Santa Cândida, Curitiba. Última unidade disponível por R$ 249.000. Localização privilegiada, próximo a escolas, comércio e transporte. Financiamento facilitado.',
  keywords: 'terreno condomínio curitiba, vivendas do parque, santa cândida, terreno 127m², condomínio fechado, terreno curitiba, imóvel curitiba, terreno santa cândida, condomínio residencial, terreno para construir',
  authors: [{ name: 'Vivendas do Parque' }],
  creator: 'Vivendas do Parque',
  publisher: 'Vivendas do Parque',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vivendas-pi.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Terreno em Condomínio - Vivendas do Parque | Santa Cândida, Curitiba',
    description: 'Terreno de 127,15m² em condomínio fechado em Santa Cândida, Curitiba. Última unidade disponível por R$ 249.000. Localização privilegiada!',
    url: 'https://vivendas-pi.vercel.app',
    siteName: 'Vivendas do Parque',
    images: [
      {
        url: '/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Terreno em condomínio Vivendas do Parque - Santa Cândida, Curitiba',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terreno em Condomínio - Vivendas do Parque | Santa Cândida, Curitiba',
    description: 'Terreno de 127,15m² em condomínio fechado em Santa Cândida, Curitiba. Última unidade disponível por R$ 249.000.',
    images: ['/1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Adicione seu código de verificação do Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              "name": "Terreno em Condomínio - Vivendas do Parque",
              "description": "Terreno de 127,15m² em condomínio fechado em Santa Cândida, Curitiba",
              "price": "249000",
              "priceCurrency": "BRL",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "R. Irma Schreiner Maran, 503",
                "addressLocality": "Santa Cândida",
                "addressRegion": "Curitiba",
                "addressCountry": "BR",
                "postalCode": "82720-342"
              },
              "floorSize": {
                "@type": "QuantitativeValue",
                "value": "127.15",
                "unitCode": "MTK"
              },
              "image": [
                "https://vivendas-pi.vercel.app/1.jpg",
                "https://vivendas-pi.vercel.app/2.jpg",
                "https://vivendas-pi.vercel.app/3.jpg"
              ],
              "offers": {
                "@type": "Offer",
                "price": "249000",
                "priceCurrency": "BRL",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "Vivendas do Parque"
                }
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
} 