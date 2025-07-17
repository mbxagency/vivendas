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

  const openWhatsApp = () => {
    const phone = siteConfig.contact.whatsapp
    const message = `Olá! Quero saber mais sobre o ${siteConfig.property.type} em ${siteConfig.location.neighborhood}. ${siteConfig.cta.whatsapp}`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Urgency Banner */}

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

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Conheça o Terreno</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Assista ao vídeo e descubra todos os detalhes deste terreno exclusivo, desde a localização 
                até as características do condomínio {siteConfig.condominium.name}.
              </p>
              <div className="flex flex-wrap gap-4 mb-6 justify-center">
                <div className="bg-white/20 rounded-lg p-4">
                  <span className="text-sm text-primary-100 font-medium">Área do Terreno</span>
                  <p className="text-lg font-bold text-white">{siteConfig.property.area}</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <span className="text-sm text-primary-100 font-medium">Localização</span>
                  <p className="text-lg font-bold text-white">{siteConfig.location.neighborhood}</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <span className="text-sm text-primary-100 font-medium">Valor</span>
                  <p className="text-lg font-bold text-white">{siteConfig.property.price}</p>
                </div>
              </div>
              <button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center mx-auto min-w-[200px] h-[60px]"
                data-contact="whatsapp"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Quero este Terreno!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 