import { ADMIN_CREDENTIALS } from './config'

interface AuthCredentials {
  username: string
  password: string
}

class Auth {
  private static readonly CREDENTIALS: AuthCredentials = ADMIN_CREDENTIALS

  private static readonly SESSION_KEY = 'vivendas_admin_session'

  static login(username: string, password: string): boolean {
    if (username === this.CREDENTIALS.username && password === this.CREDENTIALS.password) {
      // Criar sessão válida por 24 horas
      const session = {
        token: this.generateToken(),
        expiresAt: Date.now() + (24 * 60 * 60 * 1000), // 24 horas
        username: username
      }
      
      if (typeof window !== 'undefined') {
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(session))
      }
      
      return true
    }
    return false
  }

  static logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.SESSION_KEY)
    }
  }

  static isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false

    const sessionData = localStorage.getItem(this.SESSION_KEY)
    if (!sessionData) return false

    try {
      const session = JSON.parse(sessionData)
      
      // Verificar se a sessão não expirou
      if (session.expiresAt < Date.now()) {
        this.logout()
        return false
      }

      return true
    } catch {
      this.logout()
      return false
    }
  }

  static getCurrentUser(): string | null {
    if (typeof window === 'undefined') return null

    const sessionData = localStorage.getItem(this.SESSION_KEY)
    if (!sessionData) return null

    try {
      const session = JSON.parse(sessionData)
      return session.username
    } catch {
      return null
    }
  }

  private static generateToken(): string {
    return 'token_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now()
  }
}

export default Auth 