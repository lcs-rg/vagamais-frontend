import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "@/features/auth/types/auth.types"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"
const AUTH_URL = `${API_URL}/auth`

function getAccessToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("access_token")
}

function getRefreshToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("refresh_token")
}

function setCookie(name: string, value: string, days: number = 7): void {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`
}

function removeCookie(name: string): void {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
}

function storeAuthResponse(res: AuthResponse): void {
  localStorage.setItem("access_token", res.accessToken)
  localStorage.setItem("refresh_token", res.refreshToken)
  localStorage.setItem("user", JSON.stringify(res.user))
  setCookie("access_token", res.accessToken)
}

function clearAuthStorage(): void {
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")
  localStorage.removeItem("user")
  removeCookie("access_token")
}

export async function register(data: RegisterRequest): Promise<{ message: string }> {
  const res = await fetch(`${AUTH_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: "Erro ao cadastrar" }))
    throw new Error(err.message || "Erro ao cadastrar")
  }

  return res.json()
}

export async function login(data: LoginRequest): Promise<AuthResponse> {
  const res = await fetch(`${AUTH_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: "Email ou senha inválidos" }))
    throw new Error(err.message || "Email ou senha inválidos")
  }

  const authRes: AuthResponse = await res.json()
  storeAuthResponse(authRes)
  return authRes
}

export async function confirmEmail(token: string): Promise<void> {
  const res = await fetch(`${AUTH_URL}/confirm-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: "Token inválido ou expirado" }))
    throw new Error(err.message || "Token inválido ou expirado")
  }
}

export async function resendConfirmation(email: string): Promise<void> {
  const res = await fetch(`${AUTH_URL}/resend-confirmation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: "Erro ao reenviar confirmação" }))
    throw new Error(err.message || "Erro ao reenviar confirmação")
  }
}

export function getStoredUser() {
  if (typeof window === "undefined") return null
  const raw = localStorage.getItem("user")
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function isAuthenticated(): boolean {
  return !!getAccessToken()
}

export function logout(): void {
  clearAuthStorage()
  window.location.href = "/login"
}

export function getGoogleAuthUrl(): string {
  return `${API_URL}/oauth2/authorization/google`
}

export function getGithubAuthUrl(): string {
  return `${API_URL}/oauth2/authorization/github`
}

export function getLinkedinAuthUrl(): string {
  return `${API_URL}/oauth2/authorization/linkedin`
}

export { getAccessToken, getRefreshToken, storeAuthResponse, clearAuthStorage }
