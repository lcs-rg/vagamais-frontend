import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const protectedRoutes = ["/dashboard"]

function decodeJwtPayload(token: string): Record<string, unknown> | null {
  try {
    const parts = token.split(".")
    if (parts.length !== 3) return null
    const payload = Buffer.from(parts[1], "base64url").toString("utf-8")
    return JSON.parse(payload)
  } catch {
    return null
  }
}

function isTokenValid(token: string): boolean {
  const payload = decodeJwtPayload(token)
  if (!payload) return false
  if (payload.type !== "access") return false
  const exp = payload.exp as number
  if (!exp || Date.now() >= exp * 1000) return false
  return true
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )

  if (!isProtected) return NextResponse.next()

  const tokenCookie = request.cookies.get("access_token")?.value

  if (!tokenCookie || !isTokenValid(tokenCookie)) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    const res = NextResponse.redirect(loginUrl)
    res.cookies.delete("access_token")
    return res
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
