'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/lib/config'

export default function About() {
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
    <section id="about" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16" style={{ opacity: 0, transform: 'translateY(50px) translateZ(0)' }}>
          <h2 className="heading-secondary mb-6">
            Por que Investir neste Terreno?
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            {siteConfig.property.area} em condomínio fechado localizado no bairro {siteConfig.location.neighborhood}, 
            oferecendo infraestrutura completa e localização privilegiada em {siteConfig.location.city}. 
            <strong>Um investimento seguro com valorização garantida!</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center" style={{ opacity: 0, transform: 'translateY(30px) translateZ(0)' }}>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home w-8 h-8 text-green-600">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{siteConfig.property.area}</h3>
            <p className="text-gray-600">Área ideal para construir sua casa dos sonhos</p>
          </div>

          <div className="text-center" style={{ opacity: 0, transform: 'translateY(30px) translateZ(0)' }}>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trees w-8 h-8 text-blue-600">
                <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path>
                <path d="M7 16v6"></path>
                <path d="M13 19v3"></path>
                <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Condomínio Fechado</h3>
            <p className="text-gray-600">Segurança e privacidade para sua família</p>
          </div>

          <div className="text-center" style={{ opacity: 0, transform: 'translateY(30px) translateZ(0)' }}>
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-8 h-8 text-purple-600">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Infraestrutura Completa</h3>
            <p className="text-gray-600">Ruas pavimentadas, iluminação e drenagem</p>
          </div>
        </div>

        <div className="mt-20" style={{ opacity: 0, transform: 'translateY(50px) translateZ(0)' }}>
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video relative">
              <video 
                className="w-full h-full object-cover" 
                controls 
                poster="/6.jpg"
                data-video="true"
              >
                <source src="/vivendas.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 