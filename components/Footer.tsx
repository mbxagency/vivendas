'use client'

import { siteConfig } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2024 {siteConfig.condominium.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 