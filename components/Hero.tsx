'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/lib/config'

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImage(index)
  }

  const openWhatsApp = () => {
    const phone = siteConfig.contact.whatsapp
    const message = `Olá! Quero reservar o ${siteConfig.property.type} em ${siteConfig.location.neighborhood}. ${siteConfig.cta.whatsapp}`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${siteConfig.property.type} ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom pt-20 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Price Highlight */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <span className="text-2xl sm:text-3xl font-bold text-red-400 line-through">{siteConfig.property.originalPrice}</span>
              <span className="text-4xl sm:text-5xl font-bold text-green-400">{siteConfig.property.price}</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                -{siteConfig.property.discount}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">{siteConfig.property.type}</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 px-4">
            {siteConfig.property.area} - {siteConfig.property.location}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-green-400">{siteConfig.property.area}</h3>
              <p className="text-sm sm:text-base text-gray-200">Área do Terreno</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-400">{siteConfig.property.location.split(',')[0]}</h3>
              <p className="text-sm sm:text-base text-gray-200">Bairro Exclusivo</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 max-w-2xl mx-auto px-4">
            <button 
              onClick={openWhatsApp}
              className="btn-mobile bg-green-600 hover:bg-green-700 text-white font-bold flex items-center justify-center shadow-xl"
              data-contact="whatsapp"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              {siteConfig.cta.primary}
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-mobile bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center shadow-xl"
              data-contact="phone"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5 sm:w-6 sm:h-6 mr-2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              {siteConfig.cta.secondary}
            </button>
          </div>

        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevImage}
        className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
        aria-label="Imagem anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-6 h-6">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>
      <button
        onClick={nextImage}
        className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
        aria-label="Próxima imagem"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-6 h-6">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
              index === currentImage ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      {/* Call-to-Action Flutuante Mobile */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40">
        <button 
          onClick={openWhatsApp}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full shadow-2xl transition-all duration-200 flex items-center justify-center"
          data-contact="whatsapp-mobile"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          RESERVAR AGORA - R$ 249.000
        </button>
      </div>
    </section>
  )
} 