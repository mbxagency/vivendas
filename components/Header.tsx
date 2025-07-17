'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/lib/config'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // altura aproximada do header
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200">
      <nav className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-extrabold text-green-700 tracking-tight drop-shadow-sm">
            {siteConfig.condominium.name}
          </span>
          <span className="hidden sm:inline text-sm text-gray-500 font-medium ml-2">
            {siteConfig.property.address}
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6 text-gray-700 font-semibold text-base">
            <li><button onClick={() => scrollToSection('about')} className="hover:text-green-700 transition-colors">Sobre</button></li>
            <li><button onClick={() => scrollToSection('features')} className="hover:text-green-700 transition-colors">Vantagens</button></li>
            <li><button onClick={() => scrollToSection('location')} className="hover:text-green-700 transition-colors">Localização</button></li>
            <li><button onClick={() => scrollToSection('gallery')} className="hover:text-green-700 transition-colors">Galeria</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-green-700 transition-colors">Contato</button></li>
          </ul>
          <a 
            href="/admin" 
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors shadow-md min-w-[80px] h-[40px] flex items-center justify-center"
          >
            Adm
          </a>
        </div>
      </nav>
    </header>
  )
} 