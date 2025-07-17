'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/lib/config'

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0) translateZ(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('[style*="opacity:0"]')
    elements?.forEach((el) => {
      if (el instanceof HTMLElement) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16" style={{ opacity: 0, transform: 'translateY(50px) translateZ(0)' }}>
          <h2 className="heading-secondary mb-6">
            Vantagens Exclusivas
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Descubra por que este terreno de {siteConfig.property.area} é a escolha ideal para investir em {siteConfig.location.city}. 
            <strong>Localização privilegiada + Infraestrutura completa = Investimento perfeito!</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-green-200" style={{ opacity: 0, transform: 'translateY(30px) translateZ(0)' }}>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ruler w-6 h-6 text-green-600">
                <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path>
                <path d="m14.5 12.5 2-2"></path>
                <path d="m11.5 9.5 2-2"></path>
                <path d="m8.5 6.5 2-2"></path>
                <path d="m17.5 15.5 2-2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">{siteConfig.property.area}</h3>
            <p className="text-gray-600 mb-4">Área ideal para construir sua casa dos sonhos</p>
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
              Tamanho Perfeito
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-blue-200" style={{ opacity: 0, transform: 'translateY(30px) translateZ(0)' }}>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6 text-blue-600">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Localização Privilegiada</h3>
            <p className="text-gray-600 mb-4">Bairro {siteConfig.location.neighborhood}, uma das melhores regiões de {siteConfig.location.city}</p>
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
              Área Nobre
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-purple-200" style={{ opacity: 0, transform: 'translateY(30px) translateZ(0)' }}>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car w-6 h-6 text-purple-600">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                <circle cx="7" cy="17" r="2"></circle>
                <path d="M9 17h6"></path>
                <circle cx="17" cy="17" r="2"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Infraestrutura Completa</h3>
            <p className="text-gray-600 mb-4">Ruas pavimentadas, iluminação e drenagem</p>
            <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
              Tudo Pronto
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-orange-200" style={{ opacity: 0, transform: 'translateY(30px) translateZ(0)' }}>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tree-pine w-6 h-6 text-orange-600">
                <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"></path>
                <path d="M12 22v-3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Área Verde Preservada</h3>
            <p className="text-gray-600 mb-4">Paisagismo integrado e preservação ambiental</p>
            <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
              Natureza
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-red-200" style={{ opacity: 0, transform: 'translateY(30px) translateZ(0)' }}>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle w-6 h-6 text-red-600">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Condomínio Fechado</h3>
            <p className="text-gray-600 mb-4">Segurança e privacidade para sua família</p>
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
              Seguro
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-indigo-200" style={{ opacity: 0, transform: 'translateY(30px) translateZ(0)' }}>
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6 text-indigo-600">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Fácil Acesso</h3>
            <p className="text-gray-600 mb-4">Próximo a principais vias e comércio</p>
            <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
              Conveniente
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 