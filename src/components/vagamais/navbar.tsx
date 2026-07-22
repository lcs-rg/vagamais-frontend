"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <header>
      <nav
        className={cn(
          "mx-auto mt-2 flex items-center justify-between gap-3",
          "rounded-full border bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md",
          "dark:bg-black/30",
        )}
        aria-label="Primary"
      >
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-sky-500 text-white text-xs font-semibold">
            {"✺"}
          </div>
          <span className="font-semibold">Vaga+</span>
        </div>

        <ul className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <li>
            <Link href="#features" className="transition-colors hover:text-foreground">
              Funcionalidades
            </Link>
          </li>
          <li>
            <Link href="#how-it-works" className="transition-colors hover:text-foreground">
              Como funciona
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="transition-colors hover:text-foreground">
              Preços
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:inline"
          >
            Entrar
          </Link>
          <Button
            asChild
            size="sm"
            className={cn(
              "rounded-full px-4",
              "bg-neutral-900 hover:bg-neutral-800 text-white",
              "shadow-[inset_0_1px_0_0_rgba(255,255,255,.15)]",
            )}
          >
            <Link href="/cadastro" aria-label="Começar grátis no Vaga+">
              <span className="mr-1">Começar grátis</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
