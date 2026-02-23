import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  console.log("MIDDLEWARE V2 ACTIVE")

  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")

  if (!isAdminRoute) {
    return NextResponse.next()
  }

  const cookie = request.cookies.get("admin_auth")

  if (!cookie) {
    return NextResponse.redirect(new URL("/admin-login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/admin"],
}