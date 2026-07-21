import Link from "next/link"
import { cn } from "@/lib/utils"
import { FileText, Brain, Zap, Target } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Importe a vaga",
    description: "Cole o link ou faça upload da descrição da vaga que te interessa.",
  },
  {
    icon: Brain,
    title: "IA analisa",
    description: "Nossa IA compara a vaga com seu perfil, destacando compatibilidades e gaps.",
  },
  {
    icon: Target,
    title: "Match Score",
    description: "Receba uma nota de 0 a 100 mostrando o quanto você combina com a vaga.",
  },
  {
    icon: Zap,
    title: "Candidatura certeira",
    description: "Com os insights da IA, adapte seu currículo e se candidate com confiança.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <span
          className={cn(
            "inline-flex items-center rounded-full border bg-white/70 px-2.5 py-1 text-xs font-medium shadow-sm",
            "text-sky-600",
          )}
        >
          Como funciona
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">
          Do link da vaga ao match em segundos
        </h2>
        <p className="mt-2 text-muted-foreground">
          Quatro passos simples para transformar sua busca por vagas com o poder da IA.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="flex size-8 items-center justify-center rounded-full bg-sky-50 text-xs font-semibold text-sky-500">
              {i + 1}
            </div>
            <div className="mt-4 flex size-10 items-center justify-center rounded-lg bg-sky-50 text-sky-500">
              <step.icon className="size-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="#features"
          className={cn(
            "inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium",
            "border-foreground/10 bg-white/80 backdrop-blur hover:bg-muted",
          )}
        >
          Ver todas as funcionalidades
        </Link>
      </div>
    </section>
  )
}
