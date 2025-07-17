'use client'

import { siteConfig } from '@/lib/config'

export default function Contact() {
  const openWhatsApp = () => {
    const phone = siteConfig.contact.whatsapp
    const message = `Olá! Quero reservar o ${siteConfig.property.type} em ${siteConfig.location.neighborhood}. ${siteConfig.cta.whatsapp}`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const openPhone = () => {
    window.open(`tel:${siteConfig.contact.phone}`, '_self')
  }

  const openEmail = () => {
    const subject = `Interesse no ${siteConfig.property.type} - ${siteConfig.location.neighborhood}`
    const body = `Olá! Tenho interesse no ${siteConfig.property.type} de ${siteConfig.property.area} em ${siteConfig.location.neighborhood}, ${siteConfig.location.city}. Gostaria de mais informações sobre:`
    const url = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(url, '_self')
  }

  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Garanta seu Terreno Hoje!
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Terreno de {siteConfig.property.area} por apenas {siteConfig.property.price} 
            em {siteConfig.location.neighborhood}, {siteConfig.location.city}.
          </p>
        </div>

        {/* Price Highlight */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 text-center max-w-2xl mx-auto mobile-margin">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-red-300 line-through">{siteConfig.property.originalPrice}</div>
              <div className="text-xs text-gray-200">De</div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white">{siteConfig.property.price}</div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-300">-{siteConfig.property.discount}</div>
              <div className="text-xs text-gray-200">Desconto</div>
            </div>
          </div>
          <p className="text-base sm:text-lg text-green-100 font-semibold px-2">
            Economia de R$ 50.000! Aproveite esta oferta por tempo limitado!
          </p>
        </div>

        {/* Unified Contact Section */}
        <div className="max-w-2xl mx-auto mobile-margin">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Entre em Contato</h3>
              <p className="text-gray-300 text-base sm:text-lg px-2">
                Nossa equipe está pronta para atender você e mostrar todos os detalhes deste terreno exclusivo.
              </p>
            </div>

            {/* Main CTA */}
            <div className="text-center mb-6 sm:mb-8">
              <button
                onClick={openWhatsApp}
                className="btn-mobile bg-green-600 hover:bg-green-700 text-white font-bold flex items-center justify-center mx-auto shadow-xl w-full sm:w-auto"
                data-contact="whatsapp"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Reservar Agora
              </button>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center p-4 sm:p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer min-h-[80px] sm:h-24" onClick={openPhone}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5 sm:w-6 sm:h-6 text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-base sm:text-lg">Telefone</h4>
                  <p className="text-gray-300 text-sm sm:text-base truncate">{siteConfig.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center p-4 sm:p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer min-h-[80px] sm:h-24" onClick={openEmail}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5 sm:w-6 sm:h-6 text-white">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-base sm:text-lg">E-mail</h4>
                  <p className="text-gray-300 text-sm sm:text-base truncate">{siteConfig.contact.email}</p>
                </div>
              </div>
            </div>

            {/* Property Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="bg-white/5 rounded-lg p-4 sm:p-6 min-h-[80px] sm:h-32 flex flex-col justify-center">
                <div className="text-xl sm:text-2xl font-bold text-green-400 mb-1 sm:mb-2">{siteConfig.property.area}</div>
                <div className="text-gray-300 text-sm sm:text-base">Área do Terreno</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6 min-h-[80px] sm:h-32 flex flex-col justify-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1 sm:mb-2">{siteConfig.location.neighborhood}</div>
                <div className="text-gray-300 text-sm sm:text-base">Localização</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6 min-h-[80px] sm:h-32 flex flex-col justify-center">
                <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1 sm:mb-2">{siteConfig.property.price}</div>
                <div className="text-gray-300 text-sm sm:text-base">Valor</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA Flutuante */}
        <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40">
          <button 
            onClick={openWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full shadow-2xl transition-all duration-200 flex items-center justify-center"
            data-contact="whatsapp-contact-mobile"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            FALAR NO WHATSAPP
          </button>
        </div>
      </div>
    </section>
  )
} 