"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { VagaMaisLogo } from "./logo"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className={cn(
          "mx-auto mt-3 flex max-w-6xl items-center justify-between gap-3 px-4",
          "rounded-full border border-sky-100/80 bg-white/70 px-5 py-2.5 shadow-md backdrop-blur-xl",
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <VagaMaisLogo />
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
          <a
            href="#features"
            className="hover:text-sky-600 transition-colors"
          >
            Funcionalidades
          </a>
          <a
            href="#how-it-works"
            className="hover:text-sky-600 transition-colors"
          >
            Como funciona
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className={cn(
              "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium",
              "text-muted-foreground hover:text-sky-600 transition-colors",
            )}
          >
            Entrar
          </Link>
          <Link
            href="/cadastro"
            className={cn(
              "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-all",
              "bg-neutral-900 text-white shadow-md hover:bg-neutral-800",
              "shadow-[inset_0_1px_0_rgba(255,255,255,.15)]",
              "hover:-translate-y-0.5",
            )}
          >
            Começar grátis
          </Link>
        </div>
      </nav>
    </header>
  )
}
