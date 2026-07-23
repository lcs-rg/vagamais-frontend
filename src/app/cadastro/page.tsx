"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { cn } from "@/shared/lib/utils"
import { register } from "@/features/auth/services/auth.service"
import type { RegisterRequest } from "@/features/auth/types/auth.types"

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  function validate(): string | null {
    if (form.senha.length < 8) return "A senha deve ter pelo menos 8 caracteres"
    if (!/[A-Z]/.test(form.senha)) return "A senha deve conter pelo menos uma letra maiúscula"
    if (!/[0-9]/.test(form.senha)) return "A senha deve conter pelo menos um número"
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(form.senha))
      return "A senha deve conter pelo menos um caractere especial"
    if (form.senha !== form.confirmarSenha) return "As senhas não coincidem"
    return null
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)

    try {
      const data: RegisterRequest = {
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      }
      await register(data)
      setSuccess(true)
      setTimeout(() => router.push("/login"), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao cadastrar")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50 via-teal-50/60 to-emerald-50" />

      <div className="mx-auto w-full max-w-md px-4 py-16">
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <div className="mb-6 flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">
                ✺
              </span>
              <span className="text-base font-semibold tracking-tight">Vaga+</span>
            </Link>
          </div>

          <h1 className="text-center text-2xl font-semibold tracking-tight">
            Criar sua conta
          </h1>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            Comece a analisar vagas com IA gratuitamente.
          </p>

          {success ? (
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-sm text-emerald-700">
              Conta criada com sucesso! Redirecionando para o login...
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
              <div>
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={(e) => handleChange("nome", e.target.value)}
                  required
                  minLength={2}
                  maxLength={100}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="senha">Senha</Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder="Mínimo 8 caracteres"
                  value={form.senha}
                  onChange={(e) => handleChange("senha", e.target.value)}
                  required
                  minLength={8}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="confirmarSenha">Confirmar senha</Label>
                <Input
                  id="confirmarSenha"
                  type="password"
                  placeholder="Repita a senha"
                  value={form.confirmarSenha}
                  onChange={(e) => handleChange("confirmarSenha", e.target.value)}
                  required
                  minLength={8}
                  className="mt-1"
                />
              </div>

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className={cn(
                  "mt-2 rounded-full",
                  "bg-neutral-900 hover:bg-neutral-800 text-white shadow",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,.15)]",
                )}
              >
                {loading ? "Criando conta..." : "Criar conta"}
              </Button>
            </form>
          )}

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Já tem conta?{" "}
            <Link
              href="/login"
              className="font-medium text-teal-600 hover:text-teal-500"
            >
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
