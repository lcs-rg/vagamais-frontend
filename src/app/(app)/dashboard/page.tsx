"use client"

import { useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"
import { Sparkles, ArrowRight } from "lucide-react"

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div
        className={cn(
          "rounded-3xl border bg-gradient-to-b from-teal-50 to-white p-8 shadow-sm",
        )}
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-teal-100 text-teal-500">
            <Sparkles className="size-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">
              Bem-vindo{user?.nome ? `, ${user.nome.split(" ")[0]}` : ""}!
            </h1>
            <p className="text-sm text-muted-foreground">
              Seu painel de análise de vagas está quase pronto.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex size-8 items-center justify-center rounded-full bg-teal-50 text-teal-500">
            <span className="text-xs font-semibold">1</span>
          </div>
          <h3 className="mt-3 text-sm font-semibold">Análise de vagas</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Importe uma vaga e receba um score de compatibilidade com seu perfil.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-600">
            Em breve
          </span>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex size-8 items-center justify-center rounded-full bg-teal-50 text-teal-500">
            <span className="text-xs font-semibold">2</span>
          </div>
          <h3 className="mt-3 text-sm font-semibold">Recomendações</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Receba vagas personalizadas baseadas no seu perfil e objetivos.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-600">
            Em breve
          </span>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex size-8 items-center justify-center rounded-full bg-teal-50 text-teal-500">
            <span className="text-xs font-semibold">3</span>
          </div>
          <h3 className="mt-3 text-sm font-semibold">Perfil profissional</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Complete seu perfil com skills e experiências para matches mais precisos.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-600">
            Em breve
          </span>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Próximos passos</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          O Vaga+ está em desenvolvimento. Em breve você poderá analisar vagas com IA e receber recomendações personalizadas.
        </p>

        <div className="mt-4 flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-3">
          <ArrowRight className="size-4 text-teal-500" />
          <p className="text-sm text-teal-700">
            Fique atento: a funcionalidade de análise de vagas com IA será liberada em breve!
          </p>
        </div>
      </div>
    </div>
  )
}
