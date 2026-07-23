export interface AreaAtuacao {
  id: number
  nome: string
  slug: string
  descricao?: string
}

export interface User {
  id: string
  nome: string
  email: string
  emailVerificado: boolean
  provider: string
  areaAtuacao?: AreaAtuacao
}

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  tokenType: string
  expiresIn: number
  user: User
}

export interface RegisterRequest {
  nome: string
  email: string
  senha: string
  dataNascimento?: string
  telefone?: string
  linkedin?: string
  areaAtuacaoId?: number
}

export interface LoginRequest {
  email: string
  senha: string
}
