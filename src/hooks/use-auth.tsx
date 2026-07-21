"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react"
import type { User } from "@/types/auth"
import {
  getStoredUser,
  isAuthenticated,
  logout as authLogout,
  storeAuthResponse,
} from "@/lib/auth"

interface AuthContextType {
  user: User | null
  loading: boolean
  authenticated: boolean
  setUser: (user: User | null) => void
  handleAuthResponse: (res: { accessToken: string; refreshToken: string; user: User }) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  authenticated: false,
  setUser: () => {},
  handleAuthResponse: () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      return getStoredUser()
    }
    return null
  })

  const handleAuthResponse = useCallback(
    (res: { accessToken: string; refreshToken: string; user: User }) => {
      storeAuthResponse({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
        tokenType: "Bearer",
        expiresIn: 900,
        user: res.user,
      })
      setUser(res.user)
    },
    []
  )

  const handleLogout = useCallback(() => {
    authLogout()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading: false,
        authenticated: isAuthenticated(),
        setUser,
        handleAuthResponse,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
