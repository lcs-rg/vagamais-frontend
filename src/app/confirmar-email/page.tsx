"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { confirmEmail } from "@/features/auth/services/auth.service"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"

function ConfirmarEmailContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    token ? "loading" : "error"
  )
  const [message, setMessage] = useState(
    token ? "" : "Token de confirmação não encontrado."
  )

  useEffect(() => {
    if (!token) return

    confirmEmail(token)
      .then(() => {
        setStatus("success")
        setMessage("Email confirmado com sucesso!")
      })
      .catch((err) => {
        setStatus("error")
        setMessage(err instanceof Error ? err.message : "Token inválido ou expirado.")
      })
  }, [token])

  if (status === "loading") {
    return (
      <>
        <Loader2 className="mx-auto size-8 animate-spin text-teal-500" />
        <h1 className="mt-4 text-xl font-semibold">Confirmando email...</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Aguarde um momento enquanto verificamos seu token.
        </p>
      </>
    )
  }

  if (status === "success") {
    return (
      <>
        <CheckCircle2 className="mx-auto size-12 text-emerald-500" />
        <h1 className="mt-4 text-xl font-semibold text-emerald-700">
          Email confirmado!
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{message}</p>
        <Link
          href="/login"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-2 text-sm font-medium text-white shadow hover:bg-neutral-800 transition-colors"
        >
          Ir para o login
        </Link>
      </>
    )
  }

  return (
    <>
      <XCircle className="mx-auto size-12 text-destructive" />
      <h1 className="mt-4 text-xl font-semibold text-destructive">
        Erro na confirmação
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">{message}</p>
      <Link
        href="/login"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-2 text-sm font-medium text-white shadow hover:bg-neutral-800 transition-colors"
      >
        Ir para o login
      </Link>
    </>
  )
}

export default function ConfirmarEmailPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50 via-teal-50/60 to-emerald-50" />

      <div className="mx-auto w-full max-w-md px-4 py-16">
        <div className="rounded-2xl border bg-white p-8 text-center shadow-sm">
          <Suspense
            fallback={
              <>
                <Loader2 className="mx-auto size-8 animate-spin text-teal-500" />
                <h1 className="mt-4 text-xl font-semibold">Carregando...</h1>
              </>
            }
          >
            <ConfirmarEmailContent />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
