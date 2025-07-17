'use client'

import { useEffect } from 'react'
import analytics from '@/lib/analytics'

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    analytics.init()
  }, [])

  return <>{children}</>
} 