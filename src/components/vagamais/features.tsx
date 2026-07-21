import Link from "next/link"
import { cn } from "@/lib/utils"
import { Sparkles, TrendingUp, Shield } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Análise com IA",
    description:
      "Nossa IA analisa cada vaga e te mostra se ela combina com seu perfil, destacando pontos fortes e gaps.",
  },
  {
    icon: TrendingUp,
    title: "Recomendações inteligentes",
    description:
      "Receba vagas personalizadas baseadas nas suas habilidades, experiência e objetivos de carreira.",
  },
  {
    icon: Shield,
    title: "Match Score",
    description:
      "Veja uma pontuação de compatibilidade para cada vaga e entenda exatamente o que te aproxima ou distancia.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <span
          className={cn(
            "inline-flex items-center rounded-full border bg-white/70 px-2.5 py-1 text-xs font-medium shadow-sm",
            "text-sky-600",
          )}
        >
          Funcionalidades
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">
          Encontre a vaga ideal com inteligência artificial
        </h2>
        <p className="mt-2 text-muted-foreground">
          Chega de candidaturas no escuro. O Vaga+ analisa cada oportunidade e te mostra onde você tem mais chances.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex size-10 items-center justify-center rounded-lg bg-sky-50 text-sky-500">
              <feature.icon className="size-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/cadastro"
          className={cn(
            "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium",
            "bg-neutral-900 hover:bg-neutral-800 text-white shadow",
            "shadow-[inset_0_1px_0_rgba(255,255,255,.15)]",
          )}
        >
          Experimente grátis
        </Link>
      </div>
    </section>
  )
}
