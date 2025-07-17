export const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'murilo@1987'
}

export const siteConfig = {
  title: 'Terreno em Condomínio - Oportunidade Única em Santa Cândida',
  description: 'Terreno de 127.15m² em condomínio fechado no bairro Santa Cândida, Curitiba. Investimento seguro com valorização garantida. Aproveite esta oportunidade única!',
  keywords: 'terreno, condomínio, santa cândida, curitiba, venda, 127.15m², investimento, oportunidade',
  
  // Informações do terreno
  property: {
    type: 'Terreno em Condomínio',
    area: '127.15m²',
    price: 'R$ 249.000',
    originalPrice: 'R$ 299.000',
    discount: '17%',
    location: 'Santa Cândida, Curitiba - PR',
    address: 'R. Irma Schreiner Maran, 503 - Santa Cândida, Curitiba - PR, 82720-342',
    features: [
      'Condomínio fechado com segurança 24h',
      'Infraestrutura completa',
      'Ruas pavimentadas',
      'Iluminação pública',
      'Drenagem',
      'Área verde preservada',
      'Localização privilegiada',
      'Valorização garantida'
    ],
    urgency: {
      available: 'Última unidade',
      deadline: 'Oferta por tempo limitado',
      highlight: 'Não perca esta oportunidade!'
    }
  },

  // Contato
  contact: {
    phone: '(41) 99996-1121',
    email: 'vendas@axis21.com.br',
    whatsapp: '5541999961121',
    office: 'Axis21 Imóveis',
    hours: {
      weekdays: '8h às 18h',
      saturday: '8h às 12h',
      sunday: 'Fechado'
    }
  },

  // Localização
  location: {
    neighborhood: 'Santa Cândida',
    city: 'Curitiba',
    state: 'PR',
    nearby: [
      { name: 'Parque Bacacheri', distance: '2,5 km', time: '6 min' },
      { name: 'Supermercado Condor', distance: '1,2 km', time: '3 min' },
      { name: 'Shopping Jockey Plaza', distance: '5,5 km', time: '12 min' },
      { name: 'Hospital Vita', distance: '3,8 km', time: '8 min' },
      { name: 'Colégio Estadual Santa Cândida', distance: '1,1 km', time: '3 min' },
      { name: 'Terminal Santa Cândida', distance: '2,0 km', time: '5 min' },
      { name: 'Centro de Curitiba', distance: '8,5 km', time: '18 min' },
      { name: 'Aeroporto Internacional Afonso Pena', distance: '12 km', time: '25 min' },
      { name: 'Shopping Palladium', distance: '7 km', time: '15 min' },
      { name: 'Parque Barigui', distance: '6 km', time: '13 min' },
      { name: 'Shopping Mueller', distance: '9 km', time: '20 min' },
      { name: 'Universidade Federal do Paraná', distance: '10 km', time: '22 min' }
    ]
  },

  // Características do condomínio
  condominium: {
    name: 'Vivendas do Parque',
    type: 'Condomínio Fechado',
    totalLots: 'Lotes de 127.15m²',
    infrastructure: [
      'Portaria com controle de acesso',
      'Ruas pavimentadas',
      'Iluminação pública',
      'Drenagem pluvial',
      'Área verde preservada',
      'Paisagismo integrado'
    ]
  },

  // Call-to-actions
  cta: {
    primary: 'Reservar Agora',
    secondary: 'Falar com Corretor',
    urgency: 'Última Oportunidade!',
    whatsapp: 'Quero este Terreno!'
  }
} 