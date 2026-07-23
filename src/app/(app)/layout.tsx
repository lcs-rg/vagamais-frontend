"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/features/auth/hooks/use-auth"
import { AppNavbar } from "@/features/layout/components/app-navbar"
import { Loader2 } from "lucide-react"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { authenticated, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !authenticated) {
      router.push("/login")
    }
  }, [authenticated, loading, router])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="size-8 animate-spin text-teal-500" />
      </div>
    )
  }

  if (!authenticated) return null

  return (
    <>
      <AppNavbar />
      <main className="flex-1">{children}</main>
    </>
  )
}
