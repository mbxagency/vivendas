'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/lib/config'

export default function Location() {
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

  const openGoogleMaps = (destination: string) => {
    const address = encodeURIComponent(siteConfig.property.address)
    const url = `https://www.google.com/maps/dir/${address}/${encodeURIComponent(destination)}`
    window.open(url, '_blank')
  }

  return (
    <section id="location" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16" style={{ opacity: 0, transform: 'translateY(50px) translateZ(0)' }}>
          <h2 className="heading-secondary mb-6">
            Localização Privilegiada
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            O terreno está localizado no bairro Santa Cândida, uma das regiões mais desejadas de Curitiba, 
            com fácil acesso a todos os serviços e comércio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Location Info */}
          <div style={{ opacity: 0, transform: 'translateY(30px) translateZ(0)' }}>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Localização do Terreno</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-700 mb-2">Bairro Santa Cândida</h4>
                  <p className="text-gray-600">
                    Uma das regiões mais tradicionais e desejadas de Curitiba, conhecida pela qualidade de vida e infraestrutura completa.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Curitiba - PR</h4>
                  <p className="text-gray-600">
                    Capital do Paraná, reconhecida mundialmente por seu planejamento urbano e qualidade de vida.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-700 mb-4">Endereço Completo</h4>
                  <p className="text-lg font-medium text-gray-800 bg-white p-4 rounded-lg border">
                    {siteConfig.property.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div style={{ opacity: 0, transform: 'translateY(30px) translateZ(0)' }}>
            <div className="bg-gray-100 rounded-2xl p-4">
              <iframe
                src="https://maps.google.com/maps?q=R.+Irma+Schreiner+Maran,+503+-+Santa+C%C3%A2ndida,+Curitiba+-+PR,+82720-342&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Nearby Places */}
        <div className="mt-16" style={{ opacity: 0, transform: 'translateY(50px) translateZ(0)' }}>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Pontos de Interesse Próximos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.location.nearby.map((place, index) => (
              <div 
                key={place.name} 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => openGoogleMaps(place.name)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {place.name}
                  </h4>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{place.distance}</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    {place.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 