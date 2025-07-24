'use client'
import { createContext, useContext, useState } from 'react'

const PasswordContext = createContext<{
  isAuthenticated: boolean
  authenticate: (password: string) => boolean
}>({
  isAuthenticated: false,
  authenticate: () => false
})

export function PasswordProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  const authenticate = (password: string) => {
    if (password === 'Innov4tion') {
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  return (
    <PasswordContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </PasswordContext.Provider>
  )
}

export const usePassword = () => useContext(PasswordContext)