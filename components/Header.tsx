'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/lib/config'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false) // Fecha o menu mobile após clicar
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/80 backdrop-blur-sm shadow-md border-b border-gray-200'
    }`}>
      <nav className="container-custom flex items-center justify-between py-3 sm:py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <span className="text-xl sm:text-2xl font-extrabold text-green-700 tracking-tight drop-shadow-sm">
            {siteConfig.condominium.name}
          </span>
          <span className="hidden lg:inline text-sm text-gray-500 font-medium ml-2">
            {siteConfig.property.address}
          </span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6 text-gray-700 font-semibold text-sm lg:text-base">
            <li><button onClick={() => scrollToSection('about')} className="hover:text-green-700 transition-colors py-2">Sobre</button></li>
            <li><button onClick={() => scrollToSection('features')} className="hover:text-green-700 transition-colors py-2">Vantagens</button></li>
            <li><button onClick={() => scrollToSection('location')} className="hover:text-green-700 transition-colors py-2">Localização</button></li>
            <li><button onClick={() => scrollToSection('gallery')} className="hover:text-green-700 transition-colors py-2">Galeria</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-green-700 transition-colors py-2">Contato</button></li>
          </ul>
          <a 
            href="/admin" 
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors shadow-md min-w-[80px] h-[40px] flex items-center justify-center"
          >
            Adm
          </a>
        </div>

        {/* Botão Admin Mobile */}
        <div className="md:hidden flex items-center space-x-3">
          <a 
            href="/admin" 
            className="bg-green-700 hover:bg-green-800 text-white px-3 py-2 rounded-lg font-semibold text-xs transition-colors shadow-md min-w-[60px] h-[36px] flex items-center justify-center"
          >
            Adm
          </a>
          
          {/* Botão Menu Hambúrguer */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Abrir menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <ul className="container-custom py-4 space-y-3">
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="w-full text-left py-3 px-4 text-gray-700 font-semibold hover:text-green-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Sobre
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('features')} 
                className="w-full text-left py-3 px-4 text-gray-700 font-semibold hover:text-green-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Vantagens
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('location')} 
                className="w-full text-left py-3 px-4 text-gray-700 font-semibold hover:text-green-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Localização
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="w-full text-left py-3 px-4 text-gray-700 font-semibold hover:text-green-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Galeria
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="w-full text-left py-3 px-4 text-gray-700 font-semibold hover:text-green-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
} 