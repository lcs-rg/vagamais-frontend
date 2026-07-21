import Link from "next/link"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-24 pt-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-sky-50/70 to-cyan-50/60" />

      <div className="absolute left-1/2 top-1/4 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-sky-200/25 blur-3xl" />

      <div
        className={cn(
          "relative mx-auto max-w-3xl rounded-3xl border border-sky-100/80 bg-white/60 p-12 shadow-lg backdrop-blur-sm",
        )}
      >
        <span
          className={cn(
            "inline-flex items-center rounded-full border border-sky-200/60 bg-white/80 px-3 py-1 text-xs font-medium shadow-sm",
            "text-sky-600",
          )}
        >
          ✺ Inteligência artificial para sua carreira
        </span>

        <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Encontre a vaga certa com o poder da{" "}
          <span className="text-sky-500">IA</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
          Analise vagas, compare com seu perfil e receba um score de
          compatibilidade. Chega de se candidatar no escuro — deixe a IA
          trabalhar por você.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/cadastro"
            className={cn(
              "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-all",
              "bg-neutral-900 hover:bg-neutral-800 text-white shadow-md",
              "shadow-[inset_0_1px_0_rgba(255,255,255,.15)]",
              "hover:-translate-y-0.5",
            )}
          >
            Começar agora
          </Link>
          <Link
            href="#features"
            className={cn(
              "inline-flex h-11 items-center justify-center rounded-full border px-6 text-sm font-medium transition-all",
              "border-sky-200/60 bg-white/80 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300",
            )}
          >
            Ver funcionalidades
          </Link>
        </div>
      </div>
    </section>
  )
}
