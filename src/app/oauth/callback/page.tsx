"use client"

import { useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Loader2 } from "lucide-react"

function OAuthCallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { handleAuthResponse } = useAuth()

  const accessToken = searchParams.get("accessToken")
  const refreshToken = searchParams.get("refreshToken")
  const userId = searchParams.get("userId")
  const nome = searchParams.get("nome")
  const email = searchParams.get("email")

  const valid = !!(accessToken && refreshToken)

  useEffect(() => {
    if (!valid) {
      const t = setTimeout(() => router.push("/login"), 2000)
      return () => clearTimeout(t)
    }

    handleAuthResponse({
      accessToken: accessToken!,
      refreshToken: refreshToken!,
      user: {
        id: userId || "",
        nome: nome || "Usuário",
        email: email || "",
        emailVerificado: true,
        provider: "oauth",
      },
    })

    router.push("/dashboard")
  }, [accessToken, refreshToken, userId, nome, email, valid, handleAuthResponse, router])

  if (!valid) {
    return (
      <>
        <p className="text-sm text-destructive">
          Tokens de autenticação não encontrados.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Redirecionando para o login...
        </p>
      </>
    )
  }

  return (
    <>
      <Loader2 className="mx-auto size-8 animate-spin text-sky-500" />
      <h1 className="mt-4 text-xl font-semibold">Processando login...</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Você será redirecionado em instantes.
      </p>
    </>
  )
}

export default function OAuthCallbackPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-sky-50/60 to-cyan-50" />

      <div className="mx-auto w-full max-w-md px-4 py-16 text-center">
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <Suspense
            fallback={
              <>
                <Loader2 className="mx-auto size-8 animate-spin text-sky-500" />
                <h1 className="mt-4 text-xl font-semibold">Carregando...</h1>
              </>
            }
          >
            <OAuthCallbackContent />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
