'use client'

import { useState, useEffect } from 'react'
import Auth from '@/lib/auth'
import LoginForm from '@/components/LoginForm'
import { 
  Users, 
  Eye, 
  Clock, 
  TrendingUp, 
  RefreshCw, 
  Trash2, 
  LogOut, 
  User,
  Smartphone,
  Monitor,
  MousePointer,
  MapPin
} from 'lucide-react'

interface AnalyticsData {
  totalVisitors: number
  uniqueVisitors: number
  pageViews: number
  formSubmissions: number
  videoPlays: number
  galleryViews: number
  adminAccesses: number
  contactClicks: number
  averageSessionDuration: number
  bounceRate: number
  topPages: Array<{ page: string; views: number }>
  deviceTypes: Array<{ device: string; percentage: number }>
  locations: Array<{ location: string; visitors: number }>
  clickEvents: Array<{ element: string; clicks: number }>
  userOrigins: Array<{ origin: string; count: number }>
  contactMethods: Array<{ method: string; count: number }>
  timeOnPage: Array<{ page: string; time: number }>
  dailyVisitors: Array<{ date: string; visitors: number }>
  hourlyActivity: Array<{ hour: number; activity: number }>
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [selectedPeriod, setSelectedPeriod] = useState('7d')

  const loadAnalyticsData = () => {
    setIsLoading(true)
    try {
      // Importar analytics dinamicamente para evitar problemas de SSR
      import('@/lib/analytics').then(({ default: analytics }) => {
        const data = analytics.getAnalyticsData()
        if (data) {
          setAnalyticsData(data)
        } else {
          // Se não há dados, criar dados simulados
                setAnalyticsData({
        totalVisitors: 0,
        uniqueVisitors: 0,
        pageViews: 0,
        formSubmissions: 0,
        videoPlays: 0,
        galleryViews: 0,
        adminAccesses: 0,
        contactClicks: 0,
        averageSessionDuration: 0,
        bounceRate: 0,
        topPages: [],
        deviceTypes: [],
        locations: [],
        clickEvents: [],
        userOrigins: [],
        contactMethods: [],
        timeOnPage: [],
        dailyVisitors: [],
        hourlyActivity: []
      })
        }
        setIsLoading(false)
      })
    } catch (error) {
      console.error('Erro ao carregar dados de analytics:', error)
      setIsLoading(false)
    }
  }

  const clearAnalyticsData = () => {
    if (confirm('Tem certeza que deseja limpar todos os dados de analytics?')) {
      localStorage.removeItem('vivendas_analytics')
      setAnalyticsData(null)
    }
  }

  const handleLogout = () => {
    Auth.logout()
    setIsAuthenticated(false)
  }

