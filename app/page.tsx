import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Location from '@/components/Location'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnalyticsProvider from '@/components/AnalyticsProvider'

export default function Home() {
  return (
    <AnalyticsProvider>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Features />
        <Location />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </AnalyticsProvider>
  )
} 