import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vivendas do Parque - Terreno em Condomínio',
    short_name: 'Vivendas do Parque',
    description: 'Terreno de 127,15m² em condomínio fechado em Santa Cândida, Curitiba. Última unidade disponível por R$ 249.000.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#16a34a',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'real estate'],
    lang: 'pt-BR',
    scope: '/',
  }
} 