  const handleLogin = () => {
    setIsAuthenticated(true)
    loadAnalyticsData()
  }

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = Auth.isAuthenticated()
      setIsAuthenticated(isAuth)
      if (isAuth) {
        loadAnalyticsData()
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 text-primary-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Verificando autenticação...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Painel de Administração
              </h1>
              <p className="text-gray-600">
                Vivendas do Parque - Analytics e Métricas
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600 mr-4">
                <User className="w-4 h-4 mr-2" />
                <span className="text-sm">{Auth.getCurrentUser()}</span>
              </div>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="1d">Últimas 24h</option>
                <option value="7d">Últimos 7 dias</option>
                <option value="30d">Últimos 30 dias</option>
                <option value="90d">Últimos 90 dias</option>
              </select>
              <button
                onClick={loadAnalyticsData}
                disabled={isLoading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Atualizar
              </button>
              <button
                onClick={clearAnalyticsData}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Limpar Dados
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </button>
              <a
                href="/"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Voltar ao Site
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <RefreshCw className="w-12 h-12 text-primary-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Carregando dados de analytics...</p>
            </div>
          </div>
        ) : analyticsData ? (
          <>
            {/* Métricas Principais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Visitantes Únicos</p>
                    <p className="text-2xl font-bold text-gray-900">{analyticsData.uniqueVisitors.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Visualizações</p>
                    <p className="text-2xl font-bold text-gray-900">{analyticsData.pageViews.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Contatos</p>
                    <p className="text-2xl font-bold text-gray-900">{analyticsData.contactClicks.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <span className="text-2xl">🎥</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Reproduções de Vídeo</p>
                    <p className="text-2xl font-bold text-gray-900">{analyticsData.videoPlays.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resumo Rápido */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-8 text-white">
              <h3 className="text-xl font-bold mb-4">📊 Resumo da Semana</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{analyticsData.uniqueVisitors}</div>
                  <div className="text-blue-100 text-sm">Visitantes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{analyticsData.contactClicks}</div>
                  <div className="text-blue-100 text-sm">Contatos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{analyticsData.videoPlays}</div>
                  <div className="text-blue-100 text-sm">Vídeos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{analyticsData.galleryViews}</div>
                  <div className="text-blue-100 text-sm">Galeria</div>
                </div>
              </div>
            </div>

            {/* Métricas Secundárias */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <span className="text-2xl">🖼️</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Visualizações da Galeria</p>
                    <p className="text-2xl font-bold text-gray-900">{analyticsData.galleryViews.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <span className="text-2xl">🔐</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Acessos ao Admin</p>
                    <p className="text-2xl font-bold text-gray-900">{analyticsData.adminAccesses.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Tempo Médio</p>
                    <p className="text-2xl font-bold text-gray-900">{formatTime(analyticsData.averageSessionDuration)}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Taxa de Rejeição</p>
                    <p className="text-2xl font-bold text-gray-900">{formatPercentage(analyticsData.bounceRate)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts and Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Pages */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Páginas Mais Visitadas</h3>
                <div className="space-y-3">
                  {analyticsData.topPages.map((page, index) => (
                    <div key={page.page} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{page.page}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{page.views.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Types */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Dispositivos</h3>
                <div className="space-y-4">
                  {analyticsData.deviceTypes.map((device) => (
                    <div key={device.device}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {device.device === 'Mobile' && <Smartphone className="w-4 h-4 text-gray-400 mr-2" />}
                          {device.device === 'Desktop' && <Monitor className="w-4 h-4 text-gray-400 mr-2" />}
                          {device.device === 'Tablet' && <Smartphone className="w-4 h-4 text-gray-400 mr-2" />}
                          <span className="text-gray-700">{device.device}</span>
                        </div>
                        <span className="font-semibold text-gray-900">{formatPercentage(device.percentage)}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full"
                          style={{ width: `${device.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Click Events */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Eventos de Clique</h3>
                <div className="space-y-3">
                  {analyticsData.clickEvents.map((event) => (
                    <div key={event.element} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MousePointer className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-gray-700">{event.element}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{event.clicks.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* User Origins */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Origem dos Visitantes</h3>
                <div className="space-y-3">
                  {analyticsData.userOrigins.map((origin) => (
                    <div key={origin.origin} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">
                          {origin.origin === 'Google' && '🔍'}
                          {origin.origin === 'Facebook' && '📘'}
                          {origin.origin === 'Instagram' && '📷'}
                          {origin.origin === 'WhatsApp' && '💬'}
                          {origin.origin === 'YouTube' && '📺'}
                          {origin.origin === 'LinkedIn' && '💼'}
                          {origin.origin === 'Twitter' && '🐦'}
                          {origin.origin === 'Bing' && '🔍'}
                          {origin.origin === 'Yahoo' && '🔍'}
                          {origin.origin === 'direct' && '🌐'}
                          {origin.origin === 'other' && '🔗'}
                        </span>
                        <span className="text-gray-700">{origin.origin}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{origin.count.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Methods */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Métodos de Contato</h3>
                <div className="space-y-3">
                  {analyticsData.contactMethods.map((method) => (
                    <div key={method.method} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">
                          {method.method === 'whatsapp' && '💬'}
                          {method.method === 'phone' && '📞'}
                          {method.method === 'email' && '📧'}
                          {method.method === 'admin' && '🔐'}
                          {!['whatsapp', 'phone', 'email', 'admin'].includes(method.method) && '📱'}
                        </span>
                        <span className="text-gray-700">
                          {method.method === 'whatsapp' && 'WhatsApp'}
                          {method.method === 'phone' && 'Telefone'}
                          {method.method === 'email' && 'Email'}
                          {method.method === 'admin' && 'Acesso Admin'}
                          {method.method === 'unknown' && 'Desconhecido'}
                          {!['whatsapp', 'phone', 'email', 'admin', 'unknown'].includes(method.method) && method.method}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900">{method.count.toLocaleString()}</span>
                    </div>
                  ))}
                  {analyticsData.contactMethods.length === 0 && (
                    <div className="text-center text-gray-500 py-4">
                      Nenhum contato registrado ainda
                    </div>
                  )}
                </div>
              </div>

              {/* Locations */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Localização dos Visitantes</h3>
                <div className="space-y-3">
                  {analyticsData.locations.map((location) => (
                    <div key={location.location} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-gray-700">{location.location}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{location.visitors.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time on Page */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tempo nas Páginas</h3>
                <div className="space-y-3">
                  {analyticsData.timeOnPage.map((page) => (
                    <div key={page.page} className="flex items-center justify-between">
                      <span className="text-gray-700">{page.page}</span>
                      <span className="font-semibold text-gray-900">{formatTime(page.time)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Visitors Chart */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Visitantes Diários</h3>
                <div className="h-48 flex items-end justify-between space-x-1">
                  {analyticsData.dailyVisitors.map((day) => (
                    <div key={day.date} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-primary-600 rounded-t"
                        style={{ height: `${(day.visitors / 100) * 100}%` }}
                      />
                      <span className="text-xs text-gray-500 mt-1">
                        {new Date(day.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hourly Activity */}
            <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividade por Hora</h3>
              <div className="h-32 flex items-end justify-between space-x-1">
                {analyticsData.hourlyActivity.map((hour) => (
                  <div key={hour.hour} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-green-500 rounded-t"
                      style={{ height: `${(hour.activity / 60) * 100}%` }}
                    />
                    <span className="text-xs text-gray-500 mt-1">{hour.hour}h</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white rounded-xl shadow-sm p-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Nenhum Dado Disponível</h3>
              <p className="text-gray-600 mb-6">
                Ainda não há dados de analytics coletados. Os dados começaram a ser coletados quando você visitou o site.
              </p>
              <button
                onClick={loadAnalyticsData}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Verificar Novamente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 