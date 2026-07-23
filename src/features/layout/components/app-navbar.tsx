"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/features/auth/hooks/use-auth"
import { VagaMaisLogo } from "@/shared/ui/logo"
import { cn } from "@/shared/lib/utils"
import { LayoutDashboard } from "lucide-react"

export function AppNavbar() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  function handleLogout() {
    logout()
    router.push("/login")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <VagaMaisLogo />
          </Link>
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-1.5 text-sm font-medium transition-colors",
              pathname === "/dashboard"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <LayoutDashboard className="size-4" />
            Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {user && (
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {user.nome}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="rounded-full px-3 py-1.5 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  )
}